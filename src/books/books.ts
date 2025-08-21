import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FeatureNavLink, SectionNav } from '../shared/components';
import { BooksStore } from './stores/books-store';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNav],
  providers: [BooksStore],
  template: `
    <app-section-nav sectionName="Books Lab" [links]="links()">
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
    {
      label: 'Preferences',
      href: 'prefs',
    },
  ]);
}
