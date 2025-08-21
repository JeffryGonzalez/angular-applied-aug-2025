import { Routes } from '@angular/router';
import { Counter_2 } from './counter';
import { UI } from './pages/ui';
import { Prefs_2 } from './pages/prefs';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter_2,
    children: [
      {
        path: 'ui',
        component: UI,
        children: [],
      },
      {
        path: 'prefs',
        component: Prefs_2,
        children: [],
      },
    ],
  },
];
