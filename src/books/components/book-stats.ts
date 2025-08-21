import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { BookEntity, BookListStat } from '../types';

@Component({
  selector: 'app-book-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      @for (stat of bookListStats(); track $index) {
        <div class="stat">
          <div class="stat-title">{{ stat.title }}</div>
          <div class="stat-value">{{ stat.value }}</div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class BookStats {
  books = input.required<BookEntity[]>();

  bookListStats = computed(() => {
    const sortedList = this.books().toSorted((a, b) => {
      return a.year > b.year ? -1 : 1;
    });
    return [
      {
        title: 'Total Books',
        value: this.books().length.toString(),
      },
      {
        title: 'Oldest Publish Year',
        value: sortedList.findLast(() => true)?.year,
      },
      {
        title: 'Most Recent Publish Year',
        value: sortedList[0].year,
      },
      {
        title: 'Average Page Count',
        value:
          this.books().reduce((a, b) => {
            return a + b.pages;
          }, 0) / this.books().length,
      },
    ] as BookListStat[];
  });
}
