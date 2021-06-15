import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { name, internet, random, image } from 'faker';
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
        _id: random.uuid(),
        image: image.avatar(),
        name: name.findName(),
        email: internet.email()
      });
    }
    return list;
  }

}
