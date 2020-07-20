import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() idChat:string;


  chat:Chat;
  idUser:string;
  constructor(
    private chatService:ChatService,
    private sesionService:SesionService
  ) { 
   // this.getChat();
  }

  ngOnInit(): void {
  }

  async getChat(){
    this.idUser = this.sesionService.getUserID();
    this.chat = await this.chatService.getChat(1);
  }

}
