import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';
import { Contact } from '../models/contact.model';
import { ChatItemList } from '../models/chat-item-list.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private list_chat: ChatItemList[];
  private list_contact: Contact[];

  constructor() {
    this.list_chat = [
      {
        contactImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        contactName: 'chat 1',
        id: 1,
        lastMessage: {
          id: 1,
          content: "Holis",
          date: new Date(),
          owner: 1
        }
      }
    ];

    this.list_contact = [
      {
        id: 1,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 1'
      },
      {
        id: 2,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 2'
      },
      {
        id: 3,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 3'
      },
      {
        id: 1,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 1'
      },
      {
        id: 2,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 2'
      },
      {
        id: 3,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 3'
      },
      {
        id: 1,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 1'
      },
      {
        id: 2,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 2'
      },
      {
        id: 3,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 3'
      },
      {
        id: 1,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 1'
      },
      {
        id: 2,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 2'
      },
      {
        id: 3,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 3'
      },
      {
        id: 1,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 1'
      },
      {
        id: 2,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 2'
      },
      {
        id: 3,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 3'
      },
      {
        id: 1,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 1'
      },
      {
        id: 2,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 2'
      },
      {
        id: 3,
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        name: 'Nombreee 3'
      }
    ];
  }

  async getChats(): Promise<ChatItemList[]> {
    return this.list_chat;
  }

  async getContacts(): Promise<Contact[]> {
    return this.list_contact;
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
