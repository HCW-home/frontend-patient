import {Component, NgZone, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {ConsultationService} from "../shared/services/consultation.service";
import {CloseConsultationComponent} from "../shared/components/close-consultation/close-consultation.component";
import {MenuController, ModalController, Platform} from "@ionic/angular";
import {Subscription} from "rxjs";
import {SocketEventsService} from "../services/socket-events.service";
import {NativeAudio} from "@capacitor-community/native-audio";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../auth/auth.service";
import {NurseService} from "../shared/services/nurse.service";
import {MessageService} from "../services/message.service";
import {ConfigService} from "../services/config.service";
import {DatePipe} from "@angular/common";
import {DurationPipe} from "../shared/pipes/duration.pipe";
import { jsPDF } from 'jspdf';
import {first} from "rxjs/operators";
import {GlobalVariableService} from "../services/global-variable.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.page.html",
    styleUrls: ["./dashboard.page.scss"],
    providers: [DatePipe, DurationPipe]
})
export class DashboardPage implements OnDestroy {
    private subscriptions: Array<Subscription> = [];
    currentUser: any;
    noMessageText: string;
    loading: boolean = true;
    ringingConsultation: any;
    callingDoctor: any;
    currentConsultation: any;
    activeCount: number = 0;
    closedCount: number = 0;
    consultations: any[] = [];
    closedConsultations: any[] = [];
    wide: boolean = false;
    callRunning = false;
    ongoingCall = null;
    shouldJoinCall = false;
    markdownExists: boolean = false;
    markdownUrl: string = 'assets/footer.md';
    currentLang: string = 'en';


    constructor(
        private zone: NgZone,
        private router: Router,
        private datePipe: DatePipe,
        private platform: Platform,
        private authService: AuthService,
        private platformService: Platform,
        private durationPipe: DurationPipe,
        private nurseService: NurseService,
        private translate: TranslateService,
        private configService: ConfigService,
        private messageService: MessageService,
        private menuController: MenuController,
        public modalController: ModalController,
        private consultationService: ConsultationService,
        private _socketEventsService: SocketEventsService,
        private globalVariableService: GlobalVariableService,
    ) {
        this.currentLang = this.translate.currentLang || 'en';
    }

    ionViewDidEnter() {
        this.checkAndReinitializeSocket();
        this.noMessageText = this.translate.instant("dashboard.no_message");
        this.loading = true;
        this.getConsultations();
        this.listenToNewMessages();
        this.listenToCallEvents();
        this.setWidth();
        this.listenToEvents();
        this.checkMarkdown();
    }

    setWidth() {
        if (this.platform.width() > 767) {
            this.wide = true;
            this.menuController.open();
        } else {
            this.wide = false;
            this.menuController.close();
        }
    };

    listenToEvents() {
        window.addEventListener('resize', () => {
            this.setWidth();
        });
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
            this._socketEventsService.onRejectCall().subscribe((event) => {})
        );
        this.subscriptions.push(
            this._socketEventsService.onAcceptCall().subscribe((event) => {})
        );
        this.subscriptions.push(
            this._socketEventsService.onCall().subscribe((e) => {
                this.ringing();
                this.zone.run(() => {
                    this.callRunning = true;
                    this.ongoingCall = e.data.msg;
                    this.ringingConsultation = e.data.consultation;
                    this.callingDoctor = e.data.user;
                    this.shouldJoinCall = false;
                });
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onEndCall().subscribe((e) => {

                this.zone.run(() => {
                    this.callRunning = false;
                    this.ongoingCall = null;
                    this.shouldJoinCall = false;
                    this.ringingConsultation = null;
                    this.callingDoctor = null;
                });
            })
        );
    }

    ringing() {
        this.platformService
            .ready()
            .then(() => {
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
            this.callingDoctor = null;
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

    onUpdateFeedback() {
        this.getConsultations();
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

    async checkAndReinitializeSocket() {
        this.currentUser = this.authService.currentUserValue;
        if (!this._socketEventsService.isSocketConnected()) {
            await this._socketEventsService.init(this.currentUser, () => {
            });
        }
    }

    checkMarkdown() {
        const langSpecificMarkdownUrl = `assets/footer.${this.currentLang}.md`;

        this.nurseService.checkMarkdownExists(langSpecificMarkdownUrl).subscribe({
            next: (res) => {
                this.markdownUrl = langSpecificMarkdownUrl;
                this.markdownExists = true;
            },
            error: (err) => {
                this.nurseService.checkMarkdownExists('assets/footer.md').subscribe({
                    next: (res) => {
                        this.markdownUrl = 'assets/footer.md';
                        this.markdownExists = true;
                    },
                    error: (err) => {
                        this.markdownExists = false;
                    }
                });
            }
        });
    }

    exportPDF(event, consultation) {
        event.stopPropagation();
        this.generatePDF(consultation.consultation, consultation.nurse);
    }

    getImageUrl(imageFile: Blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader.readAsDataURL(imageFile);
        });
    }

    adjustMsg(msg, consultationId) {
        return new Promise(resolve => {
            if (msg.type === 'attachment') {
                const requestUrl = `${this.globalVariableService.getApiPath()}/consultation/${consultationId}/attachment/${msg.id}`;
                const user = this.authService.currentUserValue;

                if (msg.mimeType.startsWith('image')) {
                    fetch(requestUrl, {
                        headers: {
                            'x-access-token': user.token,
                        },
                    })
                        .then(res => res.blob())
                        .then(async imageFile => {
                            msg.isImage = true;
                            msg.attachmentsURL = await this.getImageUrl(imageFile);
                            resolve(msg);
                        })
                        .catch(err => {
                            msg.attachmentsURL = null;
                            resolve(msg);
                        });
                } else if (msg.mimeType.startsWith('audio')) {
                    msg.isAudio = true;
                    resolve(msg);
                } else {
                    msg.attachmentsURL = requestUrl;
                    msg.isFile = true;
                    resolve(msg);
                }
            } else {
                resolve(msg);
            }
        });
    }


    generatePDF(data, nurse) {
        this.messageService
            .getAllConsultationMessages(data._id || data.id)
            .subscribe(async res => {
                res = res.reverse()
                const messages = await Promise.all(
                    res.map(m => this.adjustMsg(m, data._id || data.id))
                );
                const doc = new jsPDF();
                const pageWidth =
                    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                const imageUrl = this.configService.config?.logo;

                if (imageUrl) {
                    doc.addImage(
                        imageUrl,
                        'JPEG',
                        pageWidth / 2 - 25,
                        10,
                        50,
                        20,
                        'Logo',
                        'FAST'
                    );
                }

                const getLabelWidth = text => doc.getTextWidth(text) + 2;
                doc.setFont('Helvetica', 'normal', 400);
                doc.setFontSize(22);
                doc.text('Consultation report', 15, 40);
                doc.setFontSize(14);
                doc.setTextColor('#464F60');
                doc.text('Patient information', 15, 50);

                if (nurse?.firstName) {
                    doc.text('Requester information', 108, 50);
                }
                if (data.experts?.length) {
                    doc.text('Expert information', 108, 75);
                }

                doc.setFontSize(10);
                doc.setTextColor('#000');
                doc.setFont('Helvetica', 'normal', 700);
                doc.text('Firstname:', 15, 55);
                doc.text('Lastname:', 15, 60);
                doc.text('Gender:', 15, 65);
                doc.setFont('Helvetica', 'normal', 400);
                doc.text(`${data.firstName}`, 34, 55);
                doc.text(`${data.lastName}`, 34, 60);
                doc.text(`${data.gender}`, 30, 65);

                if (nurse?.firstName) {
                    doc.setFont('Helvetica', 'normal', 700);
                    doc.text(`Firstname:`, 108, 55);
                    doc.text(`Lastname:`, 108, 60);
                    doc.setFont('Helvetica', 'normal', 400);
                    doc.text(`${nurse.firstName}`, 127, 55);
                    doc.text(`${nurse.lastName}`, 127, 60);
                }

                if (data.experts?.length) {
                    let currentExpertPosition = 80;
                    data.experts.forEach(expert => {
                        doc.setFont('Helvetica', 'normal', 700);
                        doc.text(`Firstname:`, 108, currentExpertPosition);
                        doc.text(`Lastname:`, 108, currentExpertPosition + 5);
                        doc.setFont('Helvetica', 'normal', 400);
                        doc.text(`${expert.firstName}`, 127, currentExpertPosition);
                        doc.text(`${expert.lastName}`, 127, currentExpertPosition + 5);
                        currentExpertPosition += 10;
                    });
                }

                doc.setFontSize(14);
                doc.setTextColor('#464F60');
                doc.text('Consultation information', 15, 75);
                doc.setFontSize(10);
                doc.setTextColor('#000');
                doc.setFont('Helvetica', 'normal', 700);
                doc.text(`Start date/time:`, 15, 80);
                doc.text(`End date/time:`, 15, 85);
                doc.text(`Duration:`, 15, 90);
                doc.setFont('Helvetica', 'normal', 400);
                doc.text(
                    `${this.datePipe.transform(data.acceptedAt, 'd MMM yyyy HH:mm')}`,
                    15 + getLabelWidth(`Start date/time:`),
                    80
                );
                doc.text(
                    `${this.datePipe.transform(data.closedAt, 'd MMM yyyy HH:mm')}`,
                    15 + getLabelWidth(`End date/time:`),
                    85
                );
                doc.text(
                    `${this.durationPipe.transform(data.createdAt - data.closedAt)}`,
                    15 + getLabelWidth(`Duration:`),
                    90
                );

                let chatYPosition = 125;
                if (data.metadata && Object.keys(data.metadata).length) {
                    Object.keys(data.metadata).forEach((key, index) => {
                        doc.setFont('Helvetica', 'normal', 700);
                        doc.text(`${key}:`, 15, chatYPosition + index * 5);
                        const metadataX = 15 + getLabelWidth(`${key}:`);
                        doc.setFont('Helvetica', 'normal', 400);
                        doc.text(
                            `${data.metadata[key]}`,
                            metadataX,
                            chatYPosition + index * 5
                        );
                    });
                }

                doc.setFontSize(14);
                doc.setTextColor('#464F60');
                doc.text('Chat history', 15, chatYPosition + 30);
                chatYPosition += 40;

                for (const message of messages) {
                    doc.setFontSize(10);
                    doc.setTextColor('#000');
                    doc.setFont('Helvetica', 'normal', 700);

                    const firstName =
                        message.fromUserDetail.role === 'patient'
                            ? data?.firstName
                            : message.fromUserDetail.firstName || '';
                    const lastName =
                        message.fromUserDetail.role === 'patient'
                            ? data?.lastName
                            : message.fromUserDetail.lastName || '';
                    const date = this.datePipe.transform(
                        message.createdAt,
                        'dd LLL HH:mm'
                    );
                    doc.text(
                        `${firstName} ${lastName} (${message.fromUserDetail?.role}) - ${date}:`,
                        15,
                        chatYPosition
                    );

                    doc.setFont('Helvetica', 'normal', 400);
                    doc.setTextColor('#464F60');
                    chatYPosition += 5;

                    if (message.text) {
                        doc.text(message.text, 15, chatYPosition);
                        chatYPosition += 5;
                    }

                    let image = null;
                    if (message.isImage && message.attachmentsURL) {
                        await new Promise<void>(resolve => {
                            image = new Image();
                            image.src = message.attachmentsURL;
                            image.onload = () => {
                                const imgWidth = 50;
                                const imgHeight = (image.height / image.width) * imgWidth;
                                if (
                                    chatYPosition + imgHeight >
                                    doc.internal.pageSize.height - 10
                                ) {
                                    doc.addPage();
                                    chatYPosition = 10;
                                }
                                doc.addImage(
                                    message.attachmentsURL,
                                    'JPEG',
                                    15,
                                    chatYPosition,
                                    imgWidth,
                                    imgHeight,
                                    `${Math.random()}`,
                                    'FAST'
                                );
                                chatYPosition += imgHeight + 5;
                                resolve();
                            };
                            image.onerror = () => {
                                resolve();
                            };
                        });
                    }

                    if (message.isFile && message.fileName) {
                        doc.setFont('Helvetica', 'normal', 400);
                        doc.setTextColor('#464F60');
                        doc.text(`[File]: ${message.fileName}`, 15, chatYPosition);
                        chatYPosition += 5;
                    }

                }

                doc.save('consultation-report.pdf');
            });
    }


}
