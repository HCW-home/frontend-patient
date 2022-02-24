import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// translate
import { I18nModule } from '../i18n/i18n.module';

import { DiagnosticPage } from './diagnostic.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticPage
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
  declarations: [DiagnosticPage]
})
export class DiagnosticPageModule {}
