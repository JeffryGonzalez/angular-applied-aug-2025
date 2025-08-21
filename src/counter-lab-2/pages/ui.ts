import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-lab-2-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="decrement()"
        [disabled]="isDecrementDisabled()"
      >
        -
      </button>
      <span>{{ counter() }}</span>
      <button class="btn btn-primary" (click)="increment()">+</button>
    </div>
    <div>
      <button class="btn btn-soft btn-info">{{ fizzBuzz() }}</button>
      <button class="btn btn-dash btn-accent" (click)="resetCounter()">
        Reset
      </button>
    </div>
  `,
  styles: ``,
})
export class Ui {
  counter = signal(0);

  isDecrementDisabled = computed(() => this.counter() <= 0);

  resetCounter() {
    this.counter.set(0);
  }

  fizzBuzz = computed(() => {
    const current = this.counter();
    if (current === 0) return '';
    if (current % 3 === 0 && current % 5 === 0) {
      return 'FizzBuzz';
    }
    if (current % 3 === 0) {
      return 'Fizz';
    }
    if (current % 5 === 0) {
      return 'Buzz';
    }
    return '';
  });

  increment() {
    this.counter.update((value) => value + 1);
    //console.log('Incremented:', this.counter());
  }
  decrement() {
    if (this.counter() > 0) {
      this.counter.update((value) => value - 1);
      //console.log('Decremented:', this.counter());
    }
  }
}
