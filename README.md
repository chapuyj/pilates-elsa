# Site d'Elsa, professeure de Pilates

Le site vitrine d'Elsa, qui enseigne le Pilates dans le Val-de-Marne (en studio, en cours particuliers, en visio et en entreprise). Il présente ses cours, sa formation et ses tarifs, et permet de la contacter. Pas de réservation ni de paiement en ligne pour l'instant.

Le site est construit avec [Astro](https://astro.build) : des pages statiques, très rapides, dont tous les textes sont dans de simples fichiers à modifier à la main.

## Démarrer

Il faut [mise](https://mise.jdx.dev), qui installe la bonne version de Node (fixée dans `mise.toml`). Ensuite :

```bash
mise run dev
```

Le site s'ouvre sur `http://localhost:4321` et se met à jour à chaque modification de fichier. Les dépendances s'installent toutes seules au premier lancement.

| Commande | À quoi elle sert |
|---|---|
| `mise run dev` (ou `mise run`) | Le site en local, brouillons compris, signalés en jaune |
| `mise run build` | Vérifie les fichiers et construit le site publié dans `dist/`. Liste aussi ce qu'il reste à renseigner avant la mise en ligne |
| `mise run preview` | Affiche le site exactement tel qu'il sera publié (après `mise run build`) |

## Où modifier quoi

Chaque information n'existe qu'à un seul endroit.

| Pour changer… | Fichier |
|---|---|
| Le nom, le domaine, l'e-mail, Instagram, WhatsApp, les mentions légales | `src/config/site.ts` |
| Les liens du menu | `src/config/navigation.ts` |
| Le texte d'une offre, sa photo, son titre | `src/content/offres/` (un fichier par offre) |
| Un prix | `src/data/tarifs.yaml` |
| Une question fréquente | `src/data/faq.yaml` |
| L'adresse ou le planning d'un studio | `src/data/lieux.yaml` |
| Un avis d'élève | `src/data/temoignages.yaml` |
| La page « À propos » | `src/content/pages/a-propos.md` |
| Un article | `src/content/articles/` (un fichier par article) |
| Une photo | `src/assets/photos/` (origine de chaque photo dans `CREDITS.md`) |
| Les couleurs, la typographie, les espacements | `src/styles/global.css` |

Les textes de la page d'accueil (titre, phrase d'intention, « Ce qui fait la différence ») sont dans `src/pages/index.astro`.

Les fichiers `.md` et `.yaml` commencent par quelques lignes entre `---` (titre, photo, brouillon…) puis le texte. Les commentaires en tête de chaque fichier de `src/data/` expliquent comment ajouter une ligne.

## Gestes courants

- **Fixer un prix** : dans `src/data/tarifs.yaml`, écrire le montant après `prix:` (par exemple `prix: 80`). Tant que la ligne est vide, le site affiche « Sur demande ».
- **Publier une offre ou un article en brouillon** : passer `brouillon: true` à `brouillon: false` en haut du fichier. Un brouillon n'apparaît qu'avec `mise run dev`.
- **Mettre une offre en avant** sur l'accueil : `enAvant: true` dans son fichier (une seule à la fois).
- **Ajouter un article** : copier un fichier de `src/content/articles/`, changer son nom (il devient l'adresse de l'article), son titre, sa date et son texte.
- **Remplacer une photo** : déposer la nouvelle image dans `src/assets/photos/`, puis indiquer son nom après `photo:` dans le fichier de l'offre. Mettre à jour `photoAlt` (ce que montre la photo) et `src/assets/photos/CREDITS.md`. Quand toutes les photos provisoires sont remplacées, passer `photosProvisoires` à `false` dans `src/config/site.ts`.
- **Recadrer une photo d'offre** : si le sujet est coupé dans les vignettes, régler `photoCadrage` dans le fichier de l'offre (par exemple `photoCadrage: 50% 80%` pour garder plutôt le bas de l'image).
- **Photo d'accueil** : deux versions, `accueil-reformer.jpg` (ordinateur, format horizontal) et `accueil-reformer-mobile.jpg` (téléphone, format vertical). Les remplacer toutes les deux.
- **Ajouter un avis** : suivre l'exemple en haut de `src/data/temoignages.yaml`. Uniquement de vrais avis, avec l'accord de la personne. La section n'apparaît que s'il y a au moins un avis.

Le site s'occupe seul du redimensionnement des photos, du plan du site, du flux RSS et des données lues par Google.

## Mettre en ligne

`mise run build` liste ce qu'il reste à renseigner dans `src/config/site.ts`. Quand tout y est :

1. Renseigner l'adresse définitive (`url`), les moyens de contact et le bloc `legal`.
2. Brancher le formulaire de contact (`formEndpoint`).
3. Faire relire par Elsa les pages « À propos », « Mentions légales » et « Confidentialité ».
4. Passer `indexable` à `true` : le site devient visible par les moteurs de recherche. À partir de là, la construction échoue si une information obligatoire manque.

Le détail des étapes (domaine, hébergement, référencement) est dans `TODO.md`.

## Les autres fichiers du projet

| Fichier | Contenu |
|---|---|
| `TODO.md` | Tout ce qui reste à faire, par priorité |
| `docs/questions-elsa.md` | Le questionnaire pour Elsa, où noter ses réponses |
| `PRODUCT.md` | Le projet : public visé, positionnement, principes, ce qui n'est pas encore décidé |
| `DESIGN.md` | Le système visuel : couleurs, typographie, composants, règles |
| `docs/brief-initial.md` | Le cahier des charges de départ, conservé tel quel |
| `docs/recherches.md` | Ce qu'on a appris en préparant le site (formation, studios, concurrence), avec les sources |
| `CLAUDE.md` | Les consignes pour travailler sur le projet avec Claude |
