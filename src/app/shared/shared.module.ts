import { PeerVideoComponent } from './components/stream/peer-video/peer-video.component';
import { PeerAudioComponent } from './components/stream/peer-audio/peer-audio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PeerAudioComponent, PeerVideoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PeerAudioComponent, PeerVideoComponent
  ]
})
export class SharedModule { }
