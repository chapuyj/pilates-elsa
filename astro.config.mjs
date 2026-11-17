// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';
import { oublisAvantMiseEnLigne } from './src/config/verifications.ts';

/** @param {string[]} lignes */
const liste = (lignes) => lignes.map((ligne) => `  - ${ligne}`).join('\n');

/** Empêche de publier un site ouvert au public avec des informations obligatoires manquantes. */
const gardeFou = {
  name: 'verifications-avant-mise-en-ligne',
  hooks: {
    'astro:build:start': () => {
      const { bloquants, rappels } = oublisAvantMiseEnLigne();
      if (bloquants.length > 0 && site.indexable) {
        throw new Error(`Le site est marqué « indexable » mais il manque dans src/config/site.ts :\n${liste(bloquants)}`);
      }
      if (bloquants.length > 0) {
        console.warn(`\nÀ compléter dans src/config/site.ts avant la mise en ligne :\n${liste(bloquants)}\n`);
      }
      if (rappels.length > 0) console.warn(`\nRappel :\n${liste(rappels)}\n`);
    },
  },
};

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  integrations: [sitemap(), gardeFou],
});
