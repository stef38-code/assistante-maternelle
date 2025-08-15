import { Injectable, signal } from '@angular/core';
import { creerUnNouvelEnfant, Enfant } from '@assistante-maternelle/enfant';
import { enfantsData } from '../datas/enfants-data';

@Injectable({
  providedIn: 'root',
})
export class EnfantService {
  private enfantsData: Enfant[] = enfantsData;

  /**
   * Retourne la liste des enfants sous forme de signal.
   */
  public listeDesEnfants() {
    return signal<Enfant[]>(this.enfantsData);
  }

  /**
   * Retourne un nouvel enfant avec des valeurs par défaut.
   */
  public nouvelEnfant() {
    return signal<Enfant>(creerUnNouvelEnfant());
  }

  /**
   * Modifie un enfant existant ou l'ajoute si l'enfant n'existe pas.
   * @param enfantModifie L'enfant à modifier ou ajouter.
   */
  public modifierOuAjouterEnfant(enfantModifie: Enfant): void {
    const index = this.enfantsData.findIndex(
      (enfant) => enfant.id === enfantModifie.id
    );

    if (index !== -1) {
      // Si l'enfant existe déjà, on le met à jour
      this.enfantsData[index] = enfantModifie;
    } else {
      // Sinon, on l'ajoute à la liste
      this.enfantsData.push(enfantModifie);
    }
  }

  /**
   * Recherche un enfant depuis son id si idEnfant == undefined alors on retourne nouvelEnfant()
   * @param idEnfant id de l'enfant <Optionnelle>.
   * @Return un enfant.
   */
  public rechercherEnfant(idEnfant?: string): Enfant {
    if (idEnfant) {
      const enfant = this.enfantsData.find((enfant) => enfant.id === idEnfant);
      if (enfant) {
        return enfant;
      }
    }
    return this.nouvelEnfant()();
  }
  /**
   * Supprime un enfant de la liste par son ID.
   * @param id L'identifiant de l'enfant à supprimer.
   */
  public supprimerEnfant(id: string): void {
    this.enfantsData = this.enfantsData.filter((enfant) => enfant.id !== id);
  }
}
