import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Array<{ text: string, path: string}> = [];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.config.forEach( route => {
      this.links.unshift({
        text: route.component.name.replace('Component', ''),
        path: route.path
      });
    });
  }

}
