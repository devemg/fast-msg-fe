import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/chat/models/contact.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/chat/services/user/user.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  listPeople: Profile[] = [];

  constructor() {

  }

  ngOnInit() {
    
  }

}
