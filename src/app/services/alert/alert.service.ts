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

  alert(title,text,type){
    Swal.fire(title,text,type)
  }

  alertError(title,text){
    return Swal.fire({
      title: 'Error en '+title,
      html: text,
      icon: 'error',
    })
  } 

  alertSuccess(title,text){
    return Swal.fire({
      title: title,
      html: text,
      icon: 'success'
    })
  }

  confirm(){
    return Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
