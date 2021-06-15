import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { RandomDataService } from './random-data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private randomService: RandomDataService) { }

  /**
   * Get random contacts to add
   */
  getCommunity(): Promise<Contact[]> {
    return new Promise((resolve,reject)=>{
      resolve(this.randomService.getContacts(5));
    })
  }

}
