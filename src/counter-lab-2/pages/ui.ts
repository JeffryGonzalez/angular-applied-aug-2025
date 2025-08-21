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
  `,
  styles: ``,
})
export class Ui {
  counter = signal(0);

  isDecrementDisabled = computed(() => this.counter() <= 0);

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
