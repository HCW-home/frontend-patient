import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import {catchError, switchMap, filter, take, finalize} from "rxjs/operators";
import { AuthService } from "./auth.service";
import {SocketEventsService} from "../services/socket-events.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private authService: AuthService,
                private socketEventsService: SocketEventsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
            'locale': localStorage.getItem('hhp-lang') || 'en'
        };

        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            headersConfig["x-access-token"] = currentUser.token;
            if (this.authService.currentInviteToken) {
                headersConfig["inviteToken"] = this.authService.currentInviteToken;
            }
        }

        request = request.clone({
            setHeaders: headersConfig,
        });

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    return this.handle401Error(request, next);
                }
                return throwError(error);
            }),
            finalize(() => {
                this.isRefreshing = false;
            })
        );
    }

    private addAuthenticationToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
        const headersConfig = {
            'locale': localStorage.getItem('hhp-lang') || 'en',
            "x-access-token": token
        };
        return request.clone({ setHeaders: headersConfig });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshTokens().pipe(
                switchMap((tokens) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(tokens.token);

                    const user = this.authService.currentUserValue;
                    user.token = tokens.token;
                    user.refreshToken = tokens.refreshToken;
                    this.authService.currentUserSubject.next(user);
                    this.socketEventsService.init(user, () => {
                    });

                    return next.handle(this.addAuthenticationToken(request, tokens.token));
                }),
                catchError((refreshError: HttpErrorResponse) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.error(refreshError);
                    if (refreshError.status === 401) {
                        this.authService.logOutNurse();
                    }
                    return throwError(refreshError);
                })
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter(token => token != null),
                take(1),
                switchMap(accessToken => {
                    return next.handle(this.addAuthenticationToken(request, accessToken));
                }),
                catchError((error) => {
                    return throwError(error);
                }),
                finalize(() => {
                    this.isRefreshing = false;
                })
            );
        }
    }
}
