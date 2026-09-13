import Link from 'next/link';
import Image from 'next/image';
import { SAMPLE_ITINERARIES } from '@/lib/data/itineraries';
import { Map, Clock, MapPin, Sparkles, ArrowRight, Compass } from 'lucide-react';

export const metadata = {
  title: 'Curated India Travel Itineraries | ExploreIndia',
  description: 'Discover 13+ handcrafted day-by-day travel itineraries for Golden Triangle, Himalayan trails, Kerala backwaters, and Rajasthan forts.',
};

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Map className="w-4 h-4" />
            <span>Handcrafted Day-by-Day Routes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Curated India <span className="gold-gradient-text">Itineraries</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Choose from 13+ expert-verified itineraries ranging from 2-day quick weekend escapes to 14-day grand pan-India expeditions.
          </p>
        </div>
      </section>

      {/* Itineraries List */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_ITINERARIES.map((item) => (
            <article
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-emerald-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-emerald-500 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                    {item.durationBadge}
                  </span>
                  <span className="bg-royal-950/80 backdrop-blur-md text-peacock-300 border border-white/10 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {item.region} Zone
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-saffron-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.interest} Theme</span>
                  </div>

                  <h2 className="text-lg font-bold text-white font-serif group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                    <Link href={`/itineraries/${item.slug}`}>{item.title}</Link>
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Highlights:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {item.fullHighlights.slice(0, 2).map((hl, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                        <span className="truncate">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 text-[11px]">{item.tripLength}</span>
                  <Link
                    href={`/itineraries/${item.slug}`}
                    className="text-emerald-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Day Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
