# 🧪 Guide de Test - Authentification

## 🚀 Démarrer l'Application

```bash
cd application
npm start
```

L'application démarre sur http://localhost:3000

---

## 📝 Cas de Test - Email/Password

### Test 1: Inscription Nouvelle Utilisateur
**Étapes:**
1. Cliquez sur "S'inscrire"
2. Entrez les informations:
   - Nom: `Jean Dupont`
   - Email: `jean@example.com`
   - Mot de passe: `password123`
   - Confirmer: `password123`
3. Cliquez "S'inscrire"

**Résultat Attendu:**
- ✅ Inscription réussie
- ✅ Accès au tutoriel
- ✅ Redirection vers dashboard

**Erreurs à Tester:**
- Nom vide → "Le nom est requis"
- Email invalide → "Email invalide"
- Mot de passe < 6 caractères → "Le mot de passe doit contenir au moins 6 caractères"
- Mots de passe différents → "Les mots de passe ne correspondent pas"
- Email déjà utilisé → "Cet email est déjà utilisé"

---

### Test 2: Connexion Email/Password Valides
**Étapes:**
1. Cliquez sur "Se connecter" (ou page par défaut)
2. Entrez les informations:
   - Email: `jean@example.com` (créé au Test 1)
   - Mot de passe: `password123`
3. Cliquez "Se connecter"

**Résultat Attendu:**
- ✅ Connexion réussie
- ✅ Redirection vers dashboard
- ✅ Affichage du nom dans la navbar

---

### Test 3: Connexion avec Mauvais Password
**Étapes:**
1. Entrez email valide: `jean@example.com`
2. Entrez mauvais password: `wrongpassword`
3. Cliquez "Se connecter"

**Résultat Attendu:**
- ❌ Message d'erreur: "Email ou mot de passe incorrect"

---

### Test 4: Connexion Email N'existe Pas
**Étapes:**
1. Entrez email: `nonexistent@example.com`
2. Entrez password: `password123`
3. Cliquez "Se connecter"

**Résultat Attendu:**
- ❌ Message d'erreur: "Email ou mot de passe incorrect"

---

## 🔑 Cas de Test - Mot de Passe Oublié

### Test 5: Réinitialiser Mot de Passe - Succès
**Étapes:**
1. Sur page de connexion, cliquez "Mot de passe oublié?"
2. Entrez un email existant: `jean@example.com`
3. Cliquez "Envoyer le lien"

**Résultat Attendu:**
- ✅ Message de succès en vert
- ✅ Code temporaire affiché
- ✅ Code valide 1 heure
- ⏱️ Après 4 secondes, retour automatique à la connexion

**Exemple de Message:**
```
✓ Lien de réinitialisation envoyé à jean@example.com

🔐 Code temporaire: a1b2c3d4
(Valide 1 heure)
```

**Vérification dans Browser DevTools (Console):**
```javascript
// Voir le token stocké
JSON.parse(localStorage.getItem('passwordReset'))
// Résultat:
// {
//   "email": "jean@example.com",
//   "token": "a1b2c3d4",
//   "expiresAt": "2025-12-02T23:05:32.593Z"
// }
```

---

### Test 6: Email Invalide - Mot de Passe Oublié
**Étapes:**
1. Cliquez "Mot de passe oublié?"
2. Entrez: `invalidemail`
3. Cliquez "Envoyer le lien"

**Résultat Attendu:**
- ❌ Message d'erreur: "Email invalide"

---

### Test 7: Email Inexistant - Mot de Passe Oublié
**Étapes:**
1. Cliquez "Mot de passe oublié?"
2. Entrez: `nonexistent@example.com`
3. Cliquez "Envoyer le lien"

**Résultat Attendu:**
- ❌ Message d'erreur: "Aucun compte trouvé avec cet email"

---

## 🔐 Cas de Test - Google OAuth

### Test 8: Créer Compte avec Google - Nouvel Email
**Étapes:**
1. Trouvez la section "OU" sur la page de connexion
2. Entrez un nouvel email: `alice@gmail.com`
3. Cliquez "Se connecter avec Google"

**Résultat Attendu:**
- ✅ Nouveau compte créé
- ✅ Utilisateur connecté
- ✅ Nom généré automatiquement (ex: "Alice")
- ✅ Accès au tutoriel
- ✅ `authProvider: "google"` dans localStorage

**Vérification dans Browser DevTools (Console):**
```javascript
// Voir l'utilisateur créé
JSON.parse(localStorage.getItem('users')).find(u => u.email === 'alice@gmail.com')
// Résultat contient: authProvider: "google"
```

---

### Test 9: Lier Google à Compte Existant
**Étapes:**
1. Entrez un email d'un compte existant: `jean@example.com`
2. Cliquez "Se connecter avec Google"

**Résultat Attendu:**
- ✅ Compte existant lié à Google
- ✅ Utilisateur connecté
- ✅ `authProvider: "google"` ajouté au profil

---

### Test 10: Email Google Invalide
**Étapes:**
1. Entrez: `invalidemail`
2. Cliquez "Se connecter avec Google"

**Résultat Attendu:**
- ❌ Message d'erreur: "Email invalide"

---

### Test 11: Champ Email Vide
**Étapes:**
1. Laissez le champ vide
2. Cliquez "Se connecter avec Google"

**Résultat Attendu:**
- ❌ Message d'erreur: "Email Google requis"

---

## 🔄 Cas de Test - Navigation & Bascule

### Test 12: Basculer Entre Inscription et Connexion
**Étapes:**
1. Page de connexion
2. Cliquez "S'inscrire"
3. ✅ Formulaire d'inscription
4. Cliquez "Se connecter"
5. ✅ Retour au formulaire de connexion

**Vérification:** Les champs sont vidés à chaque bascule

---

### Test 13: Basculer Entre Connexion et Mot de Passe Oublié
**Étapes:**
1. Page de connexion
2. Cliquez "Mot de passe oublié?"
3. ✅ Formulaire de réinitialisation
4. Cliquez "Retour à la connexion"
5. ✅ Retour au formulaire de connexion

---

## 🌓 Cas de Test - Mode Sombre/Clair

### Test 14: Thème Sombre vs Clair
**Étapes:**
1. Connectez-vous (n'importe quelle méthode)
2. Cliquez le bouton "☀️" (mode clair)
3. ✅ Interface en mode clair
4. Cliquez le bouton "🌙" (mode sombre)
5. ✅ Interface en mode sombre

**Vérification:** Tous les formulaires d'authentification sont responsive en mode sombre et clair

---

## 🧹 Cas de Test - Déconnexion

### Test 15: Déconnexion Complète
**Étapes:**
1. Connectez-vous
2. Sur la navbar, cliquez "🚪 Déconnexion"

**Résultat Attendu:**
- ✅ currentUser supprimé de localStorage
- ✅ Redirection vers page d'authentification
- ✅ Écran de connexion affiché

**Vérification dans Console:**
```javascript
// Après déconnexion
localStorage.getItem('currentUser') // null
```

---

## 📊 Cas de Test - Stockage Données

### Test 16: Vérifier localStorage
**Étapes:**
1. Ouvrez DevTools (F12 ou Cmd+Option+I)
2. Aller à "Application" ou "Storage"
3. Cliquez "Local Storage"
4. Sélectionnez http://localhost:3000

**Vérifier:**
- ✅ `users` - tableau de tous les utilisateurs
- ✅ `currentUser` - utilisateur connecté
- ✅ `passwordReset` - token de réinitialisation (si généré)

**Exemple de Structure:**
```javascript
{
  "users": [
    {
      "id": 1733186732000,
      "name": "Jean Dupont",
      "email": "jean@example.com",
      "password": "password123",
      "createdAt": "2025-12-02T22:05:32.593Z",
      "isAdmin": false,
      "isNewUser": true,
      "profile": null
    }
  ],
  "currentUser": {
    "id": 1733186732000,
    "name": "Jean Dupont",
    "email": "jean@example.com",
    "isAdmin": false
  }
}
```

---

## ✅ Checklist de Test Complet

- [ ] Inscription email/password
- [ ] Connexion email/password valides
- [ ] Connexion email/password invalides
- [ ] Validations (email, password, confirmation)
- [ ] Mot de passe oublié (succès)
- [ ] Mot de passe oublié (erreurs)
- [ ] Création compte Google
- [ ] Liaison compte Google
- [ ] Validations Google (email, vide)
- [ ] Basculer entre formulaires
- [ ] Mode sombre/clair
- [ ] Déconnexion
- [ ] localStorage correctement rempli
- [ ] Responsive sur mobile
- [ ] Responsive sur tablet
- [ ] Responsive sur desktop

---

## 🐛 Débogage

### Activer les Logs dans la Console
Modifiez `handleSubmit()` et ajoutez des `console.log()`:

```javascript
console.log('Form data:', formData);
console.log('Users in storage:', JSON.parse(localStorage.getItem('users')));
```

### Nettoyer le localStorage
```javascript
// Dans la console du navigateur
localStorage.clear()
location.reload()
```

### Tester des Cas Limites
- Email avec accents: `jéan@example.com` ✅
- Email avec + : `test+tag@gmail.com` ✅
- Password avec caractères spéciaux: `P@ssw0rd!` ✅
- Nom avec espaces: `Jean Marie Dupont` ✅

---

## 📱 Test Responsive

### Mobile (375px)
- Cliquez les boutons facilement?
- Le texte est lisible?
- Les inputs sont touchables?

### Tablet (768px)
- Formulaire bien centré?
- Inputs bien espacés?

### Desktop (1920px)
- Pas trop d'espace vide?
- Proportions correctes?

---

## 🎯 Tests Finaux

Avant déploiement en production:

1. ✅ Tous les cas de test réussis
2. ✅ Pas d'erreurs console
3. ✅ localStorage fonctionne
4. ✅ Responsive sur tous les appareils
5. ✅ Navigation fluide entre écrans
6. ✅ Messages d'erreur clairs
7. ✅ UX cohérent (thème, spacing, couleurs)
