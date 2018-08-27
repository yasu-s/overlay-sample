import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <overlay [(visible)]="overlayVisible"></overlay>
    <overlay-cdk [(visible)]="overlayCdkVisible"></overlay-cdk>
    <div>
      <button (click)="onClick()" style="background-color: yellow;">overlay</button>
      <button (click)="onClick2()" style="background-color: yellow;">overlay(cdk)</button>
    </div>
  `
})
export class DialogComponent {

  /** */
  overlayVisible = false;

  overlayCdkVisible = false;

  onClick(): void {
    this.overlayVisible = true;
  }

  onClick2(): void {
    this.overlayCdkVisible = true;
  }
}
