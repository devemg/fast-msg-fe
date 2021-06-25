import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';
import {RouterTestingModule} from "@angular/router/testing";
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilsService } from 'src/app/services/utils.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let localservice: LocalStorageService;
  let utilService: UtilsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    localservice = TestBed.inject(LocalStorageService);
    utilService = TestBed.inject(UtilsService);
    fixture.detectChanges();
  });

  beforeEach(() => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initializate sidenav', () => {
      expect(component.sidenav).toBeDefined();
  });

  it('should hide toolbar', () => {
    let spy = spyOn(utilService,'getMenuObservable').and.returnValue(new Observable(resolver=>{resolver.next(false)}));
    component.ngOnInit();
    expect(component.showToolbar).toBeFalse();
  });

  it('should fill options', () => {
    expect(component.options.length).toBeGreaterThan(0);
  });

  it('should logout', () => {
    component.logout();
    expect(localservice.getUserToken()).toBeNull();
  });

});
