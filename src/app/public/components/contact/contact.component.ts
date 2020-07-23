import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError } from 'src/assets/extra-functions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  handleError=handleError;

  contactForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]]
    })
  }

  submit(){
    if(this.contactForm.valid){
      this.authService.contact(this.contactForm.value)
      .subscribe(data=>{
        console.log(data)
      },
      error=>{
        console.error("Error",error)
      })
    }else {
      getFormValidationErrors(this.contactForm)
    }
  }

}
