import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChatPreview } from '../modules/Messages/models/chat-preview';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  subjectChat = new Subject<any>();  

  
  subjectMenu = new Subject<any>();  

  constructor() { }

  /**
   * Send change of chat to subscribers
   * @param chat 
   */
  changeChat(chat: ChatPreview) {  
    this.subjectChat.next(chat);  
  }  

  /**
   * Send change to hide general menu
   */
  hideMenu(){
    this.subjectMenu.next(false);
  }

  /**
   * send change to show general menu
   */
  showMenu(){
    this.subjectMenu.next(true);
  }

  /**
   * return observable to chat
   * @returns 
   */
  getChatObservable(): Observable<ChatPreview> {  
    return this.subjectChat.asObservable();  
  }

  /**
   * return observable to menu
   * @returns 
   */
  getMenuSubscriber(): Observable<boolean>{
    return this.subjectMenu.asObservable();
  }

}
