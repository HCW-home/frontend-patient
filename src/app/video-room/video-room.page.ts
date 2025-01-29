import { AuthService } from "../auth/auth.service";
import { OpenViduService } from "../shared/services/openvidu.service";
import {
  Stream,
  LogService,
  RoomService,
  RemotePeersService,
} from "hcw-stream-lib";
import { OpenViduLayout } from "../shared/layout/openvidu-layout";
import { Subscription } from "rxjs";

import { Component, OnInit, OnDestroy, HostListener, EventEmitter, Output, Input, NgZone } from "@angular/core";

import { Platform } from "@ionic/angular";
import { NativeAudio } from '@capacitor-community/native-audio'


import {
  trigger,
  keyframes,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import {ConfigService} from "../config.service";

declare let window: any;

export interface Device {
  /**
   * `"videoinput"`, `"audioinput"`
   */
  kind: string;

  /**
   * Unique ID for the device. Use it on `audioSource` or `videoSource` properties of [[PublisherProperties]]
   */
  deviceId: string;

  /**
   * Description of the device. An empty string if the user hasn't granted permissions to the site to access the device
   */
  label: string;
}

@Component({
  selector: "app-video-room",
  templateUrl: "./video-room.page.html",
  styleUrls: ["./video-room.page.scss"],
  animations: [
    trigger("slideLeftRight", [
      state(
        "in",
        style({
          transform: "translateX(0px)",
        })
      ),
      state(
        "out",
        style({
          transform: "translateX(100px)",
        })
      ),
      transition(
        "in => out",
        animate(
          "200ms",
          keyframes([
            style({ transform: "translateX(100px)", display: "none" }),
          ])
        )
      ),
      transition(
        "out => in",
        animate("200ms", keyframes([style({ transform: "translateX(0px)" })]))
      ),
    ]),
    trigger("slideLeftRightChat", [
      state(
        "in",
        style({
          transform: "translateX(0px)",
        })
      ),
      state(
        "out",
        style({
          transform: "translateX(100px)",
        })
      ),
      transition(
        "in => out",
        animate(
          "200ms",
          keyframes([
            style({ transform: "translateX(100px)", display: "none" }),
          ])
        )
      ),
      transition(
        "out => in",
        animate("200ms", keyframes([style({ transform: "translateX(0px)" })]))
      ),
    ]),
    trigger("slideTopBottom", [
      state(
        "in",
        style({
          transform: "translateY(0px)",
        })
      ),
      state(
        "out",
        style({
          transform: "translateY(100px)",
        })
      ),
      transition(
        "in => out",
        animate(
          "200ms",
          keyframes([
            style({ transform: "translateY(100px)", display: "none" }),
          ])
        )
      ),
      transition(
        "out => in",
        animate("200ms", keyframes([style({ transform: "translateY(0px)" })]))
      ),
    ]),
  ],
})
export class VideoRoomPage implements OnInit, OnDestroy {

   remoteUsers = [];
  resizeTimeout;
  bigElement;
  consultation;

  @Output() hangup = new EventEmitter<boolean>();
  isFullScreen = true;

  rejected;
  @Input() message;
  @Input() sessionId: string;
  @Input() token: string;
  @Input() patient;
  @Input() audioOnly;
  @Input() user;
  @Input() videoDeviceId: string;
  @Input() audioDeviceId: string;
  reconnecting = false;
  @Input() accepted = false;
  openviduLayout;
  openviduLayoutOptions;
  subscriptions: Subscription[] = [];
  peerId;
  myCamStream: Stream;

  noWebCam;
  buttonsVisibility;

  videoDevices;
  firstCam;
  lastCam;
  currentVideoDevice;

  camStatus = "on";
  muteStatus: "on" | "off" = "on";

  videoAspectRatio = 1.777;

  constructor(
      public platform: Platform,
      private logger: LogService,
      private roomService: RoomService,
      private authService: AuthService,
      private openViduSrv: OpenViduService,
      public configService: ConfigService,
      private remotePeersService: RemotePeersService,
  ) {
    window.platform = platform;
  }

  @HostListener("window:beforeunload")
  beforeunloadHandler() {
    this.exitSession();
  }

  @HostListener("window:resize", ["$event"])
  sizeChange(event) {
    clearTimeout(this.resizeTimeout);
    this.updateLayout();
  }

  ngOnInit() {
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
    NativeAudio.stop({assetId: 'ringSound'}).then();
    this.askForPerm()
      .then(() => {
        this.getDevices().then((devices) => {
          this.videoDevices = devices.filter(
            (device) => device.kind === "videoinput"
          );

          if (this.videoDevices.length) {
            this.firstCam = this.videoDevices[0].deviceId;
            this.lastCam =
              this.videoDevices[this.videoDevices.length - 1].deviceId;
            this.currentVideoDevice = this.firstCam;
          } else {
            this.currentVideoDevice = null;
          }

          this.roomService.init({ peerId: this.peerId });

          this.roomService.join({
            roomId: this.sessionId,
            joinVideo: this.message.type !== "audioCall",
            joinAudio: true,
            token: this.token,
          });

          this.subscriptions.push(
            this.roomService.onCamProducing.subscribe((stream) => {
              this.logger.debug("Cam producing ", stream);

              this.myCamStream = { ...stream };
            })
          );
          this.subscriptions.push(
            this.remotePeersService.remotePeers.subscribe((peers) => {
              this.remoteUsers = [];
              this.logger.debug("got remote peers ", peers);
              peers.forEach((p) => {
                this.remoteUsers.push({ ...p });
              });
              setTimeout(() => {
                this.updateLayout();
              }, 100);
            })
          );
          this.openviduLayout = new OpenViduLayout();
          this.openviduLayoutOptions = {
            maxRatio: 3 / 2, // The narrowest ratio that will be used (default 2x3)
            minRatio: 9 / 16, // The widest ratio that will be used (default 16x9)
            fixedRatio:
              false /* If this is true then the aspect ratio of the video is maintained
        and minRatio and maxRatio are ignored (default false)*/,
            bigClass: "OV_big", // The class to add to elements that should be sized bigger
            bigPercentage: 0.9, // The maximum percentage of space the big ones should take up
            bigFixedRatio: false, // fixedRatio for the big ones
            bigMaxRatio: 3 / 2, // The narrowest ratio to use for the big elements (default 2x3)
            bigMinRatio: 9 / 16, // The widest ratio to use for the big elements (default 16x9)
            bigFirst: false, // Whether to place the big one in the top left (true) or bottom right
            animate: true, // Whether you want to animate the transitions
          };

          this.openViduSrv
            .acceptCall(this.sessionId, this.message.id)
            .then((res) => {
              this.logger.debug("call accepted");
            })
            .catch(this.logger.error);

          this.openviduLayout.initLayoutContainer(
            document.getElementById("layout"),
            this.openviduLayoutOptions
          );
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

  exitSession(rejoin?) {
    this.remoteUsers = [];

    this.openviduLayout = null;

    if (rejoin) {
      return this.joinToSession();
    } else {
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

  private connect(token: string): void {}

  private connectWebCam(): void {}

  private updateLayout() {
    this.resizeTimeout = setTimeout(() => {
      if (!this.openviduLayout) {
        return;
      }
      this.openviduLayout.updateLayout();
    }, 20);
  }

  rejectCall() {
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
      .rejectCall(this.sessionId || this.consultation?._id || this.consultation?.id, this.message.id)
      .then((r) => {})
      .catch((err) => {
        console.log("error ", err);
      });
  }

  toggleButtons() {}

  camStatusChanged() {
    if (this.camStatus === "on") {
      this.roomService.disableWebcam();
      this.camStatus = "off";
    } else {
      this.roomService.updateWebcam({ start: true });
      this.camStatus = "on";
    }
  }

  muteStatusChanged() {
    if (this.muteStatus === "on") {
      this.roomService.muteMic();
      this.muteStatus = "off";
    } else {
      this.roomService.unmuteMic();
      this.muteStatus = "on";
    }
  }


  askForPerm() {
    this.logger.debug("Ask for video permissions ");

    // if (this.platform.is("cordova") && this.platform.is("android")) {
    //   return this.checkAndroidPermissions();
    // }
    const {
      sampleRate = 96000,
      channelCount = 1,
      volume = 1.0,
      sampleSize = 16,
      opusStereo = false,
      opusDtx = true,
      opusFec = true,
      opusPtime = 20,
      opusMaxPlaybackRate = 96000,
    } = {};
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
  getDevices(): Promise<Device[]> {
    return new Promise<Device[]>((resolve, reject) => {
      navigator.mediaDevices
        .enumerateDevices()
        .then((deviceInfos) => {
          const devices: Device[] = [];

          // Ionic Android  devices
          if (
            this.platform.is("cordova") && 
            this.platform.is("android") &&
            window.cordova &&
            window.cordova.plugins &&
            (window.cordova.plugins as any).EnumerateDevicesPlugin
          ) {
            (
              window.cordova.plugins as any
            ).EnumerateDevicesPlugin.getEnumerateDevices().then(
              (pluginDevices: Device[]) => {
                let pluginAudioDevices: Device[] = [];
                let videoDevices: Device[] = [];
                let audioDevices: Device[] = [];
                pluginAudioDevices = pluginDevices.filter(
                  (device: Device) => device.kind === "audioinput"
                );
                videoDevices = deviceInfos.filter(
                  (device: Device) => device.kind === "videoinput"
                );
                audioDevices = deviceInfos.filter(
                  (device: Device) => device.kind === "audioinput"
                );
                videoDevices.forEach((deviceInfo, index) => {
                  if (!deviceInfo.label) {
                    let label = "";
                    if (index === 0) {
                      label = "Front Camera";
                    } else if (index === 1) {
                      label = "Back Camera";
                    } else {
                      label = "Unknown Camera";
                    }
                    devices.push({
                      kind: deviceInfo.kind,
                      deviceId: deviceInfo.deviceId,
                      label: label,
                    });
                  } else {
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
                        const defaultMatch = pluginAudioDevices.filter((d) =>
                          d.label.includes("Built")
                        )[0];
                        label = defaultMatch
                          ? defaultMatch.label
                          : "Built-in Microphone";
                        break;
                      case 2: // Headset Microphone
                        const wiredMatch = pluginAudioDevices.filter((d) =>
                          d.label.includes("Wired")
                        )[0];
                        if (wiredMatch) {
                          label = wiredMatch.label;
                        } else {
                          label = "Headset earpiece";
                        }
                        break;
                      case 3:
                        const wirelessMatch = pluginAudioDevices.filter((d) =>
                          d.label.includes("Bluetooth")
                        )[0];
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
                  } else {
                    devices.push({
                      kind: deviceInfo.kind,
                      deviceId: deviceInfo.deviceId,
                      label: deviceInfo.label,
                    });
                  }
                });
                resolve(devices);
              }
            );
          } else {
            // Rest of platforms
            deviceInfos.forEach((deviceInfo) => {
              if (
                deviceInfo.kind === "audioinput" ||
                deviceInfo.kind === "videoinput"
              ) {
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
    if (this.currentVideoDevice === this.firstCam) {
      this.currentVideoDevice = this.lastCam;
    } else {
      this.currentVideoDevice = this.firstCam;
    }

    this.roomService
      .updateWebcam({ restart: true, newDeviceId: this.currentVideoDevice })
      .then(() => {})
      .catch((error) => {
        console.error("Error updating devices", error);
      });
  }
}
