import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { userProfile } from './mock-data.spec';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let localService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
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

  it('should call to update profile', () => {
    service.updatePassword({password:'12345',newPassword:'123456789'});
    //call to http service
    expect(localService.getUserProfile().password).toEqual('123456789');
  });

  it('should call to update profile', () => {
    let object: any = { name: userProfile.name+'2', email:userProfile.email };
    service.updateProfile(object);
    expect(localService.getUserProfile().name).toEqual(userProfile.name+'2');
  });

});
