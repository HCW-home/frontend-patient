import {Component, NgZone, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {ConsultationService} from "../shared/services/consultation.service";
import {CloseConsultationComponent} from "../shared/components/close-consultation/close-consultation.component";
import {ModalController, Platform} from "@ionic/angular";
import {Subscription} from "rxjs";
import {SocketEventsService} from "../socket-events.service";
import {NativeAudio} from "@capacitor-community/native-audio";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.page.html",
    styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnDestroy {
    noMessageText: string = '<No Message>';

    private subscriptions: Array<Subscription> = [];
    loading: boolean = true;
    ringingConsultation: any;
    currentConsultation: any;
    activeCount: number = 0;
    closedCount: number = 0;
    consultations: any[] = [];
    closedConsultations: any[] = [];

    callRunning = false;
    ongoingCall = null;
    shouldJoinCall = false;


    constructor(
        private consultationService: ConsultationService,
        private router: Router,
        public modalController: ModalController,
        private platformService: Platform,
        private _socketEventsService: SocketEventsService,
        private zone: NgZone,
    ) {
    }

    ionViewDidEnter() {
        this.loading = true;
        this.getConsultations();
        this.listenToNewMessages();
        this.listenToCallEvents();
    }

    getConsultations() {
        this.consultationService.getConsultations().subscribe((res) => {
            const activeConsultations = res.filter(c => c.consultation.status === "active" || c.consultation.status === "pending");
            const closedConsultations = res.filter(c => c.consultation.status === "closed");
            this.activeCount = activeConsultations.length;
            this.closedCount = closedConsultations.length;
            this.consultations = activeConsultations;
            this.closedConsultations = closedConsultations;
            this.loading = false;
        }, error => {
            console.log(error, "error");
        });
    }

    requestConsultation() {
        this.router.navigate(["/request-consultation"]);
    }

    resume(event, consultation) {
        event.stopPropagation();
        localStorage.setItem("currentConsultation", consultation._id);
        this.router.navigate([`/consultation/${consultation._id}`]);
    }

    async showCancelModal(event, consultation) {
        event.stopPropagation();
        const modal = await this.modalController.create({
            component: CloseConsultationComponent,
            componentProps: {consultationId: consultation._id},
        });
        await modal.present();
        const {data} = await modal.onDidDismiss();
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

    listenToCallEvents() {
        this.subscriptions.push(
            this._socketEventsService.onRejectCall().subscribe((event) => {
                console.log('Event onRejectCall');
                // const message = this.chatMessages.find(
                //     (msg) => msg.id === event.data.message.id
                // );
                // console.log("video message ", message);
                // if (message) {
                //     message.closedAt = new Date();
                // }
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onAcceptCall().subscribe((event) => {
                console.log('Event onAcceptCall');
                // const message = this.chatMessages.find(
                //     (msg) => msg.id === event.data.message.id
                // );
                // if (message) {
                //     message.acceptedAt = new Date();
                // }
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onCall().subscribe((e) => {
                console.log("Calll ", e, 'e');

                this.ringing();
                this.zone.run(() => {
                    console.log("get call 1", e);
                    this.callRunning = true;
                    this.ongoingCall = e.data.msg;
                    this.ringingConsultation = e.data.consultation;
                    this.shouldJoinCall = false;
                });
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onEndCall().subscribe((e) => {
                console.log("End Calll ", e);

                this.zone.run(() => {
                    console.log("get call 2", e);
                    this.callRunning = false;
                    this.ongoingCall = null;
                    this.shouldJoinCall = false;
                    this.ringingConsultation = null;
                });
            })
        );
    }

    ringing() {
        this.platformService
            .ready()
            .then(() => {
                console.log("RINGING NOW", NativeAudio.loop);
                NativeAudio.play({assetId: "ringSound", time: 0});
                return NativeAudio.loop({assetId: "ringSound"});
            })
            .then(
                (res) => {
                },
                (err) => {
                    console.log("error ", err);
                }
            );
    }

    hangup() {
        this.zone.run(() => {
            NativeAudio.stop({assetId: "ringSound"});
            this.callRunning = false;
            this.shouldJoinCall = false;
            this.ringingConsultation = null;
        });
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

    onSelectConsultation(consultation) {
        if (this.platformService.is("mobileweb")) {
            localStorage.setItem("currentConsultation", consultation._id);
            this.router.navigate([`/consultation/${consultation._id}`]);
        } else {
            this.currentConsultation = consultation;
        }
    }

    onSelectClosedConsultation(consultation) {
        if (this.platformService.is("mobileweb")) {
            localStorage.setItem("currentConsultation", consultation._id);
            this.router.navigate([`/consultation/${consultation._id}`]);
        } else {
            this.currentConsultation = consultation;
        }
    }

    protected readonly onclose = onclose;
}
