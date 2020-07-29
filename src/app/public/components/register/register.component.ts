import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError, passwordMatchValidator } from 'src/assets/extra-functions';
import { AuthService } from '../../services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
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
    private authService:AuthService,
    private alertService:AlertService,
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
      this.authService.register(this.registerForm.value)
      .subscribe(data=>{
        this.alertService.alertSuccess('Registro Éxitoso',
        'Revise su correo electrónico para realizar la confirmación de su cuenta')
        .then(res=>{
          this.router.navigate(['/'])
        })
      },
      error=>{
        this.alertService.alertError('Registro',error.error.message)
      })
    }else{
      console.log(this.registerForm.value)
      getFormValidationErrors(this.registerForm)
    }
  }

}
