import React, { useState, useEffect } from 'react';

function Meals({ onBack, isDarkMode }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      loadMealsForObjective(user.profile?.objective);
    }
  }, []);

  const allMeals = {
    perte_poids: [
      { name: 'Poulet grillé + brocoli', calories: 280, proteins: 35, carbs: 15, fats: 5, type: 'Déjeuner' },
      { name: 'Blanc de poulet + riz complet', calories: 320, proteins: 40, carbs: 30, fats: 4, type: 'Déjeuner' },
      { name: 'Œufs brouillés épinards', calories: 180, proteins: 12, carbs: 5, fats: 10, type: 'Petit-déj' },
      { name: 'Yaourt grec nature', calories: 100, proteins: 15, carbs: 5, fats: 2, type: 'Petit-déj' },
      { name: 'Poisson blanc + légumes', calories: 250, proteins: 35, carbs: 10, fats: 5, type: 'Dîner' },
      { name: 'Dinde + patate douce', calories: 300, proteins: 38, carbs: 30, fats: 5, type: 'Dîner' },
      { name: 'Soupe minceur + protéines', calories: 200, proteins: 20, carbs: 20, fats: 3, type: 'Dîner' },
      { name: 'Flocons avoine + fruits rouges', calories: 250, proteins: 8, carbs: 45, fats: 3, type: 'Petit-déj' },
      { name: 'Salade César allégée', calories: 280, proteins: 25, carbs: 15, fats: 10, type: 'Déjeuner' },
      { name: 'Œufs + brocoli', calories: 220, proteins: 22, carbs: 10, fats: 10, type: 'Dîner' },
      { name: 'Filet de trout + épinards', calories: 260, proteins: 32, carbs: 8, fats: 10, type: 'Dîner' },
      { name: 'Poulet + légumes vapeur', calories: 270, proteins: 36, carbs: 12, fats: 6, type: 'Déjeuner' },
      { name: 'Œufs à la coque + tomate', calories: 150, proteins: 12, carbs: 8, fats: 7, type: 'Petit-déj' },
      { name: 'Thon en boîte + salade', calories: 240, proteins: 30, carbs: 10, fats: 8, type: 'Déjeuner' },
      { name: 'Blanc de poulet mariné', calories: 260, proteins: 38, carbs: 5, fats: 8, type: 'Dîner' },
      { name: 'Compote + yaourt sans sucre', calories: 120, proteins: 10, carbs: 15, fats: 1, type: 'Petit-déj' },
      { name: 'Salade protéinée poulet', calories: 300, proteins: 32, carbs: 20, fats: 10, type: 'Déjeuner' },
      { name: 'Soupe miso + tofu', calories: 180, proteins: 18, carbs: 12, fats: 6, type: 'Dîner' },
      { name: 'Omelette aux légumes', calories: 200, proteins: 15, carbs: 8, fats: 12, type: 'Petit-déj' },
      { name: 'Crevettes grillées + riz', calories: 310, proteins: 28, carbs: 35, fats: 5, type: 'Déjeuner' },
      { name: 'Tofu grillé + légumes', calories: 240, proteins: 22, carbs: 15, fats: 10, type: 'Dîner' },
      { name: 'Œufs poché + pain complet', calories: 280, proteins: 14, carbs: 30, fats: 10, type: 'Petit-déj' },
      { name: 'Poisson à la vapeur', calories: 230, proteins: 34, carbs: 8, fats: 6, type: 'Dîner' },
      { name: 'Smoothie protéiné léger', calories: 200, proteins: 20, carbs: 20, fats: 3, type: 'Petit-déj' },
      { name: 'Salade niçoise allégée', calories: 320, proteins: 26, carbs: 25, fats: 12, type: 'Déjeuner' },
      { name: 'Jambon blanc + melon', calories: 180, proteins: 22, carbs: 18, fats: 4, type: 'Petit-déj' },
      { name: 'Bœuf maigre grillé', calories: 290, proteins: 40, carbs: 5, fats: 12, type: 'Dîner' },
      { name: 'Œufs au plat + épinards', calories: 220, proteins: 16, carbs: 5, fats: 16, type: 'Petit-déj' },
      { name: 'Cabillaud en croûte sel', calories: 260, proteins: 36, carbs: 8, fats: 10, type: 'Dîner' },
      { name: 'Riz blanc + poulet sec', calories: 350, proteins: 38, carbs: 40, fats: 5, type: 'Déjeuner' },
      { name: 'Fruits rouges + yaourt', calories: 140, proteins: 12, carbs: 18, fats: 1, type: 'Petit-déj' },
      { name: 'Lieu vapeur + citron', calories: 210, proteins: 32, carbs: 5, fats: 6, type: 'Dîner' },
      { name: 'Œufs brouillés tomate', calories: 190, proteins: 14, carbs: 8, fats: 11, type: 'Petit-déj' },
      { name: 'Escalope de dinde', calories: 270, proteins: 40, carbs: 8, fats: 8, type: 'Dîner' },
      { name: 'Riz complet + thon', calories: 340, proteins: 32, carbs: 45, fats: 5, type: 'Déjeuner' },
      { name: 'Œufs dur + concombre', calories: 160, proteins: 14, carbs: 5, fats: 10, type: 'Petit-déj' },
      { name: 'Saint-pierre grillé', calories: 250, proteins: 38, carbs: 5, fats: 8, type: 'Dîner' },
      { name: 'Pâtes complètes sauce tomate', calories: 320, proteins: 14, carbs: 55, fats: 4, type: 'Déjeuner' },
      { name: 'Porridge allégé miel', calories: 220, proteins: 8, carbs: 40, fats: 3, type: 'Petit-déj' },
      { name: 'Morue à la vapeur', calories: 240, proteins: 35, carbs: 8, fats: 7, type: 'Dîner' },
      { name: 'Lentilles + riz', calories: 300, proteins: 16, carbs: 50, fats: 3, type: 'Déjeuner' },
      { name: 'Fromage blanc miel', calories: 150, proteins: 18, carbs: 15, fats: 1, type: 'Petit-déj' },
      { name: 'Flétan grillé', calories: 260, proteins: 38, carbs: 6, fats: 10, type: 'Dîner' },
      { name: 'Merlu + légumes', calories: 280, proteins: 36, carbs: 15, fats: 8, type: 'Déjeuner' },
      { name: 'Œufs au four', calories: 210, proteins: 18, carbs: 5, fats: 14, type: 'Petit-déj' },
      { name: 'Turbot vapeur', calories: 240, proteins: 38, carbs: 5, fats: 7, type: 'Dîner' },
      { name: 'Pois cassés + carotte', calories: 280, proteins: 14, carbs: 45, fats: 3, type: 'Déjeuner' },
      { name: 'Muesli allégé fruits', calories: 200, proteins: 8, carbs: 40, fats: 2, type: 'Petit-déj' },
      { name: 'Rouget barbeau', calories: 220, proteins: 36, carbs: 5, fats: 6, type: 'Dîner' },
      { name: 'Haricots rouges + riz', calories: 310, proteins: 15, carbs: 50, fats: 3, type: 'Déjeuner' }
    ],
    musculation: [
      { name: 'Steak + riz blanc', calories: 650, proteins: 55, carbs: 70, fats: 15, type: 'Déjeuner' },
      { name: 'Oeufs + pain complet beurre', calories: 450, proteins: 20, carbs: 50, fats: 15, type: 'Petit-déj' },
      { name: 'Pancakes protéinés miel', calories: 520, proteins: 22, carbs: 60, fats: 12, type: 'Petit-déj' },
      { name: 'Poulet + pâtes blanches', calories: 680, proteins: 50, carbs: 75, fats: 12, type: 'Déjeuner' },
      { name: 'Saumon + riz', calories: 680, proteins: 48, carbs: 65, fats: 16, type: 'Dîner' },
      { name: 'Œufs + féculents', calories: 600, proteins: 45, carbs: 55, fats: 14, type: 'Dîner' },
      { name: 'Porridge + fruits secs', calories: 480, proteins: 15, carbs: 65, fats: 10, type: 'Petit-déj' },
      { name: 'Pâtes + viande hachée', calories: 720, proteins: 45, carbs: 80, fats: 15, type: 'Déjeuner' },
      { name: 'Patate + thon huile olive', calories: 650, proteins: 40, carbs: 70, fats: 14, type: 'Déjeuner' },
      { name: 'Steak + patate douce', calories: 700, proteins: 55, carbs: 60, fats: 18, type: 'Dîner' },
      { name: 'Filet + riz complet', calories: 620, proteins: 50, carbs: 60, fats: 12, type: 'Dîner' },
      { name: 'Œufs omelette fromage', calories: 380, proteins: 22, carbs: 10, fats: 28, type: 'Petit-déj' },
      { name: 'Blanc poulet + riz blanc', calories: 580, proteins: 48, carbs: 65, fats: 8, type: 'Déjeuner' },
      { name: 'Trout + pommes terre', calories: 640, proteins: 46, carbs: 60, fats: 18, type: 'Dîner' },
      { name: 'Riz blanc + escalope', calories: 660, proteins: 52, carbs: 70, fats: 12, type: 'Déjeuner' },
      { name: 'Œufs brouillés pain toast', calories: 420, proteins: 18, carbs: 45, fats: 16, type: 'Petit-déj' },
      { name: 'Merlan + riz gluant', calories: 600, proteins: 44, carbs: 65, fats: 10, type: 'Dîner' },
      { name: 'Lait + fruits secs', calories: 480, proteins: 16, carbs: 65, fats: 12, type: 'Petit-déj' },
      { name: 'Crevettes grillées riz', calories: 620, proteins: 42, carbs: 70, fats: 10, type: 'Déjeuner' },
      { name: 'Boeuf maigre + fécule', calories: 680, proteins: 58, carbs: 60, fats: 14, type: 'Dîner' },
      { name: 'Riz blanc poulet légumes', calories: 640, proteins: 50, carbs: 70, fats: 10, type: 'Déjeuner' },
      { name: 'Poisson blanc + pain', calories: 520, proteins: 40, carbs: 50, fats: 12, type: 'Dîner' },
      { name: 'Céréales complètes lait', calories: 450, proteins: 14, carbs: 70, fats: 8, type: 'Petit-déj' },
      { name: 'Pâtes sauce bolognaise', calories: 700, proteins: 48, carbs: 75, fats: 16, type: 'Déjeuner' },
      { name: 'Œufs + légumes + féculents', calories: 580, proteins: 22, carbs: 65, fats: 20, type: 'Dîner' },
      { name: 'Smoothie protéiné complet', calories: 420, proteins: 28, carbs: 50, fats: 8, type: 'Petit-déj' },
      { name: 'Cabillaud + patates', calories: 600, proteins: 48, carbs: 60, fats: 10, type: 'Dîner' },
      { name: 'Lieu + riz blanc', calories: 620, proteins: 46, carbs: 70, fats: 8, type: 'Déjeuner' },
      { name: 'Œufs ratatouille pain', calories: 460, proteins: 20, carbs: 48, fats: 18, type: 'Petit-déj' },
      { name: 'Steak pommes frites', calories: 740, proteins: 52, carbs: 70, fats: 20, type: 'Dîner' },
      { name: 'Riz complet boeuf', calories: 680, proteins: 50, carbs: 75, fats: 12, type: 'Déjeuner' },
      { name: 'Saint-pierre + féculents', calories: 640, proteins: 48, carbs: 65, fats: 12, type: 'Dîner' },
      { name: 'Muesli + lait + miel', calories: 480, proteins: 16, carbs: 70, fats: 10, type: 'Petit-déj' },
      { name: 'Turbot + riz', calories: 620, proteins: 50, carbs: 65, fats: 12, type: 'Déjeuner' },
      { name: 'Rouget + pain complet', calories: 580, proteins: 44, carbs: 55, fats: 14, type: 'Dîner' },
      { name: 'Pâtes complètes + poulet', calories: 660, proteins: 48, carbs: 75, fats: 10, type: 'Déjeuner' },
      { name: 'Œufs au four + pain', calories: 520, proteins: 24, carbs: 48, fats: 18, type: 'Petit-déj' },
      { name: 'Flétan + pommes terre', calories: 640, proteins: 50, carbs: 65, fats: 12, type: 'Dîner' },
      { name: 'Viande rouge + riz', calories: 700, proteins: 55, carbs: 70, fats: 14, type: 'Déjeuner' },
      { name: 'Merlu + féculents', calories: 600, proteins: 46, carbs: 60, fats: 10, type: 'Dîner' },
      { name: 'Avoine + banane + miel', calories: 500, proteins: 12, carbs: 75, fats: 10, type: 'Petit-déj' },
      { name: 'Thon + pâtes', calories: 680, proteins: 48, carbs: 75, fats: 10, type: 'Déjeuner' },
      { name: 'Poisson vapeur + pain', calories: 560, proteins: 42, carbs: 50, fats: 12, type: 'Dîner' },
      { name: 'Oeufs jambon pain', calories: 480, proteins: 26, carbs: 45, fats: 16, type: 'Petit-déj' },
      { name: 'Escalope + riz blanc', calories: 660, proteins: 52, carbs: 70, fats: 12, type: 'Déjeuner' },
      { name: 'Steak tartare + frites', calories: 720, proteins: 45, carbs: 70, fats: 22, type: 'Dîner' },
      { name: 'Riz gluant + poulet épicé', calories: 640, proteins: 48, carbs: 70, fats: 10, type: 'Déjeuner' },
      { name: 'Poisson grillé + pain', calories: 600, proteins: 44, carbs: 55, fats: 14, type: 'Dîner' },
      { name: 'Flocons + œufs', calories: 520, proteins: 22, carbs: 60, fats: 14, type: 'Petit-déj' },
      { name: 'Pâtes + thon', calories: 700, proteins: 50, carbs: 75, fats: 12, type: 'Déjeuner' }
    ],
    tonification: [
      { name: 'Poulet + légumes + riz', calories: 520, proteins: 40, carbs: 50, fats: 10, type: 'Déjeuner' },
      { name: 'Oeufs + pain complet', calories: 320, proteins: 18, carbs: 40, fats: 10, type: 'Petit-déj' },
      { name: 'Yaourt + granola', calories: 280, proteins: 12, carbs: 45, fats: 6, type: 'Petit-déj' },
      { name: 'Smoothie protéiné', calories: 300, proteins: 20, carbs: 35, fats: 8, type: 'Petit-déj' },
      { name: 'Œufs + pâtes complètes', calories: 480, proteins: 28, carbs: 60, fats: 10, type: 'Déjeuner' },
      { name: 'Poisson + brocoli + riz', calories: 500, proteins: 35, carbs: 55, fats: 10, type: 'Déjeuner' },
      { name: 'Dinde + sweet potato', calories: 450, proteins: 38, carbs: 45, fats: 8, type: 'Dîner' },
      { name: 'Œufs + haricots', calories: 400, proteins: 28, carbs: 40, fats: 12, type: 'Dîner' },
      { name: 'Poisson blanc + légumes', calories: 380, proteins: 40, carbs: 30, fats: 8, type: 'Dîner' },
      { name: 'Riz complet + poulet', calories: 520, proteins: 40, carbs: 55, fats: 8, type: 'Déjeuner' },
      { name: 'Flocons + fruits', calories: 280, proteins: 10, carbs: 50, fats: 4, type: 'Petit-déj' },
      { name: 'Œufs omelette épinards', calories: 320, proteins: 20, carbs: 15, fats: 18, type: 'Petit-déj' },
      { name: 'Viande maigre + légumes', calories: 480, proteins: 42, carbs: 40, fats: 10, type: 'Déjeuner' },
      { name: 'Saumon + riz complet', calories: 520, proteins: 38, carbs: 50, fats: 14, type: 'Dîner' },
      { name: 'Thon + salade', calories: 380, proteins: 32, carbs: 25, fats: 12, type: 'Déjeuner' },
      { name: 'Fromage blanc fruits', calories: 250, proteins: 20, carbs: 30, fats: 4, type: 'Petit-déj' },
      { name: 'Pâtes complètes + tomate', calories: 420, proteins: 16, carbs: 60, fats: 8, type: 'Déjeuner' },
      { name: 'Poisson vapeur + légumes', calories: 400, proteins: 38, carbs: 35, fats: 8, type: 'Dîner' },
      { name: 'Œufs au plat pain', calories: 340, proteins: 18, carbs: 35, fats: 14, type: 'Petit-déj' },
      { name: 'Escalope + riz', calories: 520, proteins: 42, carbs: 55, fats: 8, type: 'Déjeuner' },
      { name: 'Merlan + pommes terre', calories: 480, proteins: 36, carbs: 50, fats: 8, type: 'Dîner' },
      { name: 'Porridge + fruits', calories: 300, proteins: 10, carbs: 55, fats: 4, type: 'Petit-déj' },
      { name: 'Lentilles + riz', calories: 420, proteins: 18, carbs: 60, fats: 6, type: 'Déjeuner' },
      { name: 'Saint-pierre + légumes', calories: 420, proteins: 38, carbs: 35, fats: 8, type: 'Dîner' },
      { name: 'Œufs brouillés tomate', calories: 300, proteins: 18, carbs: 20, fats: 14, type: 'Petit-déj' },
      { name: 'Cabillaud + riz blanc', calories: 480, proteins: 40, carbs: 50, fats: 6, type: 'Déjeuner' },
      { name: 'Turbot + féculents', calories: 500, proteins: 42, carbs: 50, fats: 8, type: 'Dîner' },
      { name: 'Muesli + yaourt', calories: 280, proteins: 14, carbs: 45, fats: 5, type: 'Petit-déj' },
      { name: 'Rouget + pâtes complètes', calories: 520, proteins: 38, carbs: 55, fats: 10, type: 'Déjeuner' },
      { name: 'Flétan + légumes', calories: 460, proteins: 42, carbs: 35, fats: 10, type: 'Dîner' },
      { name: 'Œufs avec fromage pain', calories: 360, proteins: 20, carbs: 35, fats: 16, type: 'Petit-déj' },
      { name: 'Steak maigre salade', calories: 500, proteins: 45, carbs: 30, fats: 12, type: 'Déjeuner' },
      { name: 'Lieu + riz complet', calories: 480, proteins: 38, carbs: 50, fats: 6, type: 'Dîner' },
      { name: 'Avoine + fruits secs', calories: 320, proteins: 12, carbs: 55, fats: 6, type: 'Petit-déj' },
      { name: 'Merluche + pain complet', calories: 460, proteins: 36, carbs: 45, fats: 8, type: 'Déjeuner' },
      { name: 'Poisson blanc sauce', calories: 420, proteins: 40, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Œufs œuf mayo', calories: 380, proteins: 22, carbs: 30, fats: 18, type: 'Petit-déj' },
      { name: 'Thon + riz complet', calories: 520, proteins: 40, carbs: 55, fats: 8, type: 'Déjeuner' },
      { name: 'Dorade + légumes', calories: 480, proteins: 42, carbs: 35, fats: 10, type: 'Dîner' },
      { name: 'Flocons + lait miel', calories: 300, proteins: 12, carbs: 50, fats: 5, type: 'Petit-déj' },
      { name: 'Filet + pâtes', calories: 540, proteins: 42, carbs: 60, fats: 8, type: 'Déjeuner' },
      { name: 'Viande blanche + légumes', calories: 420, proteins: 40, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Œufs jambon complet', calories: 360, proteins: 22, carbs: 35, fats: 14, type: 'Petit-déj' },
      { name: 'Bar + riz blanc', calories: 520, proteins: 40, carbs: 55, fats: 8, type: 'Déjeuner' },
      { name: 'Trout sauce légère', calories: 460, proteins: 40, carbs: 30, fats: 12, type: 'Dîner' },
      { name: 'Granola + yaourt grec', calories: 320, proteins: 16, carbs: 45, fats: 8, type: 'Petit-déj' },
      { name: 'Lieu + pâtes complètes', calories: 540, proteins: 38, carbs: 60, fats: 8, type: 'Déjeuner' },
      { name: 'Poisson vapeur pain', calories: 480, proteins: 42, carbs: 45, fats: 8, type: 'Dîner' },
      { name: 'Œufs pain complet', calories: 360, proteins: 18, carbs: 40, fats: 12, type: 'Petit-déj' }
    ],
    endurance: [
      { name: 'Oeufs + pain + fruits', calories: 380, proteins: 16, carbs: 55, fats: 10, type: 'Petit-déj' },
      { name: 'Flocons + lait + miel', calories: 420, proteins: 12, carbs: 70, fats: 8, type: 'Petit-déj' },
      { name: 'Banane + cacahuètes + pain', calories: 400, proteins: 15, carbs: 60, fats: 12, type: 'Petit-déj' },
      { name: 'Pâtes + poulet sauce', calories: 580, proteins: 38, carbs: 70, fats: 10, type: 'Déjeuner' },
      { name: 'Riz + poisson + légumes', calories: 560, proteins: 35, carbs: 75, fats: 8, type: 'Déjeuner' },
      { name: 'Patate + steak haché', calories: 600, proteins: 42, carbs: 70, fats: 12, type: 'Déjeuner' },
      { name: 'Pâtes complètes tomate', calories: 480, proteins: 22, carbs: 70, fats: 8, type: 'Dîner' },
      { name: 'Riz blanc + œufs', calories: 500, proteins: 25, carbs: 65, fats: 10, type: 'Dîner' },
      { name: 'Semoule + légumes', calories: 450, proteins: 18, carbs: 70, fats: 6, type: 'Dîner' },
      { name: 'Porridge + banane', calories: 420, proteins: 12, carbs: 75, fats: 6, type: 'Petit-déj' },
      { name: 'Pain complet jambon', calories: 360, proteins: 18, carbs: 50, fats: 8, type: 'Petit-déj' },
      { name: 'Riz gluant poulet', calories: 580, proteins: 38, carbs: 75, fats: 8, type: 'Déjeuner' },
      { name: 'Merlu + riz', calories: 520, proteins: 36, carbs: 70, fats: 6, type: 'Dîner' },
      { name: 'Œufs pâtes sauce', calories: 520, proteins: 24, carbs: 70, fats: 12, type: 'Petit-déj' },
      { name: 'Bœuf + féculents', calories: 600, proteins: 40, carbs: 75, fats: 12, type: 'Déjeuner' },
      { name: 'Poisson + pain complet', calories: 480, proteins: 32, carbs: 55, fats: 10, type: 'Dîner' },
      { name: 'Avoine + raisins secs', calories: 420, proteins: 10, carbs: 75, fats: 8, type: 'Petit-déj' },
      { name: 'Pâtes blanches beurre', calories: 560, proteins: 18, carbs: 80, fats: 12, type: 'Déjeuner' },
      { name: 'Riz + sauce tomate', calories: 480, proteins: 14, carbs: 85, fats: 6, type: 'Dîner' },
      { name: 'Flocons + banane miel', calories: 450, proteins: 12, carbs: 75, fats: 10, type: 'Petit-déj' },
      { name: 'Œufs pain beurre jam', calories: 420, proteins: 14, carbs: 60, fats: 14, type: 'Petit-déj' },
      { name: 'Steak + patates frites', calories: 680, proteins: 44, carbs: 75, fats: 18, type: 'Déjeuner' },
      { name: 'Saint-pierre + fécule', calories: 520, proteins: 38, carbs: 70, fats: 8, type: 'Dîner' },
      { name: 'Muesli lait fruits', calories: 420, proteins: 14, carbs: 70, fats: 8, type: 'Petit-déj' },
      { name: 'Turbot + riz blanc', calories: 560, proteins: 40, carbs: 70, fats: 10, type: 'Déjeuner' },
      { name: 'Lieu + pain complet', calories: 480, proteins: 34, carbs: 55, fats: 10, type: 'Dîner' },
      { name: 'Œufs complet pain', calories: 400, proteins: 16, carbs: 55, fats: 12, type: 'Petit-déj' },
      { name: 'Rouget + pâtes', calories: 580, proteins: 38, carbs: 75, fats: 10, type: 'Déjeuner' },
      { name: 'Flétan + féculents', calories: 540, proteins: 40, carbs: 65, fats: 10, type: 'Dîner' },
      { name: 'Granola lait fruits', calories: 440, proteins: 12, carbs: 75, fats: 10, type: 'Petit-déj' },
      { name: 'Merlan + riz complet', calories: 560, proteins: 38, carbs: 75, fats: 8, type: 'Déjeuner' },
      { name: 'Dorade + pain', calories: 500, proteins: 36, carbs: 55, fats: 12, type: 'Dîner' },
      { name: 'Avoine + miel + fruits', calories: 460, proteins: 10, carbs: 80, fats: 8, type: 'Petit-déj' },
      { name: 'Bar + pâtes', calories: 600, proteins: 40, carbs: 75, fats: 10, type: 'Déjeuner' },
      { name: 'Thon + féculents', calories: 540, proteins: 38, carbs: 70, fats: 8, type: 'Dîner' },
      { name: 'Œufs jambon pain', calories: 420, proteins: 18, carbs: 55, fats: 14, type: 'Petit-déj' },
      { name: 'Filet + riz blanc', calories: 600, proteins: 42, carbs: 75, fats: 10, type: 'Déjeuner' },
      { name: 'Poisson sauce pain', calories: 520, proteins: 38, carbs: 55, fats: 12, type: 'Dîner' },
      { name: 'Flocons + fruits compote', calories: 420, proteins: 10, carbs: 75, fats: 6, type: 'Petit-déj' },
      { name: 'Pâtes complet sauce', calories: 580, proteins: 22, carbs: 80, fats: 10, type: 'Déjeuner' },
      { name: 'Riz sauce légume', calories: 520, proteins: 16, carbs: 85, fats: 8, type: 'Dîner' },
      { name: 'Porridge complet', calories: 440, proteins: 12, carbs: 75, fats: 8, type: 'Petit-déj' },
      { name: 'Œufs pâtes sauce', calories: 560, proteins: 26, carbs: 70, fats: 14, type: 'Déjeuner' },
      { name: 'Escalope + pain', calories: 520, proteins: 40, carbs: 55, fats: 12, type: 'Dîner' },
      { name: 'Œufs pain miel', calories: 420, proteins: 14, carbs: 60, fats: 12, type: 'Petit-déj' },
      { name: 'Viande + féculents', calories: 600, proteins: 40, carbs: 75, fats: 12, type: 'Déjeuner' },
      { name: 'Poisson + riz', calories: 560, proteins: 38, carbs: 70, fats: 10, type: 'Dîner' },
      { name: 'Avoine + miel + banane', calories: 480, proteins: 12, carbs: 80, fats: 8, type: 'Petit-déj' },
      { name: 'Pâtes + protéine', calories: 600, proteins: 32, carbs: 80, fats: 10, type: 'Déjeuner' }
    ],
    equilibre: [
      { name: 'Oeufs + pain', calories: 300, proteins: 15, carbs: 35, fats: 10, type: 'Petit-déj' },
      { name: 'Yaourt + fruits', calories: 250, proteins: 12, carbs: 40, fats: 4, type: 'Petit-déj' },
      { name: 'Flocons + lait', calories: 280, proteins: 10, carbs: 50, fats: 5, type: 'Petit-déj' },
      { name: 'Poulet + légumes + riz', calories: 500, proteins: 35, carbs: 50, fats: 10, type: 'Déjeuner' },
      { name: 'Poisson + salade', calories: 420, proteins: 32, carbs: 30, fats: 12, type: 'Déjeuner' },
      { name: 'Oeufs + pâtes', calories: 450, proteins: 25, carbs: 55, fats: 10, type: 'Déjeuner' },
      { name: 'Viande maigre + légumes', calories: 420, proteins: 35, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Poisson + riz complet', calories: 450, proteins: 32, carbs: 45, fats: 9, type: 'Dîner' },
      { name: 'Oeufs + brocoli', calories: 350, proteins: 28, carbs: 20, fats: 12, type: 'Dîner' },
      { name: 'Fromage blanc fruits', calories: 220, proteins: 16, carbs: 30, fats: 3, type: 'Petit-déj' },
      { name: 'Smoothie fruits', calories: 280, proteins: 12, carbs: 45, fats: 5, type: 'Petit-déj' },
      { name: 'Œufs omelette', calories: 320, proteins: 18, carbs: 20, fats: 16, type: 'Petit-déj' },
      { name: 'Thon + riz', calories: 480, proteins: 36, carbs: 50, fats: 8, type: 'Déjeuner' },
      { name: 'Merlu + légumes', calories: 420, proteins: 32, carbs: 35, fats: 10, type: 'Dîner' },
      { name: 'Pâtes complètes sauce', calories: 420, proteins: 16, carbs: 60, fats: 8, type: 'Déjeuner' },
      { name: 'Porridge + fruits', calories: 300, proteins: 10, carbs: 55, fats: 4, type: 'Petit-déj' },
      { name: 'Œufs tomate pain', calories: 340, proteins: 18, carbs: 35, fats: 12, type: 'Petit-déj' },
      { name: 'Escalope + légumes', calories: 420, proteins: 36, carbs: 30, fats: 10, type: 'Déjeuner' },
      { name: 'Saumon + riz', calories: 480, proteins: 34, carbs: 45, fats: 12, type: 'Dîner' },
      { name: 'Lentilles + riz', calories: 380, proteins: 16, carbs: 60, fats: 5, type: 'Déjeuner' },
      { name: 'Œufs pain complet', calories: 320, proteins: 16, carbs: 38, fats: 10, type: 'Petit-déj' },
      { name: 'Steak salade', calories: 450, proteins: 38, carbs: 25, fats: 14, type: 'Déjeuner' },
      { name: 'Poisson blanc légumes', calories: 400, proteins: 34, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Flocons fruits secs', calories: 320, proteins: 10, carbs: 55, fats: 6, type: 'Petit-déj' },
      { name: 'Cabillaud + pâtes', calories: 480, proteins: 36, carbs: 55, fats: 6, type: 'Déjeuner' },
      { name: 'Dinde + patate', calories: 420, proteins: 36, carbs: 40, fats: 8, type: 'Dîner' },
      { name: 'Muesli + yaourt', calories: 280, proteins: 14, carbs: 45, fats: 5, type: 'Petit-déj' },
      { name: 'Lieu + riz blanc', calories: 480, proteins: 34, carbs: 50, fats: 6, type: 'Déjeuner' },
      { name: 'Turbot + légumes', calories: 420, proteins: 36, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Œufs jambon', calories: 340, proteins: 20, carbs: 30, fats: 14, type: 'Petit-déj' },
      { name: 'Rouget + pain', calories: 460, proteins: 32, carbs: 45, fats: 12, type: 'Déjeuner' },
      { name: 'Flétan + riz', calories: 480, proteins: 38, carbs: 45, fats: 10, type: 'Dîner' },
      { name: 'Avoine + miel', calories: 320, proteins: 10, carbs: 55, fats: 6, type: 'Petit-déj' },
      { name: 'Bar + légumes', calories: 420, proteins: 34, carbs: 30, fats: 10, type: 'Déjeuner' },
      { name: 'Merlan + pain', calories: 460, proteins: 32, carbs: 45, fats: 10, type: 'Dîner' },
      { name: 'Œufs omelette fruits', calories: 340, proteins: 16, carbs: 40, fats: 12, type: 'Petit-déj' },
      { name: 'Filet + riz', calories: 500, proteins: 36, carbs: 50, fats: 10, type: 'Déjeuner' },
      { name: 'Dorade + légumes', calories: 420, proteins: 34, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Granola + lait', calories: 300, proteins: 12, carbs: 50, fats: 6, type: 'Petit-déj' },
      { name: 'Saint-pierre + pâtes', calories: 500, proteins: 36, carbs: 50, fats: 10, type: 'Déjeuner' },
      { name: 'Trout + pain', calories: 480, proteins: 34, carbs: 45, fats: 12, type: 'Dîner' },
      { name: 'Flocons complet fruits', calories: 300, proteins: 10, carbs: 55, fats: 4, type: 'Petit-déj' },
      { name: 'Thon + salade riz', calories: 480, proteins: 34, carbs: 50, fats: 8, type: 'Déjeuner' },
      { name: 'Poisson vapeur riz', calories: 450, proteins: 34, carbs: 45, fats: 8, type: 'Dîner' },
      { name: 'Œufs pain tomate', calories: 320, proteins: 16, carbs: 35, fats: 12, type: 'Petit-déj' },
      { name: 'Escalope + sauce', calories: 480, proteins: 36, carbs: 50, fats: 10, type: 'Déjeuner' },
      { name: 'Viande blanche légume', calories: 420, proteins: 35, carbs: 30, fats: 10, type: 'Dîner' },
      { name: 'Yaourt muesli miel', calories: 300, proteins: 14, carbs: 48, fats: 5, type: 'Petit-déj' },
      { name: 'Œufs fromage pain', calories: 380, proteins: 20, carbs: 35, fats: 16, type: 'Petit-déj' }
    ]
  };

  const loadMealsForObjective = (objective) => {
    const mealList = allMeals[objective] || allMeals.equilibre;
    setMeals(mealList);
  };

  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
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
        <h1 style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>🍽️ Repas Sportifs</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>

      <div className="view-content" style={{ padding: '20px', color: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', color: '#ffffff' }}>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#ffffff' }}>
              {currentUser?.profile?.objective 
                ? `🎯 Objectif: ${currentUser.profile.objective.replace(/_/g, ' ').toUpperCase()}`
                : '⚠️ Profil non complété'}
            </h2>

            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '20px',
              flexWrap: 'wrap'
            }}>
              <input
                type="text"
                placeholder="Rechercher un repas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 15px',
                  borderRadius: '10px',
                  border: isDarkMode ? '2px solid rgba(102, 126, 234, 0.3)' : '2px solid rgba(102, 126, 234, 0.2)',
                  fontSize: '1rem',
                  background: isDarkMode ? '#2d2d2d' : '#ffffff',
                  color: '#ffffff',
                  minWidth: '250px'
                }}
              />
              <div style={{
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '10px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                {filteredMeals.length} repas
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '15px'
          }}>
            {filteredMeals.map((meal, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectMeal(meal)}
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.05) 100%)',
                  border: isDarkMode 
                    ? '2px solid rgba(102, 126, 234, 0.2)' 
                    : '2px solid rgba(102, 126, 234, 0.15)',
                  padding: '15px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isDarkMode
                    ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                    : '0 4px 15px rgba(102, 126, 234, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 8px 25px rgba(102, 126, 234, 0.3)'
                    : '0 8px 25px rgba(102, 126, 234, 0.2)';
                  e.currentTarget.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                    : '0 4px 15px rgba(102, 126, 234, 0.1)';
                  e.currentTarget.style.borderColor = isDarkMode 
                    ? 'rgba(102, 126, 234, 0.2)' 
                    : 'rgba(102, 126, 234, 0.15)';
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '1.1rem', color: '#ffffff' }}>
                  {meal.name}
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  fontSize: '0.9rem',
                  opacity: 0.8,
                  color: '#ffffff'
                }}>
                  <span>{meal.type}</span>
                  <span style={{ fontWeight: 'bold', color: '#667eea' }}>
                    {meal.calories} kcal
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '8px',
                  fontSize: '0.85rem',
                  padding: '10px',
                  background: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '8px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 3px 0', opacity: 0.7 }}>Protéines</p>
                    <p style={{ margin: 0, fontWeight: 'bold', color: '#ffffff' }}>
                      {meal.proteins}g
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 3px 0', opacity: 0.7 }}>Glucides</p>
                    <p style={{ margin: 0, fontWeight: 'bold', color: '#ffffff' }}>
                      {meal.carbs}g
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 3px 0', opacity: 0.7 }}>Lipides</p>
                    <p style={{ margin: 0, fontWeight: 'bold', color: '#ffffff' }}>
                      {meal.fats}g
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedMeal && (
            <div style={{
              marginTop: '40px',
              padding: '30px',
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%)'
                : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.08) 100%)',
              borderRadius: '15px',
              border: isDarkMode 
                ? '2px solid rgba(102, 126, 234, 0.3)' 
                : '2px solid rgba(102, 126, 234, 0.2)',
              boxShadow: isDarkMode
                ? '0 10px 40px rgba(102, 126, 234, 0.2)'
                : '0 10px 40px rgba(102, 126, 234, 0.15)'
            }}>
              <h2 style={{ marginTop: 0, textAlign: 'center', color: '#ffffff' }}>
                📋 Détails du Repas
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '20px',
                marginTop: '20px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>Nom</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff' }}>
                    {selectedMeal.name}
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>Type</p>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff' }}>
                    {selectedMeal.type}
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>Calories</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
                    {selectedMeal.calories} kcal
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '15px',
                marginTop: '25px',
                padding: '20px',
                background: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.6)',
                borderRadius: '10px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ opacity: 0.7, marginBottom: '8px', color: '#ffffff' }}>Protéines</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
                    {selectedMeal.proteins}g
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: '5px 0 0 0', color: '#ffffff' }}>
                    {((selectedMeal.proteins * 4) / selectedMeal.calories * 100).toFixed(0)}%
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ opacity: 0.7, marginBottom: '8px', color: '#ffffff' }}>Glucides</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
                    {selectedMeal.carbs}g
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: '5px 0 0 0', color: '#ffffff' }}>
                    {((selectedMeal.carbs * 4) / selectedMeal.calories * 100).toFixed(0)}%
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ opacity: 0.7, marginBottom: '8px', color: '#ffffff' }}>Lipides</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>
                    {selectedMeal.fats}g
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: '5px 0 0 0', color: '#ffffff' }}>
                    {((selectedMeal.fats * 9) / selectedMeal.calories * 100).toFixed(0)}%
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMeal(null)}
                style={{
                  marginTop: '20px',
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Meals;
