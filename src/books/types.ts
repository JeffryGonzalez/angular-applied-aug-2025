export type ApiBookItem = {
  id: string;
  title: string;
  author: string;
  year: string;
};

export type ApiBooks = ApiBookItem[];

export type SortBy = 'Title' | 'Author' | 'Year';

export type SortOrder = 'Asc' | 'Desc';

export type ApiBookSortPref = {
  sortOrder: SortOrder;
  sortBy: SortBy;
};
