import { Component, OnInit } from '@angular/core';
import {PlansService} from "../../shared/services/plans.service";
import {PlanModel} from "./show-plans/plan/plan.model";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  userPlans: PlanModel[];
  error = '';

  constructor(private plansService: PlansService) { }

  ngOnInit() {
    this.error = '';
   this.plansService.userPlansChanged.subscribe(
     (plans: PlanModel[]) => {
       this.userPlans = plans;
     }, (error) => {
        this.error = this.plansService.handleError(error);
     }
   );
  }

  showPlans() {
    this.plansService.mode = 'show';
  }

  formRecipe() {
    this.plansService.mode = 'form';
  }

}
