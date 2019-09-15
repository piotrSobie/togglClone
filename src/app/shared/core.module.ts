import {NgModule} from "@angular/core";
import {LoginComponents} from "../modules/auth/login";
import {RegisterComponents} from "../modules/auth/register";
import {PricingComponents} from "../modules/pricing";
import {SharedModule} from "./shared.module";
import {PlansComponents} from "../modules/plans";
import {PageNotFoundComponents} from "../modules/page-not-found";
import {AgmCoreModule} from "@agm/core";
import {VideosComponents} from "../modules/videos";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [SharedModule, AgmCoreModule, FlexLayoutModule],
  declarations: [
    ...LoginComponents,
    ...RegisterComponents,
    ...PricingComponents,
    ...PlansComponents,
    ...PageNotFoundComponents,
    ...VideosComponents
  ],
  providers: [],
  exports: [
    ...LoginComponents,
    ...RegisterComponents,
    ...PricingComponents,
    ...PlansComponents,
    ...PageNotFoundComponents,
    ...VideosComponents
  ],
})

export class CoreModule {}
