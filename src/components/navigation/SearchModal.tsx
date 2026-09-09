'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Calendar, Compass, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { STATES_BY_ZONE, TRENDING_SEARCHES } from '@/lib/data/navigation-data';
import { createClient } from '@/lib/supabase/client';
import { EventItem } from '@/types/database';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [dbEvents, setDbEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      fetchEvents();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .limit(20);
      
      if (!error && data) {
        setDbEvents(data);
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  // Flatten all states for client search
  const allStates = Object.values(STATES_BY_ZONE).flat();

  // Autocomplete matching
  const matchingStates = query.trim()
    ? allStates.filter(s =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.capital.toLowerCase().includes(query.toLowerCase()) ||
        s.popularCities.some(c => c.name.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5)
    : [];

  const matchingEvents = query.trim()
    ? dbEvents.filter(e =>
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.category.toLowerCase().includes(query.toLowerCase()) ||
        e.description?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSelectTrending = (label: string) => {
    setQuery(label);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/events?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-primary-dark-950/80 backdrop-blur-md transition-all animate-fadeIn">
      {/* Overlay backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-primary-dark-900 border border-slate-700/60 rounded-md shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-slate-800 px-4 py-3">
          <Search className="w-5 h-5 text-marigold-500 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search festivals, states, cities, national parks..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-base outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition"
          >
            ESC
          </button>
        </form>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {!query.trim() ? (
            /* Empty State: Trending Searches */
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-marigold-400">
                <TrendingUp className="w-4 h-4" />
                <span>Trending Searches Across India</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TRENDING_SEARCHES.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectTrending(item.label)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs transition group"
                  >
                    <Sparkles className="w-3 h-3 text-marigold-400 group-hover:rotate-12 transition-transform" />
                    <span>{item.label}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded-full border border-slate-800">
                      {item.type}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Live Autocomplete Results */
            <div className="space-y-6">
              {/* Matching States & Destinations */}
              {matchingStates.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>States & Cities ({matchingStates.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {matchingStates.map((state) => (
                      <Link
                        key={state.id}
                        href={`/destinations?state=${state.id}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                            {state.code}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                              {state.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              Zone: {state.zone} • Capital: {state.capital}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Events & Festivals */}
              {matchingEvents.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-marigold-400 mb-3 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Festivals & Events ({matchingEvents.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {matchingEvents.map((evt) => (
                      <Link
                        key={evt.id}
                        href={`/events/${evt.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                            <Compass className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-marigold-400 transition">
                              {evt.title}
                            </div>
                            <div className="text-xs text-slate-400">
                              Category: {evt.category} • Start: {evt.start_date}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-marigold-400 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {matchingStates.length === 0 && matchingEvents.length === 0 && !loading && (
                <div className="text-center py-8 space-y-2">
                  <p className="text-slate-300 font-medium">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-slate-400">Try searching for Pushkar, Kerala, Tigers, or Durga Puja</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950/80 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">ENTER</kbd> to view full catalog</span>
          <Link href="/events" onClick={onClose} className="text-marigold-400 hover:text-marigold-300 font-semibold flex items-center gap-1">
            <span>Browse All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
