import { Component, OnInit } from '@angular/core';
import {PlanModel} from "./plan/plan.model";
import {PlansService} from "../../../shared/services/plans.service";
import PlansFromBackendInterface from "../../../_interfaces/plans-from-backend.interface";

@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit {

  userPlans: PlanModel[] = [];

  private error = '';

  constructor(private plansService: PlansService) { }

  ngOnInit() {
    this.error = '';
    this.plansService.getAllUserPlans().subscribe(
      (plans: PlansFromBackendInterface[]) => {
        this.userPlans = [];
        plans.forEach((plan) => {
          this.userPlans.push(new PlanModel(
            plan._id, plan.type, plan.price, plan.description, plan.startTime, plan.finishTime, plan.additionalWishes
          ))
        });
        this.plansService.userPlans = this.userPlans;
      }, (error) => {
        this.error = this.plansService.handleError(error);
      }
    );
    this.plansService.userPlansChanged.subscribe(
      (plans: PlanModel[]) => {
        this.userPlans = plans;
      }
    );
  }

  onPlanEdited(plan: PlanModel) {
    this.plansService.mode = 'form';
    this.plansService.operationType = 'edit';
    this.plansService.focusedPlan = plan;
  }

  onPlanDeleted(plan: PlanModel) {
    this.plansService.mode = 'form';
    this.plansService.operationType = 'delete';
    this.plansService.focusedPlan = plan;
  }
}
