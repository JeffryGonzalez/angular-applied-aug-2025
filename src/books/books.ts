import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FeatureNavLink, SectionNav } from '../shared/components';
import { BooksStore } from './stores/books-store';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BooksStore],
  imports: [SectionNav],
  template: `
    <app-section-nav sectionName="Books Lab" [links]="links()">
      <p>Your "Advanced" Lab</p>
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
