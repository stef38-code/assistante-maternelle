import { UuidService } from '@assistante-maternelle/core';

export interface Enfant {
  id: string;
  genre: GenreEnfant;
  nom: string;
  prenom: string;
  dateNaissance: Date;
}
export type GenreEnfant = "Garçon" | "Fille";

export function creerUnNouvelEnfant():Enfant{
  const _uuid = new UuidService();
  return {
    id: _uuid.generateUuid(),
    genre: 'Garçon',
    nom: '',
    prenom: '',
    dateNaissance: new Date()
  }
}
