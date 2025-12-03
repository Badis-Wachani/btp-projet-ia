import React, { useState, useEffect } from 'react';
import '../styles/Auth.css';
import '../styles/ThemeLOL.css';
import '../styles/ThemeHelloKitty.css';
import ThemeSelector from './ThemeSelector';

function Auth({ onAuthSuccess, isDarkMode }) {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    return localStorage.getItem('selectedTheme') || null;
  });
  const [showThemeSelector, setShowThemeSelector] = useState(!selectedTheme);
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [forgotEmail, setForgotEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Fonction helper pour les styles du thème
  const getInputStyle = () => selectedTheme === 'lol' ? {
    background: 'linear-gradient(135deg, rgba(10, 42, 80, 0.3) 0%, rgba(15, 20, 35, 0.2) 100%)',
    color: '#e1d7c3',
    borderColor: '#c89b3c',
    borderRadius: '0'
  } : selectedTheme === 'hellokitty' ? {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 250, 205, 0.3) 100%)',
    color: '#000000',
    borderColor: '#ffb6d9',
    borderRadius: '15px'
  } : {
    background: isDarkMode ? '#0f3460' : '#f9f9f9',
    color: isDarkMode ? '#ffffff' : '#000000',
    borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
  };

  const getButtonStyle = () => selectedTheme === 'lol' ? {
    background: 'linear-gradient(135deg, #c89b3c 0%, #d4a574 100%)',
    color: '#0a1428',
    border: '2px solid #c89b3c',
    borderRadius: '0'
  } : selectedTheme === 'hellokitty' ? {
    background: 'linear-gradient(135deg, #ff69b4 0%, #ffb6d9 100%)',
    color: '#ffffff',
    border: '2px solid #ff1493',
    borderRadius: '25px'
  } : {
    background: '#667eea',
    cursor: 'pointer'
  };

  const getErrorStyle = () => selectedTheme === 'lol' ? {
    background: 'linear-gradient(135deg, rgba(184, 29, 19, 0.2) 0%, rgba(139, 15, 8, 0.15) 100%)',
    border: '2px solid #b81d13',
    color: '#ff6b6b',
    borderRadius: '0',
    boxShadow: '0 0 15px rgba(184, 29, 19, 0.3)',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '1px'
  } : selectedTheme === 'hellokitty' ? {
    background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.15) 0%, rgba(255, 105, 180, 0.1) 100%)',
    border: '2px solid #ff1493',
    color: '#d63384',
    borderRadius: '15px',
    boxShadow: '0 3px 10px rgba(255, 20, 147, 0.2)',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '0.5px'
  } : {
    background: 'rgba(255, 77, 77, 0.1)',
    color: '#ff4d4d',
    borderColor: '#ff4d4d'
  };

  const getSuccessStyle = () => selectedTheme === 'lol' ? {
    background: 'linear-gradient(135deg, rgba(76, 222, 128, 0.15) 0%, rgba(56, 172, 98, 0.1) 100%)',
    border: '2px solid #4ade80',
    color: '#7ee8a8',
    borderRadius: '0',
    boxShadow: '0 0 15px rgba(76, 222, 128, 0.3)',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '1px',
    padding: '12px'
  } : selectedTheme === 'hellokitty' ? {
    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 182, 217, 0.15) 100%)',
    border: '2px solid #ffd700',
    color: '#ff69b4',
    borderRadius: '15px',
    boxShadow: '0 3px 10px rgba(255, 215, 0, 0.2)',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '0.5px',
    padding: '12px'
  } : {
    background: 'rgba(76, 222, 128, 0.1)',
    color: '#4ade80',
    borderColor: '#4ade80',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid',
    marginBottom: '15px',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-line'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    setTimeout(() => {
      try {
        if (!validateEmail(forgotEmail)) {
          setError('Email invalide');
          setLoading(false);
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === forgotEmail);

        if (!user) {
          setError('Aucun compte trouvé avec cet email');
          setLoading(false);
          return;
        }

        // Générer un token de réinitialisation temporaire
        const resetToken = Math.random().toString(36).substring(7);
        const resetData = {
          email: forgotEmail,
          token: resetToken,
          expiresAt: new Date(Date.now() + 3600000).toISOString() // 1 heure
        };

        localStorage.setItem('passwordReset', JSON.stringify(resetData));
        
        setSuccess(`✓ Lien de réinitialisation envoyé à ${forgotEmail}`);
        setSuccess(prev => prev + `\n\n🔐 Code temporaire: ${resetToken}\n(Valide 1 heure)`);
        
        setTimeout(() => {
          setIsForgotPassword(false);
          setForgotEmail('');
          setSuccess('');
        }, 4000);
      } catch (err) {
        setError('Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      try {
        // Récupérer les données du compte Google depuis le formulaire
        const googleEmail = document.getElementById('googleEmail')?.value;
        
        if (!googleEmail) {
          setError('Email Google requis');
          setLoading(false);
          return;
        }

        if (!validateEmail(googleEmail)) {
          setError('Email invalide');
          setLoading(false);
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        let user = users.find(u => u.email === googleEmail);

        // Si l'utilisateur n'existe pas, on le crée avec un profil Google
        if (!user) {
          const nameParts = googleEmail.split('@')[0].split('.');
          const fullName = nameParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
          
          user = {
            id: Date.now(),
            name: fullName,
            email: googleEmail,
            password: 'GOOGLE_AUTH', // Placeholder
            createdAt: new Date().toISOString(),
            isAdmin: false,
            isNewUser: true,
            profile: null,
            authProvider: 'google',
            googleId: Math.random().toString(36).substring(7)
          };
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));
        } else if (!user.authProvider) {
          user.authProvider = 'google';
          users[users.findIndex(u => u.id === user.id)] = user;
          localStorage.setItem('users', JSON.stringify(users));
        }

        const currentUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          authProvider: 'google'
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        onAuthSuccess(currentUser);
      } catch (err) {
        setError('Erreur lors de la connexion Google');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      try {
        if (isSignUp) {
          // Inscription
          if (!formData.name.trim()) {
            setError('Le nom est requis');
            setLoading(false);
            return;
          }
          if (!validateEmail(formData.email)) {
            setError('Email invalide');
            setLoading(false);
            return;
          }
          if (formData.password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères');
            setLoading(false);
            return;
          }
          if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            setLoading(false);
            return;
          }

          // Vérifier si l'utilisateur existe déjà
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          if (users.some(u => u.email === formData.email)) {
            setError('Cet email est déjà utilisé');
            setLoading(false);
            return;
          }

          // Créer le nouvel utilisateur
          const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
            createdAt: new Date().toISOString(),
            isAdmin: formData.email === 'badiswachani@gmail.com',
            isNewUser: true,
            profile: null
          };

          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          
          const currentUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin
          };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          onAuthSuccess(currentUser);
        } else {
          // Connexion
          if (!validateEmail(formData.email)) {
            setError('Email invalide');
            setLoading(false);
            return;
          }
          if (!formData.password) {
            setError('Le mot de passe est requis');
            setLoading(false);
            return;
          }

          const users = JSON.parse(localStorage.getItem('users') || '[]');
          const user = users.find(u => u.email === formData.email && u.password === formData.password);

          if (!user) {
            setError('Email ou mot de passe incorrect');
            setLoading(false);
            return;
          }

          const currentUser = {
            id: user.id,
            name: user.name,
            email: user.email
          };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          onAuthSuccess(currentUser);
        }
      } catch (err) {
        setError('Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  // Afficher le sélecteur de thème si pas encore choisi
  if (showThemeSelector) {
    return (
      <ThemeSelector 
        onThemeSelect={(theme) => {
          setSelectedTheme(theme);
          setShowThemeSelector(false);
        }}
        isDarkMode={isDarkMode}
      />
    );
  }

  return (
    <div className={selectedTheme === 'lol' ? 'lol-background' : selectedTheme === 'hellokitty' ? 'hk-background' : 'auth-container'} style={{
      background: selectedTheme === 'lol'
        ? undefined
        : selectedTheme === 'hellokitty'
        ? undefined
        : (isDarkMode 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)'),
      color: isDarkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className={selectedTheme === 'lol' ? 'lol-card' : selectedTheme === 'hellokitty' ? 'hk-card' : 'auth-card'} style={selectedTheme === 'lol' 
        ? {
          maxWidth: '500px',
          width: '100%',
          background: 'linear-gradient(135deg, rgba(10, 42, 80, 0.4) 0%, rgba(15, 20, 35, 0.3) 100%)',
          border: '2px solid #c89b3c',
          borderRadius: '0',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 0 30px rgba(200, 155, 60, 0.2), inset 0 1px 0 rgba(200, 155, 60, 0.1)'
        }
        : selectedTheme === 'hellokitty'
        ? {
          maxWidth: '500px',
          width: '100%',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 249, 0.9) 100%)',
          border: '3px solid #ff69b4',
          borderRadius: '25px',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(255, 105, 180, 0.2)'
        }
        : {
          background: isDarkMode 
            ? 'linear-gradient(135deg, #1f1f2e 0%, #0f3460 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
          color: isDarkMode ? '#ffffff' : '#000000',
          boxShadow: isDarkMode
            ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(102, 126, 234, 0.2)'
            : '0 20px 60px rgba(0, 0, 0, 0.1)'
        }
      }>
        <div className="auth-header">
          <h1 className="auth-title">💪 Habit Tracker Sport</h1>
          <p className="auth-subtitle">
            {isForgotPassword ? 'Réinitialiser le mot de passe' : (isSignUp ? 'Créer un compte' : 'Se connecter')}
          </p>
        </div>

        {/* FORMULAIRE MOT DE PASSE OUBLIÉ */}
        {isForgotPassword && (
          <form onSubmit={handleForgotPassword} className="auth-form">
            <div className="form-group">
              <label htmlFor="forgotEmail" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                Votre Email
              </label>
              <input
                type="email"
                id="forgotEmail"
                value={forgotEmail}
                onChange={(e) => {
                  setForgotEmail(e.target.value);
                  setError('');
                }}
                placeholder="votre@email.com"
                style={{
                  ...getInputStyle()
                }}
              />
            </div>

            {error && (
              <div className="error-message" style={getErrorStyle()}>
                {error}
              </div>
            )}

            {success && (
              <div className="success-message" style={getSuccessStyle()}>
                {success}
              </div>
            )}

            <button
              type="submit"
              className="auth-button"
              disabled={loading}
              style={{
                background: loading ? '#999' : '#667eea',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? '⏳ Envoi...' : '📧 Envoyer le lien'}
            </button>
          </form>
        )}

        {/* FORMULAIRE GOOGLE */}
        {!isForgotPassword && (
          <>
            <form onSubmit={handleSubmit} className="auth-form">
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="name" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    style={{
                      background: isDarkMode ? '#0f3460' : '#f9f9f9',
                      color: isDarkMode ? '#ffffff' : '#000000',
                      borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                    }}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="votre@email.com"
                  style={{
                    background: isDarkMode ? '#0f3460' : '#f9f9f9',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  style={{
                    background: isDarkMode ? '#0f3460' : '#f9f9f9',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                  }}
                />
              </div>

              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="confirmPassword" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    style={{
                      background: isDarkMode ? '#0f3460' : '#f9f9f9',
                      color: isDarkMode ? '#ffffff' : '#000000',
                      borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                    }}
                  />
                </div>
              )}

              {error && (
                <div className="error-message" style={{
                  background: isDarkMode ? 'rgba(255, 77, 77, 0.1)' : 'rgba(255, 77, 77, 0.1)',
                  color: '#ff4d4d',
                  borderColor: '#ff4d4d'
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="auth-button"
                disabled={loading}
                style={{
                  background: loading ? '#999' : '#667eea',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? '⏳ Chargement...' : (isSignUp ? '📝 S\'inscrire' : '🔓 Se connecter')}
              </button>
            </form>

            {/* DIVIDER */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '25px 0',
              opacity: 0.5
            }}>
              <div style={{ flex: 1, height: '1px', background: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}></div>
              <span style={{ color: isDarkMode ? '#aaa' : '#666', fontSize: '0.9rem' }}>OU</span>
              <div style={{ flex: 1, height: '1px', background: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}></div>
            </div>

            {/* GOOGLE AUTH FORM */}
            <form onSubmit={handleGoogleAuth} className="auth-form" style={{ marginBottom: '20px' }}>
              <div className="form-group">
                <label htmlFor="googleEmail" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                  📧 Email Google
                </label>
                <input
                  type="email"
                  id="googleEmail"
                  placeholder="votre.email@gmail.com"
                  style={{
                    background: isDarkMode ? '#0f3460' : '#f9f9f9',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                  }}
                />
              </div>

              <button
                type="submit"
                className="auth-button"
                disabled={loading}
                style={{
                  background: loading ? '#999' : '#4285f4',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? '⏳ Connexion...' : '🔐 Se connecter avec Google'}
              </button>
            </form>

            {/* FOOTER LINKS */}
            <div className="auth-footer">
              <p style={{ color: isDarkMode ? '#aaa' : '#666', marginBottom: '15px' }}>
                {isSignUp ? 'Vous avez déjà un compte?' : 'Pas encore de compte?'}
                {' '}
                <button
                  type="button"
                  className="toggle-auth"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setFormData({ email: '', password: '', confirmPassword: '', name: '' });
                    setError('');
                  }}
                  style={{ color: '#667eea' }}
                >
                  {isSignUp ? 'Se connecter' : 'S\'inscrire'}
                </button>
              </p>

              {!isSignUp && (
                <p style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                  <button
                    type="button"
                    className="toggle-auth"
                    onClick={() => {
                      setIsForgotPassword(true);
                      setError('');
                      setFormData({ email: '', password: '', confirmPassword: '', name: '' });
                    }}
                    style={{ color: '#ff6b6b' }}
                  >
                    🔑 Mot de passe oublié?
                  </button>
                </p>
              )}

              {isForgotPassword && (
                <button
                  type="button"
                  className="toggle-auth"
                  onClick={() => {
                    setIsForgotPassword(false);
                    setForgotEmail('');
                    setError('');
                    setSuccess('');
                  }}
                  style={{ color: '#667eea', display: 'block', marginTop: '10px' }}
                >
                  ← Retour à la connexion
                </button>
              )}
            </div>
          </>
        )}

        <div style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 50
        }}>
          <button
            type="button"
            style={{
              background: selectedTheme === 'lol' 
                ? 'linear-gradient(135deg, #c89b3c 0%, #d4a574 100%)'
                : selectedTheme === 'hellokitty'
                ? 'linear-gradient(135deg, #ff69b4 0%, #ffb6d9 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: selectedTheme === 'lol' ? '#0a1428' : '#ffffff',
              border: 'none',
              borderRadius: selectedTheme === 'lol' ? '0px' : (selectedTheme === 'hellokitty' ? '20px' : '10px'),
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: `0 5px 15px ${selectedTheme === 'lol' ? 'rgba(200, 155, 60, 0.4)' : selectedTheme === 'hellokitty' ? 'rgba(255, 105, 180, 0.4)' : 'rgba(102, 126, 234, 0.4)'}`,
              position: 'relative',
              zIndex: 55
            }}
            onClick={() => {
              setShowThemeSelector(true);
              setSelectedTheme(null);
              localStorage.removeItem('selectedTheme');
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 20px ${selectedTheme === 'lol' ? 'rgba(200, 155, 60, 0.6)' : selectedTheme === 'hellokitty' ? 'rgba(255, 105, 180, 0.6)' : 'rgba(102, 126, 234, 0.6)'}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 5px 15px ${selectedTheme === 'lol' ? 'rgba(200, 155, 60, 0.4)' : selectedTheme === 'hellokitty' ? 'rgba(255, 105, 180, 0.4)' : 'rgba(102, 126, 234, 0.4)'}`;
            }}
          >
            🎨 Changer de thème
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
