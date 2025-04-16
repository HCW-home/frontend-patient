import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { OverlayComponent } from "../shared/components/overlay/overlay.component";
import { ConsultationChatComponent } from "../shared/components/consultation-chat/consultation-chat.component";
import { VideoRoomPageModule } from "../video-room/video-room.module";
import { FeedbackComponent } from "../shared/components/feedback/feedback.component";
import { LoaderComponent } from "../shared/components/loader/loader.component";
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
    imports: [
        IonicModule,
        FormsModule,
        SharedModule,
        CommonModule,
        TranslateModule.forChild({
            defaultLanguage: 'en'
        }),
        VideoRoomPageModule,
        RouterModule.forChild(routes),
    ],
    declarations: [DashboardPage, OverlayComponent, ConsultationChatComponent,FeedbackComponent, LoaderComponent],
    exports: [DashboardPage, OverlayComponent,ConsultationChatComponent, FeedbackComponent, LoaderComponent]

})
export class DashboardPageModule { }
