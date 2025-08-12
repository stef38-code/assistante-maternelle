export function calculerAgeEnfant(dateNaissance: string): string {
  if (!dateNaissance) {
    return 'Date invalide';
  }

  const birthDate = new Date(dateNaissance);
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const months = today.getMonth() - birthDate.getMonth();

  if (age < 1 || (age === 1 && months < 0)) return `${12 + months} mois`;
  if (months >= 0) return `${age} ans et ${months} mois`;
  return `${age - 1} ans et ${12 + months} mois`;
}
