import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../shared/services/logging.service";
import UserProfileInterface from "../../_interfaces/userProfile.interface";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  private user: UserProfileInterface = {__v: "", _id: "", email: "", location: "", password: ""};
  private error = '';
  private operation;
  private formError = false;
  private duplicateEmail = false;
  private edited = false;
  private deleted = false;
  private timeToRedirectAfterDeletion = 3;

  constructor(private loggingService: LoggingService, private router: Router) { }

  loadUser() {
    this.loggingService.getUser()
      .subscribe((data: UserProfileInterface) => {
        this.user = data;
      }, (error) => {
        this.error = error;
      });
  }

  ngOnInit() {
    this.loadUser();
  }

  validateEmail(email) {
    const regexPass = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexPass.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    const regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return  regexPass.test(password);
  }

  resetMessages() {
    this.edited = false;
    this.duplicateEmail = false;
    this.formError = false;
    this.error = '';
  }

  onSubmit(form: NgForm){
    if (!(this.validateEmail(form.value.email) && (!form.value.password || this.validatePassword(form.value.password)) && form.value.location && this.operation)) {
      this.formError = true;
      return;
    }

    this.resetMessages();

    if (this.operation === 'edit') {
      this.loggingService.editUser(this.user).subscribe(
        (editedUser: UserProfileInterface) => {
          this.edited = true;
          this.user = editedUser;
        }, (error) => {
          if (error.error.message.code === 11000) {
            this.duplicateEmail = true;
          } else {
            this.error = this.loggingService.handleError(error);
          }
        }
      );
    } else if (this.operation === 'delete') {
      this.loggingService.deleteUser().subscribe(
        (data) => {
          this.deleted = true;
          localStorage.removeItem('authToken');
          localStorage.removeItem('authTokenLastUntil');
          setTimeout(() => {
            this.router.navigate(['/']);
          }, this.timeToRedirectAfterDeletion*1000);
        }, (error) => {
          this.error = this.loggingService.handleError(error);
        }
      );
    }
  }

}
