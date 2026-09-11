import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DESTINATION_CITIES } from '@/lib/data/cities-facts';
import { MapPin, ArrowLeft, ArrowRight, Sparkles, Sun, Landmark, Lightbulb, Compass, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: { stateSlug: string; citySlug: string } }) {
  const city = DESTINATION_CITIES.find(c => c.citySlug === params.citySlug || c.stateSlug === params.stateSlug);
  const cityName = city ? city.name : params.citySlug.replace(/-/g, ' ').toUpperCase();
  const stateName = city ? city.state : params.stateSlug.replace(/-/g, ' ').toUpperCase();

  return {
    title: `${cityName}, ${stateName} Travel Guide | ExploreIndia Destinations`,
    description: `Explore ${cityName} in ${stateName}. Discover key facts, heritage highlights, best times to visit, and local experiences.`,
  };
}

export default function DestinationCityPage({ params }: { params: { stateSlug: string; citySlug: string } }) {
  const city = DESTINATION_CITIES.find(c => c.citySlug === params.citySlug) || {
    id: params.citySlug,
    name: params.citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    state: params.stateSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    stateSlug: params.stateSlug,
    citySlug: params.citySlug,
    zone: 'North' as const,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    tagline: 'Historical Heritage & Cultural Wonders',
    facts: [
      'Rich historic landmarks and ancient heritage trails spanning centuries of regional history.',
      'Vibrant local markets, traditional handcrafts, and authentic regional culinary delicacies.'
    ]
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={city.image}
            alt={city.name}
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs">
            <Link
              href="/destinations"
              className="text-slate-400 hover:text-saffron-400 transition flex items-center gap-1"
            >
              <span>Destinations</span>
            </Link>
            <span className="text-slate-600">/</span>
            <Link
              href={`/state/${city.stateSlug}`}
              className="text-slate-400 hover:text-saffron-400 transition"
            >
              {city.state}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{city.name}</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{city.state} • {city.zone} Zone</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
              {city.name} <span className="gold-gradient-text">City Guide</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-serif italic">
              {city.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Did You Know Box */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-saffron-500/30 bg-royal-900/60 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-serif">Did You Know?</h2>
              <p className="text-xs text-slate-400">Fascinating heritage & historical facts about {city.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {city.facts.map((fact, index) => (
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

        {/* Highlight Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Heritage & Monuments</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Explore royal palaces, fort ramparts, and ancient architecture unique to {city.name}.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-peacock-500/10 border border-peacock-500/30 flex items-center justify-center text-peacock-400">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Best Season</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              October to March provides ideal pleasant weather for sightseeing and outdoor trails.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">Culture & Gastronomy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Savor iconic street foods, artisanal crafts, and traditional festival gatherings.
            </p>
          </div>
        </section>

        {/* Back and Related Links */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold">
          <Link 
            href="/destinations" 
            className="text-saffron-400 hover:text-saffron-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2 rounded-lg border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Destinations</span>
          </Link>
          <Link 
            href={`/state/${city.stateSlug}`} 
            className="text-peacock-400 hover:text-peacock-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2 rounded-lg border border-white/10"
          >
            <span>Explore {city.state} State</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
