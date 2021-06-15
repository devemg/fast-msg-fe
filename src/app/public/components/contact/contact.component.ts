import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]]
    })
  }

  submit(){
    
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
