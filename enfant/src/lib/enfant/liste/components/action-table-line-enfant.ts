import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject, input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { Enfant } from '@assistante-maternelle/enfant';
import { EnfantStore } from '@assistante-maternelle/core';

@Component({
  selector: 'enfant-liste-action-table-line',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajout pour supporter les Web Components
  templateUrl: './action-table-line-enfant.html',
  styleUrl: './action-table-line-enfant.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionTableLineEnfant{
  private readonly _router = inject(Router);
  private readonly _store = inject(EnfantStore);
  enfant = input.required<Enfant>();

  versFormulaireEnfantEXistant() {
    this._store.selectEnfant(this.enfant().id);
    this._router.navigate(['/formulaire'], {
      queryParams: { title:'Modifier' }, // Utilisez des queryParams
    });
  }
  supprimerEnfantExistant() {
    this._store.supprimerEnfant(this.enfant().id);
  }
}

