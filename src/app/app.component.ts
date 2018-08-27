import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <overlay [(visible)]="overlayVisible"></overlay>
    <overlay-cdk [(visible)]="overlayCdkVisible"></overlay-cdk>
    <h2>Overlay Sample</h2>
    <button (click)="openDialog()">Dialog</button>
    <button (click)="onClick()">overlay</button>
    <button (click)="onClick2()">overlay(CDK)</button>
  `
})
export class AppComponent {

  /** */
  overlayVisible = false;

  overlayCdkVisible = false;

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

  onClick2(): void {
    this.overlayCdkVisible = true;
  }
}
