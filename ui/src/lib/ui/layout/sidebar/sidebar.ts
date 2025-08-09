import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterLink, NgClass],
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  // Signal pour l'état du Sidebar (ouvert ou fermé)
  sidebarOuvert = signal(true);

  // Liste des éléments du menu
  menuItems: MenuItem[] = [
    { label: 'Tableau de bord', icon: 'pi pi-home', routerLink: '/dashboard' },
    {
      label: 'Gestion des contrats',
      icon: 'pi pi-file-edit',
      routerLink: '/contrats',
    },
    { label: 'Liste des parents', icon: 'pi pi-users', routerLink: '/parents' },
    { label: 'Liste des enfants', icon: 'pi pi-user', routerLink: '/enfants' },
  ];

  // Fonction pour basculer l'état du Sidebar
  toggleSidebar() {
    this.sidebarOuvert.set(!this.sidebarOuvert());
  }
}
