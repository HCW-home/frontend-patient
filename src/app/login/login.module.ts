import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// translate
import { I18nModule } from '../i18n/i18n.module';
import { SelectLanguageComponent } from '../select-language/select-language.component';

import { LoginPage } from './login.page';
import { TranslatorFormComponent } from './translator-form/translator-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    I18nModule,
    ReactiveFormsModule,
    FormsModule,

  ],

  declarations: [
    LoginPage,
    SelectLanguageComponent,
    TranslatorFormComponent
  ],
  exports:[
    TranslatorFormComponent
  ]
})
export class LoginPageModule { }
