import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.scss']
})
export class FooterInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Get year
   */
  get Year() {
    let date = new Date();
    return date.getFullYear();
  }
}
