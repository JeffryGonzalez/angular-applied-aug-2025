import { Routes } from '@angular/router';
import { Books } from './books';
import { List } from './pages/list';
import { Prefs } from './pages/prefs';
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
        path: 'prefs',
        component: Prefs,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
