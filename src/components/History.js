import React, { useState } from 'react';

function History({ onBack, isDarkMode }) {
  const [expandedChapter, setExpandedChapter] = useState(null);

  const chapters = [
    {
      id: 1,
      title: 'Trois routes, une boussole',
      content: 'HTS propose trois modes clairs dès l\'accueil : Perte de poids, Prise de masse, Remise en forme / santé générale. Ana choisit « Remise en forme », Malik, son voisin, sélectionna « Prise de masse » et Claire, rentrée d\'un congé maternité, opta pour « Perte de poids ». L\'interface, propre et chaleureuse, les guida sans jargon :\n\n• Un carrousel d\'objectifs : cardio, force, mobilité\n• Un bêtonnière de couleurs pour visualiser la semaine\n• Un bouton « Commencer le plan » qui créait immédiatement une routine\n\nDerrière ce front-end doux se cachait un back-end robuste : authentification sécurisée, API REST pour récupérer les programmes, base de données des utilisateurs et des exercices, et un micro-service de calculs physiologiques. Mais l\'utilisateur n\'en vit rien — juste des sessions claires, expliquées et réalisables.'
    },
    {
      id: 2,
      title: 'L\'entraînement expliqué',
      content: 'Chaque mode délivre une liste d\'exercices adaptée — squats, fentes, soulevés, burpees, planches — avec pour chacun :\n\n• Une description précise (exécution, posture, erreurs fréquentes)\n• Les muscles sollicités\n• Des conseils (respiration, progression, alternatives pour débutant)\n• Les séries / répétitions / temps de repos conseillés\n• Et une vidéo d\'exécution IA\n\nAna activa la vidéo IA : l\'avatar montra le mouvement lentement, puis en vitesse réelle, avec des annotations flottantes indiquant « genoux alignés », « regard fixe ». C\'était comme avoir un coach dans le salon, mais sans jugement.'
    },
    {
      id: 3,
      title: 'La semaine qui se construit',
      content: 'HTS permettait de planifier sa routine hebdomadaire soit automatiquement (l\'app propose un planning intelligent selon l\'objectif, le niveau et le temps disponible), soit manuellement (l\'utilisateur déplace les séances sur le calendrier de 7 jours).\n\nClaire, qui travaillait à horaires variables, choisit la planification manuelle : elle glissa une séance de HIIT au lundi soir, une séance de mobilité au mercredi matin et une session douce de renforcement le samedi. Des notifications push (rappel 30 min avant, puis à l\'heure) la préviennent. Si elle manque une séance, HTS propose une alternative courte pour garder la continuité.\n\nLe tableau de bord affichait la progression : graphiques d\'évolution du poids, du nombre de séances complétées, de la charge soulevée et du temps total d\'activité.'
    },
    {
      id: 4,
      title: 'Calories, nutrition et tempo',
      content: 'Avant de lancer son premier plan, Malik remplit son profil : poids, taille, âge, niveau d\'activité. Le back-end calcula son TDEE (dépense calorique journalière) et lui proposa un apport recommandé : surplus calorique pour prise de masse, déficit modéré pour perte de poids, ou maintien pour remise en forme.\n\nHTS offrait un mini-journal alimentaire : l\'utilisateur pouvait rapidement enregistrer un repas, estimer les calories et voir l\'effet sur son objectif journalier. Le moteur nutritionnel proposait des recettes simples et des ajustements pour compenser une séance plus intense. Tout était relié : entraînement + apport calorique = trajectoire claire.'
    },
    {
      id: 5,
      title: 'La ville comme salle de sport',
      content: 'Un samedi matin, Ana parcourait la section Événements sportifs locaux. Grâce à la géolocalisation (consentie au préalable), HTS affichait :\n\n• Une course de 5 km le dimanche à deux kilomètres\n• Un tournoi amateur de street workout le mois suivant\n• Une journée portes ouvertes dans une salle partenaire\n\nElle s\'inscrivit directement depuis l\'app, partagea l\'événement à Malik et Claire, et ajouta l\'entraînement spécifique recommandé par HTS pour préparer la course. L\'app proposa même un itinéraire et un rappel pour récupérer le dossard.'
    },
    {
      id: 6,
      title: 'Les coulisses techniques (juste assez)',
      content: 'Le récit de HTS n\'était pas que romantique : il était pensé. Architecture micro-services, base SQL pour les profils, stockage des médias pour les vidéos IA, API sécurisée pour les intégrations (paiement, calendriers, notifications), et un moteur de recommandations entraîné sur anonymisation des données pour suggérer exercices et recettes. L\'authentification supportait OAuth et sessions chiffrées, les notifications push utilisaient un service scalable, et la géolocalisation respectait les réglages de confidentialité.'
    },
    {
      id: 7,
      title: 'Ce qui changea',
      content: 'Trois mois plus tard, les résultats parlaient d\'eux-mêmes :\n\n• Ana avait gagné en mobilité et tenait une routine 4x/semaine\n• Malik augmentait ses charges progressivement, en limitant les blessures grâce aux vidéos\n• Claire avait perdu du poids de façon stable et durable\n\nLe vrai triomphe n\'était pas une course gagnée mais cette nouvelle habitude : ouvrir HTS, suivre la séance, cocher, respirer. L\'app avait mis ensemble science, design et communauté. Elle ne remplaçait pas un coach humain, mais elle transformait l\'intention en action répétée — jour après jour — et c\'est précisément ce qui forge une habitude.'
    },
    {
      id: 8,
      title: 'Épilogue — Une habitude à portée de main',
      content: 'HTS resta une petite voix constante dans leurs vies : pas intrusive, utile. Quand la météo, le boulot ou la fatigue menaçaient de tout faire basculer, l\'app proposait des alternatives — 10 minutes de mobilité, un circuit court à la maison, ou un événement local pour se reconnecter. À la fin, ils comprirent que le but n\'était pas la perfection, mais la persistance : une séance de plus qu\'hier, une habitude de mieux.\n\nEt toi ? Si tu cliques sur « Démarrer », HTS t\'accueillera comme il a accueilli Ana, Malik et Claire — avec un plan, une vidéo, une notification amicale, et la promesse d\'un petit progrès chaque jour.'
    }
  ];

  return (
    <div className="history-container" style={{
      padding: '2rem',
      color: isDarkMode ? '#ffffff' : '#000000'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>📜 Histoire</h2>
        <button
          onClick={onBack}
          style={{
            background: isDarkMode ? '#667eea' : '#ffa500',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          ← Retour
        </button>
      </div>

      <div style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(240, 84, 84, 0.1) 100%)'
          : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 84, 84, 0.05) 100%)',
        border: isDarkMode 
          ? '1px solid rgba(102, 126, 234, 0.3)' 
          : '1px solid rgba(102, 126, 234, 0.2)',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2.5rem',
        color: isDarkMode ? '#ffffff' : '#000000'
      }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.8rem' }}>HTS — L'histoire d'une habitude qui change tout</h2>
        <p style={{
          margin: '0',
          lineHeight: '1.8',
          fontSize: '1rem',
          color: isDarkMode ? '#ccc' : '#333'
        }}>
          Quand Ana téléchargea HTS — Habit Tracker Sport, elle ne cherchait pas une application flashy de plus. Elle cherchait quelque chose qui tiendrait ses promesses : l'aider à retrouver la forme, simple et durable. Ce qu'elle trouva, ce soir-là sur son téléphone, ce fut une petite révolution domestique — un compagnon numérique qui savait converser avec sa vie.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            style={{
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(31, 31, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)'
                : 'linear-gradient(135deg, rgba(245, 247, 250, 0.8) 0%, rgba(195, 207, 226, 0.8) 100%)',
              border: isDarkMode 
                ? '1px solid rgba(102, 126, 234, 0.3)' 
                : '1px solid rgba(102, 126, 234, 0.2)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button
              onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '1.5rem',
                textAlign: 'left',
                cursor: 'pointer',
                color: isDarkMode ? '#ffffff' : '#000000',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>Chapitre {chapter.id} — {chapter.title}</span>
              <span style={{ fontSize: '1.5rem' }}>
                {expandedChapter === chapter.id ? '▼' : '▶'}
              </span>
            </button>

            {expandedChapter === chapter.id && (
              <div style={{
                padding: '0 1.5rem 1.5rem 1.5rem',
                borderTop: isDarkMode 
                  ? '1px solid rgba(102, 126, 234, 0.2)' 
                  : '1px solid rgba(102, 126, 234, 0.15)',
                color: isDarkMode ? '#ccc' : '#333',
                lineHeight: '1.8',
                whiteSpace: 'pre-line'
              }}>
                {chapter.content}
                {chapter.id === 8 && (
                  <button
                    onClick={onBack}
                    style={{
                      marginTop: '1.5rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      width: '100%',
                      transition: 'all 0.3s ease',
                      boxShadow: isDarkMode
                        ? '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)'
                        : '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = isDarkMode
                        ? '0 20px 50px rgba(102, 126, 234, 0.4), 0 0 30px rgba(102, 126, 234, 0.2)'
                        : '0 20px 50px rgba(102, 126, 234, 0.4), 0 0 30px rgba(102, 126, 234, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = isDarkMode
                        ? '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)'
                        : '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.1)';
                    }}
                  >
                    🚀 Démarrer
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;

