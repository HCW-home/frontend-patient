import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// translate
import { I18nModule } from '../i18n/i18n.module';

import { ConsultationsPage } from './consultations.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    I18nModule
  ],
  declarations: [ConsultationsPage]
})
export class ConsultationsPageModule { }
