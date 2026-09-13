'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Compass, ArrowRight, Globe, ChevronRight } from 'lucide-react';
import { ZONES_DATA, ZoneData } from '@/lib/data/incredible-india-data';

interface DestinationsMegaMenuProps {
  onClose: () => void;
}

export default function DestinationsMegaMenu({ onClose }: DestinationsMegaMenuProps) {
  const [activeZoneSlug, setActiveZoneSlug] = useState<string>('north');

  const activeZone = ZONES_DATA.find((z) => z.zoneSlug === activeZoneSlug) || ZONES_DATA[0];

  return (
    <div className="w-full bg-royal-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl text-slate-200 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-peacock-500/10 border border-peacock-500/30 flex items-center justify-center text-peacock-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif tracking-wide">
                Explore Destinations by Zone
              </h2>
              <p className="text-xs text-slate-400">
                28 States & 8 Union Territories categorized into 7 geographic zones
              </p>
            </div>
          </div>

          <Link
            href="/destinations"
            onClick={onClose}
            className="text-xs font-semibold text-peacock-400 hover:text-white flex items-center gap-1 transition"
          >
            <span>All Destinations Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 7 Zone Tabs + Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Zone Selector Column (7 Zones) */}
          <div className="space-y-1 md:border-r border-white/10 md:pr-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Zone / Region
            </div>
            {ZONES_DATA.map((zone) => {
              const isActive = zone.zoneSlug === activeZoneSlug;
              return (
                <button
                  key={zone.zoneSlug}
                  onClick={() => setActiveZoneSlug(zone.zoneSlug)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-peacock-500 text-white font-bold shadow-md'
                      : 'text-slate-300 hover:bg-royal-900/80 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{zone.zoneName}</span>
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Zone Content (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div>
                <h3 className="text-lg font-bold text-white font-serif">{activeZone.zoneName}</h3>
                <p className="text-xs text-saffron-300 italic font-serif">{activeZone.tagline}</p>
              </div>
              <Link
                href={`/destinations/${activeZone.zoneSlug}`}
                onClick={onClose}
                className="text-xs text-peacock-400 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Explore {activeZone.zoneName}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* States & Popular Cities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeZone.states.map((state) => (
                <div key={state.stateSlug} className="glass-card rounded-xl p-4 space-y-2 border border-white/10">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/destinations/${activeZone.zoneSlug}/${state.stateSlug}`}
                      onClick={onClose}
                      className="text-sm font-bold text-white hover:text-saffron-400 font-serif transition"
                    >
                      {state.stateName}
                    </Link>
                    {state.isUT && (
                      <span className="text-[10px] bg-saffron-500/20 text-saffron-300 px-2 py-0.5 rounded border border-saffron-500/30">
                        Union Territory
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-1">{state.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {state.cities.map((city) => (
                      <Link
                        key={city.citySlug}
                        href={`/destinations/${activeZone.zoneSlug}/${state.stateSlug}/${city.citySlug}`}
                        onClick={onClose}
                        className="text-[11px] bg-royal-950/80 hover:bg-peacock-500/20 text-slate-200 hover:text-peacock-300 px-2.5 py-1 rounded-md border border-white/10 hover:border-peacock-500/30 transition flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3 text-peacock-400" />
                        <span>{city.cityName}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
