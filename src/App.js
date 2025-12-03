import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Onboarding from './components/Onboarding';
import ProgramValidator from './components/ProgramValidator';
import Auth from './components/Auth';
import Tutorial from './components/Tutorial';
import TrainingMode from './components/TrainingMode';
import Routine from './components/Routine';
import CalorieCalculator from './components/CalorieCalculator';
import CalorieTracker from './components/CalorieTracker';
import Meals from './components/Meals';
import Videos from './components/Videos';
import History from './components/History';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [activeView, setActiveView] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('selectedTheme') || 'default';
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showProgramValidator, setShowProgramValidator] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState('');

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
    setShowOnboarding(true);
    setActiveView('home');
  };

  const handleTutorialComplete = (updatedUser) => {
    setCurrentUser(updatedUser);
    setShowTutorial(false);
    setActiveView('home');
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('selectedTheme', theme);
  };

  const handleSaveEdit = (field, value) => {
    if (value && !isNaN(value)) {
      const updatedUser = {
        ...currentUser,
        profile: {
          ...currentUser.profile,
          [field]: parseFloat(value)
        }
      };
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setEditingField(null);
      setEditValue('');
    }
  };

  const handleEditObjective = (objective) => {
    const updatedUser = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        objective
      }
    };
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  };

  const handleEditProgram = (recommendedProgram) => {
    const updatedUser = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        recommendedProgram
      }
    };
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  };

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Chargement...</div>;
  }

  if (showLanding && !currentUser) {
    return <Home isDarkMode={isDarkMode} onGetStarted={() => setShowLanding(false)} />;
  }

  if (!currentUser) {
    return <Auth onAuthSuccess={handleAuthSuccess} isDarkMode={isDarkMode} />;
  }

  if (showOnboarding && currentUser) {
    return <Onboarding onComplete={(profile) => {
      const updatedUser = {
        ...currentUser,
        profile: {
          ...currentUser.profile,
          ...profile,
          onboardingCompletedAt: new Date().toISOString()
        }
      };
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setShowOnboarding(false);
      setShowProgramValidator(true);
    }} isDarkMode={isDarkMode} />;
  }

  if (showProgramValidator && currentUser) {
    return <ProgramValidator 
      user={currentUser} 
      isDarkMode={isDarkMode}
      onProgramComplete={(updatedUser) => {
        setCurrentUser(updatedUser);
        setShowProgramValidator(false);
        setActiveView('home');
      }}
    />;
  }

  const categories = [
    { id: 'training', label: '🏋️ Entraînement', icon: '🏋️' },
    { id: 'routine', label: '📅 Routine', icon: '📅' },
    { id: 'calories', label: '🔥 Nutrition', icon: '🔥' },
    { id: 'meals', label: '🍽️ Repas', icon: '🍽️' },
    { id: 'videos', label: '🎬 Vidéos', icon: '🎬' },
    { id: 'history', label: '📜 Histoire', icon: '📜' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'training':
        return <TrainingMode onBack={() => setActiveView('home')} isDarkMode={isDarkMode} currentUser={currentUser} />;
      case 'routine':
        return <Routine onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'calories':
        return <CalorieCalculator onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'calorieTracker':
        return <CalorieTracker onBack={() => setActiveView('calories')} isDarkMode={isDarkMode} currentUser={currentUser} />;
      case 'meals':
        return <Meals onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'videos':
        return <Videos onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      case 'history':
        return <History onBack={() => setActiveView('home')} isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
      color: isDarkMode ? '#ffffff' : '#000000',
      minHeight: '100vh'
    }}>
      <nav style={{
        height: '70px',
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
        padding: '0 20px',
        position: 'relative',
        zIndex: 999
      }}>
        <div className='nav-brand' onClick={() => {
          setShowLanding(true);
          setActiveView('home');
        }} style={{
          color: isDarkMode ? '#ffffff' : '#000000',
          transition: 'color 0.3s ease',
          cursor: 'pointer',
          fontSize: '1.3rem',
          fontWeight: 'bold'
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
          gap: '15px',
          alignItems: 'center'
        }}>
          <ThemeToggle 
            isDarkMode={isDarkMode}
            onToggleDark={() => setIsDarkMode(!isDarkMode)}
          />
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
          color: isDarkMode ? '#ffffff' : '#000000',
          minHeight: 'calc(100vh - 70px)',
          paddingBottom: '60px'
        }}>
          {/* DASHBOARD HERO */}
          <section style={{
            padding: '60px 20px',
            textAlign: 'center',
            background: isDarkMode
              ? 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(102, 126, 234, 0.08) 0%, transparent 100%)',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: isDarkMode ? '1px solid rgba(102, 126, 234, 0.1)' : '1px solid rgba(102, 126, 234, 0.1)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-30%',
              right: '-15%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#ffffff',
                textShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
              }}>
                Bienvenue, {currentUser.name}! 👋
              </h1>
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: isDarkMode ? '#ccc' : '#666',
                fontWeight: '300'
              }}>
                Prêt à atteindre vos objectifs ?
              </p>
            </div>
          </section>

          {/* QUICK STATS */}
          <section style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '40px',
              color: '#ffffff'
            }}>
              📊 Vos Statistiques
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px'
            }}>
              {[
                { id: 'weight', icon: '⚖️', label: 'Poids Actuel', value: currentUser.profile?.weight ? `${currentUser.profile.weight} kg` : 'À renseigner', unit: 'kg' },
                { id: 'height', icon: '📏', label: 'Taille', value: currentUser.profile?.height ? `${currentUser.profile.height} m` : 'À renseigner', unit: 'm' },
                { id: 'objective', icon: '🎯', label: 'Objectif', value: currentUser.profile?.objective ? currentUser.profile.objective.replace(/_/g, ' ').toUpperCase() : 'À définir', isSelect: true, options: ['PERTE_DE_POIDS', 'PRISE_DE_MASSE', 'REMISE_EN_FORME'] },
                { id: 'program', icon: '🏆', label: 'Programme', value: currentUser.profile?.recommendedProgram || 'À générer', isSelect: true, options: ['Débutant', 'Intermédiaire', 'Avancé'] }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: isDarkMode
                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%)'
                    : 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.08) 100%)',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  borderRadius: '15px',
                  padding: '30px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: stat.id ? 'pointer' : 'default',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 15px 40px rgba(102, 126, 234, 0.25)'
                    : '0 15px 40px rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{stat.icon}</div>
                  <p style={{ color: isDarkMode ? '#aaa' : '#888', fontSize: '0.9rem', marginBottom: '10px' }}>
                    {stat.label}
                  </p>
                  
                  {editingField === stat.id ? (
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexDirection: 'column' }}>
                      {stat.isSelect ? (
                        <select
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            border: '2px solid #667eea',
                            background: isDarkMode ? '#1a1a2e' : '#ffffff',
                            color: '#ffffff',
                            fontSize: '1rem',
                            cursor: 'pointer'
                          }}
                          autoFocus
                        >
                          <option value="">Sélectionner...</option>
                          {stat.options?.map(opt => (
                            <option key={opt} value={opt}>{opt.replace(/_/g, ' ')}</option>
                          ))}
                        </select>
                      ) : (
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <input
                            type="number"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            placeholder={stat.value}
                            style={{
                              flex: 1,
                              padding: '8px',
                              borderRadius: '8px',
                              border: '2px solid #667eea',
                              background: isDarkMode ? '#1a1a2e' : '#ffffff',
                              color: '#ffffff',
                              fontSize: '1rem',
                              textAlign: 'center'
                            }}
                            autoFocus
                          />
                          <span style={{ color: '#667eea', fontWeight: 'bold' }}>{stat.unit}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '10px' }}>
                      {stat.value}
                    </p>
                  )}

                  {(stat.id === 'weight' || stat.id === 'height' || stat.id === 'objective' || stat.id === 'program') && (
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      {editingField === stat.id ? (
                        <>
                          <button
                            onClick={() => {
                              if (stat.id === 'objective') {
                                handleEditObjective(editValue);
                              } else if (stat.id === 'program') {
                                handleEditProgram(editValue);
                              } else {
                                handleSaveEdit(stat.id, editValue);
                              }
                            }}
                            style={{
                              padding: '6px 15px',
                              background: '#4ade80',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '0.85rem',
                              fontWeight: 'bold'
                            }}
                          >
                            ✓ Valider
                          </button>
                          <button
                            onClick={() => {
                              setEditingField(null);
                              setEditValue('');
                            }}
                            style={{
                              padding: '6px 15px',
                              background: '#ff6b6b',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '0.85rem',
                              fontWeight: 'bold'
                            }}
                          >
                            ✕ Annuler
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingField(stat.id);
                            if (stat.id === 'objective') {
                              setEditValue(currentUser.profile?.objective || '');
                            } else if (stat.id === 'program') {
                              setEditValue(currentUser.profile?.recommendedProgram || '');
                            } else {
                              setEditValue(currentUser.profile?.[stat.id] || '');
                            }
                          }}
                          style={{
                            padding: '6px 15px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 'bold'
                          }}
                        >
                          ✏️ Éditer
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* MAIN CATEGORIES */}
          <section style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '40px',
              color: '#ffffff'
            }}>
              🚀 Accédez à Vos Outils
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              {categories.map(category => (
                <div
                  key={category.id}
                  onClick={() => setActiveView(category.id)}
                  style={{
                    background: isDarkMode
                      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)',
                    border: isDarkMode
                      ? '2px solid rgba(102, 126, 234, 0.2)'
                      : '2px solid rgba(102, 126, 234, 0.15)',
                    borderRadius: '15px',
                    padding: '40px 30px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: isDarkMode
                      ? '0 10px 30px rgba(102, 126, 234, 0.1)'
                      : '0 10px 30px rgba(102, 126, 234, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? '0 20px 50px rgba(102, 126, 234, 0.25)'
                      : '0 20px 50px rgba(102, 126, 234, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? '0 10px 30px rgba(102, 126, 234, 0.1)'
                      : '0 10px 30px rgba(102, 126, 234, 0.08)';
                  }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
                    {category.label.split(' ')[0]}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '15px' }}>
                    {category.label}
                  </h3>
                  <p style={{ color: isDarkMode ? '#bbb' : '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {category.id === 'training' && 'Commencez votre séance d\'entraînement'}
                    {category.id === 'routine' && 'Gérez vos routines d\'exercices'}
                    {category.id === 'calories' && 'Suivi du poids et calculatrice'}
                    {category.id === 'meals' && 'Plans repas personnalisés'}
                    {category.id === 'videos' && 'Tutoriels et conseils d\'experts'}
                    {category.id === 'history' && 'Consultez votre historique'}
                  </p>
                  <button
                    style={{
                      marginTop: '20px',
                      padding: '10px 25px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}
                  >
                    Accéder →
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* MOTIVATIONAL SECTION */}
          <section style={{
            padding: '60px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            marginTop: '60px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20%',
              left: '-10%',
              width: '400px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-15%',
              right: '-5%',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#ffffff',
                marginBottom: '20px',
                fontWeight: 'bold'
              }}>
                💪 Chaque Jour est une Nouvelle Opportunité
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '30px'
              }}>
                Restez motivé et atteignez vos objectifs avec Habit Tracker Sport
              </p>
            </div>
          </section>
        </main>
      ) : (
        renderContent()
      )}
    </div>
  );
}

export default App;
