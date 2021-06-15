import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { dummyContactList } from './mock-data.spec';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of contacts', () => {
    service.getCommunity().then(res=>{
      expect(res.length).toBeGreaterThan(0);
    })
  });

});
