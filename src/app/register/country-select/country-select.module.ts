import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

import {CountrySelectPage} from './country-select.page';
import {I18nModule} from "../../i18n/i18n.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        I18nModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [
        CountrySelectPage
    ]
})
export class CountrySelectPageModule {
}
