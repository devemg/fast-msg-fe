import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChatItemList } from '../../../models/chat-item-list.model';
import { ChatService } from '../../../services/chat.service';
import { SesionService } from '../../../services/sesion.service';

@Component({
  selector: 'list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.scss']
})
export class ListChatsComponent implements OnInit {
  @Output('chatId')
  sendChatId = new EventEmitter<string>();

  
  chats:ChatItemList[];
  idUser:string;
  constructor(
    private chatService:ChatService,
    private sesionService:SesionService
  ) { 
    this.getChats();
  }

  ngOnInit(): void {
  }

  async getChats(){
    this.chats = await this.chatService.getChats();
    this.idUser = this.sesionService.getUserID();
  }

  onSelection(event){
    this.sendChatId.emit(event.option.value);
  }
}
