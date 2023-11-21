import {NativeAudio} from "@capacitor-community/native-audio";
import {Component, AfterViewChecked, ViewChild, OnInit, NgZone, AfterViewInit, HostListener} from "@angular/core";
import {IonContent, Platform} from "@ionic/angular";
import {AlertController} from "@ionic/angular";

import {ConsultationService} from "../consultation.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../message.service";
import {AuthService} from "../auth/auth.service";
import {SocketEventsService} from "../socket-events.service";
import {CallService} from "../call.service";

import {ModalController} from "@ionic/angular";
import {CloseConsultationComponent} from "../shared/components/close-consultation/close-consultation.component";
import {ChooseAttachmentComponent} from "../shared/components/choose-attachment/choose-attachment.component";
import {Subscription} from "rxjs";
import {first} from "rxjs/operators";

import {File, FileEntry} from "@awesome-cordova-plugins/file/ngx";


import {Media, MediaObject} from "@awesome-cordova-plugins/media/ngx";
import {GlobalVariableService} from "../global-variable.service";
import {TranslateService} from "@ngx-translate/core";
import {Browser} from "@capacitor/browser";
import {IonModal} from "@ionic/angular";

@Component({
    selector: "app-consultation",
    templateUrl: "./consultation.page.html",
    styleUrls: ["./consultation.page.scss"],
})
export class ConsultationPage
    implements OnInit, AfterViewChecked, AfterViewInit {
    @ViewChild(IonContent) contentArea: IonContent;
    @ViewChild("txtArea") textArea;
    @ViewChild(IonModal) modal: IonModal;

    currentUser;
    consultationId;
    consultation;
    chatMessages = [];
    chatText: string;
    audioFile: MediaObject;
    loadingMsgs = true;
    isRecording = false;
    isFullScreen: boolean;
    contentScrollTop;
    isUploading = false;
    shouldJoinCall = false;
    ongoingCall = null;
    callRunning = false;

    // New for display image in modal
    isImgModalOpen = false;
    imgModalSrc = null;
    imgModalAlt = null;
    imgModalName = null;


    private subscriptions: Array<Subscription> = [];
    private consultationSubscription: Subscription;

    constructor(
        private callService: CallService,
        private conServ: ConsultationService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private msgServ: MessageService,
        private authService: AuthService,
        private _socketEventsService: SocketEventsService,
        private zone: NgZone,
        private consultationService: ConsultationService,
        public modalController: ModalController,
        private file: File,
        private media: Media,
        public alertController: AlertController,
        private globalVariableService: GlobalVariableService,
        public platform: Platform,
        private translate: TranslateService,
        // private nativeAudio: NativeAudio,
    ) {
    }

    ngOnInit() {
        this.currentUser = this.authService.currentUserValue;

        this.consultationId = this.activeRoute.snapshot.params.id;
        this.getConsultation();
        this.listenToCallEvents();
        this.listenToNewMessages();
    }


    // ionViewDidEnter() {
    //   document.addEventListener("backbutton", function (e) {
    //     console.log("disable back button")
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.stopImmediatePropagation()
    //   }, false);
    // }

    @HostListener("document:ionBackButton", ["$event"])
    overrideHardwareBackAction(event: any) {
        console.log("back button");
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        event.detail.register(100, async () => {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        });
    }

    listenToNewMessages() {
        this.subscriptions.push(
            this._socketEventsService.onMessage().subscribe((msg) => {
                console.log("got message ", msg);
                if (msg.data.consultation !== this.consultationId) {
                    return;
                }
                if (this.chatMessages.find((m) => m.id === msg.data.id)) {
                    return;
                }
                this.zone.run(() => {
                    this.chatMessages.push(this.adjustMsg(msg.data));
                });

                this.scrollToBottom();

                this.readMessages();
            })
        );
    }

    listenToCallEvents() {
        this.subscriptions.push(
            this._socketEventsService.onRejectCall().subscribe((event) => {
                const message = this.chatMessages.find(
                    (msg) => msg.id === event.data.message.id
                );
                console.log("video message ", message);
                if (message) {
                    message.closedAt = new Date();
                }
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onAcceptCall().subscribe((event) => {
                const message = this.chatMessages.find(
                    (msg) => msg.id === event.data.message.id
                );
                if (message) {
                    message.acceptedAt = new Date();
                }
            })
        );
        this.subscriptions.push(
            this._socketEventsService.onCall().subscribe((e) => {
                console.log("Calll ", e, this.consultation);

                this.hideKeyboard();
                this.ringing();

                this.zone.run(() => {
                    console.log("get call 1", e);
                    this.callRunning = true;
                    this.ongoingCall = e.data.msg;
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
                });
            })
        );
    }

    requestCall() {
        this.callService.requestCall(this.consultation);
    }

    send() {
        this.textArea.setFocus();

        if (!this.chatText) {
            return;
        }

        this.chatText = this.chatText.trim();
        this.chatMessages.push({
            direction: "outgoing",
            text: this.chatText,
            createdAt: Date.now(),
            from: {
                firstName: this.currentUser.role === "patient" ? this.consultation?.consultation?.firstName : this.currentUser?.firstName,
                lastName: this.currentUser.role === "patient" ? this.consultation?.consultation?.lastName : this.currentUser?.lastName
            }
        });
        this.scrollToBottom();

        this.subscriptions.push(
            this.msgServ
                .sendMessage(
                    this.consultation.id || this.consultation._id,
                    this.chatText
                )
                .subscribe(
                    (r) => {
                        console.log("mesag send ", r);
                    },
                    (err) => {
                        if (err.error && err.error.message == "closed") {
                            this.closeConsultation(this.consultation);
                        }
                    }
                )
        );
        this.chatText = "";
    }

    ngAfterViewChecked() {
        //  this.contentArea.scrollToBottom();
        // this.scrollToBottom();
        // this.contentArea.scrollToBottom();
    }

    ngAfterViewInit() {
        if (this.currentUser && this.currentUser.role !== "translator") {
            this.readMessages();
        }

        this.subscriptions.push(
            this.callService.isFullScreen.subscribe((isFullScreen) => {
                this.isFullScreen = isFullScreen;
                if (!this.isFullScreen) {
                    this.readMessages();
                }
            })
        );
    }

    getConsultation() {
        const lang = window.localStorage.getItem("hhp-lang");
        this.translate.use(lang);
        this.consultationSubscription = this.conServ
            .getConsultation(this.consultationId)
            .subscribe(async (consultation) => {
                console.log("CURRENT CONSULTATION >>>>>>>>>>>>>>>>", consultation);
                if (!consultation || !consultation.consultation) {
                    if (this.consultationSubscription) {
                        this.consultationSubscription.unsubscribe();
                        this.consultationSubscription = null;
                    }
                    localStorage.removeItem("currentConsultation");
                    this._socketEventsService.disconnect();
                    return this.authService.logout();
                    // return this.router.navigate(['login']);
                }
                if (
                    !consultation.consultation ||
                    consultation.consultation.status === "closed"
                ) {
                    if (this.currentUser.role !== "nurse") {
                        this.closeConsultation(consultation);
                    }
                }

                this.subscriptions.push(
                    this.callService.getCurrentCall(this.consultationId).subscribe(
                        (call) => {
                            this.ongoingCall = call;
                            this.shouldJoinCall = false;
                        },
                        (err) => {
                            console.log("error getting current call ", err);
                        }
                    )
                );

                this.subscriptions.push(
                    this._socketEventsService.onConsultationClosed().subscribe((e) => {
                        if (e.data._id === this.consultationId) {
                            this.closeConsultation(consultation);
                        }
                    })
                );
                this.zone.run(() => {
                    if (!this.consultation) {
                        this.consultation = consultation;

                        this.getMessages();
                    } else {
                        this.consultation = consultation;
                    }
                    this.scrollToBottom();
                });
            });
    }

    closeConsultation(consultation) {
        console.log("no consultation.consultation or closed .......");
        if (this.consultationSubscription) {
            this.consultationSubscription.unsubscribe();
            this.consultationSubscription = null;
        }
        localStorage.removeItem("currentConsultation");
        localStorage.removeItem("inviteToken");
        this._socketEventsService.disconnect();
        if (
            this.currentUser.role === "guest" ||
            this.currentUser.role === "translator"
        ) {
            this.authService.logout();
        }
        return this.router.navigate([
            "closing-screen",
            consultation.consultation._id || consultation.consultation.id,
        ]);
    }

    readMessages() {
        if (!this.consultation) {
            return;
        }

        const lastMsg = this.chatMessages[this.chatMessages.length - 1];
        if (
            this.isFullScreen &&
            lastMsg &&
            (lastMsg.type !== "videoCall" || lastMsg.type !== "audioCall")
        ) {
            return;
        }
        this.consultationService.readMessages(this.consultationId);
    }

    sendMsg(event) {
        if (event.charCode === 13) {
            this.send();
            return false;
        }
    }

    scrollToBottom(after?) {
        setTimeout(() => {
            if (this.contentArea) {
                console.log("content area scroll to bottom", this.contentArea);
                this.contentArea.scrollToBottom();
            }
        }, after || 1);
    }

    async showCancelModal() {
        const modal = await this.modalController.create({
            component: CloseConsultationComponent,
            componentProps: {consultationId: this.consultationId},
        });
        return await modal.present();
    }

    async showAttachmentModal() {
        const modal = await this.modalController.create({
            component: ChooseAttachmentComponent,
            componentProps: {consultationId: this.consultationId},
        });
        await modal.present();
        const {data} = await modal.onDidDismiss();

        console.log("modal dismissed ", data);


        if (data.filePath) {
            if (typeof data.filePath === "object") {
                this.uploadBlob(data.filePath, data.filePath.name);

                // this.uploadBlob(data.filePath, data.filePath.name);
            } else if (data.filePath.length > 100000) {
                const blob = this.b64toBlob(data.filePath, "image/jpeg");
                this.uploadBlob(blob, "image.jpg");
            } else {
                this.upload(data.filePath);
            }
        }
    }

    upload(filePath) {

        this.isUploading = true;
        this.file
            .resolveLocalFilesystemUrl(filePath)
            .then((entry) => {
                if (entry) {
                    const fileEntry = entry as FileEntry;
                    console.log("file entry ", fileEntry);
                    fileEntry.file(
                        (success) => {
                            const mimeType = success.type;
                            console.log("type ", mimeType);

                            const reader = new FileReader();
                            const self = this;
                            reader.onloadend = function () {
                                const blob = new Blob(
                                    [new Uint8Array(<ArrayBuffer>this.result)],
                                    {type: mimeType}
                                );
                                self.uploadBlob(blob, fileEntry.name);
                            };

                            reader.readAsArrayBuffer(success);
                        },
                        (error) => {
                            // no mime type found;
                            alert("Error with file type");
                        }
                    );
                }
            })
            .catch((err) => {
                console.log("error uploading ", err);
            });
    }

    uploadBlob(blob, name) {
        this.isUploading = true;
        this.consultationService
            .postFile(blob, name, this.consultation.id || this.consultation.id)
            .subscribe((data) => {
                const msg = data.message;

                this.zone.run(() => {
                    this.chatMessages.push(this.adjustMsg(msg));
                    this.scrollToBottom();
                    this.isUploading = false;
                });
            });
    }

    // ngOnDestroy(): void {
    //   console.log('destroy >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.');
    //   if (this.consultationSubscription) {
    //     this.consultationSubscription.unsubscribe();
    //   }
    //   this.subscriptions.forEach((subscription: Subscription) => {
    //     subscription.unsubscribe();
    //   });

    // }

    startRecording() {
        this.isRecording = true;
        const filePath = this.file.externalDataDirectory + Date.now() + ".mp3";
        this.audioFile = this.media.create(filePath);

        this.subscriptions.push(
            this.audioFile.onSuccess.subscribe((amp) => {
                this.upload(filePath);

            })
        );
        this.subscriptions.push(
            this.audioFile.onError.subscribe((e) => {
                console.log("Error ", e);
            })
        );
        this.subscriptions.push(
            this.audioFile.onStatusUpdate.subscribe((status) => console.log(status))
        );

        this.audioFile.startRecord();
    }

    adjustMsg(msg) {
        if (msg.type === "attachment") {
            msg.attachmentsURL =
                this.globalVariableService.getApiPath() +
                `/consultation/${
                    this.consultation._id || this.consultation.id
                }/attachment/${msg.id}`;

            if (msg.mimeType.endsWith("jpeg") || msg.mimeType.endsWith("png")) {
                msg.isImage = true;
            } else if (msg.mimeType.startsWith("audio")) {
                msg.isAudio = true;
            } else {
                msg.isFile = true;
            }
        }

        if (msg.from.id === this.currentUser.id) {
            msg.direction = "outgoing";
        } else {
            msg.direction = "incoming";
        }
        return msg;
    }

    getMessages(noScroll?) {
        if (this.currentUser.role === "translator") {
            return;
        }
        this.loadingMsgs = true;

        if (!this.consultation) {
            return;
        }

        this.msgServ
            .getConsultationMessages(
                this.consultation._id || this.consultation.id,
                this.chatMessages.length
            )
            .pipe(first())
            .subscribe((msgs) => {
                this.zone.run(() => {
                    this.chatMessages = msgs
                        .map((m) => {
                            return this.adjustMsg(m);
                        })
                        .concat(this.chatMessages);

                    this.loadingMsgs = false;

                    if (!noScroll) {
                        this.scrollToBottom(100);
                    }
                });
            });
    }

    public handleScroll(event) {
        this.contentScrollTop = event.detail.scrollTop;
        if (event.detail.scrollTop < 400 && !this.loadingMsgs) {
            this.getMessages(true);
        }
    }

    async stopRecording() {
        this.isRecording = false;
        await this.audioFile.stopRecord();
    }

    public blobToFile = (theBlob: Blob, fileName: string) => {
        const b: any = theBlob;
        // A Blob() is almost a File() - it's just missing the two properties below which we will add
        b.__proto__ = File.prototype;
        b.lastModifiedDate = new Date();
        b.name = fileName;

        // Cast to a File() type
        return <any>theBlob;
    };

    adjustScroll() {
        this.scrollToBottom(300);
    }

    hangup() {
        this.zone.run(() => {
            console.log("leave call", this.platform.is("cordova"));
            NativeAudio.stop({assetId: "ringSound"});
            this.callRunning = false;
            this.shouldJoinCall = false;
        });
    }

    joinCall() {
        this.subscriptions.push(
            this.callService.getCurrentCall(this.consultationId).subscribe(
                (call) => {
                    console.log("JOIN CALL ", call);
                    this.shouldJoinCall = true;
                    this.ongoingCall = call;
                },
                (err) => {
                    console.log("error getting current call ", err);
                }
            )
        );
    }

    ringing() {
        console.log("CURRENT PLATFORM", this.platform);
        this.platform
            .ready()
            .then(() => {
                console.log("RINGING NOW", NativeAudio.loop);
                NativeAudio.play({assetId: "ringSound", time: 0});
                return NativeAudio.loop({assetId: "ringSound"});
                // if (this.platform.is("capacitor")) {
                //   console.log("RINGING NOW", this.nativeAudio.loop);
                //   return this.nativeAudio.loop("ringSound");
                // }
            })
            .then(
                (res) => {
                },
                (err) => {
                    console.log("error ", err);
                }
            );
    }

    downloadPdf(pdfUrl: string, fileName: string): void {
        this.consultationService.downloadPdf(pdfUrl).subscribe(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName || 'attachment.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        });
    }

    openImgModal(img) {

        this.imgModalSrc = img.target.currentSrc;
        this.imgModalAlt = img.target.alt;
        this.imgModalName = "Image";
        this.isImgModalOpen = true;
    }

    closeImgModal(isOpen: boolean) {
        this.isImgModalOpen = isOpen;
    }

    backToDashboard() {
        localStorage.removeItem("currentConsultation");
        this.router.navigate([`/dashboard`]);
    }


    hideKeyboard() {
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        setTimeout(function () {
            // creating temp field
            const field = document.createElement("input");
            field.setAttribute("type", "text");
            // hiding temp field from peoples eyes
            // -webkit-user-modify is nessesary for Android 4.x
            field.setAttribute(
                "style",
                "position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;"
            );
            document.body.appendChild(field);

            // adding onfocus event handler for out temp field
            field.onfocus = function () {
                // this timeout of 200ms is nessasary for Android 2.3.x
                setTimeout(function () {
                    field.setAttribute("style", "display:none;");
                    setTimeout(function () {
                        document.body.removeChild(field);
                        document.body.focus();
                    }, 14);
                }, 200);
            };
            // focusing it
            field.focus();
        }, 50);
    }

    /**
     * Convert a base64 string in a Blob according to the data and contentType.
     *
     * @param b64Data {String} Pure base64 string without contentType
     * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
     * @param sliceSize {Int} SliceSize to process the byteCharacters
     * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
     * @return Blob
     */
    b64toBlob(b64Data, contentType, sliceSize?) {
        contentType = contentType || "";
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});

        return blob;
    }
}
