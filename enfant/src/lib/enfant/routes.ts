import { Route, RouterModule } from '@angular/router';
import { Liste } from './liste/liste';
import { Formulaire } from './formulaire/formulaire';
import { NgModule } from '@angular/core';

export const appRoutesEnfant: Route[] = [
  {
    path: 'liste',
    component: Liste,
  },
  {
    path: 'formulaire', // Ajout de la route pour le formulaire
    component: Formulaire,
  },
  {
    path: '',
    redirectTo: 'liste', // Par défaut, redirige vers la liste
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'liste',
  }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutesEnfant)],
  exports: [RouterModule],
})
export class EnfantRouting {}
