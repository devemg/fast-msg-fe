import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { handleError } from 'src/assets/scripts/extra-functions';
import { PublicService } from '../../services/public/public.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  handleError=handleError;
  
  loginForm:FormGroup;

  constructor(
    private formBulder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email:['',[Validators.email,Validators.required]]
    })
  }

  submit(){
    
  }

}
