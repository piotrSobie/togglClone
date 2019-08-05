import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { TrainingComponent } from './modules/training/training.component';
import { PricingComponent } from './modules/pricing/pricing.component';
import { FeaturesComponent } from './modules/features/features.component';
import {SharedModule} from "./shared/shared.module";
import {PasswordValidatorDirective} from "./_helpers/password-validator.directive";

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
