import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {CloseConsultationComponent} from "../close-consultation/close-consultation.component";
import {ModalController} from "@ionic/angular";
import {ConfigService} from "../../../services/config.service";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(
      public configService: ConfigService,
      private router: Router,
      public modalController: ModalController,
    ) { }

  @Input() consultation: any;
  @Output() close = new EventEmitter();
  @Output() updateFeedback = new EventEmitter();


  ngOnInit() {
  }

  onClose(event) {
    event.stopPropagation();
    if (event.target.id !== 'overlay') { return; }
    this.close.emit(null);
  }

  closeOverlay() {
    this.close.emit(null);
  }

  async showCancelModal(event) {
    event.stopPropagation();
    const modal = await this.modalController.create({
      component: CloseConsultationComponent,
      componentProps: { consultationId: this.consultation._id },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.close.emit(true);
    }
  }


  resumeConsultation() {
    this.close.emit(null);
    this.router.navigate(['/consultation/' + this.consultation._id]);
  }

  updateConsultation() {
    this.updateFeedback.emit(true)
  }

}

