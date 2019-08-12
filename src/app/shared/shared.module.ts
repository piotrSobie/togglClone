import { NgModule } from '@angular/core';
import {BaseComponents} from "./index";
import {AppRoutingModule} from "../app-routing.module";
import {HeaderComponents} from "./components/header";
import {FooterComponents} from "./components/footer";
import {NgxYoutubePlayerModule} from "ngx-youtube-player";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [HeaderComponents, FooterComponents],
  imports: [
    ...BaseComponents,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
    FlexLayoutModule
  ],
  exports: [
    ...BaseComponents,
    ...HeaderComponents,
    ...FooterComponents,
    AppRoutingModule,
  ]
})
export class SharedModule { }
