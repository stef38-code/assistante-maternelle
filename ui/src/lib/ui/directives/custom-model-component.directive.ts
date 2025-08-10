import {computed, Directive, signal, WritableSignal} from '@angular/core';
import {ControlValueAccessor, FormGroup} from '@angular/forms';
/**
 * Un composant Angular abstrait qui implémente l'interface `ControlValueAccessor`
 * pour permettre la liaison de données bidirectionnelle avec les formulaires Angular. Ce composant est conçu
 * pour gérer une valeur d'un type générique `T` et gérer son état à l'aide d'un groupe de formulaires réactifs.
 * Il fournit des fonctionnalités de propagation de valeur, d'interactions tactiles et de désactivation
 * ou activer le contrôle de formulaire.
 *
 * @typeparam T Le type de la valeur gérée par le composant.
 *
 * Propriétés:
 * - `form` : Propriété abstraite qui représente le `FormGroup` gérant l'état du modèle du composant.
 * - `_value` : Un signal inscriptible qui contient la valeur actuelle de l'état du composant.
 * - `isInvalid` : un signal calculé qui est évalué à `true` si le formulaire n'est pas valide et touché.
 *
 * Méthodes:
 * - `writeValue(value: T): void`: Utilisé par Angular pour mettre à jour la valeur du composant. Il met à jour l'état interne et corrige le formulaire avec la valeur donnée.
 * - `registerOnChange(fn: (value: T) => void): void`: Enregistre une fonction de rappel à appeler lorsque la valeur change.
 * - `registerOnTouched(fn: () => void): void`: Enregistre une fonction de rappel à appeler lorsque le composant est touché.
 * - `setDisabledState(isDisabled: boolean): void`: Met à jour l'état désactivé du contrôle de formulaire, en l'activant ou en le désactivant.
 *
 * Signaux :
 * - `_value` : Signal interne inscriptible représentant la valeur actuelle de type `T` ou indéfinie.
 * - `isInvalid` : signal calculé exposé indiquant si le formulaire est invalide et touché.
 *
 * exemple :
 *
 * ```typescript
 * @Component({
 * import { Component, forwardRef } from '@angular/core';
 * import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
 * import { CustomModelComponent } from './custom-model.component'; // Assurez-vous d'avoir le bon chemin
 * import { Address } from './address.model';
 *
 * @Component({
 *   selector: 'address',
 *   templateUrl: './address.component.html',
 *   providers: [
 *     {
 *       provide: NG_VALUE_ACCESSOR,
 *       useExisting: forwardRef(() => AddressComponent),
 *       multi: true
 *     }
 *   ]
 * })
 * export class AddressComponent extends CustomModelComponent<Address> {
 *   // Le formulaire spécifique à l'adresse est déclaré ici
 *   public form = new FormGroup({
 *     city: new FormControl(null),
 *     country: new FormControl(null),
 *     zipCode: new FormControl(null),
 *     street: new FormControl(null)
 *   });
 *
 *   constructor() {
 *     super();
 *     // On s'abonne aux changements de valeur du formulaire pour notifier les composants parents
 *     this.form.valueChanges.subscribe((value) => {
 *       this.onChange(value as Address);
 *       this.onTouched();
 *     });
 *   }
 * }
 *  ```
 */
@Directive({
  // Il est courant de ne pas spécifier de sélecteur pour une classe abstraite.
  // Cependant, si la classe est destinée à être utilisée comme Directive directement,
  // il faudrait un sélecteur.
})
export abstract class CustomModelComponent<T> implements ControlValueAccessor {
  // Le formulaire qui gère les données de l'objet de type T
  public abstract form: FormGroup;

  // L'état du composant est géré par un signal
  protected _value: WritableSignal<T | undefined> = signal(undefined);

  // Computed signal pour vérifier si le formulaire est invalide
  public readonly isInvalid = computed(() => this.form.invalid && this.form.touched);

  // Les fonctions de rappel pour la gestion du onChange et onTouched
  protected onChange = (value: T) => {};
  protected onTouched = () => {};

  // La méthode `writeValue` est appelée par Angular pour définir la valeur du composant
  writeValue(value: T): void {
    if (value) {
      this._value.set(value);
      this.form.patchValue(value);
    }
  }

  // La méthode `registerOnChange` est appelée pour enregistrer la fonction de rappel pour la notification de changement de valeur
  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  // La méthode `registerOnTouched` est appelée pour enregistrer la fonction de rappel pour la notification d'interaction
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // La méthode `setDisabledState` est utilisée pour désactiver ou activer le composant
  setDisabledState(disabled
                   : boolean): void {
    if (disabled
    ) {
      this.form.disable();
    } else {
      this.form.enable();
    }

  }
}
