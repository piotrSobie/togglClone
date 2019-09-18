import {EventEmitter} from "@angular/core";
import {PlanModel} from "../../modules/plans/show-plans/plan/plan.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PlansUrlsEnum} from "../../_enums/plans-urls.enum";
import {Observable} from "rxjs";
import PlansFromBackendInterface from "../../_interfaces/plans-from-backend.interface";

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


  getAllUserPlans(): Observable<PlansFromBackendInterface[]> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.get<PlansFromBackendInterface[]>(environment.backendUrl + PlansUrlsEnum.GET_ALL_PLANS, {
      headers: myHeaders
    });
  }

  addUserPlan(plan: PlanModel): Observable<PlansFromBackendInterface> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });

    return this.http.post<PlansFromBackendInterface>(environment.backendUrl + PlansUrlsEnum.CREATE, {
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

  editUserPlan(plan: PlanModel): Observable<PlansFromBackendInterface> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.patch<PlansFromBackendInterface>(environment.backendUrl + PlansUrlsEnum.EDIT + plan._id, {
      additionalWishes: plan.additionalWishes
    }, {
      headers: myHeaders
    });
  }

  deleteUserPlan(plan: PlanModel): Observable<{}> {
    const myHeaders = new HttpHeaders({
      'Authorization': localStorage.getItem('authToken')
    });
    return this.http.delete(environment.backendUrl + PlansUrlsEnum.DELETE + plan._id, {
      headers: myHeaders
    });
  }

  handleError(error): string {
    if (error.error.message) {
      if (typeof error.error.message === 'string' || error.error.message instanceof String) {
        return error.error.message;
      }
    } else {
      return 'Unknown error';
    }
  }
}
