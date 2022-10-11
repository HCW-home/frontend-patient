"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_consultation_consultation_module_ts"],{

/***/ 4899:
/*!*****************************************************!*\
  !*** ./src/app/consultation/consultation.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationPageModule": () => (/* binding */ ConsultationPageModule)
/* harmony export */ });
/* harmony import */ var _video_room_video_room_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../video-room/video-room.module */ 6089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _consultation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultation.page */ 2585);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// translate


const routes = [
    {
        path: '',
        component: _consultation_page__WEBPACK_IMPORTED_MODULE_2__.ConsultationPage
    }
];
let ConsultationPageModule = class ConsultationPageModule {
};
ConsultationPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.I18nModule,
            _video_room_video_room_module__WEBPACK_IMPORTED_MODULE_0__.VideoRoomPageModule
        ],
        declarations: [_consultation_page__WEBPACK_IMPORTED_MODULE_2__.ConsultationPage]
    })
], ConsultationPageModule);



/***/ }),

/***/ 2585:
/*!***************************************************!*\
  !*** ./src/app/consultation/consultation.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationPage": () => (/* binding */ ConsultationPage)
/* harmony export */ });
/* harmony import */ var _home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _consultation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultation.page.html?ngResource */ 7954);
/* harmony import */ var _consultation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultation.page.scss?ngResource */ 2437);
/* harmony import */ var _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/native-audio */ 2087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consultation.service */ 9936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ 4206);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../socket-events.service */ 7800);
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../call.service */ 1952);
/* harmony import */ var _shared_components_close_consultation_close_consultation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/close-consultation/close-consultation.component */ 1875);
/* harmony import */ var _shared_components_choose_attachment_choose_attachment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/choose-attachment/choose-attachment.component */ 3307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ 7770);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global-variable.service */ 6898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/browser */ 8313);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;


 // import { NativeAudio } from "@awesome-cordova-plugins/native-audio/ngx";





















let ConsultationPage = class ConsultationPage {
  constructor(callService, conServ, activeRoute, router, msgServ, authService, _socketEventsService, zone, consultationService, modalController, file, media, alertController, globalVariableService, platform, translate) {
    this.callService = callService;
    this.conServ = conServ;
    this.activeRoute = activeRoute;
    this.router = router;
    this.msgServ = msgServ;
    this.authService = authService;
    this._socketEventsService = _socketEventsService;
    this.zone = zone;
    this.consultationService = consultationService;
    this.modalController = modalController;
    this.file = file;
    this.media = media;
    this.alertController = alertController;
    this.globalVariableService = globalVariableService;
    this.platform = platform;
    this.translate = translate;
    this.chatMessages = [];
    this.videCall = false;
    this.loadingMsgs = true;
    this.isRecording = false;
    this.isUploading = false;
    this.shouldJoinCall = false;
    this.ongoingCall = null;
    this.callRunning = false; // New for display image in modal

    this.isImgModalOpen = false;
    this.imgModalSrc = null;
    this.imgModalAlt = null;
    this.imgModalName = null;
    this.subscriptions = [];

    this.blobToFile = (theBlob, fileName) => {
      const b = theBlob; // A Blob() is almost a File() - it's just missing the two properties below which we will add

      b.__proto__ = _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File.prototype;
      b.lastModifiedDate = new Date();
      b.name = fileName; // Cast to a File() type

      return theBlob;
    };
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    this.consultationId = this.activeRoute.snapshot.params.id;
    this.getConsultation();
    this.listenToCallEvents();
    this.listenToNewMessages();
  }

  overrideHardwareBackAction(event) {
    console.log("back button");
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    event.detail.register(100, /*#__PURE__*/(0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }));
  }

  listenToNewMessages() {
    this.subscriptions.push(this._socketEventsService.onMessage().subscribe(msg => {
      console.log("got message ", msg);

      if (msg.data.consultation !== this.consultationId) {
        return;
      }

      if (this.chatMessages.find(m => m.id === msg.data.id)) {
        return;
      }

      this.zone.run(() => {
        this.chatMessages.push(this.adjustMsg(msg.data));
      });
      this.scrollToBottom();
      this.readMessages();
    }));
  }

  listenToCallEvents() {
    this.subscriptions.push(this._socketEventsService.onRejectCall().subscribe(event => {
      const message = this.chatMessages.find(msg => msg.id === event.data.message.id);
      console.log("video message ", message);

      if (message) {
        message.closedAt = new Date();
      }
    }));
    this.subscriptions.push(this._socketEventsService.onAcceptCall().subscribe(event => {
      const message = this.chatMessages.find(msg => msg.id === event.data.message.id);

      if (message) {
        message.acceptedAt = new Date();
      }
    }));
    this.subscriptions.push(this._socketEventsService.onCall().subscribe(e => {
      console.log("Calll ", e, this.consultation);
      this.hideKeyboard();
      this.ringing();
      this.zone.run(() => {
        console.log("get call 1", e);
        this.callRunning = true;
        this.ongoingCall = e.data.msg;
        this.shouldJoinCall = false;
      });
    }));
    this.subscriptions.push(this._socketEventsService.onEndCall().subscribe(e => {
      console.log("End Calll ", e);
      this.zone.run(() => {
        console.log("get call 2", e);
        this.callRunning = false;
        this.ongoingCall = null;
        this.shouldJoinCall = false;
      });
    }));
  }

  requestCall() {
    this.callService.requestCall(this.consultation);
  }

  send(e) {
    this.textArea.setFocus();

    if (!this.chatText) {
      return;
    }

    this.chatText = this.chatText.trim();
    this.chatMessages.push({
      direction: "outgoing",
      text: this.chatText,
      createdAt: Date.now()
    });
    this.scrollToBottom();
    this.subscriptions.push(this.msgServ.sendMessage(this.consultation.id || this.consultation._id, this.chatText).subscribe(r => {
      console.log("mesag send ", r);
    }, err => {
      if (err.error && err.error.message == "closed") {
        this.closeConsultation(this.consultation);
      }
    }));
    this.chatText = "";
  }

  ngAfterViewChecked() {//  this.contentArea.scrollToBottom();
    // this.scrollToBottom();
    // this.contentArea.scrollToBottom();
  }

  ngAfterViewInit() {
    if (this.currentUser && this.currentUser.role !== "translator") {
      this.readMessages();
    }

    this.subscriptions.push(this.callService.isFullScreen.subscribe(isFullScreen => {
      this.isFullScreen = isFullScreen;

      if (!this.isFullScreen) {
        this.readMessages();
      }
    }));
  }

  getConsultation() {
    var _this = this;

    const lang = window.localStorage.getItem("hhp-lang");
    this.translate.use(lang);
    this.consultationSubscription = this.conServ.getConsultation(this.consultationId).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (consultation) {
        console.log("CURRENT CONSULTATION >>>>>>>>>>>>>>>>", consultation);

        if (!consultation || !consultation.consultation) {
          if (_this.consultationSubscription) {
            _this.consultationSubscription.unsubscribe();

            _this.consultationSubscription = null;
          }

          localStorage.removeItem("currentConsultation");

          _this._socketEventsService.disconnect();

          return _this.authService.logout(); // return this.router.navigate(['login']);
        }

        if (!consultation.consultation || consultation.consultation.status === "closed") {
          _this.closeConsultation(consultation);
        }

        _this.subscriptions.push(_this.callService.getCurrentCall(_this.consultationId).subscribe(call => {
          _this.ongoingCall = call;
          _this.shouldJoinCall = false;
        }, err => {
          console.log("error getting current call ", err);
        }));

        _this.subscriptions.push(_this._socketEventsService.onConsultationClosed().subscribe(e => {
          if (e.data._id === _this.consultationId) {
            _this.closeConsultation(consultation);
          }
        }));

        _this.zone.run(() => {
          if (!_this.consultation) {
            _this.consultation = consultation;

            _this.getMessages();
          } else {
            _this.consultation = consultation;
          }

          _this.scrollToBottom();
        });
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
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

    if (this.currentUser.role === "guest" || this.currentUser.role === "translator") {
      this.authService.logout();
    }

    return this.router.navigate(["closing-screen", consultation.consultation._id || consultation.consultation.id]);
  }

  readMessages() {
    if (!this.consultation) {
      return;
    }

    const lastMsg = this.chatMessages[this.chatMessages.length - 1];

    if (this.isFullScreen && lastMsg && (lastMsg.type !== "videoCall" || lastMsg.type !== "audioCall")) {
      return;
    }

    this.consultationService.readMessages(this.consultationId);
  }

  sendMsg(event) {
    if (event.charCode === 13) {
      this.send(event);
      return false;
    }
  }

  scrollToBottom(after) {
    setTimeout(() => {
      if (this.contentArea) {
        console.log("content area scroll to bottom", this.contentArea);
        this.contentArea.scrollToBottom();
      }
    }, after || 1);
  }

  showCancelModal() {
    var _this2 = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _shared_components_close_consultation_close_consultation_component__WEBPACK_IMPORTED_MODULE_9__.CloseConsultationComponent,
        componentProps: {
          consultationId: _this2.consultationId
        }
      });
      return yield modal.present();
    })();
  }

  showAttachmentModal() {
    var _this3 = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _shared_components_choose_attachment_choose_attachment_component__WEBPACK_IMPORTED_MODULE_10__.ChooseAttachmentComponent,
        componentProps: {
          consultationId: _this3.consultationId
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      console.log("modal dismissed ", data);

      if (data.filePath) {
        if (typeof data.filePath === "object") {
          _this3.uploadBlob(data.filePath, data.filePath.name); // this.uploadBlob(data.filePath, data.filePath.name);

        } else if (data.filePath.length > 100000) {
          const blob = _this3.b64toBlob(data.filePath, "image/jpeg");

          _this3.uploadBlob(blob, "image.jpg");
        } else {
          _this3.upload(data.filePath);
        }
      }
    })();
  }

  upload(filePath) {
    this.isUploading = true;
    this.file.resolveLocalFilesystemUrl(filePath).then(entry => {
      if (entry) {
        const fileEntry = entry;
        console.log("file entry ", fileEntry);
        fileEntry.file(success => {
          const mimeType = success.type;
          console.log("type ", mimeType);
          const reader = new FileReader();
          const self = this;

          reader.onloadend = function () {
            const blob = new Blob([new Uint8Array(this.result)], {
              type: mimeType
            });
            self.uploadBlob(blob, fileEntry.name);
          };

          reader.readAsArrayBuffer(success);
        }, error => {
          // no mime type found;
          alert("Error with file type");
        });
      }
    }).catch(err => {
      console.log("error uploading ", err);
    });
  }

  uploadBlob(blob, name) {
    this.isUploading = true;
    this.consultationService.postFile(blob, name, this.consultation.id || this.consultation.id).subscribe(data => {
      const msg = data.message;
      this.zone.run(() => {
        this.chatMessages.push(this.adjustMsg(msg));
        this.scrollToBottom();
        this.isUploading = false;
      });
    });
  } // ngOnDestroy(): void {
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
    this.subscriptions.push(this.audioFile.onSuccess.subscribe(amp => {
      this.upload(filePath);
    }));
    this.subscriptions.push(this.audioFile.onError.subscribe(e => {
      console.log("Error ", e);
    }));
    this.subscriptions.push(this.audioFile.onStatusUpdate.subscribe(status => console.log(status)));
    this.audioFile.startRecord();
  }

  adjustMsg(msg) {
    if (msg.type === "attachment") {
      msg.attachmentsURL = this.globalVariableService.getApiPath() + `/consultation/${this.consultation._id || this.consultation.id}/attachment/${msg.id}?token=${this.currentUser.token}`;

      if (msg.mimeType.endsWith("jpeg") || msg.mimeType.endsWith("png")) {
        msg.isImage = true;
      } else if (msg.mimeType.startsWith("audio")) {
        msg.isAudio = true;
      } else {
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

  getMessages(noScroll) {
    if (this.currentUser.role === "translator") {
      return;
    }

    this.loadingMsgs = true;

    if (!this.consultation) {
      return;
    }

    this.msgServ.getConsultationMessages(this.consultation._id || this.consultation.id, this.chatMessages.length).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.first)()).subscribe(msgs => {
      this.zone.run(() => {
        this.chatMessages = msgs.map(m => {
          return this.adjustMsg(m);
        }).concat(this.chatMessages);
        this.loadingMsgs = false;

        if (!noScroll) {
          this.scrollToBottom(100);
        }
      });
    });
  }

  handleScroll(event) {
    this.contentScrollTop = event.detail.scrollTop;

    if (event.detail.scrollTop < 400 && !this.loadingMsgs) {
      this.getMessages(true);
    }
  }

  stopRecording() {
    var _this4 = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isRecording = false;
      yield _this4.audioFile.stopRecord();
    })();
  }

  adjustScroll(event) {
    console.log(this.contentArea, this.contentScrollTop);
    console.log("scroll to bottom");
    this.scrollToBottom(300);
  }

  hangup() {
    this.zone.run(() => {
      console.log("leave call", this.platform.is("cordova"));
      _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_3__.NativeAudio.stop({
        assetId: 'ringSound'
      });
      this.callRunning = false;
      this.shouldJoinCall = false;
    });
  }

  joinCall() {
    this.subscriptions.push(this.callService.getCurrentCall(this.consultationId).subscribe(call => {
      console.log("JOIN CALL ", call);
      this.shouldJoinCall = true;
      this.ongoingCall = call;
    }, err => {
      console.log("error getting current call ", err);
    }));
  }

  ringing() {
    console.log("CURRENT PLATFORM", this.platform);
    this.platform.ready().then(() => {
      console.log("RINGING NOW", _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_3__.NativeAudio.loop);
      _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_3__.NativeAudio.play({
        assetId: 'ringSound',
        time: 0
      });
      return _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_3__.NativeAudio.loop({
        assetId: "ringSound"
      }); // if (this.platform.is("capacitor")) {
      //   console.log("RINGING NOW", this.nativeAudio.loop);
      //   return this.nativeAudio.loop("ringSound");
      // }
    }).then(res => {}, err => {
      console.log("error ", err);
    });
  }

  openlink(url) {
    console.log("opening", url);
    _capacitor_browser__WEBPACK_IMPORTED_MODULE_14__.Browser.open({
      url: url
    });
  }

  openImgModal(img) {
    this.imgModalSrc = img.target.currentSrc;
    this.imgModalAlt = img.target.alt;
    this.imgModalName = "Image";
    this.isImgModalOpen = true;
  }

  closeImgModal(isOpen) {
    this.isImgModalOpen = isOpen;
  }

  hideKeyboard() {
    // this set timeout needed for case when hideKeyborad
    // is called inside of 'onfocus' event handler
    setTimeout(function () {
      // creating temp field
      const field = document.createElement("input");
      field.setAttribute("type", "text"); // hiding temp field from peoples eyes
      // -webkit-user-modify is nessesary for Android 4.x

      field.setAttribute("style", "position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;");
      document.body.appendChild(field); // adding onfocus event handler for out temp field

      field.onfocus = function () {
        // this timeout of 200ms is nessasary for Android 2.3.x
        setTimeout(function () {
          field.setAttribute("style", "display:none;");
          setTimeout(function () {
            document.body.removeChild(field);
            document.body.focus();
          }, 14);
        }, 200);
      }; // focusing it


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


  b64toBlob(b64Data, contentType, sliceSize) {
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

    var blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }

};

ConsultationPage.ctorParameters = () => [{
  type: _call_service__WEBPACK_IMPORTED_MODULE_8__.CallService
}, {
  type: _consultation_service__WEBPACK_IMPORTED_MODULE_4__.ConsultationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
}, {
  type: _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
}, {
  type: _socket_events_service__WEBPACK_IMPORTED_MODULE_7__.SocketEventsService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgZone
}, {
  type: _consultation_service__WEBPACK_IMPORTED_MODULE_4__.ConsultationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController
}, {
  type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File
}, {
  type: _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_12__.Media
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController
}, {
  type: _global_variable_service__WEBPACK_IMPORTED_MODULE_13__.GlobalVariableService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService
}];

ConsultationPage.propDecorators = {
  contentArea: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent]
  }],
  textArea: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["txtArea"]
  }],
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonModal]
  }],
  overrideHardwareBackAction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.HostListener,
    args: ["document:ionBackButton", ["$event"]]
  }]
};
ConsultationPage = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-consultation",
  template: _consultation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_consultation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), __metadata("design:paramtypes", [typeof (_a = typeof _call_service__WEBPACK_IMPORTED_MODULE_8__.CallService !== "undefined" && _call_service__WEBPACK_IMPORTED_MODULE_8__.CallService) === "function" ? _a : Object, typeof (_b = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_4__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_4__.ConsultationService) === "function" ? _b : Object, typeof (_c = typeof _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router) === "function" ? _d : Object, typeof (_e = typeof _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService !== "undefined" && _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService) === "function" ? _e : Object, typeof (_f = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService) === "function" ? _f : Object, typeof (_g = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_7__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_7__.SocketEventsService) === "function" ? _g : Object, typeof (_h = typeof _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgZone) === "function" ? _h : Object, typeof (_j = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_4__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_4__.ConsultationService) === "function" ? _j : Object, typeof (_k = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController) === "function" ? _k : Object, typeof (_l = typeof _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File !== "undefined" && _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File) === "function" ? _l : Object, typeof (_m = typeof _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_12__.Media !== "undefined" && _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_12__.Media) === "function" ? _m : Object, typeof (_o = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController) === "function" ? _o : Object, typeof (_p = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_13__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_13__.GlobalVariableService) === "function" ? _p : Object, typeof (_q = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform) === "function" ? _q : Object, typeof (_r = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService) === "function" ? _r : Object])], ConsultationPage);


/***/ }),

/***/ 4206:
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variable.service */ 6898);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;




let MessageService = class MessageService {
    constructor(http, globalVariableService) {
        this.http = http;
        this.globalVariableService = globalVariableService;
    }
    getConsultationMessages(id, skip) {
        return this.http.get(this.globalVariableService.getApiPath() + `/message?where={"consultation":"${id}"}&sort=createdAt DESC&limit=20&skip=${skip}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((msgs) => {
            return msgs.reverse();
        }));
    }
    sendMessage(consultationId, text) {
        return this.http.post(this.globalVariableService.getApiPath() + `/message`, {
            text,
            consultation: consultationId,
            type: 'text'
        });
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService }
];
MessageService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _b : Object])
], MessageService);



/***/ }),

/***/ 4687:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8313:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4687);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 6998)).then(m => new m.BrowserWeb())
});



/***/ }),

/***/ 2437:
/*!****************************************************************!*\
  !*** ./src/app/consultation/consultation.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #266eb7;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #ffbb00;\n  --ion-color-secondary-rgb: 255, 204, 0;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0, 0, 0;\n  --ion-color-secondary-shade: #bd9700;\n  --ion-color-secondary-tint: #ffd21e;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: ##ffcd00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #494b50;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #cccccc;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --blue-bg-color: #0072bb;\n}\n.jumbotron {\n  color: #ffffff;\n  height: 240px;\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  background-position: center;\n  border-radius: 0px;\n  text-align: center;\n}\n::ng-deep html[data-theme=accessibility] .jumbotron {\n  background-image: none !important;\n  background-image: initial !important;\n}\n.jumbotron.await {\n  height: 283px;\n}\nion-card-title {\n  color: #fff;\n}\n.title {\n  text-align: center;\n  margin-top: 1rem;\n}\nion-card-content {\n  padding-top: 0;\n}\n.subtitle {\n  text-align: center;\n  font-size: 1em;\n}\n.subtitle.doctor {\n  margin-top: 6px !important;\n}\n.subtitle.doctor a {\n  color: #fff;\n}\n.video-btn {\n  display: block;\n  margin: 30px 15% 12px 15%;\n  --background: #ffffff;\n  color: #266eb7;\n  color: var(--ion-color-primary);\n  font-size: 0.8em;\n  font-weight: bold;\n  --border-radius: 36px;\n}\n.bubble {\n  border-radius: 10px;\n  word-break: break-word;\n}\n.incoming > ion-row > ion-col > .bubble a {\n  color: #e2e2e2;\n}\n.incoming > ion-row > ion-col > .bubble {\n  background-color: #266eb7;\n  background-color: var(--ion-color-primary);\n  color: #ffffff;\n}\nspan.msg-time {\n  margin-top: 6px;\n  font-size: 0.43em;\n  color: rgb(58, 58, 58);\n}\nrow.msg-time {\n  min-width: 80%;\n  flex-direction: row-reverse;\n}\n.outgoing > ion-row > ion-col > .bubble {\n  color: rgb(58, 58, 58);\n  background-color: #ffffff;\n}\n.outgoing ion-row.msg-time {\n  justify-content: flex-end;\n}\n.outgoing span.msg-time {\n  text-align: right;\n}\ndiv.input {\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  background-color: #ffffff;\n}\ndiv.input > ion-grid > ion-row > ion-col.ico {\n  height: 60px;\n  padding: 0px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  vertical-align: middle;\n}\n.ico-left,\n.ico-right {\n  justify-content: center;\n  height: 100%;\n}\n.ico-left ion-button,\n.ico-right ion-button {\n  width: 100%;\n  height: 100%;\n}\ndiv.input > ion-grid > ion-row > ion-col.ico-left {\n  border-right: 1px solid #e4e4e4;\n}\ndiv.input > ion-grid > ion-row > ion-col.ico-left > ion-button {\n  --background: #ffffff;\n  color: black;\n  border: none;\n  -border-style: none;\n  --border-radius: none;\n  --border-width: 0;\n  --box-shadow: none;\n  margin: 0px;\n  padding-top: 0px;\n  max-width: 100%;\n}\ndiv.input > ion-grid > ion-row > ion-col.ico-right > ion-button {\n  color: #ffffff;\n  --background: black;\n  border: none;\n  -border-style: none;\n  --border-radius: 40px;\n  height: 40px;\n  width: 40px;\n  --border-width: 0;\n  --box-shadow: none;\n  margin: 0px;\n  padding-top: 0px;\n  font-size: 10px;\n  margin: auto;\n}\n.mic-recording {\n  color: #ffffff;\n  --background: var(--ion-color-primary) !important;\n  border: none;\n  -border-style: none;\n  --border-radius: 60px !important;\n  height: 58px !important;\n  width: 58px !important;\n  --border-width: 0;\n  --box-shadow: none;\n  margin: 0px;\n  padding-top: 0px;\n  font-size: 10px;\n  margin: auto;\n  transition: all 0.2s ease-in;\n  height: 120px !important;\n  width: 120px !important;\n  right: -7px;\n  position: absolute;\n}\ndiv.input > ion-grid > ion-row > ion-col {\n  padding: 0px;\n  padding-top: 8px;\n}\ndiv.input > ion-grid > ion-row > ion-col > ion-textarea {\n  padding: 0;\n}\ndiv.input > ion-grid > ion-row > ion-col > ion-icon {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 24px;\n}\n.cancel-btn {\n  margin-top: 15px;\n  --border-radius: 30px;\n  --background: white;\n  color: #266eb7;\n  color: var(--ion-color-primary);\n  display: inline-block;\n}\n@media screen and (max-width: 640px) {\n  .jumbotron,\n.jumbotron.await {\n    height: 300px;\n  }\n}\n.join-call-btn-container {\n  display: flex;\n  font-size: 0.6em;\n  justify-content: center;\n}\n.keep-open {\n  color: white;\n  text-align: center;\n  background: #ee5555;\n  padding: 10px;\n  margin: 0;\n  font-weight: bold;\n}\n#chatHeader {\n  text-align: center;\n  font-size: 0.9em;\n}\nion-icon[name=attach] {\n  min-width: 32px;\n}\n.left-img {\n  display: flex;\n}\n.right-img {\n  display: flex;\n  justify-content: flex-end;\n}\n.chat-text-container {\n  display: inline-flex;\n}\n.chat-text-container a {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.outgoing .chat-text-container {\n  flex-direction: row-reverse !important;\n}\n::ng-deep html[data-theme=accessibility] .title {\n  text-align: left !important;\n}\n::ng-deep html[data-theme=accessibility] p {\n  text-align: left !important;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n::ng-deep html[data-theme=accessibility] #chatHeader {\n  text-align: left;\n  font-size: 1em;\n}\n::ng-deep html[data-theme=accessibility] .msg-time {\n  font-size: 0.8em !important;\n}\n::ng-deep html[data-theme=accessibility] .subtitle {\n  font-size: 1.1em;\n}\n::ng-deep html[data-theme=accessibility] .doctor-info-card {\n  padding-left: 0;\n}\n::ng-deep html[data-theme=accessibility] .keep-open {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiY29uc3VsdGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQU1BO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwrQkFBQTtFQUVBLHdCQUFBO0FDakJGO0FBaEVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RURvRkUsOENBQUE7RUFNQSwyQ0FBQTtFQ3hGRixvQ0FBQTtFQUFBLHFEQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBb0VGO0FBaEVJO0VBQ0UsaUNBQUE7RUFBQSxvQ0FBQTtBQW1FTjtBQS9EQTtFQUNFLGFBQUE7QUFrRUY7QUEvREE7RUFDRSxXQUFBO0FBa0VGO0FBaEVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQW1FRjtBQWpFQTtFQUNFLGNBQUE7QUFvRUY7QUFsRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFxRUY7QUFsRUE7RUFDRSwwQkFBQTtBQXFFRjtBQW5FRTtFQUNFLFdBQUE7QUFxRUo7QUFqRUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQW9FRjtBQWpFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFvRUY7QUE1REE7RUFDRSxjQUFBO0FBK0RGO0FBNURBO0VBQ0UseUJBQUE7RUFBQSwwQ0FBQTtFQUNBLGNBQUE7QUErREY7QUE1REE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQStERjtBQTVEQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBQStERjtBQXREQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUF5REY7QUFqREE7RUFDRSx5QkFBQTtBQW9ERjtBQWpEQTtFQUNFLGlCQUFBO0FBb0RGO0FBakRBO0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUFrREY7QUEvQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFrREY7QUFoREE7O0VBRUUsdUJBQUE7RUFDQSxZQUFBO0FBbURGO0FBbERFOztFQUNFLFdBQUE7RUFDQSxZQUFBO0FBcURKO0FBbERBO0VBQ0UsK0JBQUE7QUFxREY7QUFsREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBcURGO0FBbERBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBR0EsWUFBQTtBQW1ERjtBQWhEQTtFQUNFLGNBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQW1ERjtBQWhEQTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtBQWtERjtBQS9DQTtFQUNFLFVBQUE7QUFrREY7QUEvQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQWtERjtBQS9DQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtFQUVBLHFCQUFBO0FBaURGO0FBN0NBO0VBQ0U7O0lBRUUsYUFBQTtFQWdERjtBQUNGO0FBOUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFnREY7QUE5Q0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFpREY7QUEvQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBa0RGO0FBaERBO0VBQ0UsZUFBQTtBQW1ERjtBQWhEQTtFQUNFLGFBQUE7QUFtREY7QUFoREE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFtREY7QUFoREE7RUFDRSxvQkFBQTtBQW1ERjtBQWpERTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQW1ESjtBQTlDRTtFQUNFLHNDQUFBO0FBaURKO0FBM0NJO0VBQ0UsMkJBQUE7QUE4Q047QUE1Q0k7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE4Q047QUEzQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUE2Q047QUEzQ0k7RUFDRSwyQkFBQTtBQTZDTjtBQTNDSTtFQUNFLGdCQUFBO0FBNkNOO0FBM0NJO0VBQ0UsZUFBQTtBQTZDTjtBQTNDSTtFQUNFLGtCQUFBO0FBNkNOIiwiZmlsZSI6ImNvbnN1bHRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiRiYWNrZ3JvdW5kLWltYWdlLXBhdGg6IFwiL2ljb25zL2JhY2tncm91bmQuanBnXCI7XG4kYmFja2dyb3VuZC1pbWFnZS0yeC1wYXRoOiBcIi9iYWNrZ3JvdW5kQDJ4LmpwZ1wiO1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzI2NmViNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNmZmJiMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSwgMjA0LCAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2JkOTcwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZmQyMWU7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICMjZmZjZDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjNDk0YjUwO1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM0LCAzNDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjY2NjY2NjOyAvLyAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAvLyAtLWZjOiNDQ0NDQ0M7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1ibHVlLWJnLWNvbG9yOiAjMDA3MmJiO1xufVxuQG1peGluIGJhY2tncm91bmRNaXhpbigkaGFzQmFja2dyb3VuZEltYWdlKSB7XG4gIEBpZiAkYmFja2dyb3VuZC1pbWFnZS1wYXRoIHtcbiAgICAvL2RvIHNvbWV0aGluZ1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2dyb3VuZC1pbWFnZS1wYXRoKTtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICBAaWYgJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCB7XG4gICAgLy9kbyBzb21ldGhpbmdcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCk7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLmp1bWJvdHJvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDI0MHB4O1xuICBAaW5jbHVkZSBiYWNrZ3JvdW5kTWl4aW4oJGJhY2tncm91bmQtaW1hZ2UtcGF0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgLmp1bWJvdHJvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuLmp1bWJvdHJvbi5hd2FpdCB7XG4gIGhlaWdodDogMjgzcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc3VidGl0bGUuZG9jdG9yIHtcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG5cbiAgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnZpZGVvLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggMTUlIDEycHggMTUlO1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWJvcmRlci1yYWRpdXM6IDM2cHg7XG59XG5cbi5idWJibGUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAvLyBtaW4td2lkdGg6MjcwcHg7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGZsZXg6IDEgMSAzMDBweDtcbiAgLy8gbWF4LXdpZHRoOiA4MCU7XG4gIC8vIG1pbi13aWR0aDogMDtcbn1cblxuLmluY29taW5nID4gaW9uLXJvdyA+IGlvbi1jb2wgPiAuYnViYmxlIGF7XG4gIGNvbG9yOiAjZTJlMmUyO1xufVxuXG4uaW5jb21pbmcgPiBpb24tcm93ID4gaW9uLWNvbCA+IC5idWJibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5zcGFuLm1zZy10aW1lIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDAuNDNlbTtcbiAgY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcbn1cblxucm93Lm1zZy10aW1lIHtcbiAgbWluLXdpZHRoOiA4MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLm91dGdvaW5nLFxuLmluY29taW5nIHtcbiAgLy8gbWluLXdpZHRoOjI3MHB4O1xuICAvLyBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLm91dGdvaW5nID4gaW9uLXJvdyA+IGlvbi1jb2wgPiAuYnViYmxlIHtcbiAgY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAvLyBtYXJnaW4tbGVmdDogY2FsYyhjYWxjKDIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gIC8vIGZsZXg6IDAgMCBjYWxjKGNhbGMoMTAgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gIC8vIHdpZHRoOiBjYWxjKGNhbGMoMTAgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gIC8vIG1heC13aWR0aDogY2FsYyhjYWxjKDEwIC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIpKSAqIDEwMCUpO1xufVxuXG4ub3V0Z29pbmcgaW9uLXJvdy5tc2ctdGltZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5vdXRnb2luZyBzcGFuLm1zZy10aW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmRpdi5pbnB1dCB7XG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmRpdi5pbnB1dCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wuaWNvIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pY28tbGVmdCxcbi5pY28tcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbmRpdi5pbnB1dCA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wuaWNvLWxlZnQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuXG5kaXYuaW5wdXQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sLmljby1sZWZ0ID4gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIC1ib3JkZXItc3R5bGU6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuZGl2LmlucHV0ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbC5pY28tcmlnaHQgPiBpb24tYnV0dG9uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICAtLWJvcmRlci13aWR0aDogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAvLyB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xuXG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1pYy1yZWNvcmRpbmcge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICAtYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1OHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1OHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IC03cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LmlucHV0ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gIC8vIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG5kaXYuaW5wdXQgPiBpb24tZ3JpZCA+IGlvbi1yb3cgPiBpb24tY29sID4gaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZzogMDtcbn1cblxuZGl2LmlucHV0ID4gaW9uLWdyaWQgPiBpb24tcm93ID4gaW9uLWNvbCA+IGlvbi1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAvLyBtYXJnaW4tbGVmdDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuanVtYm90cm9uLFxuICAuanVtYm90cm9uLmF3YWl0IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG4uam9pbi1jYWxsLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5rZWVwLW9wZW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VlNTU1NTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNjaGF0SGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuaW9uLWljb25bbmFtZT1cImF0dGFjaFwiXSB7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cblxuLmxlZnQtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJpZ2h0LWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jaGF0LXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5vdXRnb2luZyB7XG4gIC5jaGF0LXRleHQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICBodG1sW2RhdGEtdGhlbWU9XCJhY2Nlc3NpYmlsaXR5XCJdIHtcbiAgICAudGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgICNjaGF0SGVhZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLm1zZy10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgfVxuICAgIC5kb2N0b3ItaW5mby1jYXJkIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLmtlZXAtb3BlbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 7954:
/*!****************************************************************!*\
  !*** ./src/app/consultation/consultation.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<app-video-room\n  *ngIf=\"ongoingCall && shouldJoinCall\"\n  [sessionId]=\"consultation.id\"\n  (hangup)=\"hangup()\"\n  [accepted]=\"true\"\n  [message]=\"ongoingCall\"\n  [token]=\"ongoingCall.token\"\n></app-video-room>\n<app-video-room\n  *ngIf=\"callRunning\"\n  [sessionId]=\"consultation.id\"\n  [message]=\"ongoingCall\"\n  [token]=\"ongoingCall.token\"\n  (hangup)=\"hangup()\"\n></app-video-room>\n<ion-header id=\"chatHeader\">\n  <ion-toolbar>\n    <ion-title> {{ 'consultation.inProgress' | translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content\n  style=\"height: calc(100% - 81px)\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"handleScroll($event)\"\n  *ngIf=\"consultation && consultation.consultation\"\n  #scrollMe\n  id=\"chatContainer\"\n>\n  <p class=\"keep-open\" *ngIf=\"consultation.consultation.status !== 'active'\">\n    {{ 'consultation.plsKeepThisOpenPage' | translate }}\n  </p>\n  <ion-card\n    *ngIf=\"consultation.consultation.status === 'active'\"\n    class=\"jumbotron ion-no-padding ion-no-margin\">\n    <ion-card-header>\n      <ion-card-title class=\"title\">\n        {{ 'consultation.consultation' | translate }}\n        <br />\n        <strong>{{ 'consultation.capInProgress' | translate }}</strong>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"doctor-info-card\" *ngIf=\"consultation.doctor\">\n      <p class=\"subtitle\">\n        {{ 'consultation.youAreNowInConsultation' | translate }} {{ consultation.doctor.firstName }} {{ consultation.doctor.lastName }}\n      </p>\n      <p class=\"subtitle doctor\" *ngIf=\"consultation.doctor.phoneNumber\">\n        {{ 'consultation.phone' | translate }}\n        <a href=\"tel:{{ consultation.doctor.phoneNumber }}\"\n          >{{ consultation.doctor.phoneNumber }}</a\n        >\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card\n    *ngIf=\"consultation.consultation.status === 'pending'\"\n    class=\"jumbotron await ion-no-padding ion-no-margin\"\n  >\n    <ion-title class=\"title\">\n      {{ 'consultation.requestForConsultation' | translate }}\n      <br />\n      <strong>{{ 'consultation.capInProgress' | translate }}</strong>\n    </ion-title>\n    <p class=\"subtitle\">{{ 'consultation.youAreInWaiting' | translate }}</p>\n\n    <!--\n    <ion-button class=\"video-btn\">\n      <ion-icon slot=\"start\" name=\"mic\"></ion-icon> &nbsp;&nbsp; laisser un\n      message audio\n    </ion-button> -->\n    <ion-button\n      *ngIf=\"currentUser.role === 'patient' || currentUser.role === 'nurse'\"\n      (click)=\"showCancelModal()\"\n      class=\"cancel-btn\"\n    i18n>\n    {{ 'consultation.cancel' | translate }}\n    </ion-button>\n  </ion-card>\n\n  <ion-grid class=\"chat\">\n    <ion-grid\n      *ngFor=\"let msg of chatMessages\"\n      [ngClass]=\"{\n        outgoing: msg.direction === 'outgoing',\n        incoming: msg.direction === 'incoming'\n      }\"\n      class=\"ion-margin\"\n    >\n\n\n\n      <ion-row *ngIf=\"msg.isFile\" class=\"ion-no-padding ion-no-margin\">\n        <ion-col class=\"chat-text-container\">\n          <ion-row class=\"bubble ion-padding\">\n            <p\n              style=\"overflow-wrap: normal\"\n              class=\"ion-no-padding ion-no-margin\"\n            >\n            {{'consultation.download' | translate}}:\n              <a\n              *ngIf=\"msg.isFile\"\n              (click)=\"openlink(msg.attachmentsURL)\"\n              >\n              {{msg.fileName}}\n          </a>\n            </p>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <audio *ngIf=\"msg.isAudio\" controls>\n        <source [src]=\"msg.attachmentsURL\" type=\"audio/mpeg\">\n        {{ 'consultation.yourBrowserDoesNotSupport' | translate }}\n      </audio>\n\n      <ion-row\n        [ngClass]=\"{\n        'right-img': msg.direction === 'outgoing',\n        'left-img': msg.direction === 'incoming'\n      }\"\n      >\n        <img\n          *ngIf=\"msg.isImage\"\n          style=\"width: 60%; height: 60%; display: block\"\n          [src]=\"msg.attachmentsURL\"\n          alt=\"Couldn't load image\"\n          (click)=\"openImgModal($event)\"\n        />\n      </ion-row>\n\n      <ion-row *ngIf=\"msg.text\" class=\"ion-no-padding ion-no-margin\">\n        <ion-col class=\"chat-text-container\">\n          <ion-row class=\"bubble ion-padding\">\n            <p\n              style=\"overflow-wrap: normal\"\n              class=\"ion-no-padding ion-no-margin\"\n            >\n              {{ msg.text }}\n            </p>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"msg.type === 'videoCall'\" style=\"text-align: center\">\n        <p style=\"text-align: center; width: 100%\">\n          <ng-container *ngIf=\"msg.acceptedAt ; else elseBlock\">\n            {{'consultation.videoCallStarted' | translate}}\n          </ng-container>\n          <ng-template #elseBlock >{{'consultation.videoCallRequested' | translate}}</ng-template>\n        </p>\n        <span\n          class=\"msg-time\"\n          style=\"display: block; width: 100%; margin-top: 0 !important\">\n          {{ msg.createdAt | date:'medium' }}\n        </span>\n\n        <ng-container *ngIf=\"msg.acceptedAt && msg.closedAt\">\n          <p style=\"text-align: center; width: 100%\">\n            {{'consultation.videoCallEnded' | translate}}\n          </p>\n          <span\n            class=\"msg-time\"\n            style=\"display: block; width: 100%; margin-top: 0 !important\"\n            >{{ msg.closedAt | date:'medium' }}\n          </span>\n        </ng-container>\n      </ion-row>\n\n      <ion-row *ngIf=\"msg.type === 'audioCall'\" style=\"text-align: center\">\n        <p style=\"text-align: center; width: 100%\">\n          <ng-container *ngIf=\"msg.acceptedAt ; else elseBlock\">\n            {{'consultation.audioCallStarted' | translate}}\n          </ng-container>\n          <ng-template #elseBlock>{{'consultation.audioCallRequested' | translate}}</ng-template>\n        </p>\n        <span\n          class=\"msg-time\"\n          style=\"display: block; width: 100%; margin-top: 0 !important\"\n          >{{ msg.createdAt | date:'medium' }}\n        </span>\n\n        <ng-container *ngIf=\"msg.acceptedAt && msg.closedAt\">\n          <p style=\"text-align: center; width: 100%\">\n            {{'consultation.audioCallEnded' | translate}}\n          </p>\n          <span\n            class=\"msg-time\"\n            style=\"display: block; width: 100%; margin-top: 0 !important\"\n            >{{ msg.closedAt | date:'medium' }}\n          </span>\n        </ng-container>\n      </ion-row>\n\n\n    </ion-grid>\n    <ion-grid class=\"ion-margin outgoing\">\n      <ion-spinner *ngIf=\"isUploading\" name=\"dots\"></ion-spinner>\n    </ion-grid>\n    <div class=\"join-call-btn-container\">\n      <ion-button\n        *ngIf=\"ongoingCall && !shouldJoinCall && !callRunning\"\n        class=\"controller\"\n        color=\"success\"\n        (click)=\"joinCall()\"\n        >\n      {{'consultation.joinCall'|translate}}\n      </ion-button>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-modal [isOpen]=\"isImgModalOpen\" (willDismiss)=\"closeImgModal(false)\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{ imgModalName }}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"closeImgModal(false)\">{{ \"login.back\" | translate }}</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <img\n      *ngIf=\"imgModalSrc\"\n      [src]=\"imgModalSrc\"\n      alt=\"imgModalAlt\"\n    />\n    <ion-button (click)=\"closeImgModal(false)\">{{ \"login.back\" | translate }}</ion-button>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ng-container\n  *ngIf=\"currentUser.role === 'patient' || currentUser.role === 'nurse'\"\n>\n  <div\n    slot=\"fixed\"\n    vertical=\"bottom\"\n    *ngIf=\"consultation && consultation.consultation && consultation.consultation.status !== 'closed'\"\n    class=\"input\"\n    id=\"chatInputContainer\"\n  >\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ico ico-left\">\n          <ion-button (click)=\"showAttachmentModal()\">\n            <ion-icon slot=\"icon-only\" name=\"attach\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col\n          ><ion-textarea\n            #txtArea\n            (keypress)=\"sendMsg($event)\"\n            (click)=\"readMessages()\"\n            [(ngModel)]=\"chatText\"\n            placeholder=\"{{'consultation.enterYourMessage'|translate}}\"\n            (ionFocus)=\"adjustScroll()\"\n          ></ion-textarea\n        ></ion-col>\n\n        <ion-col size=\"2\" class=\"ico ico-right\">\n          <ion-button (click)=\"send()\">\n            <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ng-container>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_consultation_consultation_module_ts.js.map