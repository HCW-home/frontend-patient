import { VideoRoomPageModule } from './../video-room/video-room.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ConsultationPage } from './consultation.page';
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: ConsultationPage
  }
];

@NgModule({
    imports: [
        IonicModule,
        FormsModule,
        CommonModule,
        SharedModule,
        TranslateModule,
        VideoRoomPageModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ConsultationPage]
})
export class ConsultationPageModule { }
