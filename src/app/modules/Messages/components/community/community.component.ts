import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

}
