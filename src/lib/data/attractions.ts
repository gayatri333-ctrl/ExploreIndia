export interface Attraction {
  id: string;
  name: string;
  category: 'Fort' | 'Temple' | 'Natural Landmark' | 'Palace' | 'Monument' | 'Cave';
  state: string;
  stateSlug: string;
  citySlug: string;
  image: string;
  description: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'amber-fort',
    name: 'Amber Palace & Fort',
    category: 'Fort',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    citySlug: 'jaipur',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
    description: 'Majestic hilltop fortress featuring red sandstone ramparts, intricate Sheesh Mahal mirror work, and panoramic Maota Lake vistas.'
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    category: 'Temple',
    state: 'Odisha',
    stateSlug: 'odisha',
    citySlug: 'konark',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    description: '13th-century architectural marvel shaped like a colossal stone chariot with 24 carved wheels pulled by seven gallop horses.'
  },
  {
    id: 'pangong-lake',
    name: 'Pangong Tso Lake',
    category: 'Natural Landmark',
    state: 'Ladakh',
    stateSlug: 'ladakh',
    citySlug: 'leh',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    description: 'High-altitude endorheic lake at 4,350m whose crystalline saline waters shift through brilliant shades of turquoise, azure, and deep navy.'
  },
  {
    id: 'meenakshi-temple',
    name: 'Meenakshi Amman Temple',
    category: 'Temple',
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    citySlug: 'madurai',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    description: 'Historic Dravidian citadel temple adorned with 14 towering gopurams decorated in tens of thousands of vibrant stone carvings.'
  },
  {
    id: 'ajanta-caves',
    name: 'Ajanta Rock-Cut Caves',
    category: 'Cave',
    state: 'Maharashtra',
    stateSlug: 'maharashtra',
    citySlug: 'aurangabad',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
    description: 'Ancient 2nd-century BCE rock-hewn Buddhist cave monuments preserving world-renowned frescoes and intricate stone carvings.'
  },
  {
    id: 'living-root-bridges',
    name: 'Cherrapunji Living Root Bridges',
    category: 'Natural Landmark',
    state: 'Meghalaya',
    stateSlug: 'meghalaya',
    citySlug: 'shillong',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    description: 'Bio-engineered marvels constructed over generations by Khasi tribes weaving aerial roots of Ficus elastica trees across river chasms.'
  },
  {
    id: 'khajuraho-monuments',
    name: 'Khajuraho Group of Temples',
    category: 'Temple',
    state: 'Madhya Pradesh',
    stateSlug: 'madhya-pradesh',
    citySlug: 'khajuraho',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?q=80&w=800',
    description: 'Nagara-style medieval stone temples renowned worldwide for their intricate architectural symmetry and expressive frieze sculptures.'
  },
  {
    id: 'golden-temple',
    name: 'Harmandir Sahib Golden Temple',
    category: 'Temple',
    state: 'Punjab',
    stateSlug: 'punjab',
    citySlug: 'amritsar',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800',
    description: 'Sacred gold-gilded spiritual sanctuary set in the center of the Amrit Sarovar holy pool, welcoming travelers of all backgrounds.'
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal Palace of Winds',
    category: 'Palace',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    citySlug: 'jaipur',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    description: 'Five-story pink sandstone honeycomb facade with 953 finely carved lattice windows (jharokhas) designed for natural breeze circulation.'
  },
  {
    id: 'alleppey-backwaters',
    name: 'Alleppey Lagoon Backwaters',
    category: 'Natural Landmark',
    state: 'Kerala',
    stateSlug: 'kerala',
    citySlug: 'kochi',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    description: 'Tranquil network of interconnected brackish lagoons, rivers, and canals flanked by lush palm groves and traditional village life.'
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers National Park',
    category: 'Natural Landmark',
    state: 'Uttarakhand',
    stateSlug: 'uttarakhand',
    citySlug: 'rishikesh',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
    description: 'High-altitude Himalayan alpine valley blooming with hundreds of rare endemic wildflower species during the summer monsoon.'
  },
  {
    id: 'victoria-memorial',
    name: 'Victoria Memorial Hall',
    category: 'Monument',
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    citySlug: 'kolkata',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    description: 'Grand Indo-Saracenic white Makrana marble monument set in sprawling gardens, housing rare historical galleries and artifacts.'
  },
  {
    id: 'brihadisvara-temple',
    name: 'Brihadisvara Temple',
    category: 'Temple',
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    citySlug: 'thanjavur',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    description: 'Chola-era granite masterpiece with a 66-meter central vimana tower topped by an 80-ton monolithic stone capstone.'
  },
  {
    id: 'rann-of-kutch',
    name: 'Great Rann of Kutch Salt Marsh',
    category: 'Natural Landmark',
    state: 'Gujarat',
    stateSlug: 'gujarat',
    citySlug: 'kutch',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    description: 'Endless white salt desert flat covering over 7,500 square kilometers, glistening like silver under full moon nights.'
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Royal Palace',
    category: 'Palace',
    state: 'Karnataka',
    stateSlug: 'karnataka',
    citySlug: 'mysuru',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    description: 'Opulent royal seat of the Wadiyar dynasty featuring stained glass domes, ivory-carved doors, and 100,000 illumination lights.'
  },
  {
    id: 'gateway-of-india',
    name: 'Gateway of India Citadel',
    category: 'Monument',
    state: 'Maharashtra',
    stateSlug: 'maharashtra',
    citySlug: 'mumbai',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800',
    description: 'Iconic 26-meter basalt archway on Mumbai water-edge overlooking the Arabian Sea, blending Roman triumphal arch and Gujarati motifs.'
  }
];
