/**
 * Informations générales du site : c'est le seul endroit à modifier pour
 * changer le nom, le domaine ou les moyens de contact.
 *
 * Une valeur `null` signifie « pas encore décidé » : l'élément correspondant
 * n'est simplement pas affiché.
 */
export const site = {
  /** Nom de l'activité. PROVISOIRE : le nom définitif reste à trouver. */
  name: 'Elsa Pilates',
  /** Phrase courte qui résume l'activité (moteurs de recherche, partages). */
  tagline: 'Cours de Pilates à Joinville-le-Pont, Saint-Maur, à domicile et en visio',
  /** Adresse définitive du site. PROVISOIRE tant que le domaine n'est pas acheté. */
  url: 'https://example.com',
  locale: 'fr-FR',
  /** Tant que c'est `false`, le site demande aux moteurs de recherche de ne pas l'indexer. À passer à `true` à la mise en ligne. */
  indexable: false,

  teacher: {
    firstName: 'Elsa',
    /** Nom de famille, s'il doit apparaître sur le site. */
    lastName: null as string | null,
  },

  /** Communes citées pour le référencement local. À compléter avec Elsa. */
  areaServed: ['Joinville-le-Pont', 'Saint-Maur-des-Fossés', 'Val-de-Marne'],

  contact: {
    /** Adresse qui reçoit les demandes du formulaire. */
    email: null as string | null,
    /** Identifiant Instagram, sans le @. */
    instagram: null as string | null,
    /** Lien WhatsApp complet. On n'affiche jamais de numéro de téléphone. */
    whatsappUrl: null as string | null,
  },
} as const;

export type Site = typeof site;
