# Application Fitness - Guide de démarrage

## 📋 Description

Application web React avec trois modules principaux :
- **Mode d'Entraînement** : Créez et suivez vos exercices
- **Routine** : Planifiez vos séances hebdomadaires
- **Calcul des Calories** : Calculez vos besoins caloriques quotidiens

## 🚀 Installation et lancement en local

### Prérequis

Assurez-vous d'avoir installé sur votre machine :
- **Node.js** (version 14 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- **npm** (installé automatiquement avec Node.js)

Pour vérifier votre installation :
```bash
node --version
npm --version
```

### Installation

1. **Naviguez vers le dossier du projet**
```bash
cd fitness-app
```

2. **Installez les dépendances** (si ce n'est pas déjà fait)
```bash
npm install
```

### Lancement de l'application

**Démarrez le serveur de développement :**
```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse :
```
http://localhost:3000
```

Si le navigateur ne s'ouvre pas automatiquement, ouvrez-le manuellement et entrez l'URL ci-dessus.

## 🎯 Utilisation

### Navigation
- Utilisez la **barre de navigation** en haut pour accéder rapidement aux différentes sections
- Cliquez sur les **cartes** de la page d'accueil pour explorer chaque module
- Utilisez le bouton **"← Retour"** pour revenir à la page d'accueil

### Fonctionnalités

#### 🏋️ Mode d'Entraînement
- Visualisez vos exercices du jour
- Cliquez sur un exercice pour le marquer comme complété
- Ajoutez de nouveaux exercices à votre programme

#### 📅 Routine
- Consultez votre planning hebdomadaire
- Visualisez les activités prévues pour chaque jour
- Suivez les conseils quotidiens

#### 🔥 Calcul des Calories
- Remplissez le formulaire avec vos informations personnelles
- Sélectionnez votre niveau d'activité physique
- Obtenez instantanément vos besoins caloriques quotidiens

## 🛠️ Commandes disponibles

### `npm start`
Lance l'application en mode développement.

### `npm test`
Lance les tests en mode interactif.

### `npm run build`
Construit l'application pour la production dans le dossier `build`.

### `npm run eject`
⚠️ **Attention** : Cette opération est irréversible ! Elle permet d'accéder à la configuration complète de l'application.

## 📁 Structure du projet

```
fitness-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TrainingMode.js      # Module d'entraînement
│   │   ├── Routine.js            # Module de routine
│   │   └── CalorieCalculator.js  # Module de calcul de calories
│   ├── App.js                    # Composant principal
│   ├── App.css                   # Styles de l'application
│   └── index.js                  # Point d'entrée
├── package.json
└── README.md
```

## 🎨 Technologies utilisées

- **React** : Framework JavaScript pour l'interface utilisateur
- **React Hooks** : useState pour la gestion de l'état
- **CSS** : Styles personnalisés avec dégradés et animations

## 🌟 Fonctionnalités principales

✅ Interface utilisateur moderne et responsive  
✅ Navigation fluide entre les modules  
✅ Design avec dégradés et animations  
✅ Calculateur de calories basé sur la formule de Mifflin-St Jeor  
✅ Gestion d'état avec React Hooks  

## 🐛 Résolution de problèmes

### L'application ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez le dossier `node_modules` et le fichier `package-lock.json`, puis réinstallez : 
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### Le port 3000 est déjà utilisé
- L'application vous proposera d'utiliser un autre port (appuyez sur `Y`)
- Ou arrêtez l'application qui utilise le port 3000

## 📝 Notes

- L'application fonctionne entièrement côté client (aucun backend requis)
- Les données ne sont pas persistées (elles disparaissent au rechargement de la page)
- Pour ajouter la persistance, vous pourriez utiliser localStorage ou une base de données

## 🚀 Prochaines étapes possibles

- Ajouter la persistance des données (localStorage/backend)
- Implémenter l'ajout/suppression d'exercices
- Ajouter un système de progression
- Créer des graphiques de suivi
- Ajouter l'authentification utilisateur

---

**Bon entraînement ! 💪**
