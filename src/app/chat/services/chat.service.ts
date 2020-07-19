import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Contact } from '../models/contact.model';
import { ChatItemList } from '../models/chat-item-list.model';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_USER, ENDPOINT_CHAT } from 'src/app/global-setting';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private list_chat: ChatItemList[];

  constructor(
    private http:HttpClient,
    private sesionService:SesionService
  ) {}

  async getChats(): Promise<ChatItemList[]> {
    await this.http.get<ChatItemList[]>(ENDPOINT_CHAT+'/user?id='+this.sesionService.getUserID())
    .subscribe(res=>{
      console.log(res)
    });

    return this.list_chat;
  }

  async getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(ENDPOINT_USER+'/contacts?id='+this.sesionService.getUserID()).toPromise();
  }

  async getChat(id: number): Promise<Chat> {
    return {
      id: 1,
      contactImage: "https://material.angular.io/assets/img/examples/shiba1.jpg",
      contactName: "Contacto 1",
      messages: [
        {
          id: 1,
          content: "holiiiiis",
          date: new Date(),
          owner: 1
        }
        , {
          id: 2,
          content: "holiiiiis x2",
          date: new Date(),
          owner: 2
        },
        {
          id: 3,
          content: "holiiiiis x3",
          date: new Date(),
          owner: 1
        },
        {
          id: 4,
          content: "holiiiiis x4",
          date: new Date(),
          owner: 2
        },
        {
          id: 5,
          content: "holiiiiis x4",
          date: new Date(),
          owner: 2
        },
        {
          id: 1,
          content: "holiiiiis",
          date: new Date(),
          owner: 1
        }
        , {
          id: 2,
          content: "holiiiiis x2",
          date: new Date(),
          owner: 2
        },
        {
          id: 3,
          content: "holiiiiis x3",
          date: new Date(),
          owner: 1
        },
        {
          id: 4,
          content: "holiiiiis x4",
          date: new Date(),
          owner: 2
        },
        {
          id: 1,
          content: "holiiiiis",
          date: new Date(),
          owner: 1
        }
        , {
          id: 2,
          content: "holiiiiis x2",
          date: new Date(),
          owner: 2
        },
        {
          id: 3,
          content: "holiiiiis x3",
          date: new Date(),
          owner: 1
        },
        {
          id: 4,
          content: "holiiiiis x4",
          date: new Date(),
          owner: 2
        },
        {
          id: 5,
          content: "holiiiiis x4",
          date: new Date(),
          owner: 2
        },
        {
          id: 1,
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date(),
          owner: 1
        }
        , {
          id: 2,
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          date: new Date(),
          owner: 2
        },
        {
          id: 3,
          content: "holiiiiis x3",
          date: new Date(),
          owner: 1
        },
        {
          id: 4,
          content: "holiiiiis x4",
          date: new Date(),
          owner: 2
        }
      ]
    };
  }

}
