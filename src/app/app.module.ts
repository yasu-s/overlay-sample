import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';
import { OverlayComponent } from './overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    OverlayComponent,
  ],
  imports: [
    BrowserAnimationsModule,
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
