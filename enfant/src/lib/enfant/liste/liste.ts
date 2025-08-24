import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EnfantStore } from '@assistante-maternelle/core';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionTableLineEnfant } from './components/liste-action-table/action-table-line-enfant';
import { Enfant } from '../model/enfant';
import { ImageGenre } from './components/image-genre/image-genre';
import { CaptionTable } from './components/caption-table/caption-table';

@Component({
  selector: 'enfant-liste',
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
    ActionTableLineEnfant,
    ImageGenre,
    CaptionTable,
  ],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajout pour supporter les Web Components
  templateUrl: './liste.html',
  styleUrl: './liste.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Liste {
  private readonly _store = inject(EnfantStore);
  title: WritableSignal<string | null> = signal<string | null>('Modifier');

  enfants: Signal<Enfant[]> = this._store.enfants;

  constructor() {
    // this.globalFilterFromControl.valueChanges.pipe(
    //   debounceTime(300), // Attendre 300ms après une frappe
    //   distinctUntilChanged() // Traiter uniquement les valeurs uniques
    // ).subscribe(value => dt1.filterGlobal(value, 'contains'));
  }

}
