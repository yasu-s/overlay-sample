import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <h2>Overlay Sample</h2>
    <button (click)="openDialog()">Dialog</button>
  `
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '600px',
      height: '400px',
      hasBackdrop: true
    });
  }
}
