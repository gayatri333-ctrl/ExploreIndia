import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TRAVEL_DIARIES } from '@/lib/data/travel-diaries';
import { MapPin, Clock, Calendar, ArrowLeft, Share2, Bookmark, Sparkles, User } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const story = TRAVEL_DIARIES.find((s) => s.slug === params.slug);
  const title = story ? `${story.title} | Travel Diaries` : 'Travel Story | ExploreIndia';
  const desc = story ? story.excerpt : 'Discover authentic Indian travel stories, heritage trails, and wilderness logs.';

  return {
    title,
    description: desc,
  };
}

export default function TravelStoryDetailPage({ params }: { params: { slug: string } }) {
  const story = TRAVEL_DIARIES.find((s) => s.slug === params.slug) || {
    id: 'placeholder',
    title: params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    slug: params.slug,
    state: 'India',
    stateSlug: 'india',
    region: 'North' as const,
    interest: 'Heritage' as const,
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    excerpt: 'Immerse yourself in authentic Indian heritage, cultural festivals, and breathtaking natural wonders.',
    fullStory: 'Immerse yourself in authentic Indian heritage, cultural festivals, and breathtaking natural wonders. From high mountain sanctuaries to sacred riverfronts, every trail reveals centuries of rich living traditions.',
    author: 'Editorial Team',
    readTime: '4 min read',
    publishedDate: 'Sep 2026'
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            priority
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-saffron-400 hover:text-white transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Travel Diaries</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-saffron-500/15 border border-saffron-500/30 text-saffron-300 font-bold uppercase tracking-wider">
              {story.interest}
            </span>
            <span className="px-3 py-1 rounded-full bg-peacock-500/15 border border-peacock-500/30 text-peacock-300 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {story.state} ({story.region} Zone)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            {story.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-200">
                <User className="w-4 h-4 text-saffron-400" /> {story.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-peacock-400" /> {story.publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-400" /> {story.readTime}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button 
                className="p-2 rounded-lg bg-royal-900/80 hover:bg-royal-800 border border-white/10 text-slate-300 hover:text-rose-400 transition"
                title="Bookmark story"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button 
                className="p-2 rounded-lg bg-royal-900/80 hover:bg-royal-800 border border-white/10 text-slate-300 hover:text-saffron-400 transition"
                title="Share story"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12 flex-1 w-full space-y-8">
        {/* Cover Feature Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Story Text Box */}
        <article className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-6 text-slate-200 leading-relaxed font-normal text-base">
          <p className="text-lg font-serif italic text-saffron-300 border-l-4 border-saffron-500 pl-4 py-1 bg-saffron-500/5 rounded-r-lg">
            &ldquo;{story.excerpt}&rdquo;
          </p>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{story.fullStory}</p>
            <p>
              Exploring India offers a kaleidoscope of colors, acoustic chants, culinary aromas, and timeless architecture. Whether tracing ancient pilgrimage routes or camping under desert stars, every journey writes a chapter worth remembering forever.
            </p>
          </div>
        </article>

        {/* Bottom Back Button */}
        <div className="pt-4 flex justify-between items-center text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-royal-950 font-bold shadow-glow-saffron transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href={`/state/${story.stateSlug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-900 hover:bg-royal-800 text-slate-200 border border-white/10 transition"
          >
            <span>Explore {story.state} State</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
