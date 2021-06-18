import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Chat } from '../models/chat';
import { ChatPreview } from '../models/chat-preview';
import { Contact } from '../models/contact';
import { RandomDataService } from './random-data.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  
  constructor(private randomService: RandomDataService, private localService: LocalStorageService) { }

  /**
   * Get random contacts to add
   */
  getCommunity(): Promise<Contact[]> {
    return new Promise((resolve,reject)=>{
      resolve(this.randomService.getContacts(10));
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
  
  /**
   * Get chat list from memory
   * @returns 
   */
  getChatList(): Promise<ChatPreview[]>{
    return new Promise((resolve,reject)=>{
      resolve(this.randomService.getChatList(5));
    });
  }

  /**
   * Get chat
   * @param id 
   */
   getChat(id: string): Promise<Chat> {
    return new Promise((resolve,reject)=>{
      resolve(this.randomService.getChat());
    });
  }

}
