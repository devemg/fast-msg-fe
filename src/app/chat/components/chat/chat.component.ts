import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { FormControl } from '@angular/forms';
import { SocketChatService } from '../../services/socket-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnChanges {
  @Input() idChat:string;

  chat:Chat;
  idUser:string;

  mesg:FormControl;

  constructor(
    private chatService:ChatService,
    private socketService:SocketChatService
  ) { }

  ngOnInit(): void {
    this.mesg = new FormControl('');
  }

  ngOnChanges():void{
    if(this.idChat){
      this.getChat()
    }
  }

  async getChat(){
    this.chat = await this.chatService.getChat(this.idChat);
  }

  send(){
    if(this.mesg.valid){
      console.log(this.mesg.value)
      this.socketService.sendMessage(this.mesg.value,this.chat._id)
      this.mesg.reset()
    }
  }

}
