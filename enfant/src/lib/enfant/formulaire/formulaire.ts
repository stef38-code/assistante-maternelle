import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { calculerAgeEnfant, UuidService } from '@assistante-maternelle/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { Enfant, GenreEnfant } from '../model/enfant';
import { FormGroupEnfant } from '../model/form';

@Component({
  selector: 'enfant-formulaire',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    FloatLabelModule,
    InputTextModule,
    DatePickerModule,
  ],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  private readonly _uuid = new UuidService();
  enfant = computed(() => {
    if (this.config?.data) {
      return this.config.data as Enfant;
    }
    return this.getDefaultEnfant();
  });
  dialogRef = inject(DynamicDialogRef);
  config = inject(DynamicDialogConfig);
  form: FormGroup<FormGroupEnfant> = new FormGroup<FormGroupEnfant>({
    genre: new FormControl<GenreEnfant>(
      this.enfant().genre || 'Garçon',
      Validators.required
    ),
    dateNaissance: new FormControl<string>(
      this.enfant().dateNaissance.toISOString(),
      Validators.required
    ),
    nom: new FormControl<string | null>(this.enfant().nom, Validators.required),
    prenom: new FormControl<string | null>(
      this.enfant().prenom,
      Validators.required
    ),
  });

  onSubmit(): void {
    if (this.form.valid) {
      const enfantSaisie = this.form.value as Partial<Enfant>;
      // Création de l'objet enfant avec traitement des champs potentiellement vides ou mal typés
      const enfantData: Enfant = {
        id: this.enfant()?.id ?? this._uuid.generateUuid(),
        genre: enfantSaisie.genre ?? 'Garçon',
        nom: enfantSaisie.nom ?? '',
        prenom: enfantSaisie.prenom ?? '',
        dateNaissance: new Date(enfantSaisie.dateNaissance ?? ''),
      };

      this.dialogRef.close(enfantData);
    }
  }

  calculateAge(value: string) {
    return calculerAgeEnfant(value);
  }
  private getDefaultEnfant(): Enfant {
    return {
      id: this._uuid.generateUuid(),
      genre: 'Garçon',
      nom: '',
      prenom: '',
      dateNaissance: new Date(),
    };
  }
  get age(): string {
    const dateNaissance = this.form.get('dateNaissance')?.value;
    return dateNaissance ? calculerAgeEnfant(dateNaissance) : 'Date invalide';
  }
}
