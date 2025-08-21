import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ApiBook } from '../types/api-book';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-books-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `<p>{{ bookItem() | json }}</p>`,
  styles: ``,
})
export class BookListItem {
  bookItem = input.required<ApiBook>();
}
