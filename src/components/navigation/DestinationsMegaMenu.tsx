'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Trees,
  Compass,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Mountain,
  Landmark,
  Shield,
  Sun,
  Palmtree,
  ArrowLeft,
} from 'lucide-react';
import { STATES_BY_ZONE, NATIONAL_PARKS, StateData, ZONES } from '@/lib/data/navigation-data';

interface DestinationsMegaMenuProps {
  onClose: () => void;
}

const ZONE_ICONS: Record<string, any> = {
  North: Mountain,
  'North East': Trees,
  East: Landmark,
  Central: Shield,
  West: Sun,
  South: Palmtree,
};

export default function DestinationsMegaMenu({ onClose }: DestinationsMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<'states' | 'parks'>('states');
  const [selectedZone, setSelectedZone] = useState<string>('North');
  const [drilledState, setDrilledState] = useState<StateData | null>(null);

  const zonesList = ZONES;

  return (
    <div className="w-full bg-primary-dark-900/98 backdrop-blur-xl border-b border-slate-700/60 shadow-2xl text-slate-200 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* Top Tab Bar & Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif tracking-wide">
                Destinations of India
              </h2>
              <p className="text-xs text-slate-400">
                Explore 28 States, 8 Union Territories & Tiger Reserves
              </p>
            </div>
          </div>

          {/* Two Tabs: States and UTs vs National Parks */}
          <div className="inline-flex rounded-full bg-slate-950 p-1 border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => { setActiveTab('states'); setDrilledState(null); }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition ${
                activeTab === 'states'
                  ? 'bg-marigold-500 text-primary-dark-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>States & UTs</span>
            </button>

            <button
              onClick={() => { setActiveTab('parks'); setDrilledState(null); }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition ${
                activeTab === 'parks'
                  ? 'bg-emerald-500 text-primary-dark-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trees className="w-3.5 h-3.5" />
              <span>National Parks ({NATIONAL_PARKS.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: States & UTs (6 Zone Columns & State City Drilldown) */}
        {activeTab === 'states' && (
          <div>
            {drilledState ? (
              /* State City Drilldown View */
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setDrilledState(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition border border-slate-700"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Zones</span>
                  </button>
                  <span className="text-slate-500">/</span>
                  <span className="text-xs text-marigold-400 font-semibold">{drilledState.zone} Zone</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-sm font-bold text-white font-serif">{drilledState.name}</span>
                </div>

                <div className="p-5 bg-slate-950/70 rounded-md border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <div className="text-lg font-bold text-white font-serif flex items-center gap-2">
                        <span>{drilledState.name}</span>
                        <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {drilledState.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Capital: <strong className="text-slate-200">{drilledState.capital}</strong></p>
                    </div>
                    <Link
                      href={`/destinations?state=${drilledState.id}`}
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950 font-bold text-xs transition"
                    >
                      <span>Explore Full {drilledState.name} Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-marigold-400" />
                      <span>Popular Cities & Key Highlights</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      {drilledState.popularCities.map((city, idx) => (
                        <Link
                          key={idx}
                          href={`/destinations?state=${drilledState.id}&city=${encodeURIComponent(city.name)}`}
                          onClick={onClose}
                          className="p-3 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-marigold-500/40 transition group"
                        >
                          <div className="text-sm font-semibold text-white group-hover:text-marigold-300 flex items-center justify-between">
                            <span>{city.name}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-marigold-400 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1">
                            {city.tag}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* 6 Zone Columns Layout */
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {zonesList.map((z) => {
                  const ZoneIcon = ZONE_ICONS[z.id] || Compass;
                  const statesInZone = STATES_BY_ZONE[z.id] || [];
                  const isZoneActive = selectedZone === z.id;

                  return (
                    <div
                      key={z.id}
                      className={`p-3 rounded-md border transition-all ${
                        isZoneActive
                          ? 'bg-slate-950/80 border-marigold-500/40 shadow-lg'
                          : 'bg-slate-950/30 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {/* Zone Header with Icon */}
                      <button
                        onClick={() => setSelectedZone(z.id)}
                        className="w-full text-left flex items-center gap-2 pb-2 mb-2 border-b border-slate-800 group"
                      >
                        <div className="w-7 h-7 rounded bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400 group-hover:bg-marigold-500 group-hover:text-primary-dark-950 transition">
                          <ZoneIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-marigold-300 transition">
                            {z.id}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {statesInZone.length} States & UTs
                          </div>
                        </div>
                      </button>

                      {/* States list in this zone */}
                      <div className="space-y-1.5">
                        {statesInZone.map((state) => (
                          <div
                            key={state.id}
                            className="flex items-center justify-between text-xs py-1 px-1.5 rounded hover:bg-slate-800/80 transition cursor-pointer group"
                            onClick={() => setDrilledState(state)}
                          >
                            <span className="text-slate-300 group-hover:text-marigold-300 font-medium truncate">
                              {state.name}
                            </span>
                            <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                              Cities &gt;
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: National Parks */}
        {activeTab === 'parks' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {NATIONAL_PARKS.map((park) => (
                <Link
                  key={park.id}
                  href={`/destinations?park=${park.id}`}
                  onClick={onClose}
                  className="p-4 rounded-md bg-slate-950/80 hover:bg-slate-900 border border-emerald-500/20 hover:border-emerald-500/50 transition group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {park.zone} • {park.state}
                    </span>
                    <Trees className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition font-serif">
                    {park.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {park.highlight}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {park.keyAnimals.map((animal, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-full"
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
