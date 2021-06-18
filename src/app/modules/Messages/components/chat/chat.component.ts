import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chat } from '../../models/chat';
import { MessagesService } from '../../Services/messages.service';
import { RandomDataService } from '../../Services/random-data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat: Chat;
  messageControl: FormControl;

  constructor(private messageService: MessagesService, private randomService: RandomDataService) { 
    this.messageControl = new FormControl('');
  }

  ngOnInit(): void {
    this.loadChat();
  }

  /**
   * load chat
   */
  loadChat() {
    this.messageService.getChat('1').then(res=>{
      this.chat = res;
      this.chat.messages = this.randomService.getRandomMessages(20);
    })
    .catch(err=>console.log(err));
  }

}
