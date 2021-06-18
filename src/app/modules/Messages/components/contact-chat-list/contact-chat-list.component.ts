import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { ChatPreview } from '../../models/chat-preview';
import { MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-contact-chat-list',
  templateUrl: './contact-chat-list.component.html',
  styleUrls: ['./contact-chat-list.component.scss']
})
export class ContactChatListComponent implements OnInit {

  chatList: ChatPreview[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadList();
  }

  /**
   * load list of contacts
   */
  loadList() {
    this.messageService.getChatList().then(res=>{
      this.chatList = res;
    })
    .catch(err=>console.log(err));
  }

  /**
   * Send chat selected id to main chat component
   * @param id 
   */
  selectChat(event:MatSelectionListChange) {
    const id = event.options[0].value;
    //just for random data 
    let chat = this.chatList.find(element=>element.id == id);
    if(chat){
      this.messageService.changeChat(chat);
    }
  }

}
