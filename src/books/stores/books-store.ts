import { computed, resource } from '@angular/core';
import { signalStore, withComputed, withHooks, withProps } from '@ngrx/signals';
import { Books } from '../types';

export const BooksStore = signalStore(
  withProps(() => ({
    books: resource<Books, unknown>({
      loader: () => fetch('/api/books').then((b) => b.json()),
    }),
  })),
  withComputed((store) => {
    return {
      booksList: computed(() => store.books.value() ?? []),
    };
  }),
  withHooks({
    onInit() {
      //   setInterval(() => {
      //     store.articles.reload();
      //   }, 5000);
    },
  }),
);
