import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardChatRoutesService implements CanActivate {

  constructor(
    public authService:AuthService,
    public router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['/login'])
      return false
    }
    return true;
  }


}
