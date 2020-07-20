import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { SesionService } from './sesion.service';
@Injectable({
  providedIn: 'root'
})
export class SocketChatService {

  socket:any;

  constructor(
    private sesionService:SesionService
  ) { }


  registerInSocketChat(){
    this.socket = io(environment.ENDPOINT_SOCKET);
    if(this.socket){
      this.socket.emit('register',this.sesionService.getUserID()); 
    }
  }

}
