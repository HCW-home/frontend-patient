import { Platform } from '@ionic/angular';
import { GlobalVariableService } from './global-variable.service';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError, Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import {
  tap, map, filter, retryWhen,
  concatMap,
  delay
} from 'rxjs/operators';
import { SocketEventsService } from './socket-events.service';
import { Router } from '@angular/router';

declare let cordova: any;

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  consultationsOverview: Array<any> = [];
  unreadActiveSub: BehaviorSubject<number> = new BehaviorSubject(this.unreadSum('active'));
  unreadPendingSub: BehaviorSubject<number> = new BehaviorSubject(this.unreadSum('pending'));
  unreadClosedSub: BehaviorSubject<number> = new BehaviorSubject(this.unreadSum('closed'));

  consultationsOverviewSub: BehaviorSubject<any[]> = new BehaviorSubject(this.consultationsOverview);
  backgroundConsultationSubscription: Subscription;
  backgroundNoConstellationsTimerId;
  currentUser;
  constructor(
    private http: HttpClient,
    private socketEventsService: SocketEventsService,
    private router: Router,
    private globalVariableService: GlobalVariableService,
    private platform:Platform
  ) {

  }

  init(currentUser) {

    this.currentUser = currentUser;

    this.socketEventsService.onMessage().subscribe(msg => {
      const c = this.consultationsOverview.find(c => c._id === msg.data.consultation);
      c.lastMsg = msg.data;
      c.unreadCount++;
      this.updateUnreadCount();
      this.sortConsultations();
      this.consultationsOverviewSub.next(this.consultationsOverview);
    });
    this.socketEventsService.onConsultationAccepted().subscribe(event => {

      const consultation = this.consultationsOverview.find(c => c._id === event.data._id);

      if (consultation) {

        consultation.consultation.status = 'active';
        consultation.doctor = event.data.doctor;
        this.sortConsultations();
        this.consultationsOverviewSub.next(this.consultationsOverview);
      }

    });

    this.socketEventsService.onConsultationClosed().subscribe(event => {

      const consultation = this.consultationsOverview.find(c => c._id === event.data._id);

      if (consultation) {

        consultation.consultation.status = 'closed';
        this.sortConsultations();
        this.consultationsOverviewSub.next(this.consultationsOverview);
      }

    });



    this.fetchConsultations().subscribe(c => {
      this.sortConsultations();
      this.consultationsOverviewSub.next(this.consultationsOverview);
    });


    this.socketEventsService.onNewConsultation().subscribe(event => {
      this.consultationsOverview.push(event.data)
      this.consultationsOverviewSub.next(this.consultationsOverview)

    })

  }

  fetchConsultations() {
    return this.http.get<any[]>(this.globalVariableService.getApiPath() + '/consultations-overview').pipe(tap(consultations => {
      consultations.forEach(consultation => {
        if (consultation._id) {
          consultation.id = consultation._id
        }
      })
      this.consultationsOverview = consultations;
      this.updateUnreadCount();
    })).pipe(
      tap((ev) => {
        if (ev instanceof HttpResponse) {
          console.log('###processing response', ev);
        }
      }),
      retryWhen(errors => errors
        .pipe(
          concatMap((error, count) => {
            if (count < 5 && (error.status === 400 || error.status === 0 || error.status === 503)) {
              return of(error.status);
            }

            throwError(error);
          }),
          delay(1000)
        )

      ))
  }

  createConsultation(consultation): Observable<any> {

    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/consultation`, consultation).pipe(tap(c => {
      if (c) { this.consultationsOverview.push({ consultation: c, _id: c.id }) };
    }));
  }

  getConsultationsOverview(): BehaviorSubject<any> {

    return this.consultationsOverviewSub;
  }

  getConsultation(id): Observable<any> {

    return this.fetchConsultations().pipe(map(() => {
      const consultation = this.consultationsOverview.find(c => c._id === id);
      if (consultation._id) {
        consultation.id = consultation._id
      }
      return consultation ? consultation : null;
    }));
  }

  cancelConsultation(id): Observable<any> {
    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/consultation/${id}/cancel`, null).pipe(tap(res => {
      this.consultationsOverview.forEach(c => {
        if (c._id === id) {
          c.consultation.status = 'canceled';
        }
      });
      this.consultationsOverviewSub.next(this.consultationsOverview);
      this.updateUnreadCount();

    }));
  }
  readMessages(consultationId) {

    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/consultation/${consultationId}/read-messages`, {}).subscribe(r => {
      const c = this.consultationsOverview.find(c => c._id === consultationId);
      c.unreadCount = 0;
      this.updateUnreadCount();
    });
  }

  unreadActiveCount(): BehaviorSubject<number> {
    return this.unreadActiveSub;
  }

  unreadPendingCount(): BehaviorSubject<number> {
    return this.unreadPendingSub;
  }
  unreadClosedCount(): BehaviorSubject<number> {
    return this.unreadClosedSub;
  }


  unreadSum(status) {
    return this.consultationsOverview.reduce((a, b) => {
      return (b.consultation.status === status) ? a + (b.unreadCount || 0) : a;
    }, 0);
  }

  updateUnreadCount() {
    this.unreadActiveSub.next(this.unreadSum('active'));
    this.unreadPendingSub.next(this.unreadSum('pending'));
    this.unreadClosedSub.next(this.unreadSum('closed'));
  }

  sortConsultations() {
    this.consultationsOverview = this.consultationsOverview.sort((b, a) => {
      return ((a.lastMsg) ? a.lastMsg.createdAt : a.consultation.createdAt) -
        ((b.lastMsg) ? b.lastMsg.createdAt : b.consultation.createdAt);
    });
  }

  deleteConsultation(consultationId) {
    return this.http.delete<any[]>(this.globalVariableService.getApiPath() + `/consultation/${consultationId}`).pipe(tap(res => {
      this.consultationsOverview = this.consultationsOverview.filter(c => c._id !== consultationId);
      this.consultationsOverviewSub.next(this.consultationsOverview);
    }));
  }

    postFile(blob: File, fileName, consultationId): Observable<any> {
        let file;
        if (!blob.lastModified) {
            file = this.blobToFile(blob, fileName);
        } else {
            file = blob;

        }
        const endpoint = this.globalVariableService.getApiPath() + `/consultation/${consultationId}/upload-file`;
        const formData: FormData = new FormData();
        if (file.changingThisBreaksApplicationSecurity !== undefined) {
        const { blobFile, type} = this.convertBase64ToBlob(file.changingThisBreaksApplicationSecurity) || {};
            formData.append("attachment", blobFile, file.name ? file.name : `image.${type}`);
            return this.http
                .post(endpoint, formData, {
                    headers: {
                        "x-access-token": `${this.currentUser.token}`,
                        fileName: file.name ? file.name : `image.${type}`
                    }
                });

        } else {

            const rawFile = new File([file], file.name, {
                type: file.mimeType,
            });

            formData.append("attachment", rawFile, file.name);
            return this.http
                .post(endpoint, formData, {
                    headers: {
                        "x-access-token": `${this.currentUser.token}`,
                        fileName: file.name
                    }
                });
        }


    }

  //! Convert our file from base64 to blob
  private convertBase64ToBlob(base64: string) {
    const info = this.getInfoFromBase64(base64);
    const sliceSize = 512;
    const byteCharacters = window.atob(info.rawBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }


    return { blobFile : new Blob(byteArrays, {type: info.mime}), type: info.mime?.split("/")?.pop()};
  }

  private getInfoFromBase64(base64: string) {
    const meta = base64.split(',')[0];
    const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
    const mime = /:([^;]+);/.exec(meta)[1];
    const extension = /\/([^;]+);/.exec(meta)[1];

    return {
      mime,
      extension,
      meta,
      rawBase64
    };
  }
  //! to here
  public blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    b.lastModifiedDate = new Date();
    b.name = fileName;
    return <File>theBlob;
  }

  /**
   * Saves the user feedback for a consultation.
   * @param consultationId The ID of the targeted consultation
   * @param rating The selected rating
   * @param comment The user comment
   */
  saveConsultationFeedback(consultationId, rating, comment): Observable<any> {
    return this.http.post<any[]>(this.globalVariableService.getApiPath() + `/consultation/${consultationId}/patientFeedback`, { consultationId, rating, comment });
  }

  getTranslatorOrGuestConsultation() {

    return this.fetchConsultations().pipe(map(() => {
      const consultation = this.currentUser.role === 'guest' ? this.consultationsOverview.find(c => c.consultation.guest === this.currentUser.id) :
        this.consultationsOverview.find(c => c.consultation.translator === this.currentUser.id);
      return consultation ? consultation : null;
    }));


  }

  downloadPdf(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
        tap(
            data => console.log('PDF downloaded successfully.'),
            error => console.error('Error downloading the file.'),
            () => console.info('Download completed.')
        )
    );
  }


}

