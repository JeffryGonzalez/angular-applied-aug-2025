// import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  resource,
} from '@angular/core';
import { BookMetrics } from '../components/book-metrics';
import { BookTable } from '../components/book-table';
import { ApiBookMetrics, ApiBooks } from '../types';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    // JsonPipe,
    BookTable,
    BookMetrics,
  ],
  template: `
    <h2 class="text-xl">Books List</h2>
    @if (books.isLoading()) {
      <div class="alert alert-info">
        <span class="loading loading-dots"></span> Loading your stuff
      </div>
    } @else {
      <app-book-metrics [bookMetrics]="bookMetrics()" />
      <app-book-table [books]="books.value()!" />
      <!-- <pre>
    {{ books.value() | json }}
    </pre -->
      >
    }
  `,
  styles: ``,
})
export class List {
  books = resource<ApiBooks, unknown>({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });

  bookMetrics = computed<ApiBookMetrics>(() => {
    const books = this.books.value();
    if (books) {
      const n = books.length;
      let pagesTotal = 0;
      let minYear = books[0].year;
      let maxYear = books[0].year;

      for (const b of books) {
        pagesTotal += b.pages;
        if (b.year < minYear) minYear = b.year;
        if (b.year > maxYear) maxYear = b.year;
      }

      return {
        totalCount: n,
        averagePages: pagesTotal / n,
        earliestYear: minYear,
        mostRecentYear: maxYear,
      };
    } else {
      return {
        totalCount: 0,
        averagePages: 0,
        earliestYear: 0,
        mostRecentYear: 0,
      };
    }
  });
}
