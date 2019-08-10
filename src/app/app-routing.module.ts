import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./modules/auth/login";
import {RegisterComponent} from "./modules/auth/register";
import {PricingComponent} from "./modules/pricing";
import {FeaturesComponent} from "./modules/features";
import {PlansComponent} from "./modules/plans";
import {PageNotFoundComponent} from "./modules/page-not-found";
import {AuthGuardService} from "./_guards/auth-guard.service";

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plans', canActivate: [AuthGuardService], component: PlansComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
