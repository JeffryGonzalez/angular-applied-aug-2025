import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ApiBookMetrics } from '../types';

@Component({
  selector: 'app-book-metrics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<div>
    <p>Total number of books: {{ bookMetrics().totalCount }}</p>
    <p>Earliest year: {{ bookMetrics().earliestYear }}</p>
    <p>Most recent year: {{ bookMetrics().mostRecentYear }}</p>
    <p>Average number of pages: {{ bookMetrics().averagePages }}</p>
  </div>`,
  styles: ``,
})
export class BookMetrics {
  bookMetrics = input.required<ApiBookMetrics>();
}
