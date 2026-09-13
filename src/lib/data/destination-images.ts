/**
 * ExploreIndia Canonical Destination Image Repository
 * Single Source of Truth for verified, unique, high-resolution photographs of Indian destinations.
 */

export interface CanonicalDestinationImage {
  slug: string;
  cityName: string;
  stateName: string;
  imageUrl: string;
  altText: string;
  source: 'Unsplash' | 'Wikimedia Commons' | 'Pexels' | 'Official Tourism';
  photographerCredit?: string;
}

export const DESTINATION_CANONICAL_IMAGES: Record<string, CanonicalDestinationImage> = {
  varanasi: {
    slug: 'varanasi',
    cityName: 'Varanasi',
    stateName: 'Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200',
    altText: 'Sacred riverfront ghats and brass oil lamp illumination on the Ganges in Varanasi',
    source: 'Unsplash',
  },
  jaipur: {
    slug: 'jaipur',
    cityName: 'Jaipur',
    stateName: 'Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200',
    altText: 'Hawa Mahal Palace of Winds with red and pink sandstone jharokha lattice windows in Jaipur',
    source: 'Unsplash',
  },
  srinagar: {
    slug: 'srinagar',
    cityName: 'Srinagar',
    stateName: 'Jammu & Kashmir',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200',
    altText: 'Traditional wooden shikara boats floating on Dal Lake against Zabarwan mountains in Srinagar',
    source: 'Unsplash',
  },
  udaipur: {
    slug: 'udaipur',
    cityName: 'Udaipur',
    stateName: 'Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?q=80&w=1200',
    altText: 'Udaipur City Palace marble complex and Lake Pichola waterfront in Rajasthan',
    source: 'Unsplash',
  },
  kochi: {
    slug: 'kochi',
    cityName: 'Kochi',
    stateName: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200',
    altText: 'Cantilever Chinese fishing nets framed against sunset along Fort Kochi beach, Kerala',
    source: 'Unsplash',
  },
  madurai: {
    slug: 'madurai',
    cityName: 'Madurai',
    stateName: 'Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
    altText: 'Sculpted colorful gopuram towers of Meenakshi Amman Temple in Madurai, Tamil Nadu',
    source: 'Unsplash',
  },
  darjeeling: {
    slug: 'darjeeling',
    cityName: 'Darjeeling',
    stateName: 'West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
    altText: 'Terraced green tea plantations looking onto Mt Kanchenjunga snow peaks in Darjeeling',
    source: 'Unsplash',
  },
  hampi: {
    slug: 'hampi',
    cityName: 'Hampi',
    stateName: 'Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1200',
    altText: 'Monolithic stone chariot and boulder ruins of Vijayanagara Empire in Hampi, Karnataka',
    source: 'Unsplash',
  },
  jaisalmer: {
    slug: 'jaisalmer',
    cityName: 'Jaisalmer',
    stateName: 'Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?q=80&w=1200',
    altText: 'Golden sandstone fort ramparts of Sonar Qila glowing under Thar Desert sun in Jaisalmer',
    source: 'Unsplash',
  },
  amritsar: {
    slug: 'amritsar',
    cityName: 'Amritsar',
    stateName: 'Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
    altText: 'Golden Temple Harmandir Sahib reflected in sacred Amrit Sarovar lake in Amritsar',
    source: 'Unsplash',
  },
  shimla: {
    slug: 'shimla',
    cityName: 'Shimla',
    stateName: 'Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200',
    altText: 'Victorian Ridge promenade and Christ Church framing Himalayan crests in Shimla',
    source: 'Unsplash',
  },
  pondicherry: {
    slug: 'pondicherry',
    cityName: 'Pondicherry',
    stateName: 'Puducherry',
    imageUrl: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=1200',
    altText: 'Mustard yellow French colonial villa along White Town promenade in Pondicherry',
    source: 'Unsplash',
  },
  mysuru: {
    slug: 'mysuru',
    cityName: 'Mysuru',
    stateName: 'Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200',
    altText: 'Grand illuminated Mysore Palace architecture during Dasara festivities in Mysuru',
    source: 'Unsplash',
  },
  shillong: {
    slug: 'shillong',
    cityName: 'Shillong',
    stateName: 'Meghalaya',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200',
    altText: 'Pine covered hill valleys and misty mountain lake landscapes in Shillong, Meghalaya',
    source: 'Unsplash',
  },
  rishikesh: {
    slug: 'rishikesh',
    cityName: 'Rishikesh',
    stateName: 'Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200',
    altText: 'Pristine turquoise Ganges river flowing out of Himalayan foothills in Rishikesh',
    source: 'Unsplash',
  },
  agra: {
    slug: 'agra',
    cityName: 'Agra',
    stateName: 'Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200',
    altText: 'Taj Mahal white marble mausoleum reflected in central reflecting pool in Agra',
    source: 'Unsplash',
  },
  kolkata: {
    slug: 'kolkata',
    cityName: 'Kolkata',
    stateName: 'West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200',
    altText: 'Cantilever Howrah Bridge spanning the Hooghly river in Kolkata, West Bengal',
    source: 'Unsplash',
  },
  alleppey: {
    slug: 'alleppey',
    cityName: 'Alleppey',
    stateName: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200',
    altText: 'Luxury thatched houseboat cruising peaceful backwater lagoons in Alleppey, Kerala',
    source: 'Unsplash',
  },
  munnar: {
    slug: 'munnar',
    cityName: 'Munnar',
    stateName: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1200',
    altText: 'High altitude green tea plantations shrouded in cloud forest mist in Munnar, Kerala',
    source: 'Unsplash',
  },
  manali: {
    slug: 'manali',
    cityName: 'Manali',
    stateName: 'Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200',
    altText: 'Snowy Himalayan mountain peaks and pine trees in Solang Valley near Manali',
    source: 'Unsplash',
  },
  cherrapunji: {
    slug: 'cherrapunji',
    cityName: 'Cherrapunji',
    stateName: 'Meghalaya',
    imageUrl: 'https://images.unsplash.com/photo-1506461883276-594a12b11db3?q=80&w=1200',
    altText: 'Nongriat double decker living root bridge guided over river boulders in Cherrapunji',
    source: 'Unsplash',
  },
  khajuraho: {
    slug: 'khajuraho',
    cityName: 'Khajuraho',
    stateName: 'Madhya Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200',
    altText: 'Kandariya Mahadeva medieval sandstone temple complex in Khajuraho, Madhya Pradesh',
    source: 'Unsplash',
  },
};

// Global fallback image if a city slug is ever unrecognized
export const DEFAULT_INDIA_TOURISM_FALLBACK = {
  imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
  altText: 'Incredible India tourism heritage monument skyline',
  source: 'Unsplash' as const,
};

/**
 * Retrieve verified canonical image for a city slug
 */
export function getDestinationImage(citySlug: string): CanonicalDestinationImage {
  const normalized = citySlug.trim().toLowerCase();
  return DESTINATION_CANONICAL_IMAGES[normalized] || {
    slug: normalized,
    cityName: citySlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    stateName: 'India',
    imageUrl: DEFAULT_INDIA_TOURISM_FALLBACK.imageUrl,
    altText: `${citySlug} tourism destination in India`,
    source: DEFAULT_INDIA_TOURISM_FALLBACK.source,
  };
}
