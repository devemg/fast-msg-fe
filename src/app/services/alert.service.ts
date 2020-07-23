import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  holaMundo(){
    Swal.fire('Hola Mundo!')
    console.log("hola Mundo")
  }

}
