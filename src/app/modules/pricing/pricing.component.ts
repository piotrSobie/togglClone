import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../shared/services/logging.service";
import {Router} from "@angular/router";
import {PlansService} from "../../shared/services/plans.service";
import {PlanModel} from "../plans/plan/plan.model";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private plansService: PlansService,
              private router: Router) { }

  ngOnInit() {
  }

  checkIfLogged() {
    if (!this.loggingService.isAuthenticated()) {
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

    let enterprisePlan: PlanModel = new PlanModel(
      '../../../assets/common/pictures/hamburger.jpg',
      'Enterprise',
      'Custom pricing',
      `A plan to suit the needs of your
                    complex or large organization`
    );

    this.plansService.addPlan(enterprisePlan);
    console.log("enterprise is bought");
  }

  buyPremium() {
    console.log("buy premium");
    if (this.checkIfLogged()) {
      return;
    }

    let premiumPlan: PlanModel = new PlanModel(
      '../../../assets/common/pictures/hot-dog.jpg',
      'Premium',
      '$18',
      'Effortless team time management'
    );
    this.plansService.addPlan(premiumPlan);
    console.log("premium is bought");
  }

  buyStarter() {
    console.log("buy starter");
    if (this.checkIfLogged()) {
      return;
    }

    let starterPlan: PlanModel = new PlanModel(
      '../../../assets/common/pictures/pizza-slice.jpg',
      'Starter',
      '$9',
      'Compact time tracking & reporting'
    );
    this.plansService.addPlan(starterPlan);
    console.log("starter is bought");
  }

}
