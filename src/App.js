import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import TrainingMode from './components/TrainingMode';
import Routine from './components/Routine';
import CalorieCalculator from './components/CalorieCalculator';
import Videos from './components/Videos';
import History from './components/History';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setActiveView('home');
  };

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    setActiveView('home');
  };

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Chargement...</div>;
  }

  if (!currentUser) {
    return <Auth onAuthSuccess={handleAuthSuccess} isDarkMode={isDarkMode} />;
  }

  const renderContent = () => {
    switch (activeView) {
      case 'training':
        return <TrainingMode onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'routine':
        return <Routine onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'calories':
        return <CalorieCalculator onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'videos':
        return <Videos onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'history':
        return <History onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  const categories = [
    { id: 'training', label: '🏋️ Entraînement', icon: '🏋️' },
    { id: 'routine', label: '📅 Routine', icon: '📅' },
    { id: 'calories', label: '🔥 Calories', icon: '🔥' },
    { id: 'videos', label: '🎬 Vidéos', icon: '🎬' },
    { id: 'history', label: '📜 Histoire', icon: '📜' }
  ];

  return (
    <div className="App" style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
      color: isDarkMode ? '#ffffff' : '#000000'
    }}>
      <nav className="navbar" style={{
        background: isDarkMode 
          ? 'linear-gradient(180deg, rgba(15, 15, 25, 0.95) 0%, rgba(20, 20, 35, 0.9) 100%)'
          : 'linear-gradient(180deg, rgba(248, 249, 252, 0.95) 0%, rgba(240, 243, 249, 0.9) 100%)',
        borderBottom: isDarkMode ? '1px solid rgba(102, 126, 234, 0.2)' : '1px solid rgba(102, 126, 234, 0.15)',
        boxShadow: isDarkMode
          ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 50px rgba(102, 126, 234, 0.1)'
          : '0 8px 32px rgba(102, 126, 234, 0.12), 0 0 50px rgba(102, 126, 234, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <div className="nav-brand" onClick={() => setActiveView('home')} style={{
          color: isDarkMode ? '#ffffff' : '#000000',
          transition: 'color 0.3s ease',
          cursor: 'pointer'
        }}>
          💪 Habit Tracker Sport
        </div>
        <div className="nav-center" style={{
          color: isDarkMode ? '#aaa' : '#666',
          fontSize: '14px',
          flexGrow: 1,
          textAlign: 'center'
        }}>
          Bienvenue, <strong>{currentUser.name}</strong>
        </div>
        <div className="nav-links" style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              background: isDarkMode ? '#667eea' : '#ffa500',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={handleLogout}
            style={{
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
            title="Se déconnecter"
          >
            🚪 Déconnexion
          </button>
        </div>
      </nav>

      {activeView === 'home' ? (
        <main className="main-content" style={{
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
            : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>
          <h1 className="app-title" style={{
            color: isDarkMode ? '#ffffff' : '#000000',
            transition: 'color 0.3s ease'
          }}>Habit Tracker Sport</h1>
          
          <nav className="categories-nav" style={{
            background: isDarkMode 
              ? 'linear-gradient(180deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.7) 100%)'
              : '#ffffff',
            borderBottom: isDarkMode ? '1px solid rgba(102, 126, 234, 0.2)' : '1px solid #ddd',
            boxShadow: isDarkMode
              ? '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(102, 126, 234, 0.1)'
              : 'none'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-nav-item ${activeView === category.id ? 'active' : ''}`}
                onClick={() => setActiveView(category.id)}
                style={{
                  color: isDarkMode ? '#ffffff' : '#000000',
                  background: isDarkMode 
                    ? 'linear-gradient(180deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.7) 100%)'
                    : '#ffffff'
                }}
              >
                {category.label}
              </button>
            ))}
          </nav>

          <div className="categories-grid">
            {categories.map(category => (
              <div 
                key={category.id}
                className="category-card active"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #1f1f2e 0%, #0f3460 100%)'
                    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  color: isDarkMode ? '#ffffff' : '#000000',
                  textAlign: 'center',
                  display: activeView === 'home' ? 'block' : 'none',
                  boxShadow: isDarkMode 
                    ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(102, 126, 234, 0.2)'
                    : '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 30px rgba(102, 126, 234, 0.15)',
                  border: isDarkMode 
                    ? '1px solid rgba(102, 126, 234, 0.3)'
                    : '1px solid rgba(102, 126, 234, 0.2)'
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <h2 style={{ 
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}>
                  {category.label.split(' ').slice(1).join(' ')}
                </h2>
                <p style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                  Cliquez sur l'onglet ci-dessus pour commencer
                </p>
              </div>
            ))}
          </div>
        </main>
      ) : (
        <main className="main-content" style={{
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
            : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>
          <nav className="categories-nav" style={{
            background: isDarkMode 
              ? 'linear-gradient(180deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.7) 100%)'
              : '#ffffff',
            borderBottom: isDarkMode ? '1px solid rgba(102, 126, 234, 0.2)' : '1px solid #ddd',
            boxShadow: isDarkMode
              ? '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(102, 126, 234, 0.1)'
              : 'none'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-nav-item ${activeView === category.id ? 'active' : ''}`}
                onClick={() => setActiveView(category.id)}
                style={{
                  color: isDarkMode ? '#ffffff' : '#000000',
                  background: isDarkMode 
                    ? 'linear-gradient(180deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.7) 100%)'
                    : '#ffffff'
                }}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {renderContent()}
        </main>
      )}
    </div>
  );
}

export default App;
