import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat:Chat;
  idUser:number;
  constructor(
    private chatService:ChatService,
    private sesionService:SesionService
  ) { 
    this.getChat();
  }

  ngOnInit(): void {
  }

  async getChat(){
    this.idUser = this.sesionService.getUserID();
    this.chat = await this.chatService.getChat(1);
  }

}
