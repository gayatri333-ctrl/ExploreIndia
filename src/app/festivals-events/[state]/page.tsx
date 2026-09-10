import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPREHENSIVE_EVENTS, ComprehensiveEvent } from '@/lib/data/events-data';
import { CalendarDays, MapPin, ArrowRight, ArrowLeft, Sparkles, Compass } from 'lucide-react';

export async function generateMetadata({ params }: { params: { state: string } }) {
  const stateName = params.state.replace(/-/g, ' ').toUpperCase();
  return {
    title: `${stateName} Festivals & Events Calendar | ExploreIndia`,
    description: `Discover cultural festivals, monastic fairs, classical dance performances, and state events in ${stateName}.`,
  };
}

export default function StateFestivalsPage({ params }: { params: { state: string } }) {
  const stateParam = params.state.toLowerCase();
  const matchedEvents: ComprehensiveEvent[] = COMPREHENSIVE_EVENTS.filter(
    (evt: ComprehensiveEvent) =>
      evt.stateSlug.toLowerCase() === stateParam ||
      evt.stateName.toLowerCase().replace(/[^a-z0-9]+/g, '-') === stateParam ||
      evt.stateName.toLowerCase() === stateParam
  );

  const displayEvents = matchedEvents.length > 0 ? matchedEvents : COMPREHENSIVE_EVENTS.slice(0, 4);
  const stateDisplayName = matchedEvents[0]?.stateName || params.state.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <Link
            href="/festivals-events"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-marigold-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Festivals & Events</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-marigold-400 text-xs font-semibold uppercase">
            <CalendarDays className="w-4 h-4" />
            <span>Regional Calendar</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Festivals & Events in <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">{stateDisplayName}</span>
          </h1>

          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Live cultural calendar of sacred melas, traditional celebrations, music festivals, and heritage events in {stateDisplayName}.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayEvents.map((evt: ComprehensiveEvent) => (
            <div
              key={evt.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-marigold-500/40 transition shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-marigold-500/15 border border-marigold-500/30 text-marigold-300 text-xs font-bold">
                    {evt.category}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{evt.startDate}</span>
                </div>

                <h2 className="text-xl font-bold text-white font-serif">{evt.title}</h2>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-marigold-400" />
                  <span>{evt.locationVenue}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{evt.shortDescription}</p>
              </div>

              <Link
                href={`/festivals-events/${evt.stateSlug}/${evt.slug}`}
                className="w-full py-2.5 rounded-lg bg-slate-950 hover:bg-marigold-500 hover:text-slate-950 text-marigold-400 border border-slate-800 hover:border-marigold-500 text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>View Event Details & Timings</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/festivals-events" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>All Festivals Across India</span>
          </Link>
          <Link href={`/state/${params.state}`} className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Explore {stateDisplayName} Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
