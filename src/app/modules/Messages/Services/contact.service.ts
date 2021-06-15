import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Contact } from '../models/contact';
import { RandomDataService } from './random-data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private randomService: RandomDataService, private localService: LocalStorageService) { }

  /**
   * Get random contacts to add
   */
  getCommunity(): Promise<Contact[]> {
    return new Promise((resolve,reject)=>{
      resolve(this.randomService.getContacts(5));
    })
  }

  /**
   * add contact to list of user in memory
   * @param contact 
   */
  addContact(contact: Contact): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.localService.addContact(contact);
      resolve({});
    });
  }

  /**
   * remove contact from user list in memory
   */
  removeContact(id: string):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.localService.removeContact(id);
      resolve({});
    });
  }

  /**
   * get contact list from memory
   * @returns 
   */
  getContactsFromUser(): Promise<Contact[]>{
    return new Promise((resolve,reject)=>{
      resolve(this.localService.getContacts());
    });
  }
  
}
