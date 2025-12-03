import React, { useState } from 'react';

function TrainingMode({ onBack, isDarkMode, currentUser }) {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exerciseDatabase = {
    'PERTE_DE_POIDS': {
      'Débutant': [
        { id: 1, name: 'Marche rapide', sets: 3, reps: '20 min', difficulty: 'Facile', muscle: 'Cardio', description: 'Marchez rapidement pour augmenter votre fréquence cardiaque', tips: 'Gardez un rythme constant, bras en mouvement' },
        { id: 2, name: 'Vélo stationnaire', sets: 3, reps: '15 min', difficulty: 'Facile', muscle: 'Cardio', description: 'Exercice cardiovasculaire low-impact', tips: 'Ajustez la résistance graduellement' },
        { id: 3, name: 'Squats légers', sets: 2, reps: 12, difficulty: 'Moyen', muscle: 'Jambes', description: 'Exercice pour les jambes et les fessiers', tips: 'Gardez le dos droit, genoux alignés avec les pieds' },
        { id: 4, name: 'Pompes murales', sets: 2, reps: 15, difficulty: 'Facile', muscle: 'Poitrine/Bras', description: 'Version légère des pompes', tips: 'Mains sur le mur, corps en ligne droite' },
        { id: 5, name: 'Fentes avant', sets: 2, reps: 10, difficulty: 'Moyen', muscle: 'Jambes', description: 'Travail des jambes et équilibre', tips: 'Un pied devant, genoux à 90°' },
        { id: 6, name: 'Planche isométrique', sets: 3, reps: '20-30 sec', difficulty: 'Moyen', muscle: 'Core', description: 'Renforcement de l\'abdomen', tips: 'Gardez le corps en ligne droite' },
        { id: 7, name: 'Elliptique', sets: 3, reps: '20 min', difficulty: 'Facile', muscle: 'Cardio', description: 'Cardio sans impact', tips: 'Augmentez progressivement la résistance' },
        { id: 8, name: 'Natation', sets: 2, reps: '20 min', difficulty: 'Moyen', muscle: 'Corps complet', description: 'Cardio complet', tips: 'Rythme régulier et constant' }
      ],
      'Intermédiaire': [
        { id: 9, name: 'Course à pied', sets: 3, reps: '30 min', difficulty: 'Moyen', muscle: 'Cardio', description: 'Entraînement cardio complet', tips: 'Commencez lentement, augmentez progressivement' },
        { id: 10, name: 'Burpees', sets: 3, reps: 10, difficulty: 'Difficile', muscle: 'Corps complet', description: 'Exercice complet très efficace pour la perte de poids', tips: 'Respirez régulièrement, reposez-vous si nécessaire' },
        { id: 11, name: 'Jumping jacks', sets: 3, reps: 20, difficulty: 'Moyen', muscle: 'Cardio', description: 'Exercice cardiovasculaire classique', tips: 'Maintenir un rythme rapide et constant' },
        { id: 12, name: 'Mountain climbers', sets: 3, reps: 20, difficulty: 'Moyen', muscle: 'Core/Cardio', description: 'Cardio + renforcement du core', tips: 'Alternez rapidement les jambes' },
        { id: 13, name: 'Corde à sauter', sets: 3, reps: '1 min', difficulty: 'Moyen', muscle: 'Cardio', description: 'Excellent pour la cardiovasculaire', tips: 'Sauts courts, rapides et contrôlés' },
        { id: 14, name: 'Pompes classiques', sets: 3, reps: 12, difficulty: 'Moyen', muscle: 'Poitrine/Bras', description: 'Exercice classique pour le haut du corps', tips: 'Corps en ligne droite, coudes près du corps' },
        { id: 15, name: 'Squats réguliers', sets: 3, reps: 15, difficulty: 'Moyen', muscle: 'Jambes', description: 'Exercice efficace pour brûler des calories', tips: 'Mouvement contrôlé, pas de triche' },
        { id: 16, name: 'Fentes arrière', sets: 3, reps: 12, difficulty: 'Moyen', muscle: 'Jambes', description: 'Renforcement des jambes et fessiers', tips: 'Un genou vers le sol, l\'autre jambe tendue' }
      ],
      'Avancé': [
        { id: 17, name: 'HIIT (30/30)', sets: 5, reps: '30 sec on/30 sec off', difficulty: 'Très difficile', muscle: 'Corps complet', description: 'Entraînement par intervalles haute intensité', tips: 'Donnez votre maximum pendant les 30 sec actives' },
        { id: 18, name: 'Sprints', sets: 5, reps: '100m', difficulty: 'Très difficile', muscle: 'Cardio/Jambes', description: 'Sprints maximums pour brûler les calories', tips: 'Reposez-vous complètement entre les sprints' },
        { id: 19, name: 'Circuit training', sets: 4, reps: '15 exercices', difficulty: 'Très difficile', muscle: 'Corps complet', description: 'Alternance rapide d\'exercices', tips: 'Minimal de repos entre les exercices' },
        { id: 20, name: 'Pompes diamant', sets: 3, reps: 10, difficulty: 'Difficile', muscle: 'Triceps', description: 'Variation avancée des pompes', tips: 'Mains rapprochées en forme de diamant' },
        { id: 21, name: 'Tractions', sets: 3, reps: 8, difficulty: 'Difficile', muscle: 'Dos/Bras', description: 'Excellent pour le haut du corps', tips: 'Grip surpronation, menton au-dessus de la barre' },
        { id: 22, name: 'Rowing machine', sets: 3, reps: '20 min', difficulty: 'Difficile', muscle: 'Corps complet', description: 'Cardio + renforcement complet', tips: 'Maintenez une cadence régulière' },
        { id: 23, name: 'Battle ropes', sets: 4, reps: '30 sec', difficulty: 'Très difficile', muscle: 'Corps complet', description: 'Cardio intensif avec cordes', tips: 'Mouvements alternés et rapides' },
        { id: 24, name: 'Box jumps', sets: 4, reps: 10, difficulty: 'Très difficile', muscle: 'Jambes/Cardio', description: 'Explosivité et cardio', tips: 'Atterrissage souple, contrôlé' }
      ]
    },
    'PRISE_DE_MASSE': {
      'Débutant': [
        { id: 25, name: 'Développé couché (haltères)', sets: 3, reps: 8, difficulty: 'Moyen', muscle: 'Poitrine', description: 'Exercice fondamental pour la poitrine', tips: 'Poids léger, forme parfaite avant tout' },
        { id: 26, name: 'Squats avec barre', sets: 3, reps: 8, difficulty: 'Moyen', muscle: 'Jambes', description: 'Exercice roi pour les jambes', tips: 'Fesse jusqu\'en bas, dos droit' },
        { id: 27, name: 'Développé couché barre', sets: 3, reps: 10, difficulty: 'Moyen', muscle: 'Poitrine', description: 'Travail de force de la poitrine', tips: 'Écartement des mains 1,5x largeur d\'épaule' },
        { id: 28, name: 'Tirage horizontal', sets: 3, reps: 8, difficulty: 'Moyen', muscle: 'Dos', description: 'Renforcement du dos', tips: 'Tirages puissants vers vous' },
        { id: 29, name: 'Flexion des biceps', sets: 3, reps: 10, difficulty: 'Facile', muscle: 'Biceps', description: 'Isolation des biceps', tips: 'Mouvement contrôlé, sans élan' },
        { id: 30, name: 'Extension triceps', sets: 3, reps: 12, difficulty: 'Facile', muscle: 'Triceps', description: 'Isolation des triceps', tips: 'Bras immobilisé, extension complète' },
        { id: 31, name: 'Écarté haltères', sets: 3, reps: 12, difficulty: 'Moyen', muscle: 'Poitrine', description: 'Isolation et étirement de la poitrine', tips: 'Arc de mouvement large' },
        { id: 32, name: 'Élévation latérale', sets: 3, reps: 12, difficulty: 'Facile', muscle: 'Épaules', description: 'Renforcement des épaules', tips: 'Coudes légèrement fléchis' }
      ],
      'Intermédiaire': [
        { id: 33, name: 'Soulevé de terre', sets: 4, reps: 6, difficulty: 'Difficile', muscle: 'Corps complet', description: 'Exercice fondamental très puissant', tips: 'Dos droit, poids proche du corps' },
        { id: 34, name: 'Développé militaire', sets: 4, reps: 6, difficulty: 'Difficile', muscle: 'Épaules', description: 'Renforcement massif des épaules', tips: 'Position debout stable, poitrine bombée' },
        { id: 35, name: 'Tirage nuque', sets: 3, reps: 8, difficulty: 'Moyen', muscle: 'Dos/Lats', description: 'Élargisseur du dos', tips: 'Tire la barre vers la poitrine' },
        { id: 36, name: 'Dips', sets: 3, reps: 8, difficulty: 'Difficile', muscle: 'Triceps/Poitrine', description: 'Exercice compound puissant', tips: 'Corps légèrement penché vers l\'avant' },
        { id: 37, name: 'Presse à jambes', sets: 4, reps: 8, difficulty: 'Moyen', muscle: 'Jambes', description: 'Exercice de force pour les jambes', tips: 'Amplitude complète' },
        { id: 38, name: 'Curls haltères alternés', sets: 3, reps: 10, difficulty: 'Moyen', muscle: 'Biceps', description: 'Travail des biceps alterné', tips: 'Contrôle total du mouvement' },
        { id: 39, name: 'Leg press', sets: 4, reps: 6, difficulty: 'Difficile', muscle: 'Jambes', description: 'Force massive des jambes', tips: 'Commencez avec poids modérés' },
        { id: 40, name: 'Rowing machine', sets: 3, reps: 8, difficulty: 'Moyen', muscle: 'Dos', description: 'Épaisseur du dos', tips: 'Mouvements puissants et contrôlés' }
      ],
      'Avancé': [
        { id: 41, name: 'Soulevé de terre lourd', sets: 5, reps: 3, difficulty: 'Très difficile', muscle: 'Corps complet', description: 'Force maximale', tips: 'Repos complet entre les séries' },
        { id: 42, name: 'Développé couché lourd', sets: 5, reps: 3, difficulty: 'Très difficile', muscle: 'Poitrine', description: 'Force maximale à la poitrine', tips: 'Spotters recommandés' },
        { id: 43, name: 'Squat lourd', sets: 5, reps: 3, difficulty: 'Très difficile', muscle: 'Jambes', description: 'Squat avec poids maximum', tips: 'Technique impeccable' },
        { id: 44, name: 'Traction pondérée', sets: 4, reps: 5, difficulty: 'Très difficile', muscle: 'Dos/Bras', description: 'Traction avec poids supplémentaire', tips: 'Poids attaché à la ceinture' },
        { id: 45, name: 'Dips pondérés', sets: 4, reps: 6, difficulty: 'Très difficile', muscle: 'Triceps', description: 'Dips avec poids additionnel', tips: 'Amplitude complète' },
        { id: 46, name: 'Row t-bar', sets: 4, reps: 6, difficulty: 'Difficile', muscle: 'Dos', description: 'Exercice d\'épaisseur dorsale', tips: 'Poitrine sur le repose-poitrine' },
        { id: 47, name: 'Développé couché incliné lourd', sets: 4, reps: 4, difficulty: 'Très difficile', muscle: 'Poitrine/Épaules', description: 'Force du haut de la poitrine', tips: 'Angle 45-50 degrés' },
        { id: 48, name: 'Squat au front', sets: 4, reps: 5, difficulty: 'Très difficile', muscle: 'Jambes', description: 'Variante avancée du squat', tips: 'Barre sur les clavicules' }
      ]
    },
    'REMISE_EN_FORME': {
      'Débutant': [
        { id: 49, name: 'Marche quotidienne', sets: 1, reps: '30 min', difficulty: 'Facile', muscle: 'Cardio', description: 'Activité douce pour tous les jours', tips: 'Marche régulière et détendue' },
        { id: 50, name: 'Yoga débutant', sets: 1, reps: '30 min', difficulty: 'Facile', muscle: 'Flexibilité', description: 'Améliore la flexibilité et la respiration', tips: 'Respiration profonde durant l\'exercice' },
        { id: 51, name: 'Étirements statiques', sets: 3, reps: '30 sec chaque', difficulty: 'Facile', muscle: 'Flexibilité', description: 'Améliore l\'amplitude articulaire', tips: 'Sans douleur, respiration lente' },
        { id: 52, name: 'Abdos légers', sets: 2, reps: 15, difficulty: 'Facile', muscle: 'Core', description: 'Renforcement abdominal doux', tips: 'Mouvements lents et contrôlés' },
        { id: 53, name: 'Natation', sets: 1, reps: '20 min', difficulty: 'Facile', muscle: 'Corps complet', description: 'Cardio et résistance', tips: 'Rythme relaxant' },
        { id: 54, name: 'Vélo léger', sets: 1, reps: '30 min', difficulty: 'Facile', muscle: 'Jambes/Cardio', description: 'Activité cardio douce', tips: 'Résistance faible, cadence régulière' },
        { id: 55, name: 'Tai Chi', sets: 1, reps: '30 min', difficulty: 'Facile', muscle: 'Équilibre/Flexibilité', description: 'Art martial méditatif', tips: 'Mouvements fluides et lents' },
        { id: 56, name: 'Marche en nature', sets: 1, reps: '45 min', difficulty: 'Facile', muscle: 'Cardio', description: 'Activité plein air relaxante', tips: 'À votre rythme' }
      ],
      'Intermédiaire': [
        { id: 57, name: 'Pilates', sets: 3, reps: '15 mouvements', difficulty: 'Moyen', muscle: 'Core', description: 'Renforcement profond du core', tips: 'Respiration coordonnée aux mouvements' },
        { id: 58, name: 'Circuit fitness', sets: 3, reps: '10 exercices', difficulty: 'Moyen', muscle: 'Corps complet', description: 'Entraînement complet et varié', tips: 'Peu de repos entre les exercices' },
        { id: 59, name: 'Elliptique', sets: 2, reps: '30 min', difficulty: 'Moyen', muscle: 'Cardio', description: 'Cardio sans impact', tips: 'Augmentez progressivement la résistance' },
        { id: 60, name: 'Pompes', sets: 3, reps: 12, difficulty: 'Moyen', muscle: 'Haut du corps', description: 'Renforcement général', tips: 'Corps en ligne droite' },
        { id: 61, name: 'Lunges alternées', sets: 3, reps: 10, difficulty: 'Moyen', muscle: 'Jambes', description: 'Renforcement des jambes', tips: 'Genoux à 90°' },
        { id: 62, name: 'Planche', sets: 3, reps: '45 sec', difficulty: 'Moyen', muscle: 'Core', description: 'Renforcement abdominal', tips: 'Pas d\'affaissement du bassin' },
        { id: 63, name: 'Boxe fitness', sets: 3, reps: '20 min', difficulty: 'Moyen', muscle: 'Corps complet', description: 'Cardio énergique', tips: 'Détendez-vous entre les séries' },
        { id: 64, name: 'Danse fitness', sets: 1, reps: '40 min', difficulty: 'Moyen', muscle: 'Corps complet', description: 'Activité ludique et cardio', tips: 'Suivez le rythme' }
      ],
      'Avancé': [
        { id: 65, name: 'Yoga avancé', sets: 1, reps: '60 min', difficulty: 'Difficile', muscle: 'Flexibilité/Force', description: 'Yoga complet et exigeant', tips: 'Poses complexes avec équilibre' },
        { id: 66, name: 'Entraînement croisé', sets: 4, reps: '15 exercices', difficulty: 'Difficile', muscle: 'Corps complet', description: 'Combinaison de plusieurs disciplines', tips: 'Variété constante des mouvements' },
        { id: 67, name: 'Course avec intervalles', sets: 6, reps: '3 min rapide / 1 min lent', difficulty: 'Difficile', muscle: 'Cardio', description: 'Endurance et vitesse', tips: 'Écoutez votre corps' },
        { id: 68, name: 'Tractions', sets: 3, reps: 10, difficulty: 'Difficile', muscle: 'Dos/Bras', description: 'Exercice de force doré', tips: 'Menton au-dessus de la barre' },
        { id: 69, name: 'Squats pistol', sets: 3, reps: 6, difficulty: 'Très difficile', muscle: 'Jambes/Équilibre', description: 'Squat sur une jambe avancé', tips: 'Besoin d\'une grande flexibilité' },
        { id: 70, name: 'Pompes à une main', sets: 3, reps: 5, difficulty: 'Très difficile', muscle: 'Haut du corps', description: 'Pompe extrême', tips: 'Technique parfaite requise' },
        { id: 71, name: 'Escalade', sets: 1, reps: '45 min', difficulty: 'Difficile', muscle: 'Corps complet', description: 'Sport complet et ludique', tips: 'Équipement de sécurité requis' },
        { id: 72, name: 'Trail running', sets: 1, reps: '60 min', difficulty: 'Difficile', muscle: 'Cardio/Jambes', description: 'Course nature exigeante', tips: 'Terrain varié et intéressant' }
      ]
    }
  };

  const getObjectiveLabel = (obj) => obj.replace(/_/g, ' ');

  const objective = currentUser?.profile?.objective || 'PERTE_DE_POIDS';
  const program = currentUser?.profile?.recommendedProgram || 'Débutant';
  const exercises = exerciseDatabase[objective]?.[program] || [];

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
        }}>🏋️ {getObjectiveLabel(objective).toUpperCase()} - {program}</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>
      <div className="view-content">
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px', color: isDarkMode ? '#ccc' : '#666' }}>
            {exercises.length} exercices personnalisés pour votre objectif
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {exercises.map(exercise => (
            <div 
              key={exercise.id} 
              onClick={() => setSelectedExercise(exercise)}
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.08) 100%)',
                border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                borderRadius: '12px',
                padding: '15px 20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 10px 30px rgba(102, 126, 234, 0.2)'
                  : '0 10px 30px rgba(102, 126, 234, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#667eea' }}>
                    {exercise.name}
                  </h3>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: isDarkMode ? '#aaa' : '#888' }}>
                    {exercise.sets} séries x {exercise.reps} | {exercise.muscle}
                  </p>
                </div>
                <span style={{ 
                  background: exercise.difficulty === 'Facile' ? '#4ade80' : exercise.difficulty === 'Moyen' ? '#fbbf24' : exercise.difficulty === 'Difficile' ? '#f97316' : '#ef4444',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedExercise && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }} onClick={() => setSelectedExercise(null)}>
            <div style={{
              background: isDarkMode ? '#1a1a2e' : '#ffffff',
              borderRadius: '15px',
              padding: '30px',
              maxWidth: '500px',
              maxHeight: '80vh',
              overflow: 'auto',
              color: isDarkMode ? '#ffffff' : '#000000'
            }} onClick={(e) => e.stopPropagation()}>
              <h2 style={{ marginTop: 0, color: '#667eea' }}>{selectedExercise.name}</h2>
              <p><strong>Difficulté:</strong> {selectedExercise.difficulty}</p>
              <p><strong>Muscle ciblé:</strong> {selectedExercise.muscle}</p>
              <p><strong>Série/Reps:</strong> {selectedExercise.sets} x {selectedExercise.reps}</p>
              <p><strong>Description:</strong> {selectedExercise.description}</p>
              <p><strong>Conseils:</strong> {selectedExercise.tips}</p>
              <button
                onClick={() => setSelectedExercise(null)}
                style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '20px'
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrainingMode;
