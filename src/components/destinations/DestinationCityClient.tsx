'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Calendar,
  Clock,
  Utensils,
  Sun,
  Lightbulb,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  X,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Share2,
  Check,
  Compass,
} from 'lucide-react';
import { AttractionPOI, FestivalEvent } from '@/data/schema';

export interface DetailedCityInfo {
  cityName: string;
  citySlug: string;
  stateName: string;
  stateSlug: string;
  zoneName: string;
  zoneSlug: string;
  tagline: string;
  heroImage: string;
  overview: string;
  bestTimeToVisit: string;
  idealDuration: string;
  localCuisine: string[];
  facts: string[];
  attractions: AttractionPOI[];
  festivals: FestivalEvent[];
}

export function DestinationCityClient({ city }: { city: DetailedCityInfo }) {
  // Modal / Lightbox State for Attractions
  const [selectedAttraction, setSelectedAttraction] = useState<AttractionPOI | null>(null);

  // Bookmark State & LocalStorage Sync
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [showShareToast, setShowShareToast] = useState<boolean>(false);

  useEffect(() => {
    // Check if city is bookmarked in localStorage
    try {
      const saved = localStorage.getItem('exploreindia_city_bookmarks');
      if (saved) {
        const list: string[] = JSON.parse(saved);
        setIsBookmarked(list.includes(city.citySlug));
      }
    } catch (err) {
      console.error('Failed to read bookmarks:', err);
    }
  }, [city.citySlug]);

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem('exploreindia_city_bookmarks');
      let list: string[] = saved ? JSON.parse(saved) : [];
      let nextState = false;

      if (list.includes(city.citySlug)) {
        list = list.filter((id) => id !== city.citySlug);
        nextState = false;
      } else {
        list.push(city.citySlug);
        nextState = true;
      }

      localStorage.setItem('exploreindia_city_bookmarks', JSON.stringify(list));
      setIsBookmarked(nextState);
    } catch (err) {
      console.error('Failed to update bookmark:', err);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Full-width Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={city.heroImage}
            alt={city.cityName}
            fill
            priority
            className="object-cover opacity-30 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          {/* Breadcrumbs: Home > North > Rajasthan > Jaipur */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs">
            <Link href="/" className="text-slate-400 hover:text-saffron-400 transition">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href={`/destinations?zone=${encodeURIComponent(city.zoneName)}`} className="text-slate-400 hover:text-saffron-400 transition capitalize">
              {city.zoneName}
            </Link>
            <span className="text-slate-600">/</span>
            <Link href={`/destinations?state=${encodeURIComponent(city.stateName)}`} className="text-slate-400 hover:text-saffron-400 transition">
              {city.stateName}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{city.cityName}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{city.stateName} State • {city.zoneName} Zone</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
                {city.cityName} <span className="gold-gradient-text">City Guide</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-3xl font-serif italic leading-relaxed">
                &ldquo;{city.tagline}&rdquo;
              </p>
            </div>

            {/* Quick Actions: Bookmark & Share */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={toggleBookmark}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border shadow-lg ${
                  isBookmarked
                    ? 'bg-saffron-500 text-royal-950 border-saffron-400'
                    : 'bg-royal-900/80 text-slate-200 border-white/10 hover:border-saffron-500/40'
                }`}
              >
                {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                <span>{isBookmarked ? 'Bookmarked' : 'Save Bookmark'}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-royal-900/80 border border-white/10 text-slate-200 hover:text-saffron-400 transition"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {showShareToast && (
                <div className="absolute right-4 top-20 bg-emerald-500 text-royal-950 px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl animate-fadeIn">
                  Link copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16 flex-1 w-full">
        {/* Section 1: At a Glance Key Facts */}
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-saffron-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Travel Snapshot</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">At a Glance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fact 1: Best Time to Visit */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-amber-500/20 bg-royal-900/60 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">Best Season</span>
                  <h3 className="text-lg font-bold text-white font-serif">{city.bestTimeToVisit}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Optimal climate for heritage photo walks, sightseeing tours, and outdoor cultural events.
                </p>
              </div>
            </div>

            {/* Fact 2: Ideal Duration */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-cyan-500/20 bg-royal-900/60 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">Ideal Trip Length</span>
                  <h3 className="text-lg font-bold text-white font-serif">{city.idealDuration}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Covers major historic forts, local street markets, museum trails, and regional culinary tours.
                </p>
              </div>
            </div>

            {/* Fact 3: Local Cuisine */}
            <div className="glass-card rounded-2xl p-6 space-y-3 border border-saffron-500/20 bg-royal-900/60 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400">Must-Try Culinary Delicacies</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {city.localCuisine.map((dish, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-royal-950 text-saffron-300 px-2.5 py-1 rounded-lg border border-saffron-500/30 font-medium"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Did You Know? Heritage Highlights */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-saffron-500/30 bg-royal-900/60 backdrop-blur-xl space-y-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-serif">Did You Know?</h2>
              <p className="text-xs text-slate-400">Authentic heritage & historical trivia about {city.cityName}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.facts.map((fact, index) => (
              <div key={index} className="flex gap-3 bg-royal-950/80 p-4 rounded-xl border border-white/5">
                <span className="w-6 h-6 rounded-full bg-saffron-500/20 text-saffron-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Top Attractions Showcase with Image Lightbox Modal */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-peacock-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Points of Interest</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">Top Attractions & POIs</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">{city.attractions.length} Landmarks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.attractions.map((attraction) => (
              <div
                key={attraction.id}
                onClick={() => setSelectedAttraction(attraction)}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={attraction.images[0] || city.heroImage}
                    alt={attraction.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-white/10">
                    {attraction.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-saffron-400 transition-colors font-serif">
                      {attraction.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {attraction.historicalSignificance}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-saffron-400">
                    <span onClick={() => setSelectedAttraction(attraction)} className="hover:underline">Quick Preview</span>
                    <Link
                      href={`/attractions/${city.stateSlug}/${attraction.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-saffron-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Full Landmark Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Nearby Festivals & Cultural Events */}
        {city.festivals.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-saffron-400 uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>Cultural Gatherings</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">Nearby Festivals & Celebrations</h2>
              </div>
              <Link href="/festivals-events" className="text-xs text-saffron-400 hover:text-white font-semibold flex items-center gap-1">
                <span>View All Events</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.festivals.map((evt) => (
                <div key={evt.id} className="glass-card rounded-2xl overflow-hidden p-5 flex flex-col sm:flex-row gap-5 border border-white/10 group">
                  {evt.image && (
                    <div className="relative h-36 sm:h-auto sm:w-40 rounded-xl overflow-hidden shrink-0">
                      <Image src={evt.image} alt={evt.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                        {evt.category}
                      </span>
                      <h3 className="text-base font-bold text-white font-serif group-hover:text-saffron-300 transition">
                        {evt.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">{evt.dates}</p>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{evt.description}</p>
                    </div>

                    <Link
                      href={`/festivals-events/${city.stateSlug}/${evt.id}`}
                      className="text-xs font-semibold text-saffron-400 hover:text-white flex items-center gap-1 pt-2 border-t border-white/5"
                    >
                      <span>Festival Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Attraction Lightbox Modal */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-50 bg-royal-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-saffron-500/40 shadow-2xl relative animate-fadeIn max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-royal-950/80 text-slate-300 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full shrink-0">
              <Image
                src={selectedAttraction.images[0] || city.heroImage}
                alt={selectedAttraction.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded border border-amber-500/30 font-bold">
                  {selectedAttraction.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-serif mt-1">{selectedAttraction.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 block mb-1">Historical Significance</h4>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedAttraction.historicalSignificance}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-saffron-400">
                  <Lightbulb className="w-4 h-4 text-saffron-400" />
                  <span>Did You Know? Facts</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedAttraction.didYouKnowFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-royal-950 p-3 rounded-xl border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 shrink-0 mt-1.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400 font-mono">
                <span>Map Coordinates:</span>
                <span className="text-saffron-400 font-bold">
                  {selectedAttraction.mapCoords.lat}° N, {selectedAttraction.mapCoords.lng}° E
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
