'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, MapPin, Calendar, ArrowRight, Trash2, Sparkles, Compass } from 'lucide-react';
import { useBookmarks } from '@/context/BookmarkContext';

export default function BookmarksPage() {
  const { bookmarks, removeBookmark, clearAllBookmarks, bookmarkCount } = useBookmarks();

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-saffron-500 selection:text-royal-950">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 text-saffron-400" />
            <span>Saved Travel Collection</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
                Your Saved <span className="gold-gradient-text">Bookmarks ({bookmarkCount})</span>
              </h1>
              <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed mt-2">
                Manage your saved destination cities, heritage attractions, cultural festivals, and handcrafted itineraries.
              </p>
            </div>

            {bookmarkCount > 0 && (
              <button
                onClick={clearAllBookmarks}
                className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition self-start sm:self-auto flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Bookmarks</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Feed */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8 flex-1 w-full">
        {bookmarkCount > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarks.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Hero Card Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image || 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800'}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-saffron-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                      {item.badge || item.type}
                    </div>

                    <button
                      onClick={() => removeBookmark(item.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-royal-950/80 backdrop-blur-md text-rose-400 hover:text-white hover:bg-rose-600 border border-white/10 transition"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {item.subtitle && (
                        <div className="text-xs text-peacock-300 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                          <span>{item.subtitle}</span>
                        </div>
                      )}

                      <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                        <Link href={item.link}>{item.title}</Link>
                      </h3>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                      <span className="text-[10px] bg-saffron-500/10 text-saffron-400 px-2 py-0.5 rounded border border-saffron-500/20 font-medium capitalize">
                        {item.type}
                      </span>
                      <Link
                        href={item.link}
                        className="text-saffron-400 hover:text-white flex items-center gap-1 transition"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 rounded-2xl glass-card border border-white/10 text-center space-y-4 max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400 mx-auto">
              <Bookmark className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white font-serif">No Saved Bookmarks Yet</h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
              As you explore destinations, heritage fortresses, cultural festivals, and itineraries across India, click the bookmark button to save them to your personal collection.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="/explore"
                className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-royal-950 font-bold text-xs shadow-glow-saffron transition flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4" />
                <span>Explore All Entities</span>
              </Link>
              <Link
                href="/festivals-events"
                className="px-5 py-2.5 rounded-xl bg-royal-900 hover:bg-royal-800 text-white font-semibold text-xs border border-white/10 transition"
              >
                Browse Festivals
              </Link>
              <Link
                href="/itineraries"
                className="px-5 py-2.5 rounded-xl bg-royal-900 hover:bg-royal-800 text-white font-semibold text-xs border border-white/10 transition"
              >
                View Itineraries
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
