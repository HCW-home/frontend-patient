import {PeerVideoComponent} from "./components/stream/peer-video/peer-video.component";
import {PeerAudioComponent} from "./components/stream/peer-audio/peer-audio.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {IonicModule} from "@ionic/angular";
import {FileDropDirective} from "./directives/file-drop.directive";
import {SelectLanguageComponent} from "./components/select-language/select-language.component";
import {I18nModule} from "../i18n/i18n.module";
import {ErrorModalComponent} from "./components/error-modal/error-modal.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MarkdownModule} from "ngx-markdown";


@NgModule({
    declarations: [PeerAudioComponent, PeerVideoComponent, HeaderComponent, FileDropDirective, SelectLanguageComponent,FooterComponent, ErrorModalComponent],
    imports: [
        CommonModule,
        IonicModule,
        I18nModule,
        MarkdownModule.forRoot()
    ],
    exports: [
        PeerAudioComponent, PeerVideoComponent, HeaderComponent, FileDropDirective, SelectLanguageComponent, ErrorModalComponent, FooterComponent
    ]


})
export class SharedModule {
}
