import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, MapPin, Filter, ArrowRight, Trees, Landmark, Heart, Compass, Utensils, Award, Shield, Palette, Mountain } from 'lucide-react';
import { EXPERIENCE_TOPICS, ZONES } from '@/lib/data/navigation-data';

export const metadata = {
  title: 'Explore Destinations & Experiences across India | ExploreIndia',
  description: '11 Curated Experience Topics: Wildlife Safaris, World Heritage Forts, Ganga Aarti Trails, Himalayan Treks, Gastronomy & Royal Food Tours.',
};

export default function ExperiencesPage({
  searchParams,
}: {
  searchParams?: { topics?: string; subtopics?: string; zones?: string };
}) {
  const activeTopicsParam = searchParams?.topics ? searchParams.topics.split(',') : [];
  const activeZonesParam = searchParams?.zones ? searchParams.zones.split(',') : [];

  const iconsMap: Record<string, any> = {
    wildlife: Trees,
    heritage: Landmark,
    spiritual: Heart,
    adventure: Mountain,
    gastronomy: Utensils,
    weddings: Award,
    wellness: Compass,
    arts: Palette,
    rural: Shield,
    nature: Trees,
    recreation: Sparkles,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-marigold-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Curated Travel Experiences</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Experiences of <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Discover 11 curated experience themes ranging from Bengal tiger safaris and royal palace walks to Himalayan treks, Ayurvedic retreats, and street food crawls.
          </p>

          {/* Active Filter Bar if params exist */}
          {(activeTopicsParam.length > 0 || activeZonesParam.length > 0) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium">Filtered by:</span>
              {activeTopicsParam.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full bg-marigold-500/20 text-marigold-300 border border-marigold-500/30 font-semibold">
                  {t}
                </span>
              ))}
              {activeZonesParam.map((z, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                  {z} Zone
                </span>
              ))}
              <Link href="/experiences" className="text-rose-400 hover:underline font-semibold ml-2">
                Clear Filters
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Main Experience Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCE_TOPICS.map((topic) => {
            const IconComp = iconsMap[topic.id] || Sparkles;

            return (
              <div
                key={topic.id}
                id={topic.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-marigold-500/40 transition shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {topic.subTopics.length} Sub-Interests
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white font-serif">{topic.name}</h2>
                    <p className="text-xs text-slate-400 mt-1">Immersive experiences & guided trails across India.</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Popular Trails & Sub-Interests</div>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.subTopics.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-md transition"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/destinations?topic=${topic.id}`}
                  className="w-full py-2.5 rounded-lg bg-slate-950 hover:bg-marigold-500 hover:text-slate-950 text-marigold-400 border border-slate-800 hover:border-marigold-500 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <span>Explore {topic.name} Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
