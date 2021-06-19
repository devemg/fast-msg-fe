import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { loginData } from 'src/app/services/mock-data-spec';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: any = jasmine.createSpy('navigate');
  let service: AuthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ FormBuilder, MatSnackBar,Overlay ],
      imports: [ RouterTestingModule,NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not redirect', () => {
    spyOn(service,'login').and.resolveTo({token:'12345678'})
    component.submit();
    expect(router).not.toHaveBeenCalled();
  });

  it('should login and redirect', () => {
    component.loginForm.patchValue(loginData);
    spyOn(service,'login').and.resolveTo({token:'12345678'})
    component.submit();
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should login and fail', () => {
    component.loginForm.patchValue(loginData);
    let spy = jasmine.createSpy('open')
    spyOn(service,'login').and.rejectWith({error:'12345678',status:400})
    component.submit();
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should login and fail', () => {
    component.loginForm.patchValue(loginData);
    let spy = jasmine.createSpy('open')
    spyOn(service,'login').and.rejectWith({error:'12345678',status:401})
    component.submit();
    expect(component.loginForm.valid).toBeTrue();
  });

});
 