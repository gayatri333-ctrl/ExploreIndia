import { getDestinationImage, DEFAULT_INDIA_TOURISM_FALLBACK } from '@/lib/data/destination-images';

export interface DestinationImageResult {
  slug: string;
  destinationName: string;
  imageUrl: string;
  altText: string;
  photographerName?: string;
  photographerUrl?: string;
  pexelsUrl?: string;
  photoId?: number;
  source: 'Pexels' | 'Canonical Fallback' | 'Default Fallback';
  cachedAt?: string;
}

export interface FetchDestinationParams {
  slug: string;
  name?: string;
  state?: string;
  category?: string;
  forceRefresh?: boolean;
}

// In-memory Server Cache for Pexels responses & assigned Photo IDs
const destinationCacheMap = new Map<string, DestinationImageResult>();
const usedPexelsPhotoIds = new Set<number>();

/**
 * Constructs a destination-specific search query for Pexels API
 */
export function buildPexelsQuery(name: string, state?: string, category?: string): string {
  const cleanName = name.replace(/[-_]/g, ' ').trim();
  const cleanState = state ? state.replace(/[-_]/g, ' ').trim() : '';

  // Avoid redundant repetition in query string
  let query = cleanName;
  if (cleanState && !cleanName.toLowerCase().includes(cleanState.toLowerCase())) {
    query += ` ${cleanState}`;
  }
  if (!query.toLowerCase().includes('india')) {
    query += ' India';
  }

  return query;
}

/**
 * Server-side method to fetch a destination photograph from Pexels API with full caching and fallback chain.
 * NEVER exposes PEXELS_API_KEY to client.
 */
export async function fetchPexelsDestinationImage({
  slug,
  name,
  state,
  category,
  forceRefresh = false,
}: FetchDestinationParams): Promise<DestinationImageResult> {
  const normalizedSlug = slug.toLowerCase().trim();
  const destName = name || normalizedSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  // 1. Check Server In-Memory Cache (unless forceRefresh is true)
  if (!forceRefresh && destinationCacheMap.has(normalizedSlug)) {
    return destinationCacheMap.get(normalizedSlug)!;
  }

  // Fallback candidate from ExploreIndia canonical image repository
  const canonicalFallback = getDestinationImage(normalizedSlug);

  const apiKey = process.env.PEXELS_API_KEY;

  // 2. If API Key is missing or unconfigured, return canonical fallback gracefully
  if (!apiKey || apiKey.trim() === '' || apiKey.trim() === 'YOUR_PEXELS_API_KEY') {
    const result: DestinationImageResult = {
      slug: normalizedSlug,
      destinationName: destName,
      imageUrl: canonicalFallback.imageUrl,
      altText: canonicalFallback.altText,
      source: 'Canonical Fallback',
      cachedAt: new Date().toISOString(),
    };
    destinationCacheMap.set(normalizedSlug, result);
    return result;
  }

  // Construct specific search query
  const query = buildPexelsQuery(destName, state, category);

  try {
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=15`;
    
    const response = await fetch(pexelsUrl, {
      headers: {
        Authorization: apiKey.trim(),
      },
      next: { revalidate: 86400 }, // Cache Pexels HTTP response for 24 hours
    });

    if (!response.ok) {
      console.warn(`[Pexels API] HTTP ${response.status} returned for query "${query}". Using canonical fallback.`);
      const result: DestinationImageResult = {
        slug: normalizedSlug,
        destinationName: destName,
        imageUrl: canonicalFallback.imageUrl,
        altText: canonicalFallback.altText,
        source: 'Canonical Fallback',
        cachedAt: new Date().toISOString(),
      };
      destinationCacheMap.set(normalizedSlug, result);
      return result;
    }

    const data = await response.json();

    if (!data.photos || !Array.isArray(data.photos) || data.photos.length === 0) {
      console.warn(`[Pexels API] No photos found for query "${query}". Using canonical fallback.`);
      const result: DestinationImageResult = {
        slug: normalizedSlug,
        destinationName: destName,
        imageUrl: canonicalFallback.imageUrl,
        altText: canonicalFallback.altText,
        source: 'Canonical Fallback',
        cachedAt: new Date().toISOString(),
      };
      destinationCacheMap.set(normalizedSlug, result);
      return result;
    }

    // 3. Duplicate Prevention & Best Image Selection
    // Select first photo that hasn't been used yet for another destination
    let selectedPhoto = data.photos.find((p: { id: number }) => !usedPexelsPhotoIds.has(p.id));
    
    // If all returned photos were used, select the first photo as fallback
    if (!selectedPhoto) {
      selectedPhoto = data.photos[0];
    } else {
      usedPexelsPhotoIds.add(selectedPhoto.id);
    }

    // Prefer medium/large size for optimal performance without downloading full resolution
    const photoUrl = selectedPhoto.src?.large || selectedPhoto.src?.medium || selectedPhoto.src?.original || canonicalFallback.imageUrl;

    const result: DestinationImageResult = {
      slug: normalizedSlug,
      destinationName: destName,
      imageUrl: photoUrl,
      altText: `${destName} tourism landscape photograph in ${state || 'India'}`,
      photographerName: selectedPhoto.photographer || 'Pexels Contributor',
      photographerUrl: selectedPhoto.photographer_url || 'https://www.pexels.com',
      pexelsUrl: selectedPhoto.url,
      photoId: selectedPhoto.id,
      source: 'Pexels',
      cachedAt: new Date().toISOString(),
    };

    destinationCacheMap.set(normalizedSlug, result);
    return result;

  } catch (error) {
    console.error(`[Pexels API Error] Failed to fetch image for "${query}":`, error);
    const result: DestinationImageResult = {
      slug: normalizedSlug,
      destinationName: destName,
      imageUrl: canonicalFallback.imageUrl,
      altText: canonicalFallback.altText,
      source: 'Canonical Fallback',
      cachedAt: new Date().toISOString(),
    };
    destinationCacheMap.set(normalizedSlug, result);
    return result;
  }
}

/**
 * Utility for development/admin auditing of cached destination images and duplicate IDs
 */
export function getDestinationCacheAuditInfo() {
  return {
    totalCached: destinationCacheMap.size,
    usedPhotoIdsCount: usedPexelsPhotoIds.size,
    entries: Array.from(destinationCacheMap.entries()).map(([slug, data]) => ({
      slug,
      destinationName: data.destinationName,
      photoId: data.photoId,
      source: data.source,
      photographer: data.photographerName,
    })),
  };
}
