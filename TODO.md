# Reste à faire

État au 17 novembre 2026 : la V1 du site est construite (13 pages) et validée par la revue de finition. Il manque surtout des informations qu'Elsa seule peut donner, puis la mise en ligne.

Pour chaque point, le fichier où agir est indiqué. Cocher `[x]` quand c'est fait.

## 1. En attente d'Elsa

Le questionnaire complet est dans [`docs/questions-elsa.md`](docs/questions-elsa.md). Ses réponses se notent directement sous chaque question. Les réponses qui débloquent le plus de choses :

- [ ] **Nom de l'activité** (question 29) : débloque le domaine, le nom affiché partout. → `src/config/site.ts` (`name`)
- [ ] **Tarifs et conditions** (questions 21 et 22) : tant qu'ils manquent, le site affiche « Sur demande ». → `src/data/tarifs.yaml`
- [ ] **Moyens de contact** : e-mail, Instagram, WhatsApp (questions 23 à 25). → `src/config/site.ts` (`contact`)
- [ ] **Statut, SIRET, adresse professionnelle** (question 27) : obligatoires pour les mentions légales. → `src/config/site.ts` (`legal`)
- [ ] **Tutoiement ou vouvoiement** (question 31) : le site vouvoie pour l'instant.
- [ ] **Public visé** (questions 12 et 13) : à reporter dans `PRODUCT.md`, puis dans les textes des offres.
- [ ] **Zone de déplacement à domicile et en entreprise** (questions 16 et 19) : communes à citer pour le référencement local. → `src/config/site.ts` (`areaServed`) et `src/content/offres/`
- [ ] **Machines maîtrisées et dates de formation** (questions 7 et 8) : à vérifier dans `src/content/pages/a-propos.md` et sur l'accueil (« Ce qui fait la différence », dans `src/pages/index.astro`).
- [ ] **Diplômes complémentaires** (question 11) : déterminent ce qu'on peut écrire sur la page « À propos ».

## 2. Contenus

- [ ] **Le cours collectif d'Elsa** : lieu, jour, horaire, tarif, nom (section 4 bis du questionnaire). Compléter `src/content/offres/cours-collectif.md` et ses lignes dans `src/data/tarifs.yaml`, puis passer `brouillon: false`. Il est déjà mis en avant sur l'accueil (`enAvant: true`).
- [ ] **Vraies photos d'Elsa** pour remplacer les photos provisoires (liste dans `src/assets/photos/CREDITS.md`), puis passer `photosProvisoires` à `false` dans `src/config/site.ts`. Prévoir une version horizontale et une version verticale de la photo d'accueil.
- [ ] **Relecture par Elsa** de tous les textes : accueil, offres, « À propos », questions fréquentes. Les faits sur la formation Revolt viennent de recherches publiques à confirmer (voir `docs/recherches.md`).
- [ ] **Premier article** : relire et publier `src/content/articles/pilates-tapis-ou-machines.md` (actuellement en brouillon). Le lien « Articles » n'apparaît dans le menu qu'à partir d'un article publié.
- [ ] **Avis d'élèves**, avec leur accord. → `src/data/temoignages.yaml`

## 3. Mise en ligne

- [ ] **Acheter le domaine** une fois le nom choisi (pistes et disponibilités dans `docs/recherches.md`), puis le renseigner dans `src/config/site.ts` (`url`).
- [ ] **Héberger sur Cloudflare.** La documentation Astro indique que Cloudflare recommande désormais Workers (fichiers statiques) plutôt que Pages pour un nouveau projet. Commande de construction `mise run build`, dossier publié `dist/`. Ajouter un `wrangler.jsonc` avec `"not_found_handling": "404-page"` pour servir la page introuvable.
- [ ] **Brancher le formulaire de contact** : choisir un service d'envoi (fonction Cloudflare ou service de formulaires), renseigner `formEndpoint` dans `src/config/site.ts`, puis tester un envoi réel de bout en bout. Le formulaire n'apparaît sur le site publié qu'une fois branché.
- [ ] **Mesure d'audience sans cookie** : activer Cloudflare Web Analytics. Mettre à jour la page « Confidentialité » si autre chose est choisi.
- [ ] **Relire « Mentions légales » et « Confidentialité »** avec les vraies informations.
- [ ] **Ouvrir le site aux moteurs de recherche** : passer `indexable` à `true` dans `src/config/site.ts`. La construction refuse tant qu'une information obligatoire manque.
- [ ] **Google Business Profile** : créer la fiche d'Elsa (le levier le plus fort pour être trouvée localement).
- [ ] **Google Search Console** : déclarer le site et envoyer le plan du site (`/sitemap-index.xml`).
- [ ] **Liens entrants** : demander à LM Studio d'ajouter un lien vers le site sur la fiche d'Elsa de sa page équipe ; mettre le lien dans la bio Instagram.

## 4. Points techniques ouverts

- [ ] **Fusionner la branche `site-v1` dans `main`** : tout le travail est sur `site-v1`.
- [ ] **Regarder l'animation d'entrée de la photo d'accueil** dans un vrai navigateur : elle n'a jamais pu être observée pendant le développement (le navigateur intégré à Claude ne la fait pas tourner).
- [ ] **Revoir à l'écran les articles et les pages légales** sur ordinateur et mobile : ce sont les seules pages non revues après les dernières corrections.
- [ ] **WhatsApp sans numéro visible** : les identifiants WhatsApp étaient en déploiement progressif en novembre 2026, sans lien direct confirmé. Revérifier, puis renseigner `whatsappUrl` dans `src/config/site.ts`.
- [ ] **Vérifier le site en ligne** : score Lighthouse, données structurées (validateur schema.org), aperçu des partages sur les réseaux sociaux.

## 5. Plus tard

- Réservation et paiement en ligne (exclus de la V1).
- Pages dédiées par commune si le référencement local le demande.
