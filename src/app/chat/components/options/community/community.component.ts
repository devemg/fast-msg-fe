import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/chat/models/contact.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/chat/services/user/user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  //paginator 
  pageSize: number = 5;
  currentPage: Contact[] = [];
  contacts: Contact[] = [];
  errorSearchMessage = '';

  searchText: FormControl;

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.searchText = new FormControl('', [Validators.required])
  }

  /**
   * Buscar usuarios por correo electrónico
   */
  async searchByEmail() {
    this.currentPage = [];
    this.errorSearchMessage = '';
    if (this.searchText.valid) {
      this.contacts = await this.userService.getContactsByEmail(this.searchText.value);
      if (this.contacts.length == 0) {
        this.errorSearchMessage = 'No se ha encontrado usuarios que conincidan con la búsqueda'
      } else {
        this.handlePages(0, this.pageSize)
      }
    } else {
      if (!this.searchText.value) {
        this.errorSearchMessage = 'Debe ingresar un correo electrónico'
      }
    }
  }

  /**
   * Buscar usuarios por nombre
   */
  async searchByName() {
    this.currentPage = [];
    this.errorSearchMessage = '';
    if (this.searchText.valid) {
      this.contacts = await this.userService.getContactsByName(this.searchText.value);     
      if (this.contacts.length == 0) {
        this.errorSearchMessage = 'No se ha encontrado usuarios que conincidan con la búsqueda'
      } else {
        this.handlePages(0, this.pageSize)
      }
    } else {
      if (!this.searchText.value) {
        this.errorSearchMessage = 'Debe ingresar un nombre'
      }
    }
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
   * Limpiar elementos en paginator de usuarios
   */
  clearSearchUsers() {
    this.searchText.setValue('');
    this.currentPage = [];
    this.errorSearchMessage = '';
  }

  /**
  * agregar contacto al usuario
  */
  addContact(id) {
    this.userService.addContact(id)
      .then(res => {
       /* this.alertService.alertSuccess('Contacto', 'Contacto agregado con éxito')
        .then(res=>{
          this.clearSearchUsers()
        })*/
      },
        error => {
          console.log(error)
         // this.alertService.alertError('Contacto', 'Error al agregar contacto')
        })
  }

}
