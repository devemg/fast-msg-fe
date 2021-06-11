import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

  @Input() title: string;  
  @Input() text: string;
  @Input() image: string; 
  @Input() aligment: string;  
  @Input() color: string;     

  constructor() { }

  ngOnInit(): void {
  }

}
