import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoggingService} from "../../../shared/services/logging.service";
import UserAndTokenInterface from "../../../_interfaces/userAndToken.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = '';

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  resetMessages() {
    this.error = '';
  }

  onSubmitLogin(form: NgForm) {
    this.resetMessages();
    if (!form.valid) {
      return;
    }

    this.loggingService.logIn(form.value.email, form.value.password).subscribe(
      (data: UserAndTokenInterface) => {
        const authTokenLastTill = new Date().getTime() + data.tokenData.expiresIn * 1000;
        localStorage.setItem('authToken', data.tokenData.token);
        localStorage.setItem('authTokenLastUntil', authTokenLastTill.toString());
      }, error => {
        this.error = this.loggingService.handleError(error);
      }
    );
    form.reset();
  }

}
