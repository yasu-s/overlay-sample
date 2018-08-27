import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <overlay [(visible)]="overlayVisible"></overlay>
    <h2>Overlay Sample</h2>
    <button (click)="openDialog()">Dialog</button>
    <button (click)="onClick()">overlay</button>
  `
})
export class AppComponent {

  /** */
  overlayVisible = false;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '600px',
      height: '400px',
      hasBackdrop: true
    });
  }

  onClick(): void {
    this.overlayVisible = true;
  }
}
