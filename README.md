# Projet FAQ

![Aperçu du design pour le défi de codage FAQ accordéon](./design/desktop-preview.jpg)

## Bienvenue ! 👋

Ce projet est une section FAQ (Foire Aux Questions) interactive avec un système d'accordéon, permettant aux utilisateurs d'afficher et de masquer les réponses aux questions de manière fluide et accessible.


---

## Aperçu du projet

### Le défi

Ce projet vise à créer une section FAQ entièrement fonctionnelle et accessible. Les utilisateurs doivent pouvoir :

- ✅ **Afficher/Masquer** la réponse à une question en cliquant dessus
- ✅ **Design responsive** - Voir une mise en page optimale selon la taille de l'écran (mobile et desktop)
- ✅ **États interactifs** - Voir les états hover et focus sur tous les éléments interactifs

### Fonctionnalités

#### ♿ Accessibilité
- Sémantique HTML correcte

#### 📱 Design responsive
- Mobile-first (375px)
- Desktop optimisé (1440px)
- Images de fond adaptatives

---

## Technologies utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec CSS, flexbox
- **JavaScript Vanilla** - Logique interactive sans framework

### Polices & Assets
- **Font** : Work Sans (Google Fonts)
- **Icônes** : SVG personnalisés (plus, minus, star)
- **Images** : Patterns de fond responsive

---

## Structure du projet

```
├── index.html              # Structure HTML principale
├── style.css               # Styles CSS
├── script.js               # Logique JavaScript
├── README.md               # Documentation du projet
├── assets/
│   └── images/
│       ├── background-pattern-desktop.svg
│       ├── background-pattern-mobile.svg
│       ├── favicon-32x32.png
│       ├── icon-plus.svg
│       ├── icon-minus.svg
│       └── icon-star.svg
└── design/
    ├── active-states.jpg
    ├── desktop-design.jpg
    ├── desktop-preview.jpg
    └── mobile-design.jpg
```

---

## Design et style

### Palette de couleurs
```css
--white: hsl(0, 0%, 100%)           /* Blanc pur */
--light-pink: hsl(275, 100%, 97%)   /* Rose clair (fond) */
--gray-purple: hsl(292, 16%, 49%)   /* Violet grisâtre (texte secondaire) */
--dark-purple: hsl(292, 42%, 14%)   /* Violet foncé (texte principal) */
```

### Typographie
- **Police** : Work Sans (Google Fonts)
- **Taille paragraphes** : 14px
- **Titre H1** : 3rem (48px)
- **Poids boutons** : 700 (bold)

### Breakpoints
- **Mobile** : 375px (par défaut)
- **Desktop** : 700px et plus

---

## Fonctionnement technique

### HTML
- 4 questions FAQ structurées avec des `<button>` accessibles
- Double icône (plus/minus) dans chaque bouton
- Contenu dans des `<div class="content">` avec hauteur contrôlée

### CSS
- **Reset CSS** complet pour cohérence cross-browser
- **Flexbox** pour alignement des éléments
- **Position absolute** pour gestion des icônes superposées
- **Box-shadow** pour profondeur du container
- **Media queries** pour responsive design

### JavaScript
- **Event listeners** sur chaque bouton FAQ

---


**Bon codage !** 🚀