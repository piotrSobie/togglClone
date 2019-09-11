import { PlansComponent } from "./plans.component";
import {ShowPlansComponents} from "./show-plans";
import {FormPlanComponents} from "./form-plan";

export const PlansComponents = [
  PlansComponent,
  ...ShowPlansComponents,
  ...FormPlanComponents
];

export {
  PlansComponent
}
