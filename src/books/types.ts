export interface BookEntity {
  id: number;
  title: string;
  author: string;
  country?: string;
  language?: string;
  pages?: number;
  year?: number;
  link?: string;
  imageLink?: string;
}

export interface BookApiResponse {
  results: BookEntity[];
}
