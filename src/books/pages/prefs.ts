import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListSortPrefs } from '../components/list-sort-prefs';

@Component({
  selector: 'app-books-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListSortPrefs],
  template: `
    <p>Book List Preferences</p>

    <app-book-list-sort-prefs />
  `,
  styles: ``,
})
export class Prefs {}
