---
name: Elsa Pilates
description: Le site d'une professeure de Pilates du Val-de-Marne, dans le registre clair, lin et bois du secteur.
colors:
  paper: "#ffffff"
  linen: "#f6f2ec"
  stone: "#e4dcd1"
  ink: "#26211c"
  ink-hover: "#3d342c"
  ink-soft: "#675d54"
  wood: "#a98463"
  on-ink: "#ffffff"
  on-ink-soft: "#d9cfc4"
  selection: "#e3cfb8"
  error: "#a3321f"
typography:
  display:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.75rem, 6.2vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline-page:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  subhead:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
  small:
    fontFamily: "'Figtree Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "14px"
  media: "18px"
  pill: "999px"
spacing:
  gutter: "clamp(0.5rem, 1.2vw, 1rem)"
  pad: "clamp(1.25rem, 3vw, 2.75rem)"
  section: "clamp(4.5rem, 9vw, 8.5rem)"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
  button-ink-hover:
    backgroundColor: "{colors.ink-hover}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
  button-paper-hover:
    backgroundColor: "{colors.linen}"
  button-line:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
  nav-bar:
    backgroundColor: "{colors.linen}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.5rem 0.5rem 1.5rem"
    height: "3.75rem"
  panel:
    backgroundColor: "{colors.linen}"
    rounded: "{rounded.media}"
  closing-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.media}"
  offer-tile-photo:
    backgroundColor: "{colors.linen}"
    rounded: "{rounded.media}"
  offer-badge:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    size: "2.75rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "0.9rem 1rem"
---

# Design System: Elsa Pilates

## Overview

**Creative North Star: "Le studio clair"**

Le site de Pilates que le visiteur attend, exécuté avec soin. C'est un choix délibéré de l'utilisatrice, pas un défaut : le standard du secteur (grandes photos, fond clair, lin et bois, sans-serif sobre, beaucoup d'air), joué sans détour, avec la maquette Lefore comme niveau de finition. La photographie et l'espace portent la page ; le texte dit peu et juste. Le système refuse l'accumulation des sites voisins : pas de blocs répétés, pas de tarifs semés partout, pas d'ornement qui ne serve pas la lecture.

La densité est faible et le rythme lent : de larges sections blanches, interrompues par des blocs arrondis posés en retrait d'une fine marge (lin pour les listes et le pied de page, encre pour l'appel final). Une seule famille de caractères, des titres en graisse normale, grands et serrés. Une seule langue d'action : la pilule, avec une flèche dessinée à la main. Le bois n'apparaît qu'en touche rare.

Les photographies actuelles sont toutes provisoires, en attente des photos d'Elsa. La direction photographique, elle, est durable : lumière naturelle, studios et intérieurs aux tons crème, lin et bois clair, Reformer et tapis, corps en mouvement cadrés avec calme. Aucune image générée par IA, et aucun visage présenté comme celui d'Elsa tant que ce n'est pas elle.

**Key Characteristics:**
- Fond blanc neutre, panneaux lin, encre brun-noir, bois en accent rare.
- Figtree seule ; titres en 400, grands, interlignage serré, approche négative.
- Photos et blocs aux coins arrondis (18px), posés en retrait de la marge `gutter`.
- Boutons pilules (sombres, blancs ou filet) toujours accompagnés d'une flèche SVG.
- Filets fins couleur pierre pour séparer les lignes ; aucune ombre portée.
- Un seul mouvement signé : la photo d'ouverture qui se pose.

## Colors

Une palette neutre et chaude, presque entièrement faite de blanc, de lin et d'encre, où la seule couleur au sens propre est un bois clair utilisé avec parcimonie.

### Primary
- **Encre brun-noir** (ink): le texte, les titres, les boutons principaux, l'appel final et l'anneau de focus. C'est la couleur d'action du site ; elle n'est jamais remplacée par une teinte vive.
- **Encre survolée** (ink-hover): l'état survolé du bouton encre, un cran plus clair.

### Secondary
- **Bois clair** (wood): accent rare. Puces des listes en texte courant, soulignement des liens dans la prose, survol des champs de formulaire. Jamais en aplat, jamais sur un bouton.

### Neutral
- **Blanc papier** (paper): le fond de page, et le bouton blanc posé sur photo ou sur encre.
- **Lin** (linen): les blocs arrondis (studios, pied de page, offre mise en avant, menu mobile, barre de navigation hors photo), le fond des vignettes en chargement, le survol du bouton blanc.
- **Pierre** (stone): les filets entre les lignes, la bordure des boutons filet et des champs, la barre de défilement, le grand nom du pied de page.
- **Encre douce** (ink-soft): le texte secondaire (`muted`), les intitulés de colonnes du pied de page, la phrase de lieux sur mobile.
- **Sur encre** (on-ink) et **sur encre doux** (on-ink-soft): le texte sur le bloc encre et sur la photo d'ouverture.
- **Sélection** (selection): le fond du texte sélectionné, un lin plus profond.

### Functional
- **Rouge brique** (error): uniquement pour les erreurs de formulaire (bordure du champ et message).

### Named Rules
**The Rare Wood Rule.** Le bois ne marque que des détails de lecture (puces, soulignements, survol d'un champ). S'il remplit une surface ou un bouton, c'est une erreur.

**The Two Grounds Rule.** Une surface est blanche, lin ou encre. Il n'y a pas de quatrième fond, pas de dégradé décoratif, pas de teinte de marque inventée.

## Typography

**Display Font:** Figtree Variable (avec ui-sans-serif, system-ui)
**Body Font:** Figtree Variable (même famille)

**Character:** Une sans-serif géométrique douce, auto-hébergée, utilisée seule. La hiérarchie vient de la taille et de l'interlignage, pas du changement de famille ni de la graisse : les grands titres restent en 400, ce qui leur donne une présence calme plutôt qu'autoritaire.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 6.2vw, 5.25rem)`, 1): le titre de la photo d'ouverture et celui de l'appel final. Largeur limitée à 14 à 16ch.
- **Headline page** (400, `clamp(2.5rem, 5.4vw, 4.5rem)`, 1.02): le titre en tête des pages intérieures, 18ch au plus.
- **Headline** (400, `clamp(2rem, 3.8vw, 3.25rem)`, 1.06): les titres de section, et le titre de l'offre mise en avant.
- **Statement** (400, `clamp(1.75rem, 3.4vw, 3rem)`, 1.12): la phrase d'intention centrée sous la photo d'ouverture, 24ch au plus.
- **Subhead** (400, `clamp(1.625rem, 2.6vw, 2.125rem)`, 1.12): les titres de groupe (tarifs, thèmes de la FAQ), les intertitres de la prose et des articles, l'encart des tarifs, les noms de studios et les titres d'articles dans la liste.
- **Title** (500, `clamp(1.25rem, 1.6vw, 1.5rem)`, 1.2): titres de vignettes, de lignes et de questions. Les questions de la FAQ redescendent en 400.
- **Lead** (400, `clamp(1.125rem, 1.3vw, 1.25rem)`, 1.55): les phrases d'introduction, souvent en encre douce.
- **Body** (400, 1.0625rem, 1.6): le texte courant, 68ch au plus dans la prose.
- **Label** (500, 1rem, 1): les boutons et liens fléchés.
- **Small** (400, 0.9375rem): mentions, intitulés du pied de page, précisions de tarifs.

Tous les titres h1 à h3 prennent `text-wrap: balance` ; les paragraphes `text-wrap: pretty`. Les prix utilisent les chiffres tabulaires.

### Named Rules
**The Quiet Weight Rule.** Les grands titres restent en 400. La graisse 500 est réservée aux petits titres et aux actions, 600 au nom du site et au gras de la prose.

**The No Kicker Rule.** Aucun surtitre, aucune étiquette en capitales au-dessus d'un titre. Un titre se suffit ; s'il faut une précision, elle vient dessous, en lead.

## Layout

Un conteneur centré de 96rem au plus, avec un retrait latéral fluide (`pad`). Les sections respirent avec un espacement vertical fluide (`section`, de 4,5 à 8,5rem). Les blocs pleins (photo d'ouverture, panneau lin, appel encre, pied de page) ne touchent jamais le bord de l'écran : ils sont posés en retrait d'une fine marge (`gutter`, 8 à 16px), ce qui fait lire la page comme une suite d'objets arrondis sur fond blanc.

Motifs récurrents :
- **En-tête de section** : titre à gauche, phrase d'introduction à droite alignée en bas (grille 1.1fr / 0.9fr), empilés sous 56rem.
- **Deux colonnes asymétriques** : photo et texte en 5fr / 6fr, titre et liste en 5fr / 7fr (différence, FAQ, tarifs), empilées sous 56rem.
- **Grille de vignettes** : autant de colonnes que d'offres (quatre au plus), deux sous 70rem, une seule sous 38rem.
- **Lignes séparées par un filet** : studios, tarifs, raisons de choisir Elsa.

Points de rupture observés : 70rem (grille de vignettes), 56rem (empilement des grilles, navigation repliée en bouton Menu), 38rem (téléphones : photo d'ouverture verticale séparée, vignettes en une colonne au format 3:2).

**Photo d'ouverture.** Sur écran large, une grande photo arrondie sur toute la largeur, navigation posée dessus, titre blanc en bas à gauche avec un voile sombre limité à ce coin (dégradé radial), le reste de l'image gardant sa lumière. Sous 38rem, une photo verticale distincte, sans voile ; le titre, la phrase de lieux et les actions passent dessous, en encre sur fond blanc.

## Elevation & Depth

Le système est plat. La profondeur vient du changement de fond (blanc, lin, encre), des coins arrondis et des filets pierre, jamais d'une ombre portée. Deux exceptions fonctionnelles, liées à la photo : la barre de navigation posée sur la photo d'ouverture est translucide et floutée pour rester lisible quelle que soit l'image, et le titre blanc de cette photo porte une ombre de texte très diffuse. Le fond du menu mobile assombrit la page d'un voile encre.

### Named Rules
**The Flat Ground Rule.** Aucune `box-shadow` sur une carte, un bouton ou un bloc. Une surface se distingue par sa couleur de fond, pas par son élévation.

## Shapes

Trois rayons seulement. Les photos et les grands blocs prennent un arrondi généreux (18px), les champs et les messages d'état un arrondi plus discret (14px), et toutes les actions (boutons, barre de navigation) sont des pilules complètes. Les pastilles fléchées des vignettes sont des cercles. Les filets sont d'un pixel, couleur pierre. Les flèches sont un dessin SVG propre au site (trait de 1,5, extrémités arrondies) : horizontale pour avancer dans le site, en diagonale pour un lien qui le quitte (planning d'un studio, par exemple). Le signe plus de la FAQ est construit de deux traits et devient moins à l'ouverture.

Le grand nom du pied de page est ajusté par script à la largeur intérieure exacte, puis coupé par le bas du bloc à profondeur fixe, comme une signature.

## Components

### Buttons
Calmes et nets : une pilule, un libellé court, une flèche qui glisse de 3px au survol.
- **Shape:** pilule complète (rayon `pill`), padding 0.9rem 1.45rem, libellé en 500.
- **Encre:** fond encre, texte blanc ; le bouton principal sur fond clair.
- **Blanc:** fond blanc, texte encre ; posé sur une photo ou sur le bloc encre. Sous 38rem, sur la photo d'ouverture, il redevient encre puisque le texte passe sur fond blanc.
- **Filet:** fond transparent, bordure pierre qui passe à l'encre au survol ; actions secondaires comme Fermer.
- **Hover / Focus:** transitions de couleur en 0,25s sur la courbe `ease-out` ; anneau de focus encre de 2px décalé de 3px (blanc sur fond sombre).

### Lien fléché
L'action secondaire, toujours à côté d'une pilule ou en fin de bloc : texte en 500 souligné d'un trait d'un pixel, flèche qui glisse au survol.

### Cards / Containers
- **Vignette d'offre:** photo 4:5 arrondie (18px) sur fond lin, zoom lent à 1.04 au survol, pastille blanche circulaire avec flèche en bas à droite ; titre et résumé dessous, hors de la photo.
- **Offre mise en avant:** bloc lin arrondi, photo à gauche (1.4fr), titre en Headline, lead et lien fléché à droite.
- **Panneau lin:** bloc arrondi (18px) posé en retrait de la marge, pour la liste des studios.
- **Appel final:** bloc encre arrondi, centré, titre en Display, pilule blanche.
- **Shadow Strategy:** aucune (voir Elevation & Depth).

### Lignes
Listes à filets pierre, un pixel en haut de chaque ligne et en bas de la dernière. Studios : nom en grand (400), ville et lien fléché sortant. Tarifs : libellé à gauche, prix en chiffres tabulaires à droite ; un prix non fixé s'affiche « Sur demande », jamais un montant inventé.

### Inputs / Fields
- **Style:** fond blanc, bordure pierre d'un pixel, arrondi 14px, padding 0.9rem 1rem ; libellé au-dessus en 500.
- **Hover:** la bordure passe au bois.
- **Focus:** contour encre de 2px et bordure encre.
- **Error / Disabled:** bordure et message en rouge brique ; bouton désactivé à 45 % d'opacité. Les messages d'état sont des blocs arrondis lin (ou rose pâle pour l'erreur).

### Navigation
Une barre pilule lin : nom du site à gauche (600), liens au centre soulignés par un trait qui se déroule au survol, bouton Contact encre à droite. Sur la photo d'ouverture, la barre devient blanche translucide et floutée. Sous 56rem, les liens et Contact laissent place à un bouton Menu qui ouvre une feuille lin plein écran (popover, sans JavaScript), liens en grand et pilule « Écrire à Elsa » en bas.

### FAQ
Questions en `details` natifs séparées par des filets pierre, titre en 400, signe plus dessiné qui pivote en moins à l'ouverture, réponse en encre douce.

### Pied de page
Bloc lin arrondi en retrait de la marge : présentation et pilule encre, puis colonnes Cours, Le site, Studios, une ligne légale sous un filet, et le nom du site en très grand couleur pierre, ajusté à la largeur et coupé par le bas.

### Mouvement
Un seul mouvement signé : à l'ouverture de l'accueil, la photo se pose, d'une échelle de 1.045 à 1 en 1,6s sur la courbe `ease-out`, avec un remplissage en arrière pour éviter tout saut. Il est désactivé quand le visiteur préfère réduire les animations ; tous les autres effets se limitent à des survols courts.

## Do's and Don'ts

### Do:
- **Do** poser les grands blocs (photo, panneau, appel, pied de page) en retrait de la marge `gutter`, avec l'arrondi `media` (18px).
- **Do** accompagner chaque pilule et chaque lien d'action de la flèche SVG du site ; la flèche diagonale pour un lien qui quitte le site.
- **Do** garder les grands titres en 400, serrés (-0.03em), sans surtitre.
- **Do** séparer les éléments d'une liste par des filets pierre d'un pixel plutôt que par des cartes.
- **Do** afficher « Sur demande » ou omettre une information manquante plutôt que l'inventer.
- **Do** choisir des photos lumineuses, aux tons crème, lin et bois, en lumière naturelle ; les photos d'Elsa remplaceront les provisoires.
- **Do** garder tout mouvement nouveau sous la garde `prefers-reduced-motion`.

### Don't:
- **Don't** placer de surtitre, d'étiquette ou de kicker au-dessus d'un titre.
- **Don't** utiliser le bois en aplat, sur un bouton ou comme couleur de fond.
- **Don't** ajouter d'ombre portée aux cartes, boutons ou blocs.
- **Don't** introduire une seconde famille de caractères ou des icônes en police ; les pictogrammes sont des SVG dessinés.
- **Don't** présenter un visage comme celui d'Elsa tant que la photo n'est pas d'elle, ni utiliser d'image générée par IA.
- **Don't** répéter les tarifs ou les blocs de contenu sur chaque page ; une information n'existe qu'à un seul endroit.
- **Don't** laisser en production les repères de développement (surlignage jaune « à compléter », note « photo provisoire ») : ce ne sont pas des éléments du système.
