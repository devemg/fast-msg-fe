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

});
