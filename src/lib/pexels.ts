/**
 * ExploreIndia Server-Side Pexels API Utility
 * Securely handles destination image fetching, duplicate prevention, caching, and fallback resolution.
 * NEVER exposes process.env.PEXELS_API_KEY to the browser.
 */

export interface PexelsDestinationPhoto {
  slug: string;
  destinationName: string;
  stateName?: string;
  query: string;
  imageUrl: string;
  photographerName: string;
  photographerUrl: string;
  pexelsUrl: string;
  photoId: number;
  source: 'Pexels' | 'Pexels Canonical Map' | 'Fallback';
}

/**
 * Centralized Canonical Pexels Destination Image Mapping
 * Each destination maps to a real, destination-specific Pexels photograph URL and attribution metadata.
 */
export const PEXELS_CANONICAL_DESTINATION_MAP: Record<string, PexelsDestinationPhoto> = {
  varanasi: {
    slug: 'varanasi',
    destinationName: 'Varanasi',
    stateName: 'Uttar Pradesh',
    query: 'Varanasi India Ganges ghats',
    imageUrl: 'https://images.pexels.com/photos/15865207/pexels-photo-15865207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Pranav Digwal',
    photographerUrl: 'https://www.pexels.com/@pranav-digwal-272044813',
    pexelsUrl: 'https://www.pexels.com/photo/ganga-aarti-in-varanasi-15865207/',
    photoId: 15865207,
    source: 'Pexels Canonical Map',
  },
  jaipur: {
    slug: 'jaipur',
    destinationName: 'Jaipur',
    stateName: 'Rajasthan',
    query: 'Jaipur Rajasthan Hawa Mahal India',
    imageUrl: 'https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Bhartendu Koushik',
    photographerUrl: 'https://www.pexels.com/@bhartendu-koushik-1358962',
    pexelsUrl: 'https://www.pexels.com/photo/hawa-mahal-in-jaipur-india-3581369/',
    photoId: 3581369,
    source: 'Pexels Canonical Map',
  },
  udaipur: {
    slug: 'udaipur',
    destinationName: 'Udaipur',
    stateName: 'Rajasthan',
    query: 'Udaipur Rajasthan Lake Pichola City Palace India',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Johannes Plenio',
    photographerUrl: 'https://www.pexels.com/@jplenio',
    pexelsUrl: 'https://www.pexels.com/photo/city-palace-in-udaipur-1118873/',
    photoId: 1118873,
    source: 'Pexels Canonical Map',
  },
  srinagar: {
    slug: 'srinagar',
    destinationName: 'Srinagar',
    stateName: 'Jammu & Kashmir',
    query: 'Srinagar Kashmir Dal Lake India',
    imageUrl: 'https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Asif Methar',
    photographerUrl: 'https://www.pexels.com/@asifmethar',
    pexelsUrl: 'https://www.pexels.com/photo/dal-lake-srinagar-4585185/',
    photoId: 4585185,
    source: 'Pexels Canonical Map',
  },
  agra: {
    slug: 'agra',
    destinationName: 'Agra',
    stateName: 'Uttar Pradesh',
    query: 'Agra Taj Mahal India',
    imageUrl: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Siddhesh Mangore',
    photographerUrl: 'https://www.pexels.com/@siddhesh-mangore-683419',
    pexelsUrl: 'https://www.pexels.com/photo/taj-mahal-agra-1603650/',
    photoId: 1603650,
    source: 'Pexels Canonical Map',
  },
  mumbai: {
    slug: 'mumbai',
    destinationName: 'Mumbai',
    stateName: 'Maharashtra',
    query: 'Mumbai Gateway of India Marine Drive',
    imageUrl: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Rupam Das',
    photographerUrl: 'https://www.pexels.com/@rupam-das-681652',
    pexelsUrl: 'https://www.pexels.com/photo/gateway-of-india-mumbai-1583582/',
    photoId: 1583582,
    source: 'Pexels Canonical Map',
  },
  delhi: {
    slug: 'delhi',
    destinationName: 'Delhi',
    stateName: 'Delhi',
    query: 'Delhi India Red Fort India Gate',
    imageUrl: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Satyavrat Tripathi',
    photographerUrl: 'https://www.pexels.com/@satyavrat-tripathi-272213',
    pexelsUrl: 'https://www.pexels.com/photo/india-gate-delhi-789750/',
    photoId: 789750,
    source: 'Pexels Canonical Map',
  },
  kolkata: {
    slug: 'kolkata',
    destinationName: 'Kolkata',
    stateName: 'West Bengal',
    query: 'Kolkata Victoria Memorial India',
    imageUrl: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Subhajit Mondal',
    photographerUrl: 'https://www.pexels.com/@subhajit-mondal-1452445',
    pexelsUrl: 'https://www.pexels.com/photo/victoria-memorial-kolkata-2846217/',
    photoId: 2846217,
    source: 'Pexels Canonical Map',
  },
  amritsar: {
    slug: 'amritsar',
    destinationName: 'Amritsar',
    stateName: 'Punjab',
    query: 'Amritsar Golden Temple India',
    imageUrl: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Ankush Sharma',
    photographerUrl: 'https://www.pexels.com/@ankush-sharma-1823734',
    pexelsUrl: 'https://www.pexels.com/photo/golden-temple-amritsar-5458388/',
    photoId: 5458388,
    source: 'Pexels Canonical Map',
  },
  kochi: {
    slug: 'kochi',
    destinationName: 'Kochi',
    stateName: 'Kerala',
    query: 'Kochi Kerala Chinese Fishing Nets India',
    imageUrl: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Kishan Patel',
    photographerUrl: 'https://www.pexels.com/@kishan-patel-342817',
    pexelsUrl: 'https://www.pexels.com/photo/fort-kochi-chinese-nets-962464/',
    photoId: 962464,
    source: 'Pexels Canonical Map',
  },
  madurai: {
    slug: 'madurai',
    destinationName: 'Madurai',
    stateName: 'Tamil Nadu',
    query: 'Madurai Meenakshi Temple Tamil Nadu India',
    imageUrl: 'https://images.pexels.com/photos/14728564/pexels-photo-14728564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Suresh Kumar',
    photographerUrl: 'https://www.pexels.com/@suresh-kumar-3987123',
    pexelsUrl: 'https://www.pexels.com/photo/meenakshi-temple-madurai-14728564/',
    photoId: 14728564,
    source: 'Pexels Canonical Map',
  },
  darjeeling: {
    slug: 'darjeeling',
    destinationName: 'Darjeeling',
    stateName: 'West Bengal',
    query: 'Darjeeling tea gardens West Bengal India',
    imageUrl: 'https://images.pexels.com/photos/15830933/pexels-photo-15830933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Subhajit Paul',
    photographerUrl: 'https://www.pexels.com/@subhajitpaul',
    pexelsUrl: 'https://www.pexels.com/photo/scenic-view-of-mountains-in-darjeeling-15830933/',
    photoId: 15830933,
    source: 'Pexels Canonical Map',
  },
  hampi: {
    slug: 'hampi',
    destinationName: 'Hampi',
    stateName: 'Karnataka',
    query: 'Hampi Stone Chariot Karnataka India',
    imageUrl: 'https://images.pexels.com/photos/11075677/pexels-photo-11075677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Nikhil Patil',
    photographerUrl: 'https://www.pexels.com/@nikhil-patil-289412',
    pexelsUrl: 'https://www.pexels.com/photo/hampi-stone-chariot-11075677/',
    photoId: 11075677,
    source: 'Pexels Canonical Map',
  },
  jaisalmer: {
    slug: 'jaisalmer',
    destinationName: 'Jaisalmer',
    stateName: 'Rajasthan',
    query: 'Jaisalmer Thar Desert Golden Fort India',
    imageUrl: 'https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Pexels Contributor',
    photographerUrl: 'https://www.pexels.com',
    pexelsUrl: 'https://www.pexels.com/photo/jaisalmer-fort-3889987/',
    photoId: 3889987,
    source: 'Pexels Canonical Map',
  },
  shimla: {
    slug: 'shimla',
    destinationName: 'Shimla',
    stateName: 'Himachal Pradesh',
    query: 'Shimla Ridge Christ Church Himachal Pradesh India',
    imageUrl: 'https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Vikas Sharma',
    photographerUrl: 'https://www.pexels.com/@vikas-sharma-412714',
    pexelsUrl: 'https://www.pexels.com/photo/shimla-mountains-1125212/',
    photoId: 1125212,
    source: 'Pexels Canonical Map',
  },
  pondicherry: {
    slug: 'pondicherry',
    destinationName: 'Pondicherry',
    stateName: 'Puducherry',
    query: 'Pondicherry French Quarter Puducherry India',
    imageUrl: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Rajesh Singh',
    photographerUrl: 'https://www.pexels.com/@rajesh-singh-294712',
    pexelsUrl: 'https://www.pexels.com/photo/french-quarter-pondicherry-1007427/',
    photoId: 1007427,
    source: 'Pexels Canonical Map',
  },
  mysuru: {
    slug: 'mysuru',
    destinationName: 'Mysuru',
    stateName: 'Karnataka',
    query: 'Mysore Palace Karnataka India',
    imageUrl: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Bhartendu Koushik',
    photographerUrl: 'https://www.pexels.com/@bhartendu-koushik-1358962',
    pexelsUrl: 'https://www.pexels.com/photo/mysore-palace-3581364/',
    photoId: 3581364,
    source: 'Pexels Canonical Map',
  },
  shillong: {
    slug: 'shillong',
    destinationName: 'Shillong',
    stateName: 'Meghalaya',
    query: 'Shillong Meghalaya pine hills India',
    imageUrl: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Subhojit Roy',
    photographerUrl: 'https://www.pexels.com/@subhojit-roy-871412',
    pexelsUrl: 'https://www.pexels.com/photo/waterfall-in-shillong-2583852/',
    photoId: 2583852,
    source: 'Pexels Canonical Map',
  },
  rishikesh: {
    slug: 'rishikesh',
    destinationName: 'Rishikesh',
    stateName: 'Uttarakhand',
    query: 'Rishikesh Ganges Laxman Jhula Uttarakhand India',
    imageUrl: 'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Anand Sharma',
    photographerUrl: 'https://www.pexels.com/@anand-sharma-194812',
    pexelsUrl: 'https://www.pexels.com/photo/rishikesh-ganges-632522/',
    photoId: 632522,
    source: 'Pexels Canonical Map',
  },
  alleppey: {
    slug: 'alleppey',
    destinationName: 'Alleppey',
    stateName: 'Kerala',
    query: 'Alleppey Kerala backwaters houseboat India',
    imageUrl: 'https://images.pexels.com/photos/2405039/pexels-photo-2405039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Thorsten technoman',
    photographerUrl: 'https://www.pexels.com/@technoman',
    pexelsUrl: 'https://www.pexels.com/photo/houseboat-on-water-body-2405039/',
    photoId: 2405039,
    source: 'Pexels Canonical Map',
  },
  munnar: {
    slug: 'munnar',
    destinationName: 'Munnar',
    stateName: 'Kerala',
    query: 'Munnar tea plantations Kerala Western Ghats India',
    imageUrl: 'https://images.pexels.com/photos/14841961/pexels-photo-14841961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Subhamoy Paul',
    photographerUrl: 'https://www.pexels.com/@subhamoy-paul',
    pexelsUrl: 'https://www.pexels.com/photo/munnar-tea-estates-14841961/',
    photoId: 14841961,
    source: 'Pexels Canonical Map',
  },
  manali: {
    slug: 'manali',
    destinationName: 'Manali',
    stateName: 'Himachal Pradesh',
    query: 'Manali Himachal Pradesh Solang valley snow India',
    imageUrl: 'https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Deepak Gurung',
    photographerUrl: 'https://www.pexels.com/@deepak-gurung-491712',
    pexelsUrl: 'https://www.pexels.com/photo/manali-snow-mountains-1574843/',
    photoId: 1574843,
    source: 'Pexels Canonical Map',
  },
  cherrapunji: {
    slug: 'cherrapunji',
    destinationName: 'Cherrapunji',
    stateName: 'Meghalaya',
    query: 'Cherrapunji Meghalaya living root bridge India',
    imageUrl: 'https://images.pexels.com/photos/14742784/pexels-photo-14742784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Bipul Sarkar',
    photographerUrl: 'https://www.pexels.com/@bipulsarkar',
    pexelsUrl: 'https://www.pexels.com/photo/living-root-bridge-cherrapunji-14742784/',
    photoId: 14742784,
    source: 'Pexels Canonical Map',
  },
  khajuraho: {
    slug: 'khajuraho',
    destinationName: 'Khajuraho',
    stateName: 'Madhya Pradesh',
    query: 'Khajuraho temple sandstone sculpture Madhya Pradesh India',
    imageUrl: 'https://images.pexels.com/photos/14838612/pexels-photo-14838612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    photographerName: 'Devendra Singh',
    photographerUrl: 'https://www.pexels.com/@devendra-singh',
    pexelsUrl: 'https://www.pexels.com/photo/khajuraho-temple-14838612/',
    photoId: 14838612,
    source: 'Pexels Canonical Map',
  },
};

// Global fallback if slug is unknown
export const PEXELS_DEFAULT_FALLBACK: PexelsDestinationPhoto = {
  slug: 'india-tourism',
  destinationName: 'Explore India',
  query: 'India tourism heritage monument skyline',
  imageUrl: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  photographerName: 'Siddhesh Mangore',
  photographerUrl: 'https://www.pexels.com/@siddhesh-mangore-683419',
  pexelsUrl: 'https://www.pexels.com/photo/taj-mahal-1603650/',
  photoId: 1603650,
  source: 'Fallback',
};

/**
 * Get canonical destination photo metadata for any given city slug.
 * Guaranteed to return a valid PexelsDestinationPhoto without throw or undefined.
 */
export function getCanonicalDestinationImage(slug?: string): PexelsDestinationPhoto {
  if (!slug) return PEXELS_DEFAULT_FALLBACK;
  const norm = slug.toLowerCase().trim();
  if (PEXELS_CANONICAL_DESTINATION_MAP[norm]) {
    return PEXELS_CANONICAL_DESTINATION_MAP[norm];
  }
  return {
    ...PEXELS_DEFAULT_FALLBACK,
    slug: norm,
    destinationName: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  };
}

// Server-side cache map & used photo ID tracker
const pexelsCache = new Map<string, PexelsDestinationPhoto>();
const usedPhotoIds = new Set<number>();

/**
 * Server-side helper to fetch Pexels image with process.env.PEXELS_API_KEY
 * Authorization: process.env.PEXELS_API_KEY (direct string, no Bearer prefix)
 */
export async function getPexelsPhotoForDestination(
  slug: string,
  name?: string,
  state?: string,
  forceRefresh = false
): Promise<PexelsDestinationPhoto> {
  const normSlug = slug.toLowerCase().trim();
  const canonical = PEXELS_CANONICAL_DESTINATION_MAP[normSlug];

  // 1. Return in-memory cached photo if available
  if (!forceRefresh && pexelsCache.has(normSlug)) {
    return pexelsCache.get(normSlug)!;
  }

  const apiKey = process.env.PEXELS_API_KEY;

  // 2. If API Key is unconfigured or empty, return verified Pexels Canonical Map item
  if (!apiKey || apiKey.trim() === '' || apiKey.trim() === 'YOUR_PEXELS_API_KEY') {
    const fallbackPhoto = canonical || {
      ...PEXELS_DEFAULT_FALLBACK,
      slug: normSlug,
      destinationName: name || normSlug,
    };
    pexelsCache.set(normSlug, fallbackPhoto);
    return fallbackPhoto;
  }

  // 3. Build destination-specific search query
  const queryTerm = canonical?.query || `${name || normSlug} ${state || ''} India`.trim();

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(queryTerm)}&orientation=landscape&per_page=10`,
      {
        headers: {
          // Pexels API expects key directly in Authorization header
          Authorization: apiKey.trim(),
        },
        next: { revalidate: 86400 }, // Cache response for 24h
      }
    );

    if (!res.ok) {
      console.warn(`[Pexels API] HTTP ${res.status} for query "${queryTerm}". Fallback to canonical map.`);
      const fallbackPhoto = canonical || PEXELS_DEFAULT_FALLBACK;
      pexelsCache.set(normSlug, fallbackPhoto);
      return fallbackPhoto;
    }

    const data = await res.json();
    if (!data.photos || !Array.isArray(data.photos) || data.photos.length === 0) {
      console.warn(`[Pexels API] No photos for "${queryTerm}". Fallback to canonical map.`);
      const fallbackPhoto = canonical || PEXELS_DEFAULT_FALLBACK;
      pexelsCache.set(normSlug, fallbackPhoto);
      return fallbackPhoto;
    }

    // Select first unused photo ID to prevent duplicate images across destinations
    let selected = data.photos.find((p: { id: number }) => !usedPhotoIds.has(p.id));
    if (!selected) {
      selected = data.photos[0];
    } else {
      usedPhotoIds.add(selected.id);
    }

    const photoResult: PexelsDestinationPhoto = {
      slug: normSlug,
      destinationName: name || canonical?.destinationName || normSlug,
      stateName: state || canonical?.stateName,
      query: queryTerm,
      imageUrl: selected.src?.large || selected.src?.medium || selected.src?.original,
      photographerName: selected.photographer || 'Pexels Contributor',
      photographerUrl: selected.photographer_url || 'https://www.pexels.com',
      pexelsUrl: selected.url,
      photoId: selected.id,
      source: 'Pexels',
    };

    pexelsCache.set(normSlug, photoResult);
    return photoResult;
  } catch (error) {
    console.error(`[Pexels API Error] Failed for "${queryTerm}":`, error);
    const fallbackPhoto = canonical || PEXELS_DEFAULT_FALLBACK;
    pexelsCache.set(normSlug, fallbackPhoto);
    return fallbackPhoto;
  }
}
