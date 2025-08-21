import {
  Component,
  ChangeDetectionStrategy,
  signal,
  resource,
} from '@angular/core';
import { FeatureNavLink, SectionNav } from '../shared/components';
import { ApiBook } from './types/api-book';
import { BookListItem } from './components/book-list-item';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNav, BookListItem],
  template: `
    <app-section-nav sectionName="Books Lab" [links]="links()">
      @if (booksResource.isLoading()) {
        <p>Loading...</p>
      } @else {
        @for (book of booksResource.value(); track book.id) {
          <app-books-list-item [bookItem]="book" />
        }
      }
    </app-section-nav>
  `,
  styles: ``,
})
export class Books {
  booksResource = resource<ApiBook[], unknown>({
    loader: () => fetch('https://fake.api.com/books').then((b) => b.json()),
  });

  links = signal<FeatureNavLink[]>([
    {
      label: 'List',
      href: 'list',
    },
  ]);
}
