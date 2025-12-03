import React, { useState } from 'react';
import '../styles/Tutorial.css';

function Tutorial({ currentUser, onComplete, isDarkMode }) {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    weight: '',
    height: '',
    reason: '',
    vision: '',
    objective: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleNext = () => {
    if (step === 1) {
      if (!profileData.weight || !profileData.height) {
        setError('Veuillez remplir tous les champs');
        return;
      }
      if (isNaN(profileData.weight) || isNaN(profileData.height)) {
        setError('Les valeurs doivent être des nombres');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!profileData.reason) {
        setError('Veuillez sélectionner une réponse');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!profileData.vision) {
        setError('Veuillez sélectionner une réponse');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!profileData.objective) {
        setError('Veuillez sélectionner une réponse');
        return;
      }
      completeProfile();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      setError('');
    }
  };

  const determineProgram = () => {
    let program = 'Prise de masse';
    const bmi = parseFloat(profileData.weight) / (parseFloat(profileData.height) * parseFloat(profileData.height));

    if (profileData.objective === 'perte_poids') {
      program = 'Perte de poids';
    } else if (profileData.objective === 'musculation') {
      program = 'Musculation';
    } else if (profileData.objective === 'endurance') {
      program = 'Cardio et Endurance';
    } else if (profileData.objective === 'tonification') {
      program = 'Tonification et Définition';
    }

    if (profileData.vision.includes('sportif')) {
      program += ' - Performance';
    } else if (profileData.vision.includes('santé')) {
      program += ' - Santé';
    }

    return program;
  };

  const completeProfile = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex].profile = {
        weight: parseFloat(profileData.weight),
        height: parseFloat(profileData.height),
        reason: profileData.reason,
        vision: profileData.vision,
        objective: profileData.objective,
        recommendedProgram: determineProgram(),
        completedAt: new Date().toISOString()
      };
      localStorage.setItem('users', JSON.stringify(users));
    }

    const updatedUser = {
      ...currentUser,
      profile: users[userIndex].profile
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    onComplete(updatedUser);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="tutorial-step">
            <h2>📊 Vos Mesures Physiques</h2>
            <p>Nous avons besoin de quelques informations pour personnaliser votre expérience.</p>
            <div className="input-group">
              <label htmlFor="weight" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                Poids (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={profileData.weight}
                onChange={handleInputChange}
                placeholder="Ex: 75"
                step="0.1"
                style={{
                  background: isDarkMode ? '#0f3460' : '#f9f9f9',
                  color: isDarkMode ? '#ffffff' : '#000000',
                  borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="height" style={{ color: isDarkMode ? '#aaa' : '#666' }}>
                Taille (m)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={profileData.height}
                onChange={handleInputChange}
                placeholder="Ex: 1.75"
                step="0.01"
                style={{
                  background: isDarkMode ? '#0f3460' : '#f9f9f9',
                  color: isDarkMode ? '#ffffff' : '#000000',
                  borderColor: isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'
                }}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="tutorial-step">
            <h2>🎯 Pourquoi avez-vous installé cette application?</h2>
            <p>Cela nous aide à personnaliser votre parcours.</p>
            <div className="options">
              {[
                { value: 'objectif_fitness', label: '💪 Atteindre un objectif fitness spécifique' },
                { value: 'routine', label: '📅 Établir une routine d\'exercice régulière' },
                { value: 'sante', label: '❤️ Améliorer ma santé générale' },
                { value: 'motivation', label: '🚀 Trouver de la motivation et du suivi' },
                { value: 'transformation', label: '🔄 Transformer mon corps' }
              ].map(option => (
                <label key={option.value} className="option-label">
                  <input
                    type="radio"
                    name="reason"
                    value={option.value}
                    checked={profileData.reason === option.value}
                    onChange={handleSelectChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="tutorial-step">
            <h2>🔮 Comment vous voyez dans 1 an?</h2>
            <p>Décrivez votre vision future.</p>
            <div className="options">
              {[
                { value: 'plus_fort', label: '💪 Plus fort et musclé' },
                { value: 'plus_mince', label: '⚡ Plus mince et tonifié' },
                { value: 'sportif', label: '🏅 Plus sportif et athlétique' },
                { value: 'santé', label: '❤️ En meilleure santé générale' },
                { value: 'confiance', label: '✨ Meilleure confiance en moi' }
              ].map(option => (
                <label key={option.value} className="option-label">
                  <input
                    type="radio"
                    name="vision"
                    value={option.value}
                    checked={profileData.vision === option.value}
                    onChange={handleSelectChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="tutorial-step">
            <h2>🎪 Quel est votre objectif principal?</h2>
            <p>Sélectionnez le programme qui vous convient.</p>
            <div className="options">
              {[
                { value: 'perte_poids', label: '⬇️ Perte de poids' },
                { value: 'musculation', label: '💪 Prise de masse musculaire' },
                { value: 'tonification', label: '✨ Tonification et définition' },
                { value: 'endurance', label: '🏃 Endurance et cardio' },
                { value: 'equilibre', label: '⚖️ Équilibre et bien-être' }
              ].map(option => (
                <label key={option.value} className="option-label">
                  <input
                    type="radio"
                    name="objective"
                    value={option.value}
                    checked={profileData.objective === option.value}
                    onChange={handleSelectChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tutorial-container" style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
      color: isDarkMode ? '#ffffff' : '#000000'
    }}>
      <div className="tutorial-card" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1f1f2e 0%, #0f3460 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
        color: isDarkMode ? '#ffffff' : '#000000',
        boxShadow: isDarkMode
          ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(102, 126, 234, 0.2)'
          : '0 20px 60px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="tutorial-header">
          <h1 style={{
            color: isDarkMode ? '#ffffff' : '#000000'
          }}>
            ✋ Bienvenue, {currentUser.name}!
          </h1>
          <p style={{ color: isDarkMode ? '#aaa' : '#666' }}>
            Configurons votre profil - Étape {step} sur 4
          </p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>

        {renderStep()}

        {error && (
          <div className="error-message" style={{
            background: isDarkMode ? 'rgba(255, 77, 77, 0.1)' : 'rgba(255, 77, 77, 0.1)',
            color: '#ff4d4d',
            borderColor: '#ff4d4d'
          }}>
            {error}
          </div>
        )}

        <div className="tutorial-buttons">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="tutorial-button tutorial-button-secondary"
              style={{
                background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : '#f0f0f0',
                color: isDarkMode ? '#667eea' : '#667eea',
                border: `2px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : '#ddd'}`
              }}
            >
              ← Retour
            </button>
          )}
          <button
            onClick={handleNext}
            className="tutorial-button tutorial-button-primary"
            style={{
              background: '#667eea',
              color: 'white'
            }}
          >
            {step === 4 ? '✅ Terminer' : 'Suivant →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
