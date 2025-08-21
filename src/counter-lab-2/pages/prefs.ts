import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-counter-2-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>
    <button class="btn btn-primary" (click)="setAmount(1)">1</button>
    <button class="btn btn-primary" (click)="setAmount(3)">3</button>
    <button class="btn btn-primary" (click)="setAmount(5)">5</button>
    <p>{{ amount() }}</p>
  </div>`,
  styles: ``,
})
export class Prefs_2 {
  amount = signal<1 | 3 | 5>(1);

  setAmount(val: 1 | 3 | 5) {
    this.amount.set(val);
  }
}
