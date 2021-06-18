import { Component, OnInit } from '@angular/core';
import { ChatPreview } from '../../models/chat-preview';
import { MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-contact-chat-list',
  templateUrl: './contact-chat-list.component.html',
  styleUrls: ['./contact-chat-list.component.scss']
})
export class ContactChatListComponent implements OnInit {
  
  chatList: ChatPreview[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.messageService.getChatList().then(res=>{
      this.chatList = res;
    })
    .catch(err=>console.log(err));
  }

}
