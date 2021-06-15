import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../Services/contact.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contactList: Contact[] = [];

  ngOnInit(): void {
  }

  /**
   * Load random contacts
   */
  loadCommunity() {
    this.contactService.getCommunity().then(res=>{
      this.contactList = res; 
    })
    .catch(err=>console.log(err));
  }

}
