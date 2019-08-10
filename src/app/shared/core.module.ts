import {NgModule} from "@angular/core";
import {LoginComponents} from "../modules/auth/login";
import {RegisterComponents} from "../modules/auth/register";
import {FeaturesComponents} from "../modules/features";
import {PricingComponents} from "../modules/pricing";
import {SharedModule} from "./shared.module";
import {PlansComponents} from "../modules/plans";
import {PageNotFoundComponents} from "../modules/page-not-found";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ...LoginComponents,
    ...RegisterComponents,
    ...FeaturesComponents,
    ...PricingComponents,
    ...PlansComponents,
    ...PageNotFoundComponents
  ],
  providers: [],
  exports: [
    ...LoginComponents,
    ...RegisterComponents,
    ...FeaturesComponents,
    ...PricingComponents,
    ...PlansComponents,
    ...PageNotFoundComponents
  ],
})

export class CoreModule {}
