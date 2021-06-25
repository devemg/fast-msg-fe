import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { UtilsService } from 'src/app/services/utils.service';
import { MessagesService } from '../../Services/messages.service';

import { ContactChatListComponent } from './contact-chat-list.component';

describe('ContactChatListComponent', () => {
  let component: ContactChatListComponent;
  let fixture: ComponentFixture<ContactChatListComponent>;
  let service: MessagesService;
  let utilService: UtilsService;

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
    utilService = TestBed.inject(UtilsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load chat list', () => {
    spyOn(service,'getChatList').and.resolveTo([{id:'2',image:'',lastMessage:'',title:'',contactId:''}]);
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

  it('should not change chat', fakeAsync(() => {
    let spy = spyOn(utilService,'changeChat');
    component.chatList = [{id:'2',image:'',lastMessage:'',title:'',contactId:''}];
    component.selectChat({options:[{value:'1'}]});
    expect(spy).not.toHaveBeenCalled();
  }));

  it('should change chat', fakeAsync(() => {
    let spy = spyOn(utilService,'changeChat');
    component.chatList = [{id:'2',image:'',lastMessage:'',title:'',contactId:''}];
    component.selectChat({options:[{value:'2'}]});
    expect(spy).toHaveBeenCalled();
  }));

});
