import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuOption, options } from './options';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  options: MenuOption [];
  indexOption:number;
  title_option:string;

  idChat:string;

  constructor(
    //private socketService:SocketChatService,
    private router:Router,
    private sesionService:LocalStorageService
  ) { }

  ngOnInit(): void {
    this.indexOption = -1;
    this.options = options;
    this.title_option='';
    this.idChat=null;
    //this.socketService.registerInSocketChat()
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
    console.log(index)  
   /* if(index!=this.indexOption){
      this.title_option = this.options[index].title;
      this.indexOption = index;
      this.sidenav.open();
    }else{
      this.title_option = '';
      this.indexOption = -1;
      this.sidenav.close();
    }*/

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

  closeChat(){
    this.idChat = null;
  }

  closeSesion(){
    this.sesionService.clearToken()
    this.router.navigate(['../'])
  }

}
