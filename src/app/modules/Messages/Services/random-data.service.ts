import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { name, internet, datatype, image, lorem } from 'faker';
import { UserProfile } from '../models/user';
import { ChatPreview } from '../models/chat-preview';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {


  constructor() { 
  }

  /**
   * get contact list of community
   * @param qty 
   * @returns 
   */
  getContacts(qty: number): Contact[] {
    let list: Contact[] = [];
    for(let i = 0; i < qty; i++ ){
      list.push({
        _id: datatype.uuid(),
        image: image.avatar(),
        name: name.findName(),
        email: internet.email()
      });
    }
    return list;
  }

  /**
   * Get user data
   * @returns 
   */
  getUser(): UserProfile {
    return {
      _id: datatype.uuid(),
      image: image.avatar(),
      name: name.findName(),
      email: internet.email()
    };
  }

  /**
   * return list of conversations
   */
  getChatList(qty: number): ChatPreview[] {
    let list: ChatPreview[] = [];
    for(let i = 0; i < qty; i++ ){
      list.push({
        id: datatype.uuid(),
        image: image.avatar(),
        title: name.findName(),
        lastMessage: lorem.sentence()
      });
    }
    return list;
  }

}
