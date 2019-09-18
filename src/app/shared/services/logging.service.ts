import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import UserProfileInterface from "../../_interfaces/user-profile.interface";
import {UserUrlsEnum} from "../../_enums/user-urls.enum";
import {Observable} from "rxjs";
import UserAndTokenInterface from "../../_interfaces/user-and-token.interface";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private isLogged: boolean = false;

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const time = localStorage.getItem('authTokenLastUntil');
    return new Date().getTime() < Number(time);
  }

  register(email: string, password: string, location: string): Observable<UserAndTokenInterface> {
    return this.http.post<UserAndTokenInterface>(environment.backendUrl + UserUrlsEnum.REGISTER, {
      email,
      password,
      location
    });
  }

  logIn(email: string, password: string): Observable<UserAndTokenInterface> {
    return this.http.post<UserAndTokenInterface>(environment.backendUrl + UserUrlsEnum.LOGIN, {
      email,
      password
    });
  }

  logOut(): Observable<{}> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.post(environment.backendUrl + UserUrlsEnum.LOGOUT, {}, {
      headers: myHeaders
    });
  }

  getUser(): Observable<UserProfileInterface> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.get<UserProfileInterface>(environment.backendUrl + UserUrlsEnum.GET_USER, {
      headers: myHeaders
    });
  }

  editUser(user: UserProfileInterface): Observable<UserProfileInterface> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    delete user._id;
    if (!user.email) {
      delete user.email;
    }
    if (!user.location) {
      delete user.location;
    }
    if (!user.password) {
      delete user.password;
    }
    return this.http.patch<UserProfileInterface>(environment.backendUrl + UserUrlsEnum.EDIT_USER, user, {
      headers: myHeaders
    });
  }

  deleteUser(): Observable<UserProfileInterface> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.delete<UserProfileInterface>(environment.backendUrl + UserUrlsEnum.DELETE_USER, {
      headers: myHeaders
    });
  }

  getNewAuthToken(): Observable<{ expiresIn: number, token: string }> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.get<{ expiresIn: number, token: string }>(environment.backendUrl + UserUrlsEnum.NEW_AUTH_TOKEN, {
      headers: myHeaders
    });
  }
  
  handleError(error): string {
    if (error.error.message) {
      if (typeof error.error.message === 'string' || error.error.message instanceof String) {
        return error.error.message;
      }
    } else {
      return 'Unknown error';
    }
  }
}
