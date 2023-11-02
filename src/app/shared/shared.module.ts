import { PeerVideoComponent } from './components/stream/peer-video/peer-video.component';
import { PeerAudioComponent } from './components/stream/peer-audio/peer-audio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {IonicModule} from "@ionic/angular";
import {FileDropDirective} from "./directives/file-drop.directive";



@NgModule({
  declarations: [PeerAudioComponent, PeerVideoComponent, HeaderComponent,FileDropDirective],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PeerAudioComponent, PeerVideoComponent, HeaderComponent,FileDropDirective
  ]
})
export class SharedModule { }
