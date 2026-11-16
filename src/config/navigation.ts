/** Les liens du menu principal, dans l'ordre d'affichage. */
export const navigation = [
  { label: 'Cours', href: '/#cours' },
  { label: 'Tarifs', href: '/tarifs/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Questions', href: '/faq/' },
  { label: 'Articles', href: '/articles/' },
] as const;

/** La page des articles : son lien disparaît du menu tant qu'aucun article n'est publié. */
export const articlesHref = '/articles/';

/** La page de contact, appelée depuis tous les boutons « Écrire à Elsa ». */
export const contactHref = '/contact/';
