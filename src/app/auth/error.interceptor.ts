import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AuthService} from "./auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            // A failed REST request (status 0 / "Unknown Error") does NOT mean the
            // WebSocket is down. Flagging it as a socket "connect_failed" showed the
            // misleading "connection lost / you can no longer receive consultations"
            // banner while the socket was still connected. The banner is now driven
            // solely by real socket events (see SocketEventsService).

            const refreshTokenEndpoint = "/refresh-token";

            if (err.status === 401 && request.url.includes(refreshTokenEndpoint)) {
                this.authService.logOutNurse();
            }

            return throwError(err);
        }));
    }
}
