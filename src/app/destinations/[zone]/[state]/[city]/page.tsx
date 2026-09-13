import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DestinationCityClient, DetailedCityInfo } from '@/components/destinations/DestinationCityClient';
import { ZONES_DATA } from '@/lib/data/incredible-india-data';
import { getCityById, getAttractionsByCity, getFestivalsByCity, getStateById } from '@/data/store';
import { CITIES_DATA, ATTRACTIONS_DATA, FESTIVALS_DATA } from '@/data/dataset';

interface CityPageProps {
  params: {
    zone: string;
    state: string;
    city: string;
  };
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const zone = ZONES_DATA.find((z) => z.zoneSlug.toLowerCase() === params.zone.toLowerCase());
  const state = zone?.states.find((s) => s.stateSlug.toLowerCase() === params.state.toLowerCase());
  const city = state?.cities.find((c) => c.citySlug.toLowerCase() === params.city.toLowerCase());

  const storeCity = getCityById(params.city);

  const cityName = city ? city.cityName : storeCity ? storeCity.name : params.city.replace(/-/g, ' ').toUpperCase();
  const stateName = state ? state.stateName : params.state.replace(/-/g, ' ').toUpperCase();

  const title = `${cityName}, ${stateName} Travel Guide & Attractions | ExploreIndia`;
  const description = city?.tagline || storeCity?.overview || `Explore ${cityName} in ${stateName}, featuring top heritage monuments, climate facts, and cultural festivals.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [city?.image || storeCity?.image || 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200'],
    },
  };
}

export default function IncredibleIndiaCityPage({ params }: CityPageProps) {
  // Resolve city data from dataset / store
  const storeCity = getCityById(params.city);
  const storeState = getStateById(params.state) || (storeCity ? getStateById(storeCity.stateId) : undefined);
  const cityAttractions = getAttractionsByCity(params.city);
  const cityFestivals = getFestivalsByCity(params.city);

  // Fallback to Incredible India mock dataset if not matched in core dataset
  const zoneObj = ZONES_DATA.find((z) => z.zoneSlug.toLowerCase() === params.zone.toLowerCase());
  const stateObj = zoneObj?.states.find((s) => s.stateSlug.toLowerCase() === params.state.toLowerCase());
  const incCityObj = stateObj?.cities.find((c) => c.citySlug.toLowerCase() === params.city.toLowerCase());

  const cityName = storeCity?.name || incCityObj?.cityName || params.city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const stateName = storeState?.name || incCityObj?.stateName || params.state.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const zoneName = storeState?.zone || incCityObj?.zoneName || params.zone.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  const heroImage = storeCity?.image || incCityObj?.image || 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200';
  const tagline = storeCity?.tagline || incCityObj?.tagline || 'Historical Heritage & Cultural Destination';
  const overview = storeCity?.overview || incCityObj?.tagline || 'Discover royal fortresses, ancient temples, vibrant street bazaars, and traditional hospitality.';
  const bestTimeToVisit = storeCity?.bestTimeToVisit || incCityObj?.bestSeason || 'October to March';

  const facts = storeCity?.quickFacts && storeCity.quickFacts.length > 0
    ? storeCity.quickFacts
    : incCityObj?.facts && incCityObj.facts.length > 0
    ? incCityObj.facts
    : [
        `${cityName} features rich historic monuments and ancient heritage trails spanning centuries of regional culture.`,
        `Vibrant local markets, traditional handcrafts, and authentic regional culinary delicacies.`,
      ];

  // Default attractions if none found
  const attractions = cityAttractions.length > 0
    ? cityAttractions
    : [
        {
          id: `${params.city}-fort-landmark`,
          cityId: params.city,
          name: `${cityName} Heritage Fort & Palace`,
          category: 'Heritage' as const,
          images: [heroImage],
          didYouKnowFacts: [
            `Built with ancient regional sandstone architecture overlooking ${cityName} valley.`,
            `Hosts royal heritage archives and intricate carved stone balconies.`,
          ],
          historicalSignificance: `Iconic royal fortress founded during medieval dynasty rule in ${stateName}.`,
          mapCoords: { lat: 26.9124, lng: 75.7873 },
        },
        {
          id: `${params.city}-temple-spiritual`,
          cityId: params.city,
          name: `${cityName} Sacred Temple Complex`,
          category: 'Spiritual' as const,
          images: ['https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800'],
          didYouKnowFacts: [
            `Famous for daily evening aarti ceremonies along riverfront ghats.`,
            `Attracts thousands of pilgrims during annual cultural festivals.`,
          ],
          historicalSignificance: `Ancient spiritual temple dedicated to regional patron deities.`,
          mapCoords: { lat: 26.9239, lng: 75.8267 },
        },
      ];

  // Default festivals if none found
  const festivals = cityFestivals.length > 0
    ? cityFestivals
    : [
        {
          id: `durga-puja-${params.city}`,
          name: `${cityName} Heritage & Cultural Carnival`,
          cityId: params.city,
          dates: 'October 15 - October 24, 2026',
          category: 'Cultural Festival',
          description: `Vibrant street music, folk dance performances, illuminated heritage buildings, and regional food bazaars.`,
          image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
        },
      ];

  const cityData: DetailedCityInfo = {
    cityName,
    citySlug: params.city,
    stateName,
    stateSlug: params.state,
    zoneName,
    zoneSlug: params.zone,
    tagline,
    heroImage,
    overview,
    bestTimeToVisit,
    idealDuration: '2 - 4 Days',
    localCuisine: ['Dal Baati Churma', 'Ker Sangri', 'Laal Maas', 'Ghevar & Malpua'],
    facts,
    attractions,
    festivals,
  };

  return <DestinationCityClient city={cityData} />;
}
