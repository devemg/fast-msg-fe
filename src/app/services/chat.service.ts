import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private list_chat:Chat[];
  private list_contact:Contact[];

  constructor() { 
    this.list_chat = [
      {
        id:1,
        date:new Date(),
        message:"Holiiiiis"
      },
      {
        id:2,
        date:new Date(),
        message:"Holiiiiis"
      },
      {
        id:3,
        date:new Date(),
        message:"Holiiiiis"
      }
    ];

    this.list_contact = [
      {
        id:1,
        image:'image',
        name:'Nombreee 1'
      },
      {
        id:2,
        image:'image',
        name:'Nombreee 2'
      },
      {
        id:3,
        image:'image',
        name:'Nombreee 3'
      }
    ];
  }

  async getChats(){
    return this.list_chat;
  }

  async getContacts(){
    return this.list_contact;
  }

}
