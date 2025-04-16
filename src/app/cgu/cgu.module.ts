import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from "ngx-markdown";

import { IonicModule } from '@ionic/angular';
import { CguPage } from './cgu.page';
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: CguPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule,
        MarkdownModule.forRoot(),
        SharedModule
    ],
  declarations: [CguPage]
})
export class CguPageModule {}
