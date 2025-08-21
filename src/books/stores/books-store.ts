import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

import { computed, resource } from '@angular/core';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const BooksStore = signalStore(
  withDevtools('books'),
  withState<BooksState>({
    sortingBy: 'oldestFirst',
  }),
  withProps(() => {
    return {
      articles: resource<ApiBooks, unknown>({
        loader: () =>
          fetch('https://fake.api.com/articles').then((r) => r.json()),
      }),
    };
  }),
  withMethods((store) => {
    return {
      setSortBy: (sortingBy: BooksSortOptions) =>
        patchState(store, { sortingBy }),
    };
  }),
  withComputed((store) => {
    return {
      sortedList: computed(() => {
        const articles = store.articles.value() ?? [];
        const sortBy = store.sortingBy();
        const favs = store.readingListIds();
        return articles
          .toSorted((lhs: ApiBookItem, rhs: ApiBookItem) => {
            const leftDate = Date.parse(lhs.added);
            const rightDate = Date.parse(rhs.added);
            if (leftDate < rightDate) {
              return sortBy === 'oldestFirst' ? 1 : -1;
            }
            if (leftDate > rightDate) {
              return sortBy === 'newestFirst' ? -1 : 1;
            }
            return 0;
          })
          .map(
            (a) =>
              ({
                ...a,
                isOnReadingList: favs.some((id) => a.id === id),
              }) as ApiBookModel,
          );
      }),
    };
  }),
);
