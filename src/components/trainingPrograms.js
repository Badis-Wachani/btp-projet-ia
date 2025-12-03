// Système complet de programmes d'entraînement

export const TRAINING_PROGRAMS = {
  objectives: {
    fit: { name: 'Être en forme', icon: '💪', focus: 'cardio + renforcement' },
    lose: { name: 'Perdre du poids', icon: '⚡', focus: 'HIIT + cardio' },
    muscle: { name: 'Se muscler', icon: '🏋️', focus: 'renforcement intense' },
    athlete: { name: 'Être un athlète', icon: '🏃', focus: 'entraînement complet' }
  },

  exercises: {
    chest: {
      name: 'Poitrine', icon: '💪',
      beginner: [
        { id: 'bench_press', name: 'Développé couché', sets: 3, reps: '8-12', rest: 60, equipment: 'Barre' },
        { id: 'push_ups', name: 'Pompes', sets: 3, reps: '10-15', rest: 45, equipment: 'Au poids du corps' },
        { id: 'chest_fly', name: 'Écartés à la poulie', sets: 3, reps: '12-15', rest: 45, equipment: 'Poulie' },
        { id: 'machine_press', name: 'Presse poitrine machine', sets: 3, reps: '12-15', rest: 60, equipment: 'Machine' }
      ],
      intermediate: [
        { id: 'incline_bench', name: 'Développé incliné', sets: 4, reps: '8-10', rest: 90, equipment: 'Barre' },
        { id: 'cable_fly', name: 'Écartés poulie croisée', sets: 4, reps: '10-12', rest: 60, equipment: 'Poulie' },
        { id: 'dumbbell_press', name: 'Développé haltères', sets: 4, reps: '8-12', rest: 75, equipment: 'Haltères' },
        { id: 'wide_pushups', name: 'Pompes larges', sets: 4, reps: '12-15', rest: 60, equipment: 'Au poids du corps' }
      ],
      advanced: [
        { id: 'decline_bench', name: 'Développé décliné', sets: 5, reps: '6-8', rest: 120, equipment: 'Barre' },
        { id: 'explosive_pushups', name: 'Pompes explosives', sets: 5, reps: '8-10', rest: 90, equipment: 'Au poids du corps' },
        { id: 'weighted_dips', name: 'Dips lestés poitrine', sets: 5, reps: '6-8', rest: 120, equipment: 'Poids' },
        { id: 'heavy_machine', name: 'Machine presse lourd', sets: 4, reps: '5-7', rest: 120, equipment: 'Machine' }
      ]
    },
    back: {
      name: 'Dos', icon: '🔙',
      beginner: [
        { id: 'lat_pulldown', name: 'Tirage lat', sets: 3, reps: '10-12', rest: 60, equipment: 'Machine' },
        { id: 'rows', name: 'Tirages horizontaux', sets: 3, reps: '10-12', rest: 60, equipment: 'Barre' },
        { id: 'back_extension', name: 'Extensions dorsales', sets: 3, reps: '12-15', rest: 45, equipment: 'Machine' },
        { id: 'assisted_pullups', name: 'Tractions assistées', sets: 3, reps: '8-12', rest: 60, equipment: 'Machine' }
      ],
      intermediate: [
        { id: 'weighted_pullups', name: 'Tractions lestées', sets: 4, reps: '6-10', rest: 90, equipment: 'Poids' },
        { id: 'barbell_rows', name: 'Tirages à la barre', sets: 4, reps: '8-10', rest: 90, equipment: 'Barre' },
        { id: 'single_arm_row', name: 'Tirage une main', sets: 4, reps: '10-12', rest: 75, equipment: 'Haltère' },
        { id: 'seal_rows', name: 'Seal rows', sets: 4, reps: '10-12', rest: 60, equipment: 'Banc' }
      ],
      advanced: [
        { id: 'deadlift', name: 'Soulevé de terre', sets: 5, reps: '5-8', rest: 120, equipment: 'Barre' },
        { id: 'pendlay_rows', name: 'Pendlay rows', sets: 5, reps: '6-8', rest: 120, equipment: 'Barre' },
        { id: 'muscle_ups', name: 'Muscle ups', sets: 4, reps: '5-8', rest: 120, equipment: 'Barre' },
        { id: 'heavy_yates_rows', name: 'Yates rows lourds', sets: 5, reps: '5-8', rest: 120, equipment: 'Barre' }
      ]
    },
    arms: {
      name: 'Bras', icon: '💪',
      beginner: [
        { id: 'dumbbell_curls', name: 'Curls haltères', sets: 3, reps: '10-12', rest: 60, equipment: 'Haltères' },
        { id: 'tricep_dips', name: 'Dips triceps', sets: 3, reps: '8-12', rest: 60, equipment: 'Banc' },
        { id: 'hammer_curls', name: 'Hammer curls', sets: 3, reps: '10-12', rest: 45, equipment: 'Haltères' },
        { id: 'tricep_rope', name: 'Extensions corde triceps', sets: 3, reps: '12-15', rest: 45, equipment: 'Poulie' }
      ],
      intermediate: [
        { id: 'barbell_curls', name: 'Curls à la barre', sets: 4, reps: '8-10', rest: 75, equipment: 'Barre' },
        { id: 'overhead_extension', name: 'Extensions barre tête', sets: 4, reps: '10-12', rest: 60, equipment: 'Barre' },
        { id: 'concentration_curls', name: 'Curls concentrés', sets: 4, reps: '10-12', rest: 60, equipment: 'Haltères' },
        { id: 'skull_crushers', name: 'Skull crushers', sets: 4, reps: '8-12', rest: 75, equipment: 'Barre' }
      ],
      advanced: [
        { id: 'close_grip_bench', name: 'Développé prise rapprochée', sets: 5, reps: '6-8', rest: 120, equipment: 'Barre' },
        { id: 'reverse_grip_curls', name: 'Curls prise inversée', sets: 4, reps: '8-10', rest: 90, equipment: 'Barre' },
        { id: 'dips_weighted', name: 'Dips lestés triceps', sets: 5, reps: '6-8', rest: 120, equipment: 'Poids' },
        { id: 'chain_curls', name: 'Curls à la chaîne', sets: 4, reps: '8-10', rest: 90, equipment: 'Barre + Chaîne' }
      ]
    },
    shoulders: {
      name: 'Épaules', icon: '🏋️',
      beginner: [
        { id: 'shoulder_press', name: 'Développé militaire', sets: 3, reps: '10-12', rest: 75, equipment: 'Barre' },
        { id: 'lateral_raise', name: 'Élévations latérales', sets: 3, reps: '12-15', rest: 45, equipment: 'Haltères' },
        { id: 'front_raise', name: 'Élévations frontales', sets: 3, reps: '12-15', rest: 45, equipment: 'Haltères' },
        { id: 'machine_shoulder', name: 'Machine épaules', sets: 3, reps: '12-15', rest: 60, equipment: 'Machine' }
      ],
      intermediate: [
        { id: 'arnold_press', name: 'Arnold press', sets: 4, reps: '8-10', rest: 75, equipment: 'Haltères' },
        { id: 'reverse_fly', name: 'Écartés arrière', sets: 4, reps: '10-12', rest: 60, equipment: 'Haltères' },
        { id: 'plate_raises', name: 'Élévations à l\'assiette', sets: 4, reps: '10-12', rest: 60, equipment: 'Assiette' },
        { id: 'cable_raises', name: 'Élévations poulie', sets: 4, reps: '12-15', rest: 45, equipment: 'Poulie' }
      ],
      advanced: [
        { id: 'weighted_dips_shoulder', name: 'Dips épaules lestés', sets: 5, reps: '6-8', rest: 120, equipment: 'Poids' },
        { id: 'handstand_pushups', name: 'Pompes en appui', sets: 5, reps: '5-10', rest: 120, equipment: 'Au poids du corps' },
        { id: 'heavy_military', name: 'Développé militaire lourd', sets: 5, reps: '5-7', rest: 120, equipment: 'Barre' },
        { id: 'pike_pushups', name: 'Pike push-ups', sets: 4, reps: '8-12', rest: 90, equipment: 'Au poids du corps' }
      ]
    },
    legs: {
      name: 'Jambes', icon: '🦵',
      beginner: [
        { id: 'leg_press', name: 'Presse à jambes', sets: 3, reps: '12-15', rest: 90, equipment: 'Machine' },
        { id: 'leg_curl', name: 'Curl des jambes', sets: 3, reps: '12-15', rest: 60, equipment: 'Machine' },
        { id: 'leg_extension', name: 'Extension des jambes', sets: 3, reps: '12-15', rest: 60, equipment: 'Machine' },
        { id: 'calf_raise', name: 'Élévé sur les orteils', sets: 3, reps: '15-20', rest: 45, equipment: 'Machine' }
      ],
      intermediate: [
        { id: 'squats', name: 'Squats à la barre', sets: 4, reps: '8-10', rest: 120, equipment: 'Barre' },
        { id: 'romanian_deadlift', name: 'Soulevé terre roumain', sets: 4, reps: '8-10', rest: 90, equipment: 'Barre' },
        { id: 'lunges', name: 'Fentes barre', sets: 4, reps: '10-12', rest: 75, equipment: 'Barre' },
        { id: 'leg_press_heavy', name: 'Presse jambes lourde', sets: 4, reps: '8-10', rest: 120, equipment: 'Machine' }
      ],
      advanced: [
        { id: 'heavy_squats', name: 'Squats lourds', sets: 5, reps: '5-6', rest: 150, equipment: 'Barre' },
        { id: 'front_squats', name: 'Squats avant', sets: 5, reps: '6-8', rest: 120, equipment: 'Barre' },
        { id: 'pistol_squats', name: 'Squats une jambe', sets: 4, reps: '5-10', rest: 120, equipment: 'Au poids du corps' },
        { id: 'box_jumps', name: 'Box jumps', sets: 5, reps: '5-8', rest: 90, equipment: 'Box' }
      ]
    },
    abs: {
      name: 'Abdominaux', icon: '⬜',
      beginner: [
        { id: 'crunches', name: 'Crunchs', sets: 3, reps: '15-20', rest: 30, equipment: 'Au poids du corps' },
        { id: 'leg_raise', name: 'Relevés de jambes', sets: 3, reps: '12-15', rest: 45, equipment: 'Au poids du corps' },
        { id: 'plank', name: 'Gainage', sets: 3, duration: '30-45s', rest: 60, equipment: 'Au poids du corps' },
        { id: 'bicycle_crunches', name: 'Crunchs bicyclette', sets: 3, reps: '15-20', rest: 30, equipment: 'Au poids du corps' }
      ],
      intermediate: [
        { id: 'cable_crunch', name: 'Crunchs à la poulie', sets: 4, reps: '12-15', rest: 45, equipment: 'Poulie' },
        { id: 'ab_wheel', name: 'Ab wheel', sets: 3, reps: '10-15', rest: 60, equipment: 'Ab wheel' },
        { id: 'side_plank', name: 'Gainage latéral', sets: 3, duration: '30-45s', rest: 60, equipment: 'Au poids du corps' },
        { id: 'decline_situps', name: 'Sit-ups plan décliné', sets: 4, reps: '12-15', rest: 45, equipment: 'Banc' }
      ],
      advanced: [
        { id: 'hanging_leg_raise', name: 'Relevés jambes barre', sets: 4, reps: '12-20', rest: 60, equipment: 'Barre' },
        { id: 'dragon_flags', name: 'Dragon flags', sets: 3, reps: '8-12', rest: 90, equipment: 'Banc' },
        { id: 'weighted_ab_wheel', name: 'Ab wheel lesté', sets: 4, reps: '8-12', rest: 90, equipment: 'Ab wheel + Poids' },
        { id: 'rope_climb', name: 'Grimper à la corde', sets: 4, reps: '5-8', rest: 90, equipment: 'Corde' }
      ]
    },
    glutes: {
      name: 'Fessiers', icon: '🍑',
      beginner: [
        { id: 'glute_bridge', name: 'Hip thrust', sets: 3, reps: '15-20', rest: 60, equipment: 'Banc' },
        { id: 'glute_machine', name: 'Machine fessiers', sets: 3, reps: '15-20', rest: 60, equipment: 'Machine' },
        { id: 'kickbacks', name: 'Kickbacks machine', sets: 3, reps: '12-15', rest: 45, equipment: 'Machine' },
        { id: 'glute_squeezes', name: 'Contractions fessiers', sets: 3, reps: '20', rest: 30, equipment: 'Au poids du corps' }
      ],
      intermediate: [
        { id: 'weighted_glute_bridge', name: 'Hip thrust lesté', sets: 4, reps: '10-12', rest: 75, equipment: 'Poids' },
        { id: 'bulgarian_split', name: 'Fente bulgare', sets: 4, reps: '10-12', rest: 75, equipment: 'Haltères' },
        { id: 'sumo_squats', name: 'Squats sumo', sets: 4, reps: '10-12', rest: 90, equipment: 'Haltère' },
        { id: 'cable_kickbacks', name: 'Kickbacks poulie', sets: 4, reps: '12-15', rest: 60, equipment: 'Poulie' }
      ],
      advanced: [
        { id: 'barbell_hip_thrust', name: 'Hip thrust barre lourd', sets: 5, reps: '6-8', rest: 120, equipment: 'Barre' },
        { id: 'single_leg_deadlift', name: 'Soulevé terre une jambe', sets: 4, reps: '8-10', rest: 120, equipment: 'Haltère' },
        { id: 'sissy_squats', name: 'Sissy squats', sets: 4, reps: '10-15', rest: 90, equipment: 'Au poids du corps' },
        { id: 'jump_squats', name: 'Squats sautés', sets: 4, reps: '12-15', rest: 90, equipment: 'Poids' }
      ]
    }
  }
};

export default TRAINING_PROGRAMS;

