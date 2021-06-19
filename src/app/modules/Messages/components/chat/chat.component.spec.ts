import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesService } from '../../Services/messages.service';
import { chatList } from '../../Services/mock-data.spec';

import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let service: MessagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MessagesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove chat', () => {
    component.chat = {...chatList[0],messages:[]};
    component.deleteChat();
    expect(component.chat).toBeNull();
  });

  it('should remove messages', () => {
    component.chat = {...chatList[0],messages:[{isOwn:true,content:'',date:new Date(),id:''}]};
    component.clearMessages();
    expect(component.chat.messages.length).toBe(0);
  });

  it('should message control be valid', () => {
    component.messageControl.setValue('dummy');
    expect(component.messageControl.valid).toBeTrue();
  });

  it('should send message', () => {
    component.chat = {...chatList[0],messages:[]};
    component.messageControl.setValue('dummy');
    component.sendMessage();
    expect(component.chat.messages.length).toBe(1);
  });

  it('should not send message', () => {
    component.chat = {...chatList[0],messages:[]};
    component.sendMessage();
    expect(component.chat.messages.length).toBe(0);
  });

  it('should not fill chat', () => {
    let spy = spyOn(service,'getChatMessages').and.resolveTo([]);
    component.ngOnChanges();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should fill chat with success', () => {
    component.chat = {...chatList[0],messages:[]};
    let spy = spyOn(service,'getChatMessages').and.resolveTo([{isOwn:true,content:'',date:new Date(),id:''}]);
    component.ngOnChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should fill chat and fail', () => {
    component.chat = {...chatList[0],messages:[]};
    let spy = spyOn(service,'getChatMessages').and.rejectWith({});
    component.ngOnChanges();
    expect(component.chat.messages.length).toBe(0);
  });

});
