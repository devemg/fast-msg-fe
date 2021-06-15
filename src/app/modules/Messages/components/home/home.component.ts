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
  
  options: MenuOption [];
 
  constructor() {
    this.options = options;
  }

  ngOnInit() {
    
  }
}
