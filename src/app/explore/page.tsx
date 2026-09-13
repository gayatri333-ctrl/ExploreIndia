'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  Compass,
  MapPin,
  Sparkles,
  Filter,
  X,
  RotateCcw,
  ArrowRight,
  Landmark,
  Flame,
  TreePine,
  Utensils,
  Stethoscope,
  Home,
  Palette,
  Trees,
  Bike,
  Layers,
  Lightbulb,
} from 'lucide-react';

import { ZONES, STATES_DATA, CITIES_DATA, ATTRACTIONS_DATA } from '@/data/dataset';
import { Zone } from '@/data/schema';

// Categories / Themes list
const THEMES = [
  { id: 'All', label: 'All Themes', icon: Sparkles },
  { id: 'Heritage', label: 'Heritage & Forts', icon: Landmark },
  { id: 'Spiritual', label: 'Spiritual & Ghats', icon: Flame },
  { id: 'Wildlife', label: 'Wildlife & Safaris', icon: TreePine },
  { id: 'Adventure', label: 'Adventure & Mountains', icon: Compass },
  { id: 'Gastronomy', label: 'Gastronomy & Food', icon: Utensils },
  { id: 'Wellness', label: 'Ayurveda & Wellness', icon: Stethoscope },
  { id: 'Rural', label: 'Rural & Village Trails', icon: Home },
  { id: 'Arts', label: 'Arts & Handicrafts', icon: Palette },
  { id: 'Nature', label: 'Nature & Waterways', icon: Trees },
];

interface CardItem {
  id: string;
  title: string;
  itemType: 'Destination City' | 'Attraction';
  stateName: string;
  stateSlug: string;
  zone: Zone;
  theme: string;
  image: string;
  tagline: string;
  fact: string;
  link: string;
}

function ExploreContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Read initial filter values from URL searchParams
  const initialZone = searchParams.get('zone') || 'All';
  const initialTheme = searchParams.get('theme') || 'All';
  const initialSearch = searchParams.get('q') || '';
  const initialType = searchParams.get('type') || 'All';

  const [selectedZone, setSelectedZone] = useState<string>(initialZone);
  const [selectedTheme, setSelectedTheme] = useState<string>(initialTheme);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedType, setSelectedType] = useState<string>(initialType);

  // Sync states to URL query params
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedZone && selectedZone !== 'All') {
      params.set('zone', selectedZone);
    }
    if (selectedTheme && selectedTheme !== 'All') {
      params.set('theme', selectedTheme);
    }
    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    }
    if (selectedType && selectedType !== 'All') {
      params.set('type', selectedType);
    }

    const newQueryString = params.toString();
    const newPath = newQueryString ? `${pathname}?${newQueryString}` : pathname;

    router.replace(newPath, { scroll: false });
  }, [selectedZone, selectedTheme, searchQuery, selectedType, pathname, router]);

  // Combine cities and attractions into unified card items
  const allExplorerItems = useMemo<CardItem[]>(() => {
    const items: CardItem[] = [];

    // Helper map stateId -> State object
    const stateMap = new Map(STATES_DATA.map((s) => [s.id, s]));

    // 1. Add Destination Cities
    CITIES_DATA.forEach((city) => {
      const state = stateMap.get(city.stateId);
      const stateName = state ? state.name : city.stateId;
      const zone = state ? state.zone : 'North';

      items.push({
        id: `city-${city.id}`,
        title: city.name,
        itemType: 'Destination City',
        stateName,
        stateSlug: city.stateId,
        zone,
        theme: 'Heritage', // Default theme for cities
        image: city.image || 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
        tagline: city.tagline || city.overview,
        fact: city.quickFacts[0] || city.overview,
        link: `/destinations/${city.stateId}/${city.id}`,
      });
    });

    // Helper map cityId -> City object
    const cityMap = new Map(CITIES_DATA.map((c) => [c.id, c]));

    // 2. Add Attractions
    ATTRACTIONS_DATA.forEach((attraction) => {
      const city = cityMap.get(attraction.cityId);
      const state = city ? stateMap.get(city.stateId) : undefined;
      const stateName = state ? state.name : 'India';
      const stateSlug = city ? city.stateId : 'explore';
      const zone = state ? state.zone : 'North';

      items.push({
        id: `attr-${attraction.id}`,
        title: attraction.name,
        itemType: 'Attraction',
        stateName,
        stateSlug,
        zone,
        theme: attraction.category,
        image: attraction.images[0] || 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
        tagline: attraction.historicalSignificance,
        fact: attraction.didYouKnowFacts[0] || attraction.historicalSignificance,
        link: `/destinations/${stateSlug}/${attraction.cityId}`,
      });
    });

    return items;
  }, []);

  // Filter items based on user inputs
  const filteredItems = useMemo(() => {
    return allExplorerItems.filter((item) => {
      // 1. Zone filter
      if (selectedZone !== 'All') {
        if (item.zone.toLowerCase() !== selectedZone.toLowerCase()) {
          return false;
        }
      }

      // 2. Theme filter
      if (selectedTheme !== 'All') {
        if (item.theme.toLowerCase() !== selectedTheme.toLowerCase()) {
          return false;
        }
      }

      // 3. Entity Type filter (City vs Attraction)
      if (selectedType !== 'All') {
        if (selectedType === 'cities' && item.itemType !== 'Destination City') return false;
        if (selectedType === 'attractions' && item.itemType !== 'Attraction') return false;
      }

      // 4. Live Text Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchState = item.stateName.toLowerCase().includes(q);
        const matchZone = item.zone.toLowerCase().includes(q);
        const matchTagline = item.tagline.toLowerCase().includes(q);
        const matchFact = item.fact.toLowerCase().includes(q);
        const matchTheme = item.theme.toLowerCase().includes(q);

        if (!matchTitle && !matchState && !matchZone && !matchTagline && !matchFact && !matchTheme) {
          return false;
        }
      }

      return true;
    });
  }, [allExplorerItems, selectedZone, selectedTheme, selectedType, searchQuery]);

  // Check if any filter is active
  const hasActiveFilters = selectedZone !== 'All' || selectedTheme !== 'All' || searchQuery.trim() !== '' || selectedType !== 'All';

  const handleClearFilters = () => {
    setSelectedZone('All');
    setSelectedTheme('All');
    setSearchQuery('');
    setSelectedType('All');
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Header */}
      <section className="relative pt-28 pb-12 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Interactive Multi-Tag Discovery Explorer</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Explore <span className="gold-gradient-text">India Destinations & Attractions</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Filter by geographic zones, cultural experience themes, or search across heritage fortresses, ancient temples, backwaters, and natural wonders.
          </p>
        </div>
      </section>

      {/* Main Layout: Sidebar & Card Grid */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* Top Control Bar: Search & Type Toggle */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/10 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by city, fort name, state, theme, or heritage fact..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-royal-950 border border-white/10 text-white placeholder-slate-400 text-sm focus:border-saffron-500 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Type Selector (All, Cities, Attractions) */}
            <div className="flex items-center gap-1.5 bg-royal-950 p-1.5 rounded-xl border border-white/10 w-full md:w-auto shrink-0">
              {[
                { id: 'All', label: 'All Places' },
                { id: 'cities', label: 'Cities Only' },
                { id: 'attractions', label: 'Attractions Only' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedType === t.id
                      ? 'bg-saffron-500 text-royal-950 font-bold shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Chips & Clear Action */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-400 font-medium">Active Filters:</span>
                {selectedZone !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-peacock-500/20 border border-peacock-500/40 text-peacock-300">
                    Zone: {selectedZone}
                    <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedZone('All')} />
                  </span>
                )}
                {selectedTheme !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-saffron-500/20 border border-saffron-500/40 text-saffron-300">
                    Theme: {selectedTheme}
                    <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedTheme('All')} />
                  </span>
                )}
                {selectedType !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                    Type: {selectedType}
                    <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedType('All')} />
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300">
                    &ldquo;{searchQuery}&rdquo;
                    <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSearchQuery('')} />
                  </span>
                )}
              </div>

              <button
                onClick={handleClearFilters}
                className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Multi-Facet Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar / Filter Controls */}
          <aside className="space-y-6 lg:col-span-1">
            {/* Zone Facet Filter */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <MapPin className="w-4 h-4 text-peacock-400" />
                <span>Geographic Zone</span>
              </h3>
              <div className="flex flex-col gap-1.5 text-xs">
                {['All', ...ZONES].map((z) => (
                  <button
                    key={z}
                    onClick={() => setSelectedZone(z)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-left transition ${
                      selectedZone === z
                        ? 'bg-peacock-500/20 border border-peacock-500/40 text-peacock-300 font-bold'
                        : 'bg-royal-950/60 border border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span>{z === 'All' ? 'All Zones' : `${z} Zone`}</span>
                    {selectedZone === z && <Sparkles className="w-3.5 h-3.5 text-peacock-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Theme Facet Filter */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Filter className="w-4 h-4 text-saffron-400" />
                <span>Experience Theme</span>
              </h3>
              <div className="flex flex-col gap-1.5 text-xs">
                {THEMES.map((theme) => {
                  const ThemeIcon = theme.icon;
                  const isSelected = selectedTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-left transition ${
                        isSelected
                          ? 'bg-saffron-500/20 border border-saffron-500/40 text-saffron-300 font-bold'
                          : 'bg-royal-950/60 border border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ThemeIcon className="w-3.5 h-3.5 text-saffron-400" />
                        <span>{theme.label}</span>
                      </div>
                      {isSelected && <Sparkles className="w-3.5 h-3.5 text-saffron-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Results Grid View */}
          <section className="lg:col-span-3 space-y-6">
            {/* Results Count Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-400">
              <div>
                Showing <strong className="text-white text-sm">{filteredItems.length}</strong> matching places & POIs
              </div>
              <div className="font-mono text-[11px]">
                {selectedZone !== 'All' ? `${selectedZone} Zone` : 'Pan-India'} • {selectedTheme}
              </div>
            </div>

            {/* Card Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                      
                      {/* State Badge */}
                      <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-peacock-300 border border-white/10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                        {item.stateName}
                      </div>

                      {/* Item Type Badge */}
                      <div className="absolute top-3 right-3 bg-saffron-500/90 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow">
                        {item.itemType}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-amber-400 font-semibold">{item.theme}</span>
                          <span className="text-slate-400 font-mono">{item.zone} Zone</span>
                        </div>

                        <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                          <Link href={item.link}>{item.title}</Link>
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Did You Know Excerpt */}
                      <div className="space-y-1.5 pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          <Lightbulb className="w-3 h-3 text-saffron-400" />
                          <span>Heritage Fact</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2 italic">
                          &ldquo;{item.fact}&rdquo;
                        </p>
                      </div>

                      {/* Card Footer Link */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-400 text-[11px]">Explore Guide</span>
                        <Link
                          href={item.link}
                          className="text-saffron-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>Discover More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Empty State Handling */
              <div className="glass-card rounded-3xl p-12 text-center space-y-5 border border-white/10 max-w-lg mx-auto my-8">
                <div className="w-16 h-16 rounded-2xl bg-saffron-500/10 text-saffron-400 flex items-center justify-center mx-auto border border-saffron-500/20">
                  <Search className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-serif">No Matching Destinations Found</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We couldn&apos;t find any destination or attraction matching your current filter criteria. Try adjusting your zone, theme, or search keywords.
                  </p>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-400 text-royal-950 text-xs font-bold transition shadow-lg inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear All Filters</span>
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-royal-950 text-slate-100 flex items-center justify-center p-8">
        <div className="flex items-center gap-3 text-saffron-400 font-serif">
          <Compass className="w-6 h-6 animate-spin" />
          <span>Loading Discovery Explorer...</span>
        </div>
      </div>
    }>
      <ExploreContent />
    </Suspense>
  );
}
