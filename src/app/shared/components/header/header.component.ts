import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Array<{ text: string, path: string}> = [];
  @ViewChild('sideMenuDiv', {static: false}) sideNavDiv: ElementRef;

  constructor(private router: Router, private loggingService: LoggingService) {

  }

  openNav() {
    this.sideNavDiv.nativeElement.style.width = '250px';
  }

  closeNav() {
    this.sideNavDiv.nativeElement.style.width = '0';

  }

  ngOnInit() {
    this.router.config.forEach( route => {
      if (route.component !== undefined) {
        this.links.unshift({
          text: route.component.name.replace('Component', ''),
          path: route.path
        });
      }
    });
  }

  logout() {
    if (!localStorage.getItem('authToken') || !localStorage.getItem('authTokenLastUntil')) {
      return;
    }
    this.loggingService.logOut().subscribe(
      (data) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authTokenLastUntil');
      }, (error) => {
        if (typeof error.error.message === 'string' || error.error.message instanceof String) {
          if (error.error.message.length < 30) {
            alert(error.error.message);
          }
        } else {
          alert('Internal server error');
        }
      }
    );
  }
}
