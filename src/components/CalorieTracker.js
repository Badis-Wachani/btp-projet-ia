import React, { useState, useMemo } from 'react';

function CalorieTracker({ onBack, isDarkMode, currentUser }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [customFood, setCustomFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    portion: '100'
  });
  const [foodDatabase, setFoodDatabase] = useState([
    // Fruits
    { id: 1, name: 'Pomme', category: 'Fruits', calories: 52, protein: 0.3, carbs: 14, fats: 0.2, portion: '100g', warnings: 'Modéré en sucre' },
    { id: 2, name: 'Banane', category: 'Fruits', calories: 89, protein: 1.1, carbs: 23, fats: 0.3, portion: '100g', warnings: 'Riche en sucre' },
    { id: 3, name: 'Fraise', category: 'Fruits', calories: 32, protein: 0.8, carbs: 8, fats: 0.3, portion: '100g', warnings: 'Faible calorie' },
    { id: 4, name: 'Orange', category: 'Fruits', calories: 47, protein: 0.9, carbs: 12, fats: 0.1, portion: '100g', warnings: 'Riche en vitamine C' },
    { id: 5, name: 'Raisin', category: 'Fruits', calories: 67, protein: 0.6, carbs: 17, fats: 0.4, portion: '100g', warnings: 'Très sucré' },
    { id: 6, name: 'Mangue', category: 'Fruits', calories: 60, protein: 0.8, carbs: 15, fats: 0.4, portion: '100g', warnings: 'Riche en sucre' },
    { id: 7, name: 'Pastèque', category: 'Fruits', calories: 30, protein: 0.6, carbs: 8, fats: 0.2, portion: '100g', warnings: 'Faible calorie' },
    { id: 8, name: 'Bleuets', category: 'Fruits', calories: 57, protein: 0.7, carbs: 14, fats: 0.3, portion: '100g', warnings: 'Antioxydants' },
    { id: 9, name: 'Kiwi', category: 'Fruits', calories: 61, protein: 1.1, carbs: 15, fats: 0.5, portion: '100g', warnings: 'Riche en fibres' },
    { id: 10, name: 'Citron', category: 'Fruits', calories: 29, protein: 1.1, carbs: 9, fats: 0.3, portion: '100g', warnings: 'Acide' },
    // Légumes
    { id: 11, name: 'Brocoli', category: 'Légumes', calories: 34, protein: 2.8, carbs: 7, fats: 0.4, portion: '100g', warnings: 'Très nutritif' },
    { id: 12, name: 'Carotte', category: 'Légumes', calories: 41, protein: 0.9, carbs: 10, fats: 0.2, portion: '100g', warnings: 'Riche en bêta-carotène' },
    { id: 13, name: 'Épinard', category: 'Légumes', calories: 23, protein: 2.7, carbs: 4, fats: 0.4, portion: '100g', warnings: 'Très faible calorie' },
    { id: 14, name: 'Tomate', category: 'Légumes', calories: 18, protein: 0.9, carbs: 4, fats: 0.2, portion: '100g', warnings: 'Très faible calorie' },
    { id: 15, name: 'Poivron rouge', category: 'Légumes', calories: 31, protein: 1.0, carbs: 6, fats: 0.3, portion: '100g', warnings: 'Riche en vitamine C' },
    { id: 16, name: 'Champignon', category: 'Légumes', calories: 22, protein: 3.1, carbs: 3, fats: 0.3, portion: '100g', warnings: 'Protéines végétales' },
    { id: 17, name: 'Concombre', category: 'Légumes', calories: 16, protein: 0.7, carbs: 4, fats: 0.2, portion: '100g', warnings: 'Très hydratant' },
    { id: 18, name: 'Chou-fleur', category: 'Légumes', calories: 25, protein: 1.9, carbs: 5, fats: 0.3, portion: '100g', warnings: 'Très faible calorie' },
    { id: 19, name: 'Haricots verts', category: 'Légumes', calories: 31, protein: 1.8, carbs: 7, fats: 0.2, portion: '100g', warnings: 'Faible calorie' },
    { id: 20, name: 'Salade verte', category: 'Légumes', calories: 15, protein: 1.2, carbs: 3, fats: 0.2, portion: '100g', warnings: 'Très faible calorie' },
    // Protéines
    { id: 21, name: 'Poulet (filet)', category: 'Protéines', calories: 165, protein: 31, carbs: 0, fats: 3.6, portion: '100g', warnings: 'Excellente protéine' },
    { id: 22, name: 'Œuf', category: 'Protéines', calories: 155, protein: 13, carbs: 1, fats: 11, portion: '1 œuf (50g)', warnings: 'Cholestérol modéré' },
    { id: 23, name: 'Saumon', category: 'Protéines', calories: 208, protein: 20, carbs: 0, fats: 13, portion: '100g', warnings: 'Riche en oméga-3' },
    { id: 24, name: 'Bœuf maigre', category: 'Protéines', calories: 250, protein: 26, carbs: 0, fats: 17, portion: '100g', warnings: 'Riche en fer' },
    { id: 25, name: 'Tuna', category: 'Protéines', calories: 132, protein: 29, carbs: 0, fats: 1.3, portion: '100g', warnings: 'Excellente protéine' },
    { id: 26, name: 'Fromage blanc 0%', category: 'Protéines', calories: 63, protein: 11, carbs: 3, fats: 0.4, portion: '100g', warnings: 'Faible gras' },
    { id: 27, name: 'Yaourt nature', category: 'Protéines', calories: 59, protein: 10, carbs: 3, fats: 0.4, portion: '100g', warnings: 'Probiotiques' },
    { id: 28, name: 'Lait écrémé', category: 'Protéines', calories: 35, protein: 3.4, carbs: 5, fats: 0.1, portion: '100ml', warnings: 'Faible gras' },
    { id: 29, name: 'Lentilles cuites', category: 'Protéines', calories: 116, protein: 9, carbs: 20, fats: 0.4, portion: '100g', warnings: 'Excellente protéine végétale' },
    { id: 30, name: 'Tofu', category: 'Protéines', calories: 76, protein: 8, carbs: 2, fats: 5, portion: '100g', warnings: 'Protéine complète' },
    // Glucides
    { id: 31, name: 'Riz blanc cuit', category: 'Glucides', calories: 130, protein: 2.7, carbs: 28, fats: 0.3, portion: '100g', warnings: 'Index glycémique élevé' },
    { id: 32, name: 'Riz brun cuit', category: 'Glucides', calories: 111, protein: 2.6, carbs: 23, fats: 0.9, portion: '100g', warnings: 'Meilleur que blanc' },
    { id: 33, name: 'Pâtes cuites', category: 'Glucides', calories: 131, protein: 5, carbs: 25, fats: 1.1, portion: '100g', warnings: 'Index glycémique modéré' },
    { id: 34, name: 'Pain blanc', category: 'Glucides', calories: 265, protein: 9, carbs: 49, fats: 3.3, portion: '100g', warnings: 'Index glycémique élevé' },
    { id: 35, name: 'Pain complet', category: 'Glucides', calories: 247, protein: 12, carbs: 41, fats: 3.3, portion: '100g', warnings: 'Plus de fibres' },
    { id: 36, name: 'Flocons d\'avoine', category: 'Glucides', calories: 389, protein: 17, carbs: 67, fats: 7, portion: '100g', warnings: 'Riche en fibres' },
    { id: 37, name: 'Pomme de terre cuite', category: 'Glucides', calories: 77, protein: 2, carbs: 17, fats: 0.1, portion: '100g', warnings: 'Index glycémique modéré' },
    { id: 38, name: 'Patate douce cuite', category: 'Glucides', calories: 86, protein: 1.6, carbs: 20, fats: 0.1, portion: '100g', warnings: 'Riche en bêta-carotène' },
    { id: 39, name: 'Miel', category: 'Glucides', calories: 304, protein: 0.3, carbs: 82, fats: 0, portion: '100g', warnings: 'Très sucré' },
    { id: 40, name: 'Maïs cuit', category: 'Glucides', calories: 96, protein: 3.4, carbs: 21, fats: 1.5, portion: '100g', warnings: 'Index glycémique modéré' },
    // Produits laitiers
    { id: 41, name: 'Lait entier', category: 'Laitiers', calories: 61, protein: 3.2, carbs: 4.8, fats: 3.3, portion: '100ml', warnings: 'Modéré en gras' },
    { id: 42, name: 'Fromage cheddar', category: 'Laitiers', calories: 403, protein: 25, carbs: 1.3, fats: 33, portion: '100g', warnings: 'Très riche en gras' },
    { id: 43, name: 'Mozzarella', category: 'Laitiers', calories: 280, protein: 28, carbs: 3.1, fats: 17, portion: '100g', warnings: 'Riche en gras' },
    { id: 44, name: 'Ricotta', category: 'Laitiers', calories: 174, protein: 11, carbs: 3, fats: 13, portion: '100g', warnings: 'Modéré en gras' },
    { id: 45, name: 'Beurre', category: 'Laitiers', calories: 717, protein: 0.9, carbs: 0.1, fats: 81, portion: '100g', warnings: 'TRÈS riche en gras' },
    { id: 46, name: 'Crème fraîche', category: 'Laitiers', calories: 340, protein: 2.7, carbs: 4.2, fats: 35, portion: '100g', warnings: 'TRÈS riche en gras' },
    { id: 47, name: 'Crème 0%', category: 'Laitiers', calories: 19, protein: 0.9, carbs: 1.5, fats: 0.1, portion: '100ml', warnings: 'Zéro gras' },
    { id: 48, name: 'Yaourt grec 0%', category: 'Laitiers', calories: 59, protein: 10, carbs: 3.5, fats: 0.4, portion: '100g', warnings: 'Excellent protéine' },
    { id: 49, name: 'Fromage blanc 20%', category: 'Laitiers', calories: 104, protein: 11, carbs: 4, fats: 5, portion: '100g', warnings: 'Modéré en gras' },
    { id: 50, name: 'Lait de coco', category: 'Laitiers', calories: 230, protein: 2.3, carbs: 9, fats: 24, portion: '100ml', warnings: 'Très riche en gras' },
    // Noix et graines
    { id: 51, name: 'Amandes', category: 'Noix', calories: 579, protein: 21, carbs: 22, fats: 50, portion: '100g', warnings: 'Très calorie' },
    { id: 52, name: 'Cacahuètes', category: 'Noix', calories: 567, protein: 26, carbs: 16, fats: 49, portion: '100g', warnings: 'Très calorie' },
    { id: 53, name: 'Noisettes', category: 'Noix', calories: 628, protein: 14, carbs: 17, fats: 61, portion: '100g', warnings: 'TRÈS calorie' },
    { id: 54, name: 'Noix', category: 'Noix', calories: 654, protein: 9, carbs: 14, fats: 65, portion: '100g', warnings: 'TRÈS calorie' },
    { id: 55, name: 'Graines de lin', category: 'Noix', calories: 534, protein: 18, carbs: 29, fats: 42, portion: '100g', warnings: 'Riche en oméga-3' },
    { id: 56, name: 'Graines de courge', category: 'Noix', calories: 559, protein: 30, carbs: 11, fats: 49, portion: '100g', warnings: 'Très calorie' },
    { id: 57, name: 'Tahini', category: 'Noix', calories: 595, protein: 17, carbs: 21, fats: 54, portion: '100g', warnings: 'TRÈS calorie' },
    { id: 58, name: 'Beurre d\'arachide', category: 'Noix', calories: 588, protein: 25, carbs: 20, fats: 50, portion: '100g', warnings: 'TRÈS calorie' },
    { id: 59, name: 'Noix de coco râpée', category: 'Noix', calories: 660, protein: 7, carbs: 24, fats: 64, portion: '100g', warnings: 'TRÈS calorie' },
    { id: 60, name: 'Graines de chanvre', category: 'Noix', calories: 568, protein: 31, carbs: 12, fats: 48, portion: '100g', warnings: 'Protéine complète' }
  ]);

  // Filtrer les aliments selon la recherche
  const filteredFoods = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return foodDatabase.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, foodDatabase]);

  const addMeal = (food, quantity = 100) => {
    const mealQuantity = parseFloat(quantity);
    if (isNaN(mealQuantity) || mealQuantity <= 0) {
      alert('Veuillez entrer une quantité valide');
      return;
    }

    const multiplier = mealQuantity / parseInt(food.portion);
    const mealData = {
      id: Date.now(),
      ...food,
      quantity: mealQuantity,
      totalCalories: Math.round(food.calories * multiplier),
      totalProtein: Math.round(food.protein * multiplier * 10) / 10,
      totalCarbs: Math.round(food.carbs * multiplier * 10) / 10,
      totalFats: Math.round(food.fats * multiplier * 10) / 10
    };
    setSelectedMeals([...selectedMeals, mealData]);
    setSearchTerm('');
  };

  const removeMeal = (id) => {
    setSelectedMeals(selectedMeals.filter(meal => meal.id !== id));
  };

  const addCustomFood = () => {
    if (!customFood.name || !customFood.calories || !customFood.protein || !customFood.carbs || !customFood.fats) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const newFood = {
      id: Math.max(...foodDatabase.map(f => f.id), 0) + 1,
      name: customFood.name,
      category: 'Personnalisé',
      calories: parseFloat(customFood.calories),
      protein: parseFloat(customFood.protein),
      carbs: parseFloat(customFood.carbs),
      fats: parseFloat(customFood.fats),
      portion: customFood.portion + 'g',
      warnings: 'Aliment personnalisé'
    };

    setFoodDatabase([...foodDatabase, newFood]);
    setCustomFood({ name: '', calories: '', protein: '', carbs: '', fats: '', portion: '100' });
    setShowAddForm(false);
    alert('Aliment ajouté à votre base de données');
  };

  // Calcul des totaux
  const totals = selectedMeals.reduce((acc, meal) => ({
    calories: acc.calories + meal.totalCalories,
    protein: acc.protein + meal.totalProtein,
    carbs: acc.carbs + meal.totalCarbs,
    fats: acc.fats + meal.totalFats
  }), { calories: 0, protein: 0, carbs: 0, fats: 0 });

  const getDailyGoal = () => {
    const user = currentUser?.profile;
    if (!user) return 2000;
    
    const weight = user.weight || 70;
    const height = user.height || 1.75;
    const age = user.age || 30;
    
    if (user.objective === 'PERTE_DE_POIDS') return weight * 25;
    if (user.objective === 'PRISE_DE_MASSE') return weight * 35;
    return weight * 30;
  };

  const dailyGoal = getDailyGoal();
  const caloriePercentage = (totals.calories / dailyGoal) * 100;

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
        <h1 style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>🍎 Calculateur de Calories</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>

      <div className="view-content" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Barre de recherche */}
        <div style={{ marginBottom: '30px' }}>
          <input
            type="text"
            placeholder="🔍 Rechercher un aliment (fruits, légumes, protéines...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1rem',
              borderRadius: '10px',
              border: '2px solid #667eea',
              background: isDarkMode ? '#1a1a2e' : '#ffffff',
              color: isDarkMode ? '#ffffff' : '#000000',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <button
            onClick={() => setShowAddForm(true)}
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            ➕ Ajouter un aliment personnalisé
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          {/* Colonne gauche: Liste des aliments trouvés */}
          <div>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📋 Aliments ({filteredFoods.length})</h3>
            <div style={{
              background: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(102, 126, 234, 0.05)',
              borderRadius: '12px',
              padding: '15px',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              {filteredFoods.length > 0 ? (
                filteredFoods.map(food => (
                  <div key={food.id} style={{
                    background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.08)',
                    borderLeft: '4px solid #667eea',
                    padding: '12px',
                    marginBottom: '10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.08)';
                  }}
                  onClick={() => addMeal(food)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ margin: '0 0 5px 0', color: '#667eea' }}>{food.name}</h4>
                        <p style={{ margin: '0', fontSize: '0.85rem', color: isDarkMode ? '#aaa' : '#666' }}>
                          {food.category} • {food.calories} cal • {food.portion}
                        </p>
                      </div>
                      <button
                        style={{
                          background: '#667eea',
                          color: 'white',
                          border: 'none',
                          padding: '5px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.9rem'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          addMeal(food);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : searchTerm ? (
                <p style={{ color: isDarkMode ? '#999' : '#999', textAlign: 'center', padding: '20px' }}>
                  Aucun aliment trouvé. Créez un aliment personnalisé !
                </p>
              ) : (
                <p style={{ color: isDarkMode ? '#999' : '#999', textAlign: 'center', padding: '20px' }}>
                  Recherchez un aliment pour commencer
                </p>
              )}
            </div>
          </div>

          {/* Colonne droite: Résumé nutritionnel */}
          <div>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Résumé Nutritionnel</h3>
            <div style={{
              background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.08)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              {/* Barre de calories */}
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 'bold' }}>Calories</span>
                  <span style={{ color: caloriePercentage > 100 ? '#ff6b6b' : '#667eea', fontWeight: 'bold' }}>
                    {totals.calories} / {dailyGoal} kcal ({Math.round(caloriePercentage)}%)
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '12px',
                  background: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '6px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${Math.min(caloriePercentage, 100)}%`,
                    height: '100%',
                    background: caloriePercentage > 100 ? '#ff6b6b' : 'linear-gradient(90deg, #667eea, #764ba2)',
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>

              {/* Macros */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  background: isDarkMode ? 'rgba(74, 222, 128, 0.1)' : 'rgba(74, 222, 128, 0.2)',
                  padding: '15px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #4ade80'
                }}>
                  <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: isDarkMode ? '#aaa' : '#666' }}>Protéines</p>
                  <h4 style={{ margin: '0', color: '#4ade80', fontSize: '1.3rem' }}>{totals.protein}g</h4>
                  <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: isDarkMode ? '#777' : '#999' }}>Cible: {Math.round(dailyGoal * 0.3 / 4)}g</p>
                </div>
                <div style={{
                  background: isDarkMode ? 'rgba(251, 191, 36, 0.1)' : 'rgba(251, 191, 36, 0.2)',
                  padding: '15px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #fbbf24'
                }}>
                  <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: isDarkMode ? '#aaa' : '#666' }}>Glucides</p>
                  <h4 style={{ margin: '0', color: '#fbbf24', fontSize: '1.3rem' }}>{totals.carbs}g</h4>
                  <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: isDarkMode ? '#777' : '#999' }}>Cible: {Math.round(dailyGoal * 0.45 / 4)}g</p>
                </div>
                <div style={{
                  background: isDarkMode ? 'rgba(248, 113, 113, 0.1)' : 'rgba(248, 113, 113, 0.2)',
                  padding: '15px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #f87171',
                  gridColumn: '1 / -1'
                }}>
                  <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: isDarkMode ? '#aaa' : '#666' }}>Lipides (Graisses)</p>
                  <h4 style={{ margin: '0', color: '#f87171', fontSize: '1.3rem' }}>{totals.fats}g</h4>
                  <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: isDarkMode ? '#777' : '#999' }}>Cible: {Math.round(dailyGoal * 0.25 / 9)}g</p>
                </div>
              </div>

              {/* Répartition macros */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '15px',
                padding: '15px',
                background: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                borderRadius: '8px'
              }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: '4px', background: '#4ade80', borderRadius: '2px', marginBottom: '5px' }} />
                  <p style={{ fontSize: '0.8rem', margin: '0', color: isDarkMode ? '#aaa' : '#666' }}>
                    P: {Math.round((totals.protein * 4 / totals.calories) * 100) || 0}%
                  </p>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: '4px', background: '#fbbf24', borderRadius: '2px', marginBottom: '5px' }} />
                  <p style={{ fontSize: '0.8rem', margin: '0', color: isDarkMode ? '#aaa' : '#666' }}>
                    C: {Math.round((totals.carbs * 4 / totals.calories) * 100) || 0}%
                  </p>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: '4px', background: '#f87171', borderRadius: '2px', marginBottom: '5px' }} />
                  <p style={{ fontSize: '0.8rem', margin: '0', color: isDarkMode ? '#aaa' : '#666' }}>
                    L: {Math.round((totals.fats * 9 / totals.calories) * 100) || 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repas sélectionnés */}
        <div>
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>🍽️ Vos Repas du Jour ({selectedMeals.length})</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '15px'
          }}>
            {selectedMeals.length > 0 ? (
              selectedMeals.map(meal => (
                <div key={meal.id} style={{
                  background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.08)',
                  borderRadius: '12px',
                  padding: '15px',
                  border: '2px solid rgba(102, 126, 234, 0.3)',
                  position: 'relative'
                }}>
                  <button
                    onClick={() => removeMeal(meal.id)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    ✕
                  </button>
                  <h4 style={{ margin: '0 0 10px 0', color: '#667eea' }}>{meal.name}</h4>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem', color: isDarkMode ? '#ccc' : '#666' }}>
                    {meal.quantity}g • {meal.warnings}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginTop: '10px',
                    padding: '10px',
                    background: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '8px'
                  }}>
                    <div>
                      <p style={{ margin: '0', fontSize: '0.8rem', color: isDarkMode ? '#aaa' : '#666' }}>Calories</p>
                      <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#667eea' }}>{meal.totalCalories}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0', fontSize: '0.8rem', color: isDarkMode ? '#aaa' : '#666' }}>Protéines</p>
                      <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#4ade80' }}>{meal.totalProtein}g</p>
                    </div>
                    <div>
                      <p style={{ margin: '0', fontSize: '0.8rem', color: isDarkMode ? '#aaa' : '#666' }}>Glucides</p>
                      <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#fbbf24' }}>{meal.totalCarbs}g</p>
                    </div>
                    <div>
                      <p style={{ margin: '0', fontSize: '0.8rem', color: isDarkMode ? '#aaa' : '#666' }}>Lipides</p>
                      <p style={{ margin: '3px 0 0 0', fontWeight: 'bold', color: '#f87171' }}>{meal.totalFats}g</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center', 
                color: isDarkMode ? '#999' : '#999',
                padding: '30px'
              }}>
                Recherchez et ajoutez des aliments pour voir votre résumé nutritionnel
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal Aliment personnalisé */}
      {showAddForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setShowAddForm(false)}>
          <div style={{
            background: isDarkMode ? '#1a1a2e' : '#ffffff',
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '500px',
            width: '90%',
            color: isDarkMode ? '#ffffff' : '#000000'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0, color: '#667eea' }}>➕ Ajouter un Aliment Personnalisé</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="Nom de l'aliment"
                value={customFood.name}
                onChange={(e) => setCustomFood({ ...customFood, name: e.target.value })}
                style={{
                  padding: '10px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  background: isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <input
                type="number"
                placeholder="Calories (par portion)"
                value={customFood.calories}
                onChange={(e) => setCustomFood({ ...customFood, calories: e.target.value })}
                style={{
                  padding: '10px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  background: isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <input
                type="number"
                placeholder="Protéines (g)"
                value={customFood.protein}
                onChange={(e) => setCustomFood({ ...customFood, protein: e.target.value })}
                style={{
                  padding: '10px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  background: isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <input
                type="number"
                placeholder="Glucides (g)"
                value={customFood.carbs}
                onChange={(e) => setCustomFood({ ...customFood, carbs: e.target.value })}
                style={{
                  padding: '10px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  background: isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <input
                type="number"
                placeholder="Lipides (g)"
                value={customFood.fats}
                onChange={(e) => setCustomFood({ ...customFood, fats: e.target.value })}
                style={{
                  padding: '10px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  background: isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <input
                type="number"
                placeholder="Portion (g)"
                value={customFood.portion}
                onChange={(e) => setCustomFood({ ...customFood, portion: e.target.value })}
                style={{
                  padding: '10px',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  background: isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={addCustomFood}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Ajouter
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalorieTracker;
