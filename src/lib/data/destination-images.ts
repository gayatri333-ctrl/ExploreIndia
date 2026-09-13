import { PEXELS_CANONICAL_DESTINATION_MAP, PEXELS_DEFAULT_FALLBACK, getCanonicalDestinationImage, PexelsDestinationPhoto } from '@/lib/pexels';

export interface CanonicalDestinationImage {
  slug: string;
  cityName: string;
  stateName: string;
  imageUrl: string;
  altText: string;
  source: 'Pexels' | 'Unsplash' | 'Wikimedia Commons' | 'Fallback';
  photographerCredit?: string;
  photographerUrl?: string;
  pexelsUrl?: string;
}

/**
 * Re-exports Pexels Canonical Destination Map as the primary image mapping across ExploreIndia.
 */
export const DESTINATION_CANONICAL_IMAGES: Record<string, CanonicalDestinationImage> = Object.entries(
  PEXELS_CANONICAL_DESTINATION_MAP
).reduce((acc, [slug, photo]) => {
  acc[slug] = {
    slug: photo.slug,
    cityName: photo.destinationName,
    stateName: photo.stateName || 'India',
    imageUrl: photo.imageUrl,
    altText: `${photo.destinationName} landscape in ${photo.stateName || 'India'} (Photo by ${photo.photographerName} on Pexels)`,
    source: 'Pexels',
    photographerCredit: photo.photographerName,
    photographerUrl: photo.photographerUrl,
    pexelsUrl: photo.pexelsUrl,
  };
  return acc;
}, {} as Record<string, CanonicalDestinationImage>);

export const DEFAULT_INDIA_TOURISM_FALLBACK: CanonicalDestinationImage = {
  slug: PEXELS_DEFAULT_FALLBACK.slug,
  cityName: PEXELS_DEFAULT_FALLBACK.destinationName,
  stateName: 'India',
  imageUrl: PEXELS_DEFAULT_FALLBACK.imageUrl,
  altText: 'ExploreIndia tourism landscape view',
  source: 'Pexels',
  photographerCredit: PEXELS_DEFAULT_FALLBACK.photographerName,
  photographerUrl: PEXELS_DEFAULT_FALLBACK.photographerUrl,
  pexelsUrl: PEXELS_DEFAULT_FALLBACK.pexelsUrl,
};

/**
 * Retrieve verified canonical Pexels image for a city slug
 */
export function getDestinationImage(citySlug: string): CanonicalDestinationImage {
  const normalized = (citySlug || '').trim().toLowerCase();
  const photo = getCanonicalDestinationImage(normalized);

  return {
    slug: photo.slug,
    cityName: photo.destinationName,
    stateName: photo.stateName || 'India',
    imageUrl: photo.imageUrl,
    altText: `${photo.destinationName} landscape in ${photo.stateName || 'India'} (Photo by ${photo.photographerName} on Pexels)`,
    source: 'Pexels',
    photographerCredit: photo.photographerName,
    photographerUrl: photo.photographerUrl,
    pexelsUrl: photo.pexelsUrl,
  };
}

