import { SharedModule } from './shared/shared.module';
import { TestModule } from './test/test.module';
import { PeerAudioComponent } from './shared/components/stream/peer-audio/peer-audio.component';
import { PeerVideoComponent } from './shared/components/stream/peer-video/peer-video.component';
import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { VideoRoomPageModule } from './video-room/video-room.module';
import { AngularDraggableModule } from 'angular2-draggable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { VideoRoomPageModule } from './video-room/video-room.module';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Media } from '@ionic-native/media/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';

import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Network } from '@ionic-native/network/ngx';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { registerLocaleData } from '@angular/common';

// translate
import { I18nModule } from './i18n/i18n.module';

import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEn);


import { RequestConsultationComponent } from './shared/components/request-consultation/request-consultation.component';
import { CloseConsultationComponent } from './shared/components/close-consultation/close-consultation.component';
import { ChooseAttachmentComponent } from './shared/components/choose-attachment/choose-attachment.component';
import { ConfigService } from './config.service';
import { TranslatorFormComponent } from './login/translator-form/translator-form.component';
import { LoginPageModule } from './login/login.module';

import { HugAngularLibModule } from 'hug-angular-lib';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        VideoRoomPageModule,
        AngularDraggableModule,
        FormsModule,
        // VideoRoomPageModule, cordova plugin add cordova-plugin-background-mode
        // translate
        I18nModule,
        HugAngularLibModule,
        SharedModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        AndroidPermissions,
        FileChooser,
        File,
        Camera,
        Media,
        Downloader,
        BackgroundMode,
        NativeAudio,
        LocalNotifications,
        Network,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: (cs: ConfigService) => () => cs.getConfig(),
            deps: [ConfigService],
            multi: true
        }
    ],
    declarations: [
        AppComponent,
        RequestConsultationComponent,
        CloseConsultationComponent,
        ChooseAttachmentComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
