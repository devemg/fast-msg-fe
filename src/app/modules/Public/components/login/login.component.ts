import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      this.router.navigate(['/user'])
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
