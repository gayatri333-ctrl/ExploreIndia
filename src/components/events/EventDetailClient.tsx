'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Sparkles,
  Bookmark,
  Share2,
  Copy,
  Check,
  ArrowLeft,
  ArrowRight,
  Info,
  Building,
  Ticket,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { ComprehensiveEvent, getRelatedEvents } from '@/lib/data/events-data';
import { getCategoryToken } from '@/lib/design-tokens';
import { createClient } from '@/lib/supabase/client';
import { FestivalGallery } from '@/components/festivals/FestivalGallery';
import { useBookmarks } from '@/context/BookmarkContext';

interface EventDetailClientProps {
  eventData: ComprehensiveEvent;
}

export default function EventDetailClient({ eventData }: EventDetailClientProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [copied, setCopied] = useState(false);

  const bookmarked = isBookmarked(eventData.id);

  const handleBookmarkToggle = () => {
    toggleBookmark({
      id: eventData.id,
      title: eventData.title,
      type: 'festival',
      link: `/festivals-events/${eventData.stateSlug}/${eventData.slug}`,
      image: eventData.heroImage || eventData.cardImage,
      subtitle: `${eventData.stateName} • ${eventData.startDate}`,
      badge: eventData.category,
    });
  };

  const handleCopyShareLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSocialShare = (platform: 'twitter' | 'facebook' | 'whatsapp') => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out ${eventData.title} on ExploreIndia!`);

    let shareUrl = '';
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === 'whatsapp') shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;

    window.open(shareUrl, '_blank');
  };

  const categoryToken = getCategoryToken(eventData.category);
  const relatedEvents = getRelatedEvents(eventData.id, eventData.category, eventData.region, 4);

  return (
    <div className="min-h-screen bg-primary-dark-900 text-slate-100 font-sans pb-20">
      {/* Breadcrumb */}
      <div className="bg-primary-dark-950 border-b border-slate-800 py-3 px-4 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link href="/festivals-events" className="hover:text-marigold-400 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Festivals & Events</span>
          </Link>
          <span>/</span>
          <span>{eventData.region} Zone</span>
          <span>/</span>
          <span>{eventData.stateName}</span>
          <span>/</span>
          <span className="text-white font-semibold truncate max-w-xs">{eventData.title}</span>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={eventData.heroImage}
          alt={eventData.title}
          fill
          className="object-cover transition-all duration-700"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-900 via-primary-dark-900/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border shadow-lg ${categoryToken.pillClass}`}>
              <span className={`w-2 h-2 rounded-full ${categoryToken.dotBg}`} />
              <span>{eventData.category}</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{eventData.stateName} ({eventData.region} Zone)</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-marigold-300 text-xs font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-marigold-400" />
              <span>{eventData.startDate} — {eventData.endDate}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            {eventData.title}
          </h1>
        </div>
      </section>

      {/* Details Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-panel p-6 sm:p-8 rounded-md border border-slate-700/60 space-y-6">
            <h2 className="text-xl font-bold font-serif text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-marigold-400" />
              <span>About the Celebration</span>
            </h2>

            <p className="text-slate-200 text-base leading-relaxed font-sans">
              {eventData.fullDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-xs">
              <div className="p-3 bg-slate-950/60 rounded border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-marigold-400" />
                  <span>Venue & Location</span>
                </span>
                <p className="text-white font-medium">{eventData.locationVenue}</p>
              </div>

              <div className="p-3 bg-slate-950/60 rounded border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Ticket className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Admission & Tickets</span>
                </span>
                <p className="text-white font-medium">{eventData.entryFee || 'Free Admission'}</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <FestivalGallery images={eventData.galleryImages} title={eventData.title} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel p-6 rounded-md border border-slate-700/60 space-y-5 sticky top-24">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
              Explorer Actions
            </h3>

            <button
              onClick={handleBookmarkToggle}
              className={`w-full py-3 px-4 rounded font-bold text-xs transition flex items-center justify-center gap-2 shadow-md ${
                bookmarked
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? 'Event Saved in Bookmarks' : 'Bookmark This Festival'}</span>
            </button>

            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="text-xs font-semibold text-slate-400">Share with Travelers</label>
              
              <button
                onClick={handleCopyShareLink}
                className="w-full py-2.5 px-3 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs transition flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Copy className="w-3.5 h-3.5 text-marigold-400" />
                  <span>Copy Page URL</span>
                </span>
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5 text-slate-500" />}
              </button>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleSocialShare('whatsapp')}
                  className="py-2 px-2 rounded bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold text-center"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => handleSocialShare('twitter')}
                  className="py-2 px-2 rounded bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-[11px] font-semibold text-center"
                >
                  Twitter / X
                </button>
                <button
                  onClick={() => handleSocialShare('facebook')}
                  className="py-2 px-2 rounded bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-semibold text-center"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      {relatedEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10 border-t border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold font-serif text-white tracking-wide flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-marigold-400" />
            <span>You Might Also Like</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedEvents.map((rel) => {
              const relToken = getCategoryToken(rel.category);

              return (
                <div
                  key={rel.id}
                  className="glass-card rounded-md border border-slate-800 hover:border-marigold-500/40 overflow-hidden flex flex-col justify-between group transition"
                >
                  <div className="relative h-44 w-full">
                    <Image src={rel.cardImage} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform" unoptimized />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${relToken.pillClass}`}>
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        <span>{rel.stateName}</span>
                      </div>
                      <h4 className="text-sm font-bold font-serif text-white group-hover:text-marigold-300 transition line-clamp-1">
                        {rel.title}
                      </h4>
                    </div>

                    <Link
                      href={`/festivals-events/${rel.stateSlug}/${rel.slug}`}
                      className="inline-flex items-center justify-between text-xs text-marigold-400 font-semibold pt-2 border-t border-slate-800/60 w-full"
                    >
                      <span>Explore Festival</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
