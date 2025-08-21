import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { BooksStore } from '../stores/books-store';
import { ListItem } from '../component/books-list-item';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListItem],
  template: `
    @if (store.books.isLoading()) {
      <div class="alert alert-info">
        <span class="loading loading-dots"></span> Loading your stuff
      </div>
    } @else {
      <div class="flex justify-between items-center my-4">
        <p class="text-green-600 font-bold">{{ numberOfBooks() }} Books</p>
        <p class="text-green-600 font-bold">
          Earliest book year:
          {{ earliestBookYear() }}
        </p>
        <p class="text-green-600 font-bold">
          Newest book year:
          {{ newestBookYear() }}
        </p>
        <p class="text-green-600 font-bold">
          Average pages:
          {{ averagePages() }}
        </p>

        <!-- <app-list-sort-prefs /> -->
      </div>
      <div class="grid  gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <!--@for (article of store.sortedList(); track article.id) {
          <app-article-list-item [article]="article" />
        } @empty {
          <div class="alert alert-info">
            There are no articles! Check back later!
          </div>
        }-->
        @for (book of store.booksList(); track book.id) {
          <app-books-list-item [book]="book" />
        } @empty {
          <div class="alert alert-info">
            There are no articles! Check back later!
          </div>
        }
      </div>
    }
  `,
  styles: ``,
})
export class List {
  store = inject(BooksStore);

  numberOfBooks = computed(() => {
    const books = this.store.books.value();
    if (books) {
      return books.length;
    } else {
      return -1;
    }
  });

  earliestBookYear = computed(() => {
    const books = this.store.booksList();
    if (!books || books.length === 0) return 'N/A';
    const years = books.map((book) => book.year);
    return Math.min(...years);
  });

  newestBookYear = computed(() => {
    const books = this.store.booksList();
    if (!books || books.length === 0) return 'N/A';
    const years = books.map((book) => book.year);
    return Math.max(...years);
  });

  averagePages = computed(() => {
    const books = this.store.booksList();
    if (!books || books.length === 0) return 'N/A';
    const total = books.reduce((sum, book) => sum + book.pages, 0);
    return Math.round(total / books.length);
  });
}
