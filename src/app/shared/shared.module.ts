import { NgModule } from '@angular/core';
import {BaseComponents} from "./index";
import {AppRoutingModule} from "../app-routing.module";
import {HeaderComponents} from "./components/header";
import {FooterComponents} from "./components/footer";

@NgModule({
  declarations: [HeaderComponents, FooterComponents],
  imports: [
    ...BaseComponents,
    AppRoutingModule
  ],
  exports: [
    ...BaseComponents,
    AppRoutingModule,
    HeaderComponents,
    FooterComponents
  ]
})
export class SharedModule { }
