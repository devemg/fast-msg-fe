import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { userProfile } from '../../Services/mock-data.spec';
import { UserService } from '../../Services/user.service';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      providers: [ FormBuilder,MatSnackBar ,Overlay,FormGroupDirective ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not fill profile', () => {
      let spy = spyOn(userService,'getProfile').and.rejectWith({});
      component.ngOnInit();
      expect(component.ProfileImage).toBe('');
  });

  it('should activate update profile', () => {
    component.canUpdateProfile = false;
    component.toggleUpdate(1);
    expect(component.canUpdateProfile).toBeTrue();
  });

  it('should unactivate update profile', () => {
    component.canUpdateProfile = true; 
    component.toggleUpdate(1);
    expect(component.canUpdateProfile).toBeFalse();
  });

  it('should activate update password', () => {
    component.canUpdatePassword = false;
    component.toggleUpdate(2);
    expect(component.canUpdatePassword).toBeTrue();
  });

  it('should unactivate update password', () => {
    component.canUpdatePassword = true; 
    component.toggleUpdate(2);
    expect(component.canUpdatePassword).toBeFalse();
  });

  it('should not update profile', () => {
    let spy = spyOn(userService,'updateProfile').and.resolveTo({});
    component.submitProfile();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should update profile', () => {
    let spy = spyOn(userService,'updateProfile').and.resolveTo({});
    component.profileForm.patchValue({name: userProfile.name, email:userProfile.email});
    component.submitProfile();
    expect(spy).toHaveBeenCalled();
  });

  it('should not update password', () => {
    let spy = spyOn(userService,'updatePassword').and.resolveTo({});
    component.submitPassword();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should update password', () => {
    let spy = spyOn(userService,'updatePassword').and.resolveTo({});
    component.passwordForm.patchValue({password:userProfile.password,newPassword:'123456789'});
    component.submitPassword();
    expect(spy).toHaveBeenCalled();
  });

});
 