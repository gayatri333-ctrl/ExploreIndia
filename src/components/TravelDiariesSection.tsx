'use client';

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TRAVEL_DIARIES, TravelDiary } from '@/lib/data/travel-diaries';
import { 
  ChevronLeft, ChevronRight, BookOpen, MapPin, 
  Clock, ArrowRight, RotateCcw, Filter, Check, Sparkles 
} from 'lucide-react';

const INTEREST_OPTIONS = [
  'All', 'Adventure', 'Spiritual', 'Heritage', 'Nature', 'Gastronomy', 'Wildlife', 'Wellness', 'Arts'
] as const;

const REGION_OPTIONS = [
  'All', 'North', 'South', 'East', 'West', 'North East', 'Central'
] as const;

export function TravelDiariesSection() {
  const [selectedInterest, setSelectedInterest] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredDiaries = useMemo(() => {
    return TRAVEL_DIARIES.filter((item) => {
      if (selectedInterest !== 'All' && item.interest !== selectedInterest) return false;
      if (selectedRegion !== 'All' && item.region !== selectedRegion) return false;
      return true;
    });
  }, [selectedInterest, selectedRegion]);

  const activeFiltersCount = (selectedInterest !== 'All' ? 1 : 0) + (selectedRegion !== 'All' ? 1 : 0);

  const handleResetFilters = () => {
    setSelectedInterest('All');
    setSelectedRegion('All');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8 py-4">
      {/* Header Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider border border-saffron-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Editorial Travel Logs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
            Travel <span className="gold-gradient-text">Diaries</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Authentic travel notes, wilderness encounters, and regional food logs shared by passionate explorers across India.
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-xl bg-royal-900/80 hover:bg-royal-800 text-slate-300 hover:text-white border border-white/10 hover:border-saffron-500/40 backdrop-blur-md transition-all shadow-md active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-xl bg-royal-900/80 hover:bg-royal-800 text-slate-300 hover:text-white border border-white/10 hover:border-saffron-500/40 backdrop-blur-md transition-all shadow-md active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Two-Facet Chip Filter Bar (Interest + Region) */}
      <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Travel Stories ({filteredDiaries.length} Found)</span>
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold underline flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Facet 1: Interest Filter Chips */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            1. Travel Interest:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {INTEREST_OPTIONS.map((interest) => {
              const isActive = selectedInterest === interest;
              return (
                <button
                  key={interest}
                  onClick={() => setSelectedInterest(interest)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-saffron-500 text-royal-950 shadow-glow-marigold scale-105 font-bold'
                      : 'bg-royal-950/60 border border-white/10 text-slate-300 hover:text-white hover:border-saffron-500/30'
                  }`}
                >
                  {interest === 'All' ? 'All Interests' : interest}
                </button>
              );
            })}
          </div>
        </div>

        {/* Facet 2: Region Filter Chips */}
        <div className="space-y-2 pt-1 border-t border-white/5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            2. Geographic Region:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {REGION_OPTIONS.map((region) => {
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-peacock-500 text-white shadow-md scale-105 font-bold'
                      : 'bg-royal-950/60 border border-white/10 text-slate-300 hover:text-white hover:border-peacock-500/30'
                  }`}
                >
                  {region === 'All' ? 'All Regions' : `${region} Zone`}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      {filteredDiaries.length > 0 ? (
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1"
        >
          {filteredDiaries.map((diary) => (
            <div
              key={diary.id}
              className="w-[320px] sm:w-[360px] shrink-0 snap-start glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={diary.coverImage}
                  alt={diary.title}
                  fill
                  sizes="(max-width: 640px) 320px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />

                {/* Interest & Region Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-saffron-500 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                    {diary.interest}
                  </span>
                  <span className="bg-royal-950/80 backdrop-blur-md text-peacock-300 border border-white/10 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {diary.state}
                  </span>
                </div>
              </div>

              {/* Story Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-saffron-400" />
                      {diary.readTime}
                    </span>
                    <span>•</span>
                    <span>{diary.author}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors leading-snug line-clamp-2">
                    <Link href={`/stories/${diary.slug}`}>
                      {diary.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {diary.excerpt}
                  </p>
                </div>

                {/* Read Story CTA */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[11px] text-slate-400">{diary.publishedDate}</span>
                  <Link
                    href={`/stories/${diary.slug}`}
                    className="text-saffron-400 hover:text-white flex items-center gap-1.5 group/link transition-colors"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-10 rounded-2xl border border-white/10 text-center space-y-3">
          <Sparkles className="w-8 h-8 text-saffron-400 mx-auto" />
          <h3 className="text-lg font-bold text-white font-serif">No Travel Stories Match Your Selected Filters</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your Interest or Region chips above to explore more travel diaries.
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
