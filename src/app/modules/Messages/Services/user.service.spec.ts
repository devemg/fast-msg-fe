import { TestBed } from '@angular/core/testing';
import { dummyContactList } from './mock-data.spec';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
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
