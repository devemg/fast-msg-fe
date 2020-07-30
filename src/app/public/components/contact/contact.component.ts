import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError } from 'src/assets/scripts/extra-functions';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  handleError=handleError;

  contactForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private alertSevice:AlertService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]]
    })
  }

  submit(){
    if(this.contactForm.valid){
      this.authService.contact(this.contactForm.value)
      .subscribe(data=>{
        this.alertSevice.alertSuccess('Contacto',
        'Mensaje Envíado con éxito. <br/> ¡Espera nuestra respuesta pronto!')
      },
      error=>{
        this.alertSevice.alertError('Contacto',error.error.message)
      })
    }else {
      getFormValidationErrors(this.contactForm)
    }
  }

}
