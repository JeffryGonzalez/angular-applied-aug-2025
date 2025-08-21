import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { ApiBook } from '../types/api-book';

@Component({
  selector: 'app-books-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Stats:</p>
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total Books</div>
        <div class="stat-value">{{ totalBooks() }}</div>
      </div>
    </div>`,
  styles: ``,
})
export class BookStats {
  books = input.required<ApiBook[]>();

  totalBooks = computed(() => this.books().length);
}
