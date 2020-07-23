import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { options } from './options';
import { SocketChatService } from '../../services/socket-chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  options:any[];
  indexOption:number;
  title_option:string;

  idChat:string;

  constructor(
    private socketService:SocketChatService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.indexOption = -1;
    this.options = options;
    this.title_option='';
    this.idChat=null;
    this.socketService.registerInSocketChat()
  }

  /**
   * Método para cerrar el sidenav
   */
  closeSideNav(){
    this.indexOption = -1;
    this.sidenav.close();
  }

  /**
   * Método para abrir el sidenav
   * @param index de opcion
   */
  openSideNav(index:number){
    
    if(index!=this.indexOption && index!= (this.options.length-1)){
      this.title_option = this.options[index].title;
      this.indexOption = index;
      this.sidenav.open();
    }else if (index == (this.options.length-1)) {
      this.router.navigate(['../'])
    }else{
      this.title_option = '';
      this.indexOption = -1;
      this.sidenav.close();
    }

  }

  /**
   * Método retornar el index en options segun el titulo
   * @param tittle de la opcion
   */
  getIndex(tittle:string):number{
    return this.options.findIndex(element=>element.title === tittle)
  }

  changeChat(event){
    this.closeSideNav();
    this.idChat = event;
  }

}
