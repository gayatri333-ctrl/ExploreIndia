import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ZONES_DATA } from '@/lib/data/incredible-india-data';
import { MapPin, ArrowLeft, ArrowRight, Sun, Landmark, Lightbulb, Compass, Sparkles, Calendar } from 'lucide-react';

interface CityPageProps {
  params: {
    zone: string;
    state: string;
    city: string;
  };
}

export async function generateMetadata({ params }: CityPageProps) {
  const zone = ZONES_DATA.find((z) => z.zoneSlug === params.zone);
  const state = zone?.states.find((s) => s.stateSlug === params.state);
  const city = state?.cities.find((c) => c.citySlug === params.city);

  const cityName = city ? city.cityName : params.city.replace(/-/g, ' ').toUpperCase();
  const stateName = state ? state.stateName : params.state.replace(/-/g, ' ').toUpperCase();

  return {
    title: `${cityName}, ${stateName} Travel Guide | Incredible India`,
    description: city ? city.tagline : `Explore ${cityName} in ${stateName}.`,
  };
}

export default function IncredibleIndiaCityPage({ params }: CityPageProps) {
  const zone = ZONES_DATA.find((z) => z.zoneSlug === params.zone);
  const state = zone?.states.find((s) => s.stateSlug === params.state);
  const city = state?.cities.find((c) => c.citySlug === params.city);

  // Fallback lookup if exact match wasn't found in initial list
  const activeCity = city || {
    citySlug: params.city,
    cityName: params.city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    stateSlug: params.state,
    stateName: params.state.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    zoneSlug: params.zone,
    zoneName: params.zone.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    tagline: 'Historical Heritage & Cultural Destination',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    facts: [
      'Rich historic landmarks and ancient heritage trails spanning centuries of regional history.',
      'Vibrant local markets, traditional handcrafts, and authentic regional culinary delicacies.'
    ],
    highlights: ['Historical Monuments', 'Local Food Trails', 'Cultural Performances', 'Scenic Viewpoints'],
    bestSeason: 'October to March',
    experiences: ['Heritage', 'Nature', 'Spiritual']
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={activeCity.image}
            alt={activeCity.cityName}
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link href="/destinations" className="text-slate-400 hover:text-saffron-400 transition">
              Destinations
            </Link>
            <span className="text-slate-600">/</span>
            <Link href={`/destinations/${activeCity.zoneSlug}`} className="text-slate-400 hover:text-saffron-400 transition capitalize">
              {activeCity.zoneName}
            </Link>
            <span className="text-slate-600">/</span>
            <Link href={`/destinations/${activeCity.zoneSlug}/${activeCity.stateSlug}`} className="text-slate-400 hover:text-saffron-400 transition">
              {activeCity.stateName}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{activeCity.cityName}</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeCity.stateName} • {activeCity.zoneName}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
              {activeCity.cityName} <span className="gold-gradient-text">Travel Guide</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-serif italic">
              &ldquo;{activeCity.tagline}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Did You Know Box */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-saffron-500/30 bg-royal-900/60 backdrop-blur-xl space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-serif">Did You Know?</h2>
              <p className="text-xs text-slate-400">Authentic heritage & historical facts about {activeCity.cityName}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {activeCity.facts.map((fact, index) => (
              <div key={index} className="flex gap-3 bg-royal-950/60 p-4 rounded-xl border border-white/5">
                <span className="w-6 h-6 rounded-full bg-saffron-500/20 text-saffron-400 flex items-center justify-center text-xs font-bold shrink-0">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights & Experiences */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: Key Highlights */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-peacock-500/20 text-peacock-400 flex items-center justify-center border border-peacock-500/30">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Key Landmarks</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCity.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-peacock-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Best Time to Visit */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Best Season</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold text-amber-300">
              {activeCity.bestSeason}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Provides pleasant climate for outdoor sightseeing, photo walks, and festival celebrations.
            </p>
          </div>

          {/* Box 3: Experience Categories */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Featured Experiences</h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {activeCity.experiences.map((exp) => (
                <Link
                  key={exp}
                  href={`/experiences/${exp.toLowerCase()}`}
                  className="px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-300 text-xs font-semibold border border-saffron-500/30 hover:bg-saffron-500 hover:text-royal-950 transition"
                >
                  {exp}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back and Navigation Actions */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold">
          <Link
            href={`/destinations/${activeCity.zoneSlug}/${activeCity.stateSlug}`}
            className="text-saffron-400 hover:text-saffron-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2.5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {activeCity.stateName} State</span>
          </Link>
          <Link
            href="/plan-your-trip"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2.5 rounded-xl border border-white/10"
          >
            <span>Plan Trip to {activeCity.cityName}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
