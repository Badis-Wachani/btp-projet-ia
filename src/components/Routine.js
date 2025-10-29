import React, { useState } from 'react';

function Routine({ onBack, isDarkMode }) {
  const [routines] = useState([
    { day: 'Lundi', activity: 'Entraînement du haut du corps', duration: '45 min', icon: '💪' },
    { day: 'Mercredi', activity: 'Cardio et abdos', duration: '30 min', icon: '🏃' },
    { day: 'Vendredi', activity: 'Entraînement du bas du corps', duration: '45 min', icon: '🦵' },
    { day: 'Samedi', activity: 'Yoga et stretching', duration: '30 min', icon: '🧘' },
  ]);

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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
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
                <div style={{ fontSize: '3rem' }}>
                  {routine.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#f0f0f0',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>💡 Conseil du jour</h4>
          <p style={{ color: '#666' }}>
            La régularité est la clé du succès. Respectez votre planning et vous verrez des résultats !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Routine;
