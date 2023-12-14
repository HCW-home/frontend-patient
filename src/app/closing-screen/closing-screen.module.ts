import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { I18nModule } from '../i18n/i18n.module';
import { ClosingScreenPage } from './closing-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ClosingScreenPage
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
  declarations: [ClosingScreenPage]
})
export class ClosingScreenPageModule {}
