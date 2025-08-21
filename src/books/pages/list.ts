import { Component, ChangeDetectionStrategy, resource } from '@angular/core';
import { ApiBook } from '../types/api-book';
import { BookListItem } from '../components/book-list-item';
import { BookStats } from '../components/book-stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookListItem, BookStats],
  template: `
    <p>Books List</p>

    @if (books.isLoading()) {
      <p>Loading...</p>
    } @else {
      <app-books-stats [books]="books.value() ?? []" />
      <div class="grid grid-cols-4 gap-4">
        @for (book of books.value(); track book.id) {
          <app-books-list-item [bookItem]="book" />
        }
      </div>
    }
  `,
  styles: ``,
})
export class List {
  books = resource<ApiBook[], unknown>({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });
}
