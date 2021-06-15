import { TestBed } from '@angular/core/testing';
import { dummyContactList } from '../modules/Messages/Services/mock-data.spec';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
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

  it('should getUserID', () => {
    localStorage.setItem(service.keys.USERID,'123');
    expect(service.getUserID()).toEqual('123');
  });

  it('should remove token', () => {
    localStorage.setItem(service.keys.TOKEN,'abcd');
    service.clearToken();
    expect(localStorage.getItem(service.keys.TOKEN)).toBeNull();    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add contact to user', () => {
    service.addContact(dummyContactList[0]);
    expect(service.contactList.length).toBe(1);
  });

  it('should remove contact from user', () => {
    service.contactList = dummyContactList.slice(0,1);
    service.removeContact(dummyContactList[0]._id);
    expect(service.contactList.length).toBe(0);
  });

  it('should not remove contact from user', () => {
    service.contactList = dummyContactList.slice(0,1);
    service.removeContact('1234567897');
    expect(service.contactList.length).toBe(1);
  });

  it('should get contact list from user', () => {
    let list = dummyContactList.slice(0,2);
    service.contactList = list;
    expect(service.getContacts()).toEqual(list);
  });

});
