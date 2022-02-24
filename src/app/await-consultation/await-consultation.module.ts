import { I18nModule } from './../i18n/i18n.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AwaitConsultationPage } from './await-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: AwaitConsultationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    I18nModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AwaitConsultationPage]
})
export class AwaitConsultationPageModule { }
