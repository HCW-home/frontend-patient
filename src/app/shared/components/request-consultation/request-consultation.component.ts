import { Component, OnInit, Directive  } from '@angular/core';
import { ConsultationService } from '../../../consultation.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


import { ModalController } from '@ionic/angular';

@Directive()
@Component({
  selector: 'app-request-consultation',
  templateUrl: './request-consultation.component.html',
  styleUrls: ['./request-consultation.component.scss']
})
export class RequestConsultationComponent implements OnInit {

  term1 = false;
  term2 = false;
  term3 = false;
  firstName = '@Home';
  lastName = '@Home';
  gender;
  birthDate = new Date('1960-06-15').toISOString();
  IMADTeam;
  constructor(private consultationService: ConsultationService, private router: Router,
    public modalController: ModalController,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  createConsultation() {

    if (this.term1 && this.term2 && this.term3) {
      this.consultationService.createConsultation({
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        birthDate: this.birthDate,
        IMADTeam: this.IMADTeam
      }).subscribe(res => {
        console.log('res ', res);
        this.modalController.dismiss();
        this.router.navigate(['/consultation/' + res.id]);


      }, err => {
        console.log(err);
        this.modalController.dismiss();
      });
    } else {
      console.log('you must accept all terms ');
    }
    console.log(this.term1,
      this.term2,
      this.term3,
      this.firstName,
      this.lastName,
      this.gender,
      this.birthDate,
      this.IMADTeam);
    // this.consultationService
  }
  dismiss() {
    this.modalController.dismiss();

  }

  strictIMAD(value) {
    // manually launch change detection
    console.log('changed ', value);
    this.cdRef.detectChanges();
    this.IMADTeam = String(value).length > 3 ? parseInt(String(value).substring(0, 3)) : value;
  }
}
