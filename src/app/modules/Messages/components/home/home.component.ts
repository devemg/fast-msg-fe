import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuOption, options } from './options';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  options: MenuOption [];
 
  constructor(private authService: AuthService, private router: Router) {
    this.options = options;
  }

  ngOnInit() {
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
