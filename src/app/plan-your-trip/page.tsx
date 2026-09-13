'use client';

import Link from 'next/link';
import { PLAN_YOUR_TRIP_HUB } from '@/lib/data/incredible-india-data';
import { SAMPLE_ITINERARIES } from '@/lib/data/itineraries';
import { TravelTools } from '@/components/TravelTools';
import { Compass, Plane, ArrowRight } from 'lucide-react';

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Essential Travel Guide & Practical Toolkit</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
            {PLAN_YOUR_TRIP_HUB.heroTitle}
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            {PLAN_YOUR_TRIP_HUB.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-16 flex-1 w-full">
        {/* Interactive Travel Tools Component */}
        <TravelTools />

        {/* Curated Itineraries Preview */}
        <section id="itineraries" className="space-y-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Plane className="w-4 h-4" />
                <span>Pillar 4: Day-by-Day Travel Guides</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">Handcrafted Itineraries</h2>
            </div>
            <Link
              href="/itineraries"
              className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1"
            >
              <span>View All 13+ Itineraries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_ITINERARIES.slice(0, 3).map((it) => (
              <div key={it.id} className="glass-card rounded-2xl p-6 space-y-4 border border-white/10 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    {it.durationBadge}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif mt-2">{it.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{it.shortDescription}</p>
                </div>

                <Link
                  href={`/itineraries/${it.slug}`}
                  className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1 pt-3 border-t border-white/5"
                >
                  <span>Read Day Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
