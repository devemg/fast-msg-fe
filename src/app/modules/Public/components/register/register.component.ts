import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
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
      this.router.navigate(['']);
    }else{
      console.log(this.registerForm.value)
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

export function passwordMatchValidator(control: AbstractControl) {
  const password: string = control.get('password').value; 
  const confirmPassword: string = control.get('confirmPassword').value; 
  if (password !== confirmPassword) {
    control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
  }
}
