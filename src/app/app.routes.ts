import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Main } from './pages/main/main';

export const routes: Routes = [
  {
    path:'dashboard',
    component:Dashboard
  },
    {
    path:'ngrx',
    component:Main
  }
];
