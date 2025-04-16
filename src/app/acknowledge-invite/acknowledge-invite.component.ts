import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {InviteService} from "../services/invite.service";
import {ConfigService} from "../services/config.service";
import {LanguageService} from "../shared/services/language.service";

@Component({
    selector: "app-acknowledge-invite",
    templateUrl: "./acknowledge-invite.component.html",
    styleUrls: ["./acknowledge-invite.component.scss"],
})
export class AcknowledgeInviteComponent implements OnInit {
    success = false;
    error = false;

    constructor(
        private router: Router,
        private inviteService: InviteService,
        private configService: ConfigService,
        private activatedRoute: ActivatedRoute,
        private languageService: LanguageService,
    ) {
        const inviteToken = this.activatedRoute.snapshot.paramMap.get(
            'inviteToken',
        ) as string;

        if (inviteToken) {
            this.getAcknowledgementStatus(inviteToken);
        } else {
            this.router.navigate(['/login']);
        }
    }


    ngOnInit() {
    }

    getAcknowledgementStatus(token: string| null) {
        if (token) {
            this.inviteService.getAcknowledgementStatus(token).subscribe({
                next: (res) => {
                    if (this.configService?.config?.forcePatientLanguage && res?.patientLanguage) {
                        this.languageService.switchLanguage(res.patientLanguage);
                    }
                    if (res.requiresAcknowledgment) {
                        const body = {
                            inviteToken: token
                        }
                        this.success = true;
                        this.inviteService.acknowledgeInvite(body).subscribe({
                            next: () => {
                            },
                            error: () => {
                                this.error = true;
                            }
                        });
                    } else {
                        this.error = true;
                    }
                }, error: (err) => {
                    this.error = true;
                }
            })

        }
    }

    testCall() {
        this.router.navigate([`/test-call`]);
    }

}
