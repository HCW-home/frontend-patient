import {Component, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {ConsultationService} from "../shared/services/consultation.service";
import {CloseConsultationComponent} from "../shared/components/close-consultation/close-consultation.component";
import {ModalController} from "@ionic/angular";
import {Subscription} from "rxjs";
import {SocketEventsService} from "../socket-events.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnDestroy {
    private subscriptions: Array<Subscription> = [];
    currentConsultation: any;
    activeCount: number = 0;
    closedCount: number = 0;
    consultations:any[]  = [];
    closedConsultations:any[]  = [];

    constructor(
        private consultationService: ConsultationService,
        private router: Router,
        public modalController: ModalController,
        private _socketEventsService: SocketEventsService,
    ) { }

    ionViewDidEnter() {
        this.getConsultations();
        this.listenToNewMessages();

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

    resume(event,consultation){
        event.stopPropagation();
        localStorage.setItem('currentConsultation', consultation._id);
        this.router.navigate([`/consultation/${consultation._id}`])
    }

    async showCancelModal(event,consultation) {
        event.stopPropagation();
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

    listenToNewMessages() {
        this.subscriptions.push(
            this._socketEventsService.onMessage().subscribe((msg) => {
                if (this.consultations.some((item) => item._id === msg.data.consultation)) {
                    this.getConsultations();
                }
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onConsultationAccepted().subscribe((event) => {
                if (this.consultations.some((item) => item._id === event.data._id)) {
                    this.getConsultations();
                }
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onConsultationClosed().subscribe((event) => {
                if (this.consultations.some((item) => item._id === event.data._id)) {
                    this.getConsultations();
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    onCloseConsultation(event) {
        this.currentConsultation = null;
        if (event) {
            this.getConsultations();
        }
    }

    protected readonly onclose = onclose;
}
