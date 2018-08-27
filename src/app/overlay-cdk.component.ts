import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'overlay-cdk',
  template: `
    <div *cdk-portal>
      <mat-spinner></mat-spinner>
    </div>
  `
})
export class OverlayCdkComponent {

  @ViewChild(CdkPortal) templatePortal: CdkPortal;

  /** 表示フラグ */
  get visible(): boolean { return this._visible; }

  @Input()
  set visible(value: boolean) {
    this._visible = value;
    if (this._visible) this.showOverlay();
  }

  /** 表示フラグ変更 */
  @Output()
  visibleChange = new EventEmitter<boolean>();

  private _visible: boolean = false;

  constructor(private overlay: Overlay) { }

  showOverlay(): void {
    // setup
    const scrollStrategy = this.overlay.scrollStrategies.block();
    const position = this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayRef = this.overlay
      .create({ hasBackdrop: true, positionStrategy: position, scrollStrategy: scrollStrategy });

    // attach
    this.templatePortal.attach(overlayRef);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
      this.visible = false;
      this.visibleChange.emit(false);
    })
  }
}
