import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(
    private authService:AuthService
  ) { }

  getUserID() {
    let id =this.authService.getDecodedToken(this.getToken())
    console.log(id)
    return id;
  }

  setToken(tk) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem('userTk', tk.token)
    }
  }

  clearToken() {
    if (typeof (Storage) !== 'undefined') {
      localStorage.removeItem('userTk')
    }
  }

  getToken(){
    if (typeof (Storage) !== 'undefined') {
      return localStorage.getItem('userTk')
    }
    return '';
  }

}