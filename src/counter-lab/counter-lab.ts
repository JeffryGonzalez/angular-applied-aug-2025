import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureNavLink, SectionNav } from '../shared/components';
import { CounterStore } from './stores/counter.ts';

const NAV_LINKS: FeatureNavLink[] = [
  { label: 'Start Counting', href: 'ui' },
  { label: 'Preferences', href: 'prefs' },
  { label: 'Statistics', href: 'stats' },
];

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNav],
  template: `
    <app-section-nav [links]="links" sectionName="Smart Counter">
      <p class="counter-message">Counting made fun and easy!</p>
    </app-section-nav>
  `,
  styles: `
    .counter-message {
      font-weight: bold;
      color: #4caf50;
      font-size: 1.1em;
      margin-top: 1em;
    }
  `,
})
export class Counter {
  constructor(public store: CounterStore) {}

  get links(): FeatureNavLink[] {
    // TODO: Filter links based on store states
    return NAV_LINKS;
  }
}
