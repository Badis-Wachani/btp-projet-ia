# 🔐 Système d'Authentification

## 📝 Nouvelles Fonctionnalités

Une interface d'authentification complète a été ajoutée à votre application. Vous pouvez maintenant:

### ✅ S'inscrire (Créer un compte)
1. Cliquez sur **"S'inscrire"** sur l'écran de connexion
2. Remplissez les champs:
   - **Nom complet**: Votre nom
   - **Email**: Votre adresse email unique
   - **Mot de passe**: Au moins 6 caractères
   - **Confirmer le mot de passe**: Doit correspondre au mot de passe
3. Cliquez sur **"📝 S'inscrire"**

### 🔓 Se Connecter
1. Entrez votre **Email** et votre **Mot de passe**
2. Cliquez sur **"🔓 Se connecter"**
3. Vous serez redirigé vers l'accueil

### 🔐 Se Connecter avec Google
1. Entrez votre **Email Google** (ex: `votre.email@gmail.com`)
2. Cliquez sur **"🔐 Se connecter avec Google"**
3. Vous serez automatiquement connecté/inscrit
4. Un nouveau compte est créé si l'email n'existe pas

### 🔑 Mot de Passe Oublié
1. Sur l'écran de connexion, cliquez sur **"🔑 Mot de passe oublié?"**
2. Entrez votre **Email**
3. Cliquez sur **"📧 Envoyer le lien"**
4. Un **code temporaire** s'affichera (valide 1 heure)
5. Utilisez ce code pour réinitialiser votre accès

### 🚪 Se Déconnecter
- Cliquez sur le bouton **"🚪 Déconnexion"** dans la navbar en haut à droite

---

## 💾 Stockage des Données

Les données sont stockées dans le **localStorage** de votre navigateur:
- **`users`**: Liste des utilisateurs avec leurs informations
- **`currentUser`**: Utilisateur actuellement connecté

⚠️ **Important**: Les données sont supprimées si vous videz le cache/les cookies du navigateur.

---

## 🎨 Fichiers Ajoutés

1. **`src/components/Auth.js`** - Composant d'authentification
2. **`src/styles/Auth.css`** - Styles pour l'interface d'authentification

---

## 🧪 Tester l'Application

### Comptes de test:
- **Email**: test@example.com
- **Mot de passe**: test123456
- **Nom**: Test User

### Créer un nouveau compte:
Cliquez sur "S'inscrire" et remplissez les informations.

### Tester Google Sign-In:
Entrez n'importe quel email Gmail (ex: `test@gmail.com`) et cliquez sur "Se connecter avec Google".

### Tester Mot de Passe Oublié:
Cliquez sur "Mot de passe oublié", entrez un email existant et recevez un code temporaire.

---

## 🔒 Sécurité (Important!)

⚠️ **Ceci est une version démo utilisant localStorage**. Pour une application en production:
- Utilisez un serveur backend pour valider les données
- Hashez les mots de passe (ne les stockez jamais en clair)
- Utilisez des tokens JWT ou des sessions sécurisées
- Chiffrez les données sensibles
- Implémentez Google OAuth 2.0 correctement
- Mettez en place la validation email pour la réinitialisation

Pour une intégration complète avec Google OAuth en production, consultez le fichier **GOOGLE_AUTH_GUIDE.md**.

---

## 🎯 Fonctionnalités de Validation

✓ Email valide  
✓ Mot de passe minimum 6 caractères  
✓ Confirmation du mot de passe  
✓ Email unique (pas de doublons)  
✓ Messages d'erreur clairs  

---

## 📱 Mode Responsive

L'interface d'authentification est entièrement responsive et fonctionne sur:
- 📱 Mobiles
- 💻 Tablettes
- 🖥️ Ordinateurs
