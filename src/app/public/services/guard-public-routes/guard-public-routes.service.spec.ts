import { TestBed } from '@angular/core/testing';

import { GuardPublicRoutesService } from './guard-public-routes.service';

describe('GuardPublicRoutesService', () => {
  let service: GuardPublicRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardPublicRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
