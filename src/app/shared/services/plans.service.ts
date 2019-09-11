import {EventEmitter} from "@angular/core";
import {PlanModel} from "../../modules/plans/show-plans/plan/plan.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export class PlansService {
  userPlansChanged = new EventEmitter<PlanModel[]>();
  public userPlans: PlanModel[] = [];
  mode = '';
  focusedPlan = new PlanModel('', '', '', '', '', '', '');
  operationType = '';

  constructor(private router: Router, private http: HttpClient) {}

  moveToPlanStage(plan: PlanModel) {
    this.operationType = 'add';
    this.focusedPlan = plan;
    this.mode ='form';
    this.router.navigate(['/plans']);
  }


  getAllUserPlans() {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.get(environment.backendUrl + '/plans/all', {
      headers: myHeaders
    });
  }

  addUserPlan(plan: PlanModel) {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });

    return this.http.post(environment.backendUrl + '/plans/create', {
      type: plan.type,
      price: plan.price,
      description: plan.description,
      startTime: plan.startDate,
      finishTime: plan.finishDate,
      additionalWishes: plan.additionalWishes
    }, {
      headers: myHeaders
    });
  }

  editUserPlan(plan: PlanModel) {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.patch(environment.backendUrl + '/plans/edit/' + plan._id, {
      additionalWishes: plan.additionalWishes
    }, {
      headers: myHeaders
    });
  }

  deleteUserPlan(plan: PlanModel) {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.delete(environment.backendUrl + '/plans/delete/' + plan._id, {
      headers: myHeaders
    });
  }

  handleError(error) {
    if (error.error.message) {
      if (typeof error.error.message === 'string' || error.error.message instanceof String) {
        return error.error.message;
      }
    } else {
      return 'Unknown error';
    }
  }
}
