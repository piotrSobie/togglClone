import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./modules/auth/login";
import {RegisterComponent} from "./modules/auth/register";
import {PricingComponent} from "./modules/pricing";
import {PlansComponent} from "./modules/plans";
import {PageNotFoundComponent} from "./modules/page-not-found";
import {AuthGuardService} from "./_guards/auth-guard.service";
import {VideosComponent} from "./modules/videos";
import {EditProfileComponent} from "./modules/edit-profile";
import {WelcomeScreenComponent} from "./modules/welcome-screen";

const appRoutes: Routes = [
  { path: '',component: WelcomeScreenComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-profile', canActivate: [AuthGuardService], component: EditProfileComponent },
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
