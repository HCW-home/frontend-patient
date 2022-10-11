"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_test_test_module_ts"],{

/***/ 2543:
/*!*********************************!*\
  !*** ./src/app/info.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoService": () => (/* binding */ InfoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let InfoService = class InfoService {
    constructor() {
        this.newInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getInfo() {
        return this.info;
    }
    updateInfo(info) {
        this.info = info;
        this.newInfo$.next(info);
    }
};
InfoService.ctorParameters = () => [];
InfoService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], InfoService);



/***/ }),

/***/ 4386:
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _test_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.component.html?ngResource */ 8172);
/* harmony import */ var _test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component.scss?ngResource */ 1141);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hug-angular-lib */ 90);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! hug-angular-lib */ 8872);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../socket-events.service */ 7800);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../consultation.service */ 9936);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 1183);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/services/openvidu.service */ 4468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../info.service */ 2543);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ 384);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.service */ 6527);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;










// translate




let TestComponent = class TestComponent {
    constructor(infoService, openviduSev, router, platform, androidPermissions, conServ, socketService, authService, zone, translate, configService, roomService, logger) {
        this.infoService = infoService;
        this.openviduSev = openviduSev;
        this.router = router;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.conServ = conServ;
        this.socketService = socketService;
        this.authService = authService;
        this.zone = zone;
        this.translate = translate;
        this.configService = configService;
        this.roomService = roomService;
        this.logger = logger;
        // Constants
        this.ANDROID_PERMISSIONS = [
            "android.permission.CAMERA",
            "android.permission.RECORD_AUDIO",
            "android.permission.MODIFY_AUDIO_SETTINGS",
        ];
        this.lockScroll = false;
        this.info = [];
        this.testStatus = "DISCONNECTED";
        this.testButton = "Tester mon matériel";
        this.tickClass = "trigger";
        this.showSpinner = false;
        this.msgChain = [];
        this.volumeLevel = 0;
        this.accessHardwareGranted = null;
        this.testStarted = null;
        this.loading = false;
        this.globalMessage = "";
        this.inviteToken = "";
        this.subscriptions = [];
        this.testButton = this.translate.instant("test.testMyEquipment");
        // Subscription to info updated event raised by InfoService
        console.log("testButton ", this.testButton);
        this.subscriptions.push(this.infoService.newInfo$.subscribe((info) => {
            this.info.push(info);
            this.scrollToBottom();
        }));
    }
    ngOnInit() {
        this.logger.debug("Test component on init");
        this.subscriptions.push(this.translate
            .get("test.testMyEquipment")
            .subscribe((translated) => {
            this.testButton = this.translate.instant("test.testMyEquipment");
        }));
        this.inviteToken = localStorage.getItem("inviteToken");
    }
    initHardwareDevices() {
        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
            console.log("Got stren", stream);
            stream.getTracks().forEach((track) => track.stop());
            this.initAudioPublisher();
        })
            .catch((error) => {
            console.log("EROOOOOR", error);
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                stream.getTracks().forEach((track) => track.stop());
                this.initAudioPublisher();
            })
                .catch(() => { });
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then((stream) => {
                stream.getTracks().forEach((track) => track.stop());
                this.initAudioPublisher();
            })
                .catch(() => { });
        });
    }
    startTest() {
        if (this.testStarted) {
            this.globalMessage = "";
            this.testStatus = "DISCONNECTED";
        }
        this.showSpinner = true;
        return this.toggleTestVideo();
    }
    beforeunloadHandler() {
        // On window closed leave test session and close info websocket
        this.endTestVideo();
    }
    ngOnDestroy() {
        console.log("ng on destroy ..........");
        // On component destroyed leave test session and close info websocket
        this.endTestVideo();
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
    toggleTestVideo() {
        this.testStarted = !this.testStarted;
        if (!this.session) {
            this.testVideo();
        }
        else {
            this.endTestVideo();
        }
    }
    testVideo() {
        this.openviduSev
            .getTestToken()
            .then(({ token, peerId }) => {
            this.peerId = peerId;
            this.connectToSession(token);
        })
            .catch((error) => {
            if (error === 401) {
                // User unauthorized error. OpenVidu security is active
                this.testVideo();
            }
            else {
                console.error(error);
                this.msgChain.push({
                    success: false,
                    msg: "Error connecting to session: " + error,
                });
            }
        });
    }
    proceedToConsultation() {
        this.endTestVideo();
        const inviteToken = localStorage.getItem("inviteToken");
        const user = this.authService.currentUserValue;
        console.log("proceed to consultation ", user);
        if (inviteToken) {
            this.loading = true;
            this.conServ
                .createConsultation({
                queue: "covid19",
                gender: "unknown",
                IMADTeam: "none",
                invitationToken: inviteToken,
            })
                .toPromise()
                .then((consultation) => {
                if (!consultation) {
                    return this.router.navigate(["await-consultation"]);
                }
                localStorage.setItem("currentConsultation", consultation.id);
                // localStorage.removeItem('inviteToken');
                this.router.navigate(["consultation", consultation.id]);
                //
            })
                .catch((err) => {
                console.log(err);
            })
                .finally(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            });
            // this.authService
            //   .loginWithInvite(inviteToken, '')
            //   .toPromise()
            //   .then((user) => {
            //     this.conServ
            //       .createConsultation({
            //         queue: 'covid19',
            //         gender: 'unknown',
            //         IMADTeam: 'none',
            //         invitationToken: inviteToken,
            //       })
            //       .toPromise()
            //       .then((consultation) => {
            //         localStorage.setItem('currentConsultation', consultation.id)
            //         this.router.navigate(['consultation', consultation.id])
            //         //
            //       })
            //       .catch((err) => {
            //         console.log(err)
            //       })
            //   })
            //   .catch((err) => {
            //     console.log(err)
            //     this.loading = false
            //   })
            //   .finally(() => {
            //     setTimeout(() => {
            //       this.loading = false
            //     }, 2000)
            //   })
        }
    }
    initAudioPublisher() {
        this.roomService.onVolumeChange.subscribe((change) => {
            this.zone.run(() => {
                this.volumeLevel = change.volume * 1000;
            });
        });
        // if (this.audioPublisher) {
        //   this.audioPublisher.stream.disposeMediaStream()
        //   this.audioPublisher.off('streamAudioVolumeChange')
        //   this.audioPublisher = null
        // }
        // this.OV.initPublisherAsync(undefined, {
        //   audioSource: this.audioDeviceId,
        //   videoSource: null,
        //   publishAudio: true,
        //   publishVideo: false,
        // })
        //   .then((publisher) => {
        //     this.audioPublisher = publisher
        //     this.audioPublisher.on('streamAudioVolumeChange', (event: any) => {
        //       this.volumeLevel = event.value.newValue + 100
        //     })
        //   })
        //   .catch((error) => {
        //     console.error(error)
        //   })
    }
    initSession(token) {
        this.accessHardwareGranted = true;
        this.session = true;
        this.roomService.init({ peerId: this.peerId });
        this.msgChain.push({
            success: true,
            msg: "Accès au micro et à la caméra",
        });
        this.roomService.join({
            roomId: this.peerId,
            joinVideo: true,
            joinAudio: true,
            token: token,
        });
        this.roomService.onCamProducing.subscribe((stream) => {
            this.msgChain.push({ success: true, msg: "Connected to session" });
            this.logger.debug("Cam producing ", stream);
            this.myCamStream = stream;
            this.testButton = this.translate.instant("test.stopTheTest");
            this.testStatus = "PLAYING";
            this.globalMessage = this.translate.instant("test.yourDeviceSeems");
            this.showSpinner = false;
            this.connectWebCam();
        });
        // return this.session
        //   .connect(token)
        //   .then(() => {
        //     this.connectWebCam()
        //   })
        //   .catch((error) => {
        //     this.msgChain.push({
        //       success: false,
        //       msg: 'Error connecting to session: ' + error,
        //     })
        //   })
    }
    connectToSession(token) {
        this.msgChain = [];
        this.session = true;
        console.log("OV session", this.session);
        console.log("Session token", token);
        this.testStatus = "CONNECTING";
        this.testButton = this.translate.instant("test.stopTheTest");
        this.accessHardwareGranted = null;
        if (this.platform.is("android") && this.platform.is("hybrid")) {
            this.checkAndroidPermissions()
                .then(() => {
                console.log("Permissions ok !");
                this.initSession(token);
            })
                .catch((err) => {
                console.error(err);
            });
        }
        else {
            this.initSession(token);
        }
    }
    connectWebCam() {
        // this.msgChain.push({ success: true, msg: 'Connected to session' });
        console.log("Start connection webcam");
        this.testStatus = "CONNECTED";
        this.initAudioPublisher();
        // this.initHardwareDevices()
        // const publisherRemote = this.OV.initPublisher(
        //   'mirrored-video',
        //   {
        //     publishAudio: true,
        //     publishVideo: true,
        //     resolution: '640x480',
        //   },
        //   (e) => {
        //     if (!!e) {
        //       console.error(e)
        //     }
        //   },
        // )
        // publisherRemote.on('accessAllowed', () => {
        //   this.accessHardwareGranted = true
        //   this.msgChain.push({
        //     success: true,
        //     msg: 'Accès au micro et à la caméra',
        //   })
        // })
        // publisherRemote.on('accessDenied', () => {
        //   // this.endTestVideo();
        //   this.accessHardwareGranted = false
        //   this.msgChain.push({
        //     success: false,
        //     msg: 'Accès au micro et à la caméra',
        //   })
        //   this.globalMessage =
        //     this.translate.instant('test.yourDeviceAppears');
        // })
        // publisherRemote.on('videoElementCreated', (video) => {
        //   this.showSpinner = true
        //   this.msgChain.push({ success: true, msg: this.translate.instant('test.videoElementCreated') })
        // })
        // publisherRemote.on('streamCreated', (video) => {
        //   this.msgChain.push({ success: true, msg: this.translate.instant('test.streamCreated') })
        // })
        // publisherRemote.on('streamPlaying', (video) => {
        //   this.msgChain.push({ success: true, msg: this.translate.instant('test.connectionWithServer') })
        //   console.log('mesgchaing ', this.msgChain)
        //   this.testButton = this.translate.instant('test.stopTheTest')
        //   this.testStatus = 'PLAYING'
        //   this.globalMessage =
        //     this.translate.instant('test.yourDeviceSeems')
        //   this.showSpinner = false
        // })
        // this.msgChain.push({
        //   success: true,
        //   msg: this.translate.instant('test.testStarting'),
        // })
        // console.log('Will subscribe')
        // publisherRemote.subscribeToRemote()
        // console.log('subscribed')
        // this.session.publish(publisherRemote)
        // console.log('published')
    }
    endTestVideo() {
        console.log("End TEST>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        if (this.session) {
            this.roomService.close();
            this.session = null;
        }
        this.testStatus = "DISCONNECTED";
        this.testButton = this.translate.instant("test.testMyEquipment");
        this.showSpinner = false;
        this.info = [];
        this.msgChain = [];
        if (this.myCamStream) {
            this.myCamStream.mediaStream.getTracks().forEach(function (track) {
                track.stop();
            });
            this.myCamStream = null;
        }
        localStorage.setItem("videoCallTested", "true");
    }
    scrollToBottom() {
        try {
            if (!this.lockScroll) {
                this.myScrollContainer.nativeElement.scrollTop =
                    this.myScrollContainer.nativeElement.scrollHeight;
            }
        }
        catch (err) {
            console.error("[Error]:" + err.toString());
        }
    }
    ionViewWillLeave() {
        console.log("ion view will leave ..........");
        this.endTestVideo();
    }
    checkAndroidPermissions() {
        console.log("Requesting Android Permissions");
        return new Promise((resolve, reject) => {
            this.platform.ready().then(() => {
                this.androidPermissions
                    .requestPermissions(this.ANDROID_PERMISSIONS)
                    .then(() => {
                    this.androidPermissions
                        .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
                        .then((camera) => {
                        console.log("permissions camera", camera);
                        this.androidPermissions
                            .checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
                            .then((audio) => {
                            console.log("permissions audio", audio);
                            this.androidPermissions
                                .checkPermission(this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS)
                                .then((modifyAudio) => {
                                console.log("check permission final request", camera.hasPermission, audio.hasPermission, modifyAudio.hasPermission);
                                if (camera.hasPermission &&
                                    audio.hasPermission &&
                                    modifyAudio.hasPermission) {
                                    resolve(null);
                                }
                                else {
                                    reject(new Error("Permissions denied: " +
                                        "\n" +
                                        " CAMERA = " +
                                        camera.hasPermission +
                                        "\n" +
                                        " AUDIO = " +
                                        audio.hasPermission +
                                        "\n" +
                                        " AUDIO_SETTINGS = " +
                                        modifyAudio.hasPermission));
                                }
                            })
                                .catch((err) => {
                                console.error("Checking permission " +
                                    this.androidPermissions.PERMISSION
                                        .MODIFY_AUDIO_SETTINGS +
                                    " failed");
                                reject(err);
                            });
                        })
                            .catch((err) => {
                            console.error("Checking permission " +
                                this.androidPermissions.PERMISSION.RECORD_AUDIO +
                                " failed");
                            reject(err);
                        });
                    })
                        .catch((err) => {
                        console.error("Checking permission " +
                            this.androidPermissions.PERMISSION.CAMERA +
                            " failed");
                        reject(err);
                    });
                })
                    .catch((err) => console.error("Error requesting permissions: ", err));
            });
        });
    }
};
TestComponent.ctorParameters = () => [
    { type: _info_service__WEBPACK_IMPORTED_MODULE_6__.InfoService },
    { type: _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__.OpenViduService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions },
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService },
    { type: _socket_events_service__WEBPACK_IMPORTED_MODULE_2__.SocketEventsService },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService },
    { type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_13__.RoomService },
    { type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_14__.NGXLogger }
];
TestComponent.propDecorators = {
    myScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["scrollMe",] }],
    beforeunloadHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener, args: ["window:beforeunload",] }]
};
TestComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-test-call",
        template: _test_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_test_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _info_service__WEBPACK_IMPORTED_MODULE_6__.InfoService !== "undefined" && _info_service__WEBPACK_IMPORTED_MODULE_6__.InfoService) === "function" ? _a : Object, typeof (_b = typeof _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__.OpenViduService !== "undefined" && _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_5__.OpenViduService) === "function" ? _b : Object, typeof (_c = typeof _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform) === "function" ? _d : Object, typeof (_e = typeof _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions !== "undefined" && _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions) === "function" ? _e : Object, typeof (_f = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_3__.ConsultationService) === "function" ? _f : Object, typeof (_g = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_2__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_2__.SocketEventsService) === "function" ? _g : Object, typeof (_h = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService) === "function" ? _h : Object, typeof (_j = typeof _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone) === "function" ? _j : Object, typeof (_k = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService) === "function" ? _k : Object, typeof (_l = typeof _config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService) === "function" ? _l : Object, typeof (_m = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_13__.RoomService !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_13__.RoomService) === "function" ? _m : Object, typeof (_o = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_14__.NGXLogger !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_14__.NGXLogger) === "function" ? _o : Object])
], TestComponent);



/***/ }),

/***/ 6615:
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestModule": () => (/* binding */ TestModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component */ 4386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
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
        component: _test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent
    }
];
let TestModule = class TestModule {
};
TestModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_2__.I18nModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent]
    })
], TestModule);



/***/ }),

/***/ 1141:
/*!*****************************************************!*\
  !*** ./src/app/test/test.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "#dashboard-div {\n  height: 100%;\n  padding: 20px;\n}\n\n#log {\n  height: 90%;\n}\n\n#log-content {\n  height: 90%;\n  font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\nul {\n  margin: 0;\n}\n\n.test-btn {\n  background: white;\n}\n\nmat-card-title button.blue {\n  color: #ffffff;\n  background-color: #0088aa;\n}\n\nmat-card-title button.yellow {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #ffcc00;\n}\n\nmat-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#tick-div {\n  width: 100px;\n  height: 100px;\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#tooltip-tick {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.circ {\n  opacity: 0;\n  stroke-dasharray: 130;\n  stroke-dashoffset: 130;\n  transition: all 1s;\n}\n\n.tick {\n  stroke-dasharray: 50;\n  stroke-dashoffset: 50;\n  transition: stroke-dashoffset 1s 0.5s ease-out;\n}\n\n.drawn + svg .path {\n  opacity: 1;\n  stroke-dashoffset: 0;\n}\n\n#mirrored-video {\n  display: flex;\n  justify-content: center;\n}\n\nvideo {\n  display: block;\n  margin: 30px;\n  width: 100%;\n}\n\n@media screen and (max-width: 599px) {\n  mat-card-title {\n    font-size: 20px;\n  }\n}\n\n/* Pure CSS loader */\n\n#loader {\n  width: 100px;\n  height: 100px;\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#loader * {\n  box-sizing: border-box;\n}\n\n#loader ::after {\n  box-sizing: border-box;\n}\n\n#loader ::before {\n  box-sizing: border-box;\n}\n\n.loader-1 {\n  height: 100px;\n  width: 100px;\n  -webkit-animation: loader-1-1 4.8s linear infinite;\n  animation: loader-1-1 4.8s linear infinite;\n}\n\n@-webkit-keyframes loader-1-1 {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes loader-1-1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.loader-1 span {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  height: 100px;\n  width: 100px;\n  clip: rect(0, 100px, 100px, 50px);\n  -webkit-animation: loader-1-2 1.2s linear infinite;\n  animation: loader-1-2 1.2s linear infinite;\n}\n\n@-webkit-keyframes loader-1-2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(220deg);\n  }\n}\n\n@keyframes loader-1-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(220deg);\n  }\n}\n\n.loader-1 span::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  height: 100px;\n  width: 100px;\n  clip: rect(0, 100px, 100px, 50px);\n  border: 8px solid #4d4d4d;\n  border-radius: 50%;\n  -webkit-animation: loader-1-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n  animation: loader-1-3 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n}\n\n@-webkit-keyframes loader-1-3 {\n  0% {\n    -webkit-transform: rotate(-140deg);\n  }\n  50% {\n    -webkit-transform: rotate(-160deg);\n  }\n  100% {\n    -webkit-transform: rotate(140deg);\n  }\n}\n\n@keyframes loader-1-3 {\n  0% {\n    transform: rotate(-140deg);\n  }\n  50% {\n    transform: rotate(-160deg);\n  }\n  100% {\n    transform: rotate(140deg);\n  }\n}\n\n.wrap {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: scroll;\n}\n\n#volume-container {\n  width: 12px;\n  height: 400px;\n  border: 1px solid #eaeaea;\n  background: linear-gradient(180deg, rgb(194, 0, 0) 0%, rgb(252, 220, 1) 35%, rgb(41, 218, 0) 70%);\n}\n\n#volume-container #volume-slider {\n  height: 0;\n  width: 100%;\n  background: #fbfbfb;\n  transition: width 0.15s ease;\n  float: right;\n}\n\n.success {\n  color: #06d362;\n}\n\n.title {\n  color: #ffffff;\n  text-align: center;\n  margin: 55px auto 30px;\n}\n\n#test-video-container {\n  background: white;\n  padding: 1rem;\n  margin-top: 1rem;\n  border-radius: 1rem;\n  display: flex;\n}\n\n#test-video-container #test-video-container {\n  max-width: 100% !important;\n  display: block !important;\n  justify-content: center;\n}\n\n#test-video-container #video-audio-container {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  z-index: 100;\n  width: 100%;\n}\n\n#test-video-container #msg-chain {\n  flex: 1;\n}\n\n#local-video-undefined {\n  width: 100%;\n}\n\nion-content {\n  background: transparent;\n}\n\n.error {\n  color: red;\n}\n\n::ng-deep html[data-theme=accessibility] .proceed-btn,\n::ng-deep html[data-theme=accessibility] p {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1FQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUtBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBS0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0FBQ0Y7O0FBRUEsb0JBQUE7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFERjs7QUFJQTtFQUVFLHNCQUFBO0FBREY7O0FBSUE7RUFFRSxzQkFBQTtBQURGOztBQUlBO0VBRUUsc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSwrQkFBQTtFQURGO0VBR0E7SUFDRSxpQ0FBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLHVCQUFBO0VBRkY7RUFJQTtJQUNFLHlCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsK0JBQUE7RUFIRjtFQUtBO0lBQ0UsaUNBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSx1QkFBQTtFQUpGO0VBTUE7SUFDRSx5QkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkVBQUE7RUFDQSxtRUFBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSxrQ0FBQTtFQUxGO0VBT0E7SUFDRSxrQ0FBQTtFQUxGO0VBT0E7SUFDRSxpQ0FBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLDBCQUFBO0VBTkY7RUFRQTtJQUNFLDBCQUFBO0VBTkY7RUFRQTtJQUNFLHlCQUFBO0VBTkY7QUFDRjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQVBGOztBQTZCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEseUJBQUE7RUFDQSxpR0FBQTtBQTNCRjs7QUFrQ0U7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBaENKOztBQW9DQTtFQUNFLGNBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFqQ0Y7O0FBa0NFO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBaENKOztBQWtDRTtFQUNFLGFBQUE7RUFFQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWxDSjs7QUFvQ0U7RUFDRSxPQUFBO0FBbENKOztBQTBDQTtFQUNFLFdBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsdUJBQUE7QUF2Q0Y7O0FBeUNBO0VBQ0UsVUFBQTtBQXRDRjs7QUEwQ0k7O0VBRUUsZ0JBQUE7QUF2Q04iLCJmaWxlIjoidGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXNoYm9hcmQtZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jbG9nIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbiNsb2ctY29udGVudCB7XG4gIGhlaWdodDogOTAlO1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXN0LWJ0biB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5tYXQtY2FyZC10aXRsZSBidXR0b24uYmx1ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGFhO1xufVxuXG5tYXQtY2FyZC10aXRsZSBidXR0b24ueWVsbG93IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuI3RpY2stZGl2IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4jdG9vbHRpcC10aWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2lyYyB7XG4gIG9wYWNpdHk6IDA7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEzMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEzMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDFzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMXM7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLnRpY2sge1xuICBzdHJva2UtZGFzaGFycmF5OiA1MDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDFzIDAuNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMXMgMC41cyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDFzIDAuNXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDFzIDAuNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDFzIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi5kcmF3biArIHN2ZyAucGF0aCB7XG4gIG9wYWNpdHk6IDE7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xufVxuXG4jbWlycm9yZWQtdmlkZW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgbWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4vKiBQdXJlIENTUyBsb2FkZXIgKi9cblxuI2xvYWRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuI2xvYWRlciAqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jbG9hZGVyIDo6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNsb2FkZXIgOjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sb2FkZXItMSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlci0xLTEgNC44cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbG9hZGVyLTEtMSA0LjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlci0xLTEge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkZXItMS0xIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmxvYWRlci0xIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjbGlwOiByZWN0KDAsIDEwMHB4LCAxMDBweCwgNTBweCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXItMS0yIDEuMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRlci0xLTIgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXItMS0yIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyLTEtMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xuICB9XG59XG5cbi5sb2FkZXItMSBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgY2xpcDogcmVjdCgwLCAxMDBweCwgMTAwcHgsIDUwcHgpO1xuICBib3JkZXI6IDhweCBzb2xpZCAjNGQ0ZDRkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXItMS0zIDEuMnMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkZXItMS0zIDEuMnMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlci0xLTMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTQwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE2MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyLTEtMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNjBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XG4gIH1cbn1cblxuLndyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8vIC5idG4ge1xuLy8gICBtYXJnaW46IDIwcHggYXV0byAwO1xuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBib3JkZXItcmFkaXVzOiA2MHB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHdpZHRoOiBhdXRvO1xuLy8gICBiYWNrZ3JvdW5kOiAjYjVlMmZmO1xuLy8gICBjb2xvcjogdmFyKC0tYmx1ZS1iZy1jb2xvcik7XG4vLyAgIGZvbnQtc2l6ZTogMS4xZW07XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweCA3cHg7XG5cbi8vICAgaW1nIHtcbi8vICAgICBvcGFjaXR5OiAwLjg7XG4vLyAgICAgbWF4LWhlaWdodDogMTNweDtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4vLyB9XG5cbiN2b2x1bWUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogNDAwcHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDE5NCwgMCwgMCwgMSkgMCUsXG4gICAgcmdiYSgyNTIsIDIyMCwgMSwgMSkgMzUlLFxuICAgIHJnYmEoNDEsIDIxOCwgMCwgMSkgNzAlXG4gICk7XG5cbiAgI3ZvbHVtZS1zbGlkZXIge1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMTVzIGVhc2U7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbi5zdWNjZXNzIHtcbiAgY29sb3I6ICMwNmQzNjI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTVweCBhdXRvIDMwcHg7XG59XG5cbiN0ZXN0LXZpZGVvLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICAjdGVzdC12aWRlby1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgI3ZpZGVvLWF1ZGlvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI21zZy1jaGFpbiB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4vLyAjbXNnLWNoYWluIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gfVxuXG4jbG9jYWwtdmlkZW8tdW5kZWZpbmVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgLnByb2NlZWQtYnRuLFxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 8172:
/*!*****************************************************!*\
  !*** ./src/app/test/test.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding>\n  <div class=\"wrap\">\n    <div class=\"container\">\n      <div\n        id=\"dashboard-div\"\n        fxLayout=\"row\"\n        fxLayout.xs=\"column\"\n        fxLayoutGap=\"20px\"\n        fxLayoutGap.xs=\"20px\"\n      >\n        <div fxFlex=\"66%\" fxFlexOrder=\"1\" fxFlexOrder.xs=\"2\">\n          <div id=\"log\">\n            <div #scrollMe id=\"log-content\">\n              <ul>\n                <li *ngFor=\"let i of info\">\n                  <p>{{ i }}</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <div fxFlex=\"33%\" fxFlex.xs=\"auto\" fxFlexOrder=\"2\" fxFlexOrder.xs=\"1\">\n          <button\n            class=\"btn green big proceed-btn\"\n            mat-button\n            type=\"button\"\n            [disabled]=\"loading\"\n            (click)=\"proceedToConsultation()\"\n            *ngIf=\"inviteToken\"\n          >\n            {{\n              loading\n                ? (\"test.loading\" | translate)\n                : (\"test.joinTheConsultation\" | translate)\n            }}\n          </button>\n\n          <p class=\"text-white text-center\" *ngIf=\"inviteToken\">\n            {{ \"test.ifThisIsTheFirst\" | translate }}\n          </p>\n          <p class=\"text-white text-center\" *ngIf=\"!inviteToken\">\n            {{ \"test.welcomeToTheHome\" | translate: configService.config }}\n          </p>\n          <button\n            class=\"btn test-btn\"\n            mat-button\n            type=\"button\"\n            (click)=\"startTest()\"\n          >\n            {{ testButton }}\n          </button>\n\n          <div id=\"video-loop\">\n            <div id=\"test-video-container\" [hidden]=\"!testStarted\">\n              <div id=\"video-audio-container\">\n                <div>\n                  <div id=\"msg-chain\">\n                    <ul style=\"list-style: none\">\n                      <li\n                        *ngFor=\"let msg of msgChain\"\n                        [ngClass]=\"{\n                          error: !msg.success,\n                          success: msg.success\n                        }\"\n                      >\n                        <ion-icon\n                          *ngIf=\"msg.success\"\n                          style=\"color: #06d362\"\n                          name=\"checkmark-circle-outline\"\n                        ></ion-icon>\n\n                        <ion-icon\n                          *ngIf=\"!msg.success\"\n                          name=\"close-circle-outline\"\n                        ></ion-icon>\n                        {{ msg.msg }}\n                      </li>\n                    </ul>\n                    <p>{{ globalMessage }}</p>\n                  </div>\n                  <div\n                    [hidden]=\"!!accessHardwareGranted !== true\"\n                    style=\"display: flex\"\n                  >\n                    <div *ngIf=\"session\" id=\"volume-container\">\n                      <div\n                        id=\"volume-slider\"\n                        [style.height.%]=\"100 - volumeLevel\"\n                      ></div>\n                    </div>\n                    <div id=\"mirrored-video\">\n                      <app-peer-video\n                        #streamComponentLocal\n                        *ngIf=\"myCamStream\"\n                        [stream]=\"myCamStream\"\n                      ></app-peer-video>\n                      <div *ngIf=\"showSpinner\" id=\"loader\">\n                        <div class=\"loader-1 center\"><span></span></div>\n                      </div>\n                      <div *ngIf=\"session\" id=\"tick-div\">\n                        <div\n                          id=\"tooltip-tick\"\n                          *ngIf=\"testStatus == 'PLAYING'\"\n                          matTooltip=\"The connection is successful\"\n                          matTooltipPosition=\"below\"\n                        ></div>\n                        <div\n                          [ngClass]=\"\n                            testStatus == 'PLAYING'\n                              ? 'trigger drawn'\n                              : 'trigger'\n                          \"\n                        ></div>\n                        <svg\n                          version=\"1.1\"\n                          id=\"tick\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                          x=\"0px\"\n                          y=\"0px\"\n                          viewBox=\"-1 -1 39 39\"\n                          style=\"enable-background: new 0 0 37 37\"\n                          xml:space=\"preserve\"\n                        >\n                          <path\n                            class=\"circ path\"\n                            style=\"\n                              fill: none;\n                              stroke: #06d362;\n                              stroke-width: 4;\n                              stroke-linejoin: round;\n                              stroke-miterlimit: 10;\n                            \"\n                            d=\"\n        M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z\"\n                          />\n                          <polyline\n                            class=\"tick path\"\n                            style=\"\n                              fill: none;\n                              stroke: #06d362;\n                              stroke-width: 4;\n                              stroke-linejoin: round;\n                              stroke-miterlimit: 10;\n                            \"\n                            points=\"\n        11.6,20 15.9,24.2 26.4,13.8 \"\n                          />\n                        </svg>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_test_test_module_ts.js.map