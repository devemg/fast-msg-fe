import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../models/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  canUpdatePassword = false; 
  canUpdateProfile = false; 
  profile: UserProfile; 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().then(res=>{
      this.profile = res;
    })
    .catch(err=>console.log(err));
  }
  
  /**
   * let update the password
   */
  updatePassword() {
    this.canUpdatePassword = true;
  }

  updateProfile() {
    this.canUpdateProfile = true; 
  }

}
