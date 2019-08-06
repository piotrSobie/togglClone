import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoggingService} from "../../../shared/services/logging.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.loggingService.isLogged = true;
    console.log("TODO, regular login");
    console.log(form.value);
    form.reset();
  }

  loginWithGoogle() {
    this.loggingService.isLogged = true;
    console.log("TODO, login with google");
  }
}
