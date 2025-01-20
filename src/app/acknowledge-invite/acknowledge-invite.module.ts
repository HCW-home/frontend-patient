import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AcknowledgeInviteComponent } from './acknowledge-invite.component';

import { Routes, RouterModule } from '@angular/router';
import { I18nModule } from '../i18n/i18n.module';

const routes: Routes = [
  {
    path: '',
    component: AcknowledgeInviteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild(routes),
    I18nModule,
    SharedModule
  ],
  declarations: [AcknowledgeInviteComponent]
})
export class AcknowledgeInviteModule { }
