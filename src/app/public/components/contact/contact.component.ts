import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getFormValidationErrors, handleError } from 'src/assets/scripts/extra-functions';
import { AlertService } from 'src/app/services/alert/alert.service';
import { PublicService } from '../../services/public/public.service';

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
    private publicService:PublicService,
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
      this.publicService.contact(this.contactForm.value)
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
