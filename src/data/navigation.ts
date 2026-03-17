export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/portfolio/', label: 'Accueil' },
  { href: '/portfolio/services/', label: 'Services' },
  { href: '/portfolio/portfolio/', label: 'Portfolio' },
  { href: '/portfolio/contact/', label: 'Contact' },
];
