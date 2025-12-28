import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Debounceusingrxjs } from './pages/rxjs/debounceusingrxjs/debounceusingrxjs';
import { Domsanitize } from './pages/htmlcontentsafety/domsanitize/domsanitize';
import { Dompurify } from './pages/htmlcontentsafety/dompurify/dompurify';
import { Lifecycle } from './pages/lifecycle-hooks/lifecycle/lifecycle';
import { Compneedtooptimize } from './pages/rxjs/compneedtooptimize/compneedtooptimize';
import { Compneedtooptimized } from './pages/rxjs/compneedtooptimized/compneedtooptimized';
import { Main } from './pages/ngrx/main/main';
import { Hparent } from './pages/lifecycle-hooks/new-hook-eg/hparent/hparent';
import { CallHijri } from './pages/hijri/call-hijri/call-hijri';
import { DynamicForm } from './reactiveforms/dynamic-form/dynamic-form';
import { Maincomponent } from './reactiveforms/maincomponent/maincomponent';
import { Closures } from './pages/js-in-angular/closures/closures';
import { Jsonplaceholderapi } from './pages/js-in-angular/jsonplaceholderapi/jsonplaceholderapi';
import { LearnTs } from './pages/js-in-angular/learn-ts/learn-ts';
import { Test } from './test/test';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'hijri',
    component: CallHijri
  },
  {
    path: 'ngrx',
    component: Main,
  },
  {
    path:'ngrx-real',
    loadComponent(){
      return import('./pages/ngrx-kirana/main-comp/main-comp').then(c=>c.MainComp)
    }
  },
   {
    path: 'reactiveforms',
    component: Maincomponent,
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
    component: Hparent,

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
    path: 'closures',
    component: Test,

  },

  {
    path: '',
    loadComponent:() => import('./pages/ngrx/admin/admin').then(m=>m.Admin)
  }
];
