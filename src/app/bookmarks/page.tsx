import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bookmark, Compass, ArrowRight, Heart } from 'lucide-react';

export const metadata = {
  title: 'Saved Bookmarks & Favorites | ExploreIndia',
  description: 'Your saved festivals, curated itineraries, destination guides & favorite experiences.',
};

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-marigold-400 text-xs font-semibold uppercase tracking-wider">
            <Bookmark className="w-4 h-4" />
            <span>Saved Travel Collection</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Your Saved <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">Bookmarks</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Easily access your saved festival alerts, favorite Golden Triangle itineraries, and bookmarked destinations across India.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-8 flex-1 w-full text-center">
        <div className="p-12 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400 mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white font-serif">No Bookmarks Saved Yet</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            As you explore destinations, festivals, and itineraries, click the bookmark icon to save them to your personal travel collection.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link href="/festivals-events" className="px-5 py-2.5 rounded-lg bg-marigold-500 hover:bg-marigold-600 text-slate-950 font-bold text-xs transition">
              Explore Festivals
            </Link>
            <Link href="/plan/itineraries" className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition">
              Browse Itineraries
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
