import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { MessagesService } from './messages.service';
import { dummyContactList } from './mock-data.spec';

describe('MessagesService', () => {
  let service: MessagesService;
  let local: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesService);
    local = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of contacts', () => {
    service.getCommunity().then(res=>{
      expect(res.length).toBeGreaterThan(0);
    })
  });

  it('should add contact to user in memory.', () => {
    service.addContact(dummyContactList[0]);
    expect(local.contactList.length).toBe(1);
  });

  it('should remove contact from userList in memory', () => {
    service.removeContact(dummyContactList[0]._id);
    expect(local.contactList.length).toBe(0);
  });

  it('should return contact list in memory', () => {
    local.contactList = dummyContactList.slice(0,2);
    service.getContactsFromUser().then(res=>{
      expect(res).toEqual(local.contactList);
    })
  });

});
