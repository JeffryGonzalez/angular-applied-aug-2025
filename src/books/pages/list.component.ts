import {
  Component,
  ChangeDetectionStrategy,
  resource,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="p-4">
      <h2 class="text-2xl font-semibold mb-4">Books</h2>
      <div class="overflow-x-auto">
        @if (books.isLoading()) {
          <div
            class="space-y-2"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <div class="sr-only">Loading books…</div>
            @for (r of placeholders(); track r) {
              <div
                class="h-10 rounded-md bg-base-200 animate-pulse"
                aria-hidden="true"
              ></div>
            }
          </div>
        } @else {
          @if (books.error()) {
            <div class="alert alert-error mb-4" role="alert">
              There was an error loading books: {{ books.error() }}
            </div>
          }

          <table
            class="table w-full table-zebra"
            role="table"
            aria-label="Books list"
            aria-describedby="books-summary"
          >
            <caption id="books-summary" class="sr-only">
              List of books showing id, title, author and year
            </caption>
            <thead>
              <tr>
                <th class="w-16" scope="col">ID</th>
                <th scope="col">Title</th>
                <th class="hidden sm:table-cell" scope="col">Author</th>
                <th class="hidden md:table-cell w-24" scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              @for (b of books.value(); track b.id) {
                <tr>
                  <td class="w-16" role="cell">{{ b.id }}</td>
                  <td class="font-medium" role="cell">{{ b.title }}</td>
                  <td class="hidden sm:table-cell" role="cell">
                    {{ b.author }}
                  </td>
                  <td class="hidden md:table-cell" role="cell">{{ b.year }}</td>
                </tr>
              }

              @if ((books.value() ?? []).length === 0) {
                <tr>
                  <td colspan="4" class="text-center p-6">No books found.</td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class List {
  placeholders = signal<number[]>([1, 2, 3, 4, 5]);

  books = resource({
    loader: () => fetch('/api/books').then((r) => r.json()),
  });
}
