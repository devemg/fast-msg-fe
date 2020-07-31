import { TestBed } from '@angular/core/testing';

import { GuardChatRoutesService } from './guard-chat-routes.service';

describe('GuardChatRoutesService', () => {
  let service: GuardChatRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardChatRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
