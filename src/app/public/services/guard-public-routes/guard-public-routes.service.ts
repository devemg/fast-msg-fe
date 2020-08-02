import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardPublicRoutesService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/chat'])
      return false;
    }
    return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/chat'])
      return false;
    }
    return true;
  }
}
