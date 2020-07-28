import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/chat/models/contact.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from 'src/app/chat/services/chat.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  //paginator 
  pageSize:number = 5;
  currentPage: Contact[] = [];
  contacts: Contact[] = [];

  searchText: FormControl;
  
  constructor(
    public dialog: MatDialog,
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.searchText = new FormControl('', [Validators.required])
  }

  /**
   * Buscar usuarios por correo electrónico
   */
  async searchByEmail() {
    this.contacts = await this.chatService.getContactsByEmail();
    this.handlePages(0, this.pageSize)
  }

  /**
   * Buscar usuarios por nombre
   */
  searchByName() {
  }

  /**
   * Evento generado al cambiar de pagina en Paginator
   * @param event evento de paginacion
   */
  pagePaginator(event) {
    this.handlePages(event.pageIndex * event.pageSize, event.pageSize)
  }


  /**
   * Handler de paginación
   */
  handlePages(inicio, pageSize) {
    let fin = inicio + (pageSize);
    fin = fin < this.contacts.length ? fin : this.contacts.length;
    this.currentPage = this.contacts.slice(inicio, fin);
  }


  /**
  * agregar contacto al usuario
  */
  addContact(id) {

  }

}
