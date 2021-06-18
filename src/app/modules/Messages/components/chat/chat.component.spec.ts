import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesService } from '../../Services/messages.service';
import { RandomDataService } from '../../Services/random-data.service';

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

  it('should get the chat', async () => {
    let random: RandomDataService = new RandomDataService();
    let chat = random.getChat();
    spyOn(service,'getChat').and.resolveTo(chat);
    await component.loadChat();
    expect(component.chat).toEqual(chat);
  });

  it('should not get the chat', async () => {
    spyOn(service,'getChat').and.rejectWith({});
    await component.loadChat();
    expect(component.chat).toBeUndefined();
  });


});
