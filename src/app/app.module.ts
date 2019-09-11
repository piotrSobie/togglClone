import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./shared/core.module";
import {LoggingService} from "./shared/services/logging.service";
import {PlansService} from "./shared/services/plans.service";
import {AuthGuardService} from "./_guards/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    CoreModule
  ],
  providers: [LoggingService, PlansService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
