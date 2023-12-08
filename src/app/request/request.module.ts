import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { I18nModule } from '../i18n/i18n.module';
import { RequestPage } from './request.page';
import {SharedModule} from "../shared/shared.module";
import {MarkdownModule} from "ngx-markdown";

const routes: Routes = [
  {
    path: '',
    component: RequestPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        I18nModule,
        SharedModule,
        MarkdownModule.forRoot()
    ],
  declarations: [RequestPage]
})
export class RequestPageModule { }
