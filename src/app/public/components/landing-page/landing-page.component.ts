import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss','./landing-page-resp.component.scss']
})
export class LandingPageComponent implements OnInit {

  highlights = [
    {
      title: 'Familia',
      text: `Integer scelerisque nulla ut laoreet consequat. Quisque euismod, libero at pretium fermentum, enim dolor scelerisque est, ut posuere ligula dui nec nunc. `,
      image: 'assets/img/cards/family.jpg',
      aligment: 'left',
      color: '#005F73'
    },
    {
      title: 'Amigos',
      text: `Integer scelerisque nulla ut laoreet consequat. Quisque euismod, libero at pretium fermentum, enim dolor scelerisque est, ut posuere ligula dui nec nunc. `,
      image: 'assets/img/cards/friends.jpg',
      aligment: 'right',
      color:'#001219'
      
    },
    {
      title: 'Diversión',
      text: `Integer scelerisque nulla ut laoreet consequat. Quisque euismod, libero at pretium fermentum, enim dolor scelerisque est, ut posuere ligula dui nec nunc. `,
      image: 'assets/img/cards/play.jpg',
      aligment: 'left',
      color: '#9B2226'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
