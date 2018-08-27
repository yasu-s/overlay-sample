import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <overlay [(visible)]="overlayVisible"></overlay>
    <div>
      <button (click)="onClick()" style="background-color: yellow;">overlay</button>
    </div>
  `
})
export class DialogComponent {

  /** */
  overlayVisible = false;

  onClick(): void {
    this.overlayVisible = true;
  }
}
