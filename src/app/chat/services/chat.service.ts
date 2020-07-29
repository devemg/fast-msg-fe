import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { ChatItemList } from '../models/chat-item-list.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SesionService } from './sesion.service';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(
    private http:HttpClient,
    private sesionService:SesionService
  ) {}

  async getChats(): Promise<ChatItemList[]> {
    return this.http.get<ChatItemList[]>(environment.ENDPOINT_CHAT+'/user?id='+this.sesionService.getUserID()).toPromise()

  }

  async getChat(id: string): Promise<Chat> {
    return this.http.get<Chat>(environment.ENDPOINT_CHAT+'?id='+id).toPromise();
  }

  async getOrCreateChat(to: string): Promise<any> {
    return this.http.post<any>(environment.ENDPOINT_CHAT,
      JSON.stringify({to,from:this.sesionService.getUserID()}),
      {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

}
