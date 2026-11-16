import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { articlesPublies } from '../lib/articles';

// Le flux RSS des articles, pour les lecteurs de flux.
export const GET: APIRoute = async (context) => {
  const articles = await articlesPublies();
  return rss({
    title: `${site.name} : les articles`,
    description: 'Comprendre le Pilates : la méthode, la respiration, le tapis et les machines.',
    site: context.site ?? site.url,
    items: articles.map((article) => ({
      title: article.data.titre,
      description: article.data.description,
      pubDate: article.data.date,
      link: `/articles/${article.id}/`,
    })),
    customData: '<language>fr-fr</language>',
  });
};
