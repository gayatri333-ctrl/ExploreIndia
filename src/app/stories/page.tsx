import Link from 'next/link';
import Image from 'next/image';
import { TRAVEL_DIARIES } from '@/lib/data/travel-diaries';
import { BookOpen, MapPin, Clock, ArrowRight, User, Calendar, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Travel Diaries & Editorial Logs | ExploreIndia',
  description: 'Read authentic Indian travel stories, wilderness logs, heritage walks, and gastronomy experiences.',
};

export default function TravelStoriesPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-900 via-royal-950 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Editorial Travel Logs & Stories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
            Indian <span className="gold-gradient-text">Travel Diaries</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Immerse yourself in 16+ original travel notes, wildlife logs, spiritual walks, and cultural journeys written by explorers across India.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAVEL_DIARIES.map((story) => (
            <article
              key={story.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/20 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-saffron-500 text-royal-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                    {story.interest}
                  </span>
                  <span className="bg-royal-950/80 backdrop-blur-md text-peacock-300 border border-white/10 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {story.state}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-saffron-400" />
                      {story.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-peacock-400" />
                      {story.author}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors leading-snug line-clamp-2">
                    <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    {story.publishedDate}
                  </span>
                  <Link
                    href={`/stories/${story.slug}`}
                    className="text-saffron-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
