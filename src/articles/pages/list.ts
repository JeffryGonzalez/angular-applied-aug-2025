import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';

import { ArticleListItem } from '../components/article-list-item';
import { ListSortPrefs } from '../components/list-sort-prefs';
import { ArticlesStore } from '../stores/articles-store';

@Component({
  selector: 'app-articles-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ArticleListItem, ListSortPrefs],
  template: `
    @if (store.articles.isLoading()) {
      <div class="alert alert-info">
        <span class="loading loading-dots"></span> Loading your stuff
      </div>
    } @else {
      <div class="flex justify-between items-center my-4">
        <p class="text-green-600 font-bold">
          {{ numberOfArticles() }} Articles
        </p>
        <app-list-sort-prefs />
      </div>
      <div class="grid  gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        @for (article of store.sortedList(); track article.id) {
          <app-article-list-item [article]="article" />
        } @empty {
          <div class="alert alert-info">
            There are no articles! Check back later!
          </div>
        }
      </div>
    }
  `,
  styles: ``,
})
export class List {
  // something new an still "experimental" in Angular, but I use it all the time.
  //   articlesResource = resource<ApiArticles, unknown>({
  //     loader: () => fetch('https://fake.api.com/articles').then((r) => r.json()),
  //   });

  store = inject(ArticlesStore);

  numberOfArticles = computed(() => {
    const articles = this.store.articles.value();
    if (articles) {
      return articles.length;
    } else {
      return -1;
    }
  });
}
