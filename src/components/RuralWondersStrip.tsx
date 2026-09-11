'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RURAL_DESTINATIONS } from '@/lib/data/rural-destinations';
import { ChevronLeft, ChevronRight, Home, MapPin, ArrowRight } from 'lucide-react';

export function RuralWondersStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6 py-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-wider border border-lime-500/20">
            <Home className="w-3.5 h-3.5" />
            <span>Offbeat & Rural Tourism</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
            Lesser Known <span className="gold-gradient-text">Rural Wonders</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Tuck away into pristine eco-villages, indigenous craft hamlets, and organic farm sanctuaries across India.
          </p>
        </div>

        {/* Scroll Controls */}
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

      {/* Unfiltered Horizontal Scroll Strip */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1"
      >
        {RURAL_DESTINATIONS.map((village) => (
          <div
            key={village.id}
            className="w-[280px] sm:w-[320px] shrink-0 snap-start glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Hero Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={village.image}
                alt={village.name}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />

              {/* State Badge */}
              <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-saffron-400 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{village.state}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                  {village.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {village.tagline}
                </p>
              </div>

              {/* Minimal Link */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                <span className="text-[11px] text-lime-400">Eco-Village</span>
                <Link
                  href="/plan/rural-tourism"
                  className="text-saffron-400 hover:text-white flex items-center gap-1 group/link transition-colors"
                >
                  <span>Explore Rural Trail</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
