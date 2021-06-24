import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Chat } from '../../models/chat';
import { ChatPreview } from '../../models/chat-preview';
import { MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent implements OnInit {

  selectedChat: ChatPreview;
  showContacts = 0; 
  
  private destroy$: Subject<void> = new Subject();

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.subscribeChatChanges();
  }
  
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * load chat
   */
  subscribeChatChanges() {
    this.messageService.getChatObservable().pipe(takeUntil(this.destroy$)).subscribe(response => {  
      this.selectedChat = response;
    });
  }
}
