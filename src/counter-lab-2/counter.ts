import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FeatureNavLink } from '../shared/components/types';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter-lab-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a routerLink="ui">UI</a>
    <a routerLink="prefs">Prefs</a>
    <div><router-outlet /></div>
  `,
  styles: ``,
})
export class Counter_2 {
  links = signal<FeatureNavLink[]>([
    {
      label: 'UI',
      href: 'ui',
    },
  ]);
}
