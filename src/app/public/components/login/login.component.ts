import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { handleError } from 'src/assets/extra-functions';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from 'src/app/services/alert.service';
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
    private authService:AuthService,
    private alertService:AlertService,
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
      this.authService.login(this.loginForm.value)
      .subscribe(data=>{
        console.log(data)
        this.router.navigate(['../chat'])
      },
      error=>{
        //objeto de error del server = error.error 
        this.alertService.alertError('Inicio de Sesión',error.error.message)
      })
    }else{
      //getFormValidationErrors(this.loginForm)
    }
  }

}
