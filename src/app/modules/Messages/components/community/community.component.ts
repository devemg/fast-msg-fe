import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {


  contactList: Contact[] = [];

  isContacts = false;
  constructor(
    private contactService: MessagesService, 
    private snackBar: MatSnackBar, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  
  ngOnInit(): void {
    let url = this.activatedRoute.snapshot.url[0].path;
    if(url.includes('community')){
      this.loadCommunity();
    } else {
      this.isContacts = true;
      this.getContactsFromUser();
    }
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

    /**
   * add contact to list of user
   * @param contact 
   */
     addContact(contact: Contact){
      this.contactService.addContact(contact).then(res=>{
        // success message
        this.snackBar.open('Contacto Agregado','Ok',{duration:3000});
        this.router.navigate(['../contacts'],{relativeTo:this.activatedRoute});
      })
      .catch(err=>console.log(err));
    }
  
    /**
     * remove contact from user list
     */
    removeContact(id: string){
      this.contactService.removeContact(id).then(res=>{
        // success message
        this.snackBar.open('Contacto Eliminado','Ok',{duration:3000});
      })
      .catch(err=>console.log(err));
    }
  
    /**
     * get contact list
     * @returns 
     */
    getContactsFromUser(){
      this.contactService.getContactsFromUser().then(res=>{
        this.contactList = res;
      })
      .catch(err=>{
        this.contactList = [];
        console.log(err);
      });
    }
    

}
