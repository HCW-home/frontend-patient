(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 1094:
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 384);
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



let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const currentUser = this.authService.currentUserValue;
        console.log('current user ', currentUser);
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthGuard = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router) === "function" ? _a : Object, typeof (_b = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService) === "function" ? _b : Object])
], AuthGuard);



/***/ }),

/***/ 3272:
/*!*********************************************!*\
  !*** ./src/app/_guards/diagnostic.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosticGuard": () => (/* binding */ DiagnosticGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;


let DiagnosticGuard = class DiagnosticGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.hasWebRtcSupport()) {
            return this.router.parseUrl('/diagnostic');
        }
        return true;
    }
    /**
     * Tests whether the browser supports WebRTC or not.
     *
     * @returns {boolean}
     */
    hasWebRtcSupport() {
        return Boolean(window.RTCPeerConnection
            || window.webkitRTCPeerConnection
            || window.mozRTCPeerConnection
            || window.RTCIceGatherer);
    }
};
DiagnosticGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
DiagnosticGuard = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router) === "function" ? _a : Object])
], DiagnosticGuard);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_guards/auth.guard */ 1094);
/* harmony import */ var _guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_guards/diagnostic.guard */ 3272);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Routes
 *
 * AuthGuard is used to redirect unauthentified patients.
 * DiagnosticGuard is used to redirect unsupported browsers.
 */
const routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'diagnostic', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_diagnostic_diagnostic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./diagnostic/diagnostic.module */ 5431)).then(m => m.DiagnosticPageModule) },
    { path: 'test-call', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_test_test_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./test/test.module */ 6615)).then(m => m.TestModule) },
    // { path: 'video/:roomName', loadChildren: './video-room/video-room.module#VideoRoomPageModule' ,canActivate: [DiagnosticGuard, AuthGuard]},
    { path: 'info', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_info_info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./info/info.module */ 3056)).then(m => m.InfoPageModule), canActivate: [_guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__.DiagnosticGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'history', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_consultations_consultations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./consultations/consultations.module */ 1523)).then(m => m.ConsultationsPageModule), data: { title: '', status: 'closed' }, canActivate: [_guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__.DiagnosticGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'consultation/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_consultation_consultation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./consultation/consultation.module */ 4899)).then(m => m.ConsultationPageModule), canActivate: [_guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__.DiagnosticGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'pending-active', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_consultations_consultations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./consultations/consultations.module */ 1523)).then(m => m.ConsultationsPageModule), data: { title: '', status: 'pending|active' }, canActivate: [_guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__.DiagnosticGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'incommingCall', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_incomming-call_incomming-call_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./incomming-call/incomming-call.module */ 6888)).then(m => m.IncommingCallPageModule), canActivate: [_guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__.DiagnosticGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule), canActivate: [_guards_diagnostic_guard__WEBPACK_IMPORTED_MODULE_1__.DiagnosticGuard] },
    { path: 'closing-screen/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_closing-screen_closing-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./closing-screen/closing-screen.module */ 8001)).then(m => m.ClosingScreenPageModule) },
    { path: 'cgu', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cgu_cgu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cgu/cgu.module */ 8922)).then(m => m.CguPageModule) },
    { path: 'await-consultation', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_await-consultation_await-consultation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./await-consultation/await-consultation.module */ 2645)).then(m => m.AwaitConsultationPageModule) },
    { path: 'translation/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_translation_translation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./translation/translation.module */ 883)).then(m => m.TranslationPageModule) },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-variable.service */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call.service */ 1952);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socket-events.service */ 7800);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultation.service */ 9936);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.service */ 384);
/* harmony import */ var _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor-community/native-audio */ 2087);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/app */ 3253);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9151);


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

var _a, _b, _c, _d, _e, _f, _g, _h, _j;





 // import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";





 // import { NativeAudio } from "@awesome-cordova-plugins/native-audio/ngx";






let AppComponent = class AppComponent {
  constructor(platform, // private splashScreen: SplashScreen,
  callService, authService, socketEventsService, consultationService, zone, // private nativeAudio: NativeAudio,
  file, router, globalVariableService) {
    this.platform = platform;
    this.callService = callService;
    this.authService = authService;
    this.socketEventsService = socketEventsService;
    this.consultationService = consultationService;
    this.zone = zone;
    this.file = file;
    this.router = router;
    this.globalVariableService = globalVariableService;
    this.callRunning = false;
    this.redirected = false;
    this.testRoute = false;
    const parsedUrl = new URL(window.location.href);
    console.log("PARSED URL", parsedUrl);
    this.inviteToken = parsedUrl.searchParams.get("invite");

    if (!this.inviteToken && window.location.href.match(/invite=([^&]*)/)) {
      // parse invite from url using regex
      this.inviteToken = window.location.href.match(/invite=([^&]*)/)[1];
    }

    this.testRoute = window.location.href.includes("test-call");
    router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__.NavigationEnd)).subscribe(event => {
      console.log("Router event", event);
    });
  }

  ngOnInit() {
    this.authService.init().then(user => {
      if (user) {
        this.currentUser = user;
        this.initServices(this.currentUser);
      }

      this.initializeApp();
    }).catch(err => {
      console.log("ERROR getting user ", err);
      this.initializeApp();
    });
    this.authService.loggedInSub().subscribe(user => {
      this.currentUser = user;

      if (this.currentUser) {
        this.initServices(this.currentUser);
      }
    });
  }

  redirectToLogin() {
    if (!this.redirected) {
      if (this.inviteToken) {
        this.router.navigate(["/login"], {
          queryParams: {
            invite: this.inviteToken
          }
        });
      } else {
        this.router.navigate(["/login"]);
      }
    }

    this.redirected = true;
  }

  redirectToTestPage() {
    this.router.navigate(["/test-call"]);
    this.redirected = true;
  }

  redirectToAwaitConsultation() {
    this.router.navigate(["/await-consultation"]);
    this.redirected = true;
  }

  isNativeApp() {
    return !this.platform.is('mobileweb') && (this.platform.is('ios') || this.platform.is('android'));
  }

  initializeApp() {
    var _this = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_app__WEBPACK_IMPORTED_MODULE_11__.App.addListener('appUrlOpen', data => {
        const url = new URL(data.url);
        const token = url.searchParams.get('invite');

        if (/attachment/.test(data.url)) {
          console.log("This is going to open link");
          return;
        }

        if (localStorage.getItem("inviteToken") !== token) {
          _this.authService.logout();
        }

        localStorage.setItem("inviteToken", token);

        _this.authService.setInviteToken(token);

        _this.router.navigate(["/login"], {
          queryParams: {
            invite: token
          }
        });
      });

      if (_this.platform.is("ios") && _this.platform.is("cordova")) {
        const script2 = document.createElement("script");
        script2.type = "text/javascript"; // CHECK IF REQUIRED script2.src = "assets/libs/adapter-4.0.1.js";

        script2.async = false;
        document.head.appendChild(script2);
      }

      if (_this.inviteToken) {
        if (localStorage.getItem("inviteToken") !== _this.inviteToken) {
          console.log("New invite token .");
          localStorage.clear();
          yield _this.authService.logout();
          localStorage.setItem("inviteToken", _this.inviteToken); // document.location.reload()
        }
      }

      _this.platform.ready().then(() => {
        window.platform = _this.platform;

        if (_this.isNativeApp()) {
          _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
        }

        if (_this.platform.is("ios") && _this.platform.is("cordova") && _this.isNativeApp()) {
          console.log("Initializing iosrtc");

          try {
            cordova.plugins.iosrtc.registerGlobals();
          } catch (error) {
            console.error(error);
          }
        }

        console.log("router ", _this.router, _this.router.url);

        if (!_this.testRoute) {
          _this.redirectToLogin();
        }

        if (!_this.platform.is('mobileweb') && (_this.platform.is('ios') || _this.platform.is('android'))) {
          var notificationFile = 'public/assets/sounds/notification.mp3';
        } else {
          var notificationFile = 'notification.mp3';
        }

        _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.preload({
          assetId: 'ringSound',
          assetPath: notificationFile,
          // volume: 1,
          audioChannelNum: 1,
          isUrl: false
        }).then(r => {
          console.log("audio loaded ", r);
        }, err => {
          console.log("error loading sample here", err);
        });
      });
    })();
  }

  initServices(r) {
    this.socketEventsService.init(r, () => {});
    this.consultationService.init(r);
    this.callService.getCall().subscribe(e => {
      console.log("get call ", e);
      this.consultation = e;
      this.consultation.id = e._id;
      this.callRunning = true;
    }); // incoming call
  }

  androidWakeUp() {
    if (this.platform.is("cordova")) {
      cordova.plugins.backgroundMode.overrideBackButton();
      cordova.plugins.backgroundMode.wakeUp();
      cordova.plugins.backgroundMode.moveToForeground(); // must be here for it to work..

      cordova.plugins.backgroundMode.unlock();
      cordova.plugins.backgroundMode.disable();
    }
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
}, {
  type: _call_service__WEBPACK_IMPORTED_MODULE_5__.CallService
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService
}, {
  type: _socket_events_service__WEBPACK_IMPORTED_MODULE_6__.SocketEventsService
}, {
  type: _consultation_service__WEBPACK_IMPORTED_MODULE_7__.ConsultationService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone
}, {
  type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: _global_variable_service__WEBPACK_IMPORTED_MODULE_3__.GlobalVariableService
}];

AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-root",
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), __metadata("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform) === "function" ? _a : Object, typeof (_b = typeof _call_service__WEBPACK_IMPORTED_MODULE_5__.CallService !== "undefined" && _call_service__WEBPACK_IMPORTED_MODULE_5__.CallService) === "function" ? _b : Object, typeof (_c = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService) === "function" ? _c : Object, typeof (_d = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_6__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_6__.SocketEventsService) === "function" ? _d : Object, typeof (_e = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_7__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_7__.ConsultationService) === "function" ? _e : Object, typeof (_f = typeof _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone) === "function" ? _f : Object, typeof (_g = typeof _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File !== "undefined" && _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File) === "function" ? _g : Object, typeof (_h = typeof _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router) === "function" ? _h : Object, typeof (_j = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_3__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_3__.GlobalVariableService) === "function" ? _j : Object])], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular2-draggable */ 4150);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 1183);
/* harmony import */ var _video_room_video_room_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-room/video-room.module */ 6089);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 4587);
/* harmony import */ var _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/media/ngx */ 7770);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 4843);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 449);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 9940);
/* harmony import */ var _auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/jwt.interceptor */ 6624);
/* harmony import */ var _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/error.interceptor */ 7082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./i18n/i18n.module */ 3401);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/locales/en */ 9137);
/* harmony import */ var _shared_components_request_consultation_request_consultation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/request-consultation/request-consultation.component */ 2792);
/* harmony import */ var _shared_components_close_consultation_close_consultation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/close-consultation/close-consultation.component */ 1875);
/* harmony import */ var _shared_components_choose_attachment_choose_attachment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/choose-attachment/choose-attachment.component */ 3307);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./config.service */ 6527);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! hug-angular-lib */ 90);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { VideoRoomPageModule } from './video-room/video-room.module';














// translate




(0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_15__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_16__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_17__["default"]);





let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule.forRoot({
                platform: {
                    /** The default `desktop` function returns false for devices with a touchscreen.
                    * This is not always wanted, so this function tests the User Agent instead.
                    **/
                    'desktop': (win) => {
                        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
                        return !isMobile;
                    }
                },
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
            _video_room_video_room_module__WEBPACK_IMPORTED_MODULE_4__.VideoRoomPageModule,
            angular2_draggable__WEBPACK_IMPORTED_MODULE_28__.AngularDraggableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            // VideoRoomPageModule, //cordova plugin add cordova-plugin-background-mode
            // translate
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_13__.I18nModule,
            hug_angular_lib__WEBPACK_IMPORTED_MODULE_29__.HugAngularLibModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicRouteStrategy },
            _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions,
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File,
            _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera,
            _awesome_cordova_plugins_media_ngx__WEBPACK_IMPORTED_MODULE_7__.Media,
            _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_8__.NativeAudio,
            _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__.LocalNotifications,
            _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_10__.Network,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS, useClass: _auth_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__.JwtInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS, useClass: _auth_error_interceptor__WEBPACK_IMPORTED_MODULE_12__.ErrorInterceptor, multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_22__.LOCALE_ID, useValue: 'fr-FR' },
            _config_service__WEBPACK_IMPORTED_MODULE_21__.ConfigService,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_22__.APP_INITIALIZER,
                useFactory: (cs) => () => cs.getConfig(),
                deps: [_config_service__WEBPACK_IMPORTED_MODULE_21__.ConfigService],
                multi: true
            }
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _shared_components_request_consultation_request_consultation_component__WEBPACK_IMPORTED_MODULE_18__.RequestConsultationComponent,
            _shared_components_close_consultation_close_consultation_component__WEBPACK_IMPORTED_MODULE_19__.CloseConsultationComponent,
            _shared_components_choose_attachment_choose_attachment_component__WEBPACK_IMPORTED_MODULE_20__.ChooseAttachmentComponent,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socket-events.service */ 7800);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consultation.service */ 9936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-variable.service */ 6898);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;









let AuthService = class AuthService {
    constructor(http, _socketEventsService, consultationService, router, globalVariableService, platform) {
        this.http = http;
        this._socketEventsService = _socketEventsService;
        this.consultationService = consultationService;
        this.router = router;
        this.globalVariableService = globalVariableService;
        this.platform = platform;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.inviteToken = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    init() {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentUser = this.currentUserSubject.asObservable();
        return this.getCurrentUser().toPromise();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    get currentInviteToken() {
        const sessionToken = localStorage.getItem('inviteToken');
        return sessionToken;
    }
    setInviteToken(inviteToken) {
        console.log('SET invite token');
        localStorage.setItem('inviteToken', inviteToken);
        this.inviteToken.next(inviteToken);
    }
    observeInviteToken() {
        return this.inviteToken.asObservable();
    }
    loggedInSub() {
        return this.loggedIn;
    }
    //
    loginWithInvite(inviteToken, phoneNumber, translator) {
        const opts = { withCredentials: true };
        return this.http.post(`${this.globalVariableService.getApiPath()}/login-invite`, { inviteToken, phoneNumber, translator }, opts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
            console.log('logged in and got user data ', res);
            // login successful if there's a jwt token in the response
            if (res.user && res.user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.currentUserSubject.next(res.user);
            }
            // this._socketEventsService.init(res.user);
            this.consultationService.init(res.user);
            this.loggedIn.next(res.user);
            if (this.platform.is('cordova') && window.cordova && window.cordova.plugins) {
                console.log('Flush cookies ');
                //(<any>window).cordova.plugins.CookieManagementPlugin.flush();
            }
            return res.user;
        }));
    }
    // //
    // login() {
    //   return this.http.get<any>(`${this.globalVariableService.getApiPath()}/login-cert`, {}).pipe(map(res => {
    //     console.log('got user data ', res);
    //     // login successful if there's a jwt token in the response
    //     if (res.user && res.user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(res.user));
    //       this.currentUserSubject.next(res.user);
    //     }
    //     this._socketEventsService.init(res.user);
    //     this.consultationService.init(res.user);
    //     this.loggedIn.next(res.user);
    //     return res.user;
    //   }));
    // }
    logout() {
        // remove user from local storage to log user out
        console.log('LOGOUT');
        localStorage.removeItem('inviteToken');
        localStorage.removeItem('currentConsultation');
        localStorage.removeItem('birthDate');
        this.currentUserSubject.next(null);
        this._socketEventsService.disconnect();
        console.log("COOOKIIIES", document.cookie);
        if (this.platform.is('cordova') && window.cordova && window.cordova.plugins) {
            //(<any>window).cordova.plugins.CookieManagementPlugin.flush();
        }
        return this.http.get(`${this.globalVariableService.getApiPath()}/logout`).toPromise();
    }
    getToken() {
        return this.currentUserSubject.value.token;
    }
    getCurrentUser(token) {
        const opts = { withCredentials: true };
        return this.http.get(`${this.globalVariableService.getApiPath()}/current-user`, opts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(res => {
            this.currentUserSubject.next(res.user);
            return res.user;
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _socket_events_service__WEBPACK_IMPORTED_MODULE_0__.SocketEventsService },
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_1__.ConsultationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_2__.GlobalVariableService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
AuthService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: 'root' }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_0__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_0__.SocketEventsService) === "function" ? _b : Object, typeof (_c = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_1__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_1__.ConsultationService) === "function" ? _c : Object, typeof (_d = typeof _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router) === "function" ? _d : Object, typeof (_e = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_2__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_2__.GlobalVariableService) === "function" ? _e : Object, typeof (_f = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform) === "function" ? _f : Object])
], AuthService);



/***/ }),

/***/ 7082:
/*!*******************************************!*\
  !*** ./src/app/auth/error.interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
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





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            console.log('error with request ...............................', err);
            // if (err.url && err.url.indexOf('login-cert') >= 0) {
            // return throwError(err);
            // }
            // if (err.status === 401) {
            //   // auto logout if 401 response returned from api
            //   this.authService.logout();
            //   this.router.navigate(['/login']);
            //   //   alert("La session sur cet appareil n'est plus valide, l'application va redémarrer.")
            // }
            // const error = err.error.message || err.statusText;
            console.log('error ', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ErrorInterceptor = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router) === "function" ? _b : Object])
], ErrorInterceptor);



/***/ }),

/***/ 6624:
/*!*****************************************!*\
  !*** ./src/app/auth/jwt.interceptor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
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



let JwtInterceptor = class JwtInterceptor {
    constructor(authService, translate) {
        this.authService = authService;
        this.translate = translate;
    }
    intercept(request, next) {
        console.log('add local header ', this.translate.currentLang);
        request = request.clone({
            setHeaders: {
                'locale': this.translate.currentLang || 'fr'
            }
        });
        // add authorization header with jwt token if available
        let currentUser = this.authService.currentUserValue;
        console.log("CURRENT USER", currentUser);
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    "x-access-token": `${currentUser.token}`,
                    "inviteToken": `${this.authService.currentInviteToken}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService }
];
JwtInterceptor = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService) === "function" ? _a : Object, typeof (_b = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService) === "function" ? _b : Object])
], JwtInterceptor);



/***/ }),

/***/ 1952:
/*!*********************************!*\
  !*** ./src/app/call.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallService": () => (/* binding */ CallService)
/* harmony export */ });
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variable.service */ 6898);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
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




let CallService = class CallService {
    constructor(http, globalVariableService) {
        this.http = http;
        this.globalVariableService = globalVariableService;
        this.callObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.isFullScreen = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    }
    getCall() {
        return this.callObs$;
    }
    requestCall(data) {
        this.callObs$.next(data);
    }
    getCurrentCall(consultationId) {
        return this.http.get(this.globalVariableService.getApiPath() + '/consultation/' + consultationId + '/current-call');
    }
};
CallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService }
];
CallService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _b : Object])
], CallService);



/***/ }),

/***/ 6527:
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
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




let ConfigService = class ConfigService {
    constructor(http, globalVariableService) {
        this.http = http;
        this.globalVariableService = globalVariableService;
        this.configSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getConfig() {
        this.globalVariableService.host.subscribe(() => {
            console.log("host updated config service", this.globalVariableService.getApiPath());
            return this.http
                .get(`${this.globalVariableService.getApiPath()}/config`)
                .toPromise()
                .then((config) => {
                console.log("got config", config);
                this.config = config;
                this.configSub.next(config);
                this.globalVariableService.serverError = false;
                if (config.accessibilityMode &&
                    config.accessibilityMode !== "false") {
                    document.documentElement.setAttribute("data-theme", "accessibility");
                }
            })
                .catch((err) => {
                this.globalVariableService.serverError = true;
            });
        });
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService }
];
ConfigService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _b : Object])
], ConfigService);



/***/ }),

/***/ 9936:
/*!*****************************************!*\
  !*** ./src/app/consultation.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationService": () => (/* binding */ ConsultationService)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variable.service */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket-events.service */ 7800);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;








let ConsultationService = class ConsultationService {
    constructor(http, socketEventsService, router, globalVariableService, platform) {
        this.http = http;
        this.socketEventsService = socketEventsService;
        this.router = router;
        this.globalVariableService = globalVariableService;
        this.platform = platform;
        this.consultationsOverview = [];
        this.unreadActiveSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.unreadSum('active'));
        this.unreadPendingSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.unreadSum('pending'));
        this.unreadClosedSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.unreadSum('closed'));
        this.consultationsOverviewSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.consultationsOverview);
        //! to here
        this.blobToFile = (theBlob, fileName) => {
            const b = theBlob;
            b.lastModifiedDate = new Date();
            b.name = fileName;
            return theBlob;
        };
    }
    init(currentUser) {
        console.log('init consultations');
        this.currentUser = currentUser;
        this.socketEventsService.onMessage().subscribe(msg => {
            console.log('new message ');
            const c = this.consultationsOverview.find(c => c._id === msg.data.consultation);
            c.lastMsg = msg.data;
            c.unreadCount++;
            this.updateUnreadCount();
            this.sortConsultations();
            this.consultationsOverviewSub.next(this.consultationsOverview);
        });
        this.socketEventsService.onConsultationAccepted().subscribe(event => {
            const consultation = this.consultationsOverview.find(c => c._id === event.data._id);
            if (consultation) {
                consultation.consultation.status = 'active';
                consultation.doctor = event.data.doctor;
                this.sortConsultations();
                this.consultationsOverviewSub.next(this.consultationsOverview);
            }
        });
        this.socketEventsService.onConsultationClosed().subscribe(event => {
            const consultation = this.consultationsOverview.find(c => c._id === event.data._id);
            if (consultation) {
                consultation.consultation.status = 'closed';
                this.sortConsultations();
                this.consultationsOverviewSub.next(this.consultationsOverview);
            }
        });
        this.fetchConsultations().subscribe(c => {
            this.sortConsultations();
            this.consultationsOverviewSub.next(this.consultationsOverview);
        });
        this.socketEventsService.onNewConsultation().subscribe(event => {
            console.log('New consultation EVvent ', event);
            // this.consultationsOverview.find(c=> c.)
            this.consultationsOverview.push(event.data);
            this.consultationsOverviewSub.next(this.consultationsOverview);
        });
    }
    fetchConsultations() {
        return this.http.get(this.globalVariableService.getApiPath() + '/consultations-overview').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(consultations => {
            console.log('got consultation overview ', consultations);
            consultations.forEach(consultation => {
                if (consultation._id) {
                    consultation.id = consultation._id;
                }
            });
            this.consultationsOverview = consultations;
            this.updateUnreadCount();
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((ev) => {
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                console.log('###processing response', ev);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retryWhen)(errors => errors
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.concatMap)((error, count) => {
            console.log('errro>> ', error, ' retry ', error.status, count);
            if (count < 5 && (error.status === 400 || error.status === 0 || error.status === 503)) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(error.status);
            }
            (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(1000))));
    }
    createConsultation(consultation) {
        return this.http.post(this.globalVariableService.getApiPath() + `/consultation`, consultation).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(c => {
            if (c) {
                this.consultationsOverview.push({ consultation: c, _id: c.id });
            }
            ;
        }));
    }
    getConsultationsOverview() {
        return this.consultationsOverviewSub;
    }
    getConsultation(id) {
        return this.fetchConsultations().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => {
            const consultation = this.consultationsOverview.find(c => c._id === id);
            console.log('return con ', consultation);
            if (consultation._id) {
                consultation.id = consultation._id;
            }
            return consultation ? consultation : null;
        }));
    }
    cancelConsultation(id) {
        return this.http.post(this.globalVariableService.getApiPath() + `/consultation/${id}/cancel`, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
            this.consultationsOverview.forEach(c => {
                if (c._id === id) {
                    c.consultation.status = 'canceled';
                }
            });
            this.consultationsOverviewSub.next(this.consultationsOverview);
            this.updateUnreadCount();
        }));
    }
    readMessages(consultationId) {
        return this.http.post(this.globalVariableService.getApiPath() + `/consultation/${consultationId}/read-messages`, {}).subscribe(r => {
            console.log('response ', r);
            const c = this.consultationsOverview.find(c => c._id === consultationId);
            c.unreadCount = 0;
            this.updateUnreadCount();
        });
    }
    unreadActiveCount() {
        return this.unreadActiveSub;
    }
    unreadPendingCount() {
        return this.unreadPendingSub;
    }
    unreadClosedCount() {
        return this.unreadClosedSub;
    }
    unreadSum(status) {
        return this.consultationsOverview.reduce((a, b) => {
            return (b.consultation.status === status) ? a + (b.unreadCount || 0) : a;
        }, 0);
    }
    updateUnreadCount() {
        this.unreadActiveSub.next(this.unreadSum('active'));
        this.unreadPendingSub.next(this.unreadSum('pending'));
        this.unreadClosedSub.next(this.unreadSum('closed'));
    }
    sortConsultations() {
        this.consultationsOverview = this.consultationsOverview.sort((b, a) => {
            return ((a.lastMsg) ? a.lastMsg.createdAt : a.consultation.createdAt) -
                ((b.lastMsg) ? b.lastMsg.createdAt : b.consultation.createdAt);
        });
    }
    deleteConsultation(consultationId) {
        console.log('delete consultation ', consultationId);
        return this.http.delete(this.globalVariableService.getApiPath() + `/consultation/${consultationId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
            this.consultationsOverview = this.consultationsOverview.filter(c => c._id !== consultationId);
            this.consultationsOverviewSub.next(this.consultationsOverview);
        }));
    }
    postFile(blob, fileName, consultationId) {
        let file;
        if (!blob.lastModified) {
            file = this.blobToFile(blob, fileName);
            console.log('file name:', file);
        }
        else {
            file = blob;
        }
        const endpoint = this.globalVariableService.getApiPath() + `/consultation/${consultationId}/upload-file`;
        const formData = new FormData();
        if (file.changingThisBreaksApplicationSecurity !== undefined) {
            formData.append('attachment', this.convertBase64ToBlob(file.changingThisBreaksApplicationSecurity), file.name);
            return this.http
                .post(endpoint, formData, {
                headers: {
                    'mime-type': this.convertBase64ToBlob(file.changingThisBreaksApplicationSecurity).type,
                    'x-access-token': `${this.currentUser.token}`,
                    fileName: 'image.jpg'
                }
            });
        }
        else {
            console.log(file);
            const rawFile = new File([file], file.name, {
                type: file.mimeType,
            });
            formData.append('attachment', rawFile, file.name);
            return this.http
                .post(endpoint, formData, {
                headers: {
                    'mime-type': file.mimeType,
                    'x-access-token': `${this.currentUser.token}`,
                    fileName: file.name
                }
            });
        }
    }
    //! Convert our file from base64 to blob
    convertBase64ToBlob(base64) {
        const info = this.getInfoFromBase64(base64);
        const sliceSize = 512;
        const byteCharacters = window.atob(info.rawBase64);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: info.mime });
    }
    getInfoFromBase64(base64) {
        const meta = base64.split(',')[0];
        const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
        const mime = /:([^;]+);/.exec(meta)[1];
        const extension = /\/([^;]+);/.exec(meta)[1];
        return {
            mime,
            extension,
            meta,
            rawBase64
        };
    }
    /**
     * Saves the user feedback for a consultation.
     * @param consultationId The ID of the targeted consultation
     * @param rating The selected rating
     * @param comment The user comment
     */
    saveConsultationFeedback(consultationId, rating, comment) {
        return this.http.post(this.globalVariableService.getApiPath() + `/consultation/${consultationId}/patientFeedback`, { consultationId, rating, comment });
    }
    getTranslatorOrGuestConsultation() {
        return this.fetchConsultations().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => {
            const consultation = this.currentUser.role === 'guest' ? this.consultationsOverview.find(c => c.consultation.guest === this.currentUser.id) :
                this.consultationsOverview.find(c => c.consultation.translator === this.currentUser.id);
            console.log('return con ', consultation);
            return consultation ? consultation : null;
        }));
    }
};
ConsultationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _socket_events_service__WEBPACK_IMPORTED_MODULE_1__.SocketEventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform }
];
ConsultationService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_1__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_1__.SocketEventsService) === "function" ? _b : Object, typeof (_c = typeof _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router) === "function" ? _c : Object, typeof (_d = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _d : Object, typeof (_e = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform) === "function" ? _e : Object])
], ConsultationService);



/***/ }),

/***/ 6898:
/*!********************************************!*\
  !*** ./src/app/global-variable.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalVariableService": () => (/* binding */ GlobalVariableService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;




let GlobalVariableService = class GlobalVariableService {
    constructor(platform) {
        this.platform = platform;
        this.serverError = false;
        if (!this.platform.is('mobileweb') && (this.platform.is('ios') || this.platform.is('android'))) {
            this.resetHost();
            console.log("reset host url");
        }
        let host = this.getHost();
        if (this.hostBehaviorSubject && this.hostBehaviorSubject.getValue() != host) {
            this.hostBehaviorSubject.next(host);
        }
        else {
            this.hostBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(host);
        }
        this.host = this.hostBehaviorSubject.asObservable();
    }
    resetHost() {
        localStorage.removeItem("host");
    }
    getHost() {
        let host = localStorage.getItem("host");
        if (!host) {
            host = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host;
        }
        console.log("HOST IN INIT" + host);
        localStorage.setItem('host', host);
        return host;
    }
    getHostObservable() {
        return this.hostBehaviorSubject.asObservable();
    }
    updateHost(host) {
        console.log("updateHost host ", host);
        localStorage.setItem('host', host);
        this.hostBehaviorSubject.next(host);
    }
    getHostValue() {
        console.log("getting host value", this.hostBehaviorSubject.getValue());
        return this.hostBehaviorSubject.getValue();
    }
    getApiPath() {
        //prevent double slash -> https://app.hug-at-home.ch//api/v1 ->  https://app.hug-at-home.ch/api/v1
        let apiUrl = (this.hostBehaviorSubject.getValue() + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api).replace(/([^:]\/)\/+/g, "$1");
        apiUrl = apiUrl.replace(/(\:)\:/, "$1");
        console.log("getting api path value", apiUrl);
        return apiUrl;
    }
};
GlobalVariableService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
GlobalVariableService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
    //manage variable that are used in differents views
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform) === "function" ? _a : Object])
], GlobalVariableService);



/***/ }),

/***/ 3401:
/*!*************************************!*\
  !*** ./src/app/i18n/i18n.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nModule": () => (/* binding */ I18nModule),
/* harmony export */   "translateLoaderFactory": () => (/* binding */ translateLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;




let I18nModule = class I18nModule {
    constructor(translate) {
        this.defaultLanguage = 'en';
        this.supportedLanguages = [
            'en',
            'fr',
            'es',
            'ar',
            'de',
            'ar',
            'ta',
            'ti',
            'fa',
            'ru',
            'it'
        ];
        translate.addLangs(this.supportedLanguages);
        const userLang = window.localStorage.getItem('hhp-lang') || translate.getBrowserLang();
        translate.use(this.supportedLanguages.includes(userLang) ? userLang : this.defaultLanguage);
    }
};
I18nModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService }
];
I18nModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateLoader,
                    useFactory: translateLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient]
                }
            }),
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService) === "function" ? _a : Object])
], I18nModule);

function translateLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(httpClient);
}


/***/ }),

/***/ 6272:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/chat/chat.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component.html?ngResource */ 713);
/* harmony import */ var _chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss?ngResource */ 5342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;




let ChatComponent = class ChatComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.messageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.closeChat = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.messageList = [];
    }
    ngOnInit() { }
    eventKeyPress(event) {
        if (event && event.keyCode === 13) {
            this.sendMessage();
        }
    }
    sendMessage() {
        if (this.user && this.message) {
            this.message = this.message.replace(/ +(?= )/g, '');
            if (this.message !== '' && this.message !== ' ') {
                const data = {
                    connectionId: this.user.getConnectionId(),
                    message: this.message,
                    nickname: this.user.getNickname(),
                };
                this.user.getStreamManager().stream.session.signal({
                    data: JSON.stringify(data),
                    type: 'chat',
                });
                this.scrollToBottom();
                this.message = '';
            }
        }
    }
    scrollToBottom() {
        setTimeout(() => {
            try {
                const contentMessage = document.getElementById('message-wrap');
                contentMessage.scrollTop = contentMessage.scrollHeight;
            }
            catch (err) {
                console.error(err);
            }
        }, 20);
    }
    dismiss() {
        this.modalController.dismiss();
    }
    onFocus() { }
};
ChatComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ChatComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    messageReceived: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    closeChat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    messageList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ChatComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'chat-component',
        template: _chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController) === "function" ? _a : Object])
], ChatComponent);



/***/ }),

/***/ 3307:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/choose-attachment/choose-attachment.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseAttachmentComponent": () => (/* binding */ ChooseAttachmentComponent)
/* harmony export */ });
/* harmony import */ var _home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _choose_attachment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-attachment.component.html?ngResource */ 7475);
/* harmony import */ var _choose_attachment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-attachment.component.scss?ngResource */ 6299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capawesome/capacitor-file-picker */ 1590);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/auth.service */ 384);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


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

var _a, _b, _c, _d, _e;






 //import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';




let ChooseAttachmentComponent = class ChooseAttachmentComponent {
  constructor(modalController, authService, platform, sanitizer, translate) {
    this.modalController = modalController;
    this.authService = authService;
    this.platform = platform;
    this.sanitizer = sanitizer;
    this.translate = translate;
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  pickFiles() {
    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_3__.FilePicker.pickFiles({
        // types: ['image/png'],
        types: ['application/pdf'],
        multiple: false
      });
    })();
  }

  chooseFile() {
    var _this = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capawesome_capacitor_file_picker__WEBPACK_IMPORTED_MODULE_3__.FilePicker.pickFiles().then(uri => {
        _this.dismiss(uri.files[0], 'file');
      }).catch(e => console.log(e));
    })();
  }

  dismiss(filePath, type) {
    this.modalController.dismiss({
      filePath,
      type: type
    });
  }

  takePicture() {
    var _this2 = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const options: CameraOptions = {
      //   quality: 40,
      //   destinationType: this.camera.DestinationType.FILE_URI,
      //   encodingType: this.camera.EncodingType.JPEG,
      //   mediaType: this.camera.MediaType.PICTURE,
      //   //targetWidth: 720
      // };
      // this.camera.getPicture(options).then((imageData) => {
      //   this.dismiss(imageData, 'image');
      // }, (err) => {
      //   console.log('error choosing image', err);
      //   // if (err && .includes('No Image Selected')) {
      //   //   return
      //   // }
      //   alert('Error choosing image ' + err);
      // });
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Prompt,
        promptLabelPhoto: _this2.translate.instant('chooseAttachement.promptLabelPhoto'),
        promptLabelPicture: _this2.translate.instant('chooseAttachement.promptLabelPicture')
      });
      _this2.photo = _this2.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl);

      _this2.dismiss(_this2.photo, 'file');
    })();
  }

  chooseFileBrowser() {
    return new Promise((resolve, reject) => {
      const inputElement = document.getElementById("input-file");
      inputElement.addEventListener("change", function () {
        resolve(this.files[0]);
      }, false);
      inputElement.click();
    });
  }

  isNativeApp() {
    return !this.platform.is('mobileweb') && (this.platform.is('ios') || this.platform.is('android'));
  }

};

ChooseAttachmentComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
}];

ChooseAttachmentComponent.propDecorators = {
  consultationId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
ChooseAttachmentComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-choose-attachment',
  template: _choose_attachment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_choose_attachment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), __metadata("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController) === "function" ? _a : Object, typeof (_b = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform) === "function" ? _c : Object, typeof (_d = typeof _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer !== "undefined" && _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer) === "function" ? _d : Object, typeof (_e = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService) === "function" ? _e : Object])], ChooseAttachmentComponent);


/***/ }),

/***/ 1875:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/close-consultation/close-consultation.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseConsultationComponent": () => (/* binding */ CloseConsultationComponent)
/* harmony export */ });
/* harmony import */ var _close_consultation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-consultation.component.html?ngResource */ 7226);
/* harmony import */ var _close_consultation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-consultation.component.scss?ngResource */ 1749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../consultation.service */ 9936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;






let CloseConsultationComponent = class CloseConsultationComponent {
    constructor(consultationService, router, modalController) {
        this.consultationService = consultationService;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeConsultation() {
        console.log("Close consultation now");
        this.consultationService
            .deleteConsultation(this.consultationId)
            .subscribe((res) => {
            localStorage.removeItem("currentConsultation");
            localStorage.removeItem("currentUser");
            this.modalController.dismiss();
            this.router.navigate(["/login"]);
            console.log("Cancellation done");
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
CloseConsultationComponent.ctorParameters = () => [
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
CloseConsultationComponent.propDecorators = {
    consultationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CloseConsultationComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-close-consultation",
        template: _close_consultation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_close_consultation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController) === "function" ? _c : Object])
], CloseConsultationComponent);



/***/ }),

/***/ 2792:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/request-consultation/request-consultation.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestConsultationComponent": () => (/* binding */ RequestConsultationComponent)
/* harmony export */ });
/* harmony import */ var _request_consultation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-consultation.component.html?ngResource */ 9560);
/* harmony import */ var _request_consultation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-consultation.component.scss?ngResource */ 1017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _consultation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../consultation.service */ 9936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;







let RequestConsultationComponent = class RequestConsultationComponent {
    constructor(consultationService, router, modalController, cdRef) {
        this.consultationService = consultationService;
        this.router = router;
        this.modalController = modalController;
        this.cdRef = cdRef;
        this.term1 = false;
        this.term2 = false;
        this.term3 = false;
        this.firstName = '@Home';
        this.lastName = '@Home';
        this.birthDate = new Date('1960-06-15').toISOString();
    }
    ngOnInit() {
    }
    createConsultation() {
        if (this.term1 && this.term2 && this.term3) {
            this.consultationService.createConsultation({
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                birthDate: this.birthDate,
                IMADTeam: this.IMADTeam
            }).subscribe(res => {
                console.log('res ', res);
                this.modalController.dismiss();
                this.router.navigate(['/consultation/' + res.id]);
            }, err => {
                console.log(err);
                this.modalController.dismiss();
            });
        }
        else {
            console.log('you must accept all terms ');
        }
        console.log(this.term1, this.term2, this.term3, this.firstName, this.lastName, this.gender, this.birthDate, this.IMADTeam);
        // this.consultationService
    }
    dismiss() {
        this.modalController.dismiss();
    }
    strictIMAD(value) {
        // manually launch change detection
        console.log('changed ', value);
        this.cdRef.detectChanges();
        this.IMADTeam = String(value).length > 3 ? parseInt(String(value).substring(0, 3)) : value;
    }
};
RequestConsultationComponent.ctorParameters = () => [
    { type: _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
RequestConsultationComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-request-consultation',
        template: _request_consultation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_consultation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService !== "undefined" && _consultation_service__WEBPACK_IMPORTED_MODULE_2__.ConsultationService) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router) === "function" ? _b : Object, typeof (_c = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController) === "function" ? _c : Object, typeof (_d = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _d : Object])
], RequestConsultationComponent);



/***/ }),

/***/ 19:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/stream/peer-audio/peer-audio.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeerAudioComponent": () => (/* binding */ PeerAudioComponent)
/* harmony export */ });
/* harmony import */ var _peer_audio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peer-audio.component.html?ngResource */ 9359);
/* harmony import */ var _peer_audio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peer-audio.component.scss?ngResource */ 2694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PeerAudioComponent = class PeerAudioComponent {
    constructor() { }
    ngAfterViewInit() {
        this.elementRef.nativeElement.srcObject = this.stream.mediaStream;
    }
    ngOnInit() {
    }
};
PeerAudioComponent.ctorParameters = () => [];
PeerAudioComponent.propDecorators = {
    elementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['audioElement',] }],
    stream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PeerAudioComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-peer-audio',
        template: _peer_audio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_peer_audio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [])
], PeerAudioComponent);



/***/ }),

/***/ 2633:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/stream/peer-video/peer-video.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeerVideoComponent": () => (/* binding */ PeerVideoComponent)
/* harmony export */ });
/* harmony import */ var _peer_video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peer-video.component.html?ngResource */ 8255);
/* harmony import */ var _peer_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peer-video.component.scss?ngResource */ 7129);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hug-angular-lib */ 8872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;




let PeerVideoComponent = class PeerVideoComponent {
    constructor(logger) {
        this.logger = logger;
        this.subscriptions = [];
    }
    ngAfterViewInit() {
        this.updateVideoSrc();
    }
    // ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.subscriptions.push(this.stream.onLayerChange.subscribe(() => {
    //   this.logger.debug('ov-vide onlayerchanged.........')
    //   this.elementRef.nativeElement.srcObject = this.stream.mediaStream
    // }))
    // }
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
    ngOnChanges(changes) {
        // console.log("Peer video changes ", changes, this.elementRef);
        if (changes.stream) {
            this.stream = changes.stream.currentValue;
            this.updateVideoSrc();
        }
    }
    updateVideoSrc() {
        if (this.elementRef && this.stream) {
            this.elementRef.nativeElement.srcObject = this.stream.mediaStream;
        }
        setTimeout(() => {
            // console.log("elemref", this.elementRef, this.stream);
            if (this.elementRef) {
                this.elementRef.nativeElement.srcObject = this.stream.mediaStream;
            }
        }, 500);
    }
};
PeerVideoComponent.ctorParameters = () => [
    { type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_2__.NGXLogger }
];
PeerVideoComponent.propDecorators = {
    elementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["videoElement",] }],
    stream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PeerVideoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-peer-video",
        template: _peer_video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_peer_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_2__.NGXLogger !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_2__.NGXLogger) === "function" ? _a : Object])
], PeerVideoComponent);



/***/ }),

/***/ 5665:
/*!**************************************************!*\
  !*** ./src/app/shared/layout/openvidu-layout.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenViduLayout": () => (/* binding */ OpenViduLayout)
/* harmony export */ });
// declare var $: any;
class OpenViduLayout {
    fixAspectRatio(elem, width) {
        const sub = elem.querySelector('.OT_root');
        if (sub) {
            // If this is the parent of a subscriber or publisher then we need
            // to force the mutation observer on the publisher or subscriber to
            // trigger to get it to fix it's layout
            const oldWidth = sub.style.width;
            sub.style.width = width + 'px';
            // sub.style.height = height + 'px';
            sub.style.width = oldWidth || '';
        }
    }
    positionElement(elem, x, y, width, height, animate) {
        // const targetPosition = {
        //   left: x + 'px',
        //   top: y + 'px',
        //   width: width + 'px',
        //   height: height + 'px',
        // };
        this.fixAspectRatio(elem, width);
        // if (animate && $) {
        // $(elem).stop();
        //   $(elem).animate(targetPosition, animate.duration || 200, animate.easing || 'swing', () => {
        //     this.fixAspectRatio(elem, width);
        //     if (animate.complete) {
        //       animate.complete.call(this);
        //     }
        //   });
        // } else {
        //   $(elem).css(targetPosition);
        // }
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        elem.style.width = width + 'px';
        elem.style.height = height + 'px';
        this.fixAspectRatio(elem, width);
    }
    getVideoRatio(elem) {
        if (!elem) {
            return 3 / 4;
        }
        const video = elem.querySelector('video');
        if (video && video.videoHeight && video.videoWidth) {
            return video.videoHeight / video.videoWidth;
        }
        else if (elem.videoHeight && elem.videoWidth) {
            return elem.videoHeight / elem.videoWidth;
        }
        return 3 / 4;
    }
    getCSSNumber(elem, prop) {
        // const cssStr = $(elem).css(prop);
        const cssStr = elem.style[prop];
        // return cssStr ? parseInt(cssStr, 10) : 0;
        return cssStr ? cssStr : 0;
    }
    // Really cheap UUID function
    cheapUUID() {
        return (Math.random() * 100000000).toFixed(0);
    }
    getHeight(elem) {
        // const heightStr = $(elem).css('height');
        // const heightStr = elem.style.height;
        const heightStr = elem.offsetHeight;
        // return heightStr ? parseInt(heightStr, 10) : 0;
        return heightStr ? heightStr : 0;
    }
    getWidth(elem) {
        // const widthStr = $(elem).css('width');
        // const widthStr = elem.style.width;
        const widthStr = elem.offsetWidth;
        return widthStr ? widthStr : 0;
    }
    getBestDimensions(minR, maxR, count, WIDTH, HEIGHT, targetHeight) {
        let maxArea, targetCols, targetRows, targetWidth, tWidth, tHeight, tRatio;
        // Iterate through every possible combination of rows and columns
        // and see which one has the least amount of whitespace
        for (let i = 1; i <= count; i++) {
            const colsAux = i;
            const rowsAux = Math.ceil(count / colsAux);
            // Try taking up the whole height and width
            tHeight = Math.floor(HEIGHT / rowsAux);
            tWidth = Math.floor(WIDTH / colsAux);
            tRatio = tHeight / tWidth;
            if (tRatio > maxR) {
                // We went over decrease the height
                tRatio = maxR;
                tHeight = tWidth * tRatio;
            }
            else if (tRatio < minR) {
                // We went under decrease the width
                tRatio = minR;
                tWidth = tHeight / tRatio;
            }
            const area = tWidth * tHeight * count;
            // If this width and height takes up the most space then we're going with that
            if (maxArea === undefined || area > maxArea) {
                maxArea = area;
                targetHeight = tHeight;
                targetWidth = tWidth;
                targetCols = colsAux;
                targetRows = rowsAux;
            }
        }
        return {
            maxArea: maxArea,
            targetCols: targetCols,
            targetRows: targetRows,
            targetHeight: targetHeight,
            targetWidth: targetWidth,
            ratio: targetHeight / targetWidth,
        };
    }
    arrange(children, WIDTH, HEIGHT, offsetLeft, offsetTop, fixedRatio, minRatio, maxRatio, animate) {
        let targetHeight;
        const count = children.length;
        let dimensions;
        if (!fixedRatio) {
            dimensions = this.getBestDimensions(minRatio, maxRatio, count, WIDTH, HEIGHT, targetHeight);
        }
        else {
            // Use the ratio of the first video element we find to approximate
            const ratio = this.getVideoRatio(children.length > 0 ? children[0] : null);
            dimensions = this.getBestDimensions(ratio, ratio, count, WIDTH, HEIGHT, targetHeight);
        }
        // Loop through each stream in the container and place it inside
        let x = 0, y = 0;
        const rows = [];
        let row;
        // Iterate through the children and create an array with a new item for each row
        // and calculate the width of each row so that we know if we go over the size and need
        // to adjust
        for (let i = 0; i < children.length; i++) {
            if (i % dimensions.targetCols === 0) {
                // This is a new row
                row = {
                    children: [],
                    width: 0,
                    height: 0,
                };
                rows.push(row);
            }
            const elem = children[i];
            row.children.push(elem);
            let targetWidth = dimensions.targetWidth;
            targetHeight = dimensions.targetHeight;
            // If we're using a fixedRatio then we need to set the correct ratio for this element
            if (fixedRatio) {
                targetWidth = targetHeight / this.getVideoRatio(elem);
            }
            row.width += targetWidth;
            row.height = targetHeight;
        }
        // Calculate total row height adjusting if we go too wide
        let totalRowHeight = 0;
        let remainingShortRows = 0;
        for (let i = 0; i < rows.length; i++) {
            row = rows[i];
            if (row.width > WIDTH) {
                // Went over on the width, need to adjust the height proportionally
                row.height = Math.floor(row.height * (WIDTH / row.width));
                row.width = WIDTH;
            }
            else if (row.width < WIDTH) {
                remainingShortRows += 1;
            }
            totalRowHeight += row.height;
        }
        if (totalRowHeight < HEIGHT && remainingShortRows > 0) {
            // We can grow some of the rows, we're not taking up the whole height
            let remainingHeightDiff = HEIGHT - totalRowHeight;
            totalRowHeight = 0;
            for (let i = 0; i < rows.length; i++) {
                row = rows[i];
                if (row.width < WIDTH) {
                    // Evenly distribute the extra height between the short rows
                    let extraHeight = remainingHeightDiff / remainingShortRows;
                    if (extraHeight / row.height > (WIDTH - row.width) / row.width) {
                        // We can't go that big or we'll go too wide
                        extraHeight = Math.floor((WIDTH - row.width) / row.width * row.height);
                    }
                    row.width += Math.floor(extraHeight / row.height * row.width);
                    row.height += extraHeight;
                    remainingHeightDiff -= extraHeight;
                    remainingShortRows -= 1;
                }
                totalRowHeight += row.height;
            }
        }
        // vertical centering
        y = (HEIGHT - totalRowHeight) / 2;
        // Iterate through each row and place each child
        for (let i = 0; i < rows.length; i++) {
            row = rows[i];
            // center the row
            const rowMarginLeft = (WIDTH - row.width) / 2;
            x = rowMarginLeft;
            for (let j = 0; j < row.children.length; j++) {
                const elem = row.children[j];
                let targetWidth = dimensions.targetWidth;
                targetHeight = row.height;
                // If we're using a fixedRatio then we need to set the correct ratio for this element
                if (fixedRatio) {
                    targetWidth = Math.floor(targetHeight / this.getVideoRatio(elem));
                }
                elem.style.position = 'absolute';
                // $(elem).css('position', 'absolute');
                const actualWidth = targetWidth -
                    this.getCSSNumber(elem, 'paddingLeft') -
                    this.getCSSNumber(elem, 'paddingRight') -
                    this.getCSSNumber(elem, 'marginLeft') -
                    this.getCSSNumber(elem, 'marginRight') -
                    this.getCSSNumber(elem, 'borderLeft') -
                    this.getCSSNumber(elem, 'borderRight');
                const actualHeight = targetHeight -
                    this.getCSSNumber(elem, 'paddingTop') -
                    this.getCSSNumber(elem, 'paddingBottom') -
                    this.getCSSNumber(elem, 'marginTop') -
                    this.getCSSNumber(elem, 'marginBottom') -
                    this.getCSSNumber(elem, 'borderTop') -
                    this.getCSSNumber(elem, 'borderBottom');
                this.positionElement(elem, x + offsetLeft, y + offsetTop, actualWidth, actualHeight, animate);
                x += targetWidth;
            }
            y += targetHeight;
        }
    }
    filterDisplayNone(element) {
        return element.style.display !== 'none';
    }
    updateLayout() {
        if (this.layoutContainer.style.display === 'none') {
            return;
        }
        let id = this.layoutContainer.id;
        if (!id) {
            id = 'OT_' + this.cheapUUID();
            this.layoutContainer.id = id;
        }
        const HEIGHT = this.getHeight(this.layoutContainer) -
            this.getCSSNumber(this.layoutContainer, 'borderTop') -
            this.getCSSNumber(this.layoutContainer, 'borderBottom');
        const WIDTH = this.getWidth(this.layoutContainer) -
            this.getCSSNumber(this.layoutContainer, 'borderLeft') -
            this.getCSSNumber(this.layoutContainer, 'borderRight');
        const availableRatio = HEIGHT / WIDTH;
        let offsetLeft = 0;
        let offsetTop = 0;
        let bigOffsetTop = 0;
        let bigOffsetLeft = 0;
        const bigOnes = Array.prototype.filter.call(this.layoutContainer.querySelectorAll('#' + id + '>.' + this.opts.bigClass), this.filterDisplayNone);
        const smallOnes = Array.prototype.filter.call(this.layoutContainer.querySelectorAll('#' + id + '>*:not(.' + this.opts.bigClass + ')'), this.filterDisplayNone);
        if (bigOnes.length > 0 && smallOnes.length > 0) {
            let bigWidth, bigHeight;
            if (availableRatio > this.getVideoRatio(bigOnes[0])) {
                // We are tall, going to take up the whole width and arrange small
                // guys at the bottom
                bigWidth = WIDTH;
                bigHeight = Math.floor(HEIGHT * this.opts.bigPercentage);
                offsetTop = bigHeight;
                bigOffsetTop = HEIGHT - offsetTop;
            }
            else {
                // We are wide, going to take up the whole height and arrange the small
                // guys on the right
                bigHeight = HEIGHT;
                bigWidth = Math.floor(WIDTH * this.opts.bigPercentage);
                offsetLeft = bigWidth;
                bigOffsetLeft = WIDTH - offsetLeft;
            }
            if (this.opts.bigFirst) {
                this.arrange(bigOnes, bigWidth, bigHeight, 0, 0, this.opts.bigFixedRatio, this.opts.bigMinRatio, this.opts.bigMaxRatio, this.opts.animate);
                this.arrange(smallOnes, WIDTH - offsetLeft, HEIGHT - offsetTop, offsetLeft, offsetTop, this.opts.fixedRatio, this.opts.minRatio, this.opts.maxRatio, this.opts.animate);
            }
            else {
                this.arrange(smallOnes, WIDTH - offsetLeft, HEIGHT - offsetTop, 0, 0, this.opts.fixedRatio, this.opts.minRatio, this.opts.maxRatio, this.opts.animate);
                this.arrange(bigOnes, bigWidth, bigHeight, bigOffsetLeft, bigOffsetTop, this.opts.bigFixedRatio, this.opts.bigMinRatio, this.opts.bigMaxRatio, this.opts.animate);
            }
        }
        else if (bigOnes.length > 0 && smallOnes.length === 0) {
            this
                // We only have one bigOne just center it
                .arrange(bigOnes, WIDTH, HEIGHT, 0, 0, this.opts.bigFixedRatio, this.opts.bigMinRatio, this.opts.bigMaxRatio, this.opts.animate);
        }
        else {
            this.arrange(smallOnes, WIDTH - offsetLeft, HEIGHT - offsetTop, offsetLeft, offsetTop, this.opts.fixedRatio, this.opts.minRatio, this.opts.maxRatio, this.opts.animate);
        }
    }
    initLayoutContainer(container, opts) {
        console.log('INIT LAYOUT CONTAINER ', container);
        this.opts = {
            maxRatio: opts.maxRatio != null ? opts.maxRatio : 3 / 2,
            minRatio: opts.minRatio != null ? opts.minRatio : 9 / 16,
            fixedRatio: opts.fixedRatio != null ? opts.fixedRatio : false,
            animate: opts.animate != null ? opts.animate : false,
            bigClass: opts.bigClass != null ? opts.bigClass : 'OT_big',
            bigPercentage: opts.bigPercentage != null ? opts.bigPercentage : 0.8,
            bigFixedRatio: opts.bigFixedRatio != null ? opts.bigFixedRatio : false,
            bigMaxRatio: opts.bigMaxRatio != null ? opts.bigMaxRatio : 3 / 2,
            bigMinRatio: opts.bigMinRatio != null ? opts.bigMinRatio : 9 / 16,
            bigFirst: opts.bigFirst != null ? opts.bigFirst : true,
        };
        // this.layoutContainer = typeof container === 'string' ? $(container) : container;    
        this.layoutContainer = container;
    }
    setLayoutOptions(options) {
        this.opts = options;
    }
}


/***/ }),

/***/ 4468:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/openvidu.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenViduService": () => (/* binding */ OpenViduService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variable.service */ 6898);
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





let OpenViduService = class OpenViduService {
    constructor(http, globalVariableService) {
        this.http = http;
        this.globalVariableService = globalVariableService;
    }
    getTestToken() {
        return new Promise((resolve, reject) => {
            return this.http.get(this.globalVariableService.getApiPath() + '/consultation/test-call')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
                error.status === 409 ? resolve(null) : reject(error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }))
                .subscribe(response => {
                console.log('response >> ', response);
                resolve(response);
            });
        });
    }
    getToken(mySessionId) {
        return this.createSessionAndGetToken(mySessionId);
    }
    createSessionAndGetToken(sessionId) {
        return new Promise((resolve, reject) => {
            const body = JSON.stringify({ customSessionId: sessionId });
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };
            return this.http.post(this.globalVariableService.getApiPath() + '/consultation/' + sessionId + '/call', body, options)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
                error.status === 409 ? resolve(sessionId) : reject(error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }))
                .subscribe(response => {
                console.log('response >> ', response);
                resolve(response);
            });
        });
    }
    rejectCall(consultation, message) {
        return new Promise((resolve, reject) => {
            const body = JSON.stringify({});
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };
            return this.http.post(this.globalVariableService.getApiPath() + '/consultation/' + consultation + '/' + message + '/reject-call', {}, options)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                .subscribe(response => {
                console.log('response >> ', response);
                resolve(null);
            });
        });
    }
    acceptCall(consultation, message) {
        return new Promise((resolve, reject) => {
            const body = JSON.stringify({});
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };
            return this.http.post(this.globalVariableService.getApiPath() + '/consultation/' + consultation + '/' + message + '/accept-call', {}, options)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                .subscribe(response => {
                console.log('response >> ', response);
                resolve(null);
            });
        });
    }
};
OpenViduService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService }
];
OpenViduService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_0__.GlobalVariableService) === "function" ? _b : Object])
], OpenViduService);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _components_stream_peer_video_peer_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stream/peer-video/peer-video.component */ 2633);
/* harmony import */ var _components_stream_peer_audio_peer_audio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stream/peer-audio/peer-audio.component */ 19);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_components_stream_peer_audio_peer_audio_component__WEBPACK_IMPORTED_MODULE_1__.PeerAudioComponent, _components_stream_peer_video_peer_video_component__WEBPACK_IMPORTED_MODULE_0__.PeerVideoComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _components_stream_peer_audio_peer_audio_component__WEBPACK_IMPORTED_MODULE_1__.PeerAudioComponent, _components_stream_peer_video_peer_video_component__WEBPACK_IMPORTED_MODULE_0__.PeerVideoComponent
        ]
    })
], SharedModule);



/***/ }),

/***/ 7800:
/*!******************************************!*\
  !*** ./src/app/socket-events.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketEventsService": () => (/* binding */ SocketEventsService)
/* harmony export */ });
/* harmony import */ var _home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/local-notifications */ 5568);
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-variable.service */ 6898);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ 3751);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sails_io_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sails.io.js */ 8364);
/* harmony import */ var sails_io_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sails_io_js__WEBPACK_IMPORTED_MODULE_4__);


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

var _a;


 // import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx'





const sailsIo = sails_io_js__WEBPACK_IMPORTED_MODULE_4___default()((socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()));
sailsIo.sails.autoConnect = false;
let SocketEventsService = class SocketEventsService {
  constructor( // private localNotifications: LocalNotifications,
  globalVariableService) {
    this.globalVariableService = globalVariableService;
    this.messageSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.newCallSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.rejectCallSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.acceptCallSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.consultationAcceptedSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.consultationClosedSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.newConsultationSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.endCallSubj = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }

  init(currentUser, cb) {
    var _this = this;

    return (0,_home_olivierb_Developments_iabsis_hcw_patient_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('init socket ', currentUser); // Don't need to reset the socket if the user is still the same...

      if (_this.socket && currentUser && _this.user) {
        if (currentUser.id === _this.user.id) {
          return;
        }
      }

      if (_this.user && _this.user.token && _this.user.token === currentUser.token) {
        if (_this.socket && socket.isConnected()) {
          return cb();
        }
      }

      if (!_this.user || !_this.user.token || _this.user.token !== currentUser.token) {
        if (_this.socket && socket.isConnected()) {
          try {
            yield _this.socket.disconnect();
          } catch (err) {
            console.log('error disconnecting', err);
          }

          _this.socket = null;
        }
      }

      if (!currentUser) {
        _this.disconnect();

        return;
      }

      _this.user = currentUser;
      sailsIo.sails.query = `token=${currentUser.token}`;
      sailsIo.sails.headers = {
        id: currentUser.id,
        'x-access-token': currentUser.token
      };
      console.log('WEBSOCKET CONNECT', sailsIo.sails.headers);
      _this.socket = sailsIo.sails.connect(_this.globalVariableService.getHostValue(), {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000
      });
      window.socket = _this.socket;

      _this.socket.on('connect', () => {
        socket.get('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
          _this.listenToEvents();

          cb();
        });
      }); // this.localNotifications.on('click').subscribe((e) => {
      //   console.log('notification event,  ', e)
      // })

    })();
  }

  reconnect(cb) {
    if (!this.user) {
      return cb();
    }

    this.disconnect();
    sailsIo.sails.query = `token=${this.user.token}`;
    sailsIo.sails.headers = {
      id: this.user.id,
      'x-access-token': this.user.token
    };
    this.socket = sailsIo.sails.connect(this.globalVariableService.getHostValue(), {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000
    });
    window.socket = this.socket;
    this.socket.on('connect', () => {
      socket.get('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {
        this.listenToEvents();
        cb();
      });
    });
  }

  listenToEvents() {
    // this.socket.on('newMessage', (e) => {
    //   if (e.data.type !== 'videoCall' && e.data.type !== 'audioCall') {
    //     console.log('The message', e.data)
    //     this.localNotifications.schedule({
    //       id: 1,
    //       title: e.data.text ? e.data.text : 'New message',
    //       sound:  'file://sound.mp3',
    //       text: '',
    //       foreground: true
    //     })
    //   }
    //   this.messageSubj.next(e)
    // })
    this.socket.on('newMessage', e => {
      if (e.data.type !== 'videoCall' && e.data.type !== 'audioCall') {
        console.log('The message', e.data);
        _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications.schedule({
          notifications: [{
            title: e.data.text ? e.data.text : 'New message',
            body: '',
            id: 1
          }]
        });
      }

      this.messageSubj.next(e);
    });
    this.socket.on('newCall', e => {
      this.newCallSubj.next(e);
    });
    this.socket.on('rejectCall', e => {
      this.rejectCallSubj.next(e);
    });
    this.socket.on('acceptCall', e => {
      this.acceptCallSubj.next(e);
    });
    this.socket.on('consultationAccepted', e => this.consultationAcceptedSubj.next(e));
    this.socket.on('consultationClosed', e => this.consultationClosedSubj.next(e));
    this.socket.on('newConsultation', e => {
      // this is needed to update the online status for the consultation and send it to the consultation participants 
      socket.get('/api/v1/subscribe-to-socket', {}, (resData, jwres) => {});
      return this.newConsultationSubj.next(e);
    });
    this.socket.on('endCall', e => {
      this.endCallSubj.next(e);
    });
  }

  onMessage() {
    return this.messageSubj;
  }

  onCall() {
    return this.newCallSubj;
  }

  onRejectCall() {
    return this.rejectCallSubj;
  }

  onAcceptCall() {
    return this.acceptCallSubj;
  }

  onConsultationAccepted() {
    return this.consultationAcceptedSubj;
  }

  onConsultationClosed() {
    return this.consultationClosedSubj;
  }

  onNewConsultation() {
    return this.newConsultationSubj;
  }

  onEndCall() {
    return this.endCallSubj;
  }

  disconnect() {
    if (!this.socket || !this.socket.isConnected()) {
      return;
    }

    return this.socket.disconnect();
  }

};

SocketEventsService.ctorParameters = () => [{
  type: _global_variable_service__WEBPACK_IMPORTED_MODULE_2__.GlobalVariableService
}];

SocketEventsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
}), __metadata("design:paramtypes", [typeof (_a = typeof _global_variable_service__WEBPACK_IMPORTED_MODULE_2__.GlobalVariableService !== "undefined" && _global_variable_service__WEBPACK_IMPORTED_MODULE_2__.GlobalVariableService) === "function" ? _a : Object])], SocketEventsService);


/***/ }),

/***/ 6089:
/*!*************************************************!*\
  !*** ./src/app/video-room/video-room.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoRoomPageModule": () => (/* binding */ VideoRoomPageModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n/i18n.module */ 3401);
/* harmony import */ var _video_room_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-room.page */ 4003);
/* harmony import */ var _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/chat/chat.component */ 6272);
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-draggable */ 4150);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// translate


// import { StreamComponent } from '../shared/components/stream/stream.component';
// import { OpenViduVideoComponent } from '../shared/components/stream/ov-video.component';


const routes = [
    {
        path: '',
        component: _video_room_page__WEBPACK_IMPORTED_MODULE_2__.VideoRoomPage
    }
];
let VideoRoomPageModule = class VideoRoomPageModule {
};
VideoRoomPageModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            angular2_draggable__WEBPACK_IMPORTED_MODULE_8__.AngularDraggableModule,
            _i18n_i18n_module__WEBPACK_IMPORTED_MODULE_1__.I18nModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
            // RouterModule.forChild(routes),
        ],
        declarations: [_video_room_page__WEBPACK_IMPORTED_MODULE_2__.VideoRoomPage, _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent,],
        exports: [_video_room_page__WEBPACK_IMPORTED_MODULE_2__.VideoRoomPage, _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent,]
    })
], VideoRoomPageModule);



/***/ }),

/***/ 4003:
/*!***********************************************!*\
  !*** ./src/app/video-room/video-room.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoRoomPage": () => (/* binding */ VideoRoomPage)
/* harmony export */ });
/* harmony import */ var _video_room_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-room.page.html?ngResource */ 6685);
/* harmony import */ var _video_room_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-room.page.scss?ngResource */ 1128);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.service */ 384);
/* harmony import */ var _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/services/openvidu.service */ 4468);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hug-angular-lib */ 90);
/* harmony import */ var hug_angular_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hug-angular-lib */ 8872);
/* harmony import */ var _shared_layout_openvidu_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/layout/openvidu-layout */ 5665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor-community/native-audio */ 2087);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _socket_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket-events.service */ 7800);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h;








// import { NativeAudio } from "@awesome-cordova-plugins/native-audio/ngx";



let VideoRoomPage = class VideoRoomPage {
    constructor(platform, 
    // private nativeAudio: NativeAudio,
    socketSer, roomService, logger, remotePeersService, openViduSrv, authService, 
    // private androidPermissions: AndroidPermissions,
    zone) {
        this.platform = platform;
        this.socketSer = socketSer;
        this.roomService = roomService;
        this.logger = logger;
        this.remotePeersService = remotePeersService;
        this.openViduSrv = openViduSrv;
        this.authService = authService;
        this.zone = zone;
        this.BIG_ELEMENT_CLASS = "OV_big";
        this.remoteUsers = [];
        this.hangup = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.isFullScreen = true;
        this.reconnecting = false;
        this.accepted = false;
        this.subscriptions = [];
        this.camStatus = "on";
        this.videoAspectRatio = 1.777;
        this._device = "";
        window.platform = platform;
    }
    beforeunloadHandler() {
        this.exitSession();
    }
    sizeChange(event) {
        clearTimeout(this.resizeTimeout);
        this.updateLayout();
    }
    ngOnInit() {
        console.log("Initialize video", this.token, this.audioOnly);
        if (this.message.type === "audioCall") {
            this.camStatus = "off";
        }
        this.peerId = this.authService.currentUserValue.id;
        if (this.accepted) {
            this.joinToSession();
        }
    }
    ngOnDestroy() {
        this.exitSession();
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
        this.rejectCall();
    }
    joinToSession() {
        this.logger.debug("Join to session", this.token, this.sessionId);
        this.accepted = true;
        this.remoteUsers = [];
        _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_5__.NativeAudio.stop({ assetId: 'ringSound' }).then();
        this.askForPerm()
            .then(() => {
            this.getDevices().then((devices) => {
                console.log("getDevices", devices);
                console.log(devices);
                this.videoDevices = devices.filter((device) => device.kind === "videoinput");
                console.log(this.videoDevices);
                if (this.videoDevices.length) {
                    this.firstCam = this.videoDevices[0].deviceId;
                    this.lastCam =
                        this.videoDevices[this.videoDevices.length - 1].deviceId;
                    this.currentVideoDevice = this.firstCam;
                    console.log("Switch camera from from", this.currentVideoDevice);
                }
                else {
                    this.currentVideoDevice = null;
                }
                this.roomService.init({ peerId: this.peerId });
                this.roomService.join({
                    roomId: this.sessionId,
                    joinVideo: this.message.type !== "audioCall",
                    joinAudio: true,
                    token: this.token,
                });
                this.subscriptions.push(this.roomService.onCamProducing.subscribe((stream) => {
                    this.logger.debug("Cam producing ", stream);
                    this.myCamStream = { ...stream };
                }));
                this.subscriptions.push(this.remotePeersService.remotePeers.subscribe((peers) => {
                    this.remoteUsers = [];
                    this.logger.debug("got remote peers ", peers);
                    peers.forEach((p) => {
                        this.remoteUsers.push({ ...p });
                    });
                    setTimeout(() => {
                        this.updateLayout();
                    }, 100);
                }));
                this.openviduLayout = new _shared_layout_openvidu_layout__WEBPACK_IMPORTED_MODULE_4__.OpenViduLayout();
                this.openviduLayoutOptions = {
                    maxRatio: 3 / 2,
                    minRatio: 9 / 16,
                    fixedRatio: false /* If this is true then the aspect ratio of the video is maintained
              and minRatio and maxRatio are ignored (default false)*/,
                    bigClass: "OV_big",
                    bigPercentage: 0.9,
                    bigFixedRatio: false,
                    bigMaxRatio: 3 / 2,
                    bigMinRatio: 9 / 16,
                    bigFirst: false,
                    animate: true, // Whether you want to animate the transitions
                };
                this.openViduSrv
                    .acceptCall(this.sessionId, this.message.id)
                    .then((res) => {
                    this.logger.debug("call accepted");
                })
                    .catch(this.logger.error);
                console.log("layout ", this.platform.is("ios") ? "ios-layout" : "layout");
                this.openviduLayout.initLayoutContainer(document.getElementById("layout"), this.openviduLayoutOptions);
                window.openviduLayout = this.openviduLayout;
                setTimeout(() => {
                    this.updateLayout();
                }, 200);
            });
        })
            .catch((err) => {
            console.error("Error accessing camera", err);
            alert("Couldn't access camera or microphone");
        });
    }
    exitSession(rejoin) {
        this.remoteUsers = [];
        this.openviduLayout = null;
        if (rejoin) {
            return this.joinToSession();
        }
        else {
            this.rejectCall();
        }
    }
    resetVideoSize() {
        const element = document.querySelector(".OV_big");
        if (element) {
            element.classList.remove("OV_big");
            this.bigElement = undefined;
            this.updateLayout();
        }
    }
    connect(token) { }
    connectWebCam() { }
    updateLayout() {
        this.resizeTimeout = setTimeout(() => {
            if (!this.openviduLayout) {
                return;
            }
            console.log("update layout .....................................");
            this.openviduLayout.updateLayout();
        }, 20);
    }
    rejectCall() {
        console.log("rejectCall vide -room ", this.sessionId, this.consultation, this.message);
        if (!this.rejected) {
            this.rejected = true;
            if (this.accepted) {
                this.roomService.close();
            }
            if (this.myCamStream) {
                this.myCamStream.mediaStream.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
            this.remoteUsers = [];
            this.hangup.emit(true);
        }
        this.openViduSrv
            .rejectCall(this.sessionId || this.consultation._id, this.message.id)
            .then((r) => {
            console.log("exit ", this.sessionId);
        })
            .catch((err) => {
            console.log("error ", err);
        });
    }
    toggleButtons() { }
    camStatusChanged() {
        if (this.camStatus === "on") {
            this.roomService.disableWebcam();
            this.camStatus = "off";
        }
        else {
            this.roomService.updateWebcam({ start: true });
            this.camStatus = "on";
        }
    }
    askForPerm() {
        this.logger.debug("Ask for video permissions ");
        // if (this.platform.is("cordova") && this.platform.is("android")) {
        //   return this.checkAndroidPermissions();
        // }
        const { sampleRate = 96000, channelCount = 1, volume = 1.0, sampleSize = 16, opusStereo = false, opusDtx = true, opusFec = true, opusPtime = 20, opusMaxPlaybackRate = 96000, } = {};
        const autoGainControl = false;
        const echoCancellation = true;
        const noiseSuppression = true;
        const frameRate = 15;
        const mediaPerms = {
            audio: {
                sampleRate,
                channelCount,
                // @ts-ignore
                volume,
                autoGainControl,
                echoCancellation,
                noiseSuppression,
                sampleSize,
            },
            video: {
                width: { ideal: 640 },
                aspectRatio: this.videoAspectRatio,
                frameRate,
            },
        };
        return navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    }
    // private checkAndroidPermissions(): Promise<any> {
    //   console.log("Requesting Android Permissions");
    //   return new Promise((resolve, reject) => {
    //     this.platform.ready().then(() => {
    //       this.androidPermissions
    //         .requestPermissions(this.ANDROID_PERMISSIONS)
    //         .then(() => {
    //           this.androidPermissions
    //             .checkPermission(this.androidPermissions.PERMISSION.CAMERA)
    //             .then((camera) => {
    //               this.androidPermissions
    //                 .checkPermission(
    //                   this.androidPermissions.PERMISSION.RECORD_AUDIO
    //                 )
    //                 .then((audio) => {
    //                   this.androidPermissions
    //                     .checkPermission(
    //                       this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS
    //                     )
    //                     .then((modifyAudio) => {
    //                       if (
    //                         camera.hasPermission &&
    //                         audio.hasPermission &&
    //                         modifyAudio.hasPermission
    //                       ) {
    //                         resolve(null);
    //                       } else {
    //                         reject(
    //                           new Error(
    //                             "Permissions denied: " +
    //                               "\n" +
    //                               " CAMERA = " +
    //                               camera.hasPermission +
    //                               "\n" +
    //                               " AUDIO = " +
    //                               audio.hasPermission +
    //                               "\n" +
    //                               " AUDIO_SETTINGS = " +
    //                               modifyAudio.hasPermission
    //                           )
    //                         );
    //                       }
    //                     })
    //                     .catch((err) => {
    //                       console.error(
    //                         "Checking permission " +
    //                           this.androidPermissions.PERMISSION
    //                             .MODIFY_AUDIO_SETTINGS +
    //                           " failed"
    //                       );
    //                       reject(err);
    //                     });
    //                 })
    //                 .catch((err) => {
    //                   console.error(
    //                     "Checking permission " +
    //                       this.androidPermissions.PERMISSION.RECORD_AUDIO +
    //                       " failed"
    //                   );
    //                   reject(err);
    //                 });
    //             })
    //             .catch((err) => {
    //               console.error(
    //                 "Checking permission " +
    //                   this.androidPermissions.PERMISSION.CAMERA +
    //                   " failed"
    //               );
    //               reject(err);
    //             });
    //         })
    //         .catch((err) => console.error("Error requesting permissions: ", err));
    //     });
    //   });
    // }
    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        setTimeout(() => {
            this.updateLayout();
        }, 200);
    }
    /**
     * Collects information about the media input devices available on the system.
     *  You can pass property `deviceId` of a [[Device]] object as value of `audioSource`
     * or `videoSource` properties in [[initPublisher]] method
     */
    getDevices() {
        return new Promise((resolve, reject) => {
            navigator.mediaDevices
                .enumerateDevices()
                .then((deviceInfos) => {
                const devices = [];
                // Ionic Android  devices
                if (this.platform.is("cordova") &&
                    this.platform.is("android") &&
                    window.cordova &&
                    window.cordova.plugins &&
                    window.cordova.plugins.EnumerateDevicesPlugin) {
                    console.log("Running this code because we are on Android native");
                    window.cordova.plugins.EnumerateDevicesPlugin.getEnumerateDevices().then((pluginDevices) => {
                        let pluginAudioDevices = [];
                        let videoDevices = [];
                        let audioDevices = [];
                        pluginAudioDevices = pluginDevices.filter((device) => device.kind === "audioinput");
                        videoDevices = deviceInfos.filter((device) => device.kind === "videoinput");
                        audioDevices = deviceInfos.filter((device) => device.kind === "audioinput");
                        videoDevices.forEach((deviceInfo, index) => {
                            if (!deviceInfo.label) {
                                let label = "";
                                if (index === 0) {
                                    label = "Front Camera";
                                }
                                else if (index === 1) {
                                    label = "Back Camera";
                                }
                                else {
                                    label = "Unknown Camera";
                                }
                                devices.push({
                                    kind: deviceInfo.kind,
                                    deviceId: deviceInfo.deviceId,
                                    label: label,
                                });
                            }
                            else {
                                devices.push({
                                    kind: deviceInfo.kind,
                                    deviceId: deviceInfo.deviceId,
                                    label: deviceInfo.label,
                                });
                            }
                        });
                        audioDevices.forEach((deviceInfo, index) => {
                            if (!deviceInfo.label) {
                                let label = "";
                                switch (index) {
                                    case 0: // Default Microphone
                                        label = "Default";
                                        break;
                                    case 1: // Microphone + Speakerphone
                                        const defaultMatch = pluginAudioDevices.filter((d) => d.label.includes("Built"))[0];
                                        label = defaultMatch
                                            ? defaultMatch.label
                                            : "Built-in Microphone";
                                        break;
                                    case 2: // Headset Microphone
                                        const wiredMatch = pluginAudioDevices.filter((d) => d.label.includes("Wired"))[0];
                                        if (wiredMatch) {
                                            label = wiredMatch.label;
                                        }
                                        else {
                                            label = "Headset earpiece";
                                        }
                                        break;
                                    case 3:
                                        const wirelessMatch = pluginAudioDevices.filter((d) => d.label.includes("Bluetooth"))[0];
                                        label = wirelessMatch
                                            ? wirelessMatch.label
                                            : "Wireless";
                                        break;
                                    default:
                                        label = "Unknown Microphone";
                                        break;
                                }
                                devices.push({
                                    kind: deviceInfo.kind,
                                    deviceId: deviceInfo.deviceId,
                                    label: label,
                                });
                            }
                            else {
                                devices.push({
                                    kind: deviceInfo.kind,
                                    deviceId: deviceInfo.deviceId,
                                    label: deviceInfo.label,
                                });
                            }
                        });
                        resolve(devices);
                    });
                }
                else {
                    // Rest of platforms
                    deviceInfos.forEach((deviceInfo) => {
                        if (deviceInfo.kind === "audioinput" ||
                            deviceInfo.kind === "videoinput") {
                            devices.push({
                                kind: deviceInfo.kind,
                                deviceId: deviceInfo.deviceId,
                                label: deviceInfo.label,
                            });
                        }
                    });
                    resolve(devices);
                }
            })
                .catch((error) => {
                console.error("Error getting devices", error);
                reject(error);
            });
        });
    }
    toggleCamera() {
        // this.session.disconnect();
        console.log("Switch camera from", this.currentVideoDevice);
        if (this.currentVideoDevice === this.firstCam) {
            this.currentVideoDevice = this.lastCam;
        }
        else {
            this.currentVideoDevice = this.firstCam;
        }
        console.log("Switch camera to", this.currentVideoDevice);
        this.roomService
            .updateWebcam({ restart: true, newDeviceId: this.currentVideoDevice })
            .then(() => {
            console.log("Webcam updated ");
        })
            .catch((error) => {
            console.error("Error updating devices", error);
        });
    }
};
VideoRoomPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _socket_events_service__WEBPACK_IMPORTED_MODULE_6__.SocketEventsService },
    { type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__.RoomService },
    { type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_10__.NGXLogger },
    { type: hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__.RemotePeersService },
    { type: _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_3__.OpenViduService },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone }
];
VideoRoomPage.propDecorators = {
    hangup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    sessionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    token: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    patient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    audioOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    videoDeviceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    audioDeviceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    accepted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    beforeunloadHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener, args: ["window:beforeunload",] }],
    sizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener, args: ["window:resize", ["$event"],] }]
};
VideoRoomPage = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-video-room",
        template: _video_room_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)("slideLeftRight", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
                    transform: "translateX(0px)",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)("out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
                    transform: "translateX(100px)",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)("in => out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)("200ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ transform: "translateX(100px)", display: "none" }),
                ]))),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)("out => in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)("200ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ transform: "translateX(0px)" })]))),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)("slideLeftRightChat", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
                    transform: "translateX(0px)",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)("out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
                    transform: "translateX(100px)",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)("in => out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)("200ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ transform: "translateX(100px)", display: "none" }),
                ]))),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)("out => in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)("200ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ transform: "translateX(0px)" })]))),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)("slideTopBottom", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
                    transform: "translateY(0px)",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)("out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
                    transform: "translateY(100px)",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)("in => out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)("200ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ transform: "translateY(100px)", display: "none" }),
                ]))),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)("out => in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)("200ms", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ transform: "translateY(0px)" })]))),
            ]),
        ],
        styles: [_video_room_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform) === "function" ? _a : Object, typeof (_b = typeof _socket_events_service__WEBPACK_IMPORTED_MODULE_6__.SocketEventsService !== "undefined" && _socket_events_service__WEBPACK_IMPORTED_MODULE_6__.SocketEventsService) === "function" ? _b : Object, typeof (_c = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__.RoomService !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__.RoomService) === "function" ? _c : Object, typeof (_d = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_10__.NGXLogger !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_10__.NGXLogger) === "function" ? _d : Object, typeof (_e = typeof hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__.RemotePeersService !== "undefined" && hug_angular_lib__WEBPACK_IMPORTED_MODULE_9__.RemotePeersService) === "function" ? _e : Object, typeof (_f = typeof _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_3__.OpenViduService !== "undefined" && _shared_services_openvidu_service__WEBPACK_IMPORTED_MODULE_3__.OpenViduService) === "function" ? _f : Object, typeof (_g = typeof _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService !== "undefined" && _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService) === "function" ? _g : Object, typeof (_h = typeof _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone) === "function" ? _h : Object])
], VideoRoomPage);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    api: "/api/v1",
    host: "https://patient_hcw-athome.dev.oniabsis.com",
    //host: "http://localhost:1337",
    //host: 'https://' + document.location.host,
    showNativeAppSuggestionAndroid: true,
    showNativeAppSuggestionIOS: true,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 8763);
// localStorage.debug = '*'





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-1c2207b2_js-node_modules_ionic_core_dist_esm_t-5248a4",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-1c2207b2_js-node_modules_ionic_core_dist_esm_t-5248a4",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		2208,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		4832,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		5464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".server-error-container {\n  position: relative;\n  display: flex;\n  z-index: 2;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  margin-top: 155px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZlci1lcnJvci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTU1cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 5342:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/chat/chat.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#chat-content {\n  --background: #b8b8b8 !important;\n}\n\nion-footer {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);\n  background-color: #fff;\n  height: 255px;\n}\n\n#sendButton {\n  bottom: -54px !important;\n  right: 0;\n}\n\n#messageInput {\n  width: 90%;\n}\n\n#messageInput ion-item {\n  --border-style: none;\n}\n\n.message-wrap {\n  padding: 0 5px;\n  height: 100%;\n  overflow: auto;\n}\n\n.message {\n  position: relative;\n  padding: 7px 0;\n}\n\n.user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 60px;\n  height: 60px;\n  top: 15px;\n}\n\n.msg-detail {\n  width: calc(100% - 65px);\n  display: inline-block;\n}\n\n.msg-detail p {\n  margin: 0;\n  font-size: 15px;\n}\n\n.msg-info p {\n  font-size: 0.8em;\n  color: #000000;\n  font-style: italic;\n}\n\n.msg-info {\n  padding-bottom: 15px;\n}\n\n.msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  color: #000000;\n  width: auto;\n  max-width: 100%;\n}\n\nspan.triangle {\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.text {\n  word-break: break-all;\n}\n\n/* Start message from other user */\n\n.message.left .msg-detail .msg-info {\n  text-align: left;\n}\n\n.message.left .msg-detail {\n  padding-left: 65px;\n}\n\n.message.left .user-img {\n  left: -5px;\n  border: 1px solid rgba(240, 240, 240, 0.5803921569);\n}\n\n.message.left .msg-detail .msg-content {\n  background-color: #f0f0f0;\n  float: left;\n}\n\n.message.left .msg-detail .msg-content span.triangle {\n  background-color: #f0f0f0;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  left: -5px;\n}\n\n/* End message from other user */\n\n/* Start my messages */\n\n.message.right .msg-detail .msg-info {\n  text-align: right;\n}\n\n.message.right .user-img {\n  right: -5px;\n  border: 1px solid rgba(200, 255, 232, 0.6705882353);\n}\n\n.message.right .msg-detail .msg-content {\n  background-color: #c8ffe8;\n  float: right;\n}\n\n.message.right .msg-detail .msg-content span.triangle {\n  background-color: #c8ffe8;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n\n/* End my messages */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUFFO0VBQ0Usb0JBQUE7QUFFSjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBQUEsa0NBQUE7O0FBRUE7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxtREFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUEsZ0NBQUE7O0FBRUEsc0JBQUE7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLG1EQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQSxvQkFBQSIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2I4YjhiOCAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDI1NXB4O1xufVxuXG4jc2VuZEJ1dHRvbiB7XG4gIGJvdHRvbTogLTU0cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDA7XG59XG5cbiNtZXNzYWdlSW5wdXQge1xuICB3aWR0aDogOTAlO1xuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cbn1cblxuLm1lc3NhZ2Utd3JhcCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogN3B4IDA7XG59XG4udXNlci1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMTVweDtcbn1cblxuLm1zZy1kZXRhaWwge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1zZy1kZXRhaWwgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubXNnLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubXNnLWluZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm1zZy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuc3Bhbi50cmlhbmdsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHRvcDogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRleHQge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi8qIFN0YXJ0IG1lc3NhZ2UgZnJvbSBvdGhlciB1c2VyICovXG5cbi5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCB7XG4gIHBhZGRpbmctbGVmdDogNjVweDtcbn1cblxuLm1lc3NhZ2UubGVmdCAudXNlci1pbWcge1xuICBsZWZ0OiAtNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOTQ7XG59XG5cbi5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGxlZnQ6IC01cHg7XG59XG5cbi8qIEVuZCBtZXNzYWdlIGZyb20gb3RoZXIgdXNlciAqL1xuXG4vKiBTdGFydCBteSBtZXNzYWdlcyAqL1xuXG4ubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tZXNzYWdlLnJpZ2h0IC51c2VyLWltZyB7XG4gIHJpZ2h0OiAtNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhmZmU4YWI7XG59XG5cbi5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGZmZTg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZmZlODtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIHJpZ2h0OiAtNXB4O1xufVxuXG4vKiBFbmQgbXkgbWVzc2FnZXMgKi9cbiJdfQ== */";

/***/ }),

/***/ 6299:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/choose-attachment/choose-attachment.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #266eb7;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #ffbb00;\n  --ion-color-secondary-rgb: 255, 204, 0;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0, 0, 0;\n  --ion-color-secondary-shade: #bd9700;\n  --ion-color-secondary-tint: #ffd21e;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: ##ffcd00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #494b50;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #cccccc;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --blue-bg-color: #0072bb;\n}\n.wrap {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  background-size: 100%;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n::ng-deep html[data-theme=accessibility] .wrap {\n  background-image: none !important;\n  background-image: initial !important;\n}\n.submit-btn {\n  margin: auto;\n  display: block;\n  margin-top: 14px;\n  background-color: white;\n  border-radius: 60px;\n  text-align: center;\n  width: 70%;\n  height: 42px;\n  color: #266eb7;\n  color: var(--ion-color-primary);\n}\n.container {\n  display: block;\n  margin: 30px auto;\n  width: 100%;\n}\n.dismiss-btn {\n  --border-style: none;\n  --box-shadow: none;\n  --border-radius: 30px;\n  font-size: 0.8em;\n  margin-top: 14px;\n  display: block;\n}\n.attach-icon { /* IE 9 */ /* Safari */\n  transform: rotate(-45deg);\n  display: block;\n  margin: 16px auto;\n  width: 40px;\n  height: 40px;\n}\n::ng-deep html[data-theme=accessibility] .attach-icon {\n  margin: 0 !important;\n  margin: initial !important;\n}\n::ng-deep html[data-theme=accessibility] h4 {\n  text-align: left !important;\n  font-size: 1.3em;\n}\n::ng-deep html[data-theme=accessibility] .submit-btn {\n  margin-left: 0 !important;\n  margin-left: initial !important;\n  margin-right: 0 !important;\n  margin-right: initial !important;\n  width: auto !important;\n  height: auto !important;\n  padding: 10px 22px;\n  font-size: 1.1em;\n}\n::ng-deep html[data-theme=accessibility] .dismiss-btn {\n  margin-left: 0 !important;\n  margin-left: initial !important;\n  margin-right: 0 !important;\n  margin-right: initial !important;\n  font-size: 1.1em;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiY2hvb3NlLWF0dGFjaG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFNQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBRUEsK0JBQUE7RUFFQSx3QkFBQTtBQ2pCRjtBQWhFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VEb0ZFLDhDQUFBO0VBTUEsMkNBQUE7RUN4RkYsb0NBQUE7RUFBQSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBb0VGO0FBaEVJO0VBQ0UsaUNBQUE7RUFBQSxvQ0FBQTtBQW1FTjtBQS9EQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtBQWtFRjtBQS9EQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFrRUY7QUEvREE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWtFRjtBQS9EQSxlQUNFLFNBQUEsRUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtFRjtBQTdESTtFQUNFLG9CQUFBO0VBQUEsMEJBQUE7QUFnRU47QUE5REk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBZ0VOO0FBOURJO0VBQ0UseUJBQUE7RUFBQSwrQkFBQTtFQUNBLDBCQUFBO0VBQUEsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWdFTjtBQTlESTtFQUNFLHlCQUFBO0VBQUEsK0JBQUE7RUFDQSwwQkFBQTtFQUFBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtBQStETiIsImZpbGUiOiJjaG9vc2UtYXR0YWNobWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcblxuJGJhY2tncm91bmQtaW1hZ2UtcGF0aDogXCIvaWNvbnMvYmFja2dyb3VuZC5qcGdcIjtcbiRiYWNrZ3JvdW5kLWltYWdlLTJ4LXBhdGg6IFwiL2JhY2tncm91bmRAMnguanBnXCI7XG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMjY2ZWI3O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2ZmYmIwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMjU1LCAyMDQsIDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjYmQ5NzAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogI2ZmZDIxZTtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzI4ZTA3MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogIyNmZmNkMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmMDQxNDE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICM0OTRiNTA7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNjY2NjY2M7IC8vICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC8vIC0tZmM6I0NDQ0NDQztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAtLWJsdWUtYmctY29sb3I6ICMwMDcyYmI7XG59XG5AbWl4aW4gYmFja2dyb3VuZE1peGluKCRoYXNCYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgQGlmICRiYWNrZ3JvdW5kLWltYWdlLXBhdGgge1xuICAgIC8vZG8gc29tZXRoaW5nXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRiYWNrZ3JvdW5kLWltYWdlLXBhdGgpO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIEBpZiAkYmFja2dyb3VuZC1pbWFnZS0yeC1wYXRoIHtcbiAgICAvL2RvIHNvbWV0aGluZ1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2dyb3VuZC1pbWFnZS0yeC1wYXRoKTtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcInNyYy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ud3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIEBpbmNsdWRlIGJhY2tncm91bmRNaXhpbigkYmFja2dyb3VuZC1pbWFnZS1wYXRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbjo6bmctZGVlcCB7XG4gIGh0bWxbZGF0YS10aGVtZT1cImFjY2Vzc2liaWxpdHlcIl0ge1xuICAgIC53cmFwIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNDJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXNtaXNzLWJ0biB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hdHRhY2gtaWNvbiB7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgLyogU2FmYXJpICovXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgLmF0dGFjaC1pY29uIHtcbiAgICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG4gICAgLnN1Ym1pdC1idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIycHg7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIH1cbiAgICAuZGlzbWlzcy1idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 1749:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/close-consultation/close-consultation.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #266eb7;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #ffbb00;\n  --ion-color-secondary-rgb: 255, 204, 0;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0, 0, 0;\n  --ion-color-secondary-shade: #bd9700;\n  --ion-color-secondary-tint: #ffd21e;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: ##ffcd00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #494b50;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #cccccc;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --blue-bg-color: #0072bb;\n}\nion-content {\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  background-size: 100%;\n  background-position: center;\n}\n::ng-deep html[data-theme=accessibility] ion-content {\n  background-image: none !important;\n  background-image: initial !important;\n}\nion-grid {\n  height: 100%;\n  width: 100%;\n}\nion-button {\n  display: block;\n  margin: auto;\n}\n.doctor-title {\n  padding: 0;\n  display: block;\n  margin: auto;\n  text-align: center;\n  color: white;\n  font-size: 0.95em;\n  margin-top: 10px;\n}\n.cancel-btn {\n  margin-top: 15px;\n  --border-radius: 30px;\n  --background: #00b54a;\n  color: white;\n  width: auto;\n  display: inline-block;\n}\n.dismiss-btn {\n  --border-style: none;\n  --box-shadow: none;\n  --border-radius: 30px;\n  font-size: 0.8em;\n  margin-top: 10px;\n  background: white;\n  color: #266eb7;\n  color: var(--ion-color-primary);\n  border-radius: 30px;\n}\nion-icon[class*=fn-] {\n  background-size: contain;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  width: 1em;\n  height: 1em;\n}\nion-icon[class*=fn-x] {\n  color: white;\n  -webkit-mask: url(\"/icons/icon-cancel.svg\");\n  background-color: white;\n  width: 28px;\n  height: 28px;\n  filter: brightness(0) invert(1);\n  display: block;\n  margin: auto;\n}\n.your-about-to {\n  color: #fff;\n  text-align: center;\n  margin-top: 20px;\n  font-size: 0.93em;\n}\n::ng-deep html[data-theme=accessibility] ion-icon[class*=fn-x] {\n  margin: 0 !important;\n  margin: initial !important;\n}\n::ng-deep html[data-theme=accessibility] .doctor-title {\n  text-align: left;\n  margin-left: 20px;\n}\n::ng-deep html[data-theme=accessibility] p {\n  text-align: left !important;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiY2xvc2UtY29uc3VsdGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBTUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUVBLCtCQUFBO0VBRUEsd0JBQUE7QUNqQkY7QUFoRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFRG9GRSw4Q0FBQTtFQU1BLDJDQUFBO0VDdkZGLG9DQUFBO0VBQUEscURBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBbUVGO0FBL0RJO0VBQ0UsaUNBQUE7RUFBQSxvQ0FBQTtBQWtFTjtBQTlEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBaUVGO0FBOURBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFpRUY7QUE5REE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaUVGO0FBOURBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQWlFRjtBQTlEQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFBQSwrQkFBQTtFQUNBLG1CQUFBO0FBaUVGO0FBN0RFO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFnRUo7QUE3REU7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFFQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtBQTZESjtBQTFEQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE2REY7QUF6REk7RUFDRSxvQkFBQTtFQUFBLDBCQUFBO0FBNEROO0FBMURJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQTRETjtBQTFESTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUE0RE4iLCJmaWxlIjoiY2xvc2UtY29uc3VsdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuXG4kYmFja2dyb3VuZC1pbWFnZS1wYXRoOiBcIi9pY29ucy9iYWNrZ3JvdW5kLmpwZ1wiO1xuJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aDogXCIvYmFja2dyb3VuZEAyeC5qcGdcIjtcbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMyNjZlYjc7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjZmZiYjAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAyNTUsIDIwNCwgMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICNiZDk3MDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjZmZkMjFlO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3MDQ0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTEyLCA2OCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzYzM2NlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzdlNTdmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzEwZGM2MDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LCAyMjAsIDk2O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzBlYzI1NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMjhlMDcwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjI2ZmY2QwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjA2LCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzQ5NGI1MDtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2NjY2NjYzsgLy8gI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLy8gLS1mYzojQ0NDQ0NDO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG4gIC0tYmx1ZS1iZy1jb2xvcjogIzAwNzJiYjtcbn1cbkBtaXhpbiBiYWNrZ3JvdW5kTWl4aW4oJGhhc0JhY2tncm91bmRJbWFnZSkge1xuICBAaWYgJGJhY2tncm91bmQtaW1hZ2UtcGF0aCB7XG4gICAgLy9kbyBzb21ldGhpbmdcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGJhY2tncm91bmQtaW1hZ2UtcGF0aCk7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgQGlmICRiYWNrZ3JvdW5kLWltYWdlLTJ4LXBhdGgge1xuICAgIC8vZG8gc29tZXRoaW5nXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRiYWNrZ3JvdW5kLWltYWdlLTJ4LXBhdGgpO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kTWl4aW4oJGJhY2tncm91bmQtaW1hZ2UtcGF0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCB7XG4gIGh0bWxbZGF0YS10aGVtZT1cImFjY2Vzc2liaWxpdHlcIl0ge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZG9jdG9yLXRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBiNTRhO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kaXNtaXNzLWJ0biB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgJltjbGFzcyo9XCJmbi1cIl0ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgfVxuXG4gICZbY2xhc3MqPVwiZm4teFwiXSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtbWFzazogdXJsKFwiL2ljb25zL2ljb24tY2FuY2VsLnN2Z1wiKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4ueW91ci1hYm91dC10byB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC45M2VtO1xufVxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgaW9uLWljb25bY2xhc3MqPVwiZm4teFwiXSB7XG4gICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kb2N0b3ItdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 1017:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/request-consultation/request-consultation.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-grid {\n  position: relative;\n  height: 100%;\n}\n\n.scroll-content {\n  padding-bottom: 0 !important;\n}\n\nion-content {\n  padding-bottom: 0 !important;\n  overflow: scroll;\n}\n\nion-card {\n  width: 100%;\n}\n\n.item-h,\nion-button {\n  border-bottom: 1px solid var(--ion-color-light-shade);\n  margin-bottom: 5px;\n  padding-top: 0px;\n  margin-top: 0px;\n  color: var(--ion-color-light);\n  height: 30px;\n  font-size: 0.95em;\n}\n\n.item-h,\nion-button > ion-grid {\n  line-height: 2;\n}\n\n.item-h:last-child,\nion-button:last-child {\n  border: none;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.arrow-icon {\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.bottom-card {\n  position: absolute;\n  width: 100%;\n  bottom: 10mm;\n  left: 0;\n  right: 0;\n}\n\nion-card {\n  --background: #ffffff;\n}\n\nion-toggle {\n  width: 37px;\n  height: 13px;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\nion-label {\n  min-width: auto !important;\n  max-width: auto !important;\n  flex: 0 1 auto !important;\n  width: auto !important;\n  color: #6a6a6a !important;\n}\n\ninput {\n  flex: 0 1 auto !important;\n}\n\n.input-g {\n  line-height: 1.5;\n}\n\n.gender-item {\n  width: 100%;\n}\n\nion-list.check-list > ion-item {\n  font-size: 14px;\n}\n\nion-list.check-list > ion-item ion-label {\n  width: 73% !important;\n  margin-right: 0;\n  font-size: 0.95em;\n}\n\nion-checkbox {\n  margin-right: 0px;\n}\n\nion-title.sub {\n  margin-top: 16px;\n  font-size: 0.8em;\n  font-weight: bold;\n  display: block;\n}\n\n.input-list ion-item {\n  height: 65px;\n  font-size: 14px;\n}\n\n.submit-btn {\n  padding: 0;\n  width: 102vw;\n  height: 60px;\n  margin-left: 0;\n  --border-radius: 0px;\n  --background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtY29uc3VsdGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUVBO0VBQ0UsNEJBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBOztFQUVFLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBOztFQUVFLGNBQUE7QUFDRjs7QUFDQTs7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBTUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBSEY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBRUUsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUVFLFVBQUE7RUFHQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0FBSkYiLCJmaWxlIjoicmVxdWVzdC1jb25zdWx0YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8vIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbS1oLFxuaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG5cbi5pdGVtLWgsXG5pb24tYnV0dG9uID4gaW9uLWdyaWQge1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5pdGVtLWg6bGFzdC1jaGlsZCxcbmlvbi1idXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvdHRvbS1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAxMG1tO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi10b2dnbGUge1xuICB3aWR0aDogMzdweDtcbiAgaGVpZ2h0OiAxM3B4O1xuXG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4vLyAudG9nZ2xlLWlubmVyIHtcbi8vICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuLy8gICAgIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xuLy8gfVxuXG5pb24tbGFiZWwge1xuICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNmE2YTZhICFpbXBvcnRhbnQ7XG59XG5pbnB1dCB7XG4gIGZsZXg6IDAgMSBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1nIHtcbiAgLy8gYm9yZGVyOm5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5nZW5kZXItaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QuY2hlY2stbGlzdCA+IGlvbi1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tbGlzdC5jaGVjay1saXN0ID4gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDczJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbmlvbi10aXRsZS5zdWIge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dC1saXN0IGlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiAwO1xuICAvLyBsZWZ0OiAtNXB4O1xuICAvLyBib3R0b206IDEwdmg7XG4gIHdpZHRoOiAxMDJ2dztcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */";

/***/ }),

/***/ 2694:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/stream/peer-audio/peer-audio.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWVyLWF1ZGlvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7129:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/stream/peer-video/peer-video.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".nickname {\n  background: rgba(58, 64, 74, 0.651);\n  padding: 5px !important;\n  position: absolute;\n  z-index: 999;\n}\n\nvideo {\n  -o-object-fit: cover;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  color: #ffffff;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#statusIcons {\n  bottom: 0;\n  width: 40px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n}\n\n#statusIcons ion-badge {\n  margin: 2px;\n}\n\n#statusIcons ion-icon {\n  font-size: 1.2em;\n}\n\n#fullscreenButton {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.768627451);\n}\n\n#volumeButton {\n  background-color: rgba(0, 0, 0, 0.768627451);\n  position: absolute;\n  bottom: 45px;\n  right: 1px;\n  z-index: 1000;\n}\n\n/* Contains the video element, used to fix video letter-boxing */\n\n.OT_widget-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  z-index: -1;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: #ffffff !important;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(214, 214, 214, 0.8431372549) !important;\n}\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: rgba(245, 245, 245, 0.7607843137) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZXItdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQUFGOztBQUVBO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBLGdFQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFDQTtFQUNFLDhEQUFBO0FBRUY7O0FBQ0E7RUFDRSw4REFBQTtBQUVGIiwiZmlsZSI6InBlZXItdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmlja25hbWUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU4LCA2NCwgNzQsIDAuNjUxKTtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xufVxuXG5cbnZpZGVvIHtcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNzdGF0dXNJY29ucyB7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI3N0YXR1c0ljb25zIGlvbi1iYWRnZXtcbiAgbWFyZ2luOiAycHg7XG59XG5cbiNzdGF0dXNJY29ucyBpb24taWNvbntcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuI2Z1bGxzY3JlZW5CdXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjNDtcbn1cbiN2b2x1bWVCdXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1cHg7XG4gIHJpZ2h0OiAxcHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4vKiBDb250YWlucyB0aGUgdmlkZW8gZWxlbWVudCwgdXNlZCB0byBmaXggdmlkZW8gbGV0dGVyLWJveGluZyAqL1xuLk9UX3dpZGdldC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNmQ3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNWMyICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 1128:
/*!************************************************************!*\
  !*** ./src/app/video-room/video-room.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #266eb7;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #ffbb00;\n  --ion-color-secondary-rgb: 255, 204, 0;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0, 0, 0;\n  --ion-color-secondary-shade: #bd9700;\n  --ion-color-secondary-tint: #ffd21e;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: ##ffcd00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #494b50;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #cccccc;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --blue-bg-color: #0072bb;\n}\n.demo-logo {\n  max-width: 33%;\n  padding-left: 5px;\n  padding-right: 10px;\n}\n#video-room-content {\n  overflow-y: none;\n}\n#exitButton {\n  font-size: 30px;\n}\n#micButton,\n#camButton {\n  font-size: 18px;\n}\n#rightButtons ion-fab-button {\n  --box-shadow: none;\n}\n.bounds {\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  height: inherit;\n}\n.boundsLight {\n  background-color: #dfdfdf !important;\n}\n/*!\n * Copyright (c) 2017 TokBox, Inc.\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n */\n.custom-class {\n  min-height: 0px !important;\n}\n/**\n * OT Base styles\n */\n/* Root OT object, this is where our CSS reset happens */\n.OT_root,\n.OT_root * {\n  padding: 0;\n  border: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  vertical-align: baseline;\n}\n.OT_main {\n  /*top: 0 !important;\n  bottom: 0 !important;\n  left: 0 !important;\n  right: 0 !important;*/\n}\n.OT_dialog-centering {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.OT_dialog-centering-child {\n  display: table-cell;\n  vertical-align: middle;\n}\n.OT_dialog {\n  position: relative;\n  box-sizing: border-box;\n  margin-right: auto;\n  margin-left: auto;\n  color: #fff;\n  font-family: \"Didact Gothic\", sans-serif;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.OT_dialog * {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n.OT_closeButton {\n  color: #999999;\n  cursor: pointer;\n  font-size: 32px;\n  line-height: 36px;\n  position: absolute;\n  right: 18px;\n  top: 0;\n}\n.OT_dialog-messages {\n  text-align: center;\n}\n.OT_dialog-messages-main {\n  margin-bottom: 36px;\n  line-height: 36px;\n  font-weight: 300;\n  font-size: 24px;\n}\n.OT_dialog-messages-minor {\n  margin-bottom: 18px;\n  font-size: 13px;\n  line-height: 18px;\n  color: #a4a4a4;\n}\n.OT_dialog-messages-minor strong {\n  color: #ffffff;\n}\n.OT_dialog-actions-card {\n  display: inline-block;\n}\n.OT_dialog-button-title {\n  margin-bottom: 18px;\n  line-height: 18px;\n  font-weight: 300;\n  text-align: center;\n  font-size: 14px;\n  color: #999999;\n}\n.OT_dialog-button-title label {\n  color: #999999;\n}\n.OT_dialog-button-title a,\n.OT_dialog-button-title a:link,\n.OT_dialog-button-title a:active {\n  color: #02a1de;\n}\n.OT_dialog-button-title strong {\n  color: #ffffff;\n  font-weight: 100;\n  display: block;\n}\n.OT_dialog-button {\n  display: inline-block;\n  margin-bottom: 18px;\n  padding: 0 1em;\n  background-color: #1ca3dc;\n  text-align: center;\n  cursor: pointer;\n}\n.OT_dialog-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.OT_dialog-button-large {\n  line-height: 36px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  font-weight: 100;\n  font-size: 24px;\n}\n.OT_dialog-button-small {\n  line-height: 18px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  background-color: #444444;\n  color: #999999;\n  font-size: 16px;\n}\n.OT_dialog-progress-bar {\n  display: inline-block; /* prevents margin collapse */\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 41px;\n  border: 1px solid #4e4e4e;\n  height: 8px;\n}\n.OT_dialog-progress-bar-fill {\n  height: 100%;\n  background-color: #29a4da;\n}\n.OT_dialog-plugin-upgrading .OT_dialog-plugin-upgrade-percentage {\n  line-height: 54px;\n  font-size: 48px;\n  font-weight: 100;\n}\n/* Helpers */\n.OT_centered {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin: 0;\n}\n.OT_dialog-hidden {\n  display: none;\n}\n.OT_dialog-button-block {\n  display: block;\n}\n.OT_dialog-no-natural-margin {\n  margin-bottom: 0;\n}\n/* Publisher and Subscriber styles */\n.OT_publisher,\n.OT_subscriber {\n  position: relative;\n  min-width: 48px;\n  min-height: 48px;\n}\n.OT_publisher .OT_video-element,\n.OT_subscriber .OT_video-element {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform-origin: 0 0;\n}\n/* Styles that are applied when the video element should be mirrored */\n.OT_publisher.OT_mirrored .OT_video-element {\n  transform: scale(-1, 1);\n  transform-origin: 50% 50%;\n}\n.OT_subscriber_error {\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n}\n.OT_subscriber_error > p {\n  padding: 20px;\n}\n/* The publisher/subscriber name/mute background */\n.OT_publisher .OT_bar,\n.OT_subscriber .OT_bar,\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name,\n.OT_publisher .OT_archiving,\n.OT_subscriber .OT_archiving,\n.OT_publisher .OT_archiving-status,\n.OT_subscriber .OT_archiving-status,\n.OT_publisher .OT_archiving-light-box,\n.OT_subscriber .OT_archiving-light-box {\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: block;\n  height: 34px;\n  position: absolute;\n}\n.OT_publisher .OT_bar,\n.OT_subscriber .OT_bar {\n  background: rgba(0, 0, 0, 0.4);\n}\n.OT_publisher .OT_edge-bar-item,\n.OT_subscriber .OT_edge-bar-item {\n  z-index: 1; /* required to get audio level meter underneath */\n}\n/* The publisher/subscriber name panel/archiving status bar */\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name {\n  background-color: transparent;\n  color: #ffffff;\n  font-size: 15px;\n  line-height: 34px;\n  font-weight: normal;\n  padding: 0 4px 0 36px;\n}\n.OT_publisher .OT_archiving-status,\n.OT_subscriber .OT_archiving-status {\n  background: rgba(0, 0, 0, 0.4);\n  top: auto;\n  bottom: 0;\n  left: 34px;\n  padding: 0 4px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 15px;\n  line-height: 34px;\n  font-weight: normal;\n}\n.OT_micro .OT_archiving-status,\n.OT_micro:hover .OT_archiving-status,\n.OT_mini .OT_archiving-status,\n.OT_mini:hover .OT_archiving-status {\n  display: none;\n}\n.OT_publisher .OT_archiving-light-box,\n.OT_subscriber .OT_archiving-light-box {\n  background: rgba(0, 0, 0, 0.4);\n  top: auto;\n  bottom: 0;\n  right: auto;\n  width: 34px;\n  height: 34px;\n}\n.OT_archiving-light {\n  width: 7px;\n  height: 7px;\n  border-radius: 30px;\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  background-color: #575757;\n  box-shadow: 0 0 5px 1px #575757;\n}\n.OT_archiving-light.OT_active {\n  background-color: #970d13;\n  animation: OT_pulse 1.3s ease-in;\n  -webkit-animation: OT_pulse 1.3s ease-in;\n  -moz-animation: OT_pulse 1.3s ease-in;\n  -webkit-animation: OT_pulse 1.3s ease-in;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n}\n@-webkit-keyframes OT_pulse {\n  0% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n  30% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n  50% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n  80% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n  100% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n}\n@-webkit-keyframes OT_pulse {\n  0% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n  30% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n  50% {\n    box-shadow: 0 0 5px 1px #c70019;\n  }\n  80% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n  100% {\n    box-shadow: 0 0 0px 0px #c70019;\n  }\n}\n.OT_mini .OT_bar,\n.OT_bar.OT_mode-mini,\n.OT_bar.OT_mode-mini-auto {\n  bottom: 0;\n  height: auto;\n}\n.OT_mini .OT_name.OT_mode-off,\n.OT_mini .OT_name.OT_mode-on,\n.OT_mini .OT_name.OT_mode-auto,\n.OT_mini:hover .OT_name.OT_mode-auto {\n  display: none;\n}\n.OT_publisher .OT_name,\n.OT_subscriber .OT_name {\n  left: 10px;\n  right: 37px;\n  height: 34px;\n  padding-left: 0;\n}\n.OT_publisher .OT_mute,\n.OT_subscriber .OT_mute {\n  border: none;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  text-align: center;\n  text-indent: -9999em;\n  background-color: transparent;\n  background-repeat: no-repeat;\n}\n.OT_publisher .OT_mute,\n.OT_subscriber .OT_mute {\n  right: 0;\n  top: 0;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n  height: 36px;\n  width: 37px;\n}\n.OT_mini .OT_mute,\n.OT_publisher.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold,\n.OT_subscriber.OT_mini .OT_mute.OT_mode-auto.OT_mode-on-hold {\n  top: 50%;\n  left: 50%;\n  right: auto;\n  margin-top: -18px;\n  margin-left: -18.5px;\n  border-left: none;\n}\n.OT_publisher .OT_mute {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAMAAAC02HQrAAAA1VBMVEUAAAD3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pn3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj3+Pj39/j3+Pj3+Pn4+Pk/JRMlAAAAQ3RSTlMABAUHCQoLDhAQERwdHiAjLjAxOD9ASFBRVl1mbnZ6fH2LjI+QkaWqrrC1uLzAwcXJycrL1NXj5Ofo6u3w9fr7/P3+d4M3+QAAAQBJREFUGBlVwYdCglAABdCLlr5Unijm3hMUtBzlBLSr//9JgUToOQgVJgceJgU8aHgMeA38K50ZOpcQmTPwcyXn+JM8M3JJIqQypiIkeXelTyIkGZPwKS1NMia1lgKTVkaE3oQQGYsmHNqSMWnTgUFbMiZtGlD2dpaxrL1XgM0i4ZK8MeAmFhsAs29MGZniawagS63oMOQUNXYB5D0D1RMDpyoMLw/fiE2og/V+PVDR5AiBl0/2Uwik+vx4xV3a5G5Ye68Nd1czjUjZckm6VhmPciRzeCZICjwTJAViQq+3e+St167rAoHK8sLYZVkBYPCZAZ/eGa+2R5LH7Wrc0YFf/O9J3yBDFaoAAAAASUVORK5CYII=);\n  background-position: 9px 5px;\n}\n.OT_publisher .OT_mute.OT_active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAADcElEQVRIiaWVXWhcRRTHf7NNd2aDtUKMIjTpg4ufFIuiUOmDEWm0Vi3VYhXRqIggQh4sWJFSig9+oOhTKSpIRUWMIBIr2kptoTbgU6ooxCiIjR+14kcJmf9sNceHnd3ebnc3Uv9wuXfOzPzmnDMz5zozGwdWAbc65w5RUJQ8cC2wDJgFJioh/MJCMrNxq2vOzK4HmIvRRemxKP0RJWt53o7S+d2Yzsx6gQ+AIUDAnUqpBLzXZd4RYFUlhB/bdZacc3PAOmAcCMC7wfvFwLNdoAPAyx09bXyYWRl4E7gDmAdGlNKFwLYu8GolhO9O87RJd64GbMrgEvB68P4osMWdXLtVV7czlooNpVRWSs8DO7NpR/B+3rBHsvetCgtCMTxwQCm9BbyQrc8F7/uBex3uRCeXO0PrUZ4NfKyUPgWeyj3bg/crDNsIRGwBaJQGorQ3Svdn2wHgc2BUKb0DPJHtjwfvbwRucc7tz+N+i9LFUdoXpfVN36I0CVwBTFI/q9e1LPxT8P4qYEdu70q12mYzWw1MYQzjeJF6zq+shHC4B7jklOBPP/TzSunh4P0DwKvAfb5c9krpe+CcwsEoZdbhEvBM9wxRAl5RShcA9wAngE3B+8tLpdLuwrhp4MNmK0pfRWkySr7NXS8+L5nZbWZWy/Vin1IaitJnUTqvwevJ71lgSSWEFKUfHG7Q2m/xqFJaGry/GXgfGPLl8mJgrXPur2JoUC8Qy3OpG+sAbGhEKT0ErAWOA6uBPWbW1wr9BOgFbgKezot0kAPYqJQA1gC/A9cA+82svzksSn1R+jNKX0SpnM/e1x3yqig92JhrZivM7FjO8bSZLSuCR/Ok16K0KMNHojQWpYko7Y7S1igN5PE3ROl4lNaZ2UVmNpPBU01orvZvZPCeKFXbBR+lEKVtUapFaSZKg9njqpl9aWYTrmXCImA7sCWb9lK/jj9TrwkrgA1AH3AQuKsSwkzbrLfxpgpsBtYDxf/R3xm2ExirhNCuHHZXTsmRwiat+S/zSt06eysVA/4pmGr/G3qm6ik28v29FKgCg8BS6pvS0KNRGgZ+Bb4FpsxsOkfUlMuwDcBWYOUZOHYM2AU8WQmhBifDv70O7PjX7KZ+4G7g3FM8zd6uBIaBy4AqxnIcZwFLCovPAhE4Sj38b4BDwEeVEFKD9S94Khjn486v3QAAAABJRU5ErkJggg==);\n  background-position: 9px 4px;\n}\n.OT_subscriber .OT_mute {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABx0lEQVQ4jaWUv48NURiGn3ONmCs32ZBd28ht1gqyZAkF21ylQkEiSp2ehpDlD1BoFGqqVdJohYKI7MaPxMoVNghCWMF+7ybLUewnOXfcMWO9yeQ857zne8+XmZOBGjJpr0kvTIomvTZpS526UCO4DUwD64FjwCFgqZnnR+oc8LfgzKQ73vGsr42ZtGjSQFV9o8KfBCacZwCaef4YmAf2rzjcpN3A2WSpm/AssKcqPDNpDBjs410CViXzTwk/A7b1C4wxDgOngAsZcAXY2buDfp/6S4F3lDS8DjgBzDWAjX/Y/e/QgYS/AhsKHa+OMQ6GEJ4Cj4BOAxgq6aCowyZtdf4OtAr+FHDO+R4wWnVbihr3cQnICt4boO38GWj9a/icjwOACt4m4K3zEPA+AxaAtTWCnwN3lzHkEL8V/OPAGud9wK2GF9XR1Wae/1zG2AI+pGYI4VUIoRtjHAc2A9cz4LRPevYCZ+i9/4sJt4GXJU10gaPAzdI2TTro/5Tfz8XEe2LSZGmxq/SDNvP8BnA5WRrx4BwYBe6vONx1EnjovGvBLAAd4Adwuyq8UiaNmDTvr+a8SQ9MuvbfwckBHZPe+QEfTdpep+4XZmPBHiHgz74AAAAASUVORK5CYII=);\n  background-position: 8px 7px;\n}\n.OT_subscriber .OT_mute.OT_active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAACtklEQVQ4jZ2VSYiURxTHf+/T9Nc9iRrBuYySmIsXUU9iFMEFERRBvAjJLUQi5ioiHvSScfTmgqC4XAT1ZIgLuJHkICaaQAgKI2hAUBT30bjUq7bbv4eukXK029F3+eqtv/fqK6qQdEnSNUmT6CDB/bvgfjO4N9zj2RD8007xg1IABkwEzkma0qb4PGAPMBZYLtSD8eNwAEjqTlNI0gNJM4YU7w7ut4O7gvuhZFsR3C8NC5BBLiTIY0mzM8AvqbiC++pk+zLpE95XuwAws3vAQuBPYDRwWtL84P4tsDSLv5oaug4EYOawAMF9jMdoLxqNZcDvQA04UVYqL4G/svj7AF21mhJscrvCksYBFO7xc2AAGGg2mrdjvf4rcAyomNn+slLZmUEGBgsYdh945xZJmgvckDSrEJpK6ySBgV6q12O8ABwGPjGzfWWlsjdN9rpjoSfA+DYDXARGAksK4Is3XC1Ub4z1f4CDQGFmu6tleQSYk0U+p7WVeefLJc00s4fAeWB6Qeunvj0m2ugx9gO7kmlrtSxvBfcy6fXUZS6rgG/S+jLQUwCVNmMC9HqM14EtSe+rluWazN8YEv8IqKZ1E1qnaIDO0ucx3gX6kv6TpM3AM+D/IbGjgP60/gq4WQA33gMA2OQxPgHWJX1ttSwL4FAeZGYLgB2SasBs4A8L7qOBf9M0uXQB3a+TMYSmVctyDrA9mfcBK82smSdKWgCcAaa1bTm4fxbc/8uuCQX3RanAD5Ka6Wo5IGnE0HxJPZ03pQX5Org3MsD3AO5xXLPZXJ9BjkrqdFg6QjZkgG3Jtsw93pG0VFI9QU5K6voYQBHcTydAfwheBI9HgvvPAJIWS3qeIL9JGvUxkO7gfi1BrqTvwkG/pPmSnibIqTzXPgAyEVgBjAEu1qrVPbk/PVTHgb/NbPGg/RVIzOQqzSTBaQAAAABJRU5ErkJggg==);\n  background-position: 7px 7px;\n}\n/**\n * Styles for display modes\n *\n * Note: It's important that these completely control the display and opacity\n * attributes, no other selectors should atempt to change them.\n */\n/* Default display mode transitions for various chrome elements */\n.OT_publisher .OT_edge-bar-item,\n.OT_subscriber .OT_edge-bar-item {\n  transition-property: top, bottom, opacity;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-in;\n}\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_mode-off,\n.OT_publisher .OT_edge-bar-item.OT_mode-auto,\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto,\n.OT_publisher .OT_edge-bar-item.OT_mode-mini-auto,\n.OT_subscriber .OT_edge-bar-item.OT_mode-mini-auto {\n  top: -25px;\n  opacity: 0;\n}\n.OT_publisher .OT_edge-bar-item.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_mode-off {\n  display: none;\n}\n.OT_mini .OT_mute.OT_mode-auto,\n.OT_publisher .OT_mute.OT_mode-mini-auto,\n.OT_subscriber .OT_mute.OT_mode-mini-auto {\n  top: 50%;\n}\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-off,\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-mini-auto {\n  top: auto;\n  bottom: -25px;\n}\n.OT_publisher .OT_edge-bar-item.OT_mode-on,\n.OT_subscriber .OT_edge-bar-item.OT_mode-on,\n.OT_publisher .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\n.OT_subscriber .OT_edge-bar-item.OT_mode-auto.OT_mode-on-hold,\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-auto,\n.OT_publisher:hover .OT_edge-bar-item.OT_mode-mini-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_mode-mini-auto {\n  top: 0;\n  opacity: 1;\n}\n.OT_mini .OT_mute.OT_mode-on,\n.OT_mini:hover .OT_mute.OT_mode-auto,\n.OT_mute.OT_mode-mini,\n.OT_root:hover .OT_mute.OT_mode-mini-auto {\n  top: 50%;\n}\n.OT_publisher .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\n.OT_subscriber .OT_edge-bar-item.OT_edge-bottom.OT_mode-on,\n.OT_publisher:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto,\n.OT_subscriber:hover .OT_edge-bar-item.OT_edge-bottom.OT_mode-auto {\n  top: auto;\n  bottom: 0;\n  opacity: 1;\n}\n/* Load animation */\n.OT_root .OT_video-loading {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.OT_root .OT_video-loading .OT_video-loading-spinner {\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAtMjAgMjQwIDI0MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjA4Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxIiB4Mj0iMCIgeTE9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMDgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjE2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgyPSIwIiB5MT0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDI9IjEiIHkxPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjMzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii42NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuNjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxtYXNrIGlkPSJnIj48ZyBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjQwIj48cGF0aCBzdHJva2U9InVybCgjYSkiIGQ9Ik04Ni42LTUwYTEwMCAxMDAgMCAwIDEgMCAxMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2IpIiBkPSJNODYuNiA1MEExMDAgMTAwIDAgMCAxIDAgMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNjKSIgZD0iTTAgMTAwYTEwMCAxMDAgMCAwIDEtODYuNi01MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiLz48cGF0aCBzdHJva2U9InVybCgjZCkiIGQ9Ik0tODYuNiA1MGExMDAgMTAwIDAgMCAxIDAtMTAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjxwYXRoIHN0cm9rZT0idXJsKCNlKSIgZD0iTS04Ni42LTUwQTEwMCAxMDAgMCAwIDEgMC0xMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIi8+PHBhdGggc3Ryb2tlPSJ1cmwoI2YpIiBkPSJNMC0xMDBhMTAwIDEwMCAwIDAgMSA4Ni42IDUwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIvPjwvZz48L21hc2s+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHg9Ii0yMCIgeT0iLTIwIiBtYXNrPSJ1cmwoI2cpIiBmaWxsPSIjZmZmIi8+PC9zdmc+) no-repeat;\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  left: 50%;\n  top: 50%;\n  margin-left: -16px;\n  margin-top: -16px;\n  -webkit-animation: OT_spin 2s linear infinite;\n  animation: OT_spin 2s linear infinite;\n}\n@-webkit-keyframes OT_spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes OT_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.OT_publisher.OT_loading .OT_video-loading,\n.OT_subscriber.OT_loading .OT_video-loading {\n  display: block;\n}\n.OT_video-centering {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.OT_video-container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.OT_video-poster {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n  opacity: 0.25;\n  background-repeat: no-repeat;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDcxIDQ2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSI2Ni42NiUiIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTc5IDMwOGMxNC4yNS02LjUgNTQuMjUtMTkuNzUgNzEtMjkgOS0zLjI1IDI1LTIxIDI1LTIxczMuNzUtMTMgMy0yMmMtMS43NS02Ljc1LTE1LTQzLTE1LTQzLTIuNSAzLTQuNzQxIDMuMjU5LTcgMS0zLjI1LTcuNS0yMC41LTQ0LjUtMTYtNTcgMS4yNS03LjUgMTAtNiAxMC02LTExLjI1LTMzLjc1LTgtNjctOC02N3MuMDczLTcuMzQ2IDYtMTVjLTMuNDguNjM3LTkgNC05IDQgMi41NjMtMTEuNzI3IDE1LTIxIDE1LTIxIC4xNDgtLjMxMi0xLjMyMS0xLjQ1NC0xMCAxIDEuNS0yLjc4IDE2LjY3NS04LjY1NCAzMC0xMSAzLjc4Ny05LjM2MSAxMi43ODItMTcuMzk4IDIyLTIyLTIuMzY1IDMuMTMzLTMgNi0zIDZzMTUuNjQ3LTguMDg4IDQxLTZjLTE5Ljc1IDItMjQgNi0yNCA2czc0LjUtMTAuNzUgMTA0IDM3YzcuNSA5LjUgMjQuNzUgNTUuNzUgMTAgODkgMy43NS0xLjUgNC41LTQuNSA5IDEgLjI1IDE0Ljc1LTExLjUgNjMtMTkgNjItMi43NSAxLTQtMy00LTMtMTAuNzUgMjkuNS0xNCAzOC0xNCAzOC0yIDQuMjUtMy43NSAxOC41LTEgMjIgMS4yNSA0LjUgMjMgMjMgMjMgMjNsMTI3IDUzYzM3IDM1IDIzIDEzNSAyMyAxMzVMMCA0NjRzLTMtOTYuNzUgMTQtMTIwYzUuMjUtNi4yNSAyMS43NS0xOS43NSA2NS0zNnoiLz48L3N2Zz4=);\n  background-size: auto 76%;\n}\n.OT_fit-mode-cover .OT_video-element {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n/* Workaround for iOS freezing issue when cropping videos */\n/* https://bugs.webkit.org/show_bug.cgi?id=176439 */\n@media only screen and (orientation: portrait) {\n  .OT_subscriber.OT_ForceContain.OT_fit-mode-cover .OT_video-element {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n}\n.OT_fit-mode-contain .OT_video-element {\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.OT_fit-mode-cover .OT_video-poster {\n  background-position: center bottom;\n}\n.OT_fit-mode-contain .OT_video-poster {\n  background-position: center;\n}\n.OT_audio-level-meter {\n  position: absolute;\n  width: 25%;\n  max-width: 224px;\n  min-width: 21px;\n  top: 0;\n  right: 0;\n  overflow: hidden;\n}\n.OT_audio-level-meter:before {\n  /* makes the height of the container equals its width */\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n.OT_audio-level-meter__bar {\n  position: absolute;\n  width: 192%; /* meter value can overflow of 8% */\n  height: 192%;\n  top: -96%;\n  right: -96%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.OT_audio-level-meter__audio-only-img {\n  position: absolute;\n  top: 22%;\n  right: 15%;\n  width: 40%;\n  opacity: 0.7;\n  background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzkgODYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTkuNzU3IDQwLjkyNGMzLjczOC01LjE5MSAxMi43MTEtNC4zMDggMTIuNzExLTQuMzA4IDIuMjIzIDMuMDE0IDUuMTI2IDI0LjU4NiAzLjYyNCAyOC43MTgtMS40MDEgMS4zMDEtMTEuNjExIDEuNjI5LTEzLjM4LTEuNDM2LTEuMjI2LTguODA0LTIuOTU1LTIyLjk3NS0yLjk1NS0yMi45NzV6bTU4Ljc4NSAwYy0zLjczNy01LjE5MS0xMi43MTEtNC4zMDgtMTIuNzExLTQuMzA4LTIuMjIzIDMuMDE0LTUuMTI2IDI0LjU4Ni0zLjYyNCAyOC43MTggMS40MDEgMS4zMDEgMTEuNjExIDEuNjI5IDEzLjM4LTEuNDM2IDEuMjI2LTguODA0IDIuOTU1LTIyLjk3NSAyLjk1NS0yMi45NzV6Ii8+PHBhdGggZD0iTTY4LjY0NyA1OC42Yy43MjktNC43NTMgMi4zOC05LjU2MSAyLjM4LTE0LjgwNCAwLTIxLjQxMi0xNC4xMTUtMzguNzctMzEuNTI4LTM4Ljc3LTE3LjQxMiAwLTMxLjUyNyAxNy4zNTgtMzEuNTI3IDM4Ljc3IDAgNC41NDEuNTE1IDguOTM2IDEuODAyIDEyLjk1IDEuNjk4IDUuMjk1LTUuNTQyIDYuOTkxLTYuNjE2IDIuMDczQzIuNDEgNTUuMzk0IDAgNTEuNzg3IDAgNDguMTAzIDAgMjEuNTM2IDE3LjY4NSAwIDM5LjUgMCA2MS4zMTYgMCA3OSAyMS41MzYgNzkgNDguMTAzYzAgLjcxOC0yLjg5OSA5LjY5My0zLjI5MiAxMS40MDgtLjc1NCAzLjI5My03Ljc1MSAzLjU4OS03LjA2MS0uOTEyeiIvPjxwYXRoIGQ9Ik01LjA4NCA1MS4zODVjLS44MDQtMy43ODIuNTY5LTcuMzM1IDMuMTM0LTcuOTIxIDIuNjM2LS42MDMgNS40ODUgMi4xNSA2LjI4OSA2LjEzMi43OTcgMy45NDgtLjc1MiA3LjQ1Ny0zLjM4OCA3Ljg1OS0yLjU2Ni4zOTEtNS4yMzctMi4zMTgtNi4wMzQtNi4wN3ptNjguODM0IDBjLjgwNC0zLjc4Mi0uNTY4LTcuMzM1LTMuMTMzLTcuOTIxLTIuNjM2LS42MDMtNS40ODUgMi4xNS02LjI4OSA2LjEzMi0uNzk3IDMuOTQ4Ljc1MiA3LjQ1NyAzLjM4OSA3Ljg1OSAyLjU2NS4zOTEgNS4yMzctMi4zMTggNi4wMzQtNi4wN3ptLTIuMDM4IDguMjg4Yy0uOTI2IDE5LjY1OS0xNS4xMTIgMjQuNzU5LTI1Ljg1OSAyMC40NzUtNS40MDUtLjYwNi0zLjAzNCAxLjI2Mi0zLjAzNCAxLjI2MiAxMy42NjEgMy41NjIgMjYuMTY4IDMuNDk3IDMxLjI3My0yMC41NDktLjU4NS00LjUxMS0yLjM3OS0xLjE4Ny0yLjM3OS0xLjE4N3oiLz48cGF0aCBkPSJNNDEuNjYyIDc4LjQyMmw3LjU1My41NWMxLjE5Mi4xMDcgMi4xMiAxLjE1MyAyLjA3MiAyLjMzNWwtLjEwOSAyLjczOGMtLjA0NyAxLjE4Mi0xLjA1MSAyLjA1NC0yLjI0MyAxLjk0NmwtNy41NTMtLjU1Yy0xLjE5MS0uMTA3LTIuMTE5LTEuMTUzLTIuMDcyLTIuMzM1bC4xMDktMi43MzdjLjA0Ny0xLjE4MiAxLjA1Mi0yLjA1NCAyLjI0My0xLjk0N3oiLz48L2c+PC9zdmc+) no-repeat center;\n}\n.OT_audio-level-meter__audio-only-img:before {\n  /* makes the height of the container equals its width */\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n.OT_audio-level-meter__value {\n  position: absolute;\n  border-radius: 50%;\n  background-image: radial-gradient(circle, rgb(151, 206, 0) 0%, rgba(151, 206, 0, 0) 100%);\n}\n.OT_audio-level-meter.OT_mode-off {\n  display: none;\n}\n.OT_audio-level-meter.OT_mode-on,\n.OT_audio-only .OT_audio-level-meter.OT_mode-auto {\n  display: block;\n}\n.OT_audio-only.OT_publisher .OT_video-element,\n.OT_audio-only.OT_subscriber .OT_video-element {\n  display: none;\n}\n.OT_video-disabled-indicator {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 3px;\n  right: 3px;\n}\n.OT_video-disabled {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAINUlEQVR42u2aaUxUVxTHcRBmAAEBRVTK4sKwDIsg+wCK7CqIw1CN1YobbbS2qYlJ06Qx1UpdqMbYWq2pSzWmH6ytNbXWJY1Lq7VuqBERtW64V0XFLYae0/xvcp3MMAMzDz6IyT/ge2ce5/7ucpY3Ts3NzZ1ygF57AJ0gO0G2jyZPmdbFyclJSAV1EeoEaUUSLGdSV5KLLFxzFmA7QVqGqDqjixhWkxCVeyRVl38wM6bwj6yYItYK47BAuu9B0gCqs6Ng2r494KQtkj/Dz2jHraw6qw2fdSE4rNmcCPCvZONP8iF1I6kdBdMaQJWZLeJqRWa2kPJAxXY+GxE+zxLI03GRh8lGSwoi9WCY8FWlCEh+8JOnT7MfPGjMuXX7Tt61hoaCi/9cKmKdv3BxeEtim/UbNpnbQiqF4MmT7kqrbr4lkMcTo46TTSpJB5g+8NHuVWnWuaampvhmO/7duHmrGluoO4C6OsJZGRrkDIld43ZqUOTnlkDSmXmabAoBU0vqBf+6KgFSxQ9++uzZ8rZApM81TJ8xM5me0Z/UF7PuBmdVdkGEb5gYDeQmyZNW3SJLIP9Kj64lGyMpmxRN6sOfIbkoAhKOdnv2/PmB1kB88eLFo+olyyrps3rSINIAzLonnqlqK8R9w+L86vtrt5L2nhug3Vc3ULu/Liz8AOuXESlZZONH6kmr7gtLIA9lRNeRzVukAvj3BslLnJNKgfScO69K+/Lly0ZbQW7e8tNK+pwBjqaSIjDrXgJkW1ciAZvbQjQ+RDahpBBKd5ZZsqN758hmImk4KQHnpDd8UwSkCyJarx07d4+3BeKJmlMHyX4qaRxpBCmNFE4KENvHDpAutVERn1kCVBMfeRRgYvZnx62wZPdnZkw92VQA5GClQXYRBze2S+iJmpPVVoJLA9l9QKokjcWKTCT1R5rhLg70NuSsziT16diIKkuAjibrTpJNDkn/e17CahtAjlAWJAYkb29Sb1LE9Rs391kILk8mVkyuIpuZcLKUlEmKkra1WuSTNuesEPzwoEploSVAh9Oiz+BIyd9dOHhtx4OEpFpVg6gbNK3yXX1j48N6U5Dz5i/gc/FDrMY3sTLiSMEkXxGxzUEUAGnbxlPaksMlHUXWAlHS8URCPseSohZbCSLjSSU7ixLXdzhIWVKq4Y7t2a/2bN0qGeKly1fYsVmk6RgIDz4J0bonyUOcjeYqm/8hRoYbWkigV2NH9CHAS60EkUkkw47hSRs6FqT1LR5AVcsrueXlK1d5AO+RpmBrZZEiefByytPCanRGNLZY0uF52gNDYr9sCRB8MHY0SJu2OJWKS2WQV65e4y31DmkCImEi0hBfufRime0RIhpbKen0/Ny9OYNW2ghyYytABjNIaxNuKttAWk6HPLn0k0FevdZwFinPWFIuKZbUV16NVko6jbWSDoPO3pOf8K0jQWLSQ0S9bdpkYck+m7vfWpAiHfKgBsZiGSSt0FqcTeU8WETqAHE2CgcAVd3Gkm4MD3xXYeI6B4NMItvKbcUpQ9gP+KMWnSsW+TaYJtoo+avBWLoKoK0CCSDud+7eXWQGZAXqV3YoQjQCfixJ8+fzj9ta3JHhlUeJ8wJOY2ws6eRKpPS3oqTvHAESEz9ya0naXL5WH6pt3FqSOhTHkTcKEXc6k1POh4Q9YJu/03TT4a8PoGMFI4i2EqSbOZAYaBkpCyD92RkG6KCSbjI/H0HEISBnlOZPFdcEzI2GTO4KBZICGKyAKLTEmJOB2txf5MbgohBINCl4FTqmpJMB2W+HiRn1Q2l6lXyPmiEP6VVE2TfGoaMYrHyPdtAnyI0jEOn9RLWmNEhvBBE7SjpFQZaShtLK+1S+T12lRwxUvrZlVPp8jE1PikeO7C/nyEqBDCB1t7+kUx4kKUWclea0yZC5BIGpiJSNSD9QgFR0RQKkL6KxHSWdsiARHJNYewoGrzG1/bk4dTPSunL2EyDjcbb7MQ+lQfZmkKiN7SjpFAM5CWAyGcwyY84YsZ1lUcbRNNtQMAdtQWGvQ0DyVjzYAKQfQFodeAeC1C8vzymXIZqD+ZEh/2OyLSalS/3VbnJZ+VqDXGjMrTCFuK4s66vVZUNfqaDolcbjOcb899sLpEE+I20GifywXe2QR3KElu99PzqjGufhREqB1pjCnG3IL3fY1v733r2FMsiGhutn0LAoJWWIGbPxjKwgjUbF0m52mPhigrpdXOecEq9pR6MkHbu2LOtrcZ9y3d0ODTb15y9MePz48aF79+8fvXnr9sljx2u2I7KNxDuaMPGVECoRs7mC4eT7SIruFNfNHK15MKuM2evwNq+4qjxvGnd5CHwNNynawW4cOlUZdG8b55IIJHmkItwrZHH6QxB3OSL9kTtAGpIvZiQB3Z4SKBfXQtEE9sashWAW87Bt3sYZNR6zn4uzJwWDKUKXfaKCdqUoBpLxSjYe9nqGiwWRBGipuGZ3Qm76itYLbbJI/PEhUApfw73uOIy9xfse3M9F9BuFJHcYrseSouGkHtCVtkuGTTikI8XgZzhg9SeF4VqcvSWiaSvNHQ8JwkNjIfEHemCmNLD1RaEfLs18mlgNuN6PFALHo7CyU5W2g00gFAQF4ozvibH04muwDbWraSFAyt/AAMzewgGR8uCeWn77xzBxPxgzPRCDDMZ14bQ/3jqGKGoHf2Hjgx3kw5LbaJDYWb52t9FMgw4AuWNWukNeuOYqOsmQi2jgws4PA/DD/z0B2x0/veCs4naw0cgybezid7X9jV3rX2RSs0wfLkll4pBGcgifg+NYxe1kJ2ycTaRq66uG/wBOl0vjcw70xwAAAABJRU5ErkJggg==);\n  background-size: 33px auto;\n}\n.OT_video-disabled-warning {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAoCAYAAABtla08AAAGMElEQVR4Ae2aA7D0yBaAc7oH12vbRmlLaxYWb23btm3btm2899a2bWuYtPZ01cmtU9lJrib315yqr9I3Oem/5/s7acwEnehEJzoxCcX2O+wEeIgRBDDaGjAZOgQ6ihRpLklHZDJIXK1WWymMIhGGkVBKCWMM+Iv/f/b5t7faYtM/sGgIS7j8RNLjceUVl41GvGN1BFiHy9sgtRWaYbhvuVQ6o1VOvV5/tLe3dyssKoZuh8xClkDEi2MMS6ZjR0cScxdK/+HgnJsmLccYOx0e/PUGUqfTJDEHkV5go9lcMQoj4R8RpSIRRUr4a9baTJFCCNfqESKJ7RYJibK0xoi05EhFRTxMi1Rit6xHAuLaKRLwEVi6q1x+EhlVpd3d3Wfh4VQkQhRhxthYLg7SRGqdLlIp7UVOHf+JhEhEMscUolVje3p63saeeOFoKsT7fjj++BNuw2I/0ouUENmGaQcQEilQvUU6xuWC0kqmVWCt8df6kG7WLoFA20VSCOyNh0RKPT+SyrTWtQsvuvTYCy84z3+oAdbgAiLGIvHjTz6bFuu/B3lKKfVkFKknwih6EnnipZdfXQZzepAupXSGSCfwUGZtkrx3t/0dSQGnnXbmdocdetArQoj+4VR23wMP3bj/vnv9Sv/rBmkish09ca655thHSrlWq4TFF1vkNDxsgjiUnPqZnHPABIq47jx7pPMcecShfz7x1DO7D6eit99576X1113nVd8rqLGAuDaNitJonTGIqHgQGQjDsJglMrUH5iDSEQbRa6y2yrNvv/PuWVmV/PTzLz8steTit1B9FtGJeZrJksmWdBzBMcami4xUkaY1A1Qe94WIaPGBApJhaERrLrXkElf8+NPPz6YMLs1DDjn0Wn9PnI/UiQadM4jNEkhzVsEGE8nIHESM1j5/KqRX+/IEiOQ/yifNBlEkpnb00cccesbpp13T3983H88/48xzrrvm6it/8U5JXgX5G6nSvSq1R5LATR7aYGkwMG1RSwkWABH+4jUb3vT/uJ1Z0xpjraTBRltrxUQhksIRmgTJyy69+Pv99tv3qYX6FxgU+fU33352xGEHf5wisU7nNWJpZRMkAjZ6aIN1mwV7h29Jo2wCHlveu/GV169z65E+T6koexCh6c+EEiky3lnxQKFjUeVyOeI5AOBzIiayRhJryd7YYnkIHgvB0qk9Tdql6N3XH4bRUIOIIIKJSiRb0hkSEpZKRd1CpEq8GxtIyCVmDSgFl94GacTgaJw1rUlYhYng0c4ewaUsmKRIJjpiqMSOCh9QeI+UYECmtQIsxEu6OorEcv6Rl0gu0woh8MhFkmSCTXVI4pC704WCFRJvSRNJSzrMMEZO2iKZTCHAZYnmvXCny7ed5vfZK3viHSBdIFCKEFj2+nt+73nw8m2uedcLJlktA++VNMEPaR45aYukcKnnCfY3/DFbZS8t7eHxNgsPM0N1hXhJJwwM1QbpoQFlog2R13a/zBxEYHAQEUYUM6qiVwEyBYoM6JFNF2kFLelI5KQf+fVI4dJFCguDS7oAyx2R6SFQJKRedSDj/cMg/RXQ6ZE05GSIDAaXdCi1I3L021SQWNJ1RLY5OiIdL4/yvuw8ADfWPFrSciaMyH8tEQPwf1uGG54g5+KlJGTmsrxsQdl5PKidnPFe2QS///7Hu+VS6WX/HYnf0sevGL7lXydwod2/9DykZq0s5yff0sgSWCigNOH7TPHL7ufj+/TH8P/+qYpL4HkBDiRYpEXeM8/89/9zzjn7EtY64dfd1nqccM7Bs8+9MKy8555/8TnKS+5MufH6EZVASkgPzf+mJXroet17JirU0ALST3nT0y5ONyLpeo1y64ih+vuQfsoTOeRFSJXa+SvyB90TUmdw49EjLaKpMQ0mzEeTzkWsd/oI6fzfiKM8gWg6X6OjpXstu5ZHnmIb0GFiu29MIUfUewkmVrEN3RqVQ/bY8FzNcquMBv/pCNUZ5pHHem01KdN/I/DG66/lLhKSvTO5M84kav5C5z2ZfyAivi9i9VGd45RH7UWJbjwGG/7NYsRECt7jiOToHedKAui8SW4CsxyRc54mKH/8f7ELhCCACyNcIl/wI+FaAJyc8yzRtinQPzWzuFZrFHq/AAAAAElFTkSuQmCC);\n  background-size: 33px auto;\n}\n.OT_video-disabled-indicator.OT_active {\n  display: block;\n}\n.OT_audio-blocked-indicator {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.OT_audio-blocked {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjkwIj48ZGVmcz48cGF0aCBkPSJNNjcgMTJMNi40NDggNzIuNTUyIDAgMzFWMThMMjYgMGw0MSAxMnptMyA3bDYgNDctMjkgMTgtMzUuNTAyLTYuNDk4TDcwIDE5eiIgaWQ9ImEiLz48L2RlZnM+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSI5MCIgcng9IjM1IiByeT0iNDUiIG9wYWNpdHk9Ii41Ii8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik0zOS4yNDkgNTEuMzEyYy42OTcgMTAuMzcgMi43ODUgMTcuODk3IDUuMjUxIDE3Ljg5NyAzLjAzOCAwIDUuNS0xMS40MTcgNS41LTI1LjVzLTIuNDYyLTI1LjUtNS41LTI1LjVjLTIuNTEgMC00LjYyOCA3Ljc5Ny01LjI4NyAxOC40NTNBOC45ODkgOC45ODkgMCAwIDEgNDMgNDRhOC45ODggOC45ODggMCAwIDEtMy43NTEgNy4zMTJ6TTIwLjk4NSAzMi4yMjRsMTUuNzQ2LTE2Ljg3N2E3LjM4NSA3LjM4NSAwIDAgMSAxMC4zNzQtLjQyQzUxLjcwMiAxOS4xMTQgNTQgMjkuMjA4IDU0IDQ1LjIwOGMwIDE0LjUyNy0yLjM0MyAyMy44OC03LjAzIDI4LjA1OGE3LjI4IDcuMjggMCAwIDEtMTAuMTY4LS40NjhMMjAuNDA1IDU1LjIyNEgxMmE1IDUgMCAwIDEtNS01di0xM2E1IDUgMCAwIDEgNS01aDguOTg1eiIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJNMTA2LjUgMTMuNUw0NC45OTggNzUuMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\n  background-size: 90px auto;\n}\n.OT_container-audio-blocked {\n  cursor: pointer;\n}\n.OT_container-audio-blocked.OT_mini .OT_edge-bar-item {\n  display: none;\n}\n.OT_container-audio-blocked .OT_mute {\n  display: none;\n}\n.OT_audio-blocked-indicator.OT_active {\n  display: block;\n}\n.OT_video-unsupported {\n  opacity: 1;\n  border: none;\n  display: none;\n  position: absolute;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMCAxIDUgNVY1OC4xOGE1IDUgMCAwIDEtNSA1SDkuMTFhNSA1IDAgMCAxLTUtNVYyNS45N2E1IDUgMCAwIDEgNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwIDEgNC4zMDQgMi43MDJ2MjYuODM1YTMgMyAwIDAgMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\n  background-size: 58px auto;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin-top: -30px;\n}\n.OT_video-unsupported-bar {\n  display: none;\n  position: absolute;\n  width: 192%; /* copy the size of the audio meter bar for symmetry */\n  height: 192%;\n  top: -96%;\n  left: -96%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.OT_video-unsupported-img {\n  display: none;\n  position: absolute;\n  top: 11%;\n  left: 15%;\n  width: 70%;\n  opacity: 0.7;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik03MCAxMkw5LjQ0OCA3Mi41NTIgMCA2MmwzLTQ0TDI5IDBsNDEgMTJ6bTggMmwxIDUyLTI5IDE4LTM1LjUwMi02LjQ5OEw3OCAxNHoiIGlkPSJhIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCAzKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTkuMTEgMjAuOTY4SDQ4LjFhNSA1IDAgMCAxIDUgNVY1OC4xOGE1IDUgMCAwIDEtNSA1SDkuMTFhNSA1IDAgMCAxLTUtNVYyNS45N2E1IDUgMCAwIDEgNS01em00Ny4wOCAxMy4zOTRjMC0uMzQ1IDUuNDcyLTMuMTU5IDE2LjQxNS04LjQ0M2EzIDMgMCAwIDEgNC4zMDQgMi43MDJ2MjYuODM1YTMgMyAwIDAgMS00LjMwNSAyLjcwMWMtMTAuOTQyLTUuMjg2LTE2LjQxMy04LjEtMTYuNDEzLTguNDQ2VjM0LjM2MnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTgxLjUgMTYuNUwxOS45OTggNzguMDAyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% auto;\n}\n.OT_video-unsupported-img:before {\n  /* makes the height of the container 93% of its width (90/97 px) */\n  content: \"\";\n  display: block;\n  padding-top: 93%;\n}\n.OT_video-unsupported-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  margin-top: 40px;\n}\nion-content {\n  background-color: transparent;\n}\nion-fab-button.controller {\n  margin: 7px;\n}\n.white-bg {\n  --background: white;\n}\n.halfScreen {\n  position: fixed;\n  top: 56px;\n  height: 40%;\n  width: 100%;\n  z-index: 100;\n}\n.fullScreen {\n  transform: translate(0px, 0px) !important;\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n}\n.ringing {\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n}\n::ng-deep html[data-theme=accessibility] .ringing,\n::ng-deep html[data-theme=accessibility] .incoming,\n::ng-deep html[data-theme=accessibility] .audioOnly,\n::ng-deep html[data-theme=accessibility] .video--main,\n::ng-deep html[data-theme=accessibility] .none-ios--main-video {\n  background-image: none !important;\n  background-image: initial !important;\n}\n.fixed {\n  transform: translateY(0px) !important;\n}\n.incoming {\n  height: 100%;\n  width: 100%;\n  z-index: 10000;\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  background-size: 100%;\n  background-position: center;\n}\nion-grid {\n  height: 100%;\n  width: 100%;\n}\nion-button {\n  display: block;\n  margin: auto;\n}\n.doctor-title {\n  display: block;\n  margin: auto;\n  text-align: center;\n  color: white;\n  font-size: 0.95em;\n  margin-top: 10px;\n}\nimg.logo {\n  width: 210px;\n  height: 210px;\n  display: block;\n  margin: auto;\n}\n.accept-btn {\n  margin-top: 41px;\n  --border-radius: 30px;\n  --background: white;\n  color: #266eb7;\n  color: var(--ion-color-primary);\n}\n.refuse-btn {\n  --border-style: none;\n  --box-shadow: none;\n  margin-top: 10px;\n}\n.audioOnly {\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n}\n.audioOnly .audio-overlay {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.audioOnly .doctor-title {\n  font-size: 30px;\n}\n#localUser {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-height: 180px;\n  height: 15vh;\n  min-width: 150px;\n  z-index: 1002;\n  width: auto;\n}\n#localUser.localUserHalfScreen {\n  min-height: 100px;\n  height: 7.5vh;\n}\n.video--main {\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n}\n.ios--main-video {\n  display: relative;\n  z-index: 1000;\n  background-color: transparent;\n}\n.none-ios--main-video {\n  background-image: url(\"/icons/background.jpg\");\n  background-image: url(\"/background@2x.jpg\");\n  background-color: #266eb7 !important;\n  background-color: var(--ion-color-primary) !important;\n  display: relative;\n  z-index: 1000;\n  background-color: #fff;\n}\n#remoteUsers video {\n  -webkit-transform-style: preserve-3d;\n}\n.ios-bounds {\n  height: 87%;\n}\n.none-ios-bounds {\n  height: 100%;\n}\nion-fab-button {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwidmlkZW8tcm9vbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFNQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBRUEsK0JBQUE7RUFFQSx3QkFBQTtBQ2pCRjtBQWhFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBbUVGO0FBaEVBO0VBQ0UsZ0JBQUE7QUFtRUY7QUFoRUE7RUFDRSxlQUFBO0FBbUVGO0FBaEVBOztFQUVFLGVBQUE7QUFtRUY7QUFoRUE7RUFDRSxrQkFBQTtBQW1FRjtBQWhFQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQWtFRjtBQTVEQTtFQUNFLG9DQUFBO0FBK0RGO0FBNURBOzs7O0VBQUE7QUFNQTtFQUNFLDBCQUFBO0FBOERGO0FBM0RBOztFQUFBO0FBSUEsd0RBQUE7QUFDQTs7RUFJRSxVQUFBO0VBQ0EsU0FBQTtFQUVBLHlDQUFBO0VBQ0Esd0JBQUE7QUEwREY7QUF2REE7RUFDRTs7O3VCQUFBO0FBNkRGO0FBckRBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd0RGO0FBckRBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQXdERjtBQXJEQTtFQUNFLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdURGO0FBcERBO0VBQ0Usb0JBQUE7RUFFQSxtQkFBQTtBQXVERjtBQXBEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQXVERjtBQXBEQTtFQUNFLGtCQUFBO0FBdURGO0FBcERBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQXNERjtBQW5EQTtFQUNFLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXFERjtBQWxEQTtFQUNFLGNBQUE7QUFxREY7QUFsREE7RUFDRSxxQkFBQTtBQXFERjtBQWxEQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFvREY7QUFsREE7RUFDRSxjQUFBO0FBcURGO0FBbERBOzs7RUFHRSxjQUFBO0FBcURGO0FBbERBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXFERjtBQWxEQTtFQUNFLHFCQUFBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFtREY7QUFoREE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFtREY7QUFoREE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFrREY7QUEvQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaURGO0FBOUNBO0VBQ0UscUJBQUEsRUFBQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7QUFnREY7QUE3Q0E7RUFDRSxZQUFBO0VBRUEseUJBQUE7QUErQ0Y7QUE1Q0E7RUFDRSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQThDRjtBQTNDQSxZQUFBO0FBRUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBNkNGO0FBMUNBO0VBQ0UsYUFBQTtBQTZDRjtBQTFDQTtFQUNFLGNBQUE7QUE2Q0Y7QUExQ0E7RUFDRSxnQkFBQTtBQTZDRjtBQTFDQSxvQ0FBQTtBQUVBOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBNENGO0FBekNBOztFQUVFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBSUEscUJBQUE7QUEwQ0Y7QUF2Q0Esc0VBQUE7QUFDQTtFQUVFLHVCQUFBO0VBRUEseUJBQUE7QUEwQ0Y7QUF2Q0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTBDRjtBQXZDQTtFQUNFLGFBQUE7QUEwQ0Y7QUF2Q0Esa0RBQUE7QUFDQTs7Ozs7Ozs7OztFQVdFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBMENGO0FBdkNBOztFQUVFLDhCQUFBO0FBMENGO0FBdkNBOztFQUVFLFVBQUEsRUFBQSxpREFBQTtBQTBDRjtBQXZDQSw2REFBQTtBQUNBOztFQUVFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUEwQ0Y7QUF2Q0E7O0VBRUUsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTBDRjtBQXZDQTs7OztFQUlFLGFBQUE7QUEwQ0Y7QUF2Q0E7O0VBRUUsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTBDRjtBQXZDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFFQSwrQkFBQTtBQTBDRjtBQXZDQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQTBDRjtBQXZDQTtFQUNFO0lBRUUsK0JBQUE7RUEwQ0Y7RUF2Q0E7SUFFRSwrQkFBQTtFQXlDRjtFQXRDQTtJQUVFLCtCQUFBO0VBd0NGO0VBckNBO0lBRUUsK0JBQUE7RUF1Q0Y7RUFwQ0E7SUFFRSwrQkFBQTtFQXNDRjtBQUNGO0FBbkNBO0VBQ0U7SUFFRSwrQkFBQTtFQXFDRjtFQWxDQTtJQUVFLCtCQUFBO0VBb0NGO0VBakNBO0lBRUUsK0JBQUE7RUFtQ0Y7RUFoQ0E7SUFFRSwrQkFBQTtFQWtDRjtFQS9CQTtJQUVFLCtCQUFBO0VBaUNGO0FBQ0Y7QUE5QkE7OztFQUdFLFNBQUE7RUFDQSxZQUFBO0FBZ0NGO0FBN0JBOzs7O0VBSUUsYUFBQTtBQWdDRjtBQTdCQTs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZ0NGO0FBN0JBOztFQUVFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFnQ0Y7QUE3QkE7O0VBRUUsUUFBQTtFQUNBLE1BQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZ0NGO0FBN0JBOzs7RUFHRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFnQ0Y7QUE3QkE7RUFDRSxxMkJBQUE7RUFDQSw0QkFBQTtBQWdDRjtBQTdCQTtFQUNFLGl4Q0FBQTtFQUNBLDRCQUFBO0FBZ0NGO0FBN0JBO0VBQ0UseXRCQUFBO0VBQ0EsNEJBQUE7QUFnQ0Y7QUE3QkE7RUFDRSx5aENBQUE7RUFDQSw0QkFBQTtBQWdDRjtBQTdCQTs7Ozs7RUFBQTtBQU9BLGlFQUFBO0FBQ0E7O0VBR0UseUNBQUE7RUFFQSx5QkFBQTtFQUVBLG1DQUFBO0FBK0JGO0FBNUJBOzs7Ozs7RUFNRSxVQUFBO0VBQ0EsVUFBQTtBQStCRjtBQTVCQTs7RUFFRSxhQUFBO0FBK0JGO0FBNUJBOzs7RUFHRSxRQUFBO0FBK0JGO0FBNUJBOzs7Ozs7RUFNRSxTQUFBO0VBQ0EsYUFBQTtBQStCRjtBQTVCQTs7Ozs7Ozs7RUFRRSxNQUFBO0VBQ0EsVUFBQTtBQStCRjtBQTVCQTs7OztFQUlFLFFBQUE7QUErQkY7QUE1QkE7Ozs7RUFJRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUErQkY7QUE1QkEsbUJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHFDQUFBO0FBOEJGO0FBM0JBO0VBQ0UsNnlFQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7QUE2QkY7QUEzQkE7RUFDRTtJQUNFLGlDQUFBO0VBOEJGO0FBQ0Y7QUE1QkE7RUFDRTtJQUVFLHlCQUFBO0VBOEJGO0FBQ0Y7QUEzQkE7O0VBRUUsY0FBQTtBQTZCRjtBQTFCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTZCRjtBQTFCQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUE2QkY7QUExQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBRUEsNEJBQUE7RUFDQSxpc0NBQUE7RUFDQSx5QkFBQTtBQTJCRjtBQXhCQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUEyQkY7QUF4QkEsMkRBQUE7QUFDQSxtREFBQTtBQUNBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLDhCQUFBO0VBMkJGO0FBQ0Y7QUF4QkE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBMEJGO0FBdkJBO0VBQ0Usa0NBQUE7QUEwQkY7QUF2QkE7RUFDRSwyQkFBQTtBQTBCRjtBQXZCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUEwQkY7QUF2QkE7RUFDRSx1REFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUEwQkY7QUF2QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUEsRUFBQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsb0NBQUE7QUF5QkY7QUF0QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFFQSx3OERBQUE7QUF1QkY7QUFuQkE7RUFDRSx1REFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFzQkY7QUFuQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUZBQUE7QUFzQkY7QUFmQTtFQUNFLGFBQUE7QUFrQkY7QUFmQTs7RUFFRSxjQUFBO0FBa0JGO0FBZkE7O0VBRUUsYUFBQTtBQWtCRjtBQWZBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFrQkY7QUFmQTtFQUNFLDYyRkFBQTtFQUNBLDBCQUFBO0FBa0JGO0FBZkE7RUFDRSx5ckVBQUE7RUFDQSwwQkFBQTtBQWtCRjtBQWZBO0VBQ0UsY0FBQTtBQWtCRjtBQWZBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFrQkY7QUFmQTtFQUNFLDZ3Q0FBQTtFQUNBLDBCQUFBO0FBa0JGO0FBZkE7RUFDRSxlQUFBO0FBa0JGO0FBZkE7RUFDRSxhQUFBO0FBa0JGO0FBZkE7RUFDRSxhQUFBO0FBa0JGO0FBZkE7RUFDRSxjQUFBO0FBa0JGO0FBZkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHErQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFrQkY7QUFmQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUEsRUFBQSxzREFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsb0NBQUE7QUFpQkY7QUFkQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFpQkY7QUFkQTtFQUNFLGtFQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWlCRjtBQWRBO0VBR0UsYUFBQTtFQUdBLHVCQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWlCRjtBQWRBO0VBQ0UsNkJBQUE7QUFpQkY7QUFmQTtFQUNFLFdBQUE7QUFrQkY7QUFmQTtFQUNFLG1CQUFBO0FBa0JGO0FBYkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjtBQWRBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlCRjtBQWRBO0VEMXpCSSw4Q0FBQTtFQU1BLDJDQUFBO0VDc3pCRixvQ0FBQTtFQUFBLHFEQUFBO0FBa0JGO0FBZEk7Ozs7O0VBS0UsaUNBQUE7RUFBQSxvQ0FBQTtBQWlCTjtBQWJBO0VBQ0UscUNBQUE7QUFnQkY7QUFiQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFRGgxQkUsOENBQUE7RUFNQSwyQ0FBQTtFQzQwQkYsb0NBQUE7RUFBQSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFpQkY7QUFkQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBaUJGO0FBZEE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQWlCRjtBQWRBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaUJGO0FBZEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBaUJGO0FBZEE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsK0JBQUE7QUFpQkY7QUFkQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWlCRjtBQWRBO0VEOTNCSSw4Q0FBQTtFQU1BLDJDQUFBO0VDMDNCRixvQ0FBQTtFQUFBLHFEQUFBO0FBa0JGO0FBakJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQW1CSjtBQWhCRTtFQUNFLGVBQUE7QUFrQko7QUFkQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0FBZ0JGO0FBZEU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFnQko7QUFiQTtFRDk1QkksOENBQUE7RUFNQSwyQ0FBQTtFQzA1QkYsb0NBQUE7RUFBQSxxREFBQTtBQWlCRjtBQWRBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFpQkY7QUFkQTtFRHo2QkksOENBQUE7RUFNQSwyQ0FBQTtFQ3E2QkYsb0NBQUE7RUFBQSxxREFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBa0JGO0FBZEU7RUFDRSxvQ0FBQTtBQWlCSjtBQWJBO0VBQ0UsV0FBQTtBQWdCRjtBQWJBO0VBQ0UsWUFBQTtBQWdCRjtBQWJBO0VBQ0UsZ0JBQUE7QUFnQkYiLCJmaWxlIjoidmlkZW8tcm9vbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG5cbiRiYWNrZ3JvdW5kLWltYWdlLXBhdGg6IFwiL2ljb25zL2JhY2tncm91bmQuanBnXCI7XG4kYmFja2dyb3VuZC1pbWFnZS0yeC1wYXRoOiBcIi9iYWNrZ3JvdW5kQDJ4LmpwZ1wiO1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzI2NmViNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNmZmJiMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSwgMjA0LCAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2JkOTcwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZmQyMWU7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICMjZmZjZDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjNDk0YjUwO1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM0LCAzNDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjY2NjY2NjOyAvLyAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAvLyAtLWZjOiNDQ0NDQ0M7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1ibHVlLWJnLWNvbG9yOiAjMDA3MmJiO1xufVxuQG1peGluIGJhY2tncm91bmRNaXhpbigkaGFzQmFja2dyb3VuZEltYWdlKSB7XG4gIEBpZiAkYmFja2dyb3VuZC1pbWFnZS1wYXRoIHtcbiAgICAvL2RvIHNvbWV0aGluZ1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2dyb3VuZC1pbWFnZS1wYXRoKTtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICBAaWYgJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCB7XG4gICAgLy9kbyBzb21ldGhpbmdcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGJhY2tncm91bmQtaW1hZ2UtMngtcGF0aCk7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuLmRlbW8tbG9nbyB7XG4gIG1heC13aWR0aDogMzMlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI3ZpZGVvLXJvb20tY29udGVudCB7XG4gIG92ZXJmbG93LXk6IG5vbmU7XG59XG5cbiNleGl0QnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jbWljQnV0dG9uLFxuI2NhbUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3JpZ2h0QnV0dG9ucyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJvdW5kcyB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogaW5oZXJpdDtcblxuICAvLyBtaW4td2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIC8vd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5ib3VuZHNMaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGYgIWltcG9ydGFudDtcbn1cblxuLyohXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVG9rQm94LCBJbmMuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4uY3VzdG9tLWNsYXNzIHtcbiAgbWluLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qKlxuICogT1QgQmFzZSBzdHlsZXNcbiAqL1xuXG4vKiBSb290IE9UIG9iamVjdCwgdGhpcyBpcyB3aGVyZSBvdXIgQ1NTIHJlc2V0IGhhcHBlbnMgKi9cbi5PVF9yb290LFxuLk9UX3Jvb3QgKiB7XG4gIC8vIGNvbG9yOiAjZmZmZmZmO1xuICAvL21hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICAvL2ZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLk9UX21haW4ge1xuICAvKnRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50OyovXG4gIC8vaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG4gIC8vIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5PVF9kaWFsb2ctY2VudGVyaW5nIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5PVF9kaWFsb2ctY2VudGVyaW5nLWNoaWxkIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLk9UX2RpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLk9UX2RpYWxvZyAqIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLk9UX2Nsb3NlQnV0dG9uIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMThweDtcbiAgdG9wOiAwO1xufVxuXG4uT1RfZGlhbG9nLW1lc3NhZ2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uT1RfZGlhbG9nLW1lc3NhZ2VzLW1haW4ge1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcblxuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5PVF9kaWFsb2ctbWVzc2FnZXMtbWlub3Ige1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjYTRhNGE0O1xufVxuXG4uT1RfZGlhbG9nLW1lc3NhZ2VzLW1pbm9yIHN0cm9uZyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uT1RfZGlhbG9nLWFjdGlvbnMtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcblxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4uT1RfZGlhbG9nLWJ1dHRvbi10aXRsZSBsYWJlbCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uT1RfZGlhbG9nLWJ1dHRvbi10aXRsZSBhLFxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUgYTpsaW5rLFxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUgYTphY3RpdmUge1xuICBjb2xvcjogIzAyYTFkZTtcbn1cblxuLk9UX2RpYWxvZy1idXR0b24tdGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uT1RfZGlhbG9nLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiAwIDFlbTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhM2RjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLk9UX2RpYWxvZy1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5PVF9kaWFsb2ctYnV0dG9uLWxhcmdlIHtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG5cbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uT1RfZGlhbG9nLWJ1dHRvbi1zbWFsbCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBwYWRkaW5nLXRvcDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5PVF9kaWFsb2ctcHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBwcmV2ZW50cyBtYXJnaW4gY29sbGFwc2UgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDFweDtcblxuICBib3JkZXI6IDFweCBzb2xpZCAjNGU0ZTRlO1xuICBoZWlnaHQ6IDhweDtcbn1cblxuLk9UX2RpYWxvZy1wcm9ncmVzcy1iYXItZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhNGRhO1xufVxuXG4uT1RfZGlhbG9nLXBsdWdpbi11cGdyYWRpbmcgLk9UX2RpYWxvZy1wbHVnaW4tdXBncmFkZS1wZXJjZW50YWdlIHtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG5cbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4vKiBIZWxwZXJzICovXG5cbi5PVF9jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uT1RfZGlhbG9nLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5PVF9kaWFsb2ctYnV0dG9uLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5PVF9kaWFsb2ctbm8tbmF0dXJhbC1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vKiBQdWJsaXNoZXIgYW5kIFN1YnNjcmliZXIgc3R5bGVzICovXG5cbi5PVF9wdWJsaXNoZXIsXG4uT1Rfc3Vic2NyaWJlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA0OHB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF92aWRlby1lbGVtZW50LFxuLk9UX3N1YnNjcmliZXIgLk9UX3ZpZGVvLWVsZW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cblxuLyogU3R5bGVzIHRoYXQgYXJlIGFwcGxpZWQgd2hlbiB0aGUgdmlkZW8gZWxlbWVudCBzaG91bGQgYmUgbWlycm9yZWQgKi9cbi5PVF9wdWJsaXNoZXIuT1RfbWlycm9yZWQgLk9UX3ZpZGVvLWVsZW1lbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufVxuXG4uT1Rfc3Vic2NyaWJlcl9lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5PVF9zdWJzY3JpYmVyX2Vycm9yID4gcCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIFRoZSBwdWJsaXNoZXIvc3Vic2NyaWJlciBuYW1lL211dGUgYmFja2dyb3VuZCAqL1xuLk9UX3B1Ymxpc2hlciAuT1RfYmFyLFxuLk9UX3N1YnNjcmliZXIgLk9UX2Jhcixcbi5PVF9wdWJsaXNoZXIgLk9UX25hbWUsXG4uT1Rfc3Vic2NyaWJlciAuT1RfbmFtZSxcbi5PVF9wdWJsaXNoZXIgLk9UX2FyY2hpdmluZyxcbi5PVF9zdWJzY3JpYmVyIC5PVF9hcmNoaXZpbmcsXG4uT1RfcHVibGlzaGVyIC5PVF9hcmNoaXZpbmctc3RhdHVzLFxuLk9UX3N1YnNjcmliZXIgLk9UX2FyY2hpdmluZy1zdGF0dXMsXG4uT1RfcHVibGlzaGVyIC5PVF9hcmNoaXZpbmctbGlnaHQtYm94LFxuLk9UX3N1YnNjcmliZXIgLk9UX2FyY2hpdmluZy1saWdodC1ib3gge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX2Jhcixcbi5PVF9zdWJzY3JpYmVyIC5PVF9iYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0sXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbSB7XG4gIHotaW5kZXg6IDE7IC8qIHJlcXVpcmVkIHRvIGdldCBhdWRpbyBsZXZlbCBtZXRlciB1bmRlcm5lYXRoICovXG59XG5cbi8qIFRoZSBwdWJsaXNoZXIvc3Vic2NyaWJlciBuYW1lIHBhbmVsL2FyY2hpdmluZyBzdGF0dXMgYmFyICovXG4uT1RfcHVibGlzaGVyIC5PVF9uYW1lLFxuLk9UX3N1YnNjcmliZXIgLk9UX25hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAgNHB4IDAgMzZweDtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcbi5PVF9zdWJzY3JpYmVyIC5PVF9hcmNoaXZpbmctc3RhdHVzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMzRweDtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5PVF9taWNybyAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcbi5PVF9taWNybzpob3ZlciAuT1RfYXJjaGl2aW5nLXN0YXR1cyxcbi5PVF9taW5pIC5PVF9hcmNoaXZpbmctc3RhdHVzLFxuLk9UX21pbmk6aG92ZXIgLk9UX2FyY2hpdmluZy1zdGF0dXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9hcmNoaXZpbmctbGlnaHQtYm94LFxuLk9UX3N1YnNjcmliZXIgLk9UX2FyY2hpdmluZy1saWdodC1ib3gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICByaWdodDogYXV0bztcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLk9UX2FyY2hpdmluZy1saWdodCB7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgbGVmdDogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTc1NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjNTc1NzU3O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjNTc1NzU3O1xufVxuXG4uT1RfYXJjaGl2aW5nLWxpZ2h0Lk9UX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzBkMTM7XG4gIGFuaW1hdGlvbjogT1RfcHVsc2UgMS4zcyBlYXNlLWluO1xuICAtd2Via2l0LWFuaW1hdGlvbjogT1RfcHVsc2UgMS4zcyBlYXNlLWluO1xuICAtbW96LWFuaW1hdGlvbjogT1RfcHVsc2UgMS4zcyBlYXNlLWluO1xuICAtd2Via2l0LWFuaW1hdGlvbjogT1RfcHVsc2UgMS4zcyBlYXNlLWluO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIE9UX3B1bHNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICB9XG5cbiAgMzAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIE9UX3B1bHNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICB9XG5cbiAgMzAlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2M3MDAxOTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYzcwMDE5O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4ICNjNzAwMTk7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAwcHggI2M3MDAxOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDBweCAjYzcwMDE5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMHB4ICNjNzAwMTk7XG4gIH1cbn1cblxuLk9UX21pbmkgLk9UX2Jhcixcbi5PVF9iYXIuT1RfbW9kZS1taW5pLFxuLk9UX2Jhci5PVF9tb2RlLW1pbmktYXV0byB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uT1RfbWluaSAuT1RfbmFtZS5PVF9tb2RlLW9mZixcbi5PVF9taW5pIC5PVF9uYW1lLk9UX21vZGUtb24sXG4uT1RfbWluaSAuT1RfbmFtZS5PVF9tb2RlLWF1dG8sXG4uT1RfbWluaTpob3ZlciAuT1RfbmFtZS5PVF9tb2RlLWF1dG8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9uYW1lLFxuLk9UX3N1YnNjcmliZXIgLk9UX25hbWUge1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMzdweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX211dGUsXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZSxcbi5PVF9zdWJzY3JpYmVyIC5PVF9tdXRlIHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDM3cHg7XG59XG5cbi5PVF9taW5pIC5PVF9tdXRlLFxuLk9UX3B1Ymxpc2hlci5PVF9taW5pIC5PVF9tdXRlLk9UX21vZGUtYXV0by5PVF9tb2RlLW9uLWhvbGQsXG4uT1Rfc3Vic2NyaWJlci5PVF9taW5pIC5PVF9tdXRlLk9UX21vZGUtYXV0by5PVF9tb2RlLW9uLWhvbGQge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTguNXB4O1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfbXV0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQWNDQU1BQUFDMDJIUXJBQUFBMVZCTVZFVUFBQUQzK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUG4zK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BuMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozK1BqMytQajMrUGozOS9qMytQajMrUG40K1BrL0pSTWxBQUFBUTNSU1RsTUFCQVVIQ1FvTERoQVFFUndkSGlBakxqQXhPRDlBU0ZCUlZsMW1iblo2ZkgyTGpJK1FrYVdxcnJDMXVMekF3Y1hKeWNyTDFOWGo1T2ZvNnUzdzlmcjcvUDMrZDRNMytRQUFBUUJKUkVGVUdCbFZ3WWRDZ2xBQUJkQ0xscjVVbmlqbTNoTVV0QnpsQkxTci8vOUpnVVRvT1FnVkpnY2VKZ1U4YUhnTWVBMzhLNTBaT3BjUW1UUHdjeVhuK0pNOE0zSkpJcVF5cGlJa2VYZWxUeUlrR1pQd0tTMU5NaWExbGdLVFZrYUUzb1FRR1lzbUhOcVNNV25UZ1VGYk1pWnRHbEQyZHBheHJMMVhnTTBpNFpLOE1lQW1GaHNBczI5TUdabmlhd2FnUzYzb01PUVVOWFlCNUQwRDFSTURweW9NTHcvZmlFMm9nL1YrUFZEUjVBaUJsMC8yVXdpayt2eDR4VjNhNUc1WWU2OE5kMWN6alVqWmNrbTZWaG1QY2lSemVDWklDandUSkFWaVFxKzNlK1N0MTY3ckFvSEs4c0xZWlZrQllQQ1pBWi9lR2ErMlI1TEg3V3JjMFlGZi9POUozeUJERmFvQUFBQUFTVVZPUks1Q1lJST0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5cHggNXB4O1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9tdXRlLk9UX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJVQUFBQWRDQVlBQUFCRlJDZjdBQUFEY0VsRVFWUklpYVdWWFdoY1JSVEhmN05OZDJhRHRVS01JalRwZzR1ZkZJdWlVT21ERVdtMFZpM1ZZaFhScUlnZ1FoNHNXSkZTaWc5K29PaFRLU3BJUlVXTUlCSXIya3B0b1RiZ1U2b294Q2lJalIrMTRrY0ptZjlzTmNlSG5kM2VibmMzVXY5d3VYZk96UHptbkRNejV6b3pHd2RXQWJjNjV3NVJVSlE4Y0Myd0RKZ0ZKaW9oL01KQ01yTnhxMnZPeks0SG1JdlJSZW14S1AwUkpXdDUzbzdTK2QyWXpzeDZnUStBSVVEQW5VcXBCTHpYWmQ0UllGVWxoQi9iZFphY2MzUEFPbUFjQ01DN3dmdkZ3TE5kb0FQQXl4MDliWHlZV1JsNEU3Z0RtQWRHbE5LRndMWXU4R29saE85Tzg3UkpkNjRHYk1yZ0V2QjY4UDRvc01XZFhMdFZWN2N6bG9vTnBWUldTczhETzdOcFIvQiszckJIc3ZldENndENNVHh3UUNtOUJieVFyYzhGNy91QmV4M3VSQ2VYTzBQclVaNE5mS3lVUGdXZXlqM2JnL2NyRE5zSVJHd0JhSlFHb3JRM1N2ZG4yd0hnYzJCVUtiMERQSkh0andmdmJ3UnVjYzd0eitOK2k5TEZVZG9YcGZWTjM2STBDVndCVEZJL3E5ZTFMUHhUOFA0cVlFZHU3MHExMm1Zeld3MU1ZUXpqZUpGNnpxK3NoSEM0Qjdqa2xPQlBQL1R6U3VuaDRQMER3S3ZBZmI1YzlrcnBlK0Njd3NFb1pkYmhFdkJNOXd4UkFsNVJTaGNBOXdBbmdFM0IrOHRMcGRMdXdyaHA0TU5tSzBwZlJXa3lTcjdOWFM4K0w1blpiV1pXeS9WaW4xSWFpdEpuVVRxdndldko3MWxnU1NXRUZLVWZIRzdRMm0veHFGSmFHcnkvR1hnZkdQTGw4bUpnclhQdXIySm9VQzhReTNPcEcrc0FiR2hFS1QwRXJBV09BNnVCUFdiVzF3cjlCT2dGYmdLZXpvdDBrQVBZcUpRQTFnQy9BOWNBKzgyc3Z6a3NTbjFSK2pOS1gwU3BuTS9lMXgzeXFpZzkySmhyWml2TTdGak84YlNaTFN1Q1IvT2sxNkswS01OSG9qUVdwWWtvN1k3UzFpZ041UEUzUk9sNGxOYVoyVVZtTnBQQlUwMW9ydlp2WlBDZUtGWGJCUitsRUtWdFVhcEZhU1pLZzluanFwbDlhV1lUcm1YQ0ltQTdzQ1diOWxLL2pqOVRyd2tyZ0ExQUgzQVF1S3NTd2t6YnJMZnhwZ3BzQnRZRHhmL1IzeG0yRXhpcmhOQ3VISFpYVHNtUndpYXQrUy96U3QwNmV5c1ZBLzRwbUdyL0czcW02aWsyOHYyOUZLZ0NnOEJTNnB2UzBLTlJHZ1orQmI0RnBzeHNPa2ZVbE11d0RjQldZT1VaT0hZTTJBVThXUW1oQmlmRHY3ME83UGpYN0taKzRHN2czRk04emQ2dUJJYUJ5NEFxeG5JY1p3RkxDb3ZQQWhFNFNqMzhiNEJEd0VlVkVGS0Q5Uzk0S2hqbjQ4NnYzUUFBQUFCSlJVNUVya0pnZ2c9PSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDlweCA0cHg7XG59XG5cbi5PVF9zdWJzY3JpYmVyIC5PVF9tdXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmNBQUFBVENBWUFBQUI3dTVhMkFBQUJ4MGxFUVZRNGphV1V2NDhOVVJpR24zT05tQ3MzMlpCZDI4aHQxZ3F5WkFrRjIxeWxRa0VpU3AyZWhwRGxEMUJvRkdxcVZkSm9oWUtJN01hUHhNb1ZOZ2hDV01GKzd5YkxVZXduT1hmY01XTzl5ZVE4NTd6bmU4K1htWk9CR2pKcHIwa3ZUSW9tdlRacFM1MjZVQ080RFV3RDY0Rmp3Q0ZncVpublIrb2M4TGZnektRNzN2R3NyNDJadEdqU1FGVjlvOEtmQkNhY1p3Q2FlZjRZbUFmMnJ6amNwTjNBMldTcG0vQXNzS2NxUEROcERCanM0MTBDVmlYelR3ay9BN2IxQzR3eERnT25nQXNaY0FYWTJidURmcC82UzRGM2xEUzhEamdCekRXQWpYL1kvZS9RZ1lTL0Foc0tIYStPTVE2R0VKNENqNEJPQXhncTZhQ293eVp0ZGY0T3RBcitGSERPK1I0d1duVmJpaHIzY1FuSUN0NGJvTzM4R1dqOWEvaWNqd09BQ3Q0bTRLM3pFUEErQXhhQXRUV0Nud04zbHpIa0VMOFYvT1BBR3VkOXdLMkdGOVhSMVdhZS8xekcyQUkrcEdZSTRWVUlvUnRqSEFjMkE5Y3o0TFJQZXZZQ1oraTkvNHNKdDRHWEpVMTBnYVBBemRJMlRUcm8vNVRmejhYRWUyTFNaR214cS9TRE52UDhCbkE1V1JyeDRCd1lCZTZ2T054MUVuam92R3ZCTEFBZDRBZHd1eXE4VWlhTm1EVHZyK2E4U1E5TXV2YmZ3Y2tCSFpQZStRRWZUZHBlcCs0WFptUEJIaUhnejc0QUFBQUFTVVZPUks1Q1lJST0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4cHggN3B4O1xufVxuXG4uT1Rfc3Vic2NyaWJlciAuT1RfbXV0ZS5PVF9hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFVQ0FZQUFBQ1h0ZjJEQUFBQ3RrbEVRVlE0aloyVlNZaVVSeFRIZisvVDlOYzlpUnJCdVl5U21Jc1hVVTlpRk1FRkVSUkJ2QWpKTFVRaTVpb2lIdlNTY2ZUbWdxQzRYQVQxWklnTHVKSGtJQ2FhUUFnS0kyaEFVQlQzMGJqVXE3YmJ2NGV1a1hLMDI5RjMrZXF0di9mcUs2cVFkRW5TTlVtVDZDREIvYnZnZmpPNE45emoyUkQ4MDA3eGcxSUFCa3dFemttYTBxYjRQR0FQTUJaWUx0U0Q4ZU53QUVqcVRsTkkwZ05KTTRZVTd3N3V0NE83Z3Z1aFpGc1IzQzhOQzVCQkxpVElZMG16TThBdnFiaUMrK3BrK3pMcEU5NVh1d0F3czN2QVF1QlBZRFJ3V3RMODRQNHRzRFNMdjVvYXVnNEVZT2F3QU1GOWpNZG9MeHFOWmNEdlFBMDRVVllxTDRHL3N2ajdBRjIxbWhKc2NydkNrc1lCRk83eGMyQUFHR2cybXJkanZmNHJjQXlvbU5uK3NsTFptVUVHQmdzWWRoOTQ1eFpKbWd2Y2tEU3JFSnBLNnlTQmdWNnExMk84QUJ3R1BqR3pmV1dsc2pkTjlycGpvU2ZBK0RZRFhBUkdBa3NLNElzM1hDMVViNHoxZjRDRFFHRm11NnRsZVFTWWswVStwN1dWZWVmTEpjMDBzNGZBZVdCNlFldW52ajBtMnVneDlnTzdrbWxydFN4dkJmY3k2ZlhVWlM2cmdHL1MrakxRVXdDVk5tTUM5SHFNMTRFdFNlK3JsdVdhek44WUV2OElxS1oxRTFxbmFJRE8wdWN4M2dYNmt2NlRwTTNBTStEL0liR2pnUDYwL2dxNFdRQTMzZ01BMk9ReFBnSFdKWDF0dFN3TDRGQWVaR1lMZ0IyU2FzQnM0QThMN3FPQmY5TTB1WFFCM2ErVE1ZU21WY3R5RHJBOW1mY0JLODJzbVNkS1dnQ2NBYWExYlRtNGZ4YmMvOHV1Q1FYM1JhbkFENUthNldvNUlHbkUwSHhKUFowM3BRWDVPcmczTXNEM0FPNXhYTFBaWEo5QmprcnFkRmc2UWpaa2dHM0p0c3c5M3BHMFZGSTlRVTVLNnZvWVFCSGNUeWRBZndoZUJJOUhndnZQQUpJV1MzcWVJTDlKR3ZVeGtPN2dmaTFCcnFUdndrRy9wUG1TbmliSXFUelhQZ0F5RVZnQmpBRXUxcXJWUGJrL1BWVEhnYi9OYlBHZy9SVkl6T1FxelNUQmFRQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogN3B4IDdweDtcbn1cblxuLyoqXG4gKiBTdHlsZXMgZm9yIGRpc3BsYXkgbW9kZXNcbiAqXG4gKiBOb3RlOiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZXNlIGNvbXBsZXRlbHkgY29udHJvbCB0aGUgZGlzcGxheSBhbmQgb3BhY2l0eVxuICogYXR0cmlidXRlcywgbm8gb3RoZXIgc2VsZWN0b3JzIHNob3VsZCBhdGVtcHQgdG8gY2hhbmdlIHRoZW0uXG4gKi9cblxuLyogRGVmYXVsdCBkaXNwbGF5IG1vZGUgdHJhbnNpdGlvbnMgZm9yIHZhcmlvdXMgY2hyb21lIGVsZW1lbnRzICovXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLW9mZixcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb2ZmLFxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8sXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8sXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtbWluaS1hdXRvLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1taW5pLWF1dG8ge1xuICB0b3A6IC0yNXB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb2ZmLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1vZmYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uT1RfbWluaSAuT1RfbXV0ZS5PVF9tb2RlLWF1dG8sXG4uT1RfcHVibGlzaGVyIC5PVF9tdXRlLk9UX21vZGUtbWluaS1hdXRvLFxuLk9UX3N1YnNjcmliZXIgLk9UX211dGUuT1RfbW9kZS1taW5pLWF1dG8ge1xuICB0b3A6IDUwJTtcbn1cblxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLW9mZixcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtb2ZmLFxuLk9UX3B1Ymxpc2hlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLWF1dG8sXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLWF1dG8sXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtbWluaS1hdXRvLFxuLk9UX3N1YnNjcmliZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfZWRnZS1ib3R0b20uT1RfbW9kZS1taW5pLWF1dG8ge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogLTI1cHg7XG59XG5cbi5PVF9wdWJsaXNoZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1vbixcbi5PVF9zdWJzY3JpYmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtb24sXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtYXV0by5PVF9tb2RlLW9uLWhvbGQsXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8uT1RfbW9kZS1vbi1ob2xkLFxuLk9UX3B1Ymxpc2hlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8sXG4uT1Rfc3Vic2NyaWJlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9tb2RlLWF1dG8sXG4uT1RfcHVibGlzaGVyOmhvdmVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX21vZGUtbWluaS1hdXRvLFxuLk9UX3N1YnNjcmliZXI6aG92ZXIgLk9UX2VkZ2UtYmFyLWl0ZW0uT1RfbW9kZS1taW5pLWF1dG8ge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5PVF9taW5pIC5PVF9tdXRlLk9UX21vZGUtb24sXG4uT1RfbWluaTpob3ZlciAuT1RfbXV0ZS5PVF9tb2RlLWF1dG8sXG4uT1RfbXV0ZS5PVF9tb2RlLW1pbmksXG4uT1Rfcm9vdDpob3ZlciAuT1RfbXV0ZS5PVF9tb2RlLW1pbmktYXV0byB7XG4gIHRvcDogNTAlO1xufVxuXG4uT1RfcHVibGlzaGVyIC5PVF9lZGdlLWJhci1pdGVtLk9UX2VkZ2UtYm90dG9tLk9UX21vZGUtb24sXG4uT1Rfc3Vic2NyaWJlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLW9uLFxuLk9UX3B1Ymxpc2hlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLWF1dG8sXG4uT1Rfc3Vic2NyaWJlcjpob3ZlciAuT1RfZWRnZS1iYXItaXRlbS5PVF9lZGdlLWJvdHRvbS5PVF9tb2RlLWF1dG8ge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogTG9hZCBhbmltYXRpb24gKi9cbi5PVF9yb290IC5PVF92aWRlby1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5PVF9yb290IC5PVF92aWRlby1sb2FkaW5nIC5PVF92aWRlby1sb2FkaW5nLXNwaW5uZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWkweU1DQXRNakFnTWpRd0lESTBNQ0krUEdSbFpuTStQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0poSWlCNE1qMGlNQ0lnZVRJOUlqRWlQanh6ZEc5d0lHOW1abk5sZEQwaU1DSWdjM1J2Y0MxamIyeHZjajBpSTJabVppSWdjM1J2Y0MxdmNHRmphWFI1UFNJd0lpOCtQSE4wYjNBZ2IyWm1jMlYwUFNJeElpQnpkRzl3TFdOdmJHOXlQU0lqWm1abUlpQnpkRzl3TFc5d1lXTnBkSGs5SWpBaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlZaUlnZURFOUlqRWlJSGd5UFNJd0lpQjVNajBpTVNJK1BITjBiM0FnYjJabWMyVjBQU0l3SWlCemRHOXdMV052Ykc5eVBTSWpabVptSWlCemRHOXdMVzl3WVdOcGRIazlJakFpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTm1abVlpSUhOMGIzQXRiM0JoWTJsMGVUMGlMakE0SWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUltTWlJSGd4UFNJeElpQjRNajBpTUNJZ2VURTlJakVpUGp4emRHOXdJRzltWm5ObGREMGlNQ0lnYzNSdmNDMWpiMnh2Y2owaUkyWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXVNRGdpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTm1abVlpSUhOMGIzQXRiM0JoWTJsMGVUMGlMakUySWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUltUWlJSGd5UFNJd0lpQjVNVDBpTVNJK1BITjBiM0FnYjJabWMyVjBQU0l3SWlCemRHOXdMV052Ykc5eVBTSWpabVptSWlCemRHOXdMVzl3WVdOcGRIazlJaTR4TmlJdlBqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMlptWmlJZ2MzUnZjQzF2Y0dGamFYUjVQU0l1TXpNaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlaU0lnZURJOUlqRWlJSGt4UFNJeElqNDhjM1J2Y0NCdlptWnpaWFE5SWpBaUlITjBiM0F0WTI5c2IzSTlJaU5tWm1ZaUlITjBiM0F0YjNCaFkybDBlVDBpTGpNeklpOCtQSE4wYjNBZ2IyWm1jMlYwUFNJeElpQnpkRzl3TFdOdmJHOXlQU0lqWm1abUlpQnpkRzl3TFc5d1lXTnBkSGs5SWk0Mk5pSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0ptSWlCNE1qMGlNU0lnZVRJOUlqRWlQanh6ZEc5d0lHOW1abk5sZEQwaU1DSWdjM1J2Y0MxamIyeHZjajBpSTJabVppSWdjM1J2Y0MxdmNHRmphWFI1UFNJdU5qWWlMejQ4YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanh0WVhOcklHbGtQU0puSWo0OFp5Qm1hV3hzUFNKdWIyNWxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqUXdJajQ4Y0dGMGFDQnpkSEp2YTJVOUluVnliQ2dqWVNraUlHUTlJazA0Tmk0MkxUVXdZVEV3TUNBeE1EQWdNQ0F3SURFZ01DQXhNREFpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtERXdNQ0F4TURBcElpOCtQSEJoZEdnZ2MzUnliMnRsUFNKMWNtd29JMklwSWlCa1BTSk5PRFl1TmlBMU1FRXhNREFnTVRBd0lEQWdNQ0F4SURBZ01UQXdJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE1EQWdNVEF3S1NJdlBqeHdZWFJvSUhOMGNtOXJaVDBpZFhKc0tDTmpLU0lnWkQwaVRUQWdNVEF3WVRFd01DQXhNREFnTUNBd0lERXRPRFl1TmkwMU1DSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRBd0lERXdNQ2tpTHo0OGNHRjBhQ0J6ZEhKdmEyVTlJblZ5YkNnalpDa2lJR1E5SWswdE9EWXVOaUExTUdFeE1EQWdNVEF3SURBZ01DQXhJREF0TVRBd0lpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d4TURBZ01UQXdLU0l2UGp4d1lYUm9JSE4wY205clpUMGlkWEpzS0NObEtTSWdaRDBpVFMwNE5pNDJMVFV3UVRFd01DQXhNREFnTUNBd0lERWdNQzB4TURBaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREV3TUNBeE1EQXBJaTgrUEhCaGRHZ2djM1J5YjJ0bFBTSjFjbXdvSTJZcElpQmtQU0pOTUMweE1EQmhNVEF3SURFd01DQXdJREFnTVNBNE5pNDJJRFV3SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3hNREFnTVRBd0tTSXZQand2Wno0OEwyMWhjMnMrUEM5a1pXWnpQanh5WldOMElIZHBaSFJvUFNJeE1EQWxJaUJvWldsbmFIUTlJakV3TUNVaUlIZzlJaTB5TUNJZ2VUMGlMVEl3SWlCdFlYTnJQU0oxY213b0kyY3BJaUJtYVd4c1BTSWpabVptSWk4K1BDOXpkbWMrKVxuICAgIG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogT1Rfc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogT1Rfc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgT1Rfc3BpbiB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBPVF9zcGluIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLk9UX3B1Ymxpc2hlci5PVF9sb2FkaW5nIC5PVF92aWRlby1sb2FkaW5nLFxuLk9UX3N1YnNjcmliZXIuT1RfbG9hZGluZyAuT1RfdmlkZW8tbG9hZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uT1RfdmlkZW8tY2VudGVyaW5nIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5PVF92aWRlby1jb250YWluZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uT1RfdmlkZW8tcG9zdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIG9wYWNpdHk6IDAuMjU7XG5cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTkRjeElEUTJOQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW1FaUlIZ3lQU0l3SWlCNU1qMGlNU0krUEhOMGIzQWdiMlptYzJWMFBTSTJOaTQyTmlVaUlITjBiM0F0WTI5c2IzSTlJaU5tWm1ZaUx6NDhjM1J2Y0NCdlptWnpaWFE5SWpFd01DVWlJSE4wYjNBdFkyOXNiM0k5SWlObVptWWlJSE4wYjNBdGIzQmhZMmwwZVQwaU1DSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJoZEdnZ1ptbHNiRDBpZFhKc0tDTmhLU0lnWkQwaVRUYzVJRE13T0dNeE5DNHlOUzAyTGpVZ05UUXVNalV0TVRrdU56VWdOekV0TWprZ09TMHpMakkxSURJMUxUSXhJREkxTFRJeGN6TXVOelV0TVRNZ015MHlNbU10TVM0M05TMDJMamMxTFRFMUxUUXpMVEUxTFRRekxUSXVOU0F6TFRRdU56UXhJRE11TWpVNUxUY2dNUzB6TGpJMUxUY3VOUzB5TUM0MUxUUTBMalV0TVRZdE5UY2dNUzR5TlMwM0xqVWdNVEF0TmlBeE1DMDJMVEV4TGpJMUxUTXpMamMxTFRndE5qY3RPQzAyTjNNdU1EY3pMVGN1TXpRMklEWXRNVFZqTFRNdU5EZ3VOak0zTFRrZ05DMDVJRFFnTWk0MU5qTXRNVEV1TnpJM0lERTFMVEl4SURFMUxUSXhJQzR4TkRndExqTXhNaTB4TGpNeU1TMHhMalExTkMweE1DQXhJREV1TlMweUxqYzRJREUyTGpZM05TMDRMalkxTkNBek1DMHhNU0F6TGpjNE55MDVMak0yTVNBeE1pNDNPREl0TVRjdU16azRJREl5TFRJeUxUSXVNelkxSURNdU1UTXpMVE1nTmkweklEWnpNVFV1TmpRM0xUZ3VNRGc0SURReExUWmpMVEU1TGpjMUlESXRNalFnTmkweU5DQTJjemMwTGpVdE1UQXVOelVnTVRBMElETTNZemN1TlNBNUxqVWdNalF1TnpVZ05UVXVOelVnTVRBZ09Ea2dNeTQzTlMweExqVWdOQzQxTFRRdU5TQTVJREVnTGpJMUlERTBMamMxTFRFeExqVWdOak10TVRrZ05qSXRNaTQzTlNBeExUUXRNeTAwTFRNdE1UQXVOelVnTWprdU5TMHhOQ0F6T0MweE5DQXpPQzB5SURRdU1qVXRNeTQzTlNBeE9DNDFMVEVnTWpJZ01TNHlOU0EwTGpVZ01qTWdNak1nTWpNZ01qTnNNVEkzSURVell6TTNJRE0xSURJeklERXpOU0F5TXlBeE16Vk1NQ0EwTmpSekxUTXRPVFl1TnpVZ01UUXRNVEl3WXpVdU1qVXROaTR5TlNBeU1TNDNOUzB4T1M0M05TQTJOUzB6Tm5vaUx6NDhMM04yWno0PSk7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byA3NiU7XG59XG5cbi5PVF9maXQtbW9kZS1jb3ZlciAuT1RfdmlkZW8tZWxlbWVudCB7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLyogV29ya2Fyb3VuZCBmb3IgaU9TIGZyZWV6aW5nIGlzc3VlIHdoZW4gY3JvcHBpbmcgdmlkZW9zICovXG4vKiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc2NDM5ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLk9UX3N1YnNjcmliZXIuT1RfRm9yY2VDb250YWluLk9UX2ZpdC1tb2RlLWNvdmVyIC5PVF92aWRlby1lbGVtZW50IHtcbiAgICAtby1vYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5PVF9maXQtbW9kZS1jb250YWluIC5PVF92aWRlby1lbGVtZW50IHtcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLk9UX2ZpdC1tb2RlLWNvdmVyIC5PVF92aWRlby1wb3N0ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xufVxuXG4uT1RfZml0LW1vZGUtY29udGFpbiAuT1RfdmlkZW8tcG9zdGVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uT1RfYXVkaW8tbGV2ZWwtbWV0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNSU7XG4gIG1heC13aWR0aDogMjI0cHg7XG4gIG1pbi13aWR0aDogMjFweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyOmJlZm9yZSB7XG4gIC8qIG1ha2VzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBlcXVhbHMgaXRzIHdpZHRoICovXG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbn1cblxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyX19iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTIlOyAvKiBtZXRlciB2YWx1ZSBjYW4gb3ZlcmZsb3cgb2YgOCUgKi9cbiAgaGVpZ2h0OiAxOTIlO1xuICB0b3A6IC05NiUgLyogaGFsZiBvZiB0aGUgc2l6ZSAqLztcbiAgcmlnaHQ6IC05NiU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5PVF9hdWRpby1sZXZlbC1tZXRlcl9fYXVkaW8tb25seS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjIlO1xuICByaWdodDogMTUlO1xuICB3aWR0aDogNDAlO1xuXG4gIG9wYWNpdHk6IDAuNztcblxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMmFXVjNRbTk0UFNJd0lEQWdOemtnT0RZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2dabWxzYkQwaUkyWm1aaUkrUEhCaGRHZ2daRDBpVFRrdU56VTNJRFF3TGpreU5HTXpMamN6T0MwMUxqRTVNU0F4TWk0M01URXROQzR6TURnZ01USXVOekV4TFRRdU16QTRJREl1TWpJeklETXVNREUwSURVdU1USTJJREkwTGpVNE5pQXpMall5TkNBeU9DNDNNVGd0TVM0ME1ERWdNUzR6TURFdE1URXVOakV4SURFdU5qSTVMVEV6TGpNNExURXVORE0yTFRFdU1qSTJMVGd1T0RBMExUSXVPVFUxTFRJeUxqazNOUzB5TGprMU5TMHlNaTQ1TnpWNmJUVTRMamM0TlNBd1l5MHpMamN6TnkwMUxqRTVNUzB4TWk0M01URXROQzR6TURndE1USXVOekV4TFRRdU16QTRMVEl1TWpJeklETXVNREUwTFRVdU1USTJJREkwTGpVNE5pMHpMall5TkNBeU9DNDNNVGdnTVM0ME1ERWdNUzR6TURFZ01URXVOakV4SURFdU5qSTVJREV6TGpNNExURXVORE0ySURFdU1qSTJMVGd1T0RBMElESXVPVFUxTFRJeUxqazNOU0F5TGprMU5TMHlNaTQ1TnpWNklpOCtQSEJoZEdnZ1pEMGlUVFk0TGpZME55QTFPQzQyWXk0M01qa3ROQzQzTlRNZ01pNHpPQzA1TGpVMk1TQXlMak00TFRFMExqZ3dOQ0F3TFRJeExqUXhNaTB4TkM0eE1UVXRNemd1TnpjdE16RXVOVEk0TFRNNExqYzNMVEUzTGpReE1pQXdMVE14TGpVeU55QXhOeTR6TlRndE16RXVOVEkzSURNNExqYzNJREFnTkM0MU5ERXVOVEUxSURndU9UTTJJREV1T0RBeUlERXlMamsxSURFdU5qazRJRFV1TWprMUxUVXVOVFF5SURZdU9Ua3hMVFl1TmpFMklESXVNRGN6UXpJdU5ERWdOVFV1TXprMElEQWdOVEV1TnpnM0lEQWdORGd1TVRBeklEQWdNakV1TlRNMklERTNMalk0TlNBd0lETTVMalVnTUNBMk1TNHpNVFlnTUNBM09TQXlNUzQxTXpZZ056a2dORGd1TVRBell6QWdMamN4T0MweUxqZzVPU0E1TGpZNU15MHpMakk1TWlBeE1TNDBNRGd0TGpjMU5DQXpMakk1TXkwM0xqYzFNU0F6TGpVNE9TMDNMakEyTVMwdU9URXllaUl2UGp4d1lYUm9JR1E5SWswMUxqQTROQ0ExTVM0ek9EVmpMUzQ0TURRdE15NDNPREl1TlRZNUxUY3VNek0xSURNdU1UTTBMVGN1T1RJeElESXVOak0yTFM0Mk1ETWdOUzQwT0RVZ01pNHhOU0EyTGpJNE9TQTJMakV6TWk0M09UY2dNeTQ1TkRndExqYzFNaUEzTGpRMU55MHpMak00T0NBM0xqZzFPUzB5TGpVMk5pNHpPVEV0TlM0eU16Y3RNaTR6TVRndE5pNHdNelF0Tmk0d04zcHROamd1T0RNMElEQmpMamd3TkMwekxqYzRNaTB1TlRZNExUY3VNek0xTFRNdU1UTXpMVGN1T1RJeExUSXVOak0yTFM0Mk1ETXROUzQwT0RVZ01pNHhOUzAyTGpJNE9TQTJMakV6TWkwdU56azNJRE11T1RRNExqYzFNaUEzTGpRMU55QXpMak00T1NBM0xqZzFPU0F5TGpVMk5TNHpPVEVnTlM0eU16Y3RNaTR6TVRnZ05pNHdNelF0Tmk0d04zcHRMVEl1TURNNElEZ3VNamc0WXkwdU9USTJJREU1TGpZMU9TMHhOUzR4TVRJZ01qUXVOelU1TFRJMUxqZzFPU0F5TUM0ME56VXROUzQwTURVdExqWXdOaTB6TGpBek5DQXhMakkyTWkwekxqQXpOQ0F4TGpJMk1pQXhNeTQyTmpFZ015NDFOaklnTWpZdU1UWTRJRE11TkRrM0lETXhMakkzTXkweU1DNDFORGt0TGpVNE5TMDBMalV4TVMweUxqTTNPUzB4TGpFNE55MHlMak0zT1MweExqRTROM29pTHo0OGNHRjBhQ0JrUFNKTk5ERXVOall5SURjNExqUXlNbXczTGpVMU15NDFOV014TGpFNU1pNHhNRGNnTWk0eE1pQXhMakUxTXlBeUxqQTNNaUF5TGpNek5Xd3RMakV3T1NBeUxqY3pPR010TGpBME55QXhMakU0TWkweExqQTFNU0F5TGpBMU5DMHlMakkwTXlBeExqazBObXd0Tnk0MU5UTXRMalUxWXkweExqRTVNUzB1TVRBM0xUSXVNVEU1TFRFdU1UVXpMVEl1TURjeUxUSXVNek0xYkM0eE1Ea3RNaTQzTXpkakxqQTBOeTB4TGpFNE1pQXhMakExTWkweUxqQTFOQ0F5TGpJME15MHhMamswTjNvaUx6NDhMMmMrUEM5emRtYyspXG4gICAgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuLk9UX2F1ZGlvLWxldmVsLW1ldGVyX19hdWRpby1vbmx5LWltZzpiZWZvcmUge1xuICAvKiBtYWtlcyB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgZXF1YWxzIGl0cyB3aWR0aCAqL1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG5cbi5PVF9hdWRpby1sZXZlbC1tZXRlcl9fdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSxcbiAgICByZ2JhKDE1MSwgMjA2LCAwLCAxKSAwJSxcbiAgICByZ2JhKDE1MSwgMjA2LCAwLCAwKSAxMDAlXG4gICk7XG59XG5cbi5PVF9hdWRpby1sZXZlbC1tZXRlci5PVF9tb2RlLW9mZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5PVF9hdWRpby1sZXZlbC1tZXRlci5PVF9tb2RlLW9uLFxuLk9UX2F1ZGlvLW9ubHkgLk9UX2F1ZGlvLWxldmVsLW1ldGVyLk9UX21vZGUtYXV0byB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uT1RfYXVkaW8tb25seS5PVF9wdWJsaXNoZXIgLk9UX3ZpZGVvLWVsZW1lbnQsXG4uT1RfYXVkaW8tb25seS5PVF9zdWJzY3JpYmVyIC5PVF92aWRlby1lbGVtZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLk9UX3ZpZGVvLWRpc2FibGVkLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDNweDtcbiAgcmlnaHQ6IDNweDtcbn1cblxuLk9UX3ZpZGVvLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRklBQUFBb0NBWUFBQUJ0bGEwOEFBQUlOVWxFUVZSNDJ1MmFhVXhVVnhUSGNSQm1BQUVCUlZUSzRzS3dESXNnK3dDSzdDcUl3MUNOMVlvYmJiUzJxWWxKMDZReDFVcGRxTWJZV3EycFN6V21INnl0TmJYV0pZMUxxN1Z1cUJFUnRXNjRWMFhGTFlhZTAveHZjcDNNTUFNekR6Nkl5VC9nZTJjZTUvN3VjcFkzVHMzTnpaMXlnRjU3QUowZ08wRzJqeVpQbWRiRnljbEpTQVYxRWVvRWFVVVNMR2RTVjVLTExGeHpGbUE3UVZxR3FEcWppeGhXa3hDVmV5UlZsMzh3TTZid2o2eVlJdFlLNDdCQXV1OUIwZ0NxczZOZzJyNDk0S1F0a2ovRHoyakhyYXc2cXcyZmRTRTRyTm1jQ1BDdlpPTlA4aUYxSTZrZEJkTWFRSldaTGVKcVJXYTJrUEpBeFhZK0d4RSt6eExJMDNHUmg4bEdTd29pOVdDWThGV2xDRWgrOEpPblQ3TWZQR2pNdVhYN1R0NjFob2FDaS85Y0ttS2R2M0J4ZUV0aW0vVWJOcG5iUWlxRjRNbVQ3a3FyYnI0bGtNY1RvNDZUVFNwSkI1Zys4Tkh1VlduV3VhYW1wdmhtTy83ZHVIbXJHbHVvTzRDNk9zSlpHUnJrRElsZDQzWnFVT1RubGtEU21YbWFiQW9CVTB2cUJmKzZLZ0ZTeFE5Kyt1elo4clpBcE04MVRKOHhNNW1lMFovVUY3UHVCbWRWZGtHRWI1Z1lEZVFteVpOVzNTSkxJUDlLajY0bEd5TXBteFJONnNPZklia29BaEtPZG52Mi9QbUIxa0I4OGVMRm8rb2x5eXJwczNyU0lOSUF6TG9ubnFscUs4Ujl3K0w4NnZ0cnQ1TDJuaHVnM1ZjM1VMdS9MaXo4QU91WEVTbFpaT05INmttcjdndExJQTlsUk5lUnpWdWtBdmozQnNsTG5KTktnZlNjTzY5SysvTGx5MFpiUVc3ZTh0TksrcHdCanFhU0lqRHJYZ0prVzFjaUFadmJRalErUkRhaHBCQktkNVpac3FONzU4aG1JbWs0S1FIbnBEZDhVd1NrQ3lKYXJ4MDdkNCszQmVLSm1sTUh5WDRxYVJ4cEJDbU5GRTRLRU52SERwQXV0VkVSbjFrQ1ZCTWZlUlJnWXZabng2MndaUGRuWmt3OTJWUUE1R0NsUVhZUkJ6ZTJTK2lKbXBQVlZvSkxBOWw5UUtva2pjV0tUQ1QxUjVyaExnNzBOdVNzemlUMTZkaUlLa3VBamliclRwSk5Ea24vZTE3Q2FodEFqbEFXSkFZa2IyOVNiMUxFOVJzMzkxa0lMazhtVmt5dUlwdVpjTEtVbEVtS2tyYTFXdVNUTnVlc0VQendvRXBsb1NWQWg5T2l6K0JJeWQ5ZE9IaHR4NE9FcEZwVmc2Z2JOSzN5WFgxajQ4TjZVNUR6NWkvZ2MvRkRyTVkzc1RMaVNNRWtYeEd4elVFVUFHbmJ4bFBha3NNbEhVWFdBbEhTOFVSQ1BzZVNvaFpiQ1NMalNTVTdpeExYZHpoSVdWS3E0WTd0MmEvMmJOMHFHZUtseTFmWXNWbWs2UmdJRHo0SjBib255VU9jamVZcW0vOGhSb1liV2tpZ1YyTkg5Q0hBUzYwRWtVa2t3NDdoU1JzNkZxVDFMUjVBVmNzcnVlWGxLMWQ1QU8rUnBtQnJaWkVpZWZCeXl0UENhblJHTkxaWTB1RjUyZ05EWXI5c0NSQjhNSFkwU0p1Mk9KV0tTMldRVjY1ZTR5MzFEbWtDSW1FaTBoQmZ1ZlJpbWUwUklocGJLZW4wL055OU9ZTlcyZ2h5WXl0QUJqTklheE51S3R0QVdrNkhQTG4wazBGZXZkWndGaW5QV0ZJdUtaYlVWMTZOVmtvNmpiV1NEb1BPM3BPZjhLMGpRV0xTUTBTOWJkcGtZY2srbTd2ZldwQWlIZktnQnNaaUdTU3QwRnFjVGVVOFdFVHFBSEUyQ2djQVZkM0drbTRNRDN4WFllSTZCNE5NSXR2S2JjVXBROWdQK0tNV25Tc1crVGFZSnRvbythdkJXTG9Lb0swQ0NTRHVkKzdlWFdRR1pBWHFWM1lvUWpRQ2ZpeEo4K2Z6ajl0YTNKSGhsVWVKOHdKT1kyd3M2ZVJLcFBTM29xVHZIQUVTRXo5eWEwbmFYTDVXSDZwdDNGcVNPaFRIa1RjS0VYYzZrMVBPaDRROVlKdS8wM1RUNGE4UG9HTUZJNGkyRXFTYk9aQVlhQmtwQ3lEOTJSa0c2S0NTYmpJL0gwSEVJU0JubE9aUEZkY0V6STJHVE80S0JaSUNHS3lBS0xURW1KT0IydHhmNU1iZ29oQklOQ2w0RlRxbXBKTUIyVytIaVJuMVEybDZsWHlQbWlFUDZWVkUyVGZHb2FNWXJIeVBkdEFueUkwakVPbjlSTFdtTkVodkJCRTdTanBGUVphU2h0TEsrMVMrVDEybFJ3eFV2clpsVlBwOGpFMVBpa2VPN0MvbnlFcUJEQ0IxdDcra1V4NGtLVVdjbGVhMHlaQzVCSUdwaUpTTlNEOVFnRlIwUlFLa0w2S3hIU1dkc2lBUkhKTllld29HcnpHMS9iazRkVFBTdW5MMkV5RGpjYmI3TVErbFFmWm1rS2lON1NqcEZBTTVDV0F5R2N3eVk4NFlzWjFsVWNiUk5OdFFNQWR0UVdHdlEwRHlWanpZQUtRZlFGb2RlQWVDMUM4dnp5bVhJWnFEK1pFaC8yT3lMU2FsUy8zVmJuSlorVnFEWEdqTXJUQ0Z1SzRzNjZ2VlpVTmZxYURvbGNiak9jYjg5OXNMcEVFK0kyMEdpZnl3WGUyUVIzS0VsdTk5UHpxakd1ZmhSRXFCMXBqQ25HM0lMM2ZZMXY3MzNyMkZNc2lHaHV0bjBMQW9KV1dJR2JQeGpLd2dqVWJGMG01Mm1QaGlncnBkWE9lY0VxOXBSNk1rSGJ1MkxPdHJjWjl5M2QwT0RUYjE1eTlNZVB6NDhhRjc5KzhmdlhucjlzbGp4MnUySTdLTnhEdWFNUEdWRUNvUnM3bUM0ZVQ3U0lydUZOZk5ISzE1TUt1TTJldndOcSs0cWp4dkduZDVDSHdOTnluYXdXNGNPbFVaZEc4YjU1SUlKSG1rSXR3clpISDZReEIzT1NMOWtUdEFHcEl2WmlRQjNaNFNLQmZYUXRFRTlzYXNoV0FXODdCdDNzWVpOUjZ6bjR1ekp3V0RLVUtYZmFLQ2RxVW9CcEx4U2pZZTlucUdpd1dSQkdpcHVHWjNRbTc2aXRZTGJiSkkvUEVoVUFwZnc3M3VPSXk5eGZzZTNNOUY5QnVGSkhjWXJzZVNvdUdrSHRDVnRrdUdUVGlrSThYZ1p6aGc5U2VGNFZxY3ZTV2lhU3ZOSFE4SndrTmpJZkVIZW1DbU5MRDFSYUVmTHMxOG1sZ051TjZQRkFMSG83Q3lVNVcyZzAwZ0ZBUUY0b3p2aWJIMDRtdXdEYldyYVNGQXl0L0FBTXpld2dHUjh1Q2VXbjc3eHpCeFB4Z3pQUkNERE1aMTRiUS8zanFHS0dvSGYySGpneDNrdzVMYmFKRFlXYjUydDlGTWd3NEF1V05XdWtOZXVPWXFPc21RaTJqZ3dzNFBBL0REL3owQjJ4MC92ZUNzNG5hdzBjZ3liZXppZDdYOWpWM3JYMlJTczB3ZkxrbGw0cEJHY2dpZmcrTll4ZTFrSjJ5Y1RhUnE2NnVHL3dCT2wwdmpjdzcweHdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMzcHggYXV0bztcbn1cblxuLk9UX3ZpZGVvLWRpc2FibGVkLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGSUFBQUFvQ0FZQUFBQnRsYTA4QUFBR01FbEVRVlI0QWUyYUE3RDB5QmFBYzdvSDEydmJSbWxMYXhZV2IyM2J0bTNidG0yODk5YTJiV3VZdFBaMDFjbXRVOWxKcmliMzE1eXFyOUkzT2VtLzUvczdhY3dFbmVoRUp6b3hDY1gyTyt3RWVJZ1JCRERhR2pBWk9nUTZpaFJwTGtsSFpESklYSzFXV3ltTUloR0drVkJLQ1dNTStJdi9mL2I1dDdmYVl0TS9zR2dJUzdqOFJOTGpjZVVWbDQxR3ZHTjFCRmlIeTlzZ3RSV2FZYmh2dVZRNm8xVk92VjUvdExlM2R5c3NLb1p1aDh4Q2xrREVpMk1NUzZaalIwY1NjeGRLLytIZ25Kc21MY2NZT3gwZS9QVUdVcWZUSkRFSGtWNWdvOWxjTVFvajRSOFJwU0lSUlVyNGE5YmFUSkZDQ05mcUVTS0o3UllKaWJLMHhvaTA1RWhGUlR4TWkxUml0NnhIQXVMYUtSTHdFVmk2cTF4K0VobFZwZDNkM1dmaDRWUWtRaFJoeHRoWUxnN1NSR3FkTGxJcDdVVk9IZitKaEVoRU1zY1VvbFZqZTNwNjNzYWVlT0ZvS3NUN2ZqaisrQk51dzJJLzBvdVVFTm1HYVFjUUVpbFF2VVU2eHVXQzBrcW1WV0N0OGRmNmtHN1dMb0ZBMjBWU0NPeU5oMFJLUFQrU3lyVFd0UXN2dXZUWUN5ODR6MytvQWRiZ0FpTEdJdkhqVHo2YkZ1dS9CM2xLS2ZWa0ZLa253aWg2RW5uaXBaZGZYUVp6ZXBBdXBYU0dTQ2Z3VUdadGtyeDN0LzBkU1FHbm5YYm1kb2NkZXRBclFvais0VlIyM3dNUDNiai92bnY5U3YvckJta2lzaDA5Y2E2NTV0aEhTcmxXcTRURkYxdmtORHhzZ2ppVW5QcVpuSFBBQklxNDdqeDdwUE1jZWNTaGZ6N3gxRE83RDZlaXQ5OTU3NlgxMTEzblZkOHJxTEdBdURhTml0Sm9uVEdJcUhnUUdRakRzSmdsTXJVSDVpRFNFUWJSYTZ5MnlyTnZ2L1B1V1ZtVi9QVHpMejhzdGVUaXQxQjlGdEdKZVpySmtzbVdkQnpCTWNhbWk0eFVrYVkxQTFRZTk0V0lhUEdCQXBKaGFFUnJMclhrRWxmOCtOUFB6NllNTHMxRERqbjBXbjlQbkkvVWlRYWRNNGpORWtoelZzRUdFOG5JSEVTTTFqNS9LcVJYKy9JRWlPUS95aWZOQmxFa3BuYjAwY2NjZXNicHAxM1QzOTgzSDg4LzQ4eHpycnZtNml0LzhVNUpYZ1g1RzZuU3ZTcTFSNUxBVFI3YVlHa3dNRzFSU3drV0FCSCs0alViM3ZUL3VKMVoweHBqcmFUQlJsdHJ4VVFoa3NJUm1nVEp5eTY5K1B2OTl0djNxWVg2RnhnVStmVTMzMzUyeEdFSGY1d2lzVTduTldKcFpSTWtBalo2YUlOMW13VjdoMjlKbzJ3Q0hsdmV1L0dWMTY5ejY1RStUNmtvZXhDaDZjK0VFaWt5M2xueFFLRmpVZVZ5T2VJNUFPQnpJaWF5UmhKcnlkN1lZbmtJSGd2QjBxazlUZHFsNk4zWEg0YlJVSU9JSUlLSlNpUmIwaGtTRXBaS1JkMUNwRXE4R3h0SXlDVm1EU2dGbDk0R2FjVGdhSncxclVsWWhZbmcwYzRld2FVc21LUklKanBpcU1TT0NoOVFlSStVWUVDbXRRSXN4RXU2T29yRWN2NlJsMGd1MHdvaDhNaEZrbVNDVFhWSTRwQzcwNFdDRlJKdlNSTkpTenJNTUVaTzJpS1pUQ0hBWllubXZYQ255N2VkNXZmWkszdmlIU0JkSUZDS0VGajIrbnQrNzNudzhtMnVlZGNMSmxrdEErK1ZOTUVQYVI0NWFZdWtjS25uQ2ZZMy9ERmJaUzh0N2VIeE5nc1BNME4xaFhoSkp3d00xUWJwb1FGbG9nMlIxM2EvekJ4RVlIQVFFVVlVTTZxaVZ3RXlCWW9NNkpGTkYya0ZMZWxJNUtRZitmVkk0ZEpGQ2d1RFM3b0F5eDJSNlNGUUpLUmVkU0RqL2NNZy9SWFE2WkUwNUdTSURBYVhkQ2kxSTNMMDIxU1FXTkoxUkxZNU9pSWRMNC95dnV3OEFEZldQRnJTY2lhTXlIOHRFUVB3ZjF1R0c1NGc1K0tsSkdUbXNyeHNRZGw1UEtpZG5QRmUyUVMvLy83SHUrVlM2V1gvSFluZjBzZXZHTDdsWHlkd29kMi85RHlrWnEwczV5ZmYwc2dTV0NpZ05PSDdUUEhMN3VmaisvVEg4UC8rcVlwTDRIa0JEaVJZcEVYZU04Lzg5Lzl6empuN0V0WTY0ZGZkMW5xY2NNN0JzOCs5TUt5ODU1NS84VG5LUys1TXVmSDZFWlZBU2tnUHpmK21KWHJvZXQxN0ppclUwQUxTVDNuVDB5NU9OeUxwZW8xeTY0aWgrdnVRZnNvVE9lUkZTSlhhK1N2eUI5MFRVbWR3NDlFakxhS3BNUTBtekVlVHprV3NkL29JNmZ6ZmlLTThnV2c2WDZPanBYc3R1NVpIbm1JYjBHRml1MjlNSVVmVWV3a21WckVOM1JxVlEvYlk4RnpOY3F1TUJ2L3BDTlVaNXBISGVtMDFLZE4vSS9ERzY2L2xMaEtTdlRPNU04NGthdjVDNXoyWmZ5QWl2aTlpOVZHZDQ1Ukg3VVdKYmp3R0cvN05Zc1JFQ3Q3amlPVG9IZWRLQXVpOFNXNENzeHlSYzU0bUtILzhmN0VMaENDQUN5TmNJbC93SStGYUFKeWM4eXpSdGluUVB6V3p1RlpyRkhxL0FBQUFBRWxGVGtTdVFtQ0MpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMzcHggYXV0bztcbn1cblxuLk9UX3ZpZGVvLWRpc2FibGVkLWluZGljYXRvci5PVF9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLk9UX2F1ZGlvLWJsb2NrZWQtaW5kaWNhdG9yIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5PVF9hdWRpby1ibG9ja2VkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCM2FXUjBhRDBpTVRVd0lpQm9aV2xuYUhROUlqa3dJajQ4WkdWbWN6NDhjR0YwYUNCa1BTSk5OamNnTVRKTU5pNDBORGdnTnpJdU5UVXlJREFnTXpGV01UaE1NallnTUd3ME1TQXhNbnB0TXlBM2JEWWdORGN0TWprZ01UZ3RNelV1TlRBeUxUWXVORGs0VERjd0lERTVlaUlnYVdROUltRWlMejQ4TDJSbFpuTStQSEpsWTNRZ2QybGtkR2c5SWpFMU1DSWdhR1ZwWjJoMFBTSTVNQ0lnY25nOUlqTTFJaUJ5ZVQwaU5EVWlJRzl3WVdOcGRIazlJaTQxSWk4K1BHY2dabWxzYkQwaWJtOXVaU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWo0OFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d6TmlraVBqeHRZWE5ySUdsa1BTSmlJaUJtYVd4c1BTSWpabVptSWo0OGRYTmxJSGhzYVc1ck9taHlaV1k5SWlOaElpOCtQQzl0WVhOclBqeHdZWFJvSUdROUlrMHpPUzR5TkRrZ05URXVNekV5WXk0Mk9UY2dNVEF1TXpjZ01pNDNPRFVnTVRjdU9EazNJRFV1TWpVeElERTNMamc1TnlBekxqQXpPQ0F3SURVdU5TMHhNUzQwTVRjZ05TNDFMVEkxTGpWekxUSXVORFl5TFRJMUxqVXROUzQxTFRJMUxqVmpMVEl1TlRFZ01DMDBMall5T0NBM0xqYzVOeTAxTGpJNE55QXhPQzQwTlROQk9DNDVPRGtnT0M0NU9Ea2dNQ0F3SURFZ05ETWdORFJoT0M0NU9EZ2dPQzQ1T0RnZ01DQXdJREV0TXk0M05URWdOeTR6TVRKNlRUSXdMams0TlNBek1pNHlNalJzTVRVdU56UTJMVEUyTGpnM04yRTNMak00TlNBM0xqTTROU0F3SURBZ01TQXhNQzR6TnpRdExqUXlRelV4TGpjd01pQXhPUzR4TVRRZ05UUWdNamt1TWpBNElEVTBJRFExTGpJd09HTXdJREUwTGpVeU55MHlMak0wTXlBeU15NDRPQzAzTGpBeklESTRMakExT0dFM0xqSTRJRGN1TWpnZ01DQXdJREV0TVRBdU1UWTRMUzQwTmpoTU1qQXVOREExSURVMUxqSXlORWd4TW1FMUlEVWdNQ0F3SURFdE5TMDFkaTB4TTJFMUlEVWdNQ0F3SURFZ05TMDFhRGd1T1RnMWVpSWdabWxzYkQwaUkwWkdSaUlnYldGemF6MGlkWEpzS0NOaUtTSXZQand2Wno0OGNHRjBhQ0JrUFNKTk1UQTJMalVnTVRNdU5VdzBOQzQ1T1RnZ056VXVNREF5SWlCemRISnZhMlU5SWlOR1JrWWlJSE4wY205clpTMTNhV1IwYUQwaU1pSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWk4K1BDOW5Qand2YzNablBnPT0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwcHggYXV0bztcbn1cblxuLk9UX2NvbnRhaW5lci1hdWRpby1ibG9ja2VkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uT1RfY29udGFpbmVyLWF1ZGlvLWJsb2NrZWQuT1RfbWluaSAuT1RfZWRnZS1iYXItaXRlbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5PVF9jb250YWluZXItYXVkaW8tYmxvY2tlZCAuT1RfbXV0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5PVF9hdWRpby1ibG9ja2VkLWluZGljYXRvci5PVF9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLk9UX3ZpZGVvLXVuc3VwcG9ydGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVGNpSUdobGFXZG9kRDBpT1RBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh3WVhSb0lHUTlJazAzTUNBeE1rdzVMalEwT0NBM01pNDFOVElnTUNBMk1td3pMVFEwVERJNUlEQnNOREVnTVRKNmJUZ2dNbXd4SURVeUxUSTVJREU0TFRNMUxqVXdNaTAyTGpRNU9FdzNPQ0F4TkhvaUlHbGtQU0poSWk4K1BDOWtaV1p6UGp4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krUEdjZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9PQ0F6S1NJK1BHMWhjMnNnYVdROUltSWlJR1pwYkd3OUlpTm1abVlpUGp4MWMyVWdlR3hwYm1zNmFISmxaajBpSTJFaUx6NDhMMjFoYzJzK1BIQmhkR2dnWkQwaVRUa3VNVEVnTWpBdU9UWTRTRFE0TGpGaE5TQTFJREFnTUNBeElEVWdOVlkxT0M0eE9HRTFJRFVnTUNBd0lERXROU0ExU0RrdU1URmhOU0ExSURBZ01DQXhMVFV0TlZZeU5TNDVOMkUxSURVZ01DQXdJREVnTlMwMWVtMDBOeTR3T0NBeE15NHpPVFJqTUMwdU16UTFJRFV1TkRjeUxUTXVNVFU1SURFMkxqUXhOUzA0TGpRME0yRXpJRE1nTUNBd0lERWdOQzR6TURRZ01pNDNNREoyTWpZdU9ETTFZVE1nTXlBd0lEQWdNUzAwTGpNd05TQXlMamN3TVdNdE1UQXVPVFF5TFRVdU1qZzJMVEUyTGpReE15MDRMakV0TVRZdU5ERXpMVGd1TkRRMlZqTTBMak0yTW5vaUlHWnBiR3c5SWlOR1JrWWlJRzFoYzJzOUluVnliQ2dqWWlraUx6NDhMMmMrUEhCaGRHZ2daRDBpVFRneExqVWdNVFl1TlV3eE9TNDVPVGdnTnpndU1EQXlJaUJ6ZEhKdmEyVTlJaU5HUmtZaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaTgrUEM5blBqd3ZjM1puUGc9PSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNThweCBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLk9UX3ZpZGVvLXVuc3VwcG9ydGVkLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE5MiU7IC8qIGNvcHkgdGhlIHNpemUgb2YgdGhlIGF1ZGlvIG1ldGVyIGJhciBmb3Igc3ltbWV0cnkgKi9cbiAgaGVpZ2h0OiAxOTIlO1xuICB0b3A6IC05NiUgLyogaGFsZiBvZiB0aGUgc2l6ZSAqLztcbiAgbGVmdDogLTk2JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLk9UX3ZpZGVvLXVuc3VwcG9ydGVkLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMSU7XG4gIGxlZnQ6IDE1JTtcbiAgd2lkdGg6IDcwJTtcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RjaUlHaGxhV2RvZEQwaU9UQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBqeGtaV1p6UGp4d1lYUm9JR1E5SWswM01DQXhNa3c1TGpRME9DQTNNaTQxTlRJZ01DQTJNbXd6TFRRMFRESTVJREJzTkRFZ01USjZiVGdnTW13eElEVXlMVEk1SURFNExUTTFMalV3TWkwMkxqUTVPRXczT0NBeE5Ib2lJR2xrUFNKaElpOCtQQzlrWldaelBqeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvT0NBektTSStQRzFoYzJzZ2FXUTlJbUlpSUdacGJHdzlJaU5tWm1ZaVBqeDFjMlVnZUd4cGJtczZhSEpsWmowaUkyRWlMejQ4TDIxaGMycytQSEJoZEdnZ1pEMGlUVGt1TVRFZ01qQXVPVFk0U0RRNExqRmhOU0ExSURBZ01DQXhJRFVnTlZZMU9DNHhPR0UxSURVZ01DQXdJREV0TlNBMVNEa3VNVEZoTlNBMUlEQWdNQ0F4TFRVdE5WWXlOUzQ1TjJFMUlEVWdNQ0F3SURFZ05TMDFlbTAwTnk0d09DQXhNeTR6T1RSak1DMHVNelExSURVdU5EY3lMVE11TVRVNUlERTJMalF4TlMwNExqUTBNMkV6SURNZ01DQXdJREVnTkM0ek1EUWdNaTQzTURKMk1qWXVPRE0xWVRNZ015QXdJREFnTVMwMExqTXdOU0F5TGpjd01XTXRNVEF1T1RReUxUVXVNamcyTFRFMkxqUXhNeTA0TGpFdE1UWXVOREV6TFRndU5EUTJWak0wTGpNMk1ub2lJR1pwYkd3OUlpTkdSa1lpSUcxaGMyczlJblZ5YkNnallpa2lMejQ4TDJjK1BIQmhkR2dnWkQwaVRUZ3hMalVnTVRZdU5Vd3hPUzQ1T1RnZ056Z3VNREF5SWlCemRISnZhMlU5SWlOR1JrWWlJSE4wY205clpTMTNhV1IwYUQwaU1pSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWk4K1BDOW5Qand2YzNablBnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xufVxuXG4uT1RfdmlkZW8tdW5zdXBwb3J0ZWQtaW1nOmJlZm9yZSB7XG4gIC8qIG1ha2VzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciA5MyUgb2YgaXRzIHdpZHRoICg5MC85NyBweCkgKi9cbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA5MyU7XG59XG5cbi5PVF92aWRlby11bnN1cHBvcnRlZC10ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWZhYi1idXR0b24uY29udHJvbGxlciB7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4ud2hpdGUtYmcge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLy9PVF9yb290IE9UX3B1Ymxpc2hlciBPVF9tYWluIGN1c3RvbS1jbGFzcyBuZy10bnMtYzEtMSBuZy1zdGFyLWluc2VydGVkXG4vL09UX3Jvb3QgT1RfcHVibGlzaGVyIE9UX3JlbW90ZSBjdXN0b20tY2xhc3MgbmctdG5zLWMxLTEgbmctc3Rhci1pbnNlcnRlZCBPVl9iaWdcblxuLmhhbGZTY3JlZW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgaGVpZ2h0OiA0MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG4uZnVsbFNjcmVlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5yaW5naW5nIHtcbiAgQGluY2x1ZGUgYmFja2dyb3VuZE1peGluKCRiYWNrZ3JvdW5kLWltYWdlLXBhdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCB7XG4gIGh0bWxbZGF0YS10aGVtZT1cImFjY2Vzc2liaWxpdHlcIl0ge1xuICAgIC5yaW5naW5nLFxuICAgIC5pbmNvbWluZyxcbiAgICAuYXVkaW9Pbmx5LFxuICAgIC52aWRlby0tbWFpbixcbiAgICAubm9uZS1pb3MtLW1haW4tdmlkZW8ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbi5maXhlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5pbmNvbWluZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBAaW5jbHVkZSBiYWNrZ3JvdW5kTWl4aW4oJGJhY2tncm91bmQtaW1hZ2UtcGF0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaW9uLWdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmRvY3Rvci10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW1nLmxvZ28ge1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hY2NlcHQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucmVmdXNlLWJ0biB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5hdWRpb09ubHkge1xuICBAaW5jbHVkZSBiYWNrZ3JvdW5kTWl4aW4oJGJhY2tncm91bmQtaW1hZ2UtcGF0aCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAuYXVkaW8tb3ZlcmxheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5kb2N0b3ItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG4jbG9jYWxVc2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgaGVpZ2h0OiAxNXZoO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuXG4gIHotaW5kZXg6IDEwMDI7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICYubG9jYWxVc2VySGFsZlNjcmVlbiB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgaGVpZ2h0OiA3LjV2aDtcbiAgfVxufVxuLnZpZGVvLS1tYWluIHtcbiAgQGluY2x1ZGUgYmFja2dyb3VuZE1peGluKCRiYWNrZ3JvdW5kLWltYWdlLXBhdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLmlvcy0tbWFpbi12aWRlbyB7XG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5vbmUtaW9zLS1tYWluLXZpZGVvIHtcbiAgQGluY2x1ZGUgYmFja2dyb3VuZE1peGluKCRiYWNrZ3JvdW5kLWltYWdlLXBhdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbiNyZW1vdGVVc2VycyB7XG4gIHZpZGVvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cbn1cblxuLmlvcy1ib3VuZHMge1xuICBoZWlnaHQ6IDg3JTtcbn1cblxuLm5vbmUtaW9zLWJvdW5kcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuOjpuZy1kZWVwIHtcbiAgaHRtbFtkYXRhLXRoZW1lPVwiYWNjZXNzaWJpbGl0eVwiXSB7XG4gICAgLy8gYWRkIGFjY2Vzc2liaWxpdHkgYWRqdXN0bWVudHMgaGVyZVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-content id=\"ionContentMain\">\n    <div\n      class=\"server-error-container\"\n      *ngIf=\"globalVariableService.serverError\"\n    >\n      {{ \"appComponent.serverError\" | translate }}\n    </div>\n    <ion-router-outlet [swipeGesture]=\"false\"></ion-router-outlet>\n  </ion-content>\n</ion-app>\n";

/***/ }),

/***/ 713:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/chat/chat.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"light\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title\n      >{{ user.getStreamManager().stream.session.sessionId }} - CHAT</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding id=\"chat-content\">\n  <div id=\"message-wrap\" class=\"message-wrap\">\n    <div\n      *ngFor=\"let data of messageList; let i = index\"\n      class=\"message\"\n      [class.right]=\"data.connectionId === user.getConnectionId()\"\n      [class.left]=\"data.connectionId !== user.getConnectionId()\"\n    >\n      <img class=\"user-img\" [src]=\"data.userAvatar\" />\n      <div class=\"msg-detail\">\n        <div class=\"msg-info\">\n          <p></p>\n        </div>\n        <div class=\"msg-content\">\n          <span class=\"triangle\"></span>\n          <p class=\"text\">{{ data.message }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\" id=\"sendButton\">\n    <ion-fab-button size=\"small\" (click)=\"sendMessage()\">\n      <ion-icon name=\"send\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer [style.height]=\"'55px'\">\n  <div id=\"messageInput\">\n    <ion-item>\n      <ion-input\n        required\n        #chat_input\n        placeholder=\"Send a message\"\n        [(ngModel)]=\"message\"\n        (keyup.enter)=\"sendMessage()\"\n        (ionFocus)=\"onFocus()\"\n      ></ion-input>\n    </ion-item>\n  </div>\n</ion-footer>\n";

/***/ }),

/***/ 7475:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/choose-attachment/choose-attachment.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content padding>\n  <div class=\"wrap\">\n    <div class=\"container\">\n      <div\n        style=\"color: #ffffff; text-align: center;\"\n      >\n        <ion-icon class=\"attach-icon\" slot=\"icon-only\" name=\"attach\"></ion-icon>\n        <h4>\n          {{ 'chooseAttachement.send' | translate }} <br />\n          <strong>{{ 'chooseAttachement.aFile' | translate }}</strong>\n        </h4>\n      </div>\n      <button class=\"submit-btn\" mat-button (click)=\"takePicture()\">\n        {{ 'chooseAttachement.takeAPhoto' | translate }}\n      </button>\n      <button class=\"submit-btn\" mat-button (click)=\"chooseFile()\">\n        {{ 'chooseAttachement.fromThePhone' | translate }}\n      </button>\n      <!-- <button class=\"submit-btn\" mat-button (click)=\"chooseFile()\" >\n          Laisser un message audio\n         </button> -->\n      <ion-button (click)=\"dismiss()\" class=\"dismiss-btn\" color=\"transparent\"\n        >{{ 'chooseAttachement.cancel' | translate }}</ion-button\n      >\n    </div>\n  </div>\n  <input\n    *ngIf=\"!isNativeApp()\"\n    type=\"file\"\n    style=\"display: none\"\n    id=\"input-file\"\n  />\n</ion-content>\n";

/***/ }),

/***/ 7226:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/close-consultation/close-consultation.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row style=\"height: 15%; width: 100%\"></ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row class=\"close-btn\">\n          <ion-icon class=\"fn-x\"></ion-icon>\n        </ion-row>\n        <ion-row>\n          <ion-title class=\"doctor-title\">\n            {{ \"closeConsultation.cancel\" | translate }} <br />\n            <strong>{{\n              \"closeConsultation.theConsultationRequest\" | translate\n            }}</strong>\n          </ion-title>\n        </ion-row>\n        <ion-row class=\"your-about-to\">\n          <p>{{ \"closeConsultation.youAreAboutTo\" | translate }}</p>\n        </ion-row>\n\n        <ion-row>\n          <ion-button\n            (click)=\"dismiss()\"\n            class=\"cancel-btn\"\n\n            >{{ \"closeConsultation.stayInTheQueue\" | translate }}</ion-button\n          >\n        </ion-row>\n\n        <ion-row>\n          <ion-button \n            (click)=\"closeConsultation()\" \n            class=\"dismiss-btn\"\n            color=\"transparent\"\n            >{{ \"closeConsultation.cancelTheRequest\" | translate }}</ion-button>\n        </ion-row>\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 9560:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/request-consultation/request-consultation.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" (click)=\"dismiss()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      style=\"       text-align: center;\n      margin-right: 25%;\n      font-size: 0.9em;  \"\n      >Demande consultation</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"width:100%; \">\n    <ion-row>\n      <ion-title class=\"sub\" color=\"medium\"\n        >PRE-REQUIS DE DEMANDE DE CONSULTATION</ion-title\n      >\n\n      <ion-card>\n        <ion-list class=\"check-list\">\n          <ion-item lines=\"full\">\n            <ion-label text-wrap slot=\"start\">\n              L’appel ne concerne pas une urgence vitale\n            </ion-label>\n            <ion-checkbox\n              color=\"primary\"\n              mode=\"ios\"\n              slot=\"end\"\n              [(ngModel)]=\"term1\"\n              [checked]=\"term1\"\n            ></ion-checkbox>\n          </ion-item>\n          <ion-item lines=\"full\">\n            <ion-label text-wrap slot=\"start\">\n              Le patient a consenti à effectuer l’appel\n            </ion-label>\n            <ion-checkbox\n              color=\"primary\"\n              mode=\"ios\"\n              slot=\"end\"\n              [(ngModel)]=\"term2\"\n              [checked]=\"term2\"\n            ></ion-checkbox>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label text-wrap slot=\"start\">\n              Le médecin traitant n’est pas disponible ou a donné son accord\n            </ion-label>\n            <ion-checkbox\n              color=\"primary\"\n              mode=\"ios\"\n              slot=\"end\"\n              [(ngModel)]=\"term3\"\n              [checked]=\"term3\"\n            ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-title class=\"sub\" color=\"medium\"\n        >PATIENT À LA SUITE D’UNE HOSPITALISATION HUG</ion-title\n      >\n      <ion-card style=\" \">\n        <ion-list class=\"input-list\">\n          <!-- <ion-item lines=\"full\">\n                <ion-label position=\"floating\" text-wrap >\n                    Nom du patient\n                </ion-label>\n                <ion-input [(ngModel)]=\"firstName\" required=\"true\"></ion-input>\n              </ion-item>\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\" text-wrap  >\n                    Prénom de patient\n                </ion-label>\n                <ion-input [(ngModel)]=\"lastName\" required=\"true\"></ion-input>\n              </ion-item> -->\n          <ion-item lines=\"full\">\n            <ion-label text-wrap position=\"floating\">\n              Sexe\n            </ion-label>\n            <ion-select [(ngModel)]=\"gender\" placeholder=\"Select\">\n              <ion-select-option value=\"female\">Féminin</ion-select-option>\n              <ion-select-option value=\"male\">Masculin</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\" text-wrap>\n              Date de naissance\n            </ion-label>\n            <ion-datetime\n              [(ngModel)]=\"birthDate\"\n              day-names=\"lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche\"\n              placeholder=\"Select date\"\n              month-names=\"Janvier, Février, Mars, Avril, Mai, Juin, Juillet, Août, Septembre, Octobre, Novembre, Décembre\"\n              display-format=\"DD MMMM YYYY\"\n              value=\"1960-06-15\"\n              min=\"1895-01-01\"\n            ></ion-datetime>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-input\n              [(ngModel)]=\"IMADTeam\"\n              type=\"number\"\n              name=\"IMADTeam\"\n              (ngModelChange)=\"strictIMAD($event)\"\n              [attr.maxlength]=\"3\"\n              max=\"999\"\n              style=\"margin-top: 20px;\"\n              placeholder=\"Equipe IMAD\"\n            ></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-button\n  class=\"submit-btn\"\n  slot=\"fixed\"\n  vertical=\"bottom\"\n  (click)=\"createConsultation()\"\n>\n  VALIDER LA DEMANDE</ion-button\n>\n";

/***/ }),

/***/ 9359:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/stream/peer-audio/peer-audio.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<audio\n\t\t\t\tref='audio'\n        autoPlay\n        #audioElement\n\t\t\t></audio>\n";

/***/ }),

/***/ 8255:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/stream/peer-video/peer-video.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"OT_widget-container\" *ngIf=\"stream\" >\n  <video #videoElement [id]=\"'video-' + stream.mediaStream.id\" \t\tautoPlay\n  playsInline\n  muted\n  ></video>\n\n</div>\n";

/***/ }),

/***/ 6685:
/*!************************************************************!*\
  !*** ./src/app/video-room/video-room.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"!accepted\" class=\"bounds incoming\">\n  <ion-grid>\n    <ion-row style=\"height: 25%; width: 100%\"></ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <img class=\"logo\" src=\"assets/icons/Call-incoming.svg\" alt=\"\" />\n        </ion-row>\n        <ion-row>\n          <ion-title *ngIf=\"user\" class=\"doctor-title\">\n            {{user.firstName }} {{user.lastName | uppercase }} <br />\n            <strong\n              >{{ 'videoRoom.call' | translate }} {{audioOnly?\n              ('videoRoom.audio' | translate):('videoRoom.video' |\n              translate)}}</strong\n            >\n          </ion-title>\n        </ion-row>\n        <ion-row>\n          <ion-button (click)=\"joinToSession()\" class=\"accept-btn\"\n            >{{ 'videoRoom.accept' | translate }}</ion-button\n          >\n        </ion-row>\n\n        <ion-row>\n          <ion-button\n            (click)=\"rejectCall()\"\n            class=\"refuse-btn\"\n            color=\"transparent\"\n            >{{ 'videoRoom.refuse' | translate }}</ion-button\n          >\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n<div\n  class=\"video--main\"\n  [ngDraggable]=\"!isFullScreen\"\n  [lockAxis]=\"'x'\"\n  [inBounds]=\"true\"\n  [ngClass]=\"{'fullScreen': isFullScreen , 'halfScreen':!isFullScreen, 'audioOnly': audioOnly, 'ios--main-video':this.platform.is('ios'), 'none-ios--main-video':!this.platform.is('ios')}\"\n>\n  <!-- Main video -->\n  <div\n    *ngIf=\"accepted && !audioOnly\"\n    #mainStream\n    [ngDraggable]=\"true\"\n    id=\"localUser\"\n    [ngClass]=\"{'localUserHalfScreen': !isFullScreen }\"\n  >\n    <app-peer-video\n      #streamComponentLocal\n      *ngIf=\"myCamStream\"\n      [stream]=\"myCamStream\"\n      [id]=\"myCamStream.mediaStream.id\"\n    ></app-peer-video>\n  </div>\n\n  <div\n    [ngClass]=\"{'ringing': !this.remoteUsers.length, 'ios-bounds':this.platform.is('ios'), 'none-ios-bounds':!this.platform.is('ios')}\"\n    id=\"layout\"\n    class=\"bounds\"\n    style=\"display: flex\"\n    (click)=\"toggleButtons()\"\n  >\n    <ng-container *ngIf=\"accepted\">\n      <div *ngIf=\"audioOnly || noWebCam\" class=\"audio-overlay\">\n        <ion-row>\n          <ion-title *ngIf=\"user\" class=\"doctor-title\">\n            <strong>{{ 'videoRoom.callInProgress' | translate }}</strong>\n          </ion-title>\n        </ion-row>\n      </div>\n\n      <!-- Remotes -->\n      <div\n        *ngFor=\"let user of this.remoteUsers\"\n        class=\"OT_root OT_publisher OT_remote custom-class OV_big\"\n        id=\"remoteUsers\"\n      >\n        <ng-container *ngFor=\"let stream of user.streams\">\n          <app-peer-video\n            *ngIf=\"stream.kind  === 'video'\"\n            [stream]=\"stream\"\n          ></app-peer-video>\n\n          <app-peer-audio *ngIf=\"stream.kind  === 'audio'\" [stream]=\"stream\">\n          </app-peer-audio>\n        </ng-container>\n      </div>\n    </ng-container>\n  </div>\n\n  <ion-fab\n    style=\"\n      z-index: 1111;\n      transform: translateZ(1px);\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin-left: auto;\n      margin-right: auto;\n      width: 280px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    \"\n    vertical=\"bottom\"\n    horizontal=\"center\"\n    id=\"exitButton\"\n    [ngClass]=\"{'fixed': !isFullScreen}\"\n    [@slideTopBottom]=\"buttonsVisibility\"\n  >\n    <ion-fab-button class=\"controller white-bg\" (click)=\"camStatusChanged()\">\n      <img\n        *ngIf=\"camStatus === 'on'\"\n        style=\"float: left; width: 1.2em; height: 1.2em\"\n        src=\"assets/icons/icon-cameraOn.svg\"\n      />\n      <img\n        *ngIf=\"camStatus === 'off'\"\n        style=\"float: left; width: 1.2em; height: 1.2em\"\n        src=\"assets/icons/icon-cameraOff.svg\"\n      />\n    </ion-fab-button>\n    <ion-fab-button\n      *ngIf=\"!audioOnly && !noWebCam\"\n      class=\"controller white-bg\"\n      (click)=\"toggleCamera()\"\n    >\n      <img\n        style=\"float: left; width: 1.2em; height: 1.2em\"\n        src=\"assets/icons/icon-toogle-camera.svg\"\n      />\n    </ion-fab-button>\n    <ion-fab-button class=\"controller\" color=\"danger\" (click)=\"exitSession()\">\n      <img\n        style=\"float: left; width: 1.2em; height: 1.2em\"\n        src=\"assets/icons/icon-hangup.svg\"\n      />\n    </ion-fab-button>\n    <div style=\"position: relative\">\n      <ion-fab-button class=\"controller white-bg\" (click)=\"toggleFullScreen()\">\n        <img\n          style=\"float: left; width: 1.2em; height: 1.2em\"\n          src=\"assets/icons/icon-enlarge.svg\"\n        />\n      </ion-fab-button>\n      <ion-badge\n        *ngIf=\"consultation && consultation.unreadCount\"\n        style=\"\n          z-index: 200;\n          position: absolute;\n          top: 3px;\n          right: 0px;\n          line-height: 1.3;\n          border-radius: 20px;\n          width: 20px;\n          height: 20px;\n          text-align: center;\n        \"\n        color=\"danger\"\n        >{{consultation.unreadCount}}</ion-badge\n      >\n    </div>\n  </ion-fab>\n\n  <!-- </ion-content> -->\n</div>\n";

/***/ }),

/***/ 7020:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map