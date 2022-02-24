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

import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ThrowStmt } from '@angular/compiler';
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
    private backgroundMode: BackgroundMode,
    private router: Router,
    private globalVariableService: GlobalVariableService,
    private platform:Platform
  ) {

  }

  init(currentUser) {

    console.log('init consultations');
    this.currentUser = currentUser;

    this.socketEventsService.onMessage().subscribe(msg => {
      console.log('new message ');
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
      console.log('New consultation EVvent ', event)
      // this.consultationsOverview.find(c=> c.)
      this.consultationsOverview.push(event.data)
      this.consultationsOverviewSub.next(this.consultationsOverview)

    })


    this.backgroundMode.on('deactivate').subscribe(() => {
      console.log('background mode deactivated ');
      this.backgroundConsultationSubscription.unsubscribe();
      clearTimeout(this.backgroundNoConstellationsTimerId);
      // this.backgroundNoConstellationsTimerId = null;
    });
  }

  fetchConsultations() {
    return this.http.get<any[]>(this.globalVariableService.getApiPath() + '/consultations-overview').pipe(tap(consultations => {
      console.log('got consultation overview ', consultations);
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
            console.log('errro>> ', error, ' retry ', error.status, count);
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
      console.log('return con ', consultation);
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
      console.log('response ', r);
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
    console.log('delete consultation ', consultationId);
    return this.http.delete<any[]>(this.globalVariableService.getApiPath() + `/consultation/${consultationId}`).pipe(tap(res => {
      this.consultationsOverview = this.consultationsOverview.filter(c => c._id !== consultationId);
      this.consultationsOverviewSub.next(this.consultationsOverview);
    }));
  }

  postFile(blob: File, fileName, consultationId): Observable<any> {
  let file
    if (!blob.lastModified) {
      file = this.blobToFile(blob, fileName);
    } else {
      file = blob
    }
    console.log('file ', file.size);
    const endpoint = this.globalVariableService.getApiPath() + `/consultation/${consultationId}/upload-file`;
    const formData: FormData = new FormData();
    formData.append('attachment', file, file.name);
    return this.http
      .post(endpoint, formData, {
        headers: {
          'mime-type': file.type,
          'x-access-token': `${this.currentUser.token}`,
          fileName: file.name
        }
      });
  }

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
      console.log('return con ', consultation);
      return consultation ? consultation : null;
    }));


  }


}

