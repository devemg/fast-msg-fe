import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Contact } from '../../../models/contact.model';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/chat/services/user.service';
import { getUrlImage } from 'src/assets/extra-functions';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  getUrlImage=getUrlImage;
  
  @Output('chat')
  sendChatId = new EventEmitter<string>();
  
  contacts:Contact[]; 
  showSearch:boolean;

  constructor(
    public chatService:ChatService,
    public alertService:AlertService,
    public userService:UserService
  ) { }

  ngOnInit(): void {
    this.showSearch = false;
    this.fillContacts();
  }

  /**
   * Metodo para llenar contactos
   */
  async fillContacts(){
    this.contacts = await this.userService.getContacts();
  }

  /**
   * id de contacto para eliminar contacto de 
   * lista de usuario
   * @param id de contacto
   */
  deleteContact(id){
    this.userService.deleteContact(id)
    .then(response=>{
      this.alertService.alertSuccess('Contacto','Contacto eliminado con éxito')
      this.fillContacts();
    })
    .catch(error=>{
      this.alertService.alertError('Contacto','El contacto no pudo ser eliminado')
    })
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
