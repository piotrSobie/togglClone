import { Component, OnInit } from '@angular/core';
import {PlansService} from "../../shared/services/plans.service";
import {PlanModel} from "./plan/plan.model";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  userPlans: PlanModel[];

  constructor(private plansService: PlansService) { }

  ngOnInit() {
   this.userPlans = this.plansService.getPlans();
   this.plansService.userPlansChanged.subscribe(
     (plans: PlanModel[]) => {
       this.userPlans = plans;
     }
   );
  }

  onPlanDeleted(plan: PlanModel) {
    this.plansService.deletePlan(plan);
  }

}
