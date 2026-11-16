import { navigation, articlesHref } from '../config/navigation';
import { articlesPublies } from './articles';

/** Les liens du menu, sans « Articles » tant qu'aucun article n'est publié. */
export async function liensDuMenu() {
  const avecArticles = (await articlesPublies()).length > 0;
  return navigation.filter((item) => avecArticles || item.href !== articlesHref);
}
