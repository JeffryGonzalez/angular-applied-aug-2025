import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Book } from '../types';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-books-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: ` <div class="card card-border bg-base-200 w-full h-full ">
    <div class="card-body">
      <h2 class="card-title">
        {{ book().title }}
      </h2>
      <!-- <p>{{ article().description }}</p> -->
      <p>{{ book().year | date: 'yyyy' }}</p>
      <p>{{ book().country }}</p>
    </div>
  </div>`,
  styles: ``,
})
export class ListItem {
  book = input.required<Book>();
}
