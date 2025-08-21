import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ApiBooks } from '../types';
import { BookRow } from './book-row';

@Component({
  selector: 'app-book-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookRow],
  template: `<div>
    <ul class="list bg-base-100 rounded-box shadow-md">
      @for (book of this.books(); track book.id) {
        <app-book-row [book]="book" />
      }
    </ul>
  </div>`,
  styles: ``,
})
export class BookTable {
  books = input.required<ApiBooks>();
}
