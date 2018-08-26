import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'overlay',
  template: `
    <ng-container *ngIf="visible">
      <div class="overlay-panel" (click)="close()">
      </div>
    </ng-container>
  `,
  styles: [`
    .overlay-panel {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: gray;
    }
  `]
})
export class OverlayComponent {

  /** 表示フラグ */
  @Input()
  visible: boolean = false;

  /** 表示フラグ変更 */
  @Output()
  visibleChange = new EventEmitter<number>();

  /**
   * 閉じる
   * @param num
   */
  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
