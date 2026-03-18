export interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Site MoS-T',
    description:
      'Site vitrine multilingue français / anglais. Accessibilité et internationalisation.',
    href: 'https://aurelieleborgne.github.io/site-MoS-T/fr/',
    image: '/portfolio/images/portfolio/mos-t.webp',
  },
  {
    title: 'Soirée Guitare',
    description:
      'Site événementiel pour un concert. Page unique, design immersif, informations pratiques.',
    href: 'https://labbetristan.github.io/soireeGuitare/',
    image: '/portfolio/images/portfolio/soiree-guitare.webp',
  },
  {
    title: 'Les Butineuses des 1000 fleurs',
    description:
      "Site vitrine pour une association apicole. Présentation de l'activité, des produits et des événements.",
    href: 'https://lesbutineusesdes1000fleurs.fr/',
    image: '/portfolio/images/portfolio/butineuses.webp',
  }
];
