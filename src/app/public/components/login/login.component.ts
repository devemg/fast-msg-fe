import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { handleError } from 'src/assets/scripts/extra-functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  handleError=handleError;
  
  loginForm:FormGroup;

  constructor(
    private formBulder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      console.log("Iniciando sesion....")
      this.router.navigate(['/chat'])

    }else{
      //getFormValidationErrors(this.loginForm)
    }
  }

}
