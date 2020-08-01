import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat/chat.service';
import { FormControl } from '@angular/forms';
import { SocketChatService } from '../../services/socket-chat/socket-chat.service';
import { SesionService } from '../../../services/sesion/sesion.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() idChat: string;
  //scroll
 // @ViewChild('scrollMe') scroll : ElementRef;
  //scrolltop:number=0;

  chat: Chat;
  idUser: string;

  mesg: FormControl;

  constructor(
    private chatService: ChatService,
    private sesionService:SesionService,
    private socketService: SocketChatService
  ) { }

  ngOnInit(): void {
    this.mesg = new FormControl('');
    this.idUser = this.sesionService.getUserID();
    this.subscribeAll();
  }

  ngOnChanges(): void {
    if (this.idChat) {
      this.getChat()
    }
  }

  ngAfterViewInit(){
   // this.updateScroll();
  }

  /**
   * consulta la info del chat
   */
  async getChat() {
    this.chat = await this.chatService.getChat(this.idChat);
    
  }

  /**
   * envía el mensaje por sockets
   */
  send() {
    if (this.mesg.valid) {
      //console.log(this.mesg.value)
      this.socketService.sendMessage(this.mesg.value, this.chat._id)
      this.mesg.reset()
    }
  }

  /**
   * suscripción a los eventos enviados por el socket
   */
  subscribeAll() {
    this.socketService.onMessage()
      .subscribe(data => {
        if (data) {
          if (data.chat == this.chat._id) {
            this.chat.messages.push(data.message);
           // this.updateScroll();
          }
        }
      })
  }

 /* updateScroll(){
    if(this.scroll){
      this.scrolltop = this.scroll.nativeElement.scrollHeight;
    }
  }
*/
}
