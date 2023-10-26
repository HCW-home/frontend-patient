import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// translate
import { I18nModule } from '../i18n/i18n.module';

import { DashboardPage } from './dashboard.page';
import {HeaderComponent} from "../shared/components/header/header.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        I18nModule,

    ],
    declarations: [DashboardPage, HeaderComponent,],
    exports: [DashboardPage, HeaderComponent,]

})
export class DashboardPageModule { }
