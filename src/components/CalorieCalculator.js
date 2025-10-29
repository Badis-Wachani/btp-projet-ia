import React, { useState } from 'react';

function CalorieCalculator({ onBack, isDarkMode }) {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activity: '1.2'
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateCalories = () => {
    const { age, weight, height, gender, activity } = formData;
    
    if (!age || !weight || !height) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = Math.round(bmr * parseFloat(activity));
    setResult(tdee);
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
        }}>🔥 Calculateur de Calories</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>
      <div className="view-content">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ 
            marginBottom: '1.5rem', 
            color: isDarkMode ? '#ffffff' : '#000000', 
            textAlign: 'center' 
          }}>
            Calculez vos besoins caloriques quotidiens
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold', 
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Sexe
              </label>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  fontSize: '1rem',
                  background: isDarkMode ? '#2d2d2d' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              >
                <option value="male">Homme</option>
                <option value="female">Femme</option>
              </select>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold', 
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Âge (années)
              </label>
              <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleChange}
                placeholder="Ex: 25"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  fontSize: '1rem',
                  background: isDarkMode ? '#2d2d2d' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold', 
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Poids (kg)
              </label>
              <input 
                type="number" 
                name="weight" 
                value={formData.weight} 
                onChange={handleChange}
                placeholder="Ex: 70"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  fontSize: '1rem',
                  background: isDarkMode ? '#2d2d2d' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold', 
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Taille (cm)
              </label>
              <input 
                type="number" 
                name="height" 
                value={formData.height} 
                onChange={handleChange}
                placeholder="Ex: 175"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  fontSize: '1rem',
                  background: isDarkMode ? '#2d2d2d' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 'bold', 
                color: isDarkMode ? '#ffffff' : '#333'
              }}>
                Niveau d'activité
              </label>
              <select 
                name="activity" 
                value={formData.activity} 
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  fontSize: '1rem',
                  background: isDarkMode ? '#2d2d2d' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              >
                <option value="1.2">Sédentaire (peu ou pas d'exercice)</option>
                <option value="1.375">Légèrement actif (1-3 jours/semaine)</option>
                <option value="1.55">Modérément actif (3-5 jours/semaine)</option>
                <option value="1.725">Très actif (6-7 jours/semaine)</option>
                <option value="1.9">Extrêmement actif (athlète)</option>
              </select>
            </div>

            <button 
              onClick={calculateCalories}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '1rem',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
              }}
            >
              Calculer
            </button>

            {result && (
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                  Vos besoins caloriques quotidiens :
                </h3>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                  {result} kcal
                </div>
                <p style={{ marginTop: '1rem', opacity: 0.9, fontSize: '0.95rem' }}>
                  Pour maintenir votre poids actuel
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
