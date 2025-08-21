import {
  Component,
  ChangeDetectionStrategy,
  resource,
  computed,
} from '@angular/core';
import { BookEntity } from '../types';

@Component({
  selector: 'app-books-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="p-4">
      <h3 class="text-xl font-medium mb-2">Statistics</h3>
      @if (books.isLoading()) {
        <div
          class="space-y-2 max-w-md"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <div
            class="h-8 rounded bg-base-200 animate-pulse"
            aria-hidden="true"
          ></div>
          <div
            class="h-8 rounded bg-base-200 animate-pulse"
            aria-hidden="true"
          ></div>
        </div>
      } @else {
        @if (books.error()) {
          <div class="alert alert-error" role="alert">
            There was an error loading stats: {{ books.error() }}
          </div>
        }

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
          <div
            class="card p-3 bg-base-200"
            role="group"
            aria-labelledby="stat-total"
          >
            <div id="stat-total" class="text-sm">Total books</div>
            <div class="text-2xl font-bold" aria-live="polite">
              {{ total() }}
            </div>
          </div>

          <div
            class="card p-3 bg-base-200"
            role="group"
            aria-labelledby="stat-avg"
          >
            <div id="stat-avg" class="text-sm">Average pages</div>
            <div class="text-2xl font-bold" aria-live="polite">
              {{ avgPagesRounded() }}
            </div>
          </div>

          <div
            class="card p-3 bg-base-200"
            role="group"
            aria-labelledby="stat-earliest"
          >
            <div id="stat-earliest" class="text-sm">Earliest year</div>
            <div class="text-2xl font-bold" aria-live="polite">
              {{ earliestYear() ?? '—' }}
            </div>
          </div>

          <div
            class="card p-3 bg-base-200"
            role="group"
            aria-labelledby="stat-latest"
          >
            <div id="stat-latest" class="text-sm">Most recent year</div>
            <div class="text-2xl font-bold" aria-live="polite">
              {{ latestYear() ?? '—' }}
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styles: ``,
})
export class Stats {
  books = resource({
    loader: () => fetch('/api/books').then((r) => r.json()),
  });
  // Helper to normalise the resource value to a typed array
  private getBookList(): BookEntity[] {
    return (this.books.value() ?? []) as BookEntity[];
  }

  // Total number of books
  total = computed(() => this.getBookList().length);

  // Average pages (raw), zero when no data
  avgPages = computed(() => {
    const pages = this.getBookList().map((b) => b.pages ?? 0);
    if (pages.length === 0) return 0;
    const sum = pages.reduce((acc, v) => acc + v, 0);
    return sum / pages.length;
  });

  // Rounded average for display
  avgPagesRounded = computed(() => Math.round(this.avgPages()));

  // Earliest and latest year (undefined when missing)
  earliestYear = computed(() => {
    const years = this.getBookList()
      .map((b) => b.year)
      .filter((y): y is number => typeof y === 'number');
    return years.length ? Math.min(...years) : undefined;
  });

  latestYear = computed(() => {
    const years = this.getBookList()
      .map((b) => b.year)
      .filter((y): y is number => typeof y === 'number');
    return years.length ? Math.max(...years) : undefined;
  });
}
