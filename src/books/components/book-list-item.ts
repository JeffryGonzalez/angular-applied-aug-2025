import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ApiBookItem } from '../types';

@Component({
  selector: 'app-book-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="card card-border bg-base-100 w-96">
      <div class="card-body">
        <h2 class="card-title">{{ book().title }}</h2>
        <p>{{ book().author }}</p>
        <p>{{ book().year }}</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class BookListItem {
  book = input.required<ApiBookItem>();
}
