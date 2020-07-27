import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  @Output('chat')
  sendChatId = new EventEmitter<string>();
  
  contacts:Contact[];
  
  constructor(
    public chatService:ChatService
  ) { }

  ngOnInit(): void {
    this.fillContacts();
  }

  /**
   * Metodo para llenar contactos
   */
  async fillContacts(){
    this.contacts = await this.chatService.getContacts();
  }

  /**
   * id de contacto para eliminar contacto de 
   * lista de usuario
   * @param id de contacto
   */
  deleteContact(id){
    console.log(id)
  }

  /**
   * Para crear un nuevo chat y/o recuperar el chat
   * @param id de contacto
   */
  async createChat(id){
    var response = await this.chatService.getOrCreateChat(id);
    this.sendChatId.emit(response.chatId);
  }

}
