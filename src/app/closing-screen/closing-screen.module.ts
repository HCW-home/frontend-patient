import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ClosingScreenPage } from './closing-screen.page';
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: ClosingScreenPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
TranslateModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ClosingScreenPage]
})
export class ClosingScreenPageModule {}
