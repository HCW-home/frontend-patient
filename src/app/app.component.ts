import { GlobalVariableService } from "./services/global-variable.service";
import {Component, NgZone} from "@angular/core";

import { Platform, ToastController, ToastButton } from "@ionic/angular";
import { SplashScreen } from '@capacitor/splash-screen';
import { CallService } from "./services/call.service";
import { SocketEventsService } from "./services/socket-events.service";
import { ConsultationService } from "./services/consultation.service";
import { AuthService } from "./auth/auth.service";
import { NativeAudio } from '@capacitor-community/native-audio'
import { NavigationEnd, Router } from "@angular/router";
import { App } from '@capacitor/app';
import { filter } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./shared/services/language.service";

declare var cordova;
declare let window: any;
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
  inviteToken: string;
  lastConnectionStatus = "";
  private toast: HTMLIonToastElement;

  testRoute = false;
  constructor(
    private platform: Platform,
    private callService: CallService,
    private authService: AuthService,
    private socketEventsService: SocketEventsService,
    private consultationService: ConsultationService,
    private toastController: ToastController,
    private router: Router,
    public translate: TranslateService,
    private languageService: LanguageService,
    public globalVariableService: GlobalVariableService,
    private zone: NgZone
  ) {
    const parsedUrl = new URL(window.location.href);
    this.inviteToken = parsedUrl.searchParams.get("invite");
    if (!this.inviteToken && window.location.href.match(/invite=([^&]*)/)) {
      // parse invite from url using regex
      this.inviteToken = window.location.href.match(/invite=([^&]*)/)[1];
    }
    this.testRoute = window.location.href.includes("test-call") || window.location.href.includes("acknowledge-invite") || window.location.href.includes("requester") || window.location.href.includes("cgu");

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {});
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
        if (this.currentUser && (this.currentUser.role === 'nurse' || this.currentUser.role === 'admin')) {
          this.router.navigate([`/dashboard`]);
        } else {
          const currentConsultation = localStorage.getItem('currentConsultation')
          if (currentConsultation) {
              this.router.navigate(['consultation', currentConsultation])
          } else {
            this.router.navigate(["/login"]);
        }
        }
      }
    }
    this.redirected = true;
  }

  isNativeApp() {
    return !this.platform.is('mobileweb') && ( this.platform.is('ios') || this.platform.is('android'));
  }
  async initializeApp() {

    App.addListener("appUrlOpen", data => {
      this.zone.run(() => {
        const url = new URL(data.url);
        const token = url.searchParams.get("invite");
        const host = url.searchParams.get("host");

        if (/attachment/.test(data.url)) {
          return;
        }

        if (localStorage.getItem("inviteToken") !== token || !host) {
          this.authService.logout();
        }

        localStorage.setItem("host", host);
        localStorage.setItem("inviteToken", token);
        this.authService.setInviteToken(token);
        this.router.navigate(["/login"], {
          queryParams: {invite: token},
        });
      });
    });

    if (this.platform.is("ios") && this.platform.is("cordova")) {
      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      // CHECK IF REQUIRED script2.src = "assets/libs/adapter-4.0.1.js";
      script2.async = false;
      document.head.appendChild(script2);
    }

    if (this.inviteToken) {
      if (localStorage.getItem("inviteToken") !== this.inviteToken) {
        await this.authService.logOutNurse();
        localStorage.setItem("inviteToken", this.inviteToken);
        // document.location.reload()
      }
    }

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
        try {
          cordova.plugins.iosrtc.registerGlobals();
        } catch (error) {
          console.error(error);
        }
      }

      if (!this.testRoute) {
        this.redirectToLogin();
      }

        if ( !this.platform.is('mobileweb') && ( this.platform.is('ios') || this.platform.is('android'))) {
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

  async presentToast(message: string, className: string, refreshButton: boolean) {
    if (this.toast) {
      await this.toast.dismiss();
    }
    const refreshButtonText = this.translate.instant('common.refresh');
    let button: ToastButton = {
      side: 'end',
      icon: 'close',
      role: 'info',
    }
    if (refreshButton) {
      button = {
        side: 'end',
        text: refreshButtonText,
        role: 'info',
        handler: () => {
          window.location.reload();
        },
      }
    }

    this.toast = await this.toastController.create({
      message,
      position: 'bottom',
      cssClass: className,
      buttons: [
        button
      ]
    });
    this.toast.present();

  }

  initServices(r?) {
    this.socketEventsService.init(r, () => {});

    this.consultationService.init(r);

    this.callService.getCall().subscribe((e) => {
      this.consultation = e;
      this.consultation.id = e._id;
      this.callRunning = true;
    });

    this.socketEventsService.connectionSub().subscribe((status) => {
      if (
          status === "connect_failed" &&
          this.lastConnectionStatus !== "connect_failed"
      ) {
        this.lastConnectionStatus = "connect_failed";
        setTimeout(() => {
          this.presentToast(this.translate.instant("common.connectionFailed"), 'red-toast', true);
        }, 100);
      } else if (status === "connect") {
        if (this.toast && this.lastConnectionStatus === "connect_failed") {
          this.presentToast(this.translate.instant('common.reconnected'), 'green-toast', false)
        }
        this.lastConnectionStatus = "connect";
      }
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
