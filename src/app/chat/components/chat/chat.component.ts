import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat/chat.service';
import { FormControl } from '@angular/forms';
import { SocketChatService } from '../../services/socket-chat/socket-chat.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { getUrlImage } from 'src/assets/scripts/extra-functions';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() idChat: string;
  //scroll
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Output('chat') sendChatId = new EventEmitter<string>();
  imgChat:SafeStyle;
  chat: Chat;
  idUser: string;

  mesg: FormControl;

  constructor(
    private chatService: ChatService,
    private sesionService: LocalStorageService,
    private socketService: SocketChatService,
    private sanitizer: DomSanitizer
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

  ngAfterViewChecked() {
    this.updateScroll();
  }

  /**
   * consulta la info del chat
   */
  async getChat() {
    this.chat = await this.chatService.getChat(this.idChat);
    //cambiar imagen
    this.imgChat=this.sanitizer.bypassSecurityTrustStyle('url("'+getUrlImage(this.chat.image)+'")');
  }

  /**
   * envía el mensaje por sockets
   */
  send() {
    if (this.mesg.valid && this.mesg.value != '') {
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
        //console.log("mensaje...")
        //console.log(data)
        if (data) {
          if (data.chat == this.chat._id) {
            this.chat.messages.push(data.message);
            this.updateScroll();
          }
        }
      })
  }

  /**
   * Elimina el chat de la lista del usuario
   */
  deleteChat() {
    this.chatService.deleteChatUser(this.chat._id)
    .then(res=>{
      this.chat = null;
      this.sendChatId.emit(null);
    })
    .catch(err=>{
      console.log(err)
      //this.alertService.alertError('Chat',"No se ha podido al eliminar el la conversación");
    })
  }

  clearChat() {
    this.chatService.emptyChat(this.chat._id)
    .then(res=>{
      this.chat.messages = [];
    })
    .catch(err=>{
      console.log(err)
      //this.alertService.alertError('Chat',"No se ha podido al vaciar la conversación");
    })
  }

  onNotifications() {

  }

  offNotifications() {

  }

  updateScroll() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
