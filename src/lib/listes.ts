/** Trie les éléments d'une liste (FAQ, tarifs, studios) dans l'ordre de leur fichier. */
export function dansLOrdre<T extends { data: { position: number } }>(elements: T[]): T[] {
  return [...elements].sort((a, b) => a.data.position - b.data.position);
}
