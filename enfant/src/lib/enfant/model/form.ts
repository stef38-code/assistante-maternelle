import { FormControl } from '@angular/forms';
import { GenreEnfant } from './enfant';

export interface FormGroupEnfant {
  genre: FormControl<GenreEnfant | null>;
  nom: FormControl<string | null>;
  prenom: FormControl<string | null>;
  dateNaissance: FormControl<string | null>;
}
