import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/chat/models/contact.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  constructor() { }

  contacts=[
    {"_id":"5f13218c8cb953232d4c4af1","name":"Roberto García","image":"photo"}]

  ngOnInit(): void {
  }

  /**
   * agregar contacto al usuario
   */
  addContact(){

  }

}
