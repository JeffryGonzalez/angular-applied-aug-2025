import { Routes } from '@angular/router';
import { Books } from './books';
import { List } from './pages/list';
import { BookStats } from './component/stats';
export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: Books,
    children: [
      {
        path: 'list',
        component: List,
      },
      {
        path: 'bookStats',
        component: BookStats,
      },
      {
        path: 'details/:id',
        component: BookStats,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
