import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/auth.service";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-icrc',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage {
  showOpenIdLogin = true;
  openIdLoginUrl = `${environment.host}${environment.api}/login-openid`;
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private authService: AuthService,
      public configService: ConfigService) { }

  ionViewWillEnter() {
    const token =  this.route.snapshot.queryParams.tk;
    if (token) {
      this.authService
          .login(token)
          .pipe(first())
          .subscribe(
              (data) => {
                this.router.navigate(['/dashboard']);
              },
              (error) => {
                console.log('err')
              },
          );
    }
  }

  register() {
    this.router.navigate(["/register"])
  }

  login() {
    this.router.navigate(["/dashboard"])
  }

}
