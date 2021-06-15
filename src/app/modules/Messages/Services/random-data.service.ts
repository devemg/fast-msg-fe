import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Chance } from 'chance';
@Injectable({
  providedIn: 'root'
})
export class RandomDataService {


  constructor() { 
  }

  getContacts(qty: number): Contact[] {
    let chance = new Chance();;
    let list: Contact[] = [];
    for(let i = 0; i < qty; i++ ){
      list.push({
        _id: chance.guid(),
        image: chance.avatar(),
        name: chance.name({ nationality : 'en' }),
        email: chance.email({domain:'fastmessages.com'})
      });
    }
    return list;
  }

}
