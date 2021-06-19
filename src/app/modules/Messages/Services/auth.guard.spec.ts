import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let localService: LocalStorageService; 
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/user'};
  let routerMock = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    guard = TestBed.inject(AuthGuard);
    localService = TestBed.inject(LocalStorageService);
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
    expect(guard).toBeTruthy();
  });

  it('should allow activate', () => {
    localService.setUserToken('123');
    expect(guard.canActivate(routeMock,routeStateMock)).toBeTrue();
  });

  it('should not allow activate and redirect to login', () => {
    expect(guard.canActivate(routeMock,routeStateMock)).toBeFalse();
  });

});
