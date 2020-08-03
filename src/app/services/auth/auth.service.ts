import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('userTk');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getDecodedToken(token: string): any {
    let payload = this.jwtHelper.decodeToken(token);
    return payload.sub;
  }


}