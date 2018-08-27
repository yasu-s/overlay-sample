import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <overlay [(visible)]="overlay1Visible"></overlay>
    <div>
      <button (click)="onClick1()" style="background-color: yellow;">overlay1</button>
      <button (click)="onClick2()" style="background-color: yellow;">overlay2</button>
      <overlay [(visible)]="overlay2Visible"></overlay>
    </div>
  `
})
export class DialogComponent {
  /** */
  overlay1Visible = false;

  /** */
  overlay2Visible = false;

  onClick1(): void {
    this.overlay1Visible = true;
  }

  onClick2(): void {
    this.overlay2Visible = true;
  }
}
