import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../stores/books-store';

@Component({
  selector: 'app-book-list-sort-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="join">
    <!-- <button
      [disabled]="store.sortBy() === 'oldestFirst'"
      (click)="store.setSortBy('oldestFirst')"
      class="btn join-item"
    >
      Oldest First
    </button>
    <button
      [disabled]="store.sortBy() === 'newestFirst'"
      (click)="store.setSortBy('newestFirst')"
      class="btn join-item"
    >
      Newest First
    </button> -->
  </div>`,
  styles: ``,
})
export class ListSortPrefs {
  store = inject(BooksStore);
}
