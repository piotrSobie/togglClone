import {EventEmitter} from "@angular/core";
import {PlanModel} from "../../modules/plans/plan/plan.model";

export class PlansService {
  userPlansChanged = new EventEmitter<PlanModel[]>();
  private nextId = 1;
  private userPlans: PlanModel[] = [];

  getPlans() {
    console.log(this.userPlans);
    return this.userPlans.slice();
  }

  addPlan(plan: PlanModel) {
    plan.id = this.nextId;
    this.nextId++;
    this.userPlans.push(plan);
    this.userPlansChanged.emit(this.userPlans.slice());
  }

  deletePlan(plan: PlanModel) {
    this.userPlans = this.userPlans.filter((el) => el !== plan);
    this.userPlansChanged.emit(this.userPlans.slice());
  }
}
