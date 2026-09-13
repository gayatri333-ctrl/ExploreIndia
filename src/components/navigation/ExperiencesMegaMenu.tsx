'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Compass, Shield, Flame, TreePine, Mountain, Utensils, Stethoscope, Home } from 'lucide-react';
import { EXPERIENCES_DATA, ExperienceCategoryData } from '@/lib/data/incredible-india-data';

interface ExperiencesMegaMenuProps {
  onClose: () => void;
}

const CATEGORY_ICONS: Record<string, any> = {
  heritage: Shield,
  spiritual: Flame,
  wildlife: TreePine,
  adventure: Mountain,
  gastronomy: Utensils,
  wellness: Stethoscope,
  rural: Home,
};

export default function ExperiencesMegaMenu({ onClose }: ExperiencesMegaMenuProps) {
  const [activeSlug, setActiveSlug] = useState<string>('heritage');

  const activeExp = EXPERIENCES_DATA.find((e) => e.slug === activeSlug) || EXPERIENCES_DATA[0];

  return (
    <div className="w-full bg-royal-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl text-slate-200 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif tracking-wide">
                Explore Travel Experiences
              </h2>
              <p className="text-xs text-slate-400">
                Categorized by 7 core experience themes across India
              </p>
            </div>
          </div>

          <Link
            href="/experiences"
            onClick={onClose}
            className="text-xs font-semibold text-saffron-400 hover:text-white flex items-center gap-1 transition"
          >
            <span>All Experience Themes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 7 Experience Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Category Selector Buttons */}
          <div className="space-y-1 md:border-r border-white/10 md:pr-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              7 Core Categories
            </div>
            {EXPERIENCES_DATA.map((exp) => {
              const Icon = CATEGORY_ICONS[exp.slug] || Sparkles;
              const isActive = exp.slug === activeSlug;
              return (
                <button
                  key={exp.slug}
                  onClick={() => setActiveSlug(exp.slug)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-saffron-500 text-royal-950 font-bold shadow-md'
                      : 'text-slate-300 hover:bg-royal-900/80 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{exp.name}</span>
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-royal-950' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Category Display (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
              <div>
                <h3 className="text-lg font-bold text-white font-serif">{activeExp.name} Experiences</h3>
                <p className="text-xs text-saffron-300 italic font-serif">{activeExp.tagline}</p>
              </div>
              <Link
                href={`/experiences/${activeExp.slug}`}
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-saffron-500 hover:bg-saffron-600 text-royal-950 font-bold text-xs shadow-glow-saffron transition flex items-center gap-1 self-start sm:self-auto"
              >
                <span>View {activeExp.name} Category Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sub-themes & Featured Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeExp.featuredCities.map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/destinations/${city.zoneSlug}/${city.stateSlug}/${city.citySlug}`}
                  onClick={onClose}
                  className="glass-card rounded-xl overflow-hidden group border border-white/10 hover:border-saffron-500/40 transition"
                >
                  <div className="relative h-28 w-full overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.cityName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                    <span className="absolute top-2 left-2 text-[10px] bg-royal-950/80 text-saffron-300 px-2 py-0.5 rounded border border-white/10 font-semibold">
                      {city.stateName}
                    </span>
                  </div>
                  <div className="p-3 space-y-1">
                    <h4 className="text-xs font-bold text-white group-hover:text-saffron-400 transition-colors font-serif">
                      {city.cityName}
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2">{city.snippet}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sub-Themes Chips */}
            <div className="pt-2 border-t border-white/5 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Popular Sub-Themes:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeExp.subThemes.map((st) => (
                  <span
                    key={st}
                    className="text-[11px] bg-royal-900/90 text-slate-300 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
