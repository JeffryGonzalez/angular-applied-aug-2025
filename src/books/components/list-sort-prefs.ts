import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ApiBookSortPref, SortBy } from '../types';

@Component({
  selector: 'app-list-sort-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <fieldset
      class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4"
    >
      <legend class="fieldset-legend">Sorting Options</legend>
      <div>
        <p>Sorting By: {{ sortOption().sortBy }}</p>
        <p>Sorting Order: {{ sortOption().sortOrder }}</p>
      </div>
    </fieldset>

    <div>
      <button
        [disabled]="sortOption().sortBy === 'Title'"
        (click)="changeSortBy('Title')"
        class="btn join-item"
      >
        Title
      </button>
      <button
        [disabled]="sortOption().sortBy === 'Author'"
        (click)="changeSortBy('Author')"
        class="btn join-item"
      >
        Author
      </button>
      <button
        [disabled]="sortOption().sortBy === 'Year'"
        (click)="changeSortBy('Year')"
        class="btn join-item"
      >
        Year
      </button>
    </div>
  `,
  styles: ``,
})
export class ListSortPrefs {
  sortOption = signal<ApiBookSortPref>({ sortOrder: 'Asc', sortBy: 'Title' });
  sortBy = ['Title', 'Author', 'Year'];

  changeSortBy(sort: SortBy) {
    this.sortOption.update((current) => ({
      ...current,
      sortBy: sort,
    }));
  }
}
