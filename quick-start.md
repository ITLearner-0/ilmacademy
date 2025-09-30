# ⚡ Démarrage Rapide - ilmAcademy

## 📋 Checklist de Déploiement en 10 Minutes

### ✅ Étape 1 : Télécharger les fichiers (1 min)

Copiez tous ces fichiers dans un dossier `ilmacademy` :

```
ilmacademy/
├── package.json          ← Copier depuis l'artifact
├── vite.config.js        ← Copier depuis l'artifact
├── index.html            ← Copier depuis l'artifact
├── .gitignore            ← Copier depuis l'artifact
├── README.md             ← Copier depuis l'artifact
├── public/               ← Créer le dossier
│   └── [4 manuels HTML]  ← Placer vos fichiers ici
└── src/                  ← Créer le dossier
    ├── App.jsx           ← Copier depuis l'artifact
    ├── main.jsx          ← Copier depuis l'artifact
    └── index.css         ← Copier depuis l'artifact
```

### ✅ Étape 2 : Installer les dépendances (2 min)

```bash
cd ilmacademy
npm install
```

### ✅ Étape 3 : Tester localement (1 min)

```bash
npm run dev
```

→ Ouvrir http://localhost:5173

### ✅ Étape 4 : Pousser sur GitHub (2 min)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-USERNAME/ilmacademy.git
git push -u origin main
```

### ✅ Étape 5 : Déployer sur Vercel (4 min)

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer "New Project"
4. Sélectionner le repo `ilmacademy`
5. Cliquer "Deploy"

---

## 🎯 Résultat Final

**Votre site sera en ligne à :** `https://ilmacademy.vercel.app`

---

## 🆘 Problème ?

| Erreur | Solution |
|--------|----------|
| `command not found: node` | Installer Node.js depuis [nodejs.org](https://nodejs.org) |
| `command not found: git` | Installer Git depuis [git-scm.com](https://git-scm.com) |
| Manuels ne chargent pas | Vérifier qu'ils sont dans `public/` |
| Erreur de build Vercel | Vérifier que tous les fichiers sont sur GitHub |

---

## 📞 Besoin d'aide détaillée ?

Consultez le fichier **`GUIDE_DEPLOIEMENT.md`** pour des instructions complètes pas à pas.

---

**🎉 C'est tout ! Votre site sera en ligne en 10 minutes ! 🚀**
