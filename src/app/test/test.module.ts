import { SharedModule } from './../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";


const routes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    SharedModule,
    CommonModule,
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en'
    }),
    RouterModule.forChild(routes),
  ],
  declarations: [TestComponent]
})
export class TestModule { }
