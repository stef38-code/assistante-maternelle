import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { calculerAgeEnfant, EnfantStore } from '@assistante-maternelle/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { Enfant, GenreEnfant } from '../model/enfant';
import { FormGroupEnfant } from '../model/form';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'enfant-formulaire',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    FloatLabelModule,
    InputTextModule,
    DatePickerModule,
  ],
  templateUrl: './formulaire.html',
  styleUrls: ['./formulaire.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulaire {
  private readonly _store = inject(EnfantStore);

  //title = signal<string>(''); // Titre passé via la route
  enfant = this._store.enfantSelectionne();

  private readonly router = inject(Router);

  routeActive = inject(ActivatedRoute);
  private readonly routeActiveQueryParams = toSignal(
    this.routeActive.queryParams
  );
  title = computed(
    () => this.routeActiveQueryParams()?.['title'] || 'Formulaire'
  );

  form: FormGroup<FormGroupEnfant> = new FormGroup<FormGroupEnfant>({
    genre: new FormControl<GenreEnfant>(this.enfant.genre, [
      Validators.required,
    ]),
    dateNaissance: new FormControl<Date>(
      this.enfant.dateNaissance,
      Validators.required
    ),
    nom: new FormControl<string | null>(this.enfant.nom, [
      Validators.required,
      Validators.minLength(1),
    ]),
    prenom: new FormControl<string | null>(this.enfant.prenom, [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  onSubmit(): void {
    if (this.form.valid) {
      const rawDate = this.form.get('dateNaissance')?.value || '';
      const dateNaissance = new Date(rawDate);

      const enfant: Enfant = {
        id: this.enfant.id,
        genre: this.form.get('genre')?.value || 'Garçon',
        nom: this.form.get('nom')?.value || '',
        prenom: this.form.get('prenom')?.value || '',
        dateNaissance,
      };

      // Sauvegarder (simulation)
      console.log('Enfant enregistré :', enfant);
      this._store.modifierOuAjouterEnfant(enfant);
      this.router.navigate(['enfant','liste']); // Retourne à la liste
    }
  }

  onCancel(): void {
    this.router.navigate(['enfant','liste']); // Redirige vers la liste
  }
  get age(): string {
    const dateNaissance = this.form.get('dateNaissance')?.value;
    return dateNaissance ? calculerAgeEnfant(dateNaissance) : 'Date invalide';
  }
}
