import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

import {CountrySelectPage} from './country-select.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        IonicModule,
        FormsModule,
        CommonModule,
        BrowserModule,
        TranslateModule.forChild({
            defaultLanguage: 'en'
        }),
        ReactiveFormsModule,
    ],
    declarations: [
        CountrySelectPage
    ]
})
export class CountrySelectPageModule {
}
