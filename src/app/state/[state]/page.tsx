import Link from 'next/link';
import { STATES_BY_ZONE, StateData } from '@/lib/data/navigation-data';
import { MapPin, Compass, ArrowRight, Sparkles, Building2, CalendarDays, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { state: string } }) {
  const allStates = Object.values(STATES_BY_ZONE).flat();
  const foundState = allStates.find(
    (s) => s.id.toLowerCase() === params.state.toLowerCase() || s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.state.toLowerCase()
  );
  if (!foundState) return { title: 'State Tourism Guide | ExploreIndia' };
  return {
    title: `${foundState.name} Tourism Guide & Attractions | ExploreIndia`,
    description: `Explore ${foundState.name} (${foundState.code}) - Capital: ${foundState.capital}. Popular cities, heritage sites, and festival guides.`,
  };
}

export default function StateDetailPage({ params }: { params: { state: string } }) {
  const allStates = Object.values(STATES_BY_ZONE).flat();
  const foundState = allStates.find(
    (s) =>
      s.id.toLowerCase() === params.state.toLowerCase() ||
      s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.state.toLowerCase()
  );

  const displayState: StateData = foundState || {
    id: params.state,
    name: params.state.replace(/-/g, ' ').toUpperCase(),
    code: 'IN',
    zone: 'North',
    capital: 'State Capital',
    popularCities: [
      { name: 'Capital City', tag: 'Heritage & Administrative Hub' },
      { name: 'Historic District', tag: 'Ancient Architecture & Temples' },
      { name: 'Nature Reserve', tag: 'Wildlife & Scenic Valleys' },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase">
              {displayState.code} • {displayState.zone} Zone
            </span>
            {displayState.isUT && (
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                Union Territory
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">{displayState.name}</span>
          </h1>

          <div className="text-sm text-slate-300 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-marigold-400" />
            <span>Capital City: <strong className="text-white">{displayState.capital}</strong></span>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Popular Cities */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold font-serif text-white">Popular Cities & Key Highlights</h2>
              <p className="text-xs text-slate-400">Discover top destinations across {displayState.name}</p>
            </div>
            <Link
              href={`/festivals-events/${displayState.id}`}
              className="text-xs font-bold text-marigold-400 hover:text-marigold-300 flex items-center gap-1"
            >
              <CalendarDays className="w-4 h-4" />
              <span>{displayState.name} Festivals</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {displayState.popularCities.map((city, idx) => (
              <Link
                key={idx}
                href={`/state/${displayState.id}/${encodeURIComponent(city.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}`}
                className="p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-marigold-500/50 transition group flex flex-col justify-between space-y-3 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white group-hover:text-marigold-300 transition font-serif">
                      {city.name}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-marigold-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{city.tag}</p>
                </div>
                <div className="text-[11px] font-semibold text-marigold-400 flex items-center gap-1 pt-2 border-t border-slate-800/80">
                  <span>View City Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/destinations" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to All Destinations</span>
          </Link>
          <Link href={`/festivals-events/${displayState.id}`} className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Explore {displayState.name} Festivals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
