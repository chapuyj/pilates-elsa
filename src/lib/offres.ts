import { getCollection } from 'astro:content';

/**
 * Les offres à afficher, dans l'ordre du champ « ordre ».
 * Les brouillons ne sont visibles que pendant le développement (`npm run dev`).
 */
export async function offresPubliees() {
  const offres = await getCollection('offres', ({ data }) => import.meta.env.DEV || !data.brouillon);
  return offres.sort((a, b) => a.data.ordre - b.data.ordre);
}
