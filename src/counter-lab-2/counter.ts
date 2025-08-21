import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FeatureNavLink, SectionNav } from '../shared/components';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SectionNav],
  template: `
    <app-section-nav [links]="links()" sectionName="Counter Lab 2">
      <router-outlet></router-outlet>
      <p>Enjoy your counting!</p></app-section-nav
    >
  `,
  styles: ``,
})
export class Counter {
  links = signal<FeatureNavLink[]>([
    {
      label: 'UI',
      href: 'ui',
    },
  ]);
}
