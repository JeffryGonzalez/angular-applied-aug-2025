import { Component, ChangeDetectionStrategy, resource } from '@angular/core';
import { BookEntity } from '../types';
import { BookStats } from '../components/book-stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookStats],
  template: `
    <p>Books List</p>
    @if (books.isLoading()) {
      <p>LOADING BOOKS</p>
    } @else {
      <app-book-stats [books]="books.value() ?? []"></app-book-stats>
      <table class="table">
        <tr>
          <th class="text-bold">ID</th>
          <th class="text-bold">Title</th>
          <th class="text-bold">Author</th>
          <th class="text-bold">Year</th>
        </tr>
        @for (book of books.value(); track $index) {
          <tr>
            <th class="text-bold">{{ book.id }}</th>
            <th class="text-bold">{{ book.title }}</th>
            <th class="text-bold">{{ book.author }}</th>
            <th class="text-bold">{{ book.year }}</th>
          </tr>
        } @empty {
          <div>No books found!</div>
        }
      </table>
    }
  `,
  styles: ``,
})
export class List {
  books = resource<BookEntity[], unknown>({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });
}
