import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RURAL_DESTINATIONS } from '@/lib/data/rural-destinations';
import { Trees, Compass, ArrowRight, MapPin, Heart } from 'lucide-react';

export const metadata = {
  title: 'Rural Tourism & Village Eco-Stays | ExploreIndia',
  description: 'Discover authentic Indian village homestays, living root bridges, organic farm experiences, and indigenous craft traditions.',
};

export default function RuralTourismPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-semibold uppercase tracking-wider">
            <Trees className="w-4 h-4" />
            <span>Sustainable Rural Encounters</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Lesser Known Wonders: <span className="gold-gradient-text">Rural Tourism</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Step off the beaten track to experience authentic village life, organic farming, living root bridges, and warm indigenous hospitality.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RURAL_DESTINATIONS.map((village) => (
            <article
              key={village.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-lime-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={village.image}
                  alt={village.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-lime-500/90 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                  {village.state}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-lime-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{village.state} Rural Eco-Zone</span>
                  </div>

                  <h2 className="text-xl font-bold text-white font-serif group-hover:text-lime-400 transition-colors">
                    {village.name}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {village.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/state/${village.stateSlug}`}
                    className="text-lime-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Explore State Region</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs">
          <Link href="/destinations" className="text-saffron-400 hover:text-saffron-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to All Destinations</span>
          </Link>
          <Link href="/plan/crafts" className="text-peacock-400 hover:text-peacock-300 font-bold flex items-center gap-1.5">
            <span>Discover Exquisite Handicrafts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
