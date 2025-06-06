import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {SocketEventsService} from "../services/socket-events.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private _socketEventsService: SocketEventsService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.statusText === "Unknown Error") {
                this._socketEventsService.updateConnectionStatus("connect_failed");
            }

            const refreshTokenEndpoint = "/refresh-token";

            if (err.status === 401 && request.url.includes(refreshTokenEndpoint)) {
                this.authService.logOutNurse();
            }

            return throwError(err);
        }));
    }
}
