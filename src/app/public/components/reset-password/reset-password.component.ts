import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { handleError } from 'src/assets/scripts/extra-functions';

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
