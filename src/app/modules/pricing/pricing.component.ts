import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../shared/services/logging.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
  }

  checkIfLogged() {
    if (!this.loggingService.isLogged) {
      alert("Please log in first!");
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  buyEnterprise() {
    console.log("buy enterprise");
    if (this.checkIfLogged()) {
      return;
    }
    console.log("enterprise is bought");
  }

  buyPremium() {
    console.log("buy premium");
    if (this.checkIfLogged()) {
      return;
    }
    console.log("premium is bought");
  }

  buyStarter() {
    console.log("buy starter");
    if (this.checkIfLogged()) {
      return;
    }
    console.log("starter is bought");
  }

}
