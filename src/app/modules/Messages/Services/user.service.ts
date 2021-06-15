import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  contactList: Contact[] = [];
  constructor() { }

  /**
   * Add contact in memory
   */
  addContact(contact: Contact){
    this.contactList.push(contact);
  }

  /**
   * remove contact in memory
   * @param id 
   */
  removeContact(id: string){
    let index = this.contactList.findIndex(element=>element._id == id); 
    if(index > -1){
      this.contactList.splice(index,1);
    }
  }

  /**
   * Return a list of contacts 
   * @returns 
   */
  getContacts(): Contact[] {
    return this.contactList;
  }

}
