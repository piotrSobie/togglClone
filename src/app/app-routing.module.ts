import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./modules/auth/login/login.component";
import {RegisterComponent} from "./modules/auth/register/register.component";
import {TrainingComponent} from "./modules/training/training.component";
import {PricingComponent} from "./modules/pricing/pricing.component";
import {FeaturesComponent} from "./modules/features/features.component";

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
