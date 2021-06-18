import { AfterViewChecked, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Chat } from '../../models/chat';
import { MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnChanges {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input('chat') chat:Chat;

  messageControl: FormControl;


  constructor(private messageService: MessagesService) { 
    this.messageControl = new FormControl('',[Validators.required]);
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.updateScroll();
  }

  ngOnChanges(){
    if(this.chat){
      this.messageService.getChatMessages(this.chat.id).then(res=>{
        this.chat.messages = res;
      })
      .catch(err=>console.log(err));
    }
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

  /**
   * Update scroll to bottom
   */
  updateScroll() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  /**
   * Clear Messages
    */
  clearMessages(){
    this.chat.messages = [];
  }
  
  /**
  * delete chat
  */
  deleteChat(){

  }

}
