import React, { useState } from 'react';
import '../styles/Auth.css';

function Auth({ onAuthSuccess, isDarkMode }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
            isAdmin: formData.email === 'badiswachani@gmail.com'
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

  return (
    <div className="auth-container" style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
      color: isDarkMode ? '#ffffff' : '#000000'
    }}>
      <div className="auth-card" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1f1f2e 0%, #0f3460 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
        color: isDarkMode ? '#ffffff' : '#000000',
        boxShadow: isDarkMode
          ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(102, 126, 234, 0.2)'
          : '0 20px 60px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="auth-header">
          <h1 className="auth-title">💪 Habit Tracker Sport</h1>
          <p className="auth-subtitle">
            {isSignUp ? 'Créer un compte' : 'Se connecter'}
          </p>
        </div>

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

        <div className="auth-footer">
          <p style={{ color: isDarkMode ? '#aaa' : '#666' }}>
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
        </div>

        <div className="demo-info" style={{
          background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
          color: isDarkMode ? '#aaa' : '#666',
          borderColor: '#667eea'
        }}>
          <p>💡 <strong>Mode démo:</strong> Utilisez le stockage local du navigateur pour tester</p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
