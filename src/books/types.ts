export type BookSortOptions = 'oldestFirst' | 'newestFirst';

// {
//     "author": "Unknown",
//     "country": "Sumer and Akkadian Empire",
//     "imageLink": "images/the-epic-of-gilgamesh.jpg",
//     "language": "Akkadian",
//     "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
//     "pages": 160,
//     "title": "The Epic Of Gilgamesh",
//     "year": -1700,
//     "id": "4"
// }
export type ApiBookItem = {
  id: string;
  title: string;
  author: string;
  year: number;
  country: string;
  imageLink: string;
  language: string;
  pages: number;
};

export type ApiBooks = ApiBookItem[];
