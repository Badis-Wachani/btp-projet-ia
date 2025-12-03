import React from 'react';

function ThemeToggle({ isDarkMode, onToggleDark }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      position: 'relative',
      zIndex: 1000
    }}>
      <button
        onClick={onToggleDark}
        style={{
          background: 'transparent',
          border: '2px solid currentColor',
          color: isDarkMode ? '#ffd700' : '#667eea',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotate(20deg)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotate(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        title="Mode sombre/clair"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

export default ThemeToggle;
