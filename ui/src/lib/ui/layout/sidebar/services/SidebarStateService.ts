import { Injectable, signal } from '@angular/core';

@Injectable()
export class SidebarStateService {
  // Signal partagé pour stocker l'état ouvert/fermé
  private _sidebarOuvert = signal(true);

  // Getter pour exposer l'état actuel
  get sidebarOuvert() {
    return this._sidebarOuvert;
  }

  // Fonction pour basculer l'état
  toggleSidebar() {
    this._sidebarOuvert.set(!this._sidebarOuvert());
  }
}
