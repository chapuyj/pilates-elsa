/**
 * Données structurées (schema.org) lues par Google pour comprendre le site.
 * Tout vient de src/config/site.ts et des fichiers de contenu : rien à modifier ici au quotidien.
 */
import type { CollectionEntry } from 'astro:content';
import { site } from '../config/site';

const adresse = (chemin: string) => new URL(chemin, site.url).href;
const idActivite = adresse('/#activite');
const nomElsa = [site.teacher.firstName, site.teacher.lastName].filter(Boolean).join(' ');

/** L'activité d'Elsa : nom, zone desservie, réseaux. Sans adresse personnelle. */
export function donneesActivite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': idActivite,
    name: site.name,
    description: site.tagline,
    url: adresse('/'),
    areaServed: site.areaServed,
    founder: { '@type': 'Person', name: nomElsa, jobTitle: 'Professeure de Pilates' },
    ...(site.contact.instagram ? { sameAs: [`https://www.instagram.com/${site.contact.instagram}/`] } : {}),
  };
}

/** Une offre de cours. */
export function donneesOffre(offre: CollectionEntry<'offres'>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: offre.data.titre,
    description: offre.data.description,
    serviceType: 'Cours de Pilates',
    url: adresse(`/${offre.id}/`),
    areaServed: site.areaServed,
    provider: { '@id': idActivite },
  };
}

/** Une liste de questions et réponses. */
export function donneesQuestions(questions: CollectionEntry<'faq'>[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.data.question,
      acceptedAnswer: { '@type': 'Answer', text: item.data.reponse },
    })),
  };
}

/** Un article. */
export function donneesArticle(article: CollectionEntry<'articles'>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.data.titre,
    description: article.data.description,
    datePublished: article.data.date.toISOString(),
    dateModified: (article.data.miseAJour ?? article.data.date).toISOString(),
    inLanguage: 'fr',
    url: adresse(`/articles/${article.id}/`),
    author: { '@type': 'Person', name: nomElsa },
    publisher: { '@id': idActivite },
  };
}
