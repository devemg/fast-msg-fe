import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAccessMessageComponent } from './guest-access-message.component';

describe('GuestAccessMessageComponent', () => {
  let component: GuestAccessMessageComponent;
  let fixture: ComponentFixture<GuestAccessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestAccessMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
