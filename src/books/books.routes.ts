import { Routes } from '@angular/router';
import { Books } from './books.component';
import { List } from './pages/list.component';
import { Stats } from './pages/stats.component';
export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: Books,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: List,
      },
      {
        path: 'stats',
        component: Stats,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
