import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // Signal pour la date du jour
  dateDuJour = signal<string>(new Date().toLocaleDateString());

  // Signal pour l'heure mise à jour dynamiquement
  heureActuelle = signal<string>(new Date().toLocaleTimeString());

  constructor() {
    // Effet pour mettre à jour l'heure chaque seconde
    effect(() => {
      setInterval(() => {
        this.heureActuelle.set(new Date().toLocaleTimeString());
      }, 1000);
    });
  }

}
