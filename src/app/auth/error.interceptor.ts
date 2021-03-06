import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      console.log('error with request ...............................', err);

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
      console.log('error ', err);
      return throwError(err);
    }));
  }
}
