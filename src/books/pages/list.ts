// import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Books List</p>
    <div class="h-150 overflow-x-auto">
      <table class="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>YEAR</th>
          </tr>
        </thead>
        <tbody>
          @for (book of books.value(); track book.id) {
            <tr>
              <th>{{ book.id }}</th>
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.year }}</td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>

    <br />

    <!-- <pre>
    {{ books.value() | json }}
</pre> -->
  `,
  styles: ``,
})
export class List {
  books = resource({
    loader: () => fetch('/api/books').then((b) => b.json()),
  });
}
