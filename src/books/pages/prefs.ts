import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-books-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>Sort By:</div>
    <div class="join">
      <button class="btn join-item">Title</button>
      <button class="btn join-item">Author</button>
      <button class="btn join-item">Year</button>
    </div>
    <div>Sort Order:</div>
    <div class="join">
      <button class="btn join-item">Ascending</button>
      <button class="btn join-item">Descending</button>
    </div>`,
  styles: ``,
})
export class Prefs {}
