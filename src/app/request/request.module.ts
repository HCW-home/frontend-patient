import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RequestPage } from './request.page';
import { SharedModule } from "../shared/shared.module";
import { MarkdownModule } from "ngx-markdown";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: RequestPage
  }
];

@NgModule({
    imports: [
        FormsModule,
        IonicModule,
        SharedModule,
        CommonModule,
        TranslateModule,
        MarkdownModule.forRoot(),
        RouterModule.forChild(routes),
    ],
  declarations: [RequestPage]
})
export class RequestPageModule { }
