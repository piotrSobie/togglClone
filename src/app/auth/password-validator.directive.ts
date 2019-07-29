import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[validatePassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    return checkPassword(control);
  }
}

export function checkPassword(control: AbstractControl) {
  const regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const testPass = regexPass.test(control.value);
  return !testPass ? {'forbiddenName': {value: control.value}} : null;
}
