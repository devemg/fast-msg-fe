import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  profileForm: FormGroup; 
  passwordForm: FormGroup;

  ProfileImage = '';

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private formDirective: FormGroupDirective
    ) {
      this.profileForm = this.formBuilder.group({
        name: ['',Validators.required],
        email:['',[Validators.required,Validators.email]],
      });
      this.passwordForm = this.formBuilder.group({
        password:['',Validators.required],
        newPassword:['',Validators.required],
      });
     }

  ngOnInit(): void {
    this.userService.getProfile().then(res=>{
      //this.profile = res;
      this.profileForm.patchValue(res);
      this.ProfileImage = res.image;
    })
    .catch(err=>console.log(err));
  }
  
  /**
   * show and hide elements to update profile
   * type = 1 | Update Profile 
   * type = 2 | Update Password
   */
  toggleUpdate(type: number) {
    if(type == 1) {
      this.canUpdateProfile = !this.canUpdateProfile;
      this.canUpdatePassword = false;
    }else {
      this.canUpdatePassword = !this.canUpdatePassword;
      this.canUpdateProfile = false;
    }
  }


  submitProfile() {
    if(this.profileForm.valid){
      this.userService.updateProfile(this.profileForm.value).then(res=>{
        this.matSnackBar.open('Perfil Actualizado','Ok',{duration:2000});
      })
      .catch(err=>console.log(err));
      //this.profileForm.patchValue(this.profileForm.value);
      this.canUpdateProfile = false;
    }else {
      
    }
  }

  submitPassword() {
    if(this.passwordForm.valid){
      this.userService.updatePassword(this.passwordForm.value).then(()=>{
        this.matSnackBar.open('Contraseña Actualizada','Ok',{duration:2000});
      })
      .catch(err=>console.log(err));
      this.canUpdatePassword = false;
      this.passwordForm.reset();
    }
  }

}
