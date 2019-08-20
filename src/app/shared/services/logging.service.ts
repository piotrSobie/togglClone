export class LoggingService {
  private isLogged: boolean = false;

  isAuthenticated() {
    return this.isLogged;
  }

  logIn() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }
}
