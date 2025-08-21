export type ApiBookItem = {
  id: string;
  title: string;
  author: string;
  year: number;
  pages: number;
};

export type ApiBooks = ApiBookItem[];

export type ApiBookMetrics = {
  totalCount: number;
  averagePages: number;
  earliestYear: number;
  mostRecentYear: number;
};

export type BooksSortingOrder = 'Ascending' | 'Descending';
export type BookSortBy = 'Author' | 'Year' | 'Title';
