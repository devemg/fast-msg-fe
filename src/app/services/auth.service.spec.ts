import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

describe('AuthService', () => {
  let service: AuthService;
  let localService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localService = TestBed.inject(LocalStorageService);
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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should logout', () => {
    localService.setUserID('1234');
    service.logout()
    expect(localService.getUserID()).toBeNull();
  });

  it('should authenticated', () => {
    localService.setUserToken('1234');
    expect(service.isAuth()).toBeTrue();
  });

  it('should not be authenticated', () => {
    expect(service.isAuth()).toBeFalse();
  });

  it('should login with success', () => {
    service.login('invitado@fastmessages.com','1234').then(res=>{
      expect(res).toBeTruthy();
    });    
  });

  it('should login with success', () => {
    service.login('invitado@invitado.com','1234').catch(res=>{
      expect(res).toBeTruthy();
    });    
  });

});
