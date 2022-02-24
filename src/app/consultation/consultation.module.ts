import { VideoRoomPageModule } from './../video-room/video-room.module';
import { VideoRoomPage } from './../video-room/video-room.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// translate
import { I18nModule } from '../i18n/i18n.module';

import { ConsultationPage } from './consultation.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    I18nModule,
    VideoRoomPageModule

  ],
  declarations: [ConsultationPage],
  entryComponents: [ConsultationPage]
})
export class ConsultationPageModule { }
