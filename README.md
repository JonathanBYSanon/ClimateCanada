# GreenData - Visualisation des Données Climatiques du Canada

![GreenData Logo](images/logo.png)

GreenData est une plateforme web interactive qui permet de visualiser les données climatiques du Canada de 2019 à 2024. Le projet présente les tendances des températures, des émissions de CO₂ et des précipitations à travers des tableaux de bord intuitifs et des visualisations interactives.

## 🌟 Fonctionnalités

- **Interface Responsive** : Compatible avec tous les appareils (desktop, tablette, mobile)
- **Visualisations Interactives** : Tableaux de bord Power BI intégrés
- **Navigation Intuitive** : Menu de navigation cohérent sur toutes les pages
- **Design Moderne** : Interface propre utilisant Tailwind CSS
- **PWA Ready** : Application web progressive avec manifest.json
- **Optimisation SEO** : Meta tags, sitemap et robots.txt inclus

## 🏗️ Structure du Projet

```
ClimateCanada/
├── index.html                 # Page d'accueil
├── 404.html                  # Page d'erreur 404
├── manifest.json             # Manifest PWA
├── robots.txt               # Fichier robots pour SEO
├── sitemap.xml              # Plan du site pour SEO
├── components/
│   ├── header.html          # Composant en-tête
│   └── footer.html          # Composant pied de page
├── pages/
│   ├── dashboard.html       # Page de visualisation Power BI
│   └── team.html            # Page équipe
├── js/
│   └── inject.js            # Script d'injection des composants
└── images/
    ├── logo.png            # Logo principal
    ├── icon512_maskable.png # Icône PWA maskable
    └── icon512_rounded.png  # Icône PWA arrondie
```

## 🎨 Design et Couleurs

### Palette de Couleurs
- **Couleur Principale** : `#209E92` (Teal/Vert-bleu)
- **Couleur Foncée** : `#004E66` (Bleu foncé pour header/footer)
- **Couleur Claire** : `#2EBC8F` (Teal clair pour gradients)

### Typographie et Icônes
- **Framework CSS** : Tailwind CSS via CDN
- **Icônes** : Font Awesome 6.4.0
- **Police** : Police système par défaut de Tailwind

## 🚀 Installation et Déploiement

### Prérequis
- Serveur web (Apache, Nginx, ou serveur de développement local)
- Navigateur web moderne

### Déploiement Local
1. Clonez ou téléchargez le projet
2. Placez les fichiers dans votre répertoire web
3. Ouvrez `index.html` dans votre navigateur
4. Ou utilisez un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   
   # Avec PHP
   php -S localhost:8000
   ```

### Configuration Power BI
Pour intégrer votre tableau de bord Power BI :
1. Ouvrez `pages/dashboard.html`
2. Localisez le commentaire `<!-- TODO: Insert Power BI embed URL here -->`
3. Remplacez le placeholder par votre iframe Power BI :
   ```html
   <iframe 
       src="VOTRE_URL_POWER_BI_EMBED"
       frameborder="0" 
       allowFullScreen="true"
       title="GreenData Climate Dashboard">
   </iframe>
   ```

## 📱 Progressive Web App (PWA)

Le projet inclut un fichier `manifest.json` configuré pour transformer le site en PWA :
- Installation sur l'écran d'accueil
- Icônes adaptées pour différentes plateformes
- Couleur de thème personnalisée
- Mode d'affichage standalone

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **Tailwind CSS** : Framework CSS utilitaire
- **JavaScript Vanilla** : Interactions et injection de composants
- **Font Awesome** : Bibliothèque d'icônes
- **Power BI** : Visualisations de données (à intégrer)

## 📊 Pages et Fonctionnalités

### Page d'Accueil (`index.html`)
- Présentation du projet GreenData
- Hero section avec appels à l'action
- Section des fonctionnalités principales
- Informations sur le projet
- Statistiques de base

### Page Visualisation (`pages/dashboard.html`)
- Intégration Power BI (à configurer)
- Instructions d'utilisation
- Statistiques rapides
- Bouton d'actualisation

### Page Équipe (`pages/team.html`)
- Présentation de 4 membres d'équipe
- Mission et valeurs
- Informations de contact
- Avatars placeholder

### Page 404 (`404.html`)
- Page d'erreur personnalisée
- Suggestions de navigation
- Fonction de recherche
- Faits climatiques intéressants

## 🔧 Personnalisation

### Modification des Couleurs
Pour changer la palette de couleurs, modifiez la configuration Tailwind dans chaque fichier HTML :
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': '#VOTRE_COULEUR',
                'primary-dark': '#VOTRE_COULEUR_FONCEE',
                'primary-light': '#VOTRE_COULEUR_CLAIRE'
            }
        }
    }
}
```

### Ajout de Nouvelles Pages
1. Créez votre fichier HTML dans le dossier approprié
2. Incluez les placeholders header et footer :
   ```html
   <div id="header-placeholder"></div>
   <!-- Votre contenu -->
   <div id="footer-placeholder"></div>
   <script src="/js/inject.js"></script>
   ```
3. Ajoutez les liens de navigation dans `components/header.html`

## 🌐 SEO et Accessibilité

- Meta tags optimisés pour chaque page
- Descriptions META appropriées
- Alt texts pour toutes les images
- Structure HTML sémantique
- Navigation accessible au clavier
- Contraste de couleurs respecté

## 📝 À Faire

- [ ] Intégrer l'URL Power BI réelle
- [ ] Ajouter de vraies photos d'équipe
- [ ] Configurer l'URL du site dans sitemap.xml
- [ ] Tester la responsivité sur différents appareils
- [ ] Optimiser les performances
- [ ] Ajouter des tests automatisés

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : contact@greendata.ca
- **Équipe** : Voir la page [équipe](pages/team.html)

---

**GreenData** - Visualiser le climat, comprendre l'avenir 🌱
