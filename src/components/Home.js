import React from 'react';

function Home({ isDarkMode, onGetStarted }) {
  return (
    <div style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
        : 'linear-gradient(135deg, #f8f9fc 0%, #f0f3f9 50%, #e8eef7 100%)',
      color: isDarkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        background: isDarkMode
          ? 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff',
            textShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
            lineHeight: '1.2'
          }}>
            💪 Transformez Votre Vie
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '30px',
            color: isDarkMode ? '#ccc' : '#666',
            fontWeight: '300'
          }}>
            Votre compagnon personnel pour atteindre vos objectifs fitness
          </p>
          <button
            onClick={onGetStarted}
            style={{
              padding: '15px 40px',
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(102, 126, 234, 0.4)';
            }}
          >
            🚀 Commencer l'Aventure
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '60px',
          color: '#ffffff'
        }}>
          ✨ Nos Fonctionnalités
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {[
            { icon: '📊', title: 'Suivi Poids', desc: 'Suivez votre progression quotidienne avec graphiques en temps réel' },
            { icon: '🍽️', title: 'Plans Repas', desc: '50+ repas personnalisés selon votre objectif' },
            { icon: '🔥', title: 'Calculatrice', desc: 'Calcul précis de vos besoins caloriques' },
            { icon: '🎯', title: 'Objectifs', desc: 'Détermination automatique de votre programme' },
            { icon: '📅', title: 'Routines', desc: 'Entraînements personnalisés et structurés' },
            { icon: '🎬', title: 'Vidéos', desc: 'Tutoriels et conseils d\'experts' }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: isDarkMode
                ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%)'
                : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)',
              border: isDarkMode 
                ? '2px solid rgba(102, 126, 234, 0.2)'
                : '2px solid rgba(102, 126, 234, 0.15)',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = isDarkMode
                ? '0 15px 40px rgba(102, 126, 234, 0.3)'
                : '0 15px 40px rgba(102, 126, 234, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '1.3rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: isDarkMode ? '#bbb' : '#777', fontSize: '0.95rem' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUI SOMMES-NOUS SECTION */}
      <section style={{
        padding: '100px 20px',
        background: isDarkMode
          ? 'linear-gradient(180deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(102, 126, 234, 0.08) 0%, transparent 100%)',
        borderTop: isDarkMode 
          ? '1px solid rgba(102, 126, 234, 0.2)'
          : '1px solid rgba(102, 126, 234, 0.15)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            👥 Qui Sommes-Nous ?
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            marginBottom: '60px',
            color: isDarkMode ? '#bbb' : '#777',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            Trois passionnés réunis par une même vision : transformer le fitness en rendant la technologie accessible à tous.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                name: 'Badis',
                role: 'Co-fondateur & Directeur Technique',
                emoji: '🧠',
                desc: 'Expert en développement web et architecture logicielle. Visionnaire derrière les fonctionnalités innovantes de Habit Tracker.'
              },
              {
                name: 'Maxime',
                role: 'Co-fondateur & Directeur Design',
                emoji: '🎨',
                desc: 'Créatif en UX/UI avec une passion pour l\'expérience utilisateur. Responsable de l\'interface intuitive et moderne.'
              },
              {
                name: 'Abdillah',
                role: 'Co-fondateur & Responsable Stratégie',
                emoji: '📈',
                desc: 'Stratège business avisé et mentor fitness. Pilote la vision long terme et la croissance de la plateforme.'
              }
            ].map((leader, idx) => (
              <div key={idx} style={{
                background: isDarkMode
                  ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.08) 100%)',
                border: isDarkMode
                  ? '2px solid rgba(102, 126, 234, 0.3)'
                  : '2px solid rgba(102, 126, 234, 0.2)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: isDarkMode
                  ? '0 10px 30px rgba(102, 126, 234, 0.15)'
                  : '0 10px 30px rgba(102, 126, 234, 0.1)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 20px 50px rgba(102, 126, 234, 0.25)'
                  : '0 20px 50px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 10px 30px rgba(102, 126, 234, 0.15)'
                  : '0 10px 30px rgba(102, 126, 234, 0.1)';
              }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '20px',
                  display: 'inline-block',
                  padding: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  lineHeight: '60px'
                }}>
                  {leader.emoji}
                </div>
                
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#ffffff',
                  marginBottom: '10px',
                  marginTop: '20px'
                }}>
                  {leader.name}
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  color: '#667eea',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  {leader.role}
                </p>
                
                <p style={{
                  fontSize: '0.95rem',
                  color: isDarkMode ? '#aaa' : '#888',
                  lineHeight: '1.6'
                }}>
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#ffffff',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Prêt à Commencer Votre Transformation ?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '30px'
          }}>
            Rejoignez des milliers d'utilisateurs qui ont déjà changé leur vie
          </p>
          <button
            onClick={onGetStarted}
            style={{
              padding: '15px 40px',
              fontSize: '1.1rem',
              background: '#ffffff',
              color: '#667eea',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            }}
          >
            ✨ Commencer Gratuitement
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: isDarkMode
          ? '1px solid rgba(102, 126, 234, 0.2)'
          : '1px solid rgba(102, 126, 234, 0.15)',
        color: isDarkMode ? '#999' : '#999',
        fontSize: '0.9rem'
      }}>
        <p>© 2025 Habit Tracker Sport • Projet BTP IA</p>
        <p style={{ marginTop: '10px' }}>
          Créé par Badis • Maxime • Abdillah
        </p>
      </footer>
    </div>
  );
}

export default Home;
