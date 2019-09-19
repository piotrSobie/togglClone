import { NgModule } from '@angular/core';
import {BaseComponents} from "./index";
import {AppRoutingModule} from "../app-routing.module";
import {HeaderComponents} from "./components/header";
import {FooterComponents} from "./components/footer";
import {NgxYoutubePlayerModule} from "ngx-youtube-player";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PasswordValidatorDirective} from "../_helpers/password-validator.directive";

@NgModule({
  declarations: [HeaderComponents, FooterComponents, PasswordValidatorDirective],
  imports: [
    ...BaseComponents,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    ...BaseComponents,
    ...HeaderComponents,
    ...FooterComponents,
    AppRoutingModule,
    PasswordValidatorDirective
  ]
})
export class SharedModule { }
