import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./shared/core.module";
import {LoggingService} from "./shared/services/logging.service";
import {PlansService} from "./shared/services/plans.service";
import {AuthGuardService} from "./_guards/auth-guard.service";
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [LoggingService, PlansService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
