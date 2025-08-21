import { signalStore, withState } from '@ngrx/signals';
import { BookSortBy, BooksSortingOrder } from '../types';
type BooksState = {
  sortingOrder: BooksSortingOrder;
  sortBy: BookSortBy;
};
export const BooksStore = signalStore(
  withState<BooksState>({
    sortingOrder: 'Ascending',
    sortBy: 'Title',
  }),
);
