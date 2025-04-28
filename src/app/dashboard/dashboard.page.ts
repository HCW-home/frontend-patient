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
                    res.map(m => this.adjustMsg(m, data._id || data.id)),
                );
                const doc = new jsPDF();
                const getLabelWidth = (text: string) => doc.getTextWidth(text) + 2;
                const pageWidth =
                    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                const pageHeight =
                    doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
                const imageUrl = this.configService.config?.logo;
                let yPosition = 10;

                const addPageIfNeeded = (lines = 1) => {
                    if (yPosition + lines * 5 > pageHeight - 10) {
                        doc.addPage();
                        yPosition = 10;
                    }
                };

                if (imageUrl) {
                    await new Promise<void>((resolve, reject) => {
                        const image = new Image();
                        image.crossOrigin = 'Anonymous';

                        const isSvg = imageUrl.toLowerCase().endsWith('.svg') || imageUrl.startsWith('data:image/svg+xml');

                        if (isSvg) {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');

                            image.onload = () => {
                                try {
                                    canvas.width = image.width || 200;
                                    canvas.height = image.height || 200;

                                    ctx.drawImage(image, 0, 0);

                                    const base64 = canvas.toDataURL('image/png');

                                    const imgWidth = 50;
                                    const imgHeight = (canvas.height / canvas.width) * imgWidth;

                                    doc.addImage(
                                        base64,
                                        'PNG',
                                        pageWidth / 2 - imgWidth / 2,
                                        yPosition,
                                        imgWidth,
                                        imgHeight,
                                        'Logo',
                                        'FAST',
                                    );
                                    yPosition += imgHeight + 10;
                                    resolve();
                                } catch (err) {
                                    console.error('SVG processing failed:', err);
                                    resolve();
                                }
                            };

                            image.onerror = () => {
                                console.error('Failed to load SVG:', imageUrl);
                                resolve();
                            };

                            image.src = imageUrl;
                        } else {
                            image.onload = () => {
                                try {
                                    const canvas = document.createElement('canvas');
                                    canvas.width = image.width;
                                    canvas.height = image.height;
                                    const ctx = canvas.getContext('2d');
                                    ctx.drawImage(image, 0, 0);
                                    const base64 = canvas.toDataURL('image/jpeg');

                                    const imgWidth = 50;
                                    const imgHeight = (image.height / image.width) * imgWidth;

                                    doc.addImage(
                                        base64,
                                        'JPEG',
                                        pageWidth / 2 - imgWidth / 2,
                                        yPosition,
                                        imgWidth,
                                        imgHeight,
                                        'Logo',
                                        'FAST',
                                    );
                                    yPosition += imgHeight + 10;
                                    resolve();
                                } catch (err) {
                                    console.error('Image processing failed:', err);
                                    resolve();
                                }
                            };

                            image.onerror = () => {
                                console.error('Failed to load image:', imageUrl);
                                resolve();
                            };

                            image.src = imageUrl;
                        }
                    });
                }

                doc.setFont('Helvetica', 'normal', 400);
                doc.setFontSize(22);
                doc.text('Consultation report', 15, yPosition);
                yPosition += 15;

                doc.setFontSize(14);
                doc.setTextColor('#464F60');
                yPosition += 10;
                doc.text('Patient information', 15, yPosition);
                yPosition += 10;

                doc.setFontSize(10);
                doc.setTextColor('#000');
                doc.setFont('Helvetica', 'normal', 700);
                doc.text('Firstname:', 15, yPosition);
                doc.text('Lastname:', 15, yPosition + 5);
                doc.text('Gender:', 15, yPosition + 10);
                doc.setFont('Helvetica', 'normal', 400);
                doc.text(`${data.firstName}`, 34, yPosition);
                doc.text(`${data.lastName}`, 34, yPosition + 5);
                doc.text(`${data.gender}`, 30, yPosition + 10);
                yPosition += 15;

                if (nurse?.firstName) {
                    doc.setFont('Helvetica', 'normal', 700);
                    yPosition += 10;
                    doc.text('Requester information', 108, yPosition);
                    yPosition += 5;
                    doc.text(`Firstname:`, 108, yPosition);
                    doc.text(`Lastname:`, 108, yPosition + 5);
                    doc.setFont('Helvetica', 'normal', 400);
                    doc.text(`${nurse.firstName}`, 127, yPosition);
                    doc.text(`${nurse.lastName}`, 127, yPosition + 5);
                    yPosition += 15;
                }

                if (data.experts?.length) {
                    doc.setFont('Helvetica', 'normal', 700);
                    yPosition += 10;
                    doc.text('Expert information', 108, yPosition);
                    yPosition += 5;
                    data.experts.forEach(expert => {
                        doc.text(`Firstname:`, 108, yPosition);
                        doc.text(`Lastname:`, 108, yPosition + 5);
                        doc.setFont('Helvetica', 'normal', 400);
                        doc.text(`${expert.firstName}`, 127, yPosition);
                        doc.text(`${expert.lastName}`, 127, yPosition + 5);
                        yPosition += 10;
                    });
                }

                doc.setFontSize(14);
                doc.setTextColor('#464F60');
                yPosition += 10;
                doc.text('Consultation information', 15, yPosition);
                yPosition += 10;
                doc.setFontSize(10);
                doc.setTextColor('#000');
                doc.setFont('Helvetica', 'normal', 700);
                doc.text(`Start date/time:`, 15, yPosition);
                doc.text(`End date/time:`, 15, yPosition + 5);
                doc.text(`Duration:`, 15, yPosition + 10);
                doc.setFont('Helvetica', 'normal', 400);
                doc.text(
                    `${this.datePipe.transform(data.acceptedAt, 'd MMM yyyy HH:mm', undefined, 'en')}`,
                    15 + getLabelWidth(`Start date/time:`),
                    yPosition,
                );
                doc.text(
                    `${this.datePipe.transform(data.closedAt, 'd MMM yyyy HH:mm', undefined, 'en')}`,
                    15 + getLabelWidth(`End date/time:`),
                    yPosition + 5,
                );
                doc.text(
                    `${this.durationPipe.transform(data.closedAt - data.createdAt, 'en')}`,
                    15 + getLabelWidth(`Duration:`),
                    yPosition + 10,
                );
                yPosition += 15;

                if (data.metadata && Object.keys(data.metadata).length) {
                    Object.keys(data.metadata).forEach((key, index) => {
                        addPageIfNeeded();
                        doc.setFont('Helvetica', 'normal', 700);
                        doc.text(`${key}:`, 15, yPosition);
                        const metadataX = 15 + getLabelWidth(`${key}:`);
                        doc.setFont('Helvetica', 'normal', 400);
                        doc.text(`${data.metadata[key]}`, metadataX, yPosition);
                        yPosition += 5;
                    });
                }

                doc.setFontSize(14);
                doc.setTextColor('#464F60');
                yPosition += 10;
                doc.text('Chat history', 15, yPosition);
                yPosition += 10;

                for (const message of messages) {
                    addPageIfNeeded(4);
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
                        'dd LLL HH:mm',
                        undefined,
                        'en',
                    );

                    const titleLine = `${firstName} ${lastName} (${message.fromUserDetail?.role}) - ${date}:`;
                    doc.setFont('Helvetica', 'normal', 700);
                    const wrappedTitle = doc.splitTextToSize(titleLine, pageWidth - 30);
                    doc.text(wrappedTitle, 15, yPosition);
                    yPosition += wrappedTitle.length * 5;

                    doc.setFont('Helvetica', 'normal', 400);
                    doc.setTextColor('#464F60');

                    if (message.type === 'videoCall' || message.type === 'audioCall') {
                        const callTypeText = message.type === 'audioCall' ? 'Audio call' : 'Video call';
                        let callStatus = '';
                        if (message.closedAt) {
                            callStatus = message.acceptedAt
                                ? `${callTypeText}  accepted`
                                : `${callTypeText}  missed`;
                        } else {
                            callStatus = `${callTypeText}  call`;
                        }

                        addPageIfNeeded(3);
                        doc.text(callStatus, 15, yPosition);
                        yPosition += 5;
                        doc.text(
                            `${this.datePipe.transform(message.createdAt, 'dd LLL HH:mm', undefined, 'en')}`,
                            15,
                            yPosition,
                        );
                        yPosition += 5;

                        if (message.acceptedAt && message.closedAt) {
                            const closedDate = this.datePipe.transform(
                                message.closedAt,
                                'dd LLL HH:mm',
                                undefined,
                                'en',
                            );
                            const finishedText = `${callTypeText}  finished`;
                            doc.text(finishedText, 15, yPosition);
                            yPosition += 5;
                            doc.text(`${closedDate}`, 15, yPosition);
                            yPosition += 5;
                        }
                    } else if (message.text) {
                        const splitText = doc.splitTextToSize(message.text, pageWidth - 30);
                        for (const line of splitText) {
                            addPageIfNeeded();
                            doc.text(line, 15, yPosition);
                            yPosition += 4;
                        }
                    }

                    if (message.isImage && message.attachmentsURL) {
                        await new Promise<void>(resolve => {
                            const image = new Image();
                            image.src = message.attachmentsURL;
                            image.onload = () => {
                                const imgWidth = 50;
                                const imgHeight = (image.height / image.width) * imgWidth;
                                if (yPosition + imgHeight > pageHeight - 10) {
                                    doc.addPage();
                                    yPosition = 10;
                                }
                                doc.addImage(
                                    message.attachmentsURL,
                                    'JPEG',
                                    15,
                                    yPosition,
                                    imgWidth,
                                    imgHeight,
                                    `${Math.random()}`,
                                    'FAST',
                                );
                                yPosition += imgHeight + 5;
                                resolve();
                            };
                            image.onerror = () => resolve();
                        });
                    }

                    if (message.isFile && message.fileName) {
                        addPageIfNeeded();
                        doc.setFont('Helvetica', 'normal', 400);
                        doc.setTextColor('#464F60');
                        doc.text(`[Attached file]: ${message.fileName}`, 15, yPosition);
                        yPosition += 5;
                    }
                }

                doc.save('consultation-report.pdf');
            });
    }


}
