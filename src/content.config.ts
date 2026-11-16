import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

/**
 * Lit une liste YAML en retenant la position de chaque élément,
 * pour que le site les affiche dans l'ordre du fichier.
 */
const listeOrdonnee = (texte: string) =>
  ((parse(texte) as Record<string, unknown>[] | null) ?? []).map((element, position) => ({ ...element, position }));

/** Les offres de cours : une page par fichier dans src/content/offres/. */
const offres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/offres' }),
  schema: ({ image }) => z.object({
    /** Titre principal de la page (H1) : l'offre et, si possible, le lieu. */
    titre: z.string(),
    /** Nom court, pour le menu et les cartes. */
    titreCourt: z.string(),
    /** Position dans le menu et sur l'accueil. */
    ordre: z.number(),
    /** Une ou deux phrases, reprises sur l'accueil. */
    resume: z.string(),
    /** Description pour Google (150 caractères environ). */
    description: z.string(),
    /** Comment on passe à l'action : écrire à Elsa, ou réserver auprès des studios. */
    action: z.enum(['contact', 'studios']).default('contact'),
    /** Photo de l'offre : chemin vers un fichier de src/assets/photos/. */
    photo: image(),
    /** Ce que montre la photo, pour les personnes qui ne la voient pas. */
    photoAlt: z.string(),
    /** Offre mise en avant : affichée en grand, avant les autres. Une seule à la fois. */
    enAvant: z.boolean().default(false),
    /** Un brouillon n'est pas publié (visible seulement pendant le développement). */
    brouillon: z.boolean().default(false),
  }),
});

/** Les articles : un fichier par article dans src/content/articles/. */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Date de dernière modification, si l'article a été revu. */
    miseAJour: z.coerce.date().optional(),
    /** Un brouillon n'est pas publié. */
    brouillon: z.boolean().default(false),
  }),
});

/** La FAQ : toutes les questions dans src/data/faq.yaml. */
const faq = defineCollection({
  loader: file('src/data/faq.yaml', { parser: listeOrdonnee }),
  schema: z.object({
    position: z.number(),
    theme: z.string(),
    question: z.string(),
    reponse: z.string(),
  }),
});

/** Les tarifs : source unique des prix, dans src/data/tarifs.yaml. */
const tarifs = defineCollection({
  loader: file('src/data/tarifs.yaml', { parser: listeOrdonnee }),
  schema: z.object({
    position: z.number(),
    /** Identifiant du fichier de l'offre concernée (sans .md). */
    offre: z.string(),
    libelle: z.string(),
    /** Prix en euros. Laisser vide tant qu'il n'est pas fixé : le site affiche « Sur demande ». */
    prix: z.number().nullable().default(null),
    /** Précision affichée à côté du prix : « la séance », « par personne »… */
    unite: z.string().optional(),
    note: z.string().optional(),
  }),
});

/** Les studios où Elsa enseigne, dans src/data/lieux.yaml. */
const lieux = defineCollection({
  loader: file('src/data/lieux.yaml', { parser: listeOrdonnee }),
  schema: z.object({
    position: z.number(),
    nom: z.string(),
    adresse: z.string(),
    codePostal: z.string(),
    ville: z.string(),
    site: z.url(),
    /** Page où l'on réserve un cours dans ce studio. */
    planning: z.url(),
    presentation: z.string(),
  }),
});

/** Les avis d'élèves, dans src/data/temoignages.yaml. Uniquement de vrais avis. */
const temoignages = defineCollection({
  loader: file('src/data/temoignages.yaml', { parser: listeOrdonnee }),
  schema: z.object({
    position: z.number(),
    prenom: z.string(),
    texte: z.string(),
    /** Contexte facultatif : « cours particuliers », « Reformer »… */
    contexte: z.string().optional(),
  }),
});

export const collections = { offres, articles, faq, tarifs, lieux, temoignages };
