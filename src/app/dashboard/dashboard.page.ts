import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ConsultationService} from "../shared/services/consultation.service";
import {CloseConsultationComponent} from "../shared/components/close-consultation/close-consultation.component";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage  {
    activeCount: number = 0;
    closedCount: number = 0;
    consultations:any[]  = [];
    closedConsultations:any[]  = [];
    constructor(
        private consultationService: ConsultationService,
        private router: Router,
        public modalController: ModalController,
    ) { }

    ionViewWillEnter() {
        this.getConsultations();
    }

    getConsultations() {
        this.consultationService.getConsultations().subscribe((res) => {
            const activeConsultations = res.filter(c => c.consultation.status === 'active' || c.consultation.status === 'pending');
            const closedConsultations = res.filter(c => c.consultation.status === 'closed');
            this.activeCount = activeConsultations.length;
            this.closedCount = closedConsultations.length;
            this.consultations = activeConsultations;
            this.closedConsultations = closedConsultations;
        }, error => {
            console.log(error, 'error');
        })
    }

    requestConsultation() {
        this.router.navigate(['/request-consultation'])
    }

    resume(consultation){
        localStorage.setItem('currentConsultation', consultation._id);
        this.router.navigate([`/consultation/${consultation._id}`])
    }

    async showCancelModal(consultation) {
        const modal = await this.modalController.create({
            component: CloseConsultationComponent,
            componentProps: { consultationId: consultation._id },
        });
         await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data) {
            this.getConsultations();
        }
    }
}
