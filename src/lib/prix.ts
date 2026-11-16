/** Affiche un prix en euros, ou « Sur demande » tant qu'il n'est pas fixé. */
export function afficherPrix(prix: number | null): string {
  if (prix === null) return 'Sur demande';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(prix) ? 0 : 2,
  }).format(prix);
}
