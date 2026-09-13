import Link from 'next/link';
import Image from 'next/image';
import { HANDICRAFTS } from '@/lib/data/crafts';
import { Palette, Compass, ArrowRight, Sparkles, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Exquisite Handicrafts & Textiles of India | ExploreIndia',
  description: 'Explore 17+ Indian handlooms, Pashmina shawls, Kanjeevaram silk, Terracotta art, Tanjore gold leaf paintings & artisan heritage.',
};

export default function CraftsPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-4 h-4" />
            <span>Masterwork Artisan Traditions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Exquisite Crafts & <span className="gold-gradient-text">Textiles of India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            India is home to thousands of years of living craft traditions, from royal handloom silk weaves and gold leaf painting to lost-wax metal casting and glazed pottery.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HANDICRAFTS.map((craft) => (
            <article
              key={craft.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-fuchsia-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-fuchsia-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                    {craft.category}
                  </span>
                  <span className="bg-royal-950/80 backdrop-blur-md text-peacock-300 border border-white/10 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {craft.state}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-fuchsia-400 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{craft.state} Heritage Craft</span>
                  </div>

                  <h2 className="text-xl font-bold text-white font-serif group-hover:text-fuchsia-400 transition-colors">
                    {craft.name}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {craft.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/state/${craft.stateSlug}`}
                    className="text-fuchsia-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Explore {craft.state}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs">
          <Link href="/plan/rural-tourism" className="text-saffron-400 hover:text-saffron-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Discover Rural Tourism Villages</span>
          </Link>
          <Link href="/destinations" className="text-peacock-400 hover:text-peacock-300 font-bold flex items-center gap-1.5">
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
