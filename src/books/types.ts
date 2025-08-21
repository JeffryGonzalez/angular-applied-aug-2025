/*   {
    "id": "1",
    "title": "Angular Documentation",
    "description": "Comprehensive guide to Angular framework.",
    "link": "https://angular.dev/",
    "added": "2025-08-18T17:14:10.029Z"
  }*/

export type ApiBookItem = {
  id: string;
  title: string;
  description: string;
  link: string;
  added: string;
};

export type ApiBooks = ApiBookItem[];

export type BookSortOptions = 'oldestFirst' | 'newestFirst';

export type ApiBookModel = ApiBookItem;
