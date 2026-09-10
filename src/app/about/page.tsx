import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Compass, Sparkles, MapPin, Award, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: 'About ExploreIndia | Official Cultural & Destination Platform',
  description: 'ExploreIndia is India\'s premier digital tourism discovery engine celebrating 28 states, 8 union territories, royal heritage, and wildlife reserves.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-marigold-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Discover Extraordinary India</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">ExploreIndia</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Connecting global travelers to India&apos;s rich tapestry of 28 states, 8 Union Territories, UNESCO World Heritage monuments, spiritual trails, national parks, and vibrant festival celebrations.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <MapPin className="w-6 h-6 text-marigold-400" />
            <h2 className="text-base font-bold text-white font-serif">Comprehensive Coverage</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete guides for all 28 states and 8 union territories, from Himalayan heights to coastal lagoons.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h2 className="text-base font-bold text-white font-serif">Cultural Heritage</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curated festival calendars, royal palace walks, monastic retreats, and traditional handloom trails.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h2 className="text-base font-bold text-white font-serif">Official Information</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verified helpline numbers, e-Visa application guidance, and official tourist assistance desks.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
