import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-access-message',
  templateUrl: './guest-access-message.component.html',
  styleUrls: ['./guest-access-message.component.scss']
})
export class GuestAccessMessageComponent implements OnInit {

  showIt = true;
  contact = {
    email: 'invitado@fastmessages.com',
    password: 'fastmessages'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
