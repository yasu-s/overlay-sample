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
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: gray;
      opacity: 0.5;
    }
  `]
})
export class OverlayComponent {

  /** 表示フラグ */
  @Input()
  visible: boolean = false;

  /** 表示フラグ変更 */
  @Output()
  visibleChange = new EventEmitter<boolean>();

  /**
   * 閉じる
   * @param num
   */
  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
