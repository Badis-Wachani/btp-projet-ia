import React, { useState } from 'react';
import TRAINING_PROGRAMS from './trainingPrograms';

function ProgramValidator({ user, isDarkMode, onProgramComplete }) {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [validatedProgram, setValidatedProgram] = useState(null);
  const [view, setView] = useState('list');
  const [selectedExercises, setSelectedExercises] = useState({});
  const [editMode, setEditMode] = useState(false);

  const userProfile = user.profile || {};
  const bodyParts = userProfile.bodyParts || [];
  const level = userProfile.level || 'beginner';
  const objective = userProfile.objective || 'fit';

  const generatePersonalProgram = () => {
    const program = {
      name: `Programme Personnalisé - ${TRAINING_PROGRAMS.objectives[objective]?.name}`,
      objective,
      level,
      targetMuscles: bodyParts,
      exercises: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      weeklyFrequency: bodyParts.length <= 2 ? 3 : bodyParts.length <= 4 ? 4 : 5
    };

    bodyParts.forEach(muscle => {
      if (TRAINING_PROGRAMS.exercises[muscle]) {
        program.exercises[muscle] = TRAINING_PROGRAMS.exercises[muscle][level];
      }
    });

    return program;
  };

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
    setView('preview');
    setSelectedExercises({});
  };

  const handleToggleExercise = (muscle, exerciseId) => {
    setSelectedExercises(prev => {
      const muscleExercises = prev[muscle] || [];
      const updated = muscleExercises.includes(exerciseId)
        ? muscleExercises.filter(id => id !== exerciseId)
        : [...muscleExercises, exerciseId];
      return { ...prev, [muscle]: updated };
    });
  };

  const validateProgram = () => {
    const validated = {
      ...selectedProgram,
      selectedExercises,
      validatedAt: new Date().toISOString(),
      nextUpdateDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    setValidatedProgram(validated);
    setView('validated');
    setEditMode(false);
  };

  const canValidate = () => {
    return Object.values(selectedExercises).some(arr => arr.length > 0);
  };

  const startEditProgram = () => {
    setEditMode(true);
    setView('preview');
    setSelectedExercises(validatedProgram.selectedExercises);
  };

  const containerStyle = {
    padding: '40px 20px',
    maxWidth: '100%',
    margin: '0',
    minHeight: '100vh',
    background: isDarkMode
      ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
      : 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    color: isDarkMode ? '#ffffff' : '#ffffff'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#ffffff',
    textAlign: 'center',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
  };

  const cardStyle = (selected = false) => ({
    background: selected
      ? 'linear-gradient(135deg, rgba(80,80,80,0.3) 0%, rgba(60,60,60,0.25) 100%)'
      : 'linear-gradient(135deg, rgba(40,40,40,0.6) 0%, rgba(35,35,35,0.5) 100%)',
    border: selected
      ? `3px solid #777777`
      : `2px solid #555555`,
    borderRadius: '12px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: selected
      ? '0 8px 24px rgba(0,0,0,0.5)'
      : '0 4px 12px rgba(0,0,0,0.3)'
  });

  const buttonStyle = (enabled = true, type = 'primary') => ({
    padding: '12px 28px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: enabled ? 'pointer' : 'not-allowed',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(135deg, #555555 0%, #444444 100%)',
    color: '#ffffff',
    opacity: enabled ? 1 : 0.5,
    pointerEvents: enabled ? 'auto' : 'none',
    border: `2px solid #777777`
  });

  const infoBoxStyle = {
    background: isDarkMode
      ? 'rgba(50,50,50,0.4)'
      : 'rgba(50,50,50,0.4)',
    border: `2px solid #444444`,
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '25px',
    color: '#ffffff'
  };

  if (view === 'list') {
    const personalProgram = generatePersonalProgram();
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>🏋️ Votre Programme d'Entraînement</h1>

        <div style={infoBoxStyle}>
          <p style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>
            📊 Profil Personnalisé
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <p style={{ margin: '5px 0', color: '#ffffff' }}>
              Objectif: <strong>{TRAINING_PROGRAMS.objectives[objective]?.name}</strong>
            </p>
            <p style={{ margin: '5px 0', color: '#ffffff' }}>
              Niveau: <strong>{level.charAt(0).toUpperCase() + level.slice(1)}</strong>
            </p>
            <p style={{ margin: '5px 0', color: '#ffffff' }}>
              Muscles: <strong>{bodyParts.length > 0 ? bodyParts.length : 'Aucun'} zone(s)</strong>
            </p>
            <p style={{ margin: '5px 0', color: '#ffffff' }}>
              Fréquence: <strong>{personalProgram.weeklyFrequency} jours/sem</strong>
            </p>
          </div>
        </div>

        <button
          onClick={() => handleSelectProgram(personalProgram)}
          style={{
            ...cardStyle(),
            display: 'block',
            width: '100%',
            textAlign: 'left',
            marginBottom: '20px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px' }}>
            ✅ {personalProgram.name}
          </div>
          <p style={{ margin: '0', color: '#cccccc', fontSize: '0.95rem' }}>
            Cliquez pour sélectionner les exercices et valider le programme
          </p>
        </button>
      </div>
    );
  }

  if (view === 'preview' && selectedProgram) {
    return (
      <div style={containerStyle}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => editMode ? setEditMode(false) : setView('list')}
            style={{
              ...buttonStyle(),
              background: 'linear-gradient(135deg, #555555 0%, #444444 100%)',
              color: '#ffffff'
            }}
          >
            ← Retour
          </button>
          <h1 style={{ ...titleStyle, margin: '0', fontSize: '2rem' }}>📋 {selectedProgram.name}</h1>
          <div style={{ width: '100px' }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {Object.entries(selectedProgram.exercises).map(([muscle, exercises]) => (
            <div key={muscle} style={{
              ...cardStyle(selectedExercises[muscle]?.length > 0),
              padding: '15px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                marginTop: '0',
                marginBottom: '12px',
                color: isDarkMode ? '#ffffff' : '#000000'
              }}>
                {TRAINING_PROGRAMS.exercises[muscle]?.icon} {TRAINING_PROGRAMS.exercises[muscle]?.name}
              </h3>

              <div style={{ marginBottom: '12px' }}>
                <p style={{ fontSize: '0.85rem', color: isDarkMode ? '#999999' : '#666666', margin: '0 0 8px 0' }}>
                  {exercises.length} exercice(s) disponible(s)
                </p>
                {exercises.map(ex => (
                  <label key={ex.id} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '8px',
                    marginBottom: '6px',
                    background: isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDarkMode ? 'rgba(100,100,100,0.15)' : 'rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)';
                  }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedExercises[muscle]?.includes(ex.id) || false}
                      onChange={() => handleToggleExercise(muscle, ex.id)}
                      style={{ marginRight: '8px', marginTop: '2px', cursor: 'pointer' }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0', fontWeight: 'bold', fontSize: '0.92rem', color: isDarkMode ? '#ffffff' : '#000000' }}>
                        {ex.name}
                      </p>
                      <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: isDarkMode ? '#888888' : '#777777' }}>
                        {ex.sets} × {ex.reps || ex.duration} | Repos: {ex.rest}s | {ex.equipment}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <p style={{
                fontSize: '0.8rem',
                color: isDarkMode ? '#999999' : '#666666',
                margin: '0',
                padding: '8px',
                background: isDarkMode ? 'rgba(100,100,100,0.1)' : 'rgba(0,0,0,0.05)',
                borderRadius: '4px'
              }}>
                ✅ {selectedExercises[muscle]?.length || 0} sélectionné(s)
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => editMode ? setEditMode(false) : setView('list')}
            style={buttonStyle(true)}
          >
            ← Retour
          </button>
          <button
            onClick={validateProgram}
            disabled={!canValidate()}
            style={{
              ...buttonStyle(canValidate(), 'success'),
              background: canValidate()
                ? isDarkMode
                  ? 'linear-gradient(135deg, #555555 0%, #444444 100%)'
                  : 'linear-gradient(135deg, #eeeeee 0%, #dddddd 100%)'
                : isDarkMode
                ? 'linear-gradient(135deg, #333333 0%, #222222 100%)'
                : 'linear-gradient(135deg, #cccccc 0%, #bbbbbb 100%)',
              color: isDarkMode ? '#ffffff' : '#000000'
            }}
          >
            ✅ {editMode ? 'Mettre à jour' : 'Valider'} le Programme
          </button>
        </div>
      </div>
    );
  }

  if (view === 'validated' && validatedProgram) {
    return (
      <div style={containerStyle}>
        <div style={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #333333 0%, #222222 100%)'
            : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
          border: `3px solid ${isDarkMode ? '#666666' : '#999999'}`,
          borderRadius: '12px',
          padding: '30px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: isDarkMode ? '#ffffff' : '#000000',
            margin: '0 0 15px 0'
          }}>
            ✅ Programme Validé!
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: isDarkMode ? '#cccccc' : '#333333',
            margin: '0'
          }}>
            Votre programme personnalisé est prêt à être exécuté
          </p>
        </div>

        <div style={{
          ...infoBoxStyle,
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '1.4rem', marginTop: '0', color: isDarkMode ? '#ffffff' : '#000000' }}>
            📅 Détails du Programme
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <p style={{ color: isDarkMode ? '#cccccc' : '#333333', margin: '5px 0' }}>
              <strong>Nom:</strong> {validatedProgram.name}
            </p>
            <p style={{ color: isDarkMode ? '#cccccc' : '#333333', margin: '5px 0' }}>
              <strong>Niveau:</strong> {validatedProgram.level.charAt(0).toUpperCase() + validatedProgram.level.slice(1)}
            </p>
            <p style={{ color: isDarkMode ? '#cccccc' : '#333333', margin: '5px 0' }}>
              <strong>Fréquence:</strong> {validatedProgram.weeklyFrequency} jours/semaine
            </p>
            <p style={{ color: isDarkMode ? '#cccccc' : '#333333', margin: '5px 0' }}>
              <strong>Validé:</strong> {new Date(validatedProgram.validatedAt).toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>

        <div style={infoBoxStyle}>
          <h2 style={{ fontSize: '1.4rem', marginTop: '0', color: isDarkMode ? '#ffffff' : '#000000' }}>
            🏋️ Exercices Sélectionnés
          </h2>
          {Object.entries(validatedProgram.selectedExercises).map(([muscle, exerciseIds]) => (
            exerciseIds.length > 0 && (
              <div key={muscle} style={{ marginBottom: '20px' }}>
                <h3 style={{ color: isDarkMode ? '#ffffff' : '#000000', marginBottom: '10px' }}>
                  {TRAINING_PROGRAMS.exercises[muscle]?.icon} {TRAINING_PROGRAMS.exercises[muscle]?.name}
                </h3>
                <ul style={{ margin: '0', paddingLeft: '20px', color: isDarkMode ? '#cccccc' : '#333333' }}>
                  {validatedProgram.exercises[muscle]?.filter(ex => exerciseIds.includes(ex.id)).map(ex => (
                    <li key={ex.id} style={{ marginBottom: '6px', fontSize: '0.95rem' }}>
                      <strong>{ex.name}</strong> — {ex.sets} × {ex.reps || ex.duration}
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
          <button
            onClick={startEditProgram}
            style={{
              ...buttonStyle(true),
              background: isDarkMode
                ? 'linear-gradient(135deg, #555555 0%, #444444 100%)'
                : 'linear-gradient(135deg, #cccccc 0%, #bbbbbb 100%)',
              color: isDarkMode ? '#ffffff' : '#000000'
            }}
          >
            🔄 Modifier le Programme
          </button>
          <button
            onClick={() => {
              const updatedUser = {
                ...user,
                profile: {
                  ...user.profile,
                  validatedProgram: validatedProgram,
                  programStartedAt: new Date().toISOString()
                }
              };
              localStorage.setItem('currentUser', JSON.stringify(updatedUser));
              onProgramComplete(updatedUser);
            }}
            style={{
              ...buttonStyle(true, 'success'),
              background: 'linear-gradient(135deg, #555555 0%, #444444 100%)',
              color: '#ffffff'
            }}
          >
            ✅ Commencer l'Entraînement
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default ProgramValidator;
