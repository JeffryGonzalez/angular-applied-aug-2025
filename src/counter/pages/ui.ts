import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <button
        [disabled]="counter() <= 0"
        (click)="decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ counter() }}</span>
      <button (click)="increment()" class="btn btn-success">+</button>
    </div>
  `,
  styles: ``,
})
export class Ui {
  counter = signal(0);

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => (value > 0 ? value - 1 : 0));
  }
}
