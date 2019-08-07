import {NgModule} from "@angular/core";
import {LoginComponents} from "../modules/auth/login";
import {RegisterComponents} from "../modules/auth/register";
import {FeaturesComponents} from "../modules/features";
import {PricingComponents} from "../modules/pricing";
import {TrainingComponents} from "../modules/training";
import {SharedModule} from "./shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ...LoginComponents,
    ...RegisterComponents,
    ...FeaturesComponents,
    ...PricingComponents,
    ...TrainingComponents
  ],
  providers: [],
  exports: [
    ...LoginComponents,
    ...RegisterComponents,
    ...FeaturesComponents,
    ...PricingComponents,
    ...TrainingComponents
  ],
})

export class CoreModule {}
