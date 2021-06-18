import { Component, OnInit } from '@angular/core';
import { ChatPreview } from '../../models/chat-preview';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent implements OnInit {

  selectedChatId: number;

  constructor() { }

  ngOnInit(): void {
  }

  catchSelectedChat(value: ChatPreview){
    console.log(value);
  }

}
