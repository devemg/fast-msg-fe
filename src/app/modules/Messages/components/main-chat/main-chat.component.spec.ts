import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { MessagesService } from '../../Services/messages.service';
import { chatList } from '../../Services/mock-data.spec';

import { MainChatComponent } from './main-chat.component';

describe('MainChatComponent', () => {
  let component: MainChatComponent;
  let fixture: ComponentFixture<MainChatComponent>;
  let service: MessagesService;
  let utilService: UtilsService;

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
    utilService = TestBed.inject(UtilsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get chat list', () => {
    let spy = spyOn(utilService,'getChatObservable').and.returnValue(new Observable((observer)=>{ observer.next()}));
    component.subscribeChatChanges();
    expect(component.selectedChat).toBeFalsy();
  });

  it('should can show contacts', () => {
    component.showContacts = false; 
    component.selectedChat = null;
    expect(component.canShowContact()).toBeTrue();
  });

  it('should can not show contacts', () => {
    component.showContacts = false; 
    component.selectedChat = chatList[0];
    expect(component.canShowContact()).toBeFalse();
  });

  it('should show top menu', () => {
    let spy = spyOn(utilService,'showMenu');
    component.canShowHideMenu = true;
    component.clearSelectedChat();
    expect(spy).toHaveBeenCalled();
  });

  it('should not show top menu', () => {
    let spy = spyOn(utilService,'showMenu');
    component.canShowHideMenu = false;
    component.clearSelectedChat();
    expect(spy).not.toHaveBeenCalled();
  });

});
