import { calculerAgeEnfant } from './calcul';

describe('calculerAgeEnfant', () => {
  it('retourne "Date invalide" lorsque la date est invalide', () => {
    expect(calculerAgeEnfant(new Date('invalid-date'))).toBe('Date invalide');
  });

  it("retourne '0 mois' pour une naissance récente (< 1 mois)", () => {
    const dateNaissance = new Date();
    expect(calculerAgeEnfant(dateNaissance)).toBe('0 mois');
  });

  it("retourne '1 mois' pour une naissance datant exactement d'un mois", () => {
    const dateNaissance = new Date();
    dateNaissance.setMonth(dateNaissance.getMonth() - 1);
    expect(calculerAgeEnfant(dateNaissance)).toBe('1 mois');
  });

  it("retourne 'X mois' pour des naissances de moins d'un an", () => {
    const dateNaissance = new Date();
    dateNaissance.setMonth(dateNaissance.getMonth() - 5);
    expect(calculerAgeEnfant(dateNaissance)).toBe('5 mois');
  });

  it("retourne '1 an' lorsque l'enfant a exactement 1 an", () => {
    const dateNaissance = new Date();
    dateNaissance.setFullYear(dateNaissance.getFullYear() - 1);
    expect(calculerAgeEnfant(dateNaissance)).toBe('1 an');
  });

  it("retourne '1 an et X mois' pour un âge supérieur à 1 an", () => {
    const dateNaissance = new Date();
    dateNaissance.setFullYear(dateNaissance.getFullYear() - 1);
    dateNaissance.setMonth(dateNaissance.getMonth() - 4); // 1 an et 4 mois
    expect(calculerAgeEnfant(dateNaissance)).toBe('1 an et 4 mois');
  });

  it("retourne 'X ans et X mois' pour un âge supérieur à 1 an et plusieurs mois", () => {
    const dateNaissance = new Date();
    dateNaissance.setFullYear(dateNaissance.getFullYear() - 3); // 3 ans
    dateNaissance.setMonth(dateNaissance.getMonth() - 7); // 3 ans et 7 mois
    expect(calculerAgeEnfant(dateNaissance)).toBe('3 ans et 7 mois');
  });

  it("retourne correctement les mois restants pour un âge proche d'une année supplémentaire", () => {
    const dateNaissance = new Date();
    dateNaissance.setFullYear(dateNaissance.getFullYear() - 1); // 1 an
    dateNaissance.setMonth(dateNaissance.getMonth() + 2); // -2 mois d'âge
    expect(calculerAgeEnfant(dateNaissance)).toBe('11 mois');
  });
});
