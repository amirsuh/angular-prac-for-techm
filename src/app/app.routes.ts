import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Main } from './pages/main/main';
import { Debounceusingrxjs } from './pages/rxjs/debounceusingrxjs/debounceusingrxjs';
import { Domsanitize } from './pages/htmlcontentsafety/domsanitize/domsanitize';
import { Dompurify } from './pages/htmlcontentsafety/dompurify/dompurify';
import { Lifecycle } from './pages/lifecycle-hooks/lifecycle/lifecycle';
import { Compneedtooptimize } from './pages/rxjs/compneedtooptimize/compneedtooptimize';
import { Compneedtooptimized } from './pages/rxjs/compneedtooptimized/compneedtooptimized';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'ngrx',
    component: Main,
  },
  {
    path: 'rxjs',
    component: Debounceusingrxjs,

  },
    {
    path: 'domsanitize',
    component: Domsanitize,

  },
    {
    path: 'dompurify',
    component: Dompurify,

  },{
    path: 'lifecycle',
    component: Lifecycle,

  },
  {
    path: 'rxjsoptimise',
    component: Compneedtooptimize,

  },
  {
    path: 'rxjsoptimised',
    component: Compneedtooptimized,

  },
  {
    path: '',
    loadComponent:() => import('./pages/admin/admin').then(m=>m.Admin)
  },
];
