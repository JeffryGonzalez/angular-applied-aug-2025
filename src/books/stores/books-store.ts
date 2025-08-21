import { computed, resource } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { ApiBookItem, ApiBooks, BookSortOptions } from '../types';

type BooksState = {
  sortBy: BookSortOptions;
};

export const BooksStore = signalStore(
  withState<BooksState>({
    sortBy: 'oldestFirst',
  }),
  withProps(() => {
    return {
      books: resource<ApiBooks, unknown>({
        loader: () => fetch('/api/books').then((b) => b.json()),
      }),
    };
  }),
  withMethods((store) => {
    return {
      setSortBy: (sortBy: BookSortOptions) => patchState(store, { sortBy }),
    };
  }),
  withComputed((store) => {
    return {
      sortedList: computed(() => {
        const books = store.books.value() ?? [];
        const sortBy = store.sortBy();
        return books.toSorted((l: ApiBookItem, r: ApiBookItem) => {
          if (l.year < r.year) {
            return sortBy === 'oldestFirst' ? 1 : -1;
          }
          if (l.year > r.year) {
            return sortBy === 'newestFirst' ? -1 : 1;
          }
          return 0;
        });
      }),
    };
  }),
  withHooks({
    onInit() {
      //something
    },
  }),
);
