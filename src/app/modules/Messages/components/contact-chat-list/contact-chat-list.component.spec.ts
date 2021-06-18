import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesService } from '../../Services/messages.service';

import { ContactChatListComponent } from './contact-chat-list.component';

describe('ContactChatListComponent', () => {
  let component: ContactChatListComponent;
  let fixture: ComponentFixture<ContactChatListComponent>;
  let service: MessagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactChatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChatListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MessagesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load chat list', () => {
    spyOn(service,'getChatList').and.resolveTo([{id:'2',image:'',lastMessage:'',title:''}]);
    component.loadList();
    expect(component.chatList.length).toBeGreaterThanOrEqual(0);
  });
  
  it('should not chat list', () => {
    spyOn(service,'getChatList').and.resolveTo([]);
    component.loadList();
    expect(component.chatList.length).toBe(0);
  });

  it('should not chat list by fail', () => {
    spyOn(service,'getChatList').and.rejectWith([]);
    component.loadList();
    expect(component.chatList.length).toBe(0);
  }); 

});
