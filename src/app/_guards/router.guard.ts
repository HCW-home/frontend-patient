import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth/auth.service';

import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class RouterGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // not logged in so redirect to login page with the return url

        return of(true);
    }
}
