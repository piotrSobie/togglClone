import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NG_VALIDATORS, NgForm} from "@angular/forms";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }


    console.log(form.value);
    form.reset();
  }
}
