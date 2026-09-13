'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PLAN_YOUR_TRIP_HUB } from '@/lib/data/incredible-india-data';
import { SAMPLE_ITINERARIES } from '@/lib/data/itineraries';
import {
  Compass,
  Sun,
  DollarSign,
  ShieldCheck,
  Plane,
  PhoneCall,
  ArrowRight,
  Calculator,
  Calendar,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

export default function PlanYourTripPage() {
  const [calcAmount, setCalcAmount] = useState<number>(100);
  const [calcCurrency, setCalcCurrency] = useState<string>('USD');

  const activeCurrObj = PLAN_YOUR_TRIP_HUB.currencies.find((c) => c.code === calcCurrency) || PLAN_YOUR_TRIP_HUB.currencies[1];
  const convertedINR = (calcAmount * activeCurrObj.rateToINR).toLocaleString('en-IN', { maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Essential Travel Guide & Logistics</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
            {PLAN_YOUR_TRIP_HUB.heroTitle}
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            {PLAN_YOUR_TRIP_HUB.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16 flex-1 w-full">
        {/* Quick Nav Anchors */}
        <div className="glass-card rounded-2xl p-4 border border-white/10 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-200">
          <a href="#weather" className="flex items-center gap-2 text-amber-400 hover:text-white transition">
            <Sun className="w-4 h-4" />
            <span>1. Weather & Seasons</span>
          </a>
          <a href="#currency" className="flex items-center gap-2 text-saffron-400 hover:text-white transition">
            <DollarSign className="w-4 h-4" />
            <span>2. Currency Converter</span>
          </a>
          <a href="#essentials" className="flex items-center gap-2 text-cyan-400 hover:text-white transition">
            <ShieldCheck className="w-4 h-4" />
            <span>3. Essentials & e-Visa</span>
          </a>
          <a href="#itineraries" className="flex items-center gap-2 text-emerald-400 hover:text-white transition">
            <Plane className="w-4 h-4" />
            <span>4. Handcrafted Itineraries</span>
          </a>
        </div>

        {/* Section 1: Weather & Seasons */}
        <section id="weather" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sun className="w-4 h-4" />
                <span>Pillar 1: Climate & Best Seasons</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">Weather & Seasons</h2>
            </div>
            <Link
              href="/plan/weather"
              className="text-xs font-semibold text-amber-400 hover:text-white flex items-center gap-1"
            >
              <span>Full Weather Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLAN_YOUR_TRIP_HUB.weatherSeasons.map((w, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 space-y-3 border border-white/10 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                    {w.temp}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif mt-2">{w.season}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Currency Converter */}
        <section id="currency" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-saffron-400 uppercase tracking-wider">
                <DollarSign className="w-4 h-4" />
                <span>Pillar 2: Financial Essentials</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">Currency Converter</h2>
            </div>
            <Link
              href="/plan/currency"
              className="text-xs font-semibold text-saffron-400 hover:text-white flex items-center gap-1"
            >
              <span>Full Currency Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Interactive Widget */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-saffron-500/30 bg-royal-900/60 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">Live Rate Estimator</h3>
                  <p className="text-xs text-slate-400">Estimate foreign exchange into Indian Rupees (INR ₹)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 block mb-1">Foreign Amount</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={calcAmount}
                      onChange={(e) => setCalcAmount(Number(e.target.value) || 0)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-royal-950 border border-white/10 text-white text-sm focus:border-saffron-500 outline-none font-mono"
                    />
                    <select
                      value={calcCurrency}
                      onChange={(e) => setCalcCurrency(e.target.value)}
                      className="px-3 py-2.5 rounded-xl bg-royal-950 border border-white/10 text-white text-xs font-bold font-mono focus:border-saffron-500 outline-none"
                    >
                      {PLAN_YOUR_TRIP_HUB.currencies.slice(1).map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code} ({c.symbol})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-royal-950 border border-saffron-500/30 space-y-1">
                  <div className="text-xs text-slate-400">Equivalent in Indian Rupees:</div>
                  <div className="text-2xl font-bold font-mono gold-gradient-text">
                    ₹ {convertedINR} INR
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Est. Rate: 1 {activeCurrObj.code} = ₹{activeCurrObj.rateToINR} INR
                  </div>
                </div>
              </div>
            </div>

            {/* Currency Info List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-serif">Payment & ATM Guidelines</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex gap-3 bg-royal-900/60 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>Cards Accepted:</strong> Visa, MasterCard, and American Express are accepted in major hotels, restaurants, and shopping malls.</span>
                </li>
                <li className="flex gap-3 bg-royal-900/60 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>ATM Access:</strong> International ATMs are widely available across all cities and airport arrival halls.</span>
                </li>
                <li className="flex gap-3 bg-royal-900/60 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                  <span><strong>Digital Payments (UPI):</strong> Tourists can use authorized PPI wallets for seamless UPI QR code payments at local stores.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Essentials & e-Visa */}
        <section id="essentials" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Pillar 3: Tourist Safety & e-Visa</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">Travel Essentials & Helpline</h2>
            </div>
            <Link
              href="/plan/visa-guide"
              className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center gap-1"
            >
              <span>View e-Visa Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLAN_YOUR_TRIP_HUB.essentials.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 space-y-3 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-serif">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Handcrafted Itineraries */}
        <section id="itineraries" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Plane className="w-4 h-4" />
                <span>Pillar 4: Day-by-Day Travel Guides</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-serif">Curated Itineraries</h2>
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
