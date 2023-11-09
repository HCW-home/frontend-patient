import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { I18nModule } from '../i18n/i18n.module';
import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    I18nModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage]
})
export class RegisterModule { }
