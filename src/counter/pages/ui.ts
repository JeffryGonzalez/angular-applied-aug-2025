import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';
//Add a button to reset the Count
@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `
    <div>
      <button
        [disabled]="store.decrementShouldBeDisabled()"
        (click)="store.decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ store.current() }}</span>
      <button (click)="store.increment()" class="btn btn-success">+</button>
      <button
        [disabled]="store.decrementShouldBeDisabled()"
        (click)="store.reset()"
        class="btn btn-error"
      >
        Reset
      </button>
    </div>
    @if (store.fizzBuzz()) {
      <div class="alert alert-info">
        {{ store.fizzBuzz() }}
      </div>
    }
  `,
  styles: ``,
})
export class Ui {
  store = inject(CounterStore);
}
