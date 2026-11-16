import { getCollection } from 'astro:content';

/**
 * Les articles à afficher, du plus récent au plus ancien.
 * Les brouillons ne sont visibles que pendant le développement (`mise run dev`).
 */
export async function articlesPublies() {
  const articles = await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.brouillon);
  return articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Affiche une date en toutes lettres : « 16 novembre 2026 ». */
export function afficherDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}
