import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {SocketEventsService} from "../socket-events.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private _socketEventsService: SocketEventsService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.statusText === "Unknown Error") {
                this._socketEventsService.updateConnectionStatus("connect_failed");
            }

            // if (err.url && err.url.indexOf('login-cert') >= 0) {

            // return throwError(err);

            // }
            // if (err.status === 401) {

            //   // auto logout if 401 response returned from api
            //   this.authService.logout();
            //   this.router.navigate(['/login']);
            //   //   alert("La session sur cet appareil n'est plus valide, l'application va redémarrer.")
            // }

            // const error = err.error.message || err.statusText;
            const refreshTokenEndpoint = "refresh-token";

            const currentUser = this.authService.currentUserValue;
            if (err.status === 401 && request.url.includes(refreshTokenEndpoint)) {
                this.authService.logOutNurse();
            }

            return throwError(err);
        }));
    }
}
