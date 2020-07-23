import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError, passwordMatchValidator } from 'src/assets/extra-functions';
import { AuthService } from '../../services/auth.service';

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
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,]]
    },{
      validator: passwordMatchValidator
   }
    )
  }

  submit(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value)
      .subscribe(data=>{
        console.log(data)
      },
      error=>{
        console.error("Error",error)
      })
    }else{
      getFormValidationErrors(this.registerForm)
    }
  }

}
