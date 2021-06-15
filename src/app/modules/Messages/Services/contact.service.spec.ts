import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { dummyContact } from './mock-data.spec';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
