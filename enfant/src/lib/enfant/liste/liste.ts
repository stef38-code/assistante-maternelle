import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Enfant } from '../model/enfant';
import { Formulaire } from '../formulaire/formulaire';
import { UuidService } from '@assistante-maternelle/core';

@Component({
  selector: 'enfant-liste',
  imports: [CommonModule, TableModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  private readonly _uuid = new UuidService();
  private readonly _dialogService = inject(DialogService);
  enfants = signal<Enfant[]>([
    {
      id: this._uuid.generateUuid(),
      genre: 'Garçon',
      nom: 'Martin',
      prenom: 'Jean',
      dateNaissance: new Date(2022, 5, 10),
    },
    {
      id: this._uuid.generateUuid(),
      genre: 'Fille',
      nom: 'Dupont',
      prenom: 'Claire',
      dateNaissance: new Date(2020, 8, 20),
    },
  ]);
  openDialog(enfant?: Enfant): void {
    this._dialogService.open(Formulaire, {
      data: enfant,
      header: enfant ? 'Modifier un enfant' : 'Ajouter un enfant',
      width: '30%',
    });
  }
}
