import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-access-message',
  templateUrl: './guest-access-message.component.html',
  styleUrls: ['./guest-access-message.component.scss']
})
export class GuestAccessMessageComponent implements OnInit {

  showIt = true;
  constructor() { }

  ngOnInit(): void {
  }

}
