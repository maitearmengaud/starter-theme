# Starter - Thème WordPress

Un thème WordPress moderne et élégant conçu pour tous types de projets, utilisant Tailwind CSS et les dernières technologies web.

## 🚀 Caractéristiques

- **Design moderne** : Interface épurée et responsive
- **Tailwind CSS** : Framework CSS utilitaire pour un développement rapide
- **Block Editor** : Support complet de l'éditeur de blocs WordPress
- **Performance optimisée** : Code optimisé pour des temps de chargement rapides
- **Accessibilité** : Conforme aux standards d'accessibilité web
- **SEO friendly** : Optimisé pour les moteurs de recherche

## 📋 Prérequis

- WordPress 6.7 ou supérieur
- PHP 8.0 ou supérieur
- Node.js 16+ et npm (pour le développement)

## 🛠️ Installation

### 1. Installation du thème

1. Clonez ce repository dans votre dossier `wp-content/themes/` :
```bash
cd wp-content/themes/
git clone https://github.com/maitearmengaud/starter-theme.git starter
```

2. Activez le thème depuis l'administration WordPress

### 2. Installation des dépendances (développement)

```bash
cd starter
npm install
```

## 🔧 Développement

### Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run start

# Construire pour la production
npm run build

# Formater le code
npm run format

# Linter CSS
npm run lint:css

# Linter JavaScript
npm run lint:js

# Mettre à jour les packages WordPress
npm run packages-update
```

### Structure du projet

```
starter/
├── assets/              # Assets statiques (fonts, images)
├── config/              # Configuration du thème
├── includes/            # Fonctionnalités PHP
├── src/                 # Code source
│   ├── fonts/          # Polices personnalisées
│   ├── scripts/        # JavaScript
│   └── styles/         # Styles SCSS
├── templates/          # Templates HTML
├── template-parts/     # Parties de templates
├── functions.php       # Fonctions principales
├── style.css          # Fichier principal du thème
└── theme.json         # Configuration du thème
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont configurables via le fichier `config/colors/starter.json` et peuvent être modifiées dans l'éditeur de blocs WordPress.

### Typographie

Le thème utilise des polices personnalisées :
- **Inclusive Sans** : Police principale
- **Yeseva One** : Police d'accent

### Templates disponibles

- `index.html` - Page d'accueil
- `single.html` - Articles individuels
- `page.html` - Pages statiques
- `404.html` - Page d'erreur 404

## 📱 Responsive Design

Le thème est entièrement responsive et s'adapte à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔍 SEO et Performance

- Balises meta optimisées
- Structure HTML sémantique
- Images optimisées et lazy loading
- CSS et JS minifiés en production

## 🛡️ Sécurité

- Validation et sanitisation des données
- Protection contre les injections
- Headers de sécurité appropriés

## 📄 Licence

Ce thème est sous licence GNU General Public License v2 ou ultérieure.

## 👨‍💻 Auteur

**Maïté Armengaud**

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Consultez la documentation WordPress

## 🔄 Changelog

### Version 1.0.0
- Version initiale
- Support Tailwind CSS
- Templates de base
- Configuration du thème moderne

---

**Note** : Ce thème est en développement actif. Les fonctionnalités peuvent évoluer. 