import {PeerVideoComponent} from "./components/stream/peer-video/peer-video.component";
import {PeerAudioComponent} from "./components/stream/peer-audio/peer-audio.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {IonicModule} from "@ionic/angular";
import {FileDropDirective} from "./directives/file-drop.directive";
import {SelectLanguageComponent} from "./components/select-language/select-language.component";
import {ErrorModalComponent} from "./components/error-modal/error-modal.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MarkdownModule} from "ngx-markdown";
import {DurationPipe} from "./pipes/duration.pipe";
import {LinkifyPipe} from "./pipes/linkify.pipe";
import {TranslateModule} from "@ngx-translate/core";
import {WhatsappBrowserBannerComponent} from "./components/whatsapp-browser-banner/whatsapp-browser-banner.component";


@NgModule({
    declarations: [
        DurationPipe,
        LinkifyPipe,
        FooterComponent,
        HeaderComponent,
        FileDropDirective,
        PeerVideoComponent,
        PeerAudioComponent,
        ErrorModalComponent,
        SelectLanguageComponent,
        WhatsappBrowserBannerComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        MarkdownModule.forRoot()
    ],
    exports: [
        DurationPipe,
        LinkifyPipe,
        FooterComponent,
        HeaderComponent,
        FileDropDirective,
        PeerVideoComponent,
        PeerAudioComponent,
        ErrorModalComponent,
        SelectLanguageComponent,
        WhatsappBrowserBannerComponent,
    ]


})
export class SharedModule {
}
