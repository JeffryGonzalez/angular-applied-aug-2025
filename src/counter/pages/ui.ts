import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [],
  template: `
    <div>
      <button
        [hidden]="store.hideReturnToZero()"
        (click)="store.reset()"
        class="btn btn-secondary"
      >
        Go To Zero
      </button>
      <button
        [disabled]="store.decrementShouldBeDisabled()"
        [hidden]="store.hideDecrement()"
        (click)="store.decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ store.current() }}</span>
      <button (click)="store.increment()" class="btn btn-success">+</button>
      <button
        [hidden]="store.decrementShouldBeDisabled()"
        (click)="store.reset()"
        class="btn btn-warning"
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
