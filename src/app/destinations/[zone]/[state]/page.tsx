import Link from 'next/link';
import Image from 'next/image';
import { ZONES_DATA } from '@/lib/data/incredible-india-data';
import { MapPin, ArrowLeft, ArrowRight, Lightbulb, Compass, Globe } from 'lucide-react';

interface StatePageProps {
  params: {
    zone: string;
    state: string;
  };
}

export async function generateMetadata({ params }: StatePageProps) {
  const zone = ZONES_DATA.find((z) => z.zoneSlug === params.zone);
  const state = zone?.states.find((s) => s.stateSlug === params.state);

  const stateName = state ? state.stateName : params.state.replace(/-/g, ' ').toUpperCase();

  return {
    title: `${stateName} Destinations & Travel Guide | Incredible India`,
    description: state ? state.description : `Explore ${stateName} state destinations and cultural highlights.`,
  };
}

export default function IncredibleIndiaStatePage({ params }: StatePageProps) {
  const zone = ZONES_DATA.find((z) => z.zoneSlug === params.zone);
  const state = zone?.states.find((s) => s.stateSlug === params.state);

  const activeState = state || {
    stateSlug: params.state,
    stateName: params.state.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    zoneSlug: params.zone,
    zoneName: params.zone.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    capital: 'State Capital',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    description: 'Immerse yourself in heritage monuments, local artisan crafts, and rich regional culinary traditions.',
    cities: []
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={activeState.heroImage}
            alt={activeState.stateName}
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
            <Link href={`/destinations/${activeState.zoneSlug}`} className="text-slate-400 hover:text-saffron-400 transition capitalize">
              {activeState.zoneName}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{activeState.stateName}</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Capital: {activeState.capital} • {activeState.zoneName}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
              {activeState.stateName} <span className="gold-gradient-text">Destinations</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-serif leading-relaxed">
              {activeState.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Cities Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Globe className="w-5 h-5 text-peacock-400" />
            <span>Featured Cities in {activeState.stateName}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeState.cities.map((city) => (
              <article
                key={city.citySlug}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.cityName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                      <Link href={`/destinations/${activeState.zoneSlug}/${activeState.stateSlug}/${city.citySlug}`}>
                        {city.cityName}
                      </Link>
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
                    <span className="text-slate-400 text-[11px]">{activeState.stateName}</span>
                    <Link
                      href={`/destinations/${activeState.zoneSlug}/${activeState.stateSlug}/${city.citySlug}`}
                      className="text-saffron-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>View City Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Back and Navigation Actions */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs font-semibold">
          <Link
            href={`/destinations/${activeState.zoneSlug}`}
            className="text-saffron-400 hover:text-saffron-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2.5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {activeState.zoneName}</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
