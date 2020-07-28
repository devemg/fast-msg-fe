import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Contact } from '../../../models/contact.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  @Output('chat')
  sendChatId = new EventEmitter<string>();
  
  contacts:Contact[]; 
  showSearch:boolean;

  constructor(
    public chatService:ChatService,
    public alertService:AlertService
  ) { }

  ngOnInit(): void {
    this.showSearch = false;
    this.fillContacts();
  }

  /**
   * Metodo para llenar contactos
   */
  async fillContacts(){
    this.contacts = await this.chatService.getContacts();
    console.log(JSON.stringify(this.contacts))
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

  /**
   * cambia el estado de la barra de búsqueda
   */
  toggleSearch(){
    this.showSearch=!this.showSearch;
  }

  /**
   * buscar un contacto
   */
  searchContact(){

  }

}
