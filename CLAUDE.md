# Consignes pour Claude

Site vitrine d'Elsa, professeure de Pilates dans le Val-de-Marne. Astro 7 statique, contenus en Markdown et YAML modifiés à la main, hébergement prévu sur Cloudflare. Tout le projet est en français : textes du site, documentation, messages de commit.

## Par où commencer

| Fichier | À lire quand… |
|---|---|
| `README.md` | Toujours : commandes, où se trouve chaque contenu, gestes courants |
| `TODO.md` | Avant de choisir quoi faire ; le mettre à jour quand un point avance |
| `PRODUCT.md` | Avant d'écrire un texte ou de prendre une décision de fond (public, positionnement, principes) |
| `DESIGN.md` | Avant toute modification visuelle |
| `docs/questions-elsa.md` | Quand une information sur Elsa manque ; ses réponses y sont notées sous chaque question |
| `docs/recherches.md` | Pour les faits sur sa formation, les studios, la concurrence, les domaines, avec leurs sources |
| `docs/brief-initial.md` | Pour retrouver la demande d'origine |

## Règles du projet

- **Rien d'inventé.** Pas de prix, d'avis, de chiffres, de diplômes ni de citations qu'Elsa n'a pas fournis. Une information manquante s'affiche « Sur demande » ou n'apparaît pas. Les faits issus de `docs/recherches.md` restent à confirmer par Elsa.
- **Aucune image générée par IA.** Les photos sont des photos libres (Unsplash) en attendant les siennes, chacune créditée dans `src/assets/photos/CREDITS.md`, avec son origine inscrite dans le fichier (`impeccable embed-prompt`). Aucun visage ne doit pouvoir être pris pour celui d'Elsa.
- **Chaque information à un seul endroit.** Un prix vit dans `src/data/tarifs.yaml`, un réglage dans `src/config/site.ts`, etc. Ne jamais recopier un contenu dans une autre page : le lire depuis sa source.
- **Les fichiers de contenu sont faits pour être modifiés à la main** par quelqu'un qui ne code pas : garder les commentaires d'explication en français en tête des fichiers YAML et de `src/config/site.ts`.
- **Proposer avant de réorganiser** : pour un changement de structure ou d'organisation, présenter la solution et attendre l'accord avant de modifier.
- Le travail en cours se fait sur une branche (actuellement `site-v1`), jamais directement sur `main`.

## Design : la compétence impeccable

Le projet est piloté avec la compétence `impeccable` (`.claude/skills/impeccable/`).

- `PRODUCT.md` porte la vérité produit, `DESIGN.md` et `.impeccable/design.json` le système visuel tel qu'il a été construit.
- La direction choisie est « Le studio clair » : le standard des sites de Pilates, assumé, avec la maquette Lefore comme niveau de finition. Le choix et le contrat de la page d'accueil sont dans `.impeccable/surfaces/src-pages-index-astro.md`.
- Le détecteur de design tourne après chaque modification d'un fichier d'interface. Les exceptions acceptées, chacune avec sa raison, sont dans `.impeccable/config.json` : ne pas en ajouter sans raison écrite.
- Pour une nouvelle page, rester dans le système existant (`src/styles/global.css` et les composants de `src/components/`). Pas de surtitre au-dessus des titres, pas d'ombre portée, le bois en accent rare : voir les règles de `DESIGN.md`.
- Les repères de développement (surlignage jaune « à compléter », note « photo provisoire ») ne s'affichent qu'avec `mise run dev`.

## Commandes et vérifications

- `mise run dev` : site local sur le port 4321. `mise run build` : vérification des types (`astro check`) puis construction ; liste aussi ce qui manque avant la mise en ligne. `mise run preview` : site publié sur le port 4322.
- Avant de rendre un travail : `mise run build` sans erreur, puis vérifier le rendu à 1440 et 390 px de large.
- `.claude/launch.json` définit deux aperçus pour le navigateur intégré : `site` (développement) et `site-publie` (après `mise run build`).

## Particularités de l'environnement

Constatées avec le bac à sable de Claude Code sur cette machine :

- `node` et `npm` ne sont pas dans le PATH : passer par `mise exec -- npm …` ou par les tâches `mise run`.
- Dans le bac à sable, npm échoue sur son cache habituel : définir `npm_config_cache="$TMPDIR/npm-cache"` et autoriser `registry.npmjs.org`. `npm create astro` ne fonctionne pas ; `npm install` oui.
- `mise run` échoue sur son dossier d'état : définir `MISE_STATE_DIR="$TMPDIR/mise-state"` et `MISE_OFFLINE=1` pour tester les tâches.
- Le bac à sable interdit d'ouvrir un port local : utiliser les aperçus de `.claude/launch.json` plutôt que `mise run dev` dans un terminal.
- Les scripts `impeccable` qui contactent `impeccable.style` (tirage de direction) demandent d'autoriser ce domaine.
- Quand le panneau du navigateur intégré est masqué, les animations CSS n'avancent pas et des images déjà chargées peuvent ne pas apparaître sur les captures. Forcer un nouvel affichage (basculer le `display` de l'image) ou terminer l'animation (`element.getAnimations()[0].finish()`) avant de conclure à un défaut.
