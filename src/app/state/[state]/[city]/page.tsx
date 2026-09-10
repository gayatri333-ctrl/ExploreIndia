import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { STATES_BY_ZONE } from '@/lib/data/navigation-data';
import { MapPin, ArrowLeft, ArrowRight, Sparkles, Sun, Compass, Landmark } from 'lucide-react';

export async function generateMetadata({ params }: { params: { state: string; city: string } }) {
  const cityName = params.city.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${cityName} City Travel Guide | ExploreIndia`,
    description: `Complete travel guide for ${cityName}: Top sights, best time to visit, heritage walks, and local experiences.`,
  };
}

export default function CityDetailPage({ params }: { params: { state: string; city: string } }) {
  const cityName = params.city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <Link
            href={`/state/${params.state}`}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-marigold-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to State Overview</span>
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            {cityName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">City Guide</span>
          </h1>

          <div className="text-sm text-slate-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-marigold-400" />
            <span>Destination Spotlight & Heritage Trail</span>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400">
              <Landmark className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white font-serif">Historical Heritage</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore royal palaces, fort ramparts, and UNESCO World Heritage sites throughout {cityName}.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sun className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white font-serif">Best Time to Visit</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              October to March offers pleasant weather ideal for city walking tours and outdoor sightseeing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white font-serif">Culinary Highlights</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Taste authentic regional delicacies, street food crawls, and royal banquets in {cityName}.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href={`/state/${params.state}`} className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to State Overview</span>
          </Link>
          <Link href="/plan/itineraries" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Find Tour Itineraries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
