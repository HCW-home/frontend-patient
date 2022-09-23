import { Observable, Subscription } from "rxjs";
import { GlobalVariableService } from "./global-variable.service";
import { Component, OnInit, NgZone, Directive } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";

import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";

import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";

import { CallService } from "./call.service";

import { BackgroundMode } from "@awesome-cordova-plugins/background-mode/ngx";

import { SocketEventsService } from "./socket-events.service";
import { ConsultationService } from "./consultation.service";

import { AuthService } from "./auth/auth.service";
import { NativeAudio } from "@awesome-cordova-plugins/native-audio/ngx";

import { NavigationEnd, Router } from "@angular/router";

declare var cordova;
declare let window: any;
import { File } from "@awesome-cordova-plugins/file/ngx";
import { Deeplinks } from "@awesome-cordova-plugins/deeplinks";
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { LoginPage } from "./login/login.page";
import { TestComponent } from "./test/test.component";
import { filter } from "rxjs/operators";
import { environment } from "../environments/environment";

@Directive()
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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private callService: CallService,
    private backgroundMode: BackgroundMode,
    private authService: AuthService,
    private socketEventsService: SocketEventsService,
    private consultationService: ConsultationService,
    private zone: NgZone,
    private nativeAudio: NativeAudio,
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
    return environment.platform === "native";
  }
  async initializeApp() {

    App.addListener('appUrlOpen', data => {
      const url = new URL(data.url);
      const token = url.searchParams.get('invite')

      //if (localStorage.getItem("inviteToken") !== token) {
      //  this.authService.logout();
      //}

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

    // if (!this.isNativeApp()) {
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
        this.splashScreen.hide();
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

      console.log("COORDOOVAAAA", this.platform.is("cordova"))
      
      if (this.platform.is("cordova")) {
        Deeplinks.route({
          "/test-call": TestComponent,
          "/": LoginPage,
        }).subscribe(
          async (match) => {
            console.log("MATCHED ROUTE", match);

            if (match.$link.scheme == "hugathome") {
              this.globalVariableService.updateHost(
                match.$args.scheme + "://" + match.$link.host
              );
            } else {
              this.globalVariableService.updateHost(
                match.$link.scheme.replace(/\:$/, "") + "://" + match.$link.host
              );
            }

            if (match && match.$args && match.$args.invite) {
              if (localStorage.getItem("inviteToken") !== match.$args.invite) {
                console.log(
                  "New invite token  from param.",
                  match,
                  localStorage.getItem("inviteToken")
                );

                await this.authService.logout();
                localStorage.setItem("inviteToken", match.$args.invite);
              }
              this.authService.setInviteToken(match.$args.invite);
              this.router.navigate(["/login"], {
                queryParams: { invite: match.$args.invite },
              });
            }
            if (match && match.$link && match.$link.fragment === "/test-call") {
              return this.redirectToTestPage();
            } else if (
              match &&
              match.$link &&
              match.$link.fragment === "/await-consultation"
            ) {
              return this.redirectToAwaitConsultation();
            }

            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            console.log("Successfully matched route", match);
          },
          (nomatch) => {
            console.log("No match;", nomatch);
            if (!nomatch.$link) {
              return;
            }

            const serverUrl = nomatch.$link.url.replace(
              "hugathome://",
              "https://"
            );
            const parsedServerUrl = new URL(serverUrl);

            if (nomatch.$link.scheme == "hugathome") {
              this.globalVariableService.updateHost(
                "https://" + parsedServerUrl.host
              );
            }
            if (parsedServerUrl.searchParams.get("invite")) {
              this.authService.setInviteToken(
                parsedServerUrl.searchParams.get("invite")
              );
            }
          }
        );
      }

      console.log("router ", this.router, this.router.url);
      if (!this.testRoute) {
        this.redirectToLogin();
      }

      // this.autostart.enable();
      this.backgroundMode.setDefaults({
        title: "@HOME",
        text: "@HOME",
        silent: true,
        hidden: true,
        // icon: 'icon', // this will look for icon.png in platforms/android/res/drawable|mipmap
        // bigText: "@HOME"
      });
      this.backgroundMode.enable();

      // this.backgroundMode.overrideBackButton();

      // this.backgroundMode.on('activate').subscribe(() => {
      //   this.backgroundMode.disableWebViewOptimizations();
      //   cordova.plugins.backgroundMode.disableWebViewOptimizations();
      // });

      //   cordova.plugins.backgroundMode.on('activate', function() {
      //     cordova.plugins.backgroundMode.disableWebViewOptimizations();
      // });
      // this.backgroundMode.excludeFromTaskList();
      this.statusBar.styleLightContent();
      /**
      if (this.platform.is("ios") && this.platform.is("cordova")) {
        cordova.plugins.backgroundMode.on("enable", function () {
          cordova.plugins.backgroundMode.disableBatteryOptimizations();
          cordova.plugins.backgroundMode.disableWebViewOptimizations();
        });
      }
       */
      this.nativeAudio
        .preloadComplex("ringSound", "/assets/sounds/notification.mp3", 1, 1, 0)
        .then(
          (r) => {
            console.log("audio loaded ", r);
          },
          (err) => {
            console.log("error loading sample ", err);
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
