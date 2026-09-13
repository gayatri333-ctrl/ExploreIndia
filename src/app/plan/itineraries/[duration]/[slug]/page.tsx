import Link from 'next/link';
import { ITINERARIES_DATA } from '@/app/plan/itineraries/page';
import { Map, MapPin, Clock, ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { duration: string; slug: string } }) {
  const itinerary = ITINERARIES_DATA.find((item) => item.duration === params.duration && item.slug === params.slug);
  if (!itinerary) return { title: 'Itinerary Not Found | ExploreIndia' };
  return {
    title: `${itinerary.title} | ExploreIndia Itineraries`,
    description: itinerary.subtitle,
  };
}

export default function ItineraryDetailPage({ params }: { params: { duration: string; slug: string } }) {
  const itinerary = ITINERARIES_DATA.find((item) => item.duration === params.duration && item.slug === params.slug);

  if (!itinerary) {
    // Return fallback sample itinerary if slug is dynamic
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
        <main className="max-w-4xl mx-auto px-4 py-28 space-y-6 flex-1 text-center">
          <h1 className="text-2xl font-bold font-serif text-white">Custom Curated Itinerary</h1>
          <p className="text-sm text-slate-400">Duration: {params.duration} | Route: {params.slug}</p>
          <Link href="/plan/itineraries" className="inline-flex items-center gap-2 text-marigold-400 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Itineraries</span>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <Link
            href="/plan/itineraries"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-marigold-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Itineraries</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
              {itinerary.durationLabel}
            </span>
            <span className="text-xs text-slate-400">{itinerary.zone} Zone Circuit</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            {itinerary.title}
          </h1>

          <div className="text-sm md:text-base font-medium text-marigold-400 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-marigold-400" />
            <span>{itinerary.subtitle}</span>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Key Highlights */}
        <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Trip Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            {itinerary.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Day by Day Schedule */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-marigold-400" />
            <span>Day-by-Day Detailed Schedule</span>
          </h2>

          <div className="space-y-6">
            {itinerary.days.map((dayItem) => (
              <div key={dayItem.day} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-marigold-500/20 border border-marigold-500/40 text-marigold-400 font-bold font-mono text-xs flex items-center justify-center">
                    D{dayItem.day}
                  </span>
                  <h3 className="text-base font-bold text-white font-serif">{dayItem.title}</h3>
                </div>
                <p className="text-xs text-slate-300 pl-11 leading-relaxed">{dayItem.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/itineraries" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Itineraries</span>
          </Link>
          <Link href="/plan/info-centres" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Explore Info Centres & Logistics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
