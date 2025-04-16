import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoRoomPage } from './video-room.page';
import { ChatComponent } from '../shared/components/chat/chat.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularDraggableModule,
        TranslateModule.forChild({
            defaultLanguage: 'en'
        }),
        SharedModule,
        AngularDraggableModule,
    ],
    declarations: [VideoRoomPage, ChatComponent,],
    exports: [VideoRoomPage, ChatComponent,]
})
export class VideoRoomPageModule { }
