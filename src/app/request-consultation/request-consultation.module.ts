import {NgModule} from "@angular/core";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {RequestConsultationPage} from "./request-consultation.page";
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
    {
        path: "",
        component: RequestConsultationPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild({
            defaultLanguage: 'en'
        }),
        ReactiveFormsModule,
        DragDropModule,
        SharedModule,
    ],
    declarations: [RequestConsultationPage],
    exports: [RequestConsultationPage]

})
export class RequestConsultationModule {
}
