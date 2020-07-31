import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  getUserID(){
    return "5f13218c8cb953232d4c4af0";
  }

  getToken(){
    if (typeof(Storage) !== 'undefined') {
      var tk = localStorage.getItem('userTk')
      if(tk){
        return tk;
      }
    }
    return '';
  }

  setToken(tk){
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('userTk', tk.token)
    } 
  }

  clearToken(){
    if (typeof(Storage) !== 'undefined') {
      localStorage.removeItem('userTk')
    }
  }

}
