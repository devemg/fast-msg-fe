import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { MessagesService } from './messages.service';
import { chatList, dummyContactList } from './mock-data.spec';

describe('MessagesService', () => {
  let service: MessagesService;
  let local: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesService);
    local = TestBed.inject(LocalStorageService);
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

  it('should return a list of chats', () => {
    service.getChatList().then(res=>{
      expect(res.length).toBeGreaterThan(0);
    })
  });

  it('should return the chat', () => {
    service.getChat('12345').then(res=>{
      expect(res).toBeDefined();
    })  
  });

  it('should get list of messages', () => {
    service.getChatMessages('1234').then(res=>{
      expect(res.length).toBeGreaterThan(10);
    })
  });

  it('should create chat', () => {
    service.createChat(dummyContactList[0]);
    expect(local.getChatList().length).toBe(1);
  });

  it('should not create chat bc already exists', () => {
    local.chatList.push(chatList[0]);
    service.createChat(dummyContactList[0]);
    expect(local.getChatList().length).toBe(1);
  });

  it('should not create chat bc contact not found', () => {
    local.chatList.push(chatList[0]);
    service.createChat(dummyContactList[0]);
    expect(local.getChatList().length).toBe(1);
  });
  
  it('should update chat with subject', () => {
    let spy = spyOn(service.subject,'next');
    service.changeChat({title:'',image:'',contactId:'',id:'',lastMessage:''});
    expect(spy).toHaveBeenCalled();
  });

});
