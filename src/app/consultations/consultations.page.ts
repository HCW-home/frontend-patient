import { Component, OnInit, NgZone, Directive  } from '@angular/core';
import { ConsultationService } from '../consultation.service';
import { ActivatedRoute } from '@angular/router';

import { zip } from 'rxjs';



@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.page.html',
  styleUrls: ['./consultations.page.scss'],
})
export class ConsultationsPage implements OnInit {
  overviewSub;
  consultations
  status
  unreadCount
  subscriptions = []
  constructor(private consultationService: ConsultationService, private zone: NgZone, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.status = this.activatedRoute.snapshot.data.status;
    // this.title = this.titles.find(t => this.status.split('|').includes(t.status ));
    this.getConsultations();
    this.getUnreadCount();
  }

  getConsultations() {
    this.overviewSub = this.consultationService.getConsultationsOverview().subscribe(consultations => {
      this.zone.run(() => {
        this.consultations = consultations.filter(c => this.status.split('|').includes(c.consultation.status));
        console.log('consultations', this.consultations)
      });
    });
  }

  getUnreadCount() {

    if (this.status === 'pending|active') {

      this.subscriptions.push(zip(this.consultationService.unreadActiveCount(), this.consultationService.unreadPendingCount()).subscribe(count => {
        console.log('restuls ', count)
        this.zone.run(() => {
          this.unreadCount = count[0] + count[1];
        });
      }));
    }

    if (this.status === 'closed') {

      this.subscriptions.push(this.consultationService.unreadClosedCount().subscribe(count => {
        this.zone.run(() => {
          this.unreadCount = count;
        });
      }));
    }

  }

}
