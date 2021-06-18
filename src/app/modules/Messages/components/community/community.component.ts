import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { MessagesService } from '../../Services/messages.service';
import { RandomDataService } from '../../Services/random-data.service';

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
    private randomService: RandomDataService,
    private router: Router) { }

  
  ngOnInit(): void {
    let url = this.activatedRoute.snapshot.url.length>0?this.activatedRoute.snapshot.url[0].path:'community';
    if(url.includes('community')){
      this.isContacts = false;
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
      //this.contactService.removeContact(id).then(res=>{
        // success message
      let index = this.contactList.findIndex(element=>element._id == id); 
      if(index > -1){
        this.contactList.splice(index,1);
      }
        this.snackBar.open('Contacto Eliminado','Ok',{duration:3000});
      //})
      //.catch(err=>console.log(err));
    }
  
    /**
     * get contact list
     * @returns 
     */
    getContactsFromUser(){
      this.contactService.getContactsFromUser().then(res=>{
        this.contactList = res; //.concat(this.randomService.getContacts(2));
      })
      .catch(err=>{
        this.contactList = [];
        console.log(err);
      });
    }
    

  createChat(contact: Contact){
    let chat = this.contactService.createChat(contact);
    this.router.navigate(['../chat'],{relativeTo:this.activatedRoute});
  }
}
