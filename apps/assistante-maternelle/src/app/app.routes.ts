import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'enfant',
    loadChildren: async () =>
      await import('@assistante-maternelle/enfant').then(
        (m) => m.EnfantRouting
      ),
  },
];
