import React, { useState, useEffect } from 'react';

function Routine({ onBack, isDarkMode }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [userProfile, setUserProfile] = useState({ objective: 'perte', level: 'intermédiaire' });

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
    setUserProfile({
      objective: profile.objective || 'perte',
      level: profile.level || 'intermédiaire'
    });
  }, []);

  const getRoutinesForProfile = () => {
    const { objective, level } = userProfile;
    
    // PERTE DE POIDS
    if (objective === 'perte') {
      if (level === 'débutant') {
        return [
          {
            day: 'Lundi',
            activity: 'Cardio modéré + Renforcement',
            duration: '35 min',
            icon: '🏃',
            exercises: [
              { name: 'Marche rapide', sets: '5 min', reps: 'Échauffement', rest: '-', weight: '-' },
              { name: 'Tapis roulant cardio', sets: '20 min', reps: 'Intensité modérée', rest: '-', weight: '-' },
              { name: 'Squats au poids du corps', sets: '3x12', reps: '12 reps', rest: '60 sec', weight: 'Poids du corps' },
              { name: 'Pompes murales', sets: '3x10', reps: '10 reps', rest: '60 sec', weight: 'Poids du corps' },
              { name: 'Crunchs', sets: '2x15', reps: '15 reps', rest: '45 sec', weight: 'Poids du corps' },
            ],
            meals: ['Blanc poulet + Riz brun', 'Salade composée', 'Fruits frais']
          },
          {
            day: 'Mardi',
            activity: 'Repos actif',
            duration: '20 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga léger', sets: '15 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Étirements', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Œufs + Toast complet', 'Yaourt + Granola', 'Soupe légumes']
          },
          {
            day: 'Mercredi',
            activity: 'Circuit training',
            duration: '30 min',
            icon: '⚡',
            exercises: [
              { name: 'Jumping jacks', sets: '3x20', reps: '20 reps', rest: '45 sec', weight: 'Poids du corps' },
              { name: 'Burpees (modifiés)', sets: '3x8', reps: '8 reps', rest: '60 sec', weight: 'Poids du corps' },
              { name: 'Fentes alternatives', sets: '3x10', reps: '10 reps', rest: '60 sec', weight: 'Poids du corps' },
              { name: 'Planche', sets: '3x20', reps: '20 secondes', rest: '45 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poisson blanc', 'Légumes cuits', 'Riz blanc']
          },
          {
            day: 'Jeudi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Marche légère (optionnel)', sets: '15 min', reps: 'Très léger', rest: '-', weight: '-' },
            ],
            meals: ['Repas légers', 'Hydratation', 'Protéines maigres']
          },
          {
            day: 'Vendredi',
            activity: 'Cardio HIIT léger',
            duration: '25 min',
            icon: '🏃',
            exercises: [
              { name: 'Échauffement', sets: '5 min', reps: '-', rest: '-', weight: '-' },
              { name: 'HIIT - Sprint/Marche', sets: '15 min', reps: '30 sec sprint / 1 min marche', rest: '-', weight: '-' },
              { name: 'Cool down', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Poulet rôti', 'Légumes variés', 'Riz complet']
          },
          {
            day: 'Samedi',
            activity: 'Activité plaisir',
            duration: '30 min',
            icon: '🚴',
            exercises: [
              { name: 'Marche ou vélo léger', sets: '30 min', reps: 'À votre rythme', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibré', 'Fruits', 'Légumes']
          },
          {
            day: 'Dimanche',
            activity: 'Repos complet',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos & Récupération', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibrés', 'Hydratation', 'Sommeil']
          },
        ];
      } else if (level === 'intermédiaire') {
        return [
          {
            day: 'Lundi',
            activity: 'Haut du corps + Cardio',
            duration: '45 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché haltères', sets: '4x10', reps: '10-12 reps', rest: '90 sec', weight: '25kg' },
              { name: 'Tirage horizontal', sets: '4x10', reps: '10-12 reps', rest: '90 sec', weight: '50kg' },
              { name: 'Développé épaules', sets: '3x12', reps: '12-15 reps', rest: '60 sec', weight: '20kg' },
              { name: 'Cardio - Tapis roulant', sets: '10 min', reps: 'Intensité moyenne', rest: '-', weight: '-' },
            ],
            meals: ['Poulet grillé + Riz complet', 'Œufs + Avocado', 'Saumon + Légumes']
          },
          {
            day: 'Mardi',
            activity: 'Bas du corps',
            duration: '40 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat haltères', sets: '4x12', reps: '12 reps', rest: '90 sec', weight: '30kg' },
              { name: 'Leg Press', sets: '3x12', reps: '12 reps', rest: '90 sec', weight: '100kg' },
              { name: 'Leg Curl', sets: '3x12', reps: '12 reps', rest: '60 sec', weight: '40kg' },
              { name: 'Extension jambes', sets: '3x15', reps: '15 reps', rest: '60 sec', weight: '35kg' },
            ],
            meals: ['Steak maigre', 'Patate douce', 'Brocoli']
          },
          {
            day: 'Mercredi',
            activity: 'Cardio intense HIIT',
            duration: '30 min',
            icon: '🏃',
            exercises: [
              { name: 'Échauffement', sets: '5 min', reps: '-', rest: '-', weight: '-' },
              { name: 'HIIT - Course', sets: '20 min', reps: '1 min sprint / 1 min repos', rest: '-', weight: '-' },
              { name: 'Cool down', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Blanc poulet', 'Riz brun', 'Fruits']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif',
            duration: '25 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga ou étirements', sets: '20 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Mobilité', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Œufs + Toasts complets', 'Yaourt grec', 'Soupe']
          },
          {
            day: 'Vendredi',
            activity: 'FullBody circuit',
            duration: '40 min',
            icon: '⚡',
            exercises: [
              { name: 'Squats + Développé', sets: '3x10', reps: '10 reps (alternance)', rest: '90 sec', weight: '30kg' },
              { name: 'Fentes haltères', sets: '3x12', reps: '12 reps', rest: '60 sec', weight: '20kg' },
              { name: 'Tractions', sets: '3x8', reps: '8 reps', rest: '90 sec', weight: 'Poids du corps' },
              { name: 'Crunchs', sets: '3x20', reps: '20 reps', rest: '45 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poisson blanc', 'Riz complet', 'Légumes verts']
          },
          {
            day: 'Samedi',
            activity: 'Cardio modéré',
            duration: '30 min',
            icon: '🚴',
            exercises: [
              { name: 'Vélo ou marche rapide', sets: '30 min', reps: 'Intensité modérée', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibré', 'Fruits', 'Légumes']
          },
          {
            day: 'Dimanche',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos & Récupération', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation', 'Sommeil 8h+']
          },
        ];
      } else {
        return [
          {
            day: 'Lundi',
            activity: 'Haut du corps + Cardio HIIT',
            duration: '50 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché', sets: '4x6', reps: '6-8 reps', rest: '2 min', weight: '80kg' },
              { name: 'Tirage horizontal prise rapprochée', sets: '4x8', reps: '8-10 reps', rest: '90 sec', weight: '70kg' },
              { name: 'Développé militaire', sets: '3x8', reps: '8-10 reps', rest: '90 sec', weight: '50kg' },
              { name: 'HIIT - Corde à sauter', sets: '10 min', reps: '20 sec sprint / 40 sec repos', rest: '-', weight: '-' },
            ],
            meals: ['Poulet + Riz blanc', 'Œufs + Avocado', 'Saumon + Légumes']
          },
          {
            day: 'Mardi',
            activity: 'Bas du corps',
            duration: '50 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat profond', sets: '4x5', reps: '5-8 reps', rest: '2 min', weight: '100kg' },
              { name: 'Soulevé de terre jambes raidies', sets: '3x8', reps: '8-10 reps', rest: '90 sec', weight: '90kg' },
              { name: 'Leg Press', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '150kg' },
              { name: 'Leg Curl', sets: '3x12', reps: '12-15 reps', rest: '60 sec', weight: '60kg' },
            ],
            meals: ['Steak maigre', 'Patate douce', 'Épinards']
          },
          {
            day: 'Mercredi',
            activity: 'Cardio HIIT intense',
            duration: '35 min',
            icon: '🏃',
            exercises: [
              { name: 'Échauffement', sets: '5 min', reps: '-', rest: '-', weight: '-' },
              { name: 'HIIT - Course intervalle', sets: '25 min', reps: '45 sec sprint / 15 sec repos', rest: '-', weight: '-' },
              { name: 'Cool down', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Blanc poulet', 'Riz brun', 'Fruits']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif + Mobilité',
            duration: '30 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga dynamique', sets: '20 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Mobilité articulaire', sets: '10 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Œufs + Toast complet', 'Yaourt grec', 'Soupe légumes']
          },
          {
            day: 'Vendredi',
            activity: 'FullBody + HIIT',
            duration: '50 min',
            icon: '⚡',
            exercises: [
              { name: 'Squat + Développé', sets: '4x6', reps: '6 reps (superset)', rest: '2 min', weight: '80kg' },
              { name: 'Soulevé de terre', sets: '3x5', reps: '5 reps', rest: '2 min', weight: '120kg' },
              { name: 'Tractions', sets: '4x8', reps: '8-10 reps', rest: '90 sec', weight: 'Poids du corps' },
              { name: 'Burpees', sets: '3x10', reps: '10 reps', rest: '90 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poisson blanc', 'Riz complet', 'Brocoli']
          },
          {
            day: 'Samedi',
            activity: 'Cardio longue distance ou repos actif',
            duration: '40 min',
            icon: '🚴',
            exercises: [
              { name: 'Course longue distance', sets: '40 min', reps: 'Rythme régulier', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibré', 'Fruits', 'Légumes']
          },
          {
            day: 'Dimanche',
            activity: 'Repos complet',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos & Récupération', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation complète', 'Sommeil 8h+']
          },
        ];
      }
    }
    
    // PRISE DE MASSE
    else if (objective === 'prise') {
      if (level === 'débutant') {
        return [
          {
            day: 'Lundi',
            activity: 'Haut du corps - Hypertrophie',
            duration: '45 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché haltères', sets: '4x8', reps: '8-10 reps', rest: '2 min', weight: '20kg' },
              { name: 'Tirage horizontal', sets: '3x8', reps: '8-10 reps', rest: '2 min', weight: '30kg' },
              { name: 'Curl haltères', sets: '3x10', reps: '10 reps', rest: '90 sec', weight: '15kg' },
              { name: 'Écartés haltères', sets: '3x12', reps: '12 reps', rest: '60 sec', weight: '12kg' },
            ],
            meals: ['Poulet + Riz blanc + Sauce', 'Œufs + Pâtes', 'Saumon + Riz + Huile olive']
          },
          {
            day: 'Mardi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos complet', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas riches', 'Protéines + Glucides', 'Hydratation']
          },
          {
            day: 'Mercredi',
            activity: 'Bas du corps - Hypertrophie',
            duration: '45 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat haltères', sets: '4x8', reps: '8-10 reps', rest: '2 min', weight: '40kg' },
              { name: 'Leg Press', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '100kg' },
              { name: 'Leg Curl', sets: '3x10', reps: '10 reps', rest: '90 sec', weight: '40kg' },
              { name: 'Mollets', sets: '3x15', reps: '15 reps', rest: '60 sec', weight: '50kg' },
            ],
            meals: ['Steak + Pâtes + Sauce', 'Poulet + Patate douce', 'Œufs + Riz']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif',
            duration: '20 min',
            icon: '🧘',
            exercises: [
              { name: 'Étirements légers', sets: '15 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Marche', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Protéines', 'Glucides']
          },
          {
            day: 'Vendredi',
            activity: 'FullBody',
            duration: '45 min',
            icon: '⚡',
            exercises: [
              { name: 'Squat + Développé', sets: '3x8', reps: '8 reps (alternance)', rest: '2 min', weight: '30kg' },
              { name: 'Tirage + Fentes', sets: '3x8', reps: '8 reps (alternance)', rest: '90 sec', weight: '25kg' },
              { name: 'Tractions légères', sets: '3x5', reps: '5 reps', rest: '2 min', weight: 'Poids du corps' },
            ],
            meals: ['Œufs + Pâtes complet', 'Poisson + Riz blanc', 'Tofu + Pois chiches + Riz']
          },
          {
            day: 'Samedi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos complet', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibrés', 'Protéines + Glucides', 'Hydratation']
          },
          {
            day: 'Dimanche',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos & Récupération', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation', 'Sommeil 8h+']
          },
        ];
      } else if (level === 'intermédiaire') {
        return [
          {
            day: 'Lundi',
            activity: 'Poitrine & Triceps',
            duration: '50 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: '4x6', reps: '6-8 reps', rest: '2 min', weight: '100kg' },
              { name: 'Développé incliné haltères', sets: '3x8', reps: '8-10 reps', rest: '90 sec', weight: '35kg' },
              { name: 'Écartés poulies', sets: '3x10', reps: '10-12 reps', rest: '60 sec', weight: '30kg' },
              { name: 'Dips', sets: '3x8', reps: '8-10 reps', rest: '90 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poulet grillé + Riz blanc + Sauce', 'Œufs + Pâtes complètes + Beurre', 'Saumon + Riz + Olive']
          },
          {
            day: 'Mardi',
            activity: 'Dos & Biceps',
            duration: '50 min',
            icon: '💪',
            exercises: [
              { name: 'Tirage horizontal barre', sets: '4x6', reps: '6-8 reps', rest: '2 min', weight: '70kg' },
              { name: 'Tractions', sets: '4x8', reps: '8-10 reps', rest: '2 min', weight: 'Poids du corps +10kg' },
              { name: 'Curl barre EZ', sets: '3x8', reps: '8-10 reps', rest: '90 sec', weight: '35kg' },
              { name: 'Tirage pulley', sets: '3x12', reps: '12-15 reps', rest: '60 sec', weight: '50kg' },
            ],
            meals: ['Steak + Riz blanc + Beurre', 'Thon + Pâtes + Olive', 'Œufs + Avocado + Pain']
          },
          {
            day: 'Mercredi',
            activity: 'Jambes lourdes',
            duration: '55 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat barre', sets: '4x5', reps: '5-8 reps', rest: '2.5 min', weight: '140kg' },
              { name: 'Soulevé de terre', sets: '3x3', reps: '3-5 reps', rest: '2.5 min', weight: '160kg' },
              { name: 'Leg Press', sets: '3x8', reps: '8-10 reps', rest: '2 min', weight: '200kg' },
              { name: 'Leg Curl', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '60kg' },
            ],
            meals: ['Bifteck + Patate douce + Sauce', 'Poulet + Riz complet + Huile', 'Œufs + Pâtes + Beurre']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif',
            duration: '25 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga léger', sets: '15 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Étirements', sets: '10 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas légers', 'Protéines', 'Glucides modérés']
          },
          {
            day: 'Vendredi',
            activity: 'Épaules & Abdos',
            duration: '45 min',
            icon: '💪',
            exercises: [
              { name: 'Développé militaire barre', sets: '4x6', reps: '6-8 reps', rest: '2 min', weight: '60kg' },
              { name: 'Élévations latérales', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '20kg' },
              { name: 'Oiseau haltères', sets: '3x10', reps: '10-12 reps', rest: '60 sec', weight: '15kg' },
              { name: 'Crunchs lestés', sets: '3x12', reps: '12-15 reps', rest: '60 sec', weight: '15kg' },
            ],
            meals: ['Poulet + Riz blanc + Sauce', 'Œufs + Pâtes + Fromage', 'Poisson + Riz + Olive']
          },
          {
            day: 'Samedi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos complet', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibrés', 'Protéines + Glucides + Gras', 'Hydratation']
          },
          {
            day: 'Dimanche',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos & Récupération', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation complète', 'Sommeil 8h+']
          },
        ];
      } else {
        return [
          {
            day: 'Lundi',
            activity: 'Poitrine lourd',
            duration: '50 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché barre', sets: '5x3', reps: '3-5 reps', rest: '3 min', weight: '140kg' },
              { name: 'Développé incliné', sets: '4x5', reps: '5-6 reps', rest: '2.5 min', weight: '110kg' },
              { name: 'Écartés haltères', sets: '3x6', reps: '6-8 reps', rest: '2 min', weight: '45kg' },
              { name: 'Dips lestés', sets: '3x6', reps: '6-8 reps', rest: '2 min', weight: '+20kg' },
            ],
            meals: ['Steak + Riz blanc + Sauce grasse', 'Œufs + Pâtes + Huile olive', 'Saumon + Riz + Beurre']
          },
          {
            day: 'Mardi',
            activity: 'Dos lourd',
            duration: '50 min',
            icon: '💪',
            exercises: [
              { name: 'Tirage horizontal barre', sets: '5x3', reps: '3-5 reps', rest: '3 min', weight: '120kg' },
              { name: 'Soulevé de terre classique', sets: '4x3', reps: '3 reps', rest: '3 min', weight: '200kg' },
              { name: 'Tractions pondérées', sets: '4x5', reps: '5-6 reps', rest: '2 min', weight: '+30kg' },
              { name: 'Curl barre', sets: '3x6', reps: '6-8 reps', rest: '90 sec', weight: '50kg' },
            ],
            meals: ['Bifteck + Riz complet + Sauce', 'Poulet rôti + Pâtes + Olive', 'Œufs + Avocado + Pain complet']
          },
          {
            day: 'Mercredi',
            activity: 'Jambes maximales',
            duration: '60 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat barre lourd', sets: '5x3', reps: '3-5 reps', rest: '3 min', weight: '180kg' },
              { name: 'Soulevé de terre jambes raidies', sets: '4x5', reps: '5 reps', rest: '2.5 min', weight: '160kg' },
              { name: 'Leg Press lourd', sets: '4x5', reps: '5-6 reps', rest: '2.5 min', weight: '300kg' },
              { name: 'Leg Curl', sets: '3x8', reps: '8-10 reps', rest: '90 sec', weight: '80kg' },
            ],
            meals: ['Steak + Patate douce + Sauce grasse', 'Poulet + Riz blanc + Beurre', 'Œufs + Pâtes + Huile']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif',
            duration: '30 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga dynamique', sets: '20 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Mobilité articulations', sets: '10 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas légers protéinés', 'Glucides modérés', 'Hydratation']
          },
          {
            day: 'Vendredi',
            activity: 'FullBody puissant',
            duration: '55 min',
            icon: '⚡',
            exercises: [
              { name: 'Squat + Développé', sets: '4x5', reps: '5 reps (superset)', rest: '2.5 min', weight: '120kg' },
              { name: 'Tirage + Fentes lestées', sets: '4x5', reps: '5 reps (superset)', rest: '2 min', weight: '100kg' },
              { name: 'Tractions maximales', sets: '4x3', reps: '3-5 reps', rest: '2 min', weight: '+50kg' },
              { name: 'Crunchs lestés', sets: '3x10', reps: '10 reps', rest: '60 sec', weight: '30kg' },
            ],
            meals: ['Œufs + Riz blanc + Sauce', 'Thon + Pâtes + Olive', 'Poulet + Riz complet + Beurre']
          },
          {
            day: 'Samedi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos complet', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas copieux', 'Protéines + Glucides + Gras', 'Hydratation']
          },
          {
            day: 'Dimanche',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos & Récupération', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation complète', 'Sommeil 8h+']
          },
        ];
      }
    }
    
    // REMISE EN FORME (défaut)
    else {
      if (level === 'débutant') {
        return [
          {
            day: 'Lundi',
            activity: 'Cardio + Renforcement léger',
            duration: '30 min',
            icon: '🏃',
            exercises: [
              { name: 'Marche rapide', sets: '10 min', reps: 'Échauffement', rest: '-', weight: '-' },
              { name: 'Tapis roulant modéré', sets: '15 min', reps: 'Constamment', rest: '-', weight: '-' },
              { name: 'Squats air', sets: '2x15', reps: '15 reps', rest: '60 sec', weight: 'Poids du corps' },
              { name: 'Pompes mur', sets: '2x10', reps: '10 reps', rest: '60 sec', weight: 'Poids du corps' },
            ],
            meals: ['Œufs + Toast complet', 'Poulet + Riz', 'Fruits + Yaourt']
          },
          {
            day: 'Mardi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibrés', 'Hydratation', 'Sommeil']
          },
          {
            day: 'Mercredi',
            activity: 'Cardio léger + Étirements',
            duration: '25 min',
            icon: '🚴',
            exercises: [
              { name: 'Marche ou vélo stationnaire', sets: '20 min', reps: 'Facile', rest: '-', weight: '-' },
              { name: 'Étirements', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Salade composée', 'Fruits frais', 'Eau']
          },
          {
            day: 'Jeudi',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibrés', 'Hydratation', 'Protéines']
          },
          {
            day: 'Vendredi',
            activity: 'Circuit léger',
            duration: '30 min',
            icon: '⚡',
            exercises: [
              { name: 'Jumping jacks', sets: '2x15', reps: '15 reps', rest: '45 sec', weight: 'Poids du corps' },
              { name: 'Fentes', sets: '2x12', reps: '12 reps', rest: '60 sec', weight: 'Poids du corps' },
              { name: 'Planche', sets: '2x15', reps: '15 secondes', rest: '45 sec', weight: 'Poids du corps' },
              { name: 'Crunchs', sets: '2x15', reps: '15 reps', rest: '45 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poisson blanc + Légumes', 'Riz + Courge', 'Fruits']
          },
          {
            day: 'Samedi',
            activity: 'Activité plaisir',
            duration: '20 min',
            icon: '🚴',
            exercises: [
              { name: 'Marche ou vélo très facile', sets: '20 min', reps: 'Très facile', rest: '-', weight: '-' },
            ],
            meals: ['Repas léger', 'Fruits', 'Eau']
          },
          {
            day: 'Dimanche',
            activity: 'Repos complet',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation', 'Sommeil']
          },
        ];
      } else if (level === 'intermédiaire') {
        return [
          {
            day: 'Lundi',
            activity: 'Haut du corps',
            duration: '40 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché haltères', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '25kg' },
              { name: 'Tirage horizontal', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '50kg' },
              { name: 'Élévations latérales', sets: '3x12', reps: '12 reps', rest: '60 sec', weight: '15kg' },
              { name: 'Curl haltères', sets: '2x12', reps: '12 reps', rest: '60 sec', weight: '15kg' },
            ],
            meals: ['Poulet + Riz complet', 'Œufs + Avocado', 'Saumon + Légumes']
          },
          {
            day: 'Mardi',
            activity: 'Cardio modéré',
            duration: '30 min',
            icon: '🏃',
            exercises: [
              { name: 'Tapis roulant ou vélo', sets: '30 min', reps: 'Intensité modérée', rest: '-', weight: '-' },
            ],
            meals: ['Blanc poulet', 'Riz brun', 'Légumes']
          },
          {
            day: 'Mercredi',
            activity: 'Bas du corps',
            duration: '40 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat haltères', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '30kg' },
              { name: 'Leg Press', sets: '3x12', reps: '12-15 reps', rest: '90 sec', weight: '100kg' },
              { name: 'Fentes alternées', sets: '3x10', reps: '10 reps', rest: '60 sec', weight: '20kg' },
              { name: 'Extension jambes', sets: '2x15', reps: '15 reps', rest: '60 sec', weight: '40kg' },
            ],
            meals: ['Steak maigre', 'Patate douce', 'Brocoli']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif',
            duration: '20 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga ou étirements', sets: '20 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Œufs + Toast', 'Yaourt + Granola', 'Fruits']
          },
          {
            day: 'Vendredi',
            activity: 'FullBody léger',
            duration: '40 min',
            icon: '⚡',
            exercises: [
              { name: 'Squats + Développé', sets: '3x10', reps: '10 reps (alternance)', rest: '90 sec', weight: '25kg' },
              { name: 'Fentes + Tirage', sets: '3x10', reps: '10 reps (alternance)', rest: '90 sec', weight: '20kg' },
              { name: 'Planche', sets: '3x30', reps: '30 secondes', rest: '60 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poisson + Riz', 'Poulet + Légumes', 'Œufs + Pâtes']
          },
          {
            day: 'Samedi',
            activity: 'Cardio facile',
            duration: '25 min',
            icon: '🚴',
            exercises: [
              { name: 'Marche ou vélo facile', sets: '25 min', reps: 'Facile', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibré', 'Fruits', 'Légumes']
          },
          {
            day: 'Dimanche',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation', 'Sommeil']
          },
        ];
      } else {
        return [
          {
            day: 'Lundi',
            activity: 'Haut du corps',
            duration: '45 min',
            icon: '💪',
            exercises: [
              { name: 'Développé couché', sets: '4x8', reps: '8-10 reps', rest: '90 sec', weight: '60kg' },
              { name: 'Tirage horizontal', sets: '4x8', reps: '8-10 reps', rest: '90 sec', weight: '60kg' },
              { name: 'Développé épaules', sets: '3x10', reps: '10-12 reps', rest: '60 sec', weight: '30kg' },
              { name: 'Curl barre', sets: '3x10', reps: '10-12 reps', rest: '60 sec', weight: '30kg' },
            ],
            meals: ['Poulet grillé + Riz', 'Œufs + Avocado', 'Saumon + Légumes']
          },
          {
            day: 'Mardi',
            activity: 'Cardio modéré à intense',
            duration: '35 min',
            icon: '🏃',
            exercises: [
              { name: 'Échauffement', sets: '5 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Cardio intensité moyenne', sets: '25 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Cool down', sets: '5 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Blanc poulet', 'Riz complet', 'Fruits frais']
          },
          {
            day: 'Mercredi',
            activity: 'Bas du corps',
            duration: '45 min',
            icon: '🦵',
            exercises: [
              { name: 'Squat', sets: '4x8', reps: '8-10 reps', rest: '90 sec', weight: '80kg' },
              { name: 'Leg Press', sets: '3x10', reps: '10-12 reps', rest: '90 sec', weight: '120kg' },
              { name: 'Leg Curl', sets: '3x10', reps: '10-12 reps', rest: '60 sec', weight: '50kg' },
              { name: 'Mollets', sets: '3x15', reps: '15 reps', rest: '60 sec', weight: '60kg' },
            ],
            meals: ['Steak + Patate douce', 'Poulet + Riz', 'Poisson blanc + Légumes']
          },
          {
            day: 'Jeudi',
            activity: 'Repos actif + Mobilité',
            duration: '25 min',
            icon: '🧘',
            exercises: [
              { name: 'Yoga dynamique', sets: '15 min', reps: '-', rest: '-', weight: '-' },
              { name: 'Mobilité articulations', sets: '10 min', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Œufs + Toast complet', 'Yaourt grec', 'Fruits']
          },
          {
            day: 'Vendredi',
            activity: 'FullBody équilibré',
            duration: '45 min',
            icon: '⚡',
            exercises: [
              { name: 'Squat + Développé', sets: '3x8', reps: '8-10 reps (alternance)', rest: '90 sec', weight: '50kg' },
              { name: 'Tirage + Fentes', sets: '3x8', reps: '8-10 reps (alternance)', rest: '90 sec', weight: '40kg' },
              { name: 'Tractions', sets: '3x8', reps: '8 reps', rest: '90 sec', weight: 'Poids du corps' },
              { name: 'Crunchs', sets: '3x12', reps: '12 reps', rest: '60 sec', weight: 'Poids du corps' },
            ],
            meals: ['Poisson + Riz blanc', 'Poulet + Pâtes', 'Œufs + Riz complet']
          },
          {
            day: 'Samedi',
            activity: 'Cardio modéré',
            duration: '30 min',
            icon: '🚴',
            exercises: [
              { name: 'Vélo ou marche rapide', sets: '30 min', reps: 'Intensité modérée', rest: '-', weight: '-' },
            ],
            meals: ['Repas équilibré', 'Fruits', 'Légumes']
          },
          {
            day: 'Dimanche',
            activity: 'Repos',
            duration: '0 min',
            icon: '😴',
            exercises: [
              { name: 'Repos', sets: '-', reps: '-', rest: '-', weight: '-' },
            ],
            meals: ['Repas sain', 'Hydratation', 'Sommeil']
          },
        ];
      }
    }
  };

  const routines = getRoutinesForProfile();

  return (
    <div className="view-container" style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, rgba(31, 31, 46, 0.9) 0%, rgba(20, 20, 35, 0.9) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 252, 0.95) 100%)',
      color: isDarkMode ? '#ffffff' : '#000000',
      boxShadow: isDarkMode
        ? '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 60px rgba(102, 126, 234, 0.15), inset 0 1px 0 rgba(102, 126, 234, 0.1)'
        : '0 25px 70px rgba(102, 126, 234, 0.12), 0 0 60px rgba(102, 126, 234, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
      minHeight: '100vh'
    }}>
      <div className="view-header" style={{
        borderBottom: isDarkMode ? '2px solid #444' : '2px solid #f0f0f0'
      }}>
        <h1 style={{
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>📅 Routine Hebdomadaire</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>
      <div className="view-content">
        <h3 style={{ 
          marginBottom: '1.5rem', 
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>Votre planning de la semaine</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {routines.map((routine, index) => (
            <div 
              key={index}
              style={{
                background: isDarkMode
                  ? 'linear-gradient(135deg, #1f1f2e 0%, #16213e 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '15px',
                boxShadow: isDarkMode
                  ? '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(102, 126, 234, 0.1)'
                  : '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)',
                border: isDarkMode
                  ? '1px solid rgba(102, 126, 234, 0.2)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(102, 126, 234, 0.2)'
                  : '0 20px 50px rgba(102, 126, 234, 0.4), 0 0 30px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(102, 126, 234, 0.1)'
                  : '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)';
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedDay(selectedDay === index ? null : index)}
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    {routine.day}
                  </h4>
                  <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                    {routine.activity}
                  </p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.3rem' }}>
                    ⏱️ {routine.duration}
                  </p>
                </div>
                <div style={{ fontSize: '3rem', marginLeft: '1rem' }}>
                  {routine.icon}
                </div>
              </div>

              {selectedDay === index && (
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
                  <h5 style={{ marginBottom: '1rem', color: '#fff' }}>🏋️ Exercices:</h5>
                  <div style={{ display: 'grid', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    {routine.exercises.map((exercise, idx) => (
                      <div key={idx} style={{
                        background: 'rgba(0,0,0,0.2)',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        opacity: 0.95
                      }}>
                        <strong>{exercise.name}</strong><br/>
                        {exercise.sets && <span>• Séries: {exercise.sets}</span>} <br/>
                        {exercise.reps && <span>• Reps: {exercise.reps}</span>} <br/>
                        {exercise.weight && <span>• Poids: {exercise.weight}</span>} <br/>
                        {exercise.rest !== '-' && <span>• Repos: {exercise.rest}</span>}
                      </div>
                    ))}
                  </div>
                  
                  <h5 style={{ marginBottom: '1rem', color: '#fff' }}>🍽️ Repas recommandés:</h5>
                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {routine.meals.map((meal, idx) => (
                      <div key={idx} style={{
                        background: 'rgba(102, 126, 234, 0.3)',
                        padding: '0.6rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(102, 126, 234, 0.5)'
                      }}>
                        {meal}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '2rem',
          padding: '2rem',
          background: isDarkMode 
            ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(240, 84, 84, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 84, 84, 0.05) 100%)',
          border: isDarkMode 
            ? '1px solid rgba(102, 126, 234, 0.3)' 
            : '1px solid rgba(102, 126, 234, 0.2)',
          borderRadius: '12px',
          textAlign: 'center',
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>
          <h4 style={{ 
            color: isDarkMode ? '#667eea' : '#667eea', 
            marginBottom: '0.5rem',
            marginTop: '0'
          }}>💡 Conseil du jour</h4>
          <p style={{ 
            color: isDarkMode ? '#ccc' : '#333',
            margin: '0',
            lineHeight: '1.6'
          }}>
            La régularité est la clé du succès. Respectez votre planning et vous verrez des résultats !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Routine;
