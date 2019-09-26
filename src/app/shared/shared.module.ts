import { NgModule } from '@angular/core';
import {BaseComponents} from "./index";
import {AppRoutingModule} from "../app-routing.module";
import {HeaderComponents} from "./components/header";
import {FooterComponents} from "./components/footer";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PasswordValidatorDirective} from "../_helpers/password-validator.directive";
import {ConfirmEqualValidatorDirective} from '../_helpers/confirm-equal-validator.directive';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [HeaderComponents, FooterComponents, PasswordValidatorDirective, ConfirmEqualValidatorDirective],
  imports: [
    ...BaseComponents,
    AppRoutingModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [
    ...BaseComponents,
    ...HeaderComponents,
    ...FooterComponents,
    AppRoutingModule,
    PasswordValidatorDirective,
    ConfirmEqualValidatorDirective
  ]
})
export class SharedModule { }
