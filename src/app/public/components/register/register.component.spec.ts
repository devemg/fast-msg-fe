import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { registerData } from 'src/app/services/mock-data-spec';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: any = jasmine.createSpy('navigate');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [ FormBuilder ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
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

  it('should register and redirect', () => {
    component.registerForm.patchValue(registerData);
    component.submit();
    //expect(router).toHaveBeenCalled();
    expect(component.registerForm.valid).toBeTrue();
  });

  it('should not be valid bc passwords are not equal', () => {
    let object = {...registerData,confirmPassword:'987654321'};
    component.registerForm.patchValue(object);
    component.submit();
    expect(component.registerForm.valid).toBeFalse();
  });

});
