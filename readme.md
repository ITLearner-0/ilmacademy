# 📚 ilmAcademy - Manuels Islamiques Interactifs

![ilmAcademy](https://img.shields.io/badge/ilmAcademy-1.0.0-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

## 🌟 À propos

**ilmAcademy** est une plateforme e-learning dédiée à l'apprentissage de l'Islam, de la langue arabe et des sciences islamiques. Le site propose des manuels interactifs numériques et une bibliothèque de livres pour enfants.

### ✨ Fonctionnalités

- 📖 **4 Manuels Interactifs** (Science du Hadith, Lettres Arabes, Croyance Islamique, Grammaire Arabe)
- 📚 **Bibliothèque Enfants** avec 8 livres adaptés par âge
- 🛒 **Système de panier** complet
- 💳 **Paiement intégré** (Stripe & PayPal)
- 👤 **Compte utilisateur** avec gestion des achats
- ⭐ **Section témoignages**
- 📝 **Blog pédagogique**
- 📱 **100% Responsive** (mobile, tablette, desktop)

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Bibliothèque d'icônes
- **Vercel** - Hébergement et déploiement

## 📦 Installation

### Prérequis

- Node.js 18+ installé
- Git installé
- Compte GitHub
- Compte Vercel (gratuit)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/VOTRE-USERNAME/ilmacademy.git
   cd ilmacademy
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Ajouter les manuels**
   
   Placez vos fichiers HTML dans le dossier `public/` :
   - `La Science du Hadith - Manuel Interactif.html`
   - `تعلم الحروف العربية - Manuel Interactif des Lettres Arabes.html`
   - `Ma Croyance Islamique.html`
   - `Ma Grammaire Arabe - Manuel Interactif.html`

4. **Lancer en mode développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur**
   
   Visitez `http://localhost:5173`

## 🌐 Déploiement sur Vercel

1. **Pousser sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Déployer sur Vercel**
   - Connectez-vous sur [vercel.com](https://vercel.com)
   - Importez votre repository GitHub
   - Cliquez sur "Deploy"
   - ✅ C'est en ligne !

Consultez le fichier `GUIDE_DEPLOIEMENT.md` pour des instructions détaillées.

## 📂 Structure du Projet

```
ilmacademy/
├── public/                  # Fichiers statiques (manuels HTML)
├── src/
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée React
│   └── index.css           # Styles globaux
├── index.html              # Page HTML principale
├── package.json            # Dépendances
├── vite.config.js          # Configuration Vite
└── README.md               # Ce fichier
```

## 🎨 Personnalisation

### Ajouter des produits

Modifiez les tableaux `products` et `childrenBooks` dans `src/App.jsx`

### Modifier les couleurs

Changez les classes Tailwind dans les composants ou ajoutez vos propres dégradés

### Ajouter des pages

Créez de nouvelles conditions dans la variable `currentPage`

## 📱 Pages Disponibles

- **Accueil** - Présentation et aperçus
- **Manuels** - Catalogue des manuels interactifs
- **Bibliothèque** - Livres pour enfants
- **Blog** - Articles pédagogiques
- **Témoignages** - Avis clients
- **Mes Manuels** - Bibliothèque personnelle (connecté)

## 🔐 Fonctionnalités de Sécurité

- Système d'authentification (simulé)
- Validation des formulaires
- Paiement sécurisé (intégration Stripe/PayPal)
- Protection des routes (Mes Manuels)

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Build pour production
npm run preview  # Prévisualiser le build
```

## 📊 Statistiques

- ✅ 4 Manuels interactifs
- ✅ 8 Livres pour enfants
- ✅ 4 Articles de blog
- ✅ 4 Témoignages clients
- ✅ 100% Responsive
- ✅ SEO optimisé

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

**ilmAcademy Team**

## 🙏 Remerciements

- Communauté React
- Vercel pour l'hébergement gratuit
- Tailwind CSS pour le framework CSS
- Lucide pour les icônes magnifiques

---

**Fait avec ❤️ pour l'éducation islamique**

🌐 **Site web :** [ilmacademy.vercel.app](https://ilmacademy.vercel.app)
