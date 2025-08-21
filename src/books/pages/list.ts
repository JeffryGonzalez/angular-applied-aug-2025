import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';
import { BookListItem } from '../components/book-list-item';
import { ListSortPrefs } from '../components/list-sort-prefs';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookListItem, ListSortPrefs],
  template: `
    <p>Books List</p>
    <div>
      <app-list-sort-prefs />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      @for (book of books.value(); track book.id) {
        <app-book-list-item [book]="book" />
      }
    </div>
  `,
  styles: ``,
})
export class List {
  books = resource({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });
}
