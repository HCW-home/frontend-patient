import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// translate
import { I18nModule } from '../i18n/i18n.module';

import { VideoRoomPage } from './video-room.page';
// import { StreamComponent } from '../shared/components/stream/stream.component';
// import { OpenViduVideoComponent } from '../shared/components/stream/ov-video.component';
import { ChatComponent } from '../shared/components/chat/chat.component';

import { AngularDraggableModule } from 'angular2-draggable';

const routes: Routes = [
  {
    path: '',
    component: VideoRoomPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularDraggableModule,
        I18nModule,
        SharedModule
        // RouterModule.forChild(routes),
    ],
    declarations: [VideoRoomPage, ChatComponent,],
    exports: [VideoRoomPage, ChatComponent,]
})
export class VideoRoomPageModule { }
