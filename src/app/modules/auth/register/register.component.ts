import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoggingService} from "../../../shared/services/logging.service";
import UserAndTokenInterface from "../../../_interfaces/userAndToken.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  duplicateEmail = false;
  error = '';

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  resetMessage() {
    this.duplicateEmail = false;
    this.error = '';
  }

  onSubmitSignUp(form: NgForm) {
    this.resetMessage();
    if (!form.valid) {
      return;
    }

    this.loggingService.register(form.value.email, form.value.password, form.value.location)
      .subscribe((data: UserAndTokenInterface) => {
        const authTokenLastTill = new Date().getTime() + data.tokenData.expiresIn * 1000;
        localStorage.setItem('authToken', data.tokenData.token);
        localStorage.setItem('authTokenLastUntil', authTokenLastTill.toString());
      }, (error) => {
        if (error.error.message.code === 11000) {
          this.duplicateEmail = true;
        } else {
          this.error = this.loggingService.handleError(error);
        }
      });

    form.reset();
  }
}
