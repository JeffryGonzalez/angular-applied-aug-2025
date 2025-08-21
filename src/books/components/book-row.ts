import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ApiBookItem } from '../types';

@Component({
  selector: 'app-book-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <li class="list-row">
    <div>{{ this.book()?.id }}</div>
    <div>
      <div class="font-bold">{{ this.book()?.title }}</div>
      <div class="text-xs uppercase font-semibold opacity-60">
        {{ this.book()?.author }}
      </div>
    </div>
    <p class="list-col-wrap text-xs">{{ this.book()?.year }}</p>
  </li>`,
  styles: ``,
})
export class BookRow {
  book = input.required<ApiBookItem | undefined>();
}
