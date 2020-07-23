import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError } from 'src/assets/extra-functions';
import { AuthService } from '../../services/auth.service';

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
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      .subscribe(data=>{
        console.log(data)
      },
      error=>{
        console.error("Error",error)
      })
    }else{
      //getFormValidationErrors(this.loginForm)
    }
  }

}
