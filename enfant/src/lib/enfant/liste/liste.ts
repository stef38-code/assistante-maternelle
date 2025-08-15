import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Enfant } from '../model/enfant';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { EnfantStore } from '@assistante-maternelle/core';

@Component({
  selector: 'enfant-liste',
  imports: [CommonModule, TableModule, ButtonModule, DialogModule],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajout pour supporter les Web Components
  templateUrl: './liste.html',
  styleUrl: './liste.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Liste {
  private readonly _store = inject(EnfantStore);
  title = signal<string | null>('Modifier');
  router = inject(Router);
  enfants = this._store.enfants;

  navigateToFormulaire(title: string, enfant?: Enfant) {
    this._store.selectEnfant(enfant?.id);
    this.router.navigate(['/formulaire'], {
      queryParams: { title }, // Utilisez des queryParams
    });
  }
}
