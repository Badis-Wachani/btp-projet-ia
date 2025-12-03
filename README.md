# 💪 Habit Tracker Sport - Application Web

Une application web complète pour le suivi des habitudes de fitness, la nutrition et la progression personnelle.

## 🎯 Fonctionnalités Principales

### 📋 Authentification & Onboarding
- ✅ Inscription et connexion sécurisées
- ✅ **Mot de passe oublié** avec token temporaire
- ✅ **Se connecter avec Google** (création/liaison automatique)
- Tutorial automatique post-inscription
- Collecte de profil (poids, taille, objectifs)
- Détermination automatique du programme recommandé

### 📊 Suivi Nutritionnel
- **Suivi Quotidien du Poids**
  - Enregistrement journalier du poids
  - Historique complet avec dates
  - Statistiques de progression (kg et %)
  - Visualisation des tendances

- **Calculatrice de Calories**
  - Calcul des besoins caloriques (BMR/TDEE)
  - Basé sur sexe, âge, poids, taille, activité
  - Recommandations personnalisées

- **Plans Repas Personnalisés**
  - 5 objectifs différents (perte, musculation, tonification, endurance, équilibre)
  - 3 repas par jour (matin, midi, soir)
  - Macros nutritionnelles complètes
  - Génération automatique selon profil

### 🏋️ Entraînement
- Mode d'entraînement interactif
- Routine personnalisée
- Historique des séances

### 📚 Ressources
- Bibliothèque de vidéos
- Histoires de succès
- Guide de démarrage

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
npm start
```

L'application s'ouvre sur `http://localhost:3000`

### Utilisation

1. **Créer un compte**: Inscription avec email et mot de passe
2. **Compléter le tutorial**: Remplir poids, taille et 3 questions
3. **Accéder au dashboard**: Voir les 6 catégories disponibles
4. **Suivi quotidien**: 
   - Ajouter poids du jour dans "Nutrition"
   - Consulter plan repas personnalisé
   - Calculer besoins en calories

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Auth.js              # Authentification
│   ├── Tutorial.js          # Onboarding post-inscription
│   ├── CalorieCalculator.js # Nutrition, poids, repas
│   ├── TrainingMode.js      # Entraînement
│   ├── Routine.js           # Routine personnalisée
│   ├── Videos.js            # Vidéos
│   └── History.js           # Historique
├── styles/
│   ├── Auth.css
│   ├── Tutorial.css
│   └── [autres styles]
├── App.js                   # Application principale
└── index.js                 # Point d'entrée
```

## 💾 Stockage Données

Toutes les données sont stockées dans **localStorage** du navigateur:
- `users` - Liste des comptes utilisateurs (email, Google, etc.)
- `currentUser` - Utilisateur connecté
- `passwordReset` - Token temporaire de réinitialisation
- `weightHistory_[userId]` - Historique du poids par utilisateur

## 🎨 Design

- **Mode Clair/Sombre**: Toggle en haut à droite
- **Design Responsif**: Adaptable mobile et desktop
- **Couleurs**: Gradient bleu/violet (#667eea, #764ba2)
- **Interface**: Moderne avec emojis et animations

## 📚 Documentation Complète

- [AUTHENTIFICATION.md](./AUTHENTIFICATION.md) - Système d'authentification (email, Google, mot de passe oublié)
- [GOOGLE_AUTH_GUIDE.md](./GOOGLE_AUTH_GUIDE.md) - Guide complet intégration Google OAuth
- [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) - Roadmap production (backend, sécurité, déploiement)
- [TEST_AUTH.md](./TEST_AUTH.md) - Cas de test complets
- [CHANGELOG_AUTH.md](./CHANGELOG_AUTH.md) - Résumé des modifications
- [TUTORIAL_INTEG.md](./TUTORIAL_INTEG.md) - Détails du système de tutorial
- [FEATURES_NUTRITION.md](./FEATURES_NUTRITION.md) - Plans repas et suivi poids
- [GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md) - Guide utilisateur

## 🔧 Technologies

- **Frontend**: React.js
- **Styling**: CSS inline + CSS modules
- **Stockage**: localStorage (sans backend)
- **Build**: Create React App

## 📊 Plans Repas par Objectif

| Objectif | Calories | Protéines | Usage |
|----------|----------|-----------|-------|
| Perte poids | 2000 | Hautes | Déficit calorique |
| Musculation | 3000 | Très hautes | Surplus calorique |
| Tonification | 2200 | Équilibrées | Maintien léger |
| Endurance | 2400 | Modérées | Glucides élevés |
| Équilibre | 2200 | Équilibrées | Bien-être général |

## ⚙️ Formule Calcul Calories

**BMR (Mifflin-St Jeor)**:
- Hommes: (10 × poids) + (6.25 × taille) - (5 × âge) + 5
- Femmes: (10 × poids) + (6.25 × taille) - (5 × âge) - 161

**TDEE = BMR × Facteur d'activité**

## 🎯 Objectifs Objectifs

- ⬇️ Perte de poids
- 💪 Prise de masse musculaire
- ✨ Tonification et définition
- 🏃 Endurance et cardio
- ⚖️ Équilibre et bien-être

## 🔮 Évolutions Futures

- [ ] Graphiques de progression
- [ ] Intégration wearables (Apple Watch, Fitbit)
- [ ] Notifications push
- [ ] Synchronisation cloud
- [ ] Recettes détaillées
- [ ] Suivi des calories consommées
- [ ] Backend Node.js avec base de données
- [ ] Export PDF des plans

## 📄 Licence

Projet pédagogique - BTP IA

## 👥 Auteur

Développé pour le projet BTP IA