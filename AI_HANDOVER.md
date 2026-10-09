# 🤖 AI Handover Document : Projet Card-RPS

Ce document est destiné à la prochaine IA (ou développeur) qui interviendra sur le projet **Card-RPS**. Il résume l'architecture, la stack technique, les choix d'implémentation et la stratégie DevOps mis en place pour la **V1 (MVP)**.

---

## 1. Vue d'ensemble du projet
*   **Concept** : Jeu de Pierre-Papier-Ciseaux sous forme de jeu de cartes (Joueur vs Bot).
*   **Règles V1** : Deck initial de 15 cartes (5 Pierre, 5 Papier, 5 Ciseaux). Chaque joueur a 3 cartes en main. À chaque tour, les joueurs jouent une carte, le gagnant gagne 1 point, et ils piochent une nouvelle carte jusqu'à épuisement du deck.
*   **État actuel** : V1 complétée et fonctionnelle. Le projet est en production sur GitHub Pages.

---

## 2. Stack Technique
*   **Frontend** : React 18 (Hooks) + TypeScript.
*   **Build Tool** : Vite.
*   **Tests** : Vitest (TDD utilisé pour la logique métier pure).
*   **Style** : Vanilla CSS (`src/index.css`), **pas de framework CSS tiers**.
*   **Qualité** : ESLint (règles strictes React + TS).

---

## 3. DevOps & CI/CD
Le projet a été pensé avec une stricte "mentalité DevOps".
*   **Hébergement** : GitHub Pages (`https://123hassif.github.io/card-rps/`).
*   **Pipeline CI/CD** : `.github/workflows/deploy.yml`
    *   S'exécute à chaque push sur la branche `main`.
    *   Vérifie le Linter (`npm run lint`).
    *   Exécute les tests unitaires (`npm run test:unit`). Si un test échoue, le déploiement est bloqué.
    *   Build avec Vite (`npm run build`).
    *   Déploie l'artifact `dist/` sur l'environnement `github-pages`.
*   **Règle d'or pour la suite** : Ne **jamais** casser les tests existants. Tout ajout de logique métier doit être accompagné de ses tests Vitest.

---

## 4. Architecture du Code (Séparation des préoccupations)
La logique métier est **totalement découplée** de l'UI React pour faciliter les tests et la maintenabilité.

### A. Logique Métier Pure (`src/game/`)
Ne contient **aucun import React**.
*   `types.ts` : Modèles de données (`Card`, `CardType`, `PlayerType`).
*   `deck.ts` : Fonctions de génération, mélange (Fisher-Yates) et pioche.
*   `logic.ts` : Moteur de résolution (`determineWinner`) pour un affrontement.
*   `bot.ts` : IA (actuellement basique, pioche aléatoire).

### B. Pont React / Métier (`src/hooks/`)
*   `useGameEngine.ts` : Le cœur réactif du jeu. C'est un custom hook contenant un state local (`playerHand`, `botHand`, `score`, `currentRound`). Il orchestre l'appel aux fonctions de `src/game/` et gère le délai (timeout de 2s) pour l'animation de résolution d'un tour.

### C. UI & Composants (`src/components/` & `src/App.tsx`)
Composants "bêtes" (dumb components) qui se contentent d'afficher l'état fourni par `useGameEngine`.
*   `Card.tsx` : Composant représentant une carte (face cachée ou visible).
*   `App.tsx` : Assemble la table de jeu, les mains (Hand) et l'arène (Arena).

---

## 5. Direction Artistique & UI (Refonte Rétro 1930s Rubber Hose)
*   **Style visuel** : Dessin animé noir et blanc rétro des années 1930 (esthétique "rubber hose", type *Cuphead* et cartoons de l'ère du cinéma muet / *Steamboat Willie*).
*   **Palette** : Monochrome strict (encre de Chine `#121212`, fond parchemin rétro `#ece5d3` / `#f5f0e1`, ombrages fusain).
*   **Effets de film vintage** :
    *   Grain de pellicule animé (SVG turbulence procédurale).
    *   Rayures verticales de celluloïd oscillantes.
    *   Scintillement de projecteur vintage (keyframes `filmFlicker`).
    *   Vignettage iris d'époque.
*   **Typographie** : Police cartoon rebondissante Google Font `Chewy` + vibration/tremblement d'encre (*boiling lines* / `cartoonJitter` à 12 fps).
*   **Composants graphiques vectoriels (SVG purs)** :
    *   `RubberHoseCharacters.tsx` : Pierre (rocher souriant aux bras rubber-hose croisés), Feuille (parchemin déroulé saluant), Ciseaux (cisailles avec mâchoire à dents acérées). Animations au survol (muscles, salut, morsure).
    *   `ArenaDuel.tsx` : Table en bois dessinée avec perspective 2.5D, main gantée du joueur et gant de boxe à lacets du bot, effet d'impact comique *POW!*.
    *   `AlleyBackground.tsx` : Ruelle sombre avec briques, affiches *Wanted*, tonneaux en bois cerclés de fer et château d'eau en bois (*water tower*).
    *   `ScoreboardFilm.tsx` : Bandeau de pellicule 35mm avec perforations et compteurs mécaniques vintage (*split-flap / flip-clock*).
    *   `CartoonFilters.tsx` : Filtres SVG pour grain et contours d'encre irréguliers à la plume.

---

## 6. Lancement en local
1. Cloner le repo.
2. Installer les dépendances : `npm install`.
3. Lancer le serveur de dev : `npm run dev`.
4. Lancer les tests : `npm run test:unit`.

> **Note à la prochaine IA** : Si on te demande d'ajouter une fonctionnalité (ex: mode multijoueur, nouvelles cartes, bot difficile), commence toujours par étendre les modèles dans `types.ts`, puis écris les tests (`.test.ts`), implémente la logique pure, et **enfin seulement**, mets à jour le hook `useGameEngine` et l'UI React. Garde l'UI Cartoon N&B intacte à moins d'instructions contraires.
