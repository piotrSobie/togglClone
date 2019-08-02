import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitSignUp(form: NgForm) {
    if (!form.valid) {
      return;
    }

    console.log("TODO, regular signUp");
    console.log(form.value);
    form.reset();
  }

  signUpWithGoogle() {
    console.log("TODO, signUp with google");
  }

}
