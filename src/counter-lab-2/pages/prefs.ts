import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';
import { PrefsButton } from '../components/prefs-button';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PrefsButton],
  providers: [],
  template: `
    <div class="join">
      @for (by of store.byValues; track by) {
        <app-counter-prefs-button [byValue]="by" />
      }
    </div>
  `,
  styles: ``,
})
export class Prefs {
  store = inject(CounterStore);
}

import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter-prefs-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button>{{ byValue }}</button>
  `,
  styles: ``,
})
export class PrefsButton {
  byValue = input<number>();
}
