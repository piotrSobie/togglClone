import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {LoggingService} from "../shared/services/logging.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private loggingService: LoggingService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loggingService.isAuthenticated()) {
      return true;
    }
    else {
      this.loggingService.getNewAuthToken().subscribe((data: { expiresIn: number, token: string }) => {
        console.log('getNewAuthToken');
        console.log(data);
        const authTokenLastTill = new Date().getTime() + data.expiresIn * 1000;
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('authTokenLastUntil', authTokenLastTill.toString());
        return true;
      }, (error) => {
        alert("Please login first!");
        this.router.navigate(['/login']);
      });
      // alert("Please login first!");
      // this.router.navigate(['/login']);
    }
  }

}
