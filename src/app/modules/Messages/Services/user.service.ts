import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserProfile } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localService: LocalStorageService) { }

  /**
   * Get user profile
   * @returns 
   */
  getProfile(): UserProfile {
    return this.localService.getUserProfile();
  }

  updateProfile(profile: UserProfile){

  }

}
