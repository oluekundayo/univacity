import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () =>
      import('./splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'details',
    loadComponent: () => import('./pages/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'filter',
    loadComponent: () => import('./pages/filter/filter.page').then( m => m.FilterPage)
  },  {
    path: 'institutes',
    loadComponent: () => import('./pages/institutes/institutes.page').then( m => m.InstitutesPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./components/toast/toast.page').then( m => m.ToastPage)
  },




];
