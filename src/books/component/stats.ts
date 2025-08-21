import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-books-stats',
  imports: [],
  template: `
    <p>Books Statistics</p>
    <table class="min-w-full border border-gray-300">
      <thead class="bg-gray-100 font-serif text-black">
        <tr>
          <th class="text-left px-4 py-2">Statistic</th>
          <th class="text-left px-4 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2">Total number of books</td>
          <td class="px-4 py-2">{{ books.value().length }}</td>
        </tr>
        <tr>
          <td class="px-4 py-2">Earliest year published</td>
          <td class="px-4 py-2">{{ earliestYear() }}</td>
        </tr>
        <tr>
          <td class="px-4 py-2">Most recent year published</td>
          <td class="px-4 py-2">{{ latestYear() }}</td>
        </tr>
        <tr>
          <td class="px-4 py-2">Average page number</td>
          <td class="px-4 py-2">{{ avgPageNum() }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: ``,
})
export class BookStats {
  books = resource({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });

  earliestYear() {
    const years = this.books.value().map((book: { year: number }) => book.year);
    return Math.min(...years);
  }

  latestYear() {
    const years = this.books.value().map((book: { year: number }) => book.year);
    return Math.max(...years);
  }

  avgPageNum() {
    const totalPages = this.books
      .value()
      .reduce((sum: number, book: { pages: number }) => sum + book.pages, 0);
    return (totalPages / this.books.value().length).toFixed(2);
  }
}
