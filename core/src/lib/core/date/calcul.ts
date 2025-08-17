import { differenceInYears, differenceInMonths, isValid } from 'date-fns';
/**
 * Calcule l'âge d'un enfant en années et en mois à partir de sa date de naissance.
 *
 * @param {Date} dateNaissance - La date de naissance de l'enfant.
 * @return {string} L'âge de l'enfant sous forme de chaîne de caractères. Si la date est invalide, retourne "Date invalide".
 */
export function calculerAgeEnfant(dateNaissance: Date): string {
  if (!isValid(dateNaissance)) {
    return 'Date invalide';
  }

  const today = new Date();

  // Calcul de l'âge en années et en mois
  const years = differenceInYears(today, dateNaissance);
  const monthsTotal = differenceInMonths(today, dateNaissance);
  const months = monthsTotal % 12;

  if (years === 0) {
    return  `${months} mois` ;
  }

  if (months === 0) {
    return `${years} ans`;
  }

  return `${years} ans et ${months} mois`;
}
