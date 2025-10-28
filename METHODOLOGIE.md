# Méthodologie - Projet HTS (7 jours)

## Stack technique recommandée

### Backend
- **Langage :** Node.js
- **Framework :** Express
- **Base de données :** SQLite

### Frontend
- **Framework :** React (web classique via Vite)
- **Styling :** CSS simple ou TailwindCSS

---

## Pourquoi cette stack ?

### Node.js + Express ✅
- Vous connaissez déjà un peu
- JavaScript = syntaxe simple et claire
- Debugging facile avec `console.log()`
- Énorme communauté (Stack Overflow, documentation)
- Technologie "boring" et éprouvée

### React (web) au lieu de React Native ⚠️
- **React Native** = applications mobiles natives (iOS/Android)
- **Votre besoin** = "logiciel pour ordinateur" → React web suffit
- Plus simple à tester : ouvrir le navigateur, rafraîchir la page
- Pas besoin d'émulateurs ou simulateurs
- Démarrage rapide avec Vite (2 minutes)
- Hot reload automatique pour voir les changements en temps réel

### SQLite au lieu de PostgreSQL 💡
- **Zéro configuration** : un simple fichier `.db`
- Pas de serveur de base de données à installer/gérer
- Parfait pour développement local
- Visualisation facile des données (DB Browser for SQLite - gratuit)
- PostgreSQL = trop complexe pour 7 jours + débutants
- Légère et rapide pour votre use case

---

## Architecture du projet

```
hts-projet/
├── backend/                 # API Node.js + Express
│   ├── server.js           # Point d'entrée
│   ├── routes/             # Routes API
│   ├── controllers/        # Logique métier
│   ├── models/             # Modèles de données
│   ├── database.sqlite     # Base de données SQLite
│   └── package.json
│
├── frontend/               # Application React
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── pages/         # Pages de l'app
│   │   ├── App.jsx        # Composant principal
│   │   └── main.jsx       # Point d'entrée
│   ├── index.html
│   └── package.json
│
└── README.md              # Instructions de lancement
```

---

## Planning 7 jours (suggestion)

### Jour 1 : Setup + Fondations
- Installer Node.js, Vite, SQLite
- Créer la structure backend (Express)
- Créer la structure frontend (React + Vite)
- Première route API qui fonctionne (`GET /api/health`)
- Connexion SQLite qui fonctionne
- Premier composant React affiché

### Jour 2-3 : Fonctionnalités core
- Base de données : créer tables (utilisateurs, habitudes, progrès)
- Backend : API CRUD pour les habitudes
- Frontend : Formulaire d'ajout d'habitude
- Frontend : Liste des habitudes

### Jour 4-5 : Suivi et programmes
- Backend : API pour suivi des progrès
- Frontend : Dashboard de visualisation
- Backend : API pour programmes personnalisés
- Frontend : Page programmes

### Jour 6 : Événements sportifs
- Backend : API événements locaux
- Frontend : Page événements
- Intégration complète

### Jour 7 : Polish + Tests
- Corrections de bugs
- Tests manuels de toutes les fonctionnalités
- Documentation README pour lancer le projet
- Présentation finale

---

## Comment tester à chaque étape

### Backend
```bash
# Tester une route API
curl http://localhost:3000/api/health

# Ou dans le navigateur
http://localhost:3000/api/habitudes
```

### Frontend
- Ouvrir le navigateur sur `http://localhost:5173`
- Utiliser la console du navigateur (F12) pour voir les erreurs
- Utiliser React DevTools (extension Chrome/Firefox)

### Base de données
- Télécharger **DB Browser for SQLite** (gratuit)
- Ouvrir le fichier `database.sqlite`
- Voir les tables et les données en temps réel

---

## Commandes de lancement (après setup)

### Backend
```bash
cd backend
npm install
npm run dev
```
→ API disponible sur `http://localhost:3000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
→ Application disponible sur `http://localhost:5173`

---

## Outils de debugging pour débutants

### Backend (Node.js)
- `console.log()` partout où vous avez un doute
- Tester les routes avec le navigateur ou Postman/Insomnia (gratuit)
- Lire les erreurs dans le terminal (ligne + message)

### Frontend (React)
- `console.log()` dans les composants
- React DevTools pour voir l'état des composants
- Console du navigateur (F12) pour voir les erreurs
- Onglet Network pour voir les appels API

### Base de données (SQLite)
- DB Browser for SQLite pour voir/modifier les données
- Tester les requêtes SQL directement dans l'interface

---

## Alternative ultra-simple (si blocage front/back)

Si la séparation frontend/backend est trop complexe :

**Stack monolithique :**
- Node.js + Express + EJS (templating HTML côté serveur)
- SQLite
- CSS simple

→ Tout dans un seul projet, HTML généré côté serveur  
→ Technologie "boring" mais ultra fonctionnelle pour débuter  
→ Pas de gestion d'API REST à faire

---

## Ressources utiles

- **Node.js/Express :** https://expressjs.com/
- **React + Vite :** https://vitejs.dev/
- **SQLite :** https://www.sqlite.org/
- **DB Browser for SQLite :** https://sqlitebrowser.org/
- **Tutoriels débutants :** MDN Web Docs, freeCodeCamp

---

## Conseils finaux

✅ **Commencez simple** : une fonctionnalité qui marche vaut mieux que 10 à moitié faites  
✅ **Testez souvent** : après chaque petite modification, vérifiez que ça marche  
✅ **Committez régulièrement** : git commit toutes les heures minimum  
✅ **Documentez au fur et à mesure** : notez comment lancer le projet  
✅ **Demandez de l'aide** : Stack Overflow, ChatGPT, Discord dev  

❌ **N'ajoutez pas de librairies** à la dernière minute  
❌ **Ne compliquez pas** avec Docker, CI/CD, auth complexe, etc.  
❌ **Ne visez pas la perfection** : un MVP qui tourne > un projet incomplet
