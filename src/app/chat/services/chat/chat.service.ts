import { Injectable } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatItemList } from '../../models/chat-item-list.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor() {}

  async getChats(): Promise<ChatItemList[]> {
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  async getChat(id: string): Promise<Chat> {
    return new Promise((resolve,reject)=>{
      resolve({
        _id:1234,
        image:'',
        messages:[],
        name:'',
      });
    });
  }

  async getOrCreateChat(to: string): Promise<any> {
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  async deleteChatUser(idchat){
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  async emptyChat(idchat){
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

}
