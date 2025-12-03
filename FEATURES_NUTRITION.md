# 🍽️ Intégration Suivi Poids & Plan Repas Personnalisé

## 🎯 Vue d'ensemble
Le calculateur de calories a été transformé en un système complet de gestion nutritionnelle avec:
- **Suivi quotidien du poids** avec historique et statistiques
- **Calculatrice de besoins caloriques** (BMR/TDEE)
- **Plans repas personnalisés** basés sur les objectifs du tutorial

## ✨ Nouvelles Fonctionnalités

### 1. **📊 Suivi Quotidien du Poids (Onglet "Suivi Poids")**

#### Ajout d'entrées de poids
- Interface simple et rapide pour ajouter son poids chaque jour
- Validation des données numériques
- Historique complètes avec dates

#### Statistiques de Progression
- **Poids Initial**: Poids de la première entrée
- **Poids Actuel**: Dernière mesure enregistrée
- **Changement en kg**: Différence totale
- **Pourcentage de changement**: Évolution en pourcentage
- Code couleur: Verde pour perte, Rouge pour gain

#### Visualisation de l'Historique
- Grille affichant toutes les mesures
- Dates lisibles en format français (JJ/MM/AAAA)
- Facilité de consultation des tendances

### 2. **🔥 Calculatrice de Besoins Caloriques (Onglet "Calories")**

Calcul basé sur:
- **Sexe**: Homme ou Femme
- **Âge**: En années
- **Poids**: En kg
- **Taille**: En cm
- **Niveau d'activité**: 5 niveaux (Sédentaire à Athlète)

Formule utilisée: **Mifflin-St Jeor + Facteur d'activité**

Résultat affiche: **Besoins caloriques quotidiens (TDEE)**

### 3. **🍽️ Plans Repas Personnalisés (Onglet "Repas")**

#### Personnalisation selon l'Objectif
Chaque objectif dispose de repas adaptés:

- **Perte de poids**: Calories réduites, protéines modérées
- **Musculation**: Calories augmentées, protéines élevées
- **Tonification**: Équilibre calorie-protéine
- **Endurance**: Glucides élevés, calories modérées
- **Équilibre**: Distribution équilibrée macro/micros

#### Structure des Repas
Chaque jour inclut 3 repas:
- 🌅 **Petit-Déjeuner**
- 🌞 **Déjeuner**
- 🌙 **Dîner**

#### Informations Nutritionnelles
Pour chaque repas détaillé:
- **Nom** du plat
- **Calories** (kcal)
- **Protéines** (g)
- **Glucides** (g)
- **Lipides** (g)

#### Résumé Nutritionnel Quotidien
Dashboard affichant les totaux journaliers:
- Total des calories
- Total des protéines
- Total des glucides
- Total des lipides

## 💾 Stockage des Données

### Historique du Poids
**Clé localStorage**: `weightHistory_[userId]`

```javascript
[
  {
    date: "2025-12-01",
    weight: 75.5,
    timestamp: "2025-12-01T10:50:06.470Z"
  },
  ...
]
```

### Profil Utilisateur (existant, enrichi)
**Clé localStorage**: `currentUser`

```javascript
{
  id: 1234567890,
  name: "Jean",
  email: "jean@example.com",
  profile: {
    weight: 75,           // kg
    height: 1.75,         // m
    reason: "objectif_fitness",
    vision: "plus_fort",
    objective: "musculation",
    recommendedProgram: "Musculation - Performance",
    completedAt: "2025-12-01T10:40:38Z"
  }
}
```

## 🎨 Interface Utilisateur

### Onglets Navigation
3 onglets pour passer entre:
- 📊 Suivi Poids
- 🔥 Calories
- 🍽️ Repas

### Styles Adaptatifs
- Mode sombre/clair supporté
- Responsive design
- Gradients et animations fluides
- Code couleur intuitif (vert pour amélioration, rouge pour prise)

## 📊 Exemple de Flux Utilisateur

1. **Inscription** → Tutorial (objectif = musculation)
2. **Suivi Poids**: Ajoute 75kg → Jour 2: 74.8kg → Perte de 0.2kg (0.27%)
3. **Calories**: Homme, 30 ans, 75kg, 180cm, Actif → 2500 kcal/jour
4. **Repas**: Génère plan "Musculation" avec 3000 kcal, 180g protéines

## 🔄 État du Composant CalorieCalculator

```javascript
const [activeTab, setActiveTab] = useState('tracking');
const [formData, setFormData] = useState({ age, weight, height, gender, activity });
const [result, setResult] = useState(null);              // Résultat TDEE
const [currentUser, setCurrentUser] = useState(null);   // Utilisateur connecté
const [weightEntry, setWeightEntry] = useState('');     // Poids temporaire
const [weightHistory, setWeightHistory] = useState([]); // Historique poids
const [mealPlan, setMealPlan] = useState(null);         // Plan repas généré
```

## 📁 Modifications de Code

### Fichiers Modifiés:
1. **`src/components/CalorieCalculator.js`**
   - Refactorisation complète avec système d'onglets
   - Ajout gestion du suivi poids
   - Intégration plans repas personnalisés
   - Calcul statistiques de progression

2. **`src/App.js`**
   - Ajout catégorie "🍽️ Repas"
   - Update du renderContent pour "meals"
   - Renommage "Calories" → "Nutrition"

## ✅ Checklist Implémentation

- [x] Suivi quotidien du poids
- [x] Enregistrement persistant dans localStorage
- [x] Statistiques de progression (kg et %)
- [x] Historique visuel des mesures
- [x] Calculatrice de calories (BMR/TDEE)
- [x] Plans repas pour 5 objectifs différents
- [x] 3 repas par jour (matin, midi, soir)
- [x] Macros nutritionnelles pour chaque repas
- [x] Personnalisation selon profil utilisateur
- [x] Résumé nutritionnel quotidien
- [x] Interface responsive et intuitive
- [x] Support mode clair/sombre

## 🚀 Utilisation

### Ajouter Poids du Jour
1. Aller sur "🔥 Nutrition"
2. Cliquer l'onglet "📊 Suivi Poids"
3. Entrer le poids en kg (ex: 75.5)
4. Cliquer "➕ Ajouter"
5. Voir automatiquement mis à jour la progression

### Calculer Calories
1. Aller sur "🔥 Nutrition"
2. Cliquer l'onglet "🔥 Calories"
3. Remplir formulaire (sexe, âge, poids, taille, activité)
4. Cliquer "Calculer"
5. Voir résultat en kcal/jour

### Générer Plan Repas
1. Aller sur "🍽️ Repas"
2. Vérifier objectif affiché (ne s'affiche que si profil complété)
3. Cliquer "📋 Générer Mon Plan Repas"
4. Consulter les 3 repas proposés avec macros
5. Voir résumé nutritionnel total

## 🎓 Logique de Recommandation

```javascript
// Détermination du programme
if objective === 'perte_poids' → Calories 2000, Protéines hautes
else if objective === 'musculation' → Calories 3000, Protéines très hautes
else if objective === 'tonification' → Calories 2200, Équilibrées
else if objective === 'endurance' → Calories 2400, Glucides hauts
else → Équilibre 2200
```

## 📝 Notes Importantes

- Les données de poids sont **uniques par utilisateur** (storagées avec userId)
- Le plan repas **nécessite** un profil complet du tutorial
- Les calories totales varient selon **l'objectif** (perte vs musculation)
- Les macros sont **optimisées** pour chaque objectif
- L'historique du poids **persiste** même après fermeture de l'app

## 🔮 Évolutions Futures

1. **Graphiques de courbe de poids**: Chart.js ou Recharts
2. **Objectifs de poids**: Fixer target poids à atteindre
3. **Alertes quotidiennes**: Rappel de pesée/repas
4. **Export PDF**: Générer plan repas en PDF
5. **Recettes détaillées**: Ajouter recettes pour chaque repas
6. **Suivi nutrition**: Logger les calories consommées
7. **Ajustement automatique**: Modifier plans selon progression
8. **Intégration API**: Synchroniser avec HealthKit/Google Fit
