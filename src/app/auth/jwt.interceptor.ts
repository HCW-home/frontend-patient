import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment'
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
        private translate: TranslateService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('add local header ', this.translate.currentLang)
        request = request.clone({
            setHeaders: {
                'locale': this.translate.currentLang || 'fr'
            }
        })

        // add authorization header with jwt token if available
        let currentUser = this.authService.currentUserValue;
        console.log("CURRENT USER", currentUser);
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    "x-access-token": `${currentUser.token}`,
                    "inviteToken": `${this.authService.currentInviteToken}`
                }
            });
        }

        return next.handle(request);
    }
}
