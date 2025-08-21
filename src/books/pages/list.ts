import {
  Component,
  ChangeDetectionStrategy,
  resource,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Books List</p>

    <table>
      <thead class="font-serif">
        <tr>
          <th class="text-left cursor-pointer" (click)="setSortkey('id')">
            ID
          </th>
          <th class="text-left cursor-pointer" (click)="setSortkey('title')">
            Title
          </th>
          <th class="text-left cursor-pointer" (click)="setSortkey('author')">
            Author
          </th>
          <th class="text-left cursor-pointer" (click)="setSortkey('year')">
            Year
          </th>
        </tr>
      </thead>
      <tbody>
        @for (book of sortedBooks(); track book.id) {
          <tr>
            <td>{{ book.id }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: ``,
})
export class List {
  books = resource({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });

  sortKey = signal<'id' | 'title' | 'author' | 'year'>('id');
  sortDirection = signal<'asc' | 'desc'>('asc');

  sortedBooks = computed(() => {
    const key = this.sortKey();
    const direction = this.sortDirection();
    const sorted = [...this.books.value()].sort((a, b) => {
      if (key === 'id' || key === 'year') {
        const aNum = Number(a[key]);
        const bNum = Number(b[key]);
        const result = aNum - bNum;
        return direction === 'asc' ? result : -result;
      }
      const result = String(a[key]).localeCompare(String(b[key]));
      return direction === 'asc' ? result : -result;
    });
    return sorted;
  });

  setSortkey(key: 'id' | 'title' | 'author' | 'year') {
    if (this.sortKey() === key) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortKey.set(key);
      this.sortDirection.set('asc');
    }
  }
}
