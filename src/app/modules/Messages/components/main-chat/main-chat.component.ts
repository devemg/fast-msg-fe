import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class MainChatComponent implements OnInit { //},AfterViewInit {

  selectedChat: ChatPreview;
  showContacts = true; 
  
  private destroy$: Subject<void> = new Subject();

  constructor(private messageService: MessagesService, private breakpointObserver:BreakpointObserver) { }

  ngOnInit(): void {
    this.subscribeChatChanges();
  }
  
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.breakpointObserver.observe([
        '(max-width: 768px)'
          ]).subscribe(result => {
            if (result.matches) {
              this.showContacts = false;
            }else {
              this.showContacts = true;
            }
          }); 
    }, 200);
  }

  /**
   * load chat
   */
  subscribeChatChanges() {
    this.messageService.getChatObservable().pipe(takeUntil(this.destroy$)).subscribe(response => {  
      this.selectedChat = response;
    });
  }

  canShowContact():boolean{
    if(this.showContacts){
      return true;
    }else {
      if(this.selectedChat != null) {
        return false;
      }
      return true;
    }
  }
}
