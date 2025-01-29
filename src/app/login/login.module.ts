import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {IonicModule} from "@ionic/angular";

// translate
import {I18nModule} from "../i18n/i18n.module";

import {LoginPage} from "./login.page";
import {TranslatorFormComponent} from "./translator-form/translator-form.component";
import {SharedModule} from "../shared/shared.module";
import {MarkdownModule} from "ngx-markdown";

const routes: Routes = [
    {
        path: "",
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
        SharedModule,
        MarkdownModule.forRoot()
    ],

    declarations: [
        LoginPage,
        TranslatorFormComponent
    ],
    exports: [
        TranslatorFormComponent
    ]
})
export class LoginPageModule {
}
