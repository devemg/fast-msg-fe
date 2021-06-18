import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private formBulder:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBulder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.email,this.loginForm.value.password).then(res=>{
        this.router.navigate(['/user'])
      }).catch(err=>{
        console.log(err);
        if(err.status == 400){
         this.snackBar.open(err.error,'ok',{duration:2000});
        }
      });      
    }
  }

    /**
  * Función que hace la validacion de el atributo del formulario según las restricciones
  * retorna true si hay error
  * retorna false si no hay error
  */
     handleError(form: FormGroup, controlName: string, errorName: string) {
      return form.controls[controlName].hasError(errorName);
    }
}
