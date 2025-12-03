# 🔐 Guide Authentification Google & Mot de Passe Oublié

## 📋 Nouvelles Fonctionnalités Ajoutées

### 1. 🔑 Mot de Passe Oublié

#### Comment ça marche?

1. Sur l'écran de connexion, cliquez sur **"🔑 Mot de passe oublié?"**
2. Entrez votre **Email** utilisé lors de l'inscription
3. Cliquez sur **"📧 Envoyer le lien"**
4. Un **code temporaire** s'affichera à l'écran (valide 1 heure)
5. Utilisez ce code pour réinitialiser votre compte

#### Important

- ⏰ Le code est valide **1 heure** seulement
- 📧 En production, un email sera envoyé avec le lien
- 🔐 Pour la démo, le code s'affiche directement

---

## 🔐 Authentification Google

### Vue d'ensemble

Vous pouvez maintenant:
- ✅ Créer un compte via Google
- ✅ Vous connecter via Google
- ✅ Lier Google à un compte existant

### Comment Utiliser

#### Se Connecter ou S'inscrire avec Google

1. Sur l'écran de connexion, trouvez la section **"OU"**
2. Entrez votre **Email Google** (ex: `votre.email@gmail.com`)
3. Cliquez sur **"🔐 Se connecter avec Google"**
4. Vous serez automatiquement connecté/inscrit

#### Cas d'Usage

**Cas 1: Nouvel utilisateur**
- Entrez votre email Google
- L'application crée automatiquement un compte avec votre profil
- Vous êtes connecté immédiatement
- Complétez votre profil lors du tutoriel

**Cas 2: Utilisateur existant**
- Entrez l'email d'un compte existant
- Le compte existant sera lié à Google
- Vous pouvez vous connecter via Google ou email/password

---

## 💾 Stockage des Données

### Données Stockées Localement

```javascript
// Format utilisateur Google
{
  id: unique_id,
  name: "Prénom Nom",
  email: "email@gmail.com",
  password: "GOOGLE_AUTH",
  authProvider: "google",
  googleId: "unique_google_id",
  createdAt: ISO_date,
  isAdmin: false,
  profile: null
}

// Code de réinitialisation
{
  email: "votre@email.com",
  token: "code_temporaire",
  expiresAt: ISO_date
}
```

---

## 🚀 Déploiement en Production

### Pour une application en production, vous devez:

#### 1. Intégration Google OAuth

```bash
# Installer le package OAuth Google officiel
npm install @react-oauth/google
```

#### 2. Configurer Google Cloud Console

- Créer un projet sur [Google Cloud Console](https://console.cloud.google.com)
- Activer Google Sign-In API
- Créer des identifiants OAuth 2.0
- Ajouter vos domaines autorisés
- Obtenir votre `GOOGLE_CLIENT_ID`

#### 3. Modifier le composant Auth.js

```javascript
// Ajouter GoogleOAuthProvider au App.js
import { GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
  <App />
</GoogleOAuthProvider>
```

#### 4. Service Backend Email

- Installer Nodemailer ou SendGrid
- Créer un endpoint `/api/forgot-password`
- Générer des tokens JWT avec expiration
- Envoyer emails de réinitialisation

#### 5. Backend de Validation

```javascript
// API endpoint pour vérifier les tokens
POST /api/verify-reset-token
POST /api/reset-password

// API endpoint pour valider Google OAuth
POST /api/auth/google
```

---

## 🧪 Tester Localement

### Comptes de Test

#### Compte Email/Password
```
Email: test@example.com
Mot de passe: test123456
```

#### Compte Google (simulation)
```
Email: user@gmail.com
(Aucun mot de passe nécessaire)
```

### Scénarios de Test

1. **Test Inscription Google**: Entrez un nouvel email gmail → Nouveau compte créé
2. **Test Connexion Google**: Entrez l'email d'un compte existant → Compte lié
3. **Test Mot de Passe Oublié**: Entrez un email existant → Code généré
4. **Test Validation Email**: Email invalide → Message d'erreur

---

## 🔒 Sécurité (Important!)

### Mode Démo (Actuel)
⚠️ **NE PAS UTILISER EN PRODUCTION**
- Tokens stockés en clair
- Pas de chiffrement
- localStorage n'est pas sécurisé

### En Production
✅ **Implémentez**:
- HTTPS obligatoire
- Tokens JWT avec signature RS256
- Cookies HttpOnly et Secure
- CSRF protection
- Rate limiting sur les endpoints
- Hashage des mots de passe (bcrypt)
- Validation stricte côté serveur
- Logs d'audit de toutes les authentifications

---

## 📞 Support et Questions

Pour des questions sur l'implémentation complète:
- Voir le fichier `AUTHENTIFICATION.md` pour plus de détails
- Consulter la documentation officielle de Google OAuth
- Vérifier les bonnes pratiques de sécurité OWASP

---

## ✅ Checklist d'Intégration

- [ ] Installer et configurer Google OAuth
- [ ] Obtenir Google Client ID
- [ ] Configurer le backend de réinitialisation
- [ ] Tester tous les cas d'usage
- [ ] Activer HTTPS
- [ ] Mettre en place la sécurité
- [ ] Documenter les endpoints API
- [ ] Créer des logs d'audit
- [ ] Tester sur différents navigateurs
- [ ] Déployer en production
