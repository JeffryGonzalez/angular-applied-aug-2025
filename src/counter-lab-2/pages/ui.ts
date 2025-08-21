import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-counter-lab-2-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>
    <button class="btn btn-primary" (click)="decrement()">-</button>
    <span>{{ counterValue() }}</span>
    <button class="btn btn-primary" (click)="increment()">+</button>
    <p>{{ result }}</p>
  </div>`,
  styles: ``,
})
export class UI {
  result = '';
  counterValue = signal<number>(0);
  num = 1;
  decrement() {
    if (this.counterValue() - this.num >= 0)
      this.counterValue.set(this.counterValue() - this.num);
    this.fizbuzz();
  }
  increment() {
    this.counterValue.set(this.counterValue() + this.num);
    this.fizbuzz();
  }

  fizbuzz() {
    this.result = '';
    if (this.counterValue()) {
      if (this.counterValue() % 3 === 0) this.result = 'Fizz';
      if (this.counterValue() % 5 === 0) this.result += 'Buzz';
    }
  }
}
