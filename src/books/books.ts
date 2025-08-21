import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FeatureNavLink, SectionNav } from '../shared/components';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNav],
  template: `
    <app-section-nav sectionName="Books Lab" [links]="links()">
      Advanced lab
    </app-section-nav>
  `,
  styles: ``,
})
export class Books {
  links = signal<FeatureNavLink[]>([
    {
      label: 'List',
      href: 'list',
    },
  ]);
}
