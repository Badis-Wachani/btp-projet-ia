import React from 'react';

// Champion LOL - Garen simplifié mais plus détaillé
export const GarenIcon = () => (
  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
    {/* Épée dorée */}
    <defs>
      <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#d4a574', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#c89b3c', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#d4a574', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Lame */}
    <polygon points="50,5 48,40 52,40" fill="url(#swordGradient)" stroke="#786a28" strokeWidth="1"/>
    
    {/* Garde */}
    <rect x="40" y="40" width="20" height="5" fill="#c89b3c" stroke="#786a28" strokeWidth="1"/>
    
    {/* Poignée */}
    <rect x="45" y="45" width="10" height="15" fill="#8B4513" stroke="#786a28" strokeWidth="1"/>
    
    {/* Tête du guerrier */}
    <circle cx="50" cy="25" r="5" fill="#e1d7c3" stroke="#786a28" strokeWidth="1"/>
    
    {/* Casque/Armure */}
    <path d="M 40 28 Q 40 20 50 18 Q 60 20 60 28" fill="#c89b3c" stroke="#786a28" strokeWidth="1.5"/>
    
    {/* Flamme du Noxus */}
    <path d="M 50 60 Q 45 70 50 75 Q 55 70 50 60" fill="#ff6b00" opacity="0.8"/>
    <path d="M 50 62 Q 47 68 50 73 Q 53 68 50 62" fill="#ffaa00" opacity="0.6"/>
  </svg>
);

// Hello Kitty - Plus détaillé
export const HelloKittyIcon = () => (
  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
    <defs>
      <radialGradient id="bowGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: '#ff69b4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ff1493', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    
    {/* Arc roses sur la tête */}
    <ellipse cx="50" cy="20" rx="14" ry="11" fill="url(#bowGradient)"/>
    <circle cx="42" cy="24" r="7" fill="#ff69b4" stroke="#ff1493" strokeWidth="1"/>
    <circle cx="58" cy="24" r="7" fill="#ff69b4" stroke="#ff1493" strokeWidth="1"/>
    <circle cx="42" cy="24" r="4" fill="#ffb6d9" opacity="0.7"/>
    <circle cx="58" cy="24" r="4" fill="#ffb6d9" opacity="0.7"/>
    
    {/* Tête blanche */}
    <circle cx="50" cy="50" r="28" fill="#ffffff" stroke="#ff69b4" strokeWidth="2.5"/>
    
    {/* Yeux noirs simples */}
    <circle cx="42" cy="45" r="3.5" fill="#000000"/>
    <circle cx="58" cy="45" r="3.5" fill="#000000"/>
    
    {/* Reflets yeux */}
    <circle cx="43" cy="44" r="1.2" fill="#ffffff" opacity="0.8"/>
    <circle cx="59" cy="44" r="1.2" fill="#ffffff" opacity="0.8"/>
    
    {/* Nez rose */}
    <ellipse cx="50" cy="52" rx="2.5" ry="3" fill="#ff69b4"/>
    
    {/* Sourire */}
    <path d="M 48 58 Q 50 60 52 58" stroke="#ff69b4" strokeWidth="2" fill="none"/>
    
    {/* Corps rose */}
    <ellipse cx="50" cy="78" rx="23" ry="20" fill="#ffb6d9" stroke="#ff69b4" strokeWidth="2"/>
    
    {/* Nœud corps */}
    <rect x="45" y="70" width="10" height="3" fill="#ff1493" rx="1.5"/>
  </svg>
);

export default { GarenIcon, HelloKittyIcon };
