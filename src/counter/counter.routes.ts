import { Routes } from '@angular/router';
import { Counter } from './counter';
import { Ui } from './pages/ui';
import { Prefs } from './pages/prefs';
import { CounterStore } from './stores/counter';
import { UiWithZone } from './pages/zone-ui';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    providers: [CounterStore], // provide it here, create it on first inject, but then keep it in memory until the browser is closed.
    children: [
      {
        path: 'ui',
        component: UiWithZone,
      },
      {
        path: 'prefs',
        component: Prefs,
      },
    ],
  },
];
