import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlanModel} from "./plan.model";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  @Output() planEdited = new EventEmitter<PlanModel>();
  @Output() planDeleted = new EventEmitter<PlanModel>();
  @Input() plan: PlanModel;

  constructor() { }

  ngOnInit() {
  }

  onPlanEdited() {
    this.planEdited.emit(this.plan);
  }

  onPlanDeleted() {
    this.planDeleted.emit(this.plan);
  }

}
