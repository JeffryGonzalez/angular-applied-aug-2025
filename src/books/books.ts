import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeatureNavLink, SectionNav } from '../shared/components';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNav],
  template: `
    <app-section-nav sectionName="Books Lab" [links]="links()">
      <div class="overflow-x-auto mt-4">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            @for (book of books(); track book.id) {
              <tr>
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.year }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </app-section-nav>
  `,
  styles: ``,
})
export class Books implements OnInit {
  private http = inject(HttpClient);

  links = signal<FeatureNavLink[]>([
    {
      label: 'List',
      href: 'list',
    },
  ]);

  books = signal<Book[]>([]);

  ngOnInit(): void {
    this.http.get<Book[]>('/api/books').subscribe({
      next: (books) => this.books.set(books),
      error: () => this.books.set([]),
    });
  }
}
