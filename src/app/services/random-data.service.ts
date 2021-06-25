import { Injectable } from '@angular/core';
import { UserProfile } from '../modules/Messages/models/user';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  constructor() { }

  /**
   * Get user data
   * @returns 
   */
    getUser(): UserProfile {
    return {
      _id: 'datatype.uuid()',
      image: 'image.avatar()',
      name: 'name.findName()',
      email: 'internet.email()'
    };
  }

  /**
   * return random UUID
   * @returns 
   */
   getId(){
    return 'datatype.uuid()';
  }
}
