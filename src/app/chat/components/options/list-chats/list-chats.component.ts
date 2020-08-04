import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChatItemList } from '../../../models/chat-item-list.model';
import { ChatService } from '../../../services/chat/chat.service';
import { SesionService } from '../../../../services/sesion/sesion.service';
import { getUrlImage } from 'src/assets/scripts/extra-functions';

@Component({
  selector: 'list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.scss']
})
export class ListChatsComponent implements OnInit {
  getUrlImage=getUrlImage;
  @Output('chatId')
  sendChatId = new EventEmitter<string>();

  chats:ChatItemList[];

  constructor(
    private chatService:ChatService,
  ) { 
    this.getChats();
  }

  ngOnInit(): void {
  }

  async getChats(){
    this.chats = await this.chatService.getChats();
  }

  onSelection(event){
    this.sendChatId.emit(event.option.value);
  }
}
