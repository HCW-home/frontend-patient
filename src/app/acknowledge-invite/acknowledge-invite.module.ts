import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AcknowledgeInviteComponent } from './acknowledge-invite.component';

import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: AcknowledgeInviteComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    CommonModule,
    SharedModule,
    TranslateModule.forChild({
      defaultLanguage: 'en'
    }),
    RouterModule.forChild(routes),
  ],
  declarations: [AcknowledgeInviteComponent]
})
export class AcknowledgeInviteModule { }
