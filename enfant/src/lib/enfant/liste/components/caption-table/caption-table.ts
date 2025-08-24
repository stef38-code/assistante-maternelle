import { Component, input } from '@angular/core';
import { Table } from 'primeng/table';
import { Enfant } from '@assistante-maternelle/enfant';
import { Button } from 'primeng/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { ButtonAjouterModifier } from '../button-ajouter-modifier/button-ajouter-modifier';

@Component({
  selector: 'enfant-caption-table',
  imports: [
    Button,
    IconField,
    InputIcon,
    InputText,
    ReactiveFormsModule,
    ButtonAjouterModifier,
  ],
  templateUrl: './caption-table.html',
  styleUrl: './caption-table.css',
})
export class CaptionTable {


  dt = input.required<Table<Enfant>>();
  globalFilterFromControl = new FormControl<string>('');

  /**
   * Vide la table et le filtre global.
   */
  effacerFiltreGlobal() {
    this.dt().clear();
    this.globalFilterFromControl.setValue('');
  }

  filtrerGlobal() {
    this.dt().filterGlobal(this.globalFilterFromControl.value, 'contains');
  }
}
