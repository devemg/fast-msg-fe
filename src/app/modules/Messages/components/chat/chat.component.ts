import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Chat } from '../../models/chat';
import { MessagesService } from '../../Services/messages.service';
import { RandomDataService } from '../../Services/random-data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  chat: Chat;
  messageControl: FormControl;

  private destroy$: Subject<void> = new Subject();

  constructor(private messageService: MessagesService, private randomService: RandomDataService) { 
    this.messageControl = new FormControl('',[Validators.required]);
  }

  ngOnInit(): void {
    this.loadChat();
  }

  ngAfterViewChecked() {
    this.updateScroll();
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * load chat
   */
  loadChat() {
    this.messageService.getChatObservable().pipe(takeUntil(this.destroy$)).subscribe(response => {  
      this.chat = response;
      this.chat.messages = this.randomService.getRandomMessages(this.randomService.getRandomNumber());      
    });
  }

  /**
   * send message in chat
   */
  sendMessage(){
    if(this.messageControl.valid) {
      this.chat.messages.push({
        content:this.messageControl.value,
        date: new Date(),
        id:'1234',
        isOwn:true
      });
      this.messageControl.reset();
      this.updateScroll();
    }
  }

  updateScroll() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
