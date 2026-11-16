import type { APIRoute } from 'astro';
import { site } from '../config/site';

// Tant que le site n'est pas officiellement en ligne (indexable: false), on demande aux moteurs de l'ignorer.
export const GET: APIRoute = () => {
  const regles = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site.url).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(regles, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
