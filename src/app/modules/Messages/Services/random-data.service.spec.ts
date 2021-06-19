import { TestBed } from '@angular/core/testing';

import { RandomDataService } from './random-data.service';

describe('RandomDataService', () => {
  let service: RandomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of random contacts', () => {
    expect(service.getContacts(2).length).toBe(2);
  });

  it('should get user profile', () => {
    expect(service.getUser()).toBeDefined();
  });

  it('should get list of chats ', () => {
    expect(service.getChatList(4).length).toBe(4);
  });

  it('should get chat ', () => {
    expect(service.getChat()).toBeDefined();
  });

  it('should get list of messages ', () => {
    expect(service.getRandomMessages(4).length).toBe(4);
  });

  it('should get random number between 10 and 25', () => {
    expect(service.getRandomNumber()).toBeGreaterThanOrEqual(10);
    expect(service.getRandomNumber()).toBeLessThanOrEqual(25);
  });

});
