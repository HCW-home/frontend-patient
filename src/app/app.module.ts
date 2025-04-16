import { SharedModule } from './shared/shared.module';
import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AngularDraggableModule } from 'angular2-draggable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { VideoRoomPageModule } from './video-room/video-room.module';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Media } from '@awesome-cordova-plugins/media/ngx';

import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { registerLocaleData } from '@angular/common';
import { RequestConsultationComponent } from './shared/components/request-consultation/request-consultation.component';
import { CloseConsultationComponent } from './shared/components/close-consultation/close-consultation.component';
import { ChooseAttachmentComponent } from './shared/components/choose-attachment/choose-attachment.component';
import { ConfigService } from './services/config.service';
import { HugAngularLibModule } from 'hcw-stream-lib';
import {CountrySelectPageModule} from "./register/country-select/country-select.module";

import {DEFAULT_LANGUAGES} from "./i18n/i18n.module";

import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEn);


@NgModule({
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        IonicModule.forRoot({
            platform: {
                /** The default `desktop` function returns false for devices with a touchscreen.
                 * This is not always wanted, so this function tests the User Agent instead.
                 **/
                "desktop": (win) => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
                    return !isMobile;
                }
            },
        }),
        AppRoutingModule,
        HttpClientModule,
        VideoRoomPageModule,
        AngularDraggableModule,
        FormsModule,
        HugAngularLibModule,
        SharedModule,
        CountrySelectPageModule,

    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        AndroidPermissions,
        File,
        Camera,
        Media,
        NativeAudio,
        LocalNotifications,
        Network,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: "fr-FR"},
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: (configService: ConfigService, translateService: TranslateService) => () => configService.getConfig().toPromise().then(appConfig => {
                const dynamicLanguages = appConfig?.patientLanguages?.length
                    ? appConfig.patientLanguages
                    : DEFAULT_LANGUAGES;

                translateService.addLangs(dynamicLanguages);

                const savedLang = localStorage.getItem('hhp-lang');
                const browserLang = translateService.getBrowserLang();
                const defaultLang = savedLang && dynamicLanguages.includes(savedLang)
                    ? savedLang
                    : dynamicLanguages.includes(browserLang)
                        ? browserLang
                        : dynamicLanguages[0];

                translateService.setDefaultLang(defaultLang);
                translateService.use(defaultLang);
            }),
            deps: [ConfigService, TranslateService],
            multi: true
        },
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
    bootstrap: [AppComponent],
})
export class AppModule { }
