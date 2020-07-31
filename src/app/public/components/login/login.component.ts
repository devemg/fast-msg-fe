import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { handleError } from 'src/assets/scripts/extra-functions';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/chat/services/sesion/sesion.service';
import { PublicService } from '../../services/public/public.service';

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
    private publicService:PublicService,
    private alertService:AlertService,
    private sesionService:SesionService,
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
      this.publicService.login(this.loginForm.value)
      .subscribe(data=>{
        this.sesionService.setToken(data);
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
