import { Injectable } from '@angular/core';
import { Chat } from '../modules/Messages/models/chat';
import { ChatMessage } from '../modules/Messages/models/chat-message';
import { ChatPreview } from '../modules/Messages/models/chat-preview';
import { Contact } from '../modules/messages/models/contact';
import { UserProfile } from '../modules/Messages/models/user';

@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  constructor() { }

  /**
   * Get user data
   * @returns 
   */
    getUser(): UserProfile {
    return {
      _id: 'datatype.uuid()',
      image: 'image.avatar()',
      name: 'name.findName()',
      email: 'internet.email()'
    };
  }

  /**
   * return random UUID
   * @returns 
   */
   getId(){
    return 'datatype.uuid()';
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
        _id: 'datatype.uuid()',
        image: 'image.avatar()',
        name: 'name.findName()',
        email: 'internet.email()'
      });
    }
    return list;
  }

  /**
   * return list of conversations
   */
  getChatList(qty: number): ChatPreview[] {
    let list: ChatPreview[] = [];
    for(let i = 0; i < qty; i++ ){
      list.push({
        id: 'datatype.uuid()',
        image: 'image.avatar()',
        title: 'name.findName()',
        lastMessage: 'lorem.sentence()',
        contactId: 'datatype.uuid()',
      });
    }
    return list;
  }

  /**
   * Get random messages
   */
  getRandomMessages(qty: number): ChatMessage[]{
    let list: ChatMessage[] = [];
    for(let i = 0; i < qty; i++ ){
      list.push({
        id: 'datatype.uuid()',
        content:'lorem.sentence()',
        date: new Date(), //datatype.datetime(),
        isOwn: true //datatype.boolean()
      });
    }
    return list;
  }

  /**
   * Get random number between 10 and 25
   * @returns 
   */
  getRandomNumber(): number {
    return 0/*datatype.number({
    'min': 10,
    'max': 25
    });**/
  }

    /**
   * Get random chat
   * @returns 
   */
     getChat(): Chat{
      return {
        id: 'datatype.uuid()',
        image: 'image.avatar()',
        title: 'name.findName()',
        contactId: 'datatype.uuid()',
        messages: []
      }
    }
  
    
}
