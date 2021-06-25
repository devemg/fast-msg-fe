import { Component, OnInit, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { MenuOption, options } from './options';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  options: MenuOption [];
  showToolbar = true;
  
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private breakpointObserver:BreakpointObserver,
    private utilservice: UtilsService) {
    this.options = options;
  }

  ngOnInit() { 
    this.utilservice.getMenuObservable().subscribe(res=>{
      this.showToolbar = res;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.breakpointObserver.observe([
        '(max-width: 550px)'
          ]).subscribe(result => {
            if (result.matches) {
              this. sidenav.close();
              this.sidenav.mode = 'over';
            }else {
              this. sidenav.open();
              this.sidenav.mode = 'side';
            }
          }); 
    }, 200);
  }

  selectRoute(){
    if(this.sidenav.mode == 'over'){
      this.sidenav.close();
    }
  }

  logout() {
    this.selectRoute();
    this.authService.logout();
    this.router.navigate(['']);
  }

}
