'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ATTRACTIONS } from '@/lib/data/attractions';
import { ChevronLeft, ChevronRight, Landmark, ArrowRight, MapPin } from 'lucide-react';

export function AttractionsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8 py-4">
      {/* Header with Title & Scroll Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peacock-500/10 text-peacock-400 text-xs font-semibold uppercase tracking-wider border border-peacock-500/20">
            <Landmark className="w-3.5 h-3.5" />
            <span>Famous Landmarks & Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
            Attractions Worth a <span className="gold-gradient-text">Thousand Stories</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Explore iconic stone fortresses, sacred temples, and extraordinary natural wonders across India.
          </p>
        </div>

        {/* Scroll Control Buttons */}
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

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1"
      >
        {ATTRACTIONS.map((item) => (
          <div
            key={item.id}
            className="w-[280px] sm:w-[320px] shrink-0 snap-start glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Hero Image Container */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 bg-saffron-500 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                {item.category}
              </div>

              {/* State Badge */}
              <div className="absolute bottom-3 left-3 text-xs text-peacock-300 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                <span>{item.state}</span>
              </div>
            </div>

            {/* Simple Card Content (Attraction Name + Explore Link) */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors leading-snug">
                {item.name}
              </h3>

              {/* Minimal Explore CTA */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Spotlight Landmark</span>
                <Link
                  href={`/destinations/${item.stateSlug}/${item.citySlug}`}
                  className="bg-saffron-500/10 hover:bg-saffron-500 text-saffron-400 hover:text-royal-950 font-bold px-3.5 py-1.5 rounded-lg border border-saffron-500/30 text-xs flex items-center gap-1.5 transition-all"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
