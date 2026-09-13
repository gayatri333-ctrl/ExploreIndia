'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DESTINATION_CITIES } from '@/lib/data/cities-facts';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight, Lightbulb, Compass } from 'lucide-react';

export function DestinationsBucketList() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8 py-4">
      {/* Header with Title & Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider border border-saffron-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Bucket List Destinations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
            Destinations for Every <span className="gold-gradient-text">Bucket List</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Uncover original heritage facts, architectural wonders, and timeless stories behind India&apos;s most captivating cities.
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

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 -mx-1"
      >
        {DESTINATION_CITIES.map((city) => {
          const zoneSlug = city.zone.toLowerCase().replace(/\s+/g, '-');
          return (
            <div
              key={city.id}
              className="w-[300px] sm:w-[340px] shrink-0 snap-start glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hero Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 640px) 300px, 340px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/30 to-transparent" />

                {/* State & Zone Badge */}
                <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-saffron-400 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{city.state} • {city.zone}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                      <Link href={`/destinations/${zoneSlug}/${city.stateSlug}/${city.citySlug}`}>
                        {city.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 italic line-clamp-1">
                    {city.tagline}
                  </p>

                  {/* Did You Know Bullet Facts */}
                  <div className="bg-royal-950/80 p-3.5 rounded-xl border border-white/5 space-y-2 mt-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-saffron-400 uppercase tracking-wider">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Did You Know?</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {city.facts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-saffron-500 font-bold shrink-0 mt-0.5">•</span>
                          <span className="line-clamp-2">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Discover More CTA Link */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[11px] text-slate-400">City Bucket Guide</span>
                  <Link
                    href={`/destinations/${zoneSlug}/${city.stateSlug}/${city.citySlug}`}
                    className="text-saffron-400 hover:text-white flex items-center gap-1.5 group/link transition-colors"
                  >
                    <span>Discover More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
