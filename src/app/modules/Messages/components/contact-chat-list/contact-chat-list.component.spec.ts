import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChatListComponent } from './contact-chat-list.component';

describe('ContactChatListComponent', () => {
  let component: ContactChatListComponent;
  let fixture: ComponentFixture<ContactChatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactChatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
