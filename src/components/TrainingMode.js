import React, { useState } from 'react';

function TrainingMode({ onBack, isDarkMode }) {
  const [exercises, setExercises] = useState([
    { id: 1, name: 'Pompes', sets: 3, reps: 15, completed: false },
    { id: 2, name: 'Squats', sets: 4, reps: 20, completed: false },
    { id: 3, name: 'Tractions', sets: 3, reps: 10, completed: false },
    { id: 4, name: 'Pompe diamant', sets: 3, reps: 12, completed: false },
    { id: 5, name: 'Squad élastique', sets: 4, reps: 15, completed: false },
    { id: 6, name: 'Traction à poids', sets: 3, reps: 8, completed: false },
    { id: 7, name: 'Corde à sauter', sets: 3, reps: 60, completed: false },
  ]);

  const toggleComplete = (id) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, completed: !ex.completed } : ex
    ));
  };

  return (
    <div className="view-container" style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, rgba(31, 31, 46, 0.9) 0%, rgba(20, 20, 35, 0.9) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 252, 0.95) 100%)',
      color: isDarkMode ? '#ffffff' : '#000000',
      boxShadow: isDarkMode
        ? '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 60px rgba(102, 126, 234, 0.15), inset 0 1px 0 rgba(102, 126, 234, 0.1)'
        : '0 25px 70px rgba(102, 126, 234, 0.12), 0 0 60px rgba(102, 126, 234, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
    }}>
      <div className="view-header" style={{
        borderBottom: isDarkMode ? '2px solid #444' : '2px solid #f0f0f0'
      }}>
        <h1 style={{
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>🏋️ Mode d'Entraînement</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>
      <div className="view-content">
        <h3 style={{ 
          marginBottom: '1.5rem', 
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>Vos exercices du jour</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {exercises.map(exercise => (
            <div 
              key={exercise.id} 
              style={{
                background: exercise.completed 
                  ? 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)'
                  : (isDarkMode 
                    ? 'linear-gradient(135deg, #1f1f2e 0%, #2d2d44 100%)'
                    : 'linear-gradient(135deg, #f5f7fa 0%, #e3f2fd 100%)'),
                padding: '1.5rem',
                borderRadius: '10px',
                border: exercise.completed 
                  ? '2px solid #4caf50'
                  : (isDarkMode 
                    ? '2px solid rgba(102, 126, 234, 0.3)'
                    : '2px solid rgba(102, 126, 234, 0.2)'),
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                color: isDarkMode ? '#ffffff' : '#000000',
                boxShadow: exercise.completed
                  ? '0 10px 30px rgba(76, 175, 80, 0.3)'
                  : (isDarkMode
                    ? '0 15px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)'
                    : '0 15px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(102, 126, 234, 0.1)'),
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => toggleComplete(exercise.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ 
                    fontSize: '1.2rem', 
                    marginBottom: '0.5rem',
                    textDecoration: exercise.completed ? 'line-through' : 'none'
                  }}>
                    {exercise.name}
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    {exercise.sets} séries × {exercise.reps} répétitions
                  </p>
                </div>
                <div style={{ fontSize: '2rem' }}>
                  {exercise.completed ? '✅' : '⭕'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingMode;
