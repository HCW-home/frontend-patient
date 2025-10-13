import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  NgZone,
  HostListener, Input
} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CloseConsultationComponent} from "../close-consultation/close-consultation.component";
import {IonContent, IonModal, ModalController, Platform} from "@ionic/angular";
import {Media, MediaObject} from "@awesome-cordova-plugins/media/ngx";
import {Subscription} from "rxjs";
import {CallService} from "../../../services/call.service";
import {ConsultationService} from "../../../services/consultation.service";
import {MessageService} from "../../../services/message.service";
import {AuthService} from "../../../auth/auth.service";
import {SocketEventsService} from "../../../services/socket-events.service";
import {File, FileEntry} from "@awesome-cordova-plugins/file/ngx";
import {GlobalVariableService} from "../../../services/global-variable.service";
import {TranslateService} from "@ngx-translate/core";
import {ChooseAttachmentComponent} from "../choose-attachment/choose-attachment.component";
import {first} from "rxjs/operators";
import {NativeAudio} from "@capacitor-community/native-audio";
import {DomSanitizer} from "@angular/platform-browser";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-consultation-chat',
  templateUrl: './consultation-chat.component.html',
  styleUrls: ['./consultation-chat.component.scss']
})
export class ConsultationChatComponent   implements OnInit, AfterViewInit {
  @ViewChild(IonContent) contentArea: IonContent;
  @ViewChild("txtArea") textArea;
  @ViewChild(IonModal) modal: IonModal;
  @Input() consultation;

  currentUser;
  consultationId;
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
  imgModalSrc = null
  imgModalAlt = null
  imgModalName = null


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
      private globalVariableService: GlobalVariableService,
      public platform: Platform,
      private translate: TranslateService,
      private languageService: LanguageService,
      private _sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    this.consultationId = this.consultation._id;
    this.getConsultation();
    this.listenToCallEvents();
    this.listenToNewMessages();
  }


  @HostListener("document:ionBackButton", ["$event"])
  overrideHardwareBackAction(event: any) {
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

            if (msg.data.from !== this.currentUser.id && (msg.data.type === 'text' || msg.data.type === 'attachment')) {
              const audio = new Audio('assets/sounds/new-message.mp3');
              audio.play().catch(err => console.log('Audio play failed:', err));
            }
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
          fromUserDetail: {
              role: this.currentUser.role,
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
            return this.authService.logOutNurse();
            // return this.router.navigate(['login']);
          }
          // if (
          //     !consultation.consultation ||
          //     consultation.consultation.status === "closed"
          // ) {
          //   this.closeConsultation(consultation);
          // }

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
              this.getMessages();
          });
        });
  }

  closeConsultation(consultation) {
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
      this.authService.logOutNurse();
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
      componentProps: { consultationId: this.consultationId },
    });
    return await modal.present();
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
                        { type: mimeType }
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

  adjustMsg(msg) {
    if (msg.type === "attachment") {
        const requestUrl =
            this.globalVariableService.getApiPath() +
            `/consultation/${
                this.consultation._id || this.consultation.id
            }/attachment/${msg.id}`;
        const user = this.authService.currentUserValue;

      if (msg.mimeType.endsWith("jpeg") || msg.mimeType.endsWith("png")) {
          fetch(requestUrl, {
              headers: {
                  'x-access-token': user.token,
              }
          }).then(res=> {
              return res.blob()
          }).then(imageFile=>{
              msg.isImage = true
              msg.attachmentsURL = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(imageFile));
          })
        msg.isImage = true;
      } else if (msg.mimeType.startsWith("audio")) {
        msg.isAudio = true;

      } else {
          msg.attachmentsURL = requestUrl;
          msg.isFile = true;
      }
    }

    if (msg.from === this.currentUser.id) {
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
          NativeAudio.play({assetId:'ringSound', time: 0});
          return NativeAudio.loop({assetId:"ringSound"});
          // if (this.platform.is("capacitor")) {
          //   console.log("RINGING NOW", this.nativeAudio.loop);
          //   return this.nativeAudio.loop("ringSound");
          // }
        })
        .then(
            (res) => {},
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

    this.imgModalSrc = img.target.currentSrc
    this.imgModalAlt = img.target.alt
    this.imgModalName = "Image"
    this.isImgModalOpen = true;
  }
  closeImgModal(isOpen: boolean) {
    this.isImgModalOpen = isOpen
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

}
