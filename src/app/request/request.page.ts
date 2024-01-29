import {Component, OnInit} from "@angular/core";
import {ConfigService} from "../config.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {first} from "rxjs/operators";
import {NurseService} from "../shared/services/nurse.service";

@Component({
    selector: "app-request",
    templateUrl: "./request.page.html",
    styleUrls: ["./request.page.scss"],
})
export class RequestPage implements OnInit {
    openIdLoginUrl = `${environment.host}${environment.api}/login-openid?role=nurse`;
    returnUrl: string;
    markdownExists: boolean = false;
    markdownUrl: string = 'assets/requester.md';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private nurseService: NurseService,
        private authService: AuthService,
        public configService: ConfigService) {
    }

    ngOnInit() {
        this.nurseService.checkMarkdownExists(this.markdownUrl).subscribe({
         next: (res) => {
             this.markdownExists = true;
         }, error: (err) => {
                this.markdownExists = false;
            }
        })
    }

    ionViewWillEnter() {
        const token = this.route.snapshot.queryParams.tk;
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/dashboard";
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            this.router.navigate([this.returnUrl]);
        }
        if (token) {
            this.authService
                .login(token)
                .pipe(first())
                .subscribe(
                    (data) => {
                        this.router.navigate(["/dashboard"]);
                    },
                    (error) => {
                        console.log("err", error);
                    },
                );
        }
    }

    register() {
        this.router.navigate(["/register"]);
    }

}
