import { Injectable } from '@angular/core';
import { UpdatePasswordDto } from '../modules/messages/dtos/update-password.dto';
import { ChatPreview } from '../modules/Messages/models/chat-preview';
import { Contact } from '../modules/messages/models/contact';
import { UserProfile } from '../modules/Messages/models/user';
import { RandomDataService } from './random-data.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  keys = {
    USERID:'user-id',
    TOKEN: 'user-token'
  };

  contactList: Contact[] = [];
  chatList: ChatPreview[] = [];
  userProfile: UserProfile;

  constructor(private randomService: RandomDataService) { 
    this.userProfile = this.randomService.getUser();
  }

  /**
   * Get user profile
   */
  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  /**
   * Update Profile
   * @param element 
   */
  updateProfile(element: UserProfile) {
    this.userProfile = { ...this.userProfile, ...element };
  }

  /**
   * update password
   * @param newPassword 
   */
  updatePassword(newPassword: UpdatePasswordDto) {
    this.userProfile.password = newPassword.newPassword;
  }

  /**
   * return user id saved in ls
   * @returns 
   */
  getUserID() {
    return localStorage.getItem(this.keys.USERID);
  }

  /**
   * Set user Id
   * @param userID 
   */
  setUserID(userID: string){
    localStorage.setItem(this.keys.USERID,userID);
  }

  /**
   * remove user id
   */
  removeUserID(){
    localStorage.removeItem(this.keys.USERID);
  }

  /**
   * remove user token
   */
   removeUserToken(){
    localStorage.removeItem(this.keys.TOKEN);
  }

  /**
   * return user token
   * @returns 
   */
  getUserToken(){
    return localStorage.getItem(this.keys.TOKEN);
  }

  /**
   * set token
   * @param token 
   */
  setUserToken(token: string){
    localStorage.setItem(this.keys.TOKEN,token);
  }

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

  /**
   * Get chat list
   * @returns 
   */
  getChatList(): ChatPreview[] {
    return this.chatList;
  }

  /**
   * add chat to list
   * @param chat 
   */
  addChat(chat:ChatPreview){
    this.chatList.push(chat);
  }

  /**
   * remove contact in memory
   * @param id 
   */
   removeChat(id: string){
    let index = this.chatList.findIndex(element=>element.id == id); 
    if(index > -1){
      this.chatList.splice(index,1);
    }
  }
}
