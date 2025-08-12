export interface Enfant {
  id: string;
  genre: GenreEnfant;
  nom: string;
  prenom: string;
  dateNaissance: Date;
}
export type GenreEnfant = "Garçon" | "Fille";
