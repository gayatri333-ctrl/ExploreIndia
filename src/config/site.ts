/**
 * ExploreIndia Portal Single Source of Truth Site Configuration
 */

export const siteConfig = {
  name: 'ExploreIndia',
  shortName: 'ExploreIndia',
  title: 'ExploreIndia — India Tourism & Travel Portal',
  description:
    'Discover 28 States & 8 Union Territories across 6 official tourism zones in India. Explore heritage fortresses, ancient temples, backwater lagoons, wildlife sanctuaries, and cultural festivals.',
  url: 'https://explore-india-travel.vercel.app',
  ogImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
  editorialDesk: 'ExploreIndia Editorial Desk',

  // Official 6 Tourism Zones
  zones: ['North', 'South', 'East', 'West', 'Central', 'North East'] as const,

  // Footer Branding
  footerCredit: 'Crafted with ❤️ for Indian Tourism 🇮🇳',
  copyrightYear: 2026,

  // Stats Taxonomy
  stats: {
    states: '28 States & 8 Union Territories',
    zonesCount: '6 Official Tourism Zones',
    festivalsCount: '50+ Handpicked Festivals',
    itinerariesCount: '15+ Curated Itineraries',
  },

  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com/gayatri333-ctrl/ExploreIndia',
    officialIncredibleIndia: 'https://www.incredibleindia.gov.in',
  },
};

export type SiteConfig = typeof siteConfig;
