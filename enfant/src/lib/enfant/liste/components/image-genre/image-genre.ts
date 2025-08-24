import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Signal,
} from '@angular/core';

@Component({
  selector: 'enfant-image-genre',
  imports: [],
  templateUrl: './image-genre.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageGenre {
  genre= input.required<string|undefined>();
  /**
   * Retourne le chemin de l'image en fonction du genre de l'enfant.
   * @returns Le chemin vers l'image correspondante.
   */
  getImageSrc: Signal<string> = computed(()=>{
    switch (this.genre()) {
      case 'Garçon':
        return 'png/boy.png';
      case 'Fille':
        return 'png/girl.png';
      default:
        return 'png/john.png';
    }
  });
}
