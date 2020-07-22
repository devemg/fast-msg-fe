import { FormGroup, ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

/**
  * Muestra los errores del formulario por los cuales no es valido
  */
export function getFormValidationErrors(frm: FormGroup) {
    Object.keys(frm.controls).forEach(key => {

        const controlErrors: ValidationErrors = frm.get(key).errors;
        if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
                console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            });
        }
    });
}

/**
* Función que hace la validacion de el atributo del formulario según las restricciones
* retorna true si hay error
* retorna false si no hay error
*/
export function handleError(form: FormGroup, controlName: string, errorName: string) {
    return form.controls[controlName].hasError(errorName);
}

export function passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; 
    const confirmPassword: string = control.get('confirmPassword').value; 
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }