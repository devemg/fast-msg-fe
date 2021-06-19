import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { MessagesService } from '../../Services/messages.service';

import { MainChatComponent } from './main-chat.component';

describe('MainChatComponent', () => {
  let component: MainChatComponent;
  let fixture: ComponentFixture<MainChatComponent>;
  let service: MessagesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MainChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MessagesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get chat list', () => {
    let spy = spyOn(service,'getChatObservable').and.returnValue(new Observable((observer)=>{ observer.next()}));
    component.subscribeChatChanges();
    expect(component.selectedChat).toBeFalsy();
  });

});
