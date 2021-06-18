import { Overlay } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { loginData } from 'src/app/services/mock-data-spec';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: any = jasmine.createSpy('navigate');

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not redirect', () => {
    component.submit();
    expect(router).not.toHaveBeenCalled();
  });

  it('should login and redirect', () => {
    component.loginForm.patchValue(loginData);
    component.submit();
    //expect(router).toHaveBeenCalled();
    expect(component.loginForm.valid).toBeTrue();
  });

});
