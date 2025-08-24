import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { SidebarStateService } from './services/SidebarStateService';

@Component({
  selector: 'ui-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterLink, NgClass],
  styleUrls: ['./sidebar.css'],
  providers:[SidebarStateService]
})
export class Sidebar {
  protected readonly sidebarState= inject(SidebarStateService);
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
    { label: 'Liste des enfants', icon: 'pi pi-user', routerLink: '/enfant' },
  ];

  // Fonction pour basculer l'état du Sidebar
  toggleSidebar() {
    this.sidebarState.toggleSidebar();
  }
}
