import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class SocketChatService {

  socket: any;

  constructor(
    private sesionService: LocalStorageService
  ) { }


  /**
   * Registra al usuario en la lista de conectados 
   * para recibir mensajes
   */
  registerInSocketChat() {
    this.socket = io(environment.ENDPOINT_SOCKET);
    if (this.socket) {
      this.socket.emit('register', this.sesionService.getUserID());
    }
  }

  /**
   * Envía un mensaje
   * @param message contenido del mensaje
   * @param chatId 
   */
  sendMessage(message, chatId) {
    if (this.socket) {
      this.emit('chat-message',{ owner: this.sesionService.getUserID(), chatId, message });
    }
  }

  /**
  * Retorna un Observable para recibir los mensajes
  */
  public onMessage(): Observable<any> {
    return this.listen('chat-message');
  }


  private emit(eventName:string,data:any){
    if(this.socket){
      this.socket.emit(eventName,data)
    }
  }

  public listen(eventName:string){
    return new Observable((subscriber=>{
      this.socket.on(eventName,(data)=>subscriber.next(data));
    }))
  }

}
