import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';
import { OverlayCdkComponent } from './overlay-cdk.component';
import { OverlayComponent } from './overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    OverlayComponent,
    OverlayCdkComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [
    DialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
