import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Chat } from '../models/chat';
import { ChatMessage } from '../models/chat-message';
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
      let list = this.localService.getChatList().concat(this.randomService.getChatList(5));
      resolve(list);
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

  /**
   * Get messages from chat
   * @param id 
   * @returns 
   */
  getChatMessages(id: string): Promise<ChatMessage[]> {
    return new Promise((resolve,reject)=>{
      resolve(this.randomService.getRandomMessages(this.randomService.getRandomNumber()));
    });
  }

  /**
   * Add new Chat
   * @param contact 
   */
  createChat(contact: Contact){
    let elementChat = this.localService.getChatList().find(element=>element.contactId == contact._id);
    if(!elementChat){
      //create chat
      let chat = {id:this.randomService.getId(),title:contact.name,image:contact.image, contactId:contact._id};
      this.localService.addChat(chat);
      //this.subject.next(chat);
    }else {
      //select chat
     // this.subject.next(elementChat);
    }
  }

  /**
   * remove contact from user list in memory
   */
   removeChat(id: string):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.localService.removeChat(id);
      resolve({});
    });
  }
  
}
