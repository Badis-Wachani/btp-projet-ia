import React, { useState, useEffect } from 'react';

function CalorieCalculator({ onBack, isDarkMode }) {
  const [activeTab, setActiveTab] = useState('tracking');
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activity: '1.2'
  });
  const [result, setResult] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [weightEntry, setWeightEntry] = useState('');
  const [weightHistory, setWeightHistory] = useState([]);
  const [mealPlan, setMealPlan] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      loadWeightHistory(user.id);
    }
  }, []);

  const loadWeightHistory = (userId) => {
    const weights = JSON.parse(localStorage.getItem(`weightHistory_${userId}`) || '[]');
    setWeightHistory(weights);
  };

  const addWeightEntry = () => {
    if (!weightEntry || isNaN(weightEntry)) {
      alert('Veuillez entrer un poids valide');
      return;
    }

    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      weight: parseFloat(weightEntry),
      timestamp: new Date().toISOString()
    };

    const updated = [...weightHistory, newEntry];
    setWeightHistory(updated);
    localStorage.setItem(`weightHistory_${currentUser.id}`, JSON.stringify(updated));
    setWeightEntry('');
  };

  const generateMealPlan = () => {
    if (!currentUser || !currentUser.profile) {
      alert('Veuillez d\'abord compléter le tutorial');
      return;
    }

    const profile = currentUser.profile;
    const objective = profile.objective;

    let plan = getMealPlanByObjective(objective);
    setMealPlan(plan);
  };

  const getMealPlanByObjective = (objective) => {
    const basePlan = {
      perte_poids: {
        calories: 2000,
        breakfast: [
          { name: 'Oeufs brouillés aux épinards', calories: 180, proteins: 12, carbs: 5, fats: 10 },
          { name: 'Flocons d\'avoine avec fruits rouges', calories: 250, proteins: 8, carbs: 45, fats: 3 },
          { name: 'Yaourt grec nature', calories: 100, proteins: 15, carbs: 5, fats: 2 }
        ],
        lunch: [
          { name: 'Poulet grillé + riz complet', calories: 450, proteins: 35, carbs: 50, fats: 8 },
          { name: 'Salade César sans croûtons', calories: 350, proteins: 25, carbs: 20, fats: 15 },
          { name: 'Poisson blanc + légumes', calories: 380, proteins: 40, carbs: 15, fats: 10 }
        ],
        dinner: [
          { name: 'Dinde + patate douce', calories: 420, proteins: 38, carbs: 40, fats: 8 },
          { name: 'Soupe minceur + protéines', calories: 300, proteins: 20, carbs: 35, fats: 5 },
          { name: 'Œufs + brocoli', calories: 250, proteins: 22, carbs: 10, fats: 12 }
        ]
      },
      musculation: {
        calories: 3000,
        breakfast: [
          { name: 'Oeufs + pain complet + beurre', calories: 450, proteins: 20, carbs: 50, fats: 15 },
          { name: 'Pancakes protéinés + miel', calories: 520, proteins: 22, carbs: 60, fats: 12 },
          { name: 'Porridge + fruits secs', calories: 480, proteins: 15, carbs: 65, fats: 10 }
        ],
        lunch: [
          { name: 'Riz blanc + poulet + sauce', calories: 680, proteins: 50, carbs: 75, fats: 12 },
          { name: 'Pâtes + viande hachée', calories: 720, proteins: 45, carbs: 80, fats: 15 },
          { name: 'Patate + thon + huile olive', calories: 650, proteins: 40, carbs: 70, fats: 14 }
        ],
        dinner: [
          { name: 'Steak + patate douce', calories: 700, proteins: 55, carbs: 60, fats: 18 },
          { name: 'Saumon + riz', calories: 680, proteins: 48, carbs: 65, fats: 16 },
          { name: 'Œufs + féculents', calories: 600, proteins: 45, carbs: 55, fats: 14 }
        ]
      },
      tonification: {
        calories: 2200,
        breakfast: [
          { name: 'Oeufs + pain complet', calories: 320, proteins: 18, carbs: 40, fats: 10 },
          { name: 'Yaourt + granola', calories: 280, proteins: 12, carbs: 45, fats: 6 },
          { name: 'Smoothie protéiné', calories: 300, proteins: 20, carbs: 35, fats: 8 }
        ],
        lunch: [
          { name: 'Poulet + légumes + riz', calories: 520, proteins: 40, carbs: 50, fats: 10 },
          { name: 'Œufs + pâtes complètes', calories: 480, proteins: 28, carbs: 60, fats: 10 },
          { name: 'Poisson + brocoli + riz', calories: 500, proteins: 35, carbs: 55, fats: 10 }
        ],
        dinner: [
          { name: 'Dinde + sweet potato', calories: 450, proteins: 38, carbs: 45, fats: 8 },
          { name: 'Œufs + haricots', calories: 400, proteins: 28, carbs: 40, fats: 12 },
          { name: 'Poisson blanc + légumes', calories: 380, proteins: 40, carbs: 30, fats: 8 }
        ]
      },
      endurance: {
        calories: 2400,
        breakfast: [
          { name: 'Oeufs + pain + fruits', calories: 380, proteins: 16, carbs: 55, fats: 10 },
          { name: 'Flocons + lait + miel', calories: 420, proteins: 12, carbs: 70, fats: 8 },
          { name: 'Banane + cacahuètes + pain', calories: 400, proteins: 15, carbs: 60, fats: 12 }
        ],
        lunch: [
          { name: 'Pâtes + poulet + sauce tomate', calories: 580, proteins: 38, carbs: 70, fats: 10 },
          { name: 'Riz + poisson + légumes', calories: 560, proteins: 35, carbs: 75, fats: 8 },
          { name: 'Patate + steak haché', calories: 600, proteins: 42, carbs: 70, fats: 12 }
        ],
        dinner: [
          { name: 'Pâtes complètes + tomate', calories: 480, proteins: 22, carbs: 70, fats: 8 },
          { name: 'Riz blanc + œufs', calories: 500, proteins: 25, carbs: 65, fats: 10 },
          { name: 'Semoule + légumes', calories: 450, proteins: 18, carbs: 70, fats: 6 }
        ]
      },
      equilibre: {
        calories: 2200,
        breakfast: [
          { name: 'Oeufs + pain', calories: 300, proteins: 15, carbs: 35, fats: 10 },
          { name: 'Yaourt + fruits', calories: 250, proteins: 12, carbs: 40, fats: 4 },
          { name: 'Flocons + lait', calories: 280, proteins: 10, carbs: 50, fats: 5 }
        ],
        lunch: [
          { name: 'Poulet + légumes + riz', calories: 500, proteins: 35, carbs: 50, fats: 10 },
          { name: 'Poisson + salade', calories: 420, proteins: 32, carbs: 30, fats: 12 },
          { name: 'Oeufs + pâtes', calories: 450, proteins: 25, carbs: 55, fats: 10 }
        ],
        dinner: [
          { name: 'Viande maigre + légumes', calories: 420, proteins: 35, carbs: 30, fats: 10 },
          { name: 'Poisson + riz complet', calories: 450, proteins: 32, carbs: 45, fats: 9 },
          { name: 'Oeufs + brocoli', calories: 350, proteins: 28, carbs: 20, fats: 12 }
        ]
      }
    };

    return basePlan[objective] || basePlan.equilibre;
  };

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

  const getWeightChangeStats = () => {
    if (weightHistory.length < 2) return null;
    const firstWeight = weightHistory[0].weight;
    const lastWeight = weightHistory[weightHistory.length - 1].weight;
    const change = (lastWeight - firstWeight).toFixed(1);
    const percentage = ((change / firstWeight) * 100).toFixed(1);
    return { change, percentage, firstWeight, lastWeight };
  };

  return (
    <div className="view-container" style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, rgba(31, 31, 46, 0.9) 0%, rgba(20, 20, 35, 0.9) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 252, 0.95) 100%)',
      color: isDarkMode ? '#ffffff' : '#000000',
      boxShadow: isDarkMode
        ? '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 60px rgba(102, 126, 234, 0.15), inset 0 1px 0 rgba(102, 126, 234, 0.1)'
        : '0 25px 70px rgba(102, 126, 234, 0.12), 0 0 60px rgba(102, 126, 234, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
      minHeight: '100vh'
    }}>
      <div className="view-header" style={{
        borderBottom: isDarkMode ? '2px solid #444' : '2px solid #f0f0f0'
      }}>
        <h1 style={{
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>🔥 Nutrition & Suivi</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>

      <div style={{ padding: '20px', borderBottom: isDarkMode ? '2px solid #444' : '2px solid #f0f0f0' }}>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('tracking')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'tracking' ? '#667eea' : isDarkMode ? '#333' : '#f0f0f0',
              color: activeTab === 'tracking' ? 'white' : isDarkMode ? '#999' : '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: activeTab === 'tracking' ? 'bold' : 'normal'
            }}
          >
            📊 Suivi Poids
          </button>
          <button
            onClick={() => setActiveTab('calories')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'calories' ? '#667eea' : isDarkMode ? '#333' : '#f0f0f0',
              color: activeTab === 'calories' ? 'white' : isDarkMode ? '#999' : '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: activeTab === 'calories' ? 'bold' : 'normal'
            }}
          >
            🔥 Calculateur
          </button>
          <button
            onClick={() => setActiveTab('meals')}
            style={{
              padding: '10px 20px',
              background: activeTab === 'meals' ? '#667eea' : isDarkMode ? '#333' : '#f0f0f0',
              color: activeTab === 'meals' ? 'white' : isDarkMode ? '#999' : '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: activeTab === 'meals' ? 'bold' : 'normal'
            }}
          >
            🍽️ Repas
          </button>
        </div>
      </div>

      <div className="view-content">
        {activeTab === 'tracking' && (
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', color: '#ffffff' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#ffffff' }}>📊 Suivi de Votre Poids</h2>
            
            <div style={{
              background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#ffffff' }}>
                📌 Poids du jour (kg)
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="number"
                  value={weightEntry}
                  onChange={(e) => setWeightEntry(e.target.value)}
                  placeholder="Ex: 75.5"
                  step="0.1"
                  style={{
                    flex: 1,
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                    fontSize: '1rem',
                    background: isDarkMode ? '#2d2d2d' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#000000'
                  }}
                />
                <button
                  onClick={addWeightEntry}
                  style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  ➕ Ajouter
                </button>
              </div>
            </div>

            {getWeightChangeStats() && (
              <div style={{
                background: isDarkMode ? 'rgba(102, 126, 234, 0.15)' : 'rgba(102, 126, 234, 0.1)',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ marginTop: 0, color: '#ffffff' }}>📈 Votre Progression</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <p style={{ opacity: 0.8, marginBottom: '5px', color: '#ffffff' }}>Poids Initial</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
                      {getWeightChangeStats().firstWeight} kg
                    </p>
                  </div>
                  <div>
                    <p style={{ opacity: 0.8, marginBottom: '5px', color: '#ffffff' }}>Poids Actuel</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
                      {getWeightChangeStats().lastWeight} kg
                    </p>
                  </div>
                  <div>
                    <p style={{ opacity: 0.8, marginBottom: '5px', color: '#ffffff' }}>Changement</p>
                    <p style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      color: '#ffffff'
                    }}>
                      {parseFloat(getWeightChangeStats().change) > 0 ? '+' : ''}{getWeightChangeStats().change} kg
                    </p>
                  </div>
                  <div>
                    <p style={{ opacity: 0.8, marginBottom: '5px', color: '#ffffff' }}>Pourcentage</p>
                    <p style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      color: '#ffffff'
                    }}>
                      {parseFloat(getWeightChangeStats().percentage) > 0 ? '+' : ''}{getWeightChangeStats().percentage}%
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginTop: '20px' }}>
              <h3 style={{ color: '#ffffff' }}>📅 Historique ({weightHistory.length} entrées)</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: '10px'
              }}>
                {weightHistory.map((entry, idx) => (
                  <div key={idx} style={{
                    background: isDarkMode ? '#333' : '#f9f9f9',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: isDarkMode ? '1px solid #555' : '1px solid #ddd'
                  }}>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '5px' }}>
                      {new Date(entry.date).toLocaleDateString('fr-FR')}
                    </p>
                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                      {entry.weight} kg
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calories' && (
          <div style={{ maxWidth: '600px', margin: '0 auto', color: '#ffffff' }}>
            <h3 style={{ 
              marginBottom: '1.5rem', 
              color: '#ffffff', 
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
                  color: '#ffffff'
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
                  color: '#ffffff'
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
                  color: '#ffffff'
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
                  color: '#ffffff'
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
                  color: '#ffffff'
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
        )}

        {activeTab === 'meals' && (
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', color: '#ffffff' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#ffffff' }}>🍽️ Plan Repas Personnalisé</h2>
            
            {currentUser && currentUser.profile ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#ffffff' }}>
                    Objectif: <strong>{currentUser.profile.objective.toUpperCase()}</strong>
                  </p>
                  <button
                    onClick={generateMealPlan}
                    style={{
                      padding: '12px 25px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}
                  >
                    📋 Générer Mon Plan Repas
                  </button>
                </div>

                {mealPlan && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                  }}>
                    {['breakfast', 'lunch', 'dinner'].map((meal) => (
                      <div key={meal} style={{
                        background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                        padding: '20px',
                        borderRadius: '10px',
                        border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.2)' : '2px solid rgba(102, 126, 234, 0.1)'
                      }}>
                        <h3 style={{ marginTop: 0 }}>
                          {meal === 'breakfast' ? '🌅 Petit-Déjeuner' : meal === 'lunch' ? '🌞 Déjeuner' : '🌙 Dîner'}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          {mealPlan[meal].map((food, idx) => (
                            <div key={idx} style={{
                              background: isDarkMode ? '#2d2d2d' : '#ffffff',
                              padding: '12px',
                              borderRadius: '8px',
                              border: isDarkMode ? '1px solid #444' : '1px solid #ddd'
                            }}>
                              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                {food.name}
                              </p>
                              <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                gap: '8px',
                                fontSize: '0.85rem'
                              }}>
                                <div>
                                  <span style={{ opacity: 0.7 }}>Cal:</span>
                                  <p style={{ margin: 0, fontWeight: 'bold' }}>{food.calories}</p>
                                </div>
                                <div>
                                  <span style={{ opacity: 0.7 }}>Pro:</span>
                                  <p style={{ margin: 0, fontWeight: 'bold' }}>{food.proteins}g</p>
                                </div>
                                <div>
                                  <span style={{ opacity: 0.7 }}>Carbs:</span>
                                  <p style={{ margin: 0, fontWeight: 'bold' }}>{food.carbs}g</p>
                                </div>
                                <div>
                                  <span style={{ opacity: 0.7 }}>Fats:</span>
                                  <p style={{ margin: 0, fontWeight: 'bold' }}>{food.fats}g</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {mealPlan && (
                  <div style={{
                    marginTop: '30px',
                    background: isDarkMode ? 'rgba(102, 126, 234, 0.15)' : 'rgba(102, 126, 234, 0.1)',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <h3>📊 Résumé Nutritionnel Quotidien</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
                      <div>
                        <p style={{ opacity: 0.8, marginBottom: '5px' }}>Calories</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{mealPlan.calories} kcal</p>
                      </div>
                      <div>
                        <p style={{ opacity: 0.8, marginBottom: '5px' }}>Protéines</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                          {(mealPlan.breakfast.reduce((a, b) => a + b.proteins, 0) +
                            mealPlan.lunch.reduce((a, b) => a + b.proteins, 0) +
                            mealPlan.dinner.reduce((a, b) => a + b.proteins, 0)).toFixed(0)}g
                        </p>
                      </div>
                      <div>
                        <p style={{ opacity: 0.8, marginBottom: '5px' }}>Glucides</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                          {(mealPlan.breakfast.reduce((a, b) => a + b.carbs, 0) +
                            mealPlan.lunch.reduce((a, b) => a + b.carbs, 0) +
                            mealPlan.dinner.reduce((a, b) => a + b.carbs, 0)).toFixed(0)}g
                        </p>
                      </div>
                      <div>
                        <p style={{ opacity: 0.8, marginBottom: '5px' }}>Lipides</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                          {(mealPlan.breakfast.reduce((a, b) => a + b.fats, 0) +
                            mealPlan.lunch.reduce((a, b) => a + b.fats, 0) +
                            mealPlan.dinner.reduce((a, b) => a + b.fats, 0)).toFixed(0)}g
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{
                background: isDarkMode ? 'rgba(255, 193, 7, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                color: isDarkMode ? '#ffd54f' : '#f9a825'
              }}>
                <p>⚠️ Veuillez d'abord compléter le tutorial lors de votre création de compte pour accéder au plan repas personnalisé.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CalorieCalculator;
