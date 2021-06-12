import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

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

  }

}
