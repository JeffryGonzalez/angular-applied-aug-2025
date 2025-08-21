import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { BooksStore } from '../stores/books-store';

@Component({
  selector: 'app-book-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="m-4">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
              <path
                fill="currentColor"
                d="M7 13v-2h14v2zm0 6v-2h14v2zM7 7V5h14v2zM3 8V5H2V4h2v4zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17zm2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1z"
              />
            </svg>
          </div>
          <div class="stat-title">Total Books</div>
          <div class="stat-value">{{ numOfBooks() }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
              <path
                fill="currentColor"
                d="M7 11h2v2H7zm14-6v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2M5 7h14V5H5zm14 12V9H5v10zm-4-6h2v-2h-2zm-4 0h2v-2h-2z"
              />
            </svg>
          </div>
          <div class="stat-title">Year Published: Earliest to Most Recent</div>
          <div class="stat-value">{{ earliestToRecent() }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
              <path
                fill="currentColor"
                d="m19 2l-5 4.5v11l5-4.5zM6.5 5C4.55 5 2.45 5.4 1 6.5v14.66c0 .25.25.5.5.5c.1 0 .15-.07.25-.07c1.35-.65 3.3-1.09 4.75-1.09c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.31 4.75 1.06c.1.05.15.03.25.03c.25 0 .5-.25.5-.5V6.5c-.6-.45-1.25-.75-2-1V19c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6.5C10.55 5.4 8.45 5 6.5 5"
              />
            </svg>
          </div>
          <div class="stat-title">Avg Number of Pages</div>
          <div class="stat-value">{{ avgNumPages() }}</div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class BookStats {
  store = inject(BooksStore);

  numOfBooks = computed(() => {
    const books = this.store.books.value();
    if (books) {
      return books.length;
    } else {
      return -1;
    }
  });

  avgNumPages = computed(() => {
    const books = this.store.books.value();
    if (books) {
      const totalPages = books.reduce((sum, b) => sum + b.pages, 0);
      return Math.round(totalPages / books.length);
    } else {
      return 0;
    }
  });

  earliestToRecent = computed(() => {
    const books = this.store.books.value();
    if (books) {
      const years = books.map((b) => b.year);
      const earliest = Math.min(...years);
      const latest = Math.max(...years);
      return `${earliest} to ${latest}`;
    } else {
      return null;
    }
  });
}
