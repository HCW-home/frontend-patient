import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {InviteService} from "../invite.service";

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
        private activatedRoute: ActivatedRoute,
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
