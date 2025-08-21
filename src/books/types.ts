export type Book = {
  id: number;
  title: string;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  year: number;

  // add other fields as needed
};

export type Books = Book[];

export type ApiBooksModel = Book;
