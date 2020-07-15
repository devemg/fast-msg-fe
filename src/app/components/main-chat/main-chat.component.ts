import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Método para cerrar el sidenav
   */
  closeSideNav(){
    this.sidenav.close();
  }

  openSideNav(){
    this.sidenav.open()
  }

}
