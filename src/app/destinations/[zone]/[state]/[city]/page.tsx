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
  const overview = storeCity?.overview || incCityObj?.tagline || `Discover the ancient history, majestic architecture, sacred spiritual traditions, and vibrant culture of ${cityName}.`;
  const bestTimeToVisit = storeCity?.bestTimeToVisit || incCityObj?.bestSeason || 'October to March';

  const facts = storeCity?.quickFacts && storeCity.quickFacts.length > 0
    ? storeCity.quickFacts
    : incCityObj?.facts && incCityObj.facts.length > 0
    ? incCityObj.facts
    : [
        `${cityName} features rich historic monuments and ancient heritage trails spanning centuries of regional culture.`,
        `Vibrant local markets, traditional handcrafts, and authentic regional culinary delicacies.`,
      ];

  // Authentic local cuisine resolution
  const localCuisine = storeCity?.localCuisine && storeCity.localCuisine.length > 0
    ? storeCity.localCuisine
    : params.city.toLowerCase() === 'varanasi'
    ? ['Kachori Sabzi', 'Banarasi Tamatar Chaat', 'Banarasi Paan', 'Malaiyyo', 'Banarasi Lassi', 'Thandai']
    : params.city.toLowerCase() === 'jaipur' || params.city.toLowerCase() === 'udaipur' || params.city.toLowerCase() === 'jaisalmer' || stateName.toLowerCase().includes('rajasthan')
    ? ['Dal Baati Churma', 'Ker Sangri', 'Laal Maas', 'Ghevar & Malpua', 'Pyaz Kachori']
    : params.city.toLowerCase() === 'srinagar' || stateName.toLowerCase().includes('kashmir')
    ? ['Kashmiri Wazwan', 'Rogan Josh', 'Dum Aloo', 'Modur Pulao', 'Kahwa Tea']
    : params.city.toLowerCase() === 'kochi' || params.city.toLowerCase() === 'alleppey' || params.city.toLowerCase() === 'munnar' || stateName.toLowerCase().includes('kerala')
    ? ['Kerala Fish Curry', 'Appam with Stew', 'Karimeen Pollichathu', 'Malabar Parotta', 'Puttu & Kadala']
    : params.city.toLowerCase() === 'kolkata' || params.city.toLowerCase() === 'darjeeling' || stateName.toLowerCase().includes('bengal')
    ? ['Kolkata Kathi Roll', 'Rasgulla', 'Kosha Mangsho', 'Mishti Doi', 'Luchi Alur Dom']
    : params.city.toLowerCase() === 'agra'
    ? ['Agra Petha', 'Bedai & Jalebi', 'Mughlai Biryani', 'Shahi Paneer', 'Mughlai Paratha']
    : params.city.toLowerCase() === 'amritsar'
    ? ['Amritsari Kulcha', 'Makki Di Rotti & Sarson Da Saag', 'Amritsari Fish', 'Lassi', 'Pinni']
    : ['Authentic Regional Thali', 'Local Handcrafted Street Snacks', 'Traditional Sweets', 'Artisanal Herbal Teas'];

  const idealDuration = storeCity?.idealDuration || '2 - 3 Days';

  // Default attractions if none found in dataset
  const defaultCityAttractionsMap: Record<string, Array<{ name: string; category: 'Heritage' | 'Spiritual' | 'Nature' | 'Adventure'; image: string; fact: string }>> = {
    varanasi: [
      { name: 'Kashi Vishwanath Temple', category: 'Spiritual', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800', fact: 'One of the twelve sacred Jyotirlinga shrines dedicated to Lord Shiva, rebuilt by Ahilyabai Holkar in 1780.' },
      { name: 'Dashashwamedh Ghat & Evening Aarti', category: 'Spiritual', image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800', fact: 'The most vibrant riverfront ghat in Varanasi, world-famous for its synchronized evening brass lamp worship ritual.' },
      { name: 'Sarnath Ancient Buddhist Ruins', category: 'Heritage', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800', fact: 'The sacred deer park where Gautama Buddha delivered his first sermon after attaining enlightenment.' },
      { name: 'Assi Ghat & Subah-e-Banaras', category: 'Spiritual', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800', fact: 'Southernmost riverfront ghat hosting early morning classical Indian music and yoga rituals.' },
    ],
    agra: [
      { name: 'Taj Mahal', category: 'Heritage', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800', fact: 'UNESCO World Heritage wonder crafted from white Makrana marble by Mughal Emperor Shah Jahan.' },
      { name: 'Agra Fort', category: 'Heritage', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800', fact: 'Imposing red sandstone Mughal royal citadel housing the Jahangiri Mahal and Diwan-i-Khas.' },
    ],
    srinagar: [
      { name: 'Dal Lake & Floating Market', category: 'Nature', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800', fact: 'Iconic alpine lake famous for wooden shikara boats, carved cedar houseboats, and floating flower markets.' },
      { name: 'Shalimar Bagh Mughal Garden', category: 'Heritage', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800', fact: 'Terraced royal Mughal garden built in 1619 by Emperor Jahangir for his Empress Nur Jahan.' },
    ],
  };

  const cityDefaults = defaultCityAttractionsMap[params.city.toLowerCase()];

  const attractions = cityAttractions.length > 0
    ? cityAttractions
    : cityDefaults
    ? cityDefaults.map((a, idx) => ({
        id: `${params.city}-${idx}`,
        cityId: params.city,
        name: a.name,
        category: a.category,
        images: [a.image],
        didYouKnowFacts: [a.fact],
        historicalSignificance: `Major historical and cultural landmark in ${cityName}, ${stateName}.`,
        mapCoords: { lat: 25.3176, lng: 82.9739 },
      }))
    : [
        {
          id: `${params.city}-landmark-1`,
          cityId: params.city,
          name: `${cityName} Old Town & Heritage Promenade`,
          category: 'Heritage' as const,
          images: [heroImage],
          didYouKnowFacts: [
            `Preserves centuries-old regional architecture, artisan workshops, and bustling bazaars.`,
            `Key cultural hub hosting annual folk celebrations and traditional festivals in ${stateName}.`,
          ],
          historicalSignificance: `Historic town square and heritage promenade of ${cityName}.`,
          mapCoords: { lat: 26.9124, lng: 75.7873 },
        },
        {
          id: `${params.city}-landmark-2`,
          cityId: params.city,
          name: `${cityName} Cultural Sanctuary`,
          category: 'Spiritual' as const,
          images: ['https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800'],
          didYouKnowFacts: [
            `Famous for daily evening prayers and regional cultural gatherings.`,
            `Attracts visitors and travelers from across India for its serene environment.`,
          ],
          historicalSignificance: `Spiritual center dedicated to preserving regional traditions.`,
          mapCoords: { lat: 26.9239, lng: 75.8267 },
        },
      ];

  // Default festivals if none found
  const festivals = cityFestivals.length > 0
    ? cityFestivals
    : [
        {
          id: `festival-${params.city}`,
          name: `${cityName} Heritage & Cultural Carnival`,
          cityId: params.city,
          dates: 'October 15 - October 24, 2026',
          category: 'Cultural Festival',
          description: `Vibrant street music, folk dance performances, illuminated heritage buildings, and regional food bazaars in ${cityName}.`,
          image: heroImage,
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
    idealDuration,
    localCuisine,
    facts,
    attractions,
    festivals,
  };

  return <DestinationCityClient city={cityData} />;
}
