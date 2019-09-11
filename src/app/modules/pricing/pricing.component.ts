import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../../shared/services/logging.service";
import {Router} from "@angular/router";
import {PlansService} from "../../shared/services/plans.service";
import {PlanModel} from "../plans/show-plans/plan/plan.model";

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
    if (this.checkIfLogged()) {
      return;
    }

    let enterprisePlan: PlanModel = new PlanModel(
      '',
      'Enterprise',
      'Custom pricing',
      `A plan to suit the needs of your
                    complex or large organization`
    );

    this.plansService.moveToPlanStage(enterprisePlan);
  }

  buyPremium() {
    if (this.checkIfLogged()) {
      return;
    }

    let premiumPlan: PlanModel = new PlanModel(
      '',
      'Premium',
      '$18',
      'Effortless team time management'
    );
    this.plansService.moveToPlanStage(premiumPlan);
  }

  buyStarter() {
    if (this.checkIfLogged()) {
      return;
    }

    let starterPlan: PlanModel = new PlanModel(
      '',
      'Starter',
      '$9',
      'Compact time tracking & reporting'
    );
    this.plansService.moveToPlanStage(starterPlan);
  }

}
