import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import UserProfileInterface from "../../_interfaces/userProfile.interface";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private isLogged: boolean = false;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    const time = localStorage.getItem('authTokenLastUntil');
    return new Date().getTime() < Number(time);
  }

  register(email: string, password: string, location: string) {
    return this.http.post(environment.backendUrl + '/auth/register', {
      email,
      password,
      location
    });
  }

  logIn(email: string, password: string) {
    return this.http.post(environment.backendUrl + '/auth/login', {
      email,
      password
    });
  }

  logOut() {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.post(environment.backendUrl + '/auth/logout', {}, {
      headers: myHeaders
    });
  }

  getUser() {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.get(environment.backendUrl + '/user/me', {
      headers: myHeaders
    });
  }

  editUser(user: UserProfileInterface) {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    delete user._id;
    delete user.__v;
    if (!user.email) {
      delete user.email;
    }
    if (!user.location) {
      delete user.location;
    }
    if (!user.password) {
      delete user.password;
    }
    return this.http.patch(environment.backendUrl + '/user/edit', user, {
      headers: myHeaders
    });
  }

  deleteUser() {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.delete(environment.backendUrl + '/user/delete', {
      headers: myHeaders
    });
  }

  getNewAuthToken() {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.get(environment.backendUrl + '/auth/get-new-auth-token', {
      headers: myHeaders
    });
  }
  
  handleError(error) {
    if (error.error.message) {
      if (typeof error.error.message === 'string' || error.error.message instanceof String) {
        return error.error.message;
      }
    } else {
      return 'Unknown error';
    }
  }
}
