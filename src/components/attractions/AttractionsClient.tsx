'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Sparkles, Filter, ChevronRight, Compass, Building, Tag } from 'lucide-react';
import { ATTRACTIONS_DATA } from '@/data/dataset';
import { DESTINATION_CITIES } from '@/lib/data/cities-facts';

// Unified list of attractions enriched with zone and state info
interface EnrichedAttraction {
  id: string;
  slug: string;
  name: string;
  category: string;
  cityName: string;
  citySlug: string;
  stateName: string;
  stateSlug: string;
  zone: string;
  image: string;
  fact: string;
  significance: string;
}

const EXTENDED_ATTRACTIONS_LIST: EnrichedAttraction[] = [
  {
    id: 'kashi-vishwanath-temple',
    slug: 'kashi-vishwanath-temple',
    name: 'Kashi Vishwanath Temple',
    category: 'Spiritual',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
    fact: 'Rebuilt by Ahilyabai Holkar in 1780; spire gilded with 800 kg of pure gold.',
    significance: 'One of the twelve sacred Jyotirlingas of Lord Shiva along the holy Ganges.',
  },
  {
    id: 'dashashwamedh-ghat',
    slug: 'dashashwamedh-ghat',
    name: 'Dashashwamedh Ghat & Evening Aarti',
    category: 'Spiritual',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    fact: 'Seven Vedic priests perform synchronized brass lamp rituals every evening at sunset.',
    significance: 'Main and oldest riverfront ghat on the Ganges in Varanasi.',
  },
  {
    id: 'sarnath-ancient-ruins',
    slug: 'sarnath-ancient-ruins',
    name: 'Sarnath Archaeological Site & Dhamek Stupa',
    category: 'Heritage',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
    fact: 'Location where Lord Buddha delivered his first sermon after attaining enlightenment.',
    significance: 'UNESCO World Heritage tentative list site housing Ashoka Lion Capital.',
  },
  {
    id: 'amber-fort',
    slug: 'amber-fort',
    name: 'Amber Fort & Sheesh Mahal',
    category: 'Heritage',
    cityName: 'Jaipur',
    citySlug: 'jaipur',
    stateName: 'Rajasthan',
    stateSlug: 'rajasthan',
    zone: 'West India',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    fact: 'Sheesh Mahal mirror palace can be illuminated with a single candle reflected in thousands of Belgian concave mirrors.',
    significance: 'UNESCO World Heritage hilltop Rajput citadel founded in 1592.',
  },
  {
    id: 'hawa-mahal',
    slug: 'hawa-mahal',
    name: 'Hawa Mahal (Palace of Winds)',
    category: 'Heritage',
    cityName: 'Jaipur',
    citySlug: 'jaipur',
    stateName: 'Rajasthan',
    stateSlug: 'rajasthan',
    zone: 'West India',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    fact: 'Features 953 honeycomb lattice jharokhas designed for royal women to observe street parades unseen.',
    significance: '5-story pink sandstone palace built without a deep foundation in 1799.',
  },
  {
    id: 'taj-mahal',
    slug: 'taj-mahal',
    name: 'Taj Mahal Mausoleum',
    category: 'Heritage',
    cityName: 'Agra',
    citySlug: 'agra',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
    fact: 'Carved from translucent white Makrana marble that changes color with sunrise, sunset, and full moon.',
    significance: 'One of the New Seven Wonders of the World and UNESCO World Heritage monument.',
  },
  {
    id: 'golden-temple',
    slug: 'golden-temple',
    name: 'Golden Temple (Harmandir Sahib)',
    category: 'Spiritual',
    cityName: 'Amritsar',
    citySlug: 'amritsar',
    stateName: 'Punjab',
    stateSlug: 'punjab',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800',
    fact: 'Operates the world’s largest mega-kitchen (Langar) serving 100,000 free hot meals daily to all visitors.',
    significance: 'Holiest Gurdwara and spiritual center of Sikhism.',
  },
  {
    id: 'sonar-qila',
    slug: 'sonar-qila',
    name: 'Jaisalmer Fort (Sonar Qila)',
    category: 'Heritage',
    cityName: 'Jaisalmer',
    citySlug: 'jaisalmer',
    stateName: 'Rajasthan',
    stateSlug: 'rajasthan',
    zone: 'West India',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
    fact: 'One of the world’s few inhabited living forts housing nearly 25% of the city’s population inside.',
    significance: 'UNESCO World Heritage yellow sandstone citadel in Thar Desert.',
  },
  {
    id: 'victoria-memorial',
    slug: 'victoria-memorial',
    name: 'Victoria Memorial Hall',
    category: 'Heritage',
    cityName: 'Kolkata',
    citySlug: 'kolkata',
    stateName: 'West Bengal',
    stateSlug: 'west-bengal',
    zone: 'East India',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    fact: 'Crown weather vane features a 16-ft bronze Angel of Victory rotating with wind gusts.',
    significance: 'Grand Indo-Saracenic white marble museum built between 1906 and 1921.',
  },
  {
    id: 'double-decker-root-bridge',
    slug: 'double-decker-root-bridge',
    name: 'Nongriat Double Decker Living Root Bridge',
    category: 'Rural',
    cityName: 'Cherrapunji',
    citySlug: 'cherrapunji',
    stateName: 'Meghalaya',
    stateSlug: 'meghalaya',
    zone: 'North East India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    fact: 'Bio-engineered by Khasi elders over 150 years by guiding living rubber tree roots across river boulders.',
    significance: 'UNESCO World Heritage tentative list bio-architectural wonder hidden in deep jungle valleys.',
  },
  {
    id: 'alleppey-houseboat',
    slug: 'alleppey-houseboat',
    name: 'Vembanad Backwater Kettuvallam Cruise',
    category: 'Nature',
    cityName: 'Alleppey',
    citySlug: 'alleppey',
    stateName: 'Kerala',
    stateSlug: 'kerala',
    zone: 'South India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    fact: 'Traditional wooden boats stitched with coconut fiber ropes without a single iron nail.',
    significance: '900 km network of interconnected brackish lagoons and canals.',
  },
  {
    id: 'khajuraho-temples',
    slug: 'khajuraho-temples',
    name: 'Khajuraho Group of Temples',
    category: 'Heritage',
    cityName: 'Khajuraho',
    citySlug: 'khajuraho',
    stateName: 'Madhya Pradesh',
    stateSlug: 'madhya-pradesh',
    zone: 'Central India',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800',
    fact: 'Built by the Chandela dynasty between 950 and 1050 AD in Nagara architectural style.',
    significance: 'UNESCO World Heritage sandstone temples famed for intricate medieval sculptures.',
  },
  {
    id: 'dal-lake-shikara',
    slug: 'dal-lake-shikara',
    name: 'Dal Lake & Floating Market',
    category: 'Nature',
    cityName: 'Srinagar',
    citySlug: 'srinagar',
    stateName: 'Jammu & Kashmir',
    stateSlug: 'jammu-kashmir',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    fact: 'Early morning floating vegetable markets where traders buy and sell fresh produce from wooden shikaras.',
    significance: 'Jewel of Srinagar surrounded by snow-capped Zabarwan mountain ranges.',
  },
  {
    id: 'viceregal-lodge',
    slug: 'viceregal-lodge',
    name: 'Viceregal Lodge (Rashtrapati Niwas)',
    category: 'Heritage',
    cityName: 'Shimla',
    citySlug: 'shimla',
    stateName: 'Himachal Pradesh',
    stateSlug: 'himachal-pradesh',
    zone: 'North India',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
    fact: 'Built in 1888 with an independent steam power generator and fire-fighting system.',
    significance: 'Former summer residence of British Viceroy of India in Jacobethan style.',
  }
];

const CATEGORIES = ['All', 'Heritage', 'Spiritual', 'Nature', 'Adventure', 'Rural'];
const ZONES = ['All Zones', 'North India', 'South India', 'East India', 'West India', 'Central India', 'North East India'];

export function AttractionsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedZone, setSelectedZone] = useState('All Zones');

  const filteredAttractions = useMemo(() => {
    return EXTENDED_ATTRACTIONS_LIST.filter((attraction) => {
      const matchesSearch =
        !searchQuery.trim() ||
        attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attraction.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attraction.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attraction.fact.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || attraction.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesZone = selectedZone === 'All Zones' || attraction.zone.toLowerCase() === selectedZone.toLowerCase();

      return matchesSearch && matchesCategory && matchesZone;
    });
  }, [searchQuery, selectedCategory, selectedZone]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Control Panel */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6 shadow-xl backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Text Search Input */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search attractions by name, city (e.g. Varanasi, Jaipur, Taj Mahal)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-royal-900/80 border border-white/15 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-saffron-500 transition text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Zone Dropdown Filter */}
          <div className="relative">
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full px-4 py-3.5 bg-royal-900/80 border border-white/15 rounded-xl text-white focus:outline-none focus:border-saffron-500 transition text-sm appearance-none cursor-pointer"
            >
              {ZONES.map((zone) => (
                <option key={zone} value={zone} className="bg-royal-950 text-white">
                  {zone}
                </option>
              ))}
            </select>
            <Compass className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-saffron-400" /> Theme:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-saffron-500 text-royal-950 font-bold shadow-lg shadow-saffron-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-sm text-slate-400 px-1">
        <div>
          Showing <span className="text-saffron-400 font-bold text-base">{filteredAttractions.length}</span> tourist attractions
        </div>
        {(selectedCategory !== 'All' || selectedZone !== 'All Zones' || searchQuery) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedZone('All Zones');
            }}
            className="text-xs text-saffron-400 hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Attraction Grid */}
      {filteredAttractions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group rounded-2xl bg-royal-900/60 border border-white/10 overflow-hidden hover:border-saffron-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-saffron-500/5"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-royal-950/80 backdrop-blur-md border border-white/20 text-saffron-400 text-[10px] font-bold uppercase tracking-wider">
                      {attraction.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-saffron-500/90 text-royal-950 text-[10px] font-extrabold uppercase tracking-wider">
                      {attraction.zone}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                    <span>{attraction.cityName}, {attraction.stateName}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-saffron-400 transition font-serif">
                    {attraction.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {attraction.significance}
                  </p>
                  
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-saffron-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Did You Know?
                    </span>
                    <p className="text-slate-300 italic text-[11px] leading-snug">
                      &quot;{attraction.fact}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <Link
                  href={`/attractions/${attraction.stateSlug}/${attraction.slug}`}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-saffron-500 hover:text-royal-950 border border-white/15 hover:border-saffron-500 text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Landmark</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-4 rounded-2xl bg-white/5 border border-white/10">
          <Building className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Attractions Found</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            We couldn&apos;t find any tourist landmarks matching your search filter query &quot;{searchQuery}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedZone('All Zones');
            }}
            className="px-5 py-2.5 rounded-xl bg-saffron-500 text-royal-950 font-bold text-xs hover:bg-saffron-400 transition"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
