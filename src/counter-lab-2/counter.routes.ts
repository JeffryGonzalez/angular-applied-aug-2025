import { Routes } from '@angular/router';
import { Counter } from '../counter-lab-2/counter';
import { Ui } from '../counter-lab-2/pages/ui';
import { Prefs } from '../counter-lab-2/pages/prefs';
import { CounterService } from './services/counter.service';
export const COUNTER_2_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    providers: [CounterService], // Tie the life span of the service to the route itself (persists even when navigating to other routes!)
    children: [
      {
        path: 'ui',
        component: Ui,
      },
      {
        path: 'prefs',
        component: Prefs,
      },
    ],
  },
];
