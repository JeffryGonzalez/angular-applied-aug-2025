import { JsonPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  resource,
  computed,
} from '@angular/core';
import { ApiBookItem } from '../types';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <p>Books List</p>
    <p>
      There is currently a whopping {{ this.numberOfBooks() }} books in your
      collection
    </p>
    <p>The oldest book we have is from the year {{ this.earliestYear() }}</p>
    <p>The newest book we have is from the year {{ this.latestYear() }}</p>
    <p>The average number of pages is {{ this.avgPages() }}</p>

    <!-- <pre> -->
    <!-- {{ books.value() | json }} -->
    @for (book of books.value(); track book.id) {
      <div
        class="card bg-primary text-primary-content w-100"
        style="margin-bottom: 5px;"
      >
        <div class="card-body">
          <h2 class="card-title">{{ book.id }} : {{ book.title }}</h2>
          <p>By {{ book.author }}</p>
          <p>{{ book.year }}</p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    }

    <!-- </pre> -->
  `,
  styles: ``,
})
export class List {
  books = resource({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });

  numberOfBooks = computed(() => {
    const listOfBooks = this.books.value();
    if (listOfBooks) {
      return listOfBooks.length;
    } else {
      return 0;
    }
  });

  listOfYears = computed(() => {
    const listOfBooks = this.books.value();
    let result: number[];
    result = [];

    listOfBooks.forEach((book: ApiBookItem) => {
      result.push(book.year);
    });
    return result;
  });

  listOfPages = computed(() => {
    const listOfBooks = this.books.value();
    let result: number[];
    result = [];

    listOfBooks.forEach((book: ApiBookItem) => {
      result.push(book.pages);
    });
    return result;
  });

  earliestYear = computed(() => {
    return Math.min(...this.listOfYears());
  });

  latestYear = computed(() => {
    return Math.max(...this.listOfYears());
  });

  avgPages = computed(() => {
    const sum = this.listOfPages().reduce(
      (acc, currentVal) => acc + currentVal,
    );
    return Math.round(sum / this.listOfPages().length);
  });
}
