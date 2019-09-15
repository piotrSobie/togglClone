import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./modules/auth/login";
import {RegisterComponent} from "./modules/auth/register";
import {PricingComponent} from "./modules/pricing";
import {PlansComponent} from "./modules/plans";
import {PageNotFoundComponent} from "./modules/page-not-found";
import {AuthGuardService} from "./_guards/auth-guard.service";
import {VideosComponent} from "./modules/videos";

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plans', canActivate: [AuthGuardService], component: PlansComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
