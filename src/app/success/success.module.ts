import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { I18nModule } from '../i18n/i18n.module';
import { SuccessPage} from "./success.page";

const routes: Routes = [
  {
    path: '',
    component: SuccessPage
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
  declarations: [SuccessPage]
})
export class SuccessModule { }
