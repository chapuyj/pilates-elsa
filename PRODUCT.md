# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, site entièrement statique. Contenus en fichiers Markdown et YAML dans le dépôt, modifiés par Jordan via git (pas de CMS). Hébergement prévu sur Cloudflare avec déploiement à chaque push (Workers plutôt que Pages, voir `TODO.md`). Node 26 épinglé par `mise.toml`. Choix proposé et confirmé par l'utilisateur.

## Users

Des personnes qui cherchent un cours ou une professeure de Pilates dans le Val-de-Marne (Joinville-le-Pont, Saint-Maur-des-Fossés et alentours), à distance en visio, ou pour leur entreprise. Elles arrivent le plus souvent depuis une recherche Google ou un lien Instagram, sur mobile, et veulent savoir rapidement qui est Elsa, ce qu'elle propose, à quel prix et comment la joindre.

Non décidé : le public prioritaire (débutants, pratiquants de Reformer, pré et postnatal, douleurs de dos, seniors). À confirmer par Elsa via `docs/questions-elsa.md`.

## Product Purpose

Le site vitrine de l'activité indépendante d'Elsa, enseignante de Pilates. Il existe pour qu'on la trouve sur Internet, qu'on comprenne sa pratique et ses offres, et qu'on la contacte. Le succès se mesure aux prises de contact et au remplissage de ses créneaux : cours privés (chez elle ou au domicile de l'élève), visio, cours en studio, interventions en entreprise. Toutes les offres comptent, mais le futur cours collectif d'Elsa passera en tête dès qu'il existera : c'est le seul où chaque inscription compte directement pour elle.

## Positioning

- Une formation longue et exigeante : Mat puis Machines chez Revolt, l'école des studios Reformation à Paris, où Elsa a longtemps pratiqué. Plusieurs mois par formation, pratique encadrée, anatomie, pédagogie, examens théorique et pratique. À l'opposé des formations courtes qui survolent un répertoire d'exercices.
- Une vraie attention portée à chaque élève : elle s'adapte à tous les corps, y compris en prénatal et postnatal.
- Un travail en profondeur, qui part de la respiration, base du Pilates.

Ces trois points viennent de Jordan. La formulation d'Elsa elle-même reste à recueillir.

## Operating Context

- Elsa enseigne chez LM Studio (12 rue de Paris, Joinville-le-Pont, Reformer en petit groupe) et chez Reform'You (21 avenue Foch, Saint-Maur-des-Fossés, Reformer en petit groupe). La réservation de ces cours passe par les plannings des studios, pas par le site.
- Dans ces studios, elle est payée à l'heure de cours, quel que soit le nombre d'élèves. C'est aujourd'hui l'essentiel de son activité.
- Elle donne aussi, plus rarement, des cours en visio, à son domicile, au domicile des élèves et en entreprise. Ces demandes passent par un contact direct.
- Projet (information du 16 novembre 2026) : lancer son propre cours collectif en louant un studio à l'heure. Là, son revenu dépend du nombre d'inscrits : c'est l'offre qu'elle a le plus intérêt à remplir et à fidéliser (des habitués). Lieu, jour, horaire, tarif, matériel et nom du cours ne sont pas encore fixés.
- Canaux de contact : formulaire et e-mail, Instagram, WhatsApp à condition de ne pas afficher de numéro de téléphone.
- Inspiration de contenu : jenny-pilates.fr (FAQ, tarifs et offres visibles), dont il faut éviter la dispersion et les répétitions.

## Capabilities and Constraints

- Pages : accueil, une page par offre (cours collectif d'Elsa quand il existera, cours particuliers, visio, studio, entreprise), tarifs, à propos, FAQ, articles, contact, pages légales.
- Pas de réservation en ligne ni de paiement en ligne en V1. Envisageables plus tard.
- Aucune photo générée par IA. Photos provisoires libres de droits, à remplacer par de vraies photos d'Elsa.
- Maintenance simple : changer un texte, un prix ou une photo se fait dans un seul fichier. Chaque information n'existe qu'à un seul endroit.
- Référencement local soigné : c'est un objectif de premier rang, pas une finition.
- Français uniquement.
- Non décidé : nom de l'activité et nom de domaine, tarifs, zone de déplacement, liste des machines maîtrisées, tutoiement ou vouvoiement, service d'envoi d'e-mail du formulaire, statut et diplômes complémentaires d'Elsa. Le suivi de ces points est dans `TODO.md`.

## Brand Commitments

- Aucune identité existante : pas de nom, de logo ni de couleurs. Tout est à créer.
- Un site beau et efficace, sans effet spectaculaire gratuit.
- Direction choisie par l'utilisateur le 16 novembre 2026 : le standard visuel des sites de Pilates, joué sans détour. Grandes photos, fond clair, tons bois et lin, sans-serif sobre, beaucoup d'air. C'est une préférence durable : les futures pages restent dans ce registre.
- Niveau de finition visé : la maquette « Lefore » (Dribbble, site d'équipement Pilates) qu'Elsa a aimée. Elle fixe l'exigence de finition, pas la composition, et reste trop orientée studio pour être copiée.
- Ne pas en faire trop sur la formation : la mettre en valeur par des faits.

## Evidence on Hand

- Faits publics sur Revolt et Reformation (durée, modules, examens, prérequis), à faire valider par Elsa avant publication.
- Elsa figure sur la page équipe de LM Studio comme coach Reformer.
- Absents, à ne pas inventer : témoignages et avis, tarifs, photos d'Elsa, chiffres (nombre d'élèves, années d'enseignement), diplômes autres que Revolt.
- Questionnaire de collecte : `docs/questions-elsa.md`. Faits publics sur sa formation et les studios, avec leurs sources : `docs/recherches.md`.

## Product Principles

1. Trouvable d'abord : chaque page répond à une recherche réelle (une offre, une ville).
2. Une information, un endroit : pas de tarifs ni de textes dupliqués.
3. Des faits plutôt que des superlatifs : la formation, la méthode et l'attention se démontrent.
4. Rien d'inventé : ce qui n'est pas encore fourni par Elsa reste « sur demande » ou absent.
5. Le contact est toujours à un geste, sans imposer d'exposer son numéro.
