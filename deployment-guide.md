# 🚀 Guide de Déploiement ilmAcademy sur Vercel

## 📦 Contenu du Package

Vous avez maintenant tous les fichiers nécessaires :

```
ilmacademy/
├── package.json              ✅ Configuration du projet
├── vite.config.js            ✅ Configuration Vite
├── index.html                ✅ Page HTML principale
├── .gitignore                ✅ Fichiers à ignorer par Git
├── public/                   📁 Dossier pour vos manuels HTML
│   ├── La Science du Hadith - Manuel Interactif.html
│   ├── تعلم الحروف العربية - Manuel Interactif des Lettres Arabes.html
│   ├── Ma Croyance Islamique.html
│   └── Ma Grammaire Arabe - Manuel Interactif.html
└── src/
    ├── App.jsx               ✅ Composant principal (votre site)
    ├── main.jsx              ✅ Point d'entrée React
    └── index.css             ✅ Styles globaux
```

---

## 🛠️ Étape 1 : Installer Node.js

**Si vous n'avez pas Node.js installé :**

1. Allez sur [nodejs.org](https://nodejs.org)
2. Téléchargez la version **LTS** (recommandée)
3. Installez en suivant les instructions
4. Vérifiez l'installation en ouvrant un terminal :
   ```bash
   node --version
   npm --version
   ```

---

## 📁 Étape 2 : Créer la Structure du Projet

### Option A : Manuellement

1. **Créez un dossier** `ilmacademy` sur votre ordinateur

2. **Créez la structure des dossiers :**
   ```
   ilmacademy/
   ├── public/
   └── src/
   ```

3. **Copiez les fichiers** que je vous ai fournis :
   - `package.json` → À la racine
   - `vite.config.js` → À la racine
   - `index.html` → À la racine
   - `.gitignore` → À la racine
   - `src/App.jsx` → Dans le dossier `src/`
   - `src/main.jsx` → Dans le dossier `src/`
   - `src/index.css` → Dans le dossier `src/`

4. **Placez vos 4 manuels HTML** dans le dossier `public/`

### Option B : Via Terminal (Plus rapide)

```bash
# Créer le dossier principal
mkdir ilmacademy
cd ilmacademy

# Créer la structure
mkdir public src

# Les fichiers seront créés quand vous les copierez
```

---

## ⚙️ Étape 3 : Installer les Dépendances

**Ouvrez un terminal** dans le dossier `ilmacademy` et exécutez :

```bash
npm install
```

⏳ Attendez quelques minutes que toutes les dépendances s'installent...

---

## 🧪 Étape 4 : Tester en Local (Optionnel)

**Avant de déployer, testez que tout fonctionne :**

```bash
npm run dev
```

✅ Votre site s'ouvrira dans le navigateur à l'adresse : `http://localhost:5173`

**Testez :**
- Navigation entre les pages
- Ajout au panier
- Système de connexion
- Ouverture des manuels

🛑 Pour arrêter le serveur : `Ctrl + C`

---

## 🐙 Étape 5 : Créer un Repository GitHub

### 5.1 Créer un compte GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"Sign up"**
3. Créez votre compte (gratuit)

### 5.2 Créer un nouveau Repository

1. Cliquez sur le bouton **"+"** en haut à droite
2. Sélectionnez **"New repository"**
3. **Nom du repository :** `ilmacademy`
4. **Visibilité :** Public
5. ❌ NE cochez PAS "Add a README file"
6. Cliquez sur **"Create repository"**

### 5.3 Pousser votre code sur GitHub

**Dans votre terminal (dossier ilmacademy) :**

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Premier commit - ilmAcademy"

# Ajouter le repository distant
# ⚠️ REMPLACEZ "VOTRE-USERNAME" par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/ilmacademy.git

# Renommer la branche en main
git branch -M main

# Pousser le code
git push -u origin main
```

✅ Votre code est maintenant sur GitHub !

---

## 🚀 Étape 6 : Déployer sur Vercel

### 6.1 Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Sélectionnez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre GitHub

### 6.2 Importer votre Projet

1. Dans le Dashboard Vercel, cliquez sur **"Add New Project"**
2. Cliquez sur **"Import Git Repository"**
3. Recherchez et sélectionnez **`ilmacademy`**
4. Cliquez sur **"Import"**

### 6.3 Configuration du Déploiement

Vercel détecte automatiquement les paramètres :

- **Framework Preset :** Vite
- **Build Command :** `npm run build`
- **Output Directory :** `dist`
- **Install Command :** `npm install`

✅ Ces paramètres sont corrects ! Ne changez rien.

### 6.4 Déployer !

1. Cliquez sur le bouton **"Deploy"** 🚀
2. ⏳ Attendez 1-2 minutes pendant le build
3. 🎉 **C'est en ligne !**

Vercel vous donnera une URL comme :
```
https://ilmacademy.vercel.app
```

---

## 🌐 Étape 7 : Configurer un Domaine Personnalisé (Optionnel)

### Si vous avez déjà un domaine :

1. Dans Vercel, allez dans **Settings** → **Domains**
2. Cliquez sur **"Add"**
3. Entrez votre domaine : `ilmacademy.com`
4. Suivez les instructions pour configurer les DNS :
   - **Type A** → `76.76.21.21`
   - **CNAME www** → `cname.vercel-dns.com`

### Si vous voulez acheter un domaine :

1. Achetez sur [Namecheap](https://www.namecheap.com) ou [OVH](https://www.ovh.com)
2. Suivez les étapes ci-dessus

⏳ Propagation DNS : 24-48h maximum

---

## 🔄 Étape 8 : Mettre à Jour votre Site

**Chaque fois que vous voulez modifier votre site :**

1. Modifiez les fichiers localement
2. Testez avec `npm run dev`
3. Poussez les changements :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push
   ```
4. ✨ Vercel redéploie automatiquement !

---

## ✅ Checklist Finale

- [ ] Node.js installé
- [ ] Tous les fichiers créés et à leur place
- [ ] Les 4 manuels HTML dans le dossier `public/`
- [ ] `npm install` exécuté avec succès
- [ ] Test local fonctionnel (`npm run dev`)
- [ ] Code poussé sur GitHub
- [ ] Projet déployé sur Vercel
- [ ] Site accessible via l'URL Vercel

---

## 🆘 Problèmes Courants

### Erreur : "Command not found: git"
**Solution :** Installez Git depuis [git-scm.com](https://git-scm.com)

### Erreur : "npm : command not found"
**Solution :** Réinstallez Node.js depuis [nodejs.org](https://nodejs.org)

### Le site ne charge pas les manuels
**Solution :** Vérifiez que les 4 fichiers HTML sont bien dans le dossier `public/`

### Erreur de build sur Vercel
**Solution :** Vérifiez que tous les fichiers ont bien été poussés sur GitHub

---

## 📞 Support

Si vous rencontrez un problème :
1. Vérifiez les logs dans le Dashboard Vercel
2. Consultez la documentation : [vercel.com/docs](https://vercel.com/docs)
3. Contactez le support Vercel (très réactif !)

---

## 🎉 Félicitations !

Votre site **ilmAcademy** est maintenant en ligne et accessible au monde entier ! 🌍

**URL de votre site :** `https://ilmacademy.vercel.app`

Partagez-le avec votre communauté ! 📢

---

**Fait avec ❤️ pour ilmAcademy**
