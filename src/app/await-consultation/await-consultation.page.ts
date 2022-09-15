import { Subscription } from 'rxjs';
import { SocketEventsService } from './../socket-events.service';
import { Router } from '@angular/router';
import { ConsultationService } from './../consultation.service';
import { Component, OnInit, OnDestroy, Directive  } from '@angular/core';


@Directive()
@Component({
  selector: 'app-await-consultation',
  templateUrl: './await-consultation.page.html',
  styleUrls: ['./await-consultation.page.scss'],
})
export class AwaitConsultationPage implements OnInit, OnDestroy {

  consultation;
  subscriptions: Subscription[] = []
  constructor(
    private consultationService: ConsultationService,
    private router: Router,
    private socketEventsService: SocketEventsService


  ) { }

  ngOnInit() {

    this.subscriptions.push(this.consultationService.getTranslatorOrGuestConsultation().subscribe(consultation => {
      console.log('got consultation ', consultation)
      if (consultation) {

        this.consultation = consultation
        localStorage.setItem('currentConsultation', consultation._id);
        // localStorage.removeItem('inviteToken');
        this.router.navigate(['consultation', this.consultation._id]);
      }
    }))

    this.subscriptions.push(this.socketEventsService.onNewConsultation().subscribe(event => {
      console.log('New consultation EVvent ', event)
      this.consultation = event.data.consultation
      this.router.navigate(['consultation', this.consultation.id]);
    }))

  }

  ngOnDestroy() {

    this.subscriptions.forEach(s => s.unsubscribe())
  }


}
