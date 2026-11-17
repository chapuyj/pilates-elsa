# Site web autour de l'activité Pilates de Elsa

Créer un site web pour Elsa, pour une activité pro d'enseignement de Pilates.

Pourquoi ?
- Pour qu'on puisse la trouver depuis internet / une recherche google,
- Pour qu'elle puisse mettre en avant sa pratique,
- Pour qu'elle puisse facilement communiquer ce qu'elle fait, ses cours, ses tarifs, se démarquer des autres, etc.
- Pour l'aider à remplir les créneaux où elle travaille, ou ses cours en visio, domicile, collectif, etc.
- Plus tard, éventuellement pour pouvoir réserver des cours, payer.

## Contexte de Elsa

### Formations

Elsa a longtemps pratiqué dans les studios [Reformation](https://reformation-pilates.com) à Paris.
Puis un jour elle a eu envie d'enseigner également, et elle a donc suivi la formation de ce studio : [Revolt](https://www.revolt-pilates.com). C'est une formation longue, très complète, exigente, sur la pratique, sur l'ebseignement, sur l'anatomie, etc. À l'opposé des formations rapides qui ne fotn que survoler un répertoire d'exercice.
Elle a suivi la formation Mat et la formation Machines sur une année.
(lister les machines)

Note : sans en faire trop, on peut mettre en valeur / appuyer le fait que c'est une très bonne formation, compmlète, etc. Rechercher les bonnes informations. Aussi on peut réutiliser certaines informations du studio et de la formation pour alimenter le site d'Elsa.

### Enseignement

Elsa enseigne dans les studios :
- [LM Studio](https://www.lmstudio.fit) à Joinville-le-Pont,
- [Reform'You](https://reformyou.fr) à Saint-Maur,
- En visio,
- A son domicile,
- A votre domicile ou en entreprise.

## Périmètre du site

IMPORTANT : à challenger s'il y a d'autres choses, ce n'est pas une liste précise. Ce n'est pas à suivre à la lettre non plus. C'est juste un premier brouillon d'idées.

On veut une première version simple et efficace :
- Savoir qui est Elsa,
- Pourquoi elle,
- Comment la contacter,
- Ce qu'elle propose,
- En savoir plus sur le pilates (une FAQ, et une section articles pour pouvoir écrire des choses plus longues)
- Un excellent SEO, référencement, etc pour qu'on puisse la trouver
- Un site beau ET efficace. Pas besoin d'aller dans le "wahou" inutile.

On veut que ça puisse être facilement maintenable (changer des textes, ajouter/modifier une photo)

Pour le moment, on ne veut pas :
- De réservation en ligne,
- D'achat en ligne.

On ne génère aucune photo avec de l'IA. Mettre plutôt des placeholder qu'on peut trouver sur internet, idéalement libre. Dans un second temps, on pourra les remplacer par de vrais photos prises par Elsa.

## Inspirations pour le site

### https://www.jenny-pilates.fr

Ce qui est intéressant :
- Il y a une FAQ,
- Le site contient beaucoup d'informations,
- On voit les prix et offres,
- On voit les différents cours,

Ce qui est améliorable :
- Peut-être trop de pages / on se disperse vite partout, une meilleure organisation à trouver ?

### Dribble - "Lefore"

Un design que Elsa a apprécié (même s'il est trop orienté pour un studio) :
- https://dribbble.com/shots/27371290-Lefore-Elegant-Fitness-Gym-Pilates-Equipment-Ecommerce-Website
- https://cdn.dribbble.com/userupload/47711222/file/139957b3874efb04529033728891c797.jpeg?resize=640x2894&vertical=center
## Faire vivre le site

### Lancer le site sur son ordinateur

```bash
mise run dev
```

Le site s'ouvre sur `http://localhost:4321`. Les brouillons y sont visibles, signalés en jaune. Pour voir le site exactement tel qu'il sera publié : `mise run build`, puis `mise run preview`.

### Où modifier quoi

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
| Les couleurs, la typographie, les espacements | `src/styles/global.css` |

Les textes de la page d'accueil (titre, phrase d'intention, « Ce qui fait la différence ») sont dans `src/pages/index.astro`.

### Gestes courants

- **Fixer un prix** : dans `src/data/tarifs.yaml`, écrire le montant après `prix:` (par exemple `prix: 80`). Tant que la ligne est vide, le site affiche « Sur demande ».
- **Publier une offre ou un article en brouillon** : passer `brouillon: true` à `brouillon: false` en haut du fichier.
- **Mettre une offre en avant** sur l'accueil : `enAvant: true` dans son fichier (une seule à la fois).
- **Ajouter un article** : copier un fichier de `src/content/articles/`, changer son nom (il devient l'adresse de l'article), son titre, sa date et son texte.
- **Remplacer une photo** : déposer la nouvelle image dans `src/assets/photos/`, puis indiquer son nom après `photo:` dans le fichier de l'offre. Mettre à jour `photoAlt` (ce que montre la photo) et `src/assets/photos/CREDITS.md`. Quand toutes les photos provisoires sont remplacées, passer `photosProvisoires` à `false` dans `src/config/site.ts`.
- **Recadrer une photo d'offre** : si le sujet est coupé dans les vignettes, régler `photoCadrage` dans le fichier de l'offre (par exemple `photoCadrage: 50% 80%` pour garder plutôt le bas de l'image).
- **Photo d'accueil** : deux versions, `accueil-reformer.jpg` (ordinateur, format horizontal) et `accueil-reformer-mobile.jpg` (téléphone, format vertical). Les remplacer toutes les deux.
- **Ajouter un avis** : suivre l'exemple en haut de `src/data/temoignages.yaml`. Uniquement de vrais avis, avec l'accord de la personne.

Le site s'occupe seul du redimensionnement des photos, du plan du site, du flux RSS et des données lues par Google.

### Avant la mise en ligne

`mise run build` liste ce qu'il reste à renseigner dans `src/config/site.ts`. Quand tout y est :

1. Renseigner l'adresse définitive (`url`), les moyens de contact et le bloc `legal`.
2. Brancher le formulaire de contact (`formEndpoint`).
3. Faire relire par Elsa les pages « À propos », « Mentions légales » et « Confidentialité ».
4. Passer `indexable` à `true` : le site devient visible par les moteurs de recherche. À partir de là, la construction échoue si une information obligatoire manque.

Les décisions de fond sont dans `PRODUCT.md`, les questions à poser à Elsa dans `docs/questions-elsa.md`.
