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

### Configuration des styles

Le thème utilise un système de configuration modulaire où chaque token de design est défini dans un fichier spécifique du dossier `config/`. Voici le processus de configuration :

#### Fichiers de configuration disponibles

- `config/colors/` - Configuration des couleurs
- `config/typography.json` - Tailles et familles de polices
- `config/spacing.json` - Espacements et marges
- `config/shadow.json` - Ombres et effets
- `config/border.json` - Bordures et rayons
- `config/layout.json` - Disposition et conteneurs
- `config/blocks.json` - Configuration des blocs WordPress

#### Processus de configuration (exemple avec les couleurs)

1. **Palette de couleurs** : `config/color.json`
   - Définit la palette de couleurs WordPress (hex, slug, nom)
   - Exemple : `{"slug": "primary", "color": "#F59E0B", "name": "Primary"}`

2. **Variables CSS** : `src/styles/index.scss`
   - Définit les variables CSS personnalisées (format RGB)
   - Exemple : `--primary: 245 158 11;`

3. **Configuration Tailwind** : `tailwind.config.js`
   - Mappe les variables CSS vers les classes Tailwind
   - Exemple : `primary: "rgb(var(--primary))"`

4. **Classes utilitaires** : `config/colors/starter.json`
   - Définit les combinaisons de classes Tailwind pour l'éditeur
   - Exemple : `"primary": "bg-primary text-dark"`
   - Utilisé par le `StarterColorConfigurator` pour l'éditeur de blocs


### Typographie

Le thème utilise des polices personnalisées :
- **Inclusive Sans** : Police principale
- **Yeseva One** : Police d'accent

#### Processus pour changer les polices

Pour modifier les polices du thème, suivez ces étapes dans l'ordre :

1. **Ajouter les fichiers de police** : `src/fonts/`
   - Placez vos fichiers de police (format WOFF2 recommandé) dans le dossier `src/fonts/`
   - Exemple : `ma-nouvelle-police.woff2`

2. **Configurer WordPress** : `config/typography.json`
   - Modifiez la section `fontFamilies` pour ajouter votre nouvelle police
   - Exemple :
   ```json
   {
     "fontFamily": "Ma Nouvelle Police, Arial, sans-serif",
     "slug": "ma-nouvelle-police",
     "name": "Ma Nouvelle Police",
     "fontFace": [
       {
         "fontDisplay": "swap",
         "fontStyle": "normal",
         "fontWeight": "400",
         "src": [
           "file:./src/fonts/ma-nouvelle-police.woff2"
         ]
       }
     ]
   }
   ```

3. **Configurer Tailwind** : `tailwind.config.js`
   - Ajoutez votre police dans la section `fontFamily.extend`
   - Exemple : `"ma-nouvelle-police": ["Ma Nouvelle Police", "Arial", "sans-serif"]`
   - Modifiez les règles de base pour appliquer la police aux éléments souhaités

4. **Appliquer dans les styles** : `src/styles/index.scss`
   - Utilisez les classes Tailwind pour appliquer la police
   - Exemple : `@apply font-ma-nouvelle-police;`

5. **Reconstruire les assets** :
   ```bash
   npm run build
   ```

#### Classes Tailwind disponibles

- `font-inclusive` : Police Inclusive Sans
- `font-yeseva` : Police Yeseva One
- `font-ma-nouvelle-police` : Votre nouvelle police (après configuration)

### Templates disponibles

- `index.html` - Template principal
- `home.html` - Page d'accueil
- `single.html` - Articles individuels
- `page.html` - Pages statiques
- `404.html` - Page d'erreur 404

### Template Parts

- `header.html` - En-tête du site
- `footer.html` - Pied de page du site

## 🔍 SEO et Performance

- Balises meta optimisées
- Structure HTML sémantique
- Images optimisées et lazy loading
- CSS et JS minifiés en production

## 🛡️ Sécurité

- Validation et sanitisation des données
- Protection contre les injections
- Headers de sécurité appropriés

## 👨‍💻 Auteur

**Maïté Armengaud**

## 🔄 Changelog

### Version 1.0.0
- Version initiale
- Support Tailwind CSS
- Templates de base
- Configuration du thème moderne

---

**Note** : Ce thème est en développement actif. Les fonctionnalités peuvent évoluer. 