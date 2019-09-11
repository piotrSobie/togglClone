import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanModel} from "../show-plans/plan/plan.model";
import {NgForm} from "@angular/forms";
import {PlansService} from "../../../shared/services/plans.service";

@Component({
  selector: 'app-form-plan',
  templateUrl: './form-plan.component.html',
  styleUrls: ['./form-plan.component.css']
})
export class FormPlanComponent implements OnInit, OnDestroy {

  plan: PlanModel = new PlanModel('', '', '', '', '', '', '');

  private operation;
  private added = false;
  private edited = false;
  private deleted = false;
  private error = '';

  constructor(private plansService: PlansService) { }

  resetMessages() {
    this.added = false;
    this.edited = false;
    this.deleted = false;
    this.error = '';
  }

  ngOnInit() {
    this.plan = this.plansService.focusedPlan;
    this.operation = this.plansService.operationType;
  }

  onSubmit(form: NgForm) {
    this.resetMessages();
    if (!form.valid) {
      return;
    }
    this.plan.additionalWishes = form.value.additionalWishes;
    if (this.operation === 'add') {
      this.plansService.addUserPlan(this.plan).subscribe(
        (data) => {
          this.added = true;
        }, (error) => {
          this.error = this.plansService.handleError(error);
        }
      );
    } else if (this.operation === 'edit') {
      this.plansService.editUserPlan(this.plan).subscribe(
        (data) => {
          this.edited = true;
        }, (error) => {
          this.error = this.plansService.handleError(error);
        }
      );
    } else if (this.operation === 'delete') {
      this.plansService.deleteUserPlan(this.plan).subscribe(
        (data) => {
          this.deleted = true;
        }, (error) => {
          this.error = this.plansService.handleError(error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.plansService.focusedPlan = new PlanModel('', '', '', '', '', '', '');
  }
}
