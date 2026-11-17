import { site } from './site.ts';

/**
 * Ce qu'il reste à faire dans src/config/site.ts avant d'ouvrir le site au public.
 *
 * - `bloquants` : tant que `indexable` vaut `false`, rien n'est bloqué. Dès qu'il passe
 *   à `true`, la construction du site s'arrête si une de ces informations manque.
 * - `rappels` : simplement affichés à chaque construction, sans rien bloquer.
 */
export function oublisAvantMiseEnLigne(): { bloquants: string[]; rappels: string[] } {
  const bloquants: string[] = [];
  const rappels: string[] = [];
  const { contact, legal } = site;

  if (site.url.includes('example.com')) bloquants.push("url : l'adresse définitive du site");
  if (!contact.formEndpoint && !contact.email && !contact.instagram && !contact.whatsappUrl) {
    bloquants.push('contact : au moins un moyen de contact (formulaire, e-mail, Instagram ou WhatsApp)');
  }
  if (!legal.editeur) bloquants.push("legal.editeur : le nom de l'éditeur du site");
  if (!legal.statut) bloquants.push('legal.statut : le statut professionnel');
  if (!legal.siret) bloquants.push('legal.siret : le numéro SIRET');
  if (!legal.adresse) bloquants.push("legal.adresse : l'adresse professionnelle");

  if (site.photosProvisoires) {
    rappels.push("photosProvisoires : le site utilise encore des photos de banque d'images, aucune ne montre Elsa");
  }

  return { bloquants, rappels };
}
