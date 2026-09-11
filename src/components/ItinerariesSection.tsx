'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SAMPLE_ITINERARIES, Itinerary } from '@/lib/data/itineraries';
import { Map, MapPin, Clock, ArrowRight, RotateCcw, Filter, Sparkles, Calendar } from 'lucide-react';

const REGION_FACETS = [
  'All', 'North', 'South', 'East', 'West', 'North East', 'Central'
] as const;

const INTEREST_FACETS = [
  'All', 'Adventure', 'Spiritual', 'Heritage', 'Nature', 'Gastronomy', 'Wildlife', 'Wellness', 'Arts'
] as const;

const TRIP_LENGTH_FACETS = [
  'All', '1-2 Days', '3-4 Days', '5-6 Days', '7-13 Days', '14+ Days'
] as const;

export function ItinerariesSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedInterest, setSelectedInterest] = useState<string>('All');
  const [selectedTripLength, setSelectedTripLength] = useState<string>('All');

  const filteredItineraries = useMemo(() => {
    return SAMPLE_ITINERARIES.filter((item) => {
      if (selectedRegion !== 'All' && item.region !== selectedRegion) return false;
      if (selectedInterest !== 'All' && item.interest !== selectedInterest) return false;
      if (selectedTripLength !== 'All' && item.tripLength !== selectedTripLength) return false;
      return true;
    });
  }, [selectedRegion, selectedInterest, selectedTripLength]);

  const activeFiltersCount = 
    (selectedRegion !== 'All' ? 1 : 0) + 
    (selectedInterest !== 'All' ? 1 : 0) + 
    (selectedTripLength !== 'All' ? 1 : 0);

  const handleResetFilters = () => {
    setSelectedRegion('All');
    setSelectedInterest('All');
    setSelectedTripLength('All');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8 py-4">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
          <Map className="w-3.5 h-3.5" />
          <span>Curated Travel Routes</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
          Crafted <span className="gold-gradient-text">India Itineraries</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl">
          Filter by Region, Interest, or Trip Length to discover tested day-by-day travel plans across India.
        </p>
      </div>

      {/* Three-Facet Chip Filter Bar */}
      <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 space-y-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Itineraries ({filteredItineraries.length} Matching Plans)</span>
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold underline flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters ({activeFiltersCount})</span>
            </button>
          )}
        </div>

        {/* Facet 1: Trip Length */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-saffron-400 uppercase tracking-wider flex items-center gap-1">
            <Clock className="w-3 h-3" /> 1. Trip Length:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {TRIP_LENGTH_FACETS.map((len) => {
              const isActive = selectedTripLength === len;
              return (
                <button
                  key={len}
                  onClick={() => setSelectedTripLength(len)}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-saffron-500 text-royal-950 shadow-glow-marigold scale-105 font-bold'
                      : 'bg-royal-950/60 border border-white/10 text-slate-300 hover:text-white hover:border-saffron-500/30'
                  }`}
                >
                  {len === 'All' ? 'All Durations' : len}
                </button>
              );
            })}
          </div>
        </div>

        {/* Facet 2: Geographic Region */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <span className="text-[11px] font-bold text-peacock-400 uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3" /> 2. Region:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {REGION_FACETS.map((reg) => {
              const isActive = selectedRegion === reg;
              return (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-peacock-500 text-white shadow-md scale-105 font-bold'
                      : 'bg-royal-950/60 border border-white/10 text-slate-300 hover:text-white hover:border-peacock-500/30'
                  }`}
                >
                  {reg === 'All' ? 'All Regions' : `${reg} Zone`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Facet 3: Travel Interest */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> 3. Travel Interest:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {INTEREST_FACETS.map((interest) => {
              const isActive = selectedInterest === interest;
              return (
                <button
                  key={interest}
                  onClick={() => setSelectedInterest(interest)}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-amber-500 text-royal-950 shadow-md scale-105 font-bold'
                      : 'bg-royal-950/60 border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/30'
                  }`}
                >
                  {interest === 'All' ? 'All Interests' : interest}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Itineraries Grid */}
      {filteredItineraries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={itinerary.coverImage}
                  alt={itinerary.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/30 to-transparent" />

                {/* Duration Badge Overlay */}
                <div className="absolute top-3 left-3 bg-saffron-500 text-royal-950 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  {itinerary.durationBadge}
                </div>

                {/* Region Tag */}
                <div className="absolute bottom-3 left-3 text-xs text-peacock-300 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                  <span>{itinerary.region} Zone • {itinerary.interest}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors leading-snug line-clamp-2">
                    <Link href={`/itineraries/${itinerary.slug}`}>
                      {itinerary.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {itinerary.shortDescription}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[11px] bg-royal-950 text-slate-400 px-2 py-0.5 rounded border border-white/5 font-mono">
                    {itinerary.tripLength}
                  </span>
                  <Link
                    href={`/itineraries/${itinerary.slug}`}
                    className="text-saffron-400 hover:text-white flex items-center gap-1.5 group/link transition-colors"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-10 rounded-2xl border border-white/10 text-center space-y-3">
          <Calendar className="w-8 h-8 text-saffron-400 mx-auto" />
          <h3 className="text-lg font-bold text-white font-serif">No Itineraries Match Your Selected Filters</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your Region, Interest, or Trip Length chips above to explore more travel plans.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-saffron-500 text-royal-950 font-bold text-xs shadow-glow-saffron"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
