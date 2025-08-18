import { Routes } from '@angular/router';
import { Demos } from './demos';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: Demos,
    children: [],
  },
];
