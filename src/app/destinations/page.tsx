import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DESTINATION_CITIES } from '@/lib/data/cities-facts';
import { MapPin, Globe, Lightbulb, ArrowRight, Sparkles, Compass } from 'lucide-react';

export const metadata = {
  title: 'All India Destinations & City Guides | ExploreIndia',
  description: 'Explore 16+ top destination cities across India, featuring heritage facts, regional culture, and state guides.',
};

const ZONES = [
  { name: 'North', desc: 'Himalayan peaks, royal forts & spiritual riverbanks (Rajasthan, Punjab, Himachal, Ladakh)' },
  { name: 'South', desc: 'Ancient Dravidian temples, backwater lagoons & spice hills (Kerala, Tamil Nadu, Karnataka)' },
  { name: 'West', desc: 'White salt deserts, golden beaches & vibrant street life (Gujarat, Goa, Maharashtra)' },
  { name: 'East', desc: 'Cultural capitals, tea gardens & coastal heritage (West Bengal, Odisha)' },
  { name: 'North East', desc: 'Unexplored wilderness, tribal culture & Kaziranga rhinos (Assam, Meghalaya)' },
  { name: 'Central', desc: 'Heart of India, tiger reserves & Khajuraho heritage (Madhya Pradesh)' },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peacock-500/10 border border-peacock-500/30 text-peacock-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Destinations Directory & City Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Explore <span className="gold-gradient-text">India Destinations</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Discover destinations across 6 geographic zones, 28 states, and historical capitals with curated heritage facts and travel guides.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16 flex-1 w-full">
        {/* Zones Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Globe className="w-5 h-5 text-peacock-400" />
            <span>6 Travel Zones</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZONES.map((zone) => (
              <div key={zone.name} className="glass-card rounded-xl p-6 space-y-3 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-peacock-400 uppercase tracking-widest bg-peacock-500/10 px-2.5 py-1 rounded border border-peacock-500/20">
                    {zone.name} Zone
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-serif">{zone.name} India</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Destination Cities Grid */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Featured <span className="gold-gradient-text">Cities & Bucket List Destinations</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Click any city to view authentic heritage facts and travel essentials.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATION_CITIES.map((city) => (
              <article
                key={city.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-peacock-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-peacock-300 border border-white/10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                    {city.state}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-serif group-hover:text-peacock-400 transition-colors">
                      <Link href={`/destinations/${city.stateSlug}/${city.citySlug}`}>{city.name}</Link>
                    </h3>
                    <p className="text-xs text-saffron-300 italic font-serif leading-relaxed line-clamp-2">
                      &ldquo;{city.tagline}&rdquo;
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <Lightbulb className="w-3.5 h-3.5 text-saffron-400" />
                      <span>Did You Know?</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {city.facts[0]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400 text-[11px]">{city.zone} Zone</span>
                    <Link
                      href={`/destinations/${city.stateSlug}/${city.citySlug}`}
                      className="text-peacock-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Discover Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
