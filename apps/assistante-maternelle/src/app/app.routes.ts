import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@assistante-maternelle/enfant').then((m) => m.Liste),
    pathMatch: 'full',
  },
];
