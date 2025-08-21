import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ApiBook } from '../types/api-book';

@Component({
  selector: 'app-books-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div class="grid gap-4">
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img [src]="bookItem().imageLink" alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ bookItem().title }}</h2>
        <p>{{ bookItem().author }} - {{ bookItem().year }}</p>
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class BookListItem {
  bookItem = input.required<ApiBook>();
}
