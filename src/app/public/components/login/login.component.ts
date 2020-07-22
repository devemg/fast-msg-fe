import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError } from 'src/assets/extra-functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  handleError=handleError;
  
  loginForm:FormGroup;

  constructor(
    private formBulder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }else{
      //getFormValidationErrors(this.loginForm)
    }
  }

}
