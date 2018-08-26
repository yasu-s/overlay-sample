import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Overlay Sample</h2>
    <overlay [(visible)]="overlay1Visible"></overlay>
    <div style="z-index: 1; position: absolute;">
      <button (click)="onClick1()">overlay1</button>
      <button (click)="onClick2()">overlay2</button>
    </div>
    <overlay [(visible)]="overlay2Visible"></overlay>
  `
})
export class AppComponent {
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
