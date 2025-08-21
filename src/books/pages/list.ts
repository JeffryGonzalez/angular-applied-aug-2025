import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../stores/books-store';
import { BookStats } from './book-stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookStats],
  template: `
    @if (store.books.isLoading()) {
      <div class="alert alert-success">
        <span class="loading loading-dots"></span> Loading list of Books...
      </div>
    } @else {
      <app-book-stats />

      <div class="h-150 overflow-x-auto">
        <table class="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th>TITLE</th>
              <th>AUTHOR</th>
              <th>YEAR</th>
            </tr>
          </thead>
          <tbody>
            @for (book of store.sortedList(); track book.id) {
              <tr>
                <th>{{ book.id }}</th>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.year }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>

      <!-- <br />

      <pre>
    {{ store.books.value() | json }}
</pre
      > -->
    }
  `,
  styles: ``,
})
export class List {
  store = inject(BooksStore);
}
