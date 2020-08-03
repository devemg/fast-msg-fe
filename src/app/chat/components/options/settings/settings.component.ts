import { Component, OnInit } from '@angular/core';
import { themes } from './themes';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  themes = themes;

  constructor() { }

  ngOnInit(): void {
  }

}
