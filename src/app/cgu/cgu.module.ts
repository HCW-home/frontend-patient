import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from "ngx-markdown";

import { IonicModule } from '@ionic/angular';
import { I18nModule } from '../i18n/i18n.module';
import { CguPage } from './cgu.page';
import {SharedModule} from "../shared/shared.module";

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
        I18nModule,
        MarkdownModule.forRoot(),
        SharedModule
    ],
  declarations: [CguPage]
})
export class CguPageModule {}
