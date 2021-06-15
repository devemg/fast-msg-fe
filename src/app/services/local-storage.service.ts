import { Injectable } from '@angular/core';
import { Contact } from '../modules/messages/models/contact';
import { UserProfile } from '../modules/Messages/models/user';
import { RandomDataService } from '../modules/Messages/Services/random-data.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  keys = {
    USERID:'user-id',
    TOKEN: 'user-token'
  };

  contactList: Contact[] = [];
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
   * return user id saved in ls
   * @returns 
   */
  getUserID() {
    return '123';
  }

  /**
   * delete token saved
   */
  clearToken(){
    localStorage.removeItem(this.keys.TOKEN);
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

}
