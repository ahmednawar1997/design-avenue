import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthFilter implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate = (route: ActivatedRouteSnapshot) => {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}