import {Component, OnInit, Input} from "@angular/core";
import {ConsultationService} from "../../../services/consultation.service";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../../auth/auth.service";


@Component({
    selector: "app-close-consultation",
    templateUrl: "./close-consultation.component.html",
    styleUrls: ["./close-consultation.component.scss"],
})
export class CloseConsultationComponent implements OnInit {
    @Input() consultationId;

    htmlString: string;

    constructor(
        private consultationService: ConsultationService,
        private router: Router,
        private translate: TranslateService,
        public modalController: ModalController,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.htmlString = this.translate.instant("closeConsultation.youAreAboutTo");
    }

    closeConsultation() {
        const currentUser = this.authService.currentUserValue;
        this.consultationService
            .deleteConsultation(this.consultationId)
            .subscribe((res) => {
                localStorage.removeItem("currentConsultation");
                if (currentUser.role === "nurse" || currentUser.role === 'admin') {
                    this.router.navigate(["/dashboard"]);

                } else {
                    localStorage.removeItem("currentUser");
                    this.router.navigate(["/login"]);
                }
                this.modalController.dismiss(true);
            });
    }

    dismiss() {
        this.modalController.dismiss();
    }
}
