import { NgModule } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BaseComponents} from "./index";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    ...BaseComponents,
    AppRoutingModule

  ],
  exports: [
    ...BaseComponents,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
