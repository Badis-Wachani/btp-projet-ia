import React, { useState } from 'react';

function Videos({ onBack, isDarkMode }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Comment faire des pompes correctement',
      description: 'Apprenez la bonne technique pour les pompes',
      thumbnail: '💪',
      duration: '2:49',
      youtubeId: 'jgJHg3rAOVg'
    },
    {
      id: 2,
      title: 'Guide complet des squats',
      description: 'Maîtrisez la forme et l\'exécution des squats',
      thumbnail: '🦵',
      duration: '3:20',
      youtubeId: 'TXXIQ0QNH4o'
    },
    {
      id: 3,
      title: 'Tractions: Débutant à Avancé',
      description: 'Progression complète pour les tractions',
      thumbnail: '🤸',
      duration: '1:05',
      youtubeId: 'w3K67qBRyNc'
    },
    {
      id: 4,
      title: 'Corde à sauter: Technique et Bénéfices',
      description: 'Apprenez à sauter à la corde efficacement',
      thumbnail: '🪢',
      duration: 'Deux vidéos',
      subVideos: [
        {
          title: 'Pourquoi faire de la corde à sauter',
          duration: '1:02',
          youtubeId: 'KmJmhBVo90A'
        },
        {
          title: 'Comment faire de la corde à sauter',
          duration: '0:30',
          youtubeId: 'Ooiu_vlaFrs'
        }
      ]
    },
    {
      id: 5,
      title: 'Échauffement avant l\'entraînement',
      description: 'Routine d\'échauffement essentielle',
      thumbnail: '🔥',
      duration: '5:43',
      youtubeId: 'fIKcsi91j3c'
    },
    {
      id: 6,
      title: 'Récupération et étirements',
      description: 'Techniques de récupération post-entraînement',
      thumbnail: '🧘',
      duration: '10:37',
      youtubeId: 'nMgxn1JkUkU'
    },
  ];

  if (selectedVideo) {
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
      }}>
        <div className="view-header" style={{
          borderBottom: isDarkMode ? '2px solid #444' : '2px solid #f0f0f0'
        }}>
          <h1 style={{
            color: isDarkMode ? '#ffffff' : '#000000'
          }}>🎬 {selectedVideo.title}</h1>
          <button className="back-button" onClick={() => setSelectedVideo(null)}>← Retour aux vidéos</button>
        </div>
        <div className="view-content">
          {selectedVideo.subVideos ? (
            <div>
              {selectedVideo.subVideos.map((subVideo, index) => (
                <div key={index} style={{ marginBottom: '3rem' }}>
                  <h3 style={{ 
                    color: isDarkMode ? '#ffffff' : '#000000', 
                    marginBottom: '1rem' 
                  }}>{subVideo.title}</h3>
                  <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    paddingBottom: '56.25%',
                    height: 0,
                    marginBottom: '1.5rem',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                  }}>
                    <iframe
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      src={`https://www.youtube.com/embed/${subVideo.youtubeId}`}
                      title={subVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ color: '#999', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    ⏱️ Durée: {subVideo.duration}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                paddingBottom: '56.25%',
                height: 0,
                marginBottom: '2rem',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
              }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ 
                background: isDarkMode ? '#333' : '#f5f5f5', 
                padding: '2rem', 
                borderRadius: '15px' 
              }}>
                <h3 style={{ 
                  color: isDarkMode ? '#ffffff' : '#000000', 
                  marginBottom: '1rem' 
                }}>{selectedVideo.title}</h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: isDarkMode ? '#aaa' : '#666', 
                  marginBottom: '1rem' 
                }}>
                  {selectedVideo.description}
                </p>
                <div style={{ 
                  color: isDarkMode ? '#999' : '#999', 
                  fontSize: '0.9rem' 
                }}>
                  ⏱️ Durée: {selectedVideo.duration}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

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
        }}>🎬 Vidéos d'Entraînement</h1>
        <button className="back-button" onClick={onBack}>← Retour</button>
      </div>
      <div className="view-content">
        <h3 style={{ 
          marginBottom: '1.5rem', 
          color: isDarkMode ? '#ffffff' : '#000000'
        }}>Regardez nos tutoriels d'entraînement</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {videos.map(video => (
            <div 
              key={video.id}
              style={{
                background: isDarkMode
                  ? 'linear-gradient(135deg, #1f1f2e 0%, #16213e 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '1.5rem',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isDarkMode
                  ? '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(102, 126, 234, 0.2)'
                  : '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 25px rgba(102, 126, 234, 0.15)',
                color: 'white',
                border: isDarkMode 
                  ? '1px solid rgba(102, 126, 234, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(102, 126, 234, 0.3)'
                  : '0 25px 60px rgba(102, 126, 234, 0.4), 0 0 35px rgba(102, 126, 234, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(102, 126, 234, 0.2)'
                  : '0 15px 40px rgba(102, 126, 234, 0.3), 0 0 25px rgba(102, 126, 234, 0.15)';
              }}
              onClick={() => {
                if (video.youtubeId || video.subVideos) {
                  setSelectedVideo(video);
                } else {
                  alert(`Lecture de: ${video.title}`);
                }
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                {video.thumbnail}
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                {video.title}
              </h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.9 }}>
                {video.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', opacity: 0.8 }}>
                <span>⏱️ {video.duration}</span>
                <button 
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (video.youtubeId || video.subVideos) {
                      setSelectedVideo(video);
                    } else {
                      alert(`Lecture: ${video.title}`);
                    }
                  }}
                >
                  ▶️ Regarder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
