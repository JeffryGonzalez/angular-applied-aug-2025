import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <p>Books List</p>

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
}
