import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AppRoutingModule} from "./app-routing.module";
import { TrainingComponent } from './training/training.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import {SharedModule} from "./shared/shared.module";
import {PasswordValidatorDirective} from "./auth/password-validator.directive";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TrainingComponent,
    PricingComponent,
    FeaturesComponent,
    PasswordValidatorDirective
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
