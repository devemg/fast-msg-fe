import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnChanges {
  @Input() idChat:string;


  chat:Chat;
  idUser:string;
  constructor(
    private chatService:ChatService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if(this.idChat){
      this.getChat()
    }
  }

  async getChat(){
    this.chat = await this.chatService.getChat(this.idChat);
  }

}
