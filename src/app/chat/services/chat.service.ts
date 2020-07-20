import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Contact } from '../models/contact.model';
import { ChatItemList } from '../models/chat-item-list.model';
import { HttpClient } from '@angular/common/http';
import { SesionService } from './sesion.service';
import { environment } from 'src/environments/environment';

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

  async getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(environment.ENDPOINT_USER+'/contacts?id='+this.sesionService.getUserID()).toPromise();
  }

  async getChat(id: string): Promise<Chat> {
    return this.http.get<Chat>(environment.ENDPOINT_CHAT+'?id='+id).toPromise();
  }

}
