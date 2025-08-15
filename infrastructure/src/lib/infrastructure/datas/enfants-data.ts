import { Enfant } from '@assistante-maternelle/enfant';

export const enfantsData = [
  {
    id: 'e-1',
    genre: 'Garçon',
    nom: 'Martin',
    prenom: 'Jean',
    dateNaissance: new Date(2022, 5, 10),
  },
  {
    id: 'e-2',
    genre: 'Fille',
    nom: 'Dupont',
    prenom: 'Claire',
    dateNaissance: new Date(2020, 8, 20),
  },
  {
    id: 'e-3',
    genre: 'Garçon',
    nom: 'Dupont',
    prenom: 'Jules',
    dateNaissance: new Date(2023, 10, 20),
  },
  {
    id: 'e-4',
    genre: 'Fille',
    nom: 'Bertrand',
    prenom: 'Louise',
    dateNaissance: new Date(2024, 10, 20),
  },
] as Enfant[];
