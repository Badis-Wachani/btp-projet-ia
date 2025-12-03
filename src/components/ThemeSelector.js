import React, { useState } from 'react';

function ThemeSelector({ onThemeSelect, isDarkMode }) {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const themes = [
    {
      id: 'default',
      name: 'Thème Par Défaut',
      icon: '🎨',
      description: 'Design moderne et classique',
      color: '#667eea'
    }
  ];

  const handleSelect = (themeId) => {
    setSelectedTheme(themeId);
    localStorage.setItem('selectedTheme', themeId);
    onThemeSelect(themeId);
  };

  return (
    <div style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
      overflow: 'auto'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 101
      }}>
        {/* Titre */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#667eea',
          textTransform: 'none',
          letterSpacing: '0px',
          textShadow: 'none'
        }}>
          💪 Habit Tracker Sport
        </h1>

        <p style={{
          fontSize: '1.1rem',
          marginBottom: '40px',
          color: isDarkMode ? '#aaa' : '#666',
          fontWeight: '400',
          textTransform: 'none',
          letterSpacing: '0px'
        }}>
          Choisissez votre Thème
        </p>

        {/* Sélecteur Thème */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 10
        }}>
          {themes.map((theme) => {
            const isSelected = selectedTheme === theme.id;
            const themeColor = theme.color || '#667eea';
            
            return (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme.id)}
                style={{
                  padding: '30px',
                  border: isSelected ? '3px solid' : '2px solid',
                  borderColor: isSelected ? themeColor : (isDarkMode ? '#667eea' : '#ccc'),
                  borderRadius: '15px',
                  background: isSelected
                    ? `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}dd 100%)`
                    : (isDarkMode
                      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%)'
                      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.08) 100%)'),
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isSelected ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: isSelected 
                    ? `0 10px 30px ${themeColor}50`
                    : 'none',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: isSelected 
                    ? '#ffffff'
                    : (isDarkMode ? '#ffffff' : '#000000'),
                  position: 'relative',
                  zIndex: 20,
                  pointerEvents: 'auto'
                }}
                onMouseEnter={(e) => {
                  if (isSelected) return;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 8px 20px ${themeColor}40`;
                }}
                onMouseLeave={(e) => {
                  if (isSelected) return;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '15px',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {theme.icon}
                </div>

                {/* Nom du thème */}
                <h2 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: isSelected 
                    ? '#ffffff'
                    : (isDarkMode ? '#ffffff' : '#000000'),
                  textTransform: 'none',
                  letterSpacing: '0px'
                }}>
                  {theme.name}
                </h2>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: isSelected 
                    ? 'rgba(255, 255, 255, 0.9)'
                    : (isDarkMode ? '#aaa' : '#666'),
                  fontWeight: isSelected ? '700' : '400',
                  margin: '0'
                }}>
                  {theme.description}
                </p>

                {/* Checkmark */}
                {isSelected && (
                  <div style={{
                    marginTop: '15px',
                    fontSize: '1.5rem',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}>
                    ✓
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Bouton Continuer */}
        <button
          style={{
            padding: '15px 40px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'none',
            letterSpacing: '0px',
            boxShadow: '0 5px 20px rgba(102, 126, 234, 0.2)',
            border: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.2)';
          }}
        >
          🚀 Continuer
        </button>

        {/* Info */}
        <p style={{
          marginTop: '30px',
          fontSize: '0.85rem',
          color: isDarkMode ? '#888' : '#999',
          fontStyle: 'italic'
        }}>
          Vous pouvez changer de thème à tout moment dans les paramètres
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default ThemeSelector;
