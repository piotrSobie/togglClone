import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {
    if (!form.valid) {
      return;
    }

    console.log("TODO, regular login");
    console.log(form.value);
    form.reset();
  }

  loginWithGoogle() {
    console.log("TODO, login with google");
  }
}
