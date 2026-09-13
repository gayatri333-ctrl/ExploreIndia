import Link from 'next/link';
import Image from 'next/image';
import { EXPERIENCES_DATA } from '@/lib/data/incredible-india-data';
import { Sparkles, ArrowLeft, ArrowRight, MapPin, Landmark, Clock, Shield, Flame, TreePine, Mountain, Utensils, Stethoscope, Home, Compass } from 'lucide-react';

interface ExperienceCategoryPageProps {
  params: {
    category: string;
  };
}

const CATEGORY_ICONS: Record<string, any> = {
  heritage: Shield,
  spiritual: Flame,
  wildlife: TreePine,
  adventure: Mountain,
  gastronomy: Utensils,
  wellness: Stethoscope,
  rural: Home,
};

export async function generateMetadata({ params }: ExperienceCategoryPageProps) {
  const exp = EXPERIENCES_DATA.find((e) => e.slug === params.category);
  const name = exp ? exp.name : params.category.replace(/-/g, ' ').toUpperCase();

  return {
    title: `${name} Experiences in India | Incredible India`,
    description: exp ? exp.description : `Explore ${name} travel experiences and destination trails in India.`,
  };
}

export default function ExperienceCategoryPage({ params }: ExperienceCategoryPageProps) {
  const exp = EXPERIENCES_DATA.find((e) => e.slug === params.category);

  const activeExp = exp || {
    id: params.category,
    name: params.category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    slug: params.category,
    tagline: 'Authentic Regional Experiences & Heritage Trails',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    description: 'Immerse yourself in authentic Indian heritage, cultural festivals, and breathtaking natural wonders.',
    subThemes: ['Heritage Walk', 'Cultural Festivals', 'Culinary Trails'],
    keyLandmarks: [],
    featuredCities: [],
    suggestedItineraries: []
  };

  const Icon = CATEGORY_ICONS[activeExp.slug] || Sparkles;

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={activeExp.heroImage}
            alt={activeExp.name}
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link href="/experiences" className="text-slate-400 hover:text-saffron-400 transition">
              Experiences
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{activeExp.name}</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <Icon className="w-3.5 h-3.5" />
              <span>{activeExp.name} Category Trail</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
              {activeExp.name} <span className="gold-gradient-text">Experiences</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-serif italic">
              &ldquo;{activeExp.tagline}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Narrative Description Box */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
          <h2 className="text-2xl font-bold text-white font-serif">About {activeExp.name} in India</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {activeExp.description}
          </p>

          <div className="pt-4 border-t border-white/5 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sub-Themes & Topics:</div>
            <div className="flex flex-wrap gap-2">
              {activeExp.subThemes.map((st) => (
                <span
                  key={st}
                  className="px-3 py-1 rounded-lg bg-saffron-500/10 text-saffron-300 border border-saffron-500/30 text-xs font-semibold"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Destination Cities for this Experience */}
        {activeExp.featuredCities.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
              <MapPin className="w-5 h-5 text-saffron-400" />
              <span>Top Destinations for {activeExp.name}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeExp.featuredCities.map((city) => (
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
                    <span className="absolute top-3 left-3 bg-saffron-500 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                      {city.stateName}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                        <Link href={`/destinations/${city.zoneSlug}/${city.stateSlug}/${city.citySlug}`}>
                          {city.cityName}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {city.snippet}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-400 text-[11px] capitalize">{city.zoneSlug} Zone</span>
                      <Link
                        href={`/destinations/${city.zoneSlug}/${city.stateSlug}/${city.citySlug}`}
                        className="text-saffron-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Explore Destination</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Suggested Itineraries */}
        {activeExp.suggestedItineraries.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span>Suggested Itineraries</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeExp.suggestedItineraries.map((it) => (
                <div key={it.slug} className="glass-card rounded-2xl p-6 space-y-3 border border-white/10">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    {it.duration}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif">{it.title}</h3>
                  <Link
                    href={`/itineraries/${it.slug}`}
                    className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1.5 pt-2 border-t border-white/5"
                  >
                    <span>View Full Day Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs font-semibold">
          <Link
            href="/experiences"
            className="text-saffron-400 hover:text-saffron-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2.5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Experiences</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
