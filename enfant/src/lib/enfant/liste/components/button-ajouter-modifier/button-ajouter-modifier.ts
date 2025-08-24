import { Component, computed, inject, input } from '@angular/core';
import { Button } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { Enfant } from '@assistante-maternelle/enfant';
import { EnfantStore } from '@assistante-maternelle/core';
import { Router } from '@angular/router';

@Component({
  selector: 'enfant-button-ajouter-modifier',
  imports: [Button, Tooltip],
  templateUrl: './button-ajouter-modifier.html',
  styleUrl: './button-ajouter-modifier.css',
})
export class ButtonAjouterModifier {
  private readonly _store = inject(EnfantStore);
  private readonly router = inject(Router);
  titreBouton = input.required<string>();
  actionBouton = input.required<'Modifier'|'Ajouter'>();
  iconeBouton = input.required<string>();
  enfant = input<Enfant | undefined>(undefined);
  ariaLabel = computed(()=>this.actionBouton());

  versFormulaireEnfant() {
    this._store.selectEnfant(this.enfant()?.id);
    this.router.navigate(['enfant', 'formulaire'], {
      queryParams: { title: this.actionBouton() }, // Utilisez des queryParams
    });
  }

}
