import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// translate
import { I18nModule } from '../i18n/i18n.module';

import { DashboardPage } from './dashboard.page';
import {HeaderComponent} from "../shared/components/header/header.component";
import {OverlayComponent} from "../shared/components/overlay/overlay.component";
import {ConsultationPageModule} from "../consultation/consultation.module";
import {ConsultationChatComponent} from "../shared/components/consultation-chat/consultation-chat.component";
import {VideoRoomPageModule} from "../video-room/video-room.module";
import {FeedbackComponent} from "../shared/components/feedback/feedback.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
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
    declarations: [DashboardPage, HeaderComponent,OverlayComponent, ConsultationChatComponent,FeedbackComponent],
    exports: [DashboardPage, HeaderComponent,OverlayComponent,ConsultationChatComponent, FeedbackComponent]

})
export class DashboardPageModule { }
