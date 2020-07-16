import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { options } from './options';

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

  constructor() { }

  ngOnInit(): void {
    this.indexOption = 2;
    this.options = options;
    this.title_option='Chats';
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
    if(index!=this.indexOption){
      this.title_option = this.options[index].title;
      this.indexOption = index;
      this.sidenav.open();
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

}
