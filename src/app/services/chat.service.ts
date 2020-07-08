import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Contact } from '../models/contact.model';
import { ChatItemList } from '../models/chat-item-list.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private list_chat:ChatItemList[];
  private list_contact:Contact[];

  constructor() { 
    this.list_chat = [
      {
        contactImage:'image',
        contactName:'chat 1',
        id:1,
        lastMessage:{
          id:1,
          content:"Holis",
          date: new Date(),
          owner:1
        }
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

  async getChats():Promise<ChatItemList[]>{
    return this.list_chat;
  }

  async getContacts():Promise<Contact[]>{
    return this.list_contact;
  }

  async getChat(id:number):Promise<Chat>{
    return {
      id:1,
      contactImage:"Contacto 1",
      contactName:"image",
      messages:[
        {
          id:1,
          content:"holiiiiis",
          date:new Date(),
          owner:1
        }
        ,{
          id:2,
          content:"holiiiiis x2",
          date:new Date(),
          owner:2
        },
        {
          id:3,
          content:"holiiiiis x3",
          date:new Date(),
          owner:1
        },
        {
          id:4,
          content:"holiiiiis x4",
          date:new Date(),
          owner:2
        }
      ]
    };
  }

}
