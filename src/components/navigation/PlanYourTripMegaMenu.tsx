'use client';

import Link from 'next/link';
import { Compass, Info, Plane, Sparkles, ArrowRight, ShieldCheck, Sun, DollarSign, CalendarCheck, PhoneCall, HelpCircle } from 'lucide-react';
import { PLAN_YOUR_TRIP_LINKS } from '@/lib/data/navigation-data';

interface PlanYourTripMegaMenuProps {
  onClose: () => void;
}

export default function PlanYourTripMegaMenu({ onClose }: PlanYourTripMegaMenuProps) {
  return (
    <div className="w-full bg-primary-dark-900/98 backdrop-blur-xl border-b border-slate-700/60 shadow-2xl text-slate-200 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-9 h-9 rounded-md bg-vermilion-500/10 border border-vermilion-500/30 flex items-center justify-center text-vermilion-500">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white font-serif tracking-wide">
              Plan Your Trip to India
            </h2>
            <p className="text-xs text-slate-400">
              Essential practical guides, e-Visa information, airport connectivity & curated itineraries
            </p>
          </div>
        </div>

        {/* 3 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Practical Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-marigold-400 border-b border-slate-800 pb-2">
              <Info className="w-4 h-4" />
              <span>Practical Information</span>
            </div>
            <div className="space-y-2">
              {PLAN_YOUR_TRIP_LINKS.practicalInfo.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-3 p-3 rounded-md bg-slate-950/40 hover:bg-slate-800/80 border border-slate-800/60 hover:border-marigold-500/40 transition group"
                >
                  <div className="w-7 h-7 rounded bg-marigold-500/10 border border-marigold-500/20 flex items-center justify-center text-marigold-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <HelpCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-marigold-300 transition">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Travel */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-2">
              <Plane className="w-4 h-4" />
              <span>Travel & Logistics</span>
            </div>
            <div className="space-y-2">
              {PLAN_YOUR_TRIP_LINKS.travelGuide.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-3 p-3 rounded-md bg-slate-950/40 hover:bg-slate-800/80 border border-slate-800/60 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Explore ExploreIndia */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-2">
              <Sparkles className="w-4 h-4" />
              <span>Explore ExploreIndia</span>
            </div>
            <div className="space-y-2">
              {PLAN_YOUR_TRIP_LINKS.exploreSite.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-3 p-3 rounded-md bg-slate-950/40 hover:bg-slate-800/80 border border-slate-800/60 hover:border-emerald-500/40 transition group"
                >
                  <div className="w-7 h-7 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-950/80 rounded-md p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-marigold-400" />
            <span>24/7 Official Tourist Helpline: <strong className="text-white">1800-11-1363 / 1363</strong> (Multilingual)</span>
          </div>
          <Link href="/plan/itineraries" onClick={onClose} className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1">
            <span>Browse All 14-Day Golden Triangle Itineraries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
