import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PasswordValidatorDirective} from "./_helpers/password-validator.directive";
import {CoreModule} from "./shared/core.module";
import {LoggingService} from "./shared/services/logging.service";

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorDirective
  ],
  imports: [
    SharedModule,
    CoreModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
