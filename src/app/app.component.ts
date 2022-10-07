import { Observable, Subscription } from "rxjs";
import { GlobalVariableService } from "./global-variable.service";
import { Component, OnInit, NgZone, Directive } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";

// import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { SplashScreen } from '@capacitor/splash-screen';

import { CallService } from "./call.service";

import { SocketEventsService } from "./socket-events.service";
import { ConsultationService } from "./consultation.service";

import { AuthService } from "./auth/auth.service";
// import { NativeAudio } from "@awesome-cordova-plugins/native-audio/ngx";
import { NativeAudio } from '@capacitor-community/native-audio'


import { NavigationEnd, Router } from "@angular/router";

declare var cordova;
declare let window: any;
import { File } from "@awesome-cordova-plugins/file/ngx";
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { LoginPage } from "./login/login.page";
import { TestComponent } from "./test/test.component";
import { filter } from "rxjs/operators";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  callRunning = false;
  currentUser;
  redirected = false;
  consultation;
  callsSub: Subscription;
  inviteToken: string;

  testRoute = false;
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private callService: CallService,
    private authService: AuthService,
    private socketEventsService: SocketEventsService,
    private consultationService: ConsultationService,
    private zone: NgZone,
    // private nativeAudio: NativeAudio,
    private file: File,
    private router: Router,
    public globalVariableService: GlobalVariableService
  ) {
    
    const parsedUrl = new URL(window.location.href);
    console.log("PARSED URL", parsedUrl);
    this.inviteToken = parsedUrl.searchParams.get("invite");
    if (!this.inviteToken && window.location.href.match(/invite=([^&]*)/)) {
      // parse invite from url using regex
      this.inviteToken = window.location.href.match(/invite=([^&]*)/)[1];
    }
    this.testRoute = window.location.href.includes("test-call");

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log("Router event", event);
      });
  }


  ngOnInit() {

    this.authService
      .init()
      .then((user) => {
        if (user) {
          this.currentUser = user;
          this.initServices(this.currentUser);
        }
        this.initializeApp();
      })
      .catch((err) => {
        console.log("ERROR getting user ", err);
        this.initializeApp();
      });

    this.authService.loggedInSub().subscribe((user) => {
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
          queryParams: { invite: this.inviteToken },
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
    return this.platform.is('ios') || this.platform.is('android');
  }
  async initializeApp() {

    App.addListener('appUrlOpen', data => {
      const url = new URL(data.url);
      const token = url.searchParams.get('invite')

      if (localStorage.getItem("inviteToken") !== token) {
        this.authService.logout();
      }

      localStorage.setItem("inviteToken", token);
      this.authService.setInviteToken(token);
      this.router.navigate(["/login"], {
        queryParams: { invite: token },
      });
    });

    if (this.platform.is("ios") && this.platform.is("cordova")) {
      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "assets/libs/adapter-4.0.1.js";
      script2.async = false;
      document.head.appendChild(script2);
    }

    if (this.inviteToken) {
      if (localStorage.getItem("inviteToken") !== this.inviteToken) {
        console.log("New invite token .");
        localStorage.clear();
        await this.authService.logout();
        localStorage.setItem("inviteToken", this.inviteToken);
        // document.location.reload()
      }
    }
    // }

    this.platform.ready().then(() => {
      window.platform = this.platform;

      if (this.isNativeApp()) {
        SplashScreen.hide();
      }
      if (
        this.platform.is("ios") &&
        this.platform.is("cordova") &&
        this.isNativeApp()
      ) {
        console.log("Initializing iosrtc");
        try {
          cordova.plugins.iosrtc.registerGlobals();
        } catch (error) {
          console.error(error);
        }
      }

      console.log("router ", this.router, this.router.url);
      if (!this.testRoute) {
        this.redirectToLogin();
      }

        if ( this.platform.is('ios') || this.platform.is('android') ) {
          var notificationFile = 'public/assets/sounds/notification.mp3'
        } else {
          var notificationFile = 'notification.mp3'
        }

        NativeAudio.preload({
          assetId:'ringSound', 
          assetPath: notificationFile, 
          // volume: 1,
          audioChannelNum: 1,
          isUrl: false
        })
        .then(
          (r) => {
            console.log("audio loaded ", r);
          },
          (err) => {
            console.log("error loading sample here", err);            
          }
          );
    });
  }

  initServices(r?) {
    this.socketEventsService.init(r, () => {});

    this.consultationService.init(r);

    this.callService.getCall().subscribe((e) => {
      console.log("get call ", e);

      this.consultation = e;
      this.consultation.id = e._id;
      this.callRunning = true;
    });
    // incoming call
  }

  androidWakeUp() {
    if (this.platform.is("cordova")) {
      cordova.plugins.backgroundMode.overrideBackButton();
      cordova.plugins.backgroundMode.wakeUp();
      cordova.plugins.backgroundMode.moveToForeground();

      // must be here for it to work..
      cordova.plugins.backgroundMode.unlock();
      cordova.plugins.backgroundMode.disable();
    }
  }
}
