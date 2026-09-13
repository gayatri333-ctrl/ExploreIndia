'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, MapPin, Calendar, ArrowRight, Trash2, Sparkles, LogIn } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { COMPREHENSIVE_EVENTS, ComprehensiveEvent } from '@/lib/data/events-data';
import { getCategoryToken } from '@/lib/design-tokens';
import { User as SupabaseUser } from '@supabase/supabase-js';

export default function BookmarksPage() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [bookmarkedEvents, setBookmarkedEvents] = useState<ComprehensiveEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadBookmarks() {
      setLoading(true);
      const supabase = createClient();
      const { data: userData } = await supabase.auth.getUser();
      setUser(userData.user);

      if (userData.user) {
        // Query bookmarks table in Supabase if logged in
        const { data: bookmarkData } = await supabase
          .from('bookmarks')
          .select(`
            id,
            event_id,
            events (
              id,
              title,
              slug,
              category,
              type,
              start_date,
              end_date,
              description,
              hero_image_url,
              card_image_url,
              states (
                name,
                region
              )
            )
          `)
          .eq('user_id', userData.user.id);

        if (bookmarkData && bookmarkData.length > 0) {
          const mapped: ComprehensiveEvent[] = bookmarkData
            .filter((b: any) => b.events)
            .map((b: any) => {
              const evt = b.events;
              return {
                id: evt.id,
                title: evt.title,
                slug: evt.slug,
                stateSlug: evt.states?.name ? evt.states.name.toLowerCase().replace(/\s+/g, '-') : 'rajasthan',
                stateName: evt.states?.name || 'Rajasthan',
                region: (evt.states?.region as any) || 'North',
                category: evt.category || 'Cultural & Spiritual',
                type: evt.type || 'Festival',
                startDate: evt.start_date,
                endDate: evt.end_date,
                shortDescription: evt.description,
                fullDescription: evt.description,
                heroImage: evt.hero_image_url || 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
                cardImage: evt.card_image_url || 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
                galleryImages: [],
                locationVenue: `${evt.states?.name || 'India'} Venue`,
                entryFee: 'Free Access',
                organizer: evt.organizer || 'State Tourism Board',
                tags: [evt.category]
              };
            });
          setBookmarkedEvents(mapped);
        } else {
          // Default fallback curated bookmarks for demo
          setBookmarkedEvents(COMPREHENSIVE_EVENTS.slice(0, 3));
        }
      } else {
        // Fallback sample bookmarks for guest users
        setBookmarkedEvents(COMPREHENSIVE_EVENTS.slice(0, 3));
      }
      setLoading(false);
    }

    loadBookmarks();
  }, []);

  const handleRemoveBookmark = (eventId: string) => {
    setBookmarkedEvents((prev) => prev.filter((e) => e.id !== eventId));
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-saffron-500 selection:text-royal-950">

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 text-saffron-400" />
            <span>Saved Travel Collection</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Your Saved <span className="gold-gradient-text">Bookmarks</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            {user
              ? `Manage your bookmarked festivals, curated itineraries, and destination guides for ${user.user_metadata?.full_name || user.email?.split('@')[0]}.`
              : 'Sign in to sync your saved festival alerts and favorite Golden Triangle itineraries across devices.'}
          </p>
        </div>
      </section>

      {/* Main Content Feed */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8 flex-1 w-full">
        {loading ? (
          <div className="text-center py-16 space-y-3">
            <div className="w-8 h-8 rounded-full border-2 border-saffron-500 border-t-transparent animate-spin mx-auto" />
            <p className="text-xs text-slate-400">Loading your saved bookmarks...</p>
          </div>
        ) : bookmarkedEvents.length > 0 ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-saffron-400" />
                <span>Saved Events & Celebrations ({bookmarkedEvents.length})</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedEvents.map((evt) => {
                const categoryToken = getCategoryToken(evt.category);
                return (
                  <div
                    key={evt.id}
                    className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-saffron-500/40 shadow-xl transition-all duration-300"
                  >
                    {/* Hero Card Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={evt.cardImage}
                        alt={evt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 bg-royal-950/80 backdrop-blur-md text-saffron-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                        {evt.category}
                      </div>

                      <button
                        onClick={() => handleRemoveBookmark(evt.id)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-royal-950/70 backdrop-blur-md text-rose-400 hover:text-rose-300 hover:bg-rose-500/20 border border-white/10 transition"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1 text-peacock-300 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-saffron-400" /> {evt.stateName}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-saffron-400" /> {evt.startDate}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron-400 transition-colors">
                          <Link href={`/festivals-events/${evt.stateSlug}/${evt.slug}`}>
                            {evt.title}
                          </Link>
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                          {evt.shortDescription}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                        <span className="text-[10px] bg-saffron-500/10 text-saffron-400 px-2 py-0.5 rounded border border-saffron-500/20 font-medium">
                          {evt.type}
                        </span>
                        <Link
                          href={`/festivals-events/${evt.stateSlug}/${evt.slug}`}
                          className="text-saffron-400 hover:text-white flex items-center gap-1 transition"
                        >
                          <span>View Event</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="p-12 rounded-2xl glass-card border border-white/10 text-center space-y-4 max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400 mx-auto">
              <Bookmark className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white font-serif">No Saved Bookmarks</h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
              As you explore festivals, heritage attractions, and itineraries across India, click the bookmark button to build your personalized travel collection.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="/festivals-events"
                className="px-5 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-royal-950 font-bold text-xs shadow-glow-saffron transition"
              >
                Browse Festivals
              </Link>
              <Link
                href="/destinations"
                className="px-5 py-2.5 rounded-xl bg-royal-900 hover:bg-royal-800 text-white font-semibold text-xs border border-white/10 transition"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
