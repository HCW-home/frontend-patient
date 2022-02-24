import { SharedModule } from './../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

// translate
import { I18nModule } from '../i18n/i18n.module';

const routes: Routes = [
  {
    path: '',
    component: TestComponent
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
  declarations: [TestComponent]
})
export class TestModule { }
