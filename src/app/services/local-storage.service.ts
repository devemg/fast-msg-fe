import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  keys = {
    USERID:'user-id',
    TOKEN: 'user-token'
  };

  constructor() { }

  /**
   * return user id saved in ls
   * @returns 
   */
  getUserID() {
    return '123';
  }

  /**
   * delete token saved
   */
  clearToken(){
    localStorage.removeItem(this.keys.TOKEN);
  }

}
