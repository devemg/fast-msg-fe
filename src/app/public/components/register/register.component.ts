import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError, passwordMatchValidator } from 'src/assets/scripts/extra-functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  handleError=handleError;

  registerForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,]],
      gender:[0,[Validators.required]],
      dateBirth:['',[Validators.required]]
    },{
      validator: passwordMatchValidator
   }
    )
  } 

  submit(){
    if(this.registerForm.valid){
      
    }else{
      console.log(this.registerForm.value)
      getFormValidationErrors(this.registerForm)
    }
  }

}
