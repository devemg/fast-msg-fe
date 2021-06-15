import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError } from 'src/assets/scripts/extra-functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  handleError=handleError;

  contactForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]]
    })
  }

  submit(){
    
  }

}
