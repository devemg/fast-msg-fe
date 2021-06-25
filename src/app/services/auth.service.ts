import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { RandomDataService } from './random-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localservice: LocalStorageService, private randomService: RandomDataService) { }

  /**
   * CLose the sesion
   */
  logout(){
    this.localservice.removeUserID();
    this.localservice.removeUserToken();
  }

  /**
   * login user and save token
   * @param email 
   * @param password 
   * @returns 
   */
  login(email:string, password:string): Promise<any> {
    console.log(email,password)
    return new Promise((resolve,reject)=>{
      if(email == 'invitado@fastmessages.com' && password == "fastmessages"){
        let token = {token: this.randomService.getId() };
        this.localservice.setUserToken(token.token);
        resolve(token);
      }else {
        reject({error:'Credenciales incorrectas',status:400});
      }
    });  
  }

  /**
   * return if the user is authenticated
   */
  isAuth():boolean{
    return this.localservice.getUserToken() != null;
  }

}
