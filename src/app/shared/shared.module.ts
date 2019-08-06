import { NgModule } from '@angular/core';
import {BaseComponents} from "./index";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [],
  imports: [
    ...BaseComponents,
    AppRoutingModule
  ],
  exports: [
    ...BaseComponents,
    AppRoutingModule
  ]
})
export class SharedModule { }
