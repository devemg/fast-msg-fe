import { Component, OnInit, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { MenuOption, options } from './options';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  options: MenuOption [];
 
  
  constructor(private authService: AuthService, private router: Router, private breakpointObserver:BreakpointObserver) {
    this.options = options;
  }

  ngOnInit() {  

  }

  ngAfterViewInit() {
    this.breakpointObserver.observe([
      '(max-width: 550px)'
        ]).subscribe(result => {
          if (result.matches) {
            this. sidenav.close();
          }else {
            this. sidenav.open();
          }
        }); 
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
