import { delay, HttpResponse, http } from 'msw';

const Articles = [
  {
    id: '1',
    title: 'Angular Documentation',
    description: 'Comprehensive guide to Angular framework.',
    link: 'https://angular.dev/',
  },
  {
    id: '2',
    title: 'TypeScript Handbook',
    description: 'In-depth guide to TypeScript language.',
    link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
  },
  {
    id: '3',
    title: 'NGRX Documentation',
    description: 'Comprehensive guide to NGRX state management.',
    link: 'https://ngrx.io/docs',
  },
];

export const articlesHandlers = [
  http.get('https://fake.api.com/articles', async () => {
    await delay();
    return HttpResponse.json(Articles);
  }),
];
