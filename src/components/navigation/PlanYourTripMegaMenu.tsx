'use client';

import Link from 'next/link';
import { Compass, Info, Plane, Sparkles, ArrowRight, ShieldCheck, Sun, DollarSign, CalendarCheck, PhoneCall, HelpCircle, MapPin } from 'lucide-react';
import { PLAN_YOUR_TRIP_HUB } from '@/lib/data/incredible-india-data';

interface PlanYourTripMegaMenuProps {
  onClose: () => void;
}

export default function PlanYourTripMegaMenu({ onClose }: PlanYourTripMegaMenuProps) {
  return (
    <div className="w-full bg-royal-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl text-slate-200 animate-fadeIn font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif tracking-wide">
                Plan Your Trip to India
              </h2>
              <p className="text-xs text-slate-400">
                Weather & seasons, currency guide, travel essentials, and handcrafted itineraries
              </p>
            </div>
          </div>

          <Link
            href="/plan-your-trip"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-royal-950 font-bold text-xs shadow-glow-emerald transition flex items-center gap-1.5"
          >
            <span>Visit Plan Your Trip Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Pillar 1: Weather & Seasons */}
          <div className="glass-card rounded-xl p-4 space-y-3 border border-white/10 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sun className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-serif">Weather & Seasons</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Monsoon, winter & summer travel advice across mountain and coastal zones.
              </p>
            </div>
            <Link
              href="/plan/weather"
              onClick={onClose}
              className="text-xs font-semibold text-amber-400 hover:text-white flex items-center gap-1 pt-2 border-t border-white/5"
            >
              <span>Weather Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Pillar 2: Currency & Money */}
          <div className="glass-card rounded-xl p-4 space-y-3 border border-white/10 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                <DollarSign className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-serif">Currency & Payments</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Indian Rupee (INR ₹) exchange rates, ATM acceptance, and digital UPI guides.
              </p>
            </div>
            <Link
              href="/plan/currency"
              onClick={onClose}
              className="text-xs font-semibold text-saffron-400 hover:text-white flex items-center gap-1 pt-2 border-t border-white/5"
            >
              <span>Currency Converter</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Pillar 3: Essentials & e-Visa */}
          <div className="glass-card rounded-xl p-4 space-y-3 border border-white/10 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-serif">Essentials & e-Visa</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                24/7 Helpline 1363, online e-Tourist Visa guidance, and Info Centres.
              </p>
            </div>
            <Link
              href="/plan/visa-guide"
              onClick={onClose}
              className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center gap-1 pt-2 border-t border-white/5"
            >
              <span>e-Visa Step-by-Step</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Pillar 4: Curated Itineraries */}
          <div className="glass-card rounded-xl p-4 space-y-3 border border-white/10 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Plane className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white font-serif">Curated Itineraries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                3-day, 7-day & 14-day Golden Triangle, Kerala backwater, and Himalayan trails.
              </p>
            </div>
            <Link
              href="/itineraries"
              onClick={onClose}
              className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1 pt-2 border-t border-white/5"
            >
              <span>Browse All Itineraries</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Helpline Banner */}
        <div className="bg-royal-900/80 rounded-xl p-4 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-saffron-400" />
            <span>24/7 Official Tourist Helpline: <strong className="text-white font-mono">1800-11-1363 / 1363</strong> (Multilingual)</span>
          </div>
          <Link href="/plan/emergency" onClick={onClose} className="text-peacock-300 hover:text-white font-semibold flex items-center gap-1">
            <span>View Emergency Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
