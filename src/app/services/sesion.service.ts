import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  getUserID(){
    return 1;
  }

  getProfile():Profile {
    return {
      name:"Emely Garcia",
      image:"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/29511815_2015136788513675_8681625286948105454_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=IzUhawLCxgQAX9XHPQE&_nc_ht=scontent-mia3-1.xx&oh=336b3795e2a0c3b6737b410908f96d39&oe=5F36AD64"
    }
  }

}
