import {Component} from "@angular/core";
import {ConfigService} from "../config.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {first} from "rxjs/operators";

@Component({
    selector: "app-request",
    templateUrl: "./request.page.html",
    styleUrls: ["./request.page.scss"],
})
export class RequestPage {
    showOpenIdLogin = true;
    openIdLoginUrl = `${environment.host}${environment.api}/login-openid?role=nurse`;
    returnUrl: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        public configService: ConfigService) {
    }

    ionViewWillEnter() {
        const token = this.route.snapshot.queryParams.tk;
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/dashboard";
        if (this.authService.currentUserValue) {
            this.router.navigateByUrl(this.returnUrl);
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
