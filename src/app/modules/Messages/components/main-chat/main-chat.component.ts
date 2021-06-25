import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UtilsService } from 'src/app/services/utils.service';
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
  canShowHideMenu = false;
  
  private destroy$: Subject<void> = new Subject();

  constructor(
    private breakpointObserver:BreakpointObserver,
    private utilService: UtilsService
    ) { }

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
        '(max-width: 768px)', '(max-width: 550px)'
          ]).subscribe(result => {
            if(!result.matches){
              return;
            }
            // (max-width: 768px)
            if (result.breakpoints['(max-width: 768px)']) {
              this.showContacts = false;
            }else {
              this.showContacts = true;
            }
            // (max-width: 550px)
            if (result.breakpoints['(max-width: 550px)']) {
              this.canShowHideMenu = true;
            }else {
              this.canShowHideMenu = false;
            }
          }); 
    }, 200);
  }

  /**
   * load chat
   */
  subscribeChatChanges() {
    this.utilService.getChatObservable().pipe(takeUntil(this.destroy$)).subscribe(response => {  
      this.selectedChat = response;
      if(this.selectedChat && this.canShowHideMenu){
        this.utilService.hideMenu();
      }
    });
  }

  /**
   * return if can show list of contacts
   * @returns 
   */
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

  /**
   * clear selected chat
   */
  clearSelectedChat(){
    this.selectedChat = null;
    if(this.canShowHideMenu){
      this.utilService.showMenu();
    }
  }
}
