# Portfolio — Tristan Labbé

Site vitrine professionnel de **Tristan Labbé**, développeur web freelance spécialisé dans la création de sites pour les TPE, artisans et associations.

🔗 **[labbetristan.github.io/portfolio](https://labbetristan.github.io/portfolio/)**

## Stack technique

- **[Astro](https://astro.build/)** 6 — Générateur de sites statiques
- **[Tailwind CSS](https://tailwindcss.com/)** 4 — Styles utilitaires
- **GitHub Pages** — Hébergement

## Pages

| Page | Description |
| :--- | :---------- |
| Accueil | Hero animé, à propos, compétences, services, réalisations, CTA |
| Services | Détail des offres (site vitrine, refonte) |
| Portfolio | Réalisations avec captures d'écran des sites livrés |
| Contact | Formulaire (Formspree) + coordonnées |
| Mentions légales | Obligations légales |

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Mode sombre / clair avec persistance localStorage
- Animations premium (hero, scroll reveal, particules, gradient)
- Bouton pause/play des animations (RGAA 13.8)
- Conformité RGAA (contraste ≥ 4.5:1, navigation clavier, skip link, aria)
- Favicon SVG + PNG + Apple Touch Icon
- SEO : sitemap, meta OG/Twitter, JSON-LD, Google Search Console
- Score Lighthouse : 95+ accessibilité, 100 bonnes pratiques, 100 SEO

## Développement

```bash
# Prérequis : Node.js 22+
nvm use 22

# Installation
npm install

# Serveur de développement
npm run dev

# Build production
npm run build

# Prévisualisation du build
npm run preview
```

## Structure du projet

```
src/
├── components/     # Header, Footer, ScrollToTop, Card, Button…
├── layouts/        # BaseLayout (SEO, meta, scripts)
├── pages/          # index, services, portfolio, contact, mentions-legales
└── styles/         # global.css (tokens, animations, dark mode)
public/
├── images/         # Screenshots portfolio, logos technos
├── favicon.svg     # Favicon vectoriel
└── robots.txt
```

## Licence

© 2026 Tristan Labbé — Tous droits réservés.
