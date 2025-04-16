import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en'
    }),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RegisterPage]
})
export class RegisterModule { }
