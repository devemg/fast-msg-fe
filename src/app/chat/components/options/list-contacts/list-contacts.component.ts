import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Contact } from '../../../models/contact.model';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
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

}
