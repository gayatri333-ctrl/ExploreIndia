import Link from 'next/link';
import Image from 'next/image';
import { ZONES_DATA } from '@/lib/data/incredible-india-data';
import { MapPin, ArrowLeft, ArrowRight, Globe, Compass } from 'lucide-react';

interface ZonePageProps {
  params: {
    zone: string;
  };
}

export async function generateMetadata({ params }: ZonePageProps) {
  const zone = ZONES_DATA.find((z) => z.zoneSlug === params.zone);
  const zoneName = zone ? zone.zoneName : params.zone.replace(/-/g, ' ').toUpperCase();

  return {
    title: `${zoneName} Destinations & Travel Guide | Incredible India`,
    description: zone ? zone.description : `Explore ${zoneName} state destinations and cultural highlights.`,
  };
}

export default function IncredibleIndiaZonePage({ params }: ZonePageProps) {
  const zone = ZONES_DATA.find((z) => z.zoneSlug === params.zone);

  const activeZone = zone || {
    zoneSlug: params.zone,
    zoneName: params.zone.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    tagline: 'Regional Culture, Heritage & Natural Wonders',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    description: 'Immerse yourself in authentic Indian heritage, cultural festivals, and breathtaking natural wonders.',
    states: []
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={activeZone.heroImage}
            alt={activeZone.zoneName}
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link href="/destinations" className="text-slate-400 hover:text-saffron-400 transition">
              Destinations
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{activeZone.zoneName}</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peacock-500/10 border border-peacock-500/30 text-peacock-400 text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Geographic Zone</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
              {activeZone.zoneName} <span className="gold-gradient-text">Destinations</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-serif leading-relaxed">
              {activeZone.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* States List */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
            <MapPin className="w-5 h-5 text-saffron-400" />
            <span>States & Territories in {activeZone.zoneName}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeZone.states.map((state) => (
              <div key={state.stateSlug} className="glass-card rounded-2xl p-6 space-y-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-serif">{state.stateName}</h3>
                  <Link
                    href={`/destinations/${activeZone.zoneSlug}/${state.stateSlug}`}
                    className="text-xs font-semibold text-peacock-400 hover:text-white flex items-center gap-1"
                  >
                    <span>View State Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{state.description}</p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {state.cities.map((city) => (
                    <Link
                      key={city.citySlug}
                      href={`/destinations/${activeZone.zoneSlug}/${state.stateSlug}/${city.citySlug}`}
                      className="px-3 py-1.5 rounded-lg bg-royal-900/80 hover:bg-peacock-500/20 text-slate-200 hover:text-peacock-300 text-xs font-semibold border border-white/10 transition flex items-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-peacock-400" />
                      <span>{city.cityName}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back Actions */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs font-semibold">
          <Link
            href="/destinations"
            className="text-saffron-400 hover:text-saffron-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2.5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Destinations</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
