import React, { useState } from 'react';

function Onboarding({ onComplete, isDarkMode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    objective: null,
    morphology: null,
    physique: null,
    bodyParts: [],
    sportFrequency: null,
    situation: null,
    level: null
  });

  const goals = [
    { id: 'fit', label: 'Être en forme', icon: '💪' },
    { id: 'lose', label: 'Perdre du poids', icon: '⚡' },
    { id: 'muscle', label: 'Se muscler', icon: '🏋️' },
    { id: 'athlete', label: 'Être un athlète', icon: '🏃' }
  ];

  const morphologies = [
    {
      id: 'thin',
      label: 'Mince',
      image: 'https://cdn.fizzup.com/full/register/profil_morpho_mince.png'
    },
    {
      id: 'normal',
      label: 'Normal',
      image: 'https://cdn.fizzup.com/full/register/profil_morpho_normal.png'
    },
    {
      id: 'round',
      label: 'Rond',
      image: 'https://cdn.fizzup.com/full/register/profil_morpho_rond.png'
    }
  ];

  const physiques = [
    {
      id: 'athletic',
      label: 'Physique athlétique',
      image: 'https://cdn.fizzup.com/full/register/physique_athletique.png'
    },
    {
      id: 'massive',
      label: 'Physique Massif',
      image: 'https://cdn.fizzup.com/full/register/physique_massif.png'
    },
    {
      id: 'dry',
      label: 'Physique sec',
      image: 'https://cdn.fizzup.com/full/register/physique_sec.png'
    }
  ];

  const bodyParts = [
    { id: 'chest', label: 'Poitrine', icon: '💪' },
    { id: 'back', label: 'Dos', icon: '🔙' },
    { id: 'arms', label: 'Bras', icon: '💪' },
    { id: 'shoulders', label: 'Épaules', icon: '🏋️' },
    { id: 'legs', label: 'Jambes', icon: '🦵' },
    { id: 'abs', label: 'Abdominaux', icon: '⬜' },
    { id: 'glutes', label: 'Fessiers', icon: '🍑' }
  ];

  const sportFrequencies = [
    { id: '0-1', label: '0 à 1 fois par semaine', icon: '📅' },
    { id: '2', label: '2 fois par semaine', icon: '📅' },
    { id: '3+', label: '3 fois par semaine ou plus', icon: '📅' }
  ];

  const situations = [
    { id: 'injury', label: 'Blessure ou convalescence', icon: '🩹' },
    { id: 'smoking', label: 'Sevrage tabac', icon: '🚭' },
    { id: 'senior', label: 'Senior', icon: '👴' },
    { id: 'none', label: 'Aucune', icon: '✅' }
  ];

  const levels = [
    { id: 'beginner', label: 'Débutant', icon: '🌱' },
    { id: 'intermediate', label: 'Intermédiaire', icon: '📈' },
    { id: 'advanced', label: 'Avancé', icon: '🚀' }
  ];

  const handleAnswer = (field, value) => {
    if (field === 'bodyParts') {
      const updated = answers.bodyParts.includes(value)
        ? answers.bodyParts.filter(p => p !== value)
        : [...answers.bodyParts, value];
      setAnswers({ ...answers, bodyParts: updated });
    } else {
      setAnswers({ ...answers, [field]: value });
    }
  };

  const goNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return answers.objective !== null;
    if (currentStep === 2) return answers.morphology !== null;
    if (currentStep === 3) return answers.physique !== null;
    if (currentStep === 4) return answers.bodyParts.length > 0;
    if (currentStep === 5) return answers.sportFrequency !== null;
    if (currentStep === 6) return answers.situation !== null;
    if (currentStep === 7) return answers.level !== null;
    return false;
  };

  const handleComplete = () => {
    const userProfile = {
      ...answers,
      createdAt: new Date().toISOString()
    };
    onComplete(userProfile);
  };

  const renderQuestion = () => {
    const baseStyle = {
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease-in'
    };

    const titleStyle = {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#667eea',
      textShadow: '0 2px 8px rgba(102, 126, 234, 0.2)'
    };

    const optionsContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '40px'
    };

    const optionStyle = (selected) => ({
      padding: '25px',
      border: selected ? '3px solid #667eea' : '2px solid rgba(102, 126, 234, 0.2)',
      borderRadius: '15px',
      background: selected
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : isDarkMode
        ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%)'
        : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)',
      color: selected ? '#ffffff' : (isDarkMode ? '#ffffff' : '#000000'),
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: selected ? '0 10px 30px rgba(102, 126, 234, 0.3)' : 'none'
    });

    const imageOptionStyle = (selected) => ({
      ...optionStyle(selected),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    });

    const imageStyle = {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '10px',
      border: '2px solid rgba(102, 126, 234, 0.2)'
    };

    switch (currentStep) {
      case 1:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>🎯 Quel est ton objectif ?</h2>
            <div style={optionsContainerStyle}>
              {goals.map(goal => (
                <button
                  key={goal.id}
                  onClick={() => handleAnswer('objective', goal.id)}
                  style={{
                    ...optionStyle(answers.objective === goal.id),
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    if (answers.objective !== goal.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{goal.icon}</span>
                  {goal.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>📏 Quelle est ta morphologie ?</h2>
            <div style={optionsContainerStyle}>
              {morphologies.map(morph => (
                <button
                  key={morph.id}
                  onClick={() => handleAnswer('morphology', morph.id)}
                  style={imageOptionStyle(answers.morphology === morph.id)}
                  onMouseEnter={(e) => {
                    if (answers.morphology !== morph.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img src={morph.image} alt={morph.label} style={imageStyle} />
                  <span style={{ fontWeight: 'bold' }}>{morph.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>💪 Quel physique souhaites-tu ?</h2>
            <div style={optionsContainerStyle}>
              {physiques.map(phys => (
                <button
                  key={phys.id}
                  onClick={() => handleAnswer('physique', phys.id)}
                  style={imageOptionStyle(answers.physique === phys.id)}
                  onMouseEnter={(e) => {
                    if (answers.physique !== phys.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img src={phys.image} alt={phys.label} style={imageStyle} />
                  <span style={{ fontWeight: 'bold' }}>{phys.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>🏋️ Quelles zones du corps veux-tu développer ?</h2>
            <p style={{ color: isDarkMode ? '#aaa' : '#666', marginBottom: '30px' }}>
              Sélectionne une ou plusieurs zones
            </p>
            <div style={optionsContainerStyle}>
              {bodyParts.map(part => (
                <button
                  key={part.id}
                  onClick={() => handleAnswer('bodyParts', part.id)}
                  style={{
                    ...optionStyle(answers.bodyParts.includes(part.id)),
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    if (!answers.bodyParts.includes(part.id)) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{part.icon}</span>
                  {part.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>⏰ Fais-tu du sport ?</h2>
            <div style={{ ...optionsContainerStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {sportFrequencies.map(freq => (
                <button
                  key={freq.id}
                  onClick={() => handleAnswer('sportFrequency', freq.id)}
                  style={{
                    ...optionStyle(answers.sportFrequency === freq.id),
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    if (answers.sportFrequency !== freq.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{freq.icon}</span>
                  {freq.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>🏥 Es-tu dans une des situations suivantes ?</h2>
            <div style={{ ...optionsContainerStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {situations.map(situation => (
                <button
                  key={situation.id}
                  onClick={() => handleAnswer('situation', situation.id)}
                  style={{
                    ...optionStyle(answers.situation === situation.id),
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    if (answers.situation !== situation.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{situation.icon}</span>
                  {situation.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div style={baseStyle}>
            <h2 style={titleStyle}>🎓 Quel est ton niveau en renforcement musculaire ?</h2>
            <div style={{ ...optionsContainerStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {levels.map(level => (
                <button
                  key={level.id}
                  onClick={() => handleAnswer('level', level.id)}
                  style={{
                    ...optionStyle(answers.level === level.id),
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    if (answers.level !== level.id) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{level.icon}</span>
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        );

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
      minHeight: '100vh',
      paddingTop: '40px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Progression bar */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto 40px',
        padding: '0 20px'
      }}>
        <div style={{
          background: isDarkMode
            ? 'rgba(102, 126, 234, 0.2)'
            : 'rgba(102, 126, 234, 0.1)',
          height: '8px',
          borderRadius: '10px',
          overflow: 'hidden',
          border: '2px solid rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{
            height: '100%',
            width: `${(currentStep / 7) * 100}%`,
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            transition: 'width 0.5s ease'
          }}></div>
        </div>
        <p style={{
          marginTop: '15px',
          fontSize: '0.95rem',
          color: isDarkMode ? '#aaa' : '#666',
          textAlign: 'center'
        }}>
          Question {currentStep} sur 7
        </p>
      </div>

      {/* Question */}
      {renderQuestion()}

      {/* Buttons */}
      <div style={{
        maxWidth: '900px',
        margin: '40px auto 0',
        padding: '0 20px',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
      }}>
        <button
          onClick={goBack}
          disabled={currentStep === 1}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '10px',
            background: currentStep === 1
              ? 'rgba(102, 126, 234, 0.2)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: currentStep === 1 ? '#888' : '#ffffff',
            cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            opacity: currentStep === 1 ? 0.5 : 1
          }}
        >
          ← Retour
        </button>

        {currentStep < 7 ? (
          <button
            onClick={goNext}
            disabled={!canProceed()}
            style={{
              padding: '12px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
              background: !canProceed()
                ? 'rgba(102, 126, 234, 0.2)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: !canProceed() ? '#888' : '#ffffff',
              cursor: !canProceed() ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: !canProceed() ? 0.5 : 1
            }}
            onMouseEnter={(e) => {
              if (canProceed()) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Suivant →
          </button>
        ) : (
          <button
            onClick={handleComplete}
            style={{
              padding: '12px 40px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 222, 128, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ✅ Créer mon profil
          </button>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Onboarding;
