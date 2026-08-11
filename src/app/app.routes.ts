import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'pack',
    loadComponent: () => import('./pages/pack/pack-customize.component').then(m => m.PackCustomizeComponent)
  },
  {
    path: 'personalizar',
    loadComponent: () => import('./pages/pack/pack-customize.component').then(m => m.PackCustomizeComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
