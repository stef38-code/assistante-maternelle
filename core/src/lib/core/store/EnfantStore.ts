import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { creerUnNouvelEnfant, Enfant } from '@assistante-maternelle/enfant';
import { EnfantService } from '@assistante-maternelle/infrastructure';
import { inject } from '@angular/core';

/** État type pour le store des enfants */
export type EnfantState = {
  enfants: Enfant[]; // Liste de tous les enfants
  enfantSelectionne: Enfant; // Enfant actuellement sélectionné
};

/** État initial du store */
const initialEnfantState: EnfantState = {
  enfants: [], // À l'initialisation depuis EnfantService
  enfantSelectionne: creerUnNouvelEnfant(), // Aucun enfant sélectionné par défaut
};

/** Création du store avec @ngrx/signals */
export const EnfantStore = signalStore(
  { providedIn: 'root' },
  withState(  initialEnfantState),
  //withComputed(({ books
  withMethods((store, enfantService = inject(EnfantService))=> ({
    loadEnfants() {
      patchState(store,{ enfants: enfantService.listeDesEnfants()() });
    },

    modifierOuAjouterEnfant(enfant: Enfant) {
      // Mise à jour ou ajout via EnfantService
      enfantService.modifierOuAjouterEnfant(enfant);
      // Mettez à jour le signal du store après modification
      patchState(store, {
        enfants: [...enfantService.listeDesEnfants()()],
      });
    },
    supprimerEnfant(id: string) {
      // Suppression via EnfantService
      enfantService.supprimerEnfant(id);
      // Mise à jour du signal après suppression
      patchState(store, {
        enfants: [...enfantService.listeDesEnfants()()],
      });
    },
    selectEnfant(id: string | undefined) {
      // Recherche l'enfant par son ID dans la liste des enfants
      // Et mise à jour du signal enfantSelectionne
      patchState(store, {
        enfantSelectionne: enfantService.rechercherEnfant(id),
      });
    }
  })),
  withHooks({
    onInit({ loadEnfants }) {
      loadEnfants();
    }
  })
);
