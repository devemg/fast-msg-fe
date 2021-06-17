import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UpdatePasswordDto } from '../dtos/update-password.dto';
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
  getProfile(): Promise<UserProfile> {
    return new Promise((resolve,reject)=>{
      resolve(this.localService.getUserProfile());
    });
  }

  updateProfile(profile: UserProfile){
    return new Promise((resolve,reject)=>{
      this.localService.updateProfile(profile);
      resolve({});
    });
  }
  
  updatePassword(password: UpdatePasswordDto) {
    return new Promise((resolve,reject)=>{
      this.localService.updatePassword(password);
      resolve({});
    });
  }
}
