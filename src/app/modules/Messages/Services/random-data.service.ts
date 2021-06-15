import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { name, internet, datatype, image } from 'faker';
import { UserProfile } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class RandomDataService {


  constructor() { 
  }

  getContacts(qty: number): Contact[] {
    let list: Contact[] = [];
    for(let i = 0; i < qty; i++ ){
      list.push({
        _id: datatype.uuid(),
        image: image.avatar(),
        name: name.findName(),
        email: internet.email()
      });
    }
    return list;
  }

  getUser(): UserProfile {
    return {
      _id: datatype.uuid(),
      image: image.avatar(),
      name: name.findName(),
      email: internet.email(),
      password: internet.password()
    };
  }

}
