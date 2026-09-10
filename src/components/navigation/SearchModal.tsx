'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Calendar, Compass, ArrowRight, Sparkles, TrendingUp, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { STATES_BY_ZONE, TRENDING_SEARCHES, StateData } from '@/lib/data/navigation-data';
import { COMPREHENSIVE_EVENTS, ComprehensiveEvent } from '@/lib/data/events-data';
import { createClient } from '@/lib/supabase/client';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [matchingEvents, setMatchingEvents] = useState<ComprehensiveEvent[]>([]);
  const [matchingStates, setMatchingStates] = useState<StateData[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setDebouncedQuery('');
      setMatchingEvents([]);
      setMatchingStates([]);
    }
  }, [isOpen]);

  // Handle ESC and Cmd+K key shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Debounce input query by ~300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Query Supabase events + states tables (with fallback) whenever debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery) {
      setMatchingEvents([]);
      setMatchingStates([]);
      setLoading(false);
      return;
    }

    async function executeSearch() {
      setLoading(true);
      try {
        const supabase = createClient();
        const searchTerm = `%${debouncedQuery}%`;

        // Query Supabase events table with relational states data
        const { data: eventData, error: eventErr } = await supabase
          .from('events')
          .select(`
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
          `)
          .or(`title.ilike.${searchTerm},category.ilike.${searchTerm},description.ilike.${searchTerm}`)
          .limit(5);

        // Query Supabase states table
        const { data: stateData, error: stateErr } = await supabase
          .from('states')
          .select('*')
          .or(`name.ilike.${searchTerm},region.ilike.${searchTerm}`)
          .limit(5);

        if (!eventErr && eventData && eventData.length > 0) {
          const mappedEvents: ComprehensiveEvent[] = eventData.map((evt: any) => ({
            id: evt.id,
            title: evt.title,
            slug: evt.slug,
            stateSlug: evt.states?.name ? evt.states.name.toLowerCase().replace(/\s+/g, '-') : 'india',
            stateName: evt.states?.name || 'India',
            region: (evt.states?.region as any) || 'North',
            category: evt.category || 'Cultural & Spiritual',
            type: evt.type || 'Festival',
            startDate: evt.start_date,
            endDate: evt.end_date,
            shortDescription: evt.description,
            fullDescription: evt.description,
            heroImage: evt.hero_image_url || 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974',
            cardImage: evt.card_image_url || 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974',
            galleryImages: [],
            locationVenue: '',
            tags: [evt.category, evt.type]
          }));
          setMatchingEvents(mappedEvents);
        } else {
          // Fallback search over static COMPREHENSIVE_EVENTS dataset
          const filtered = COMPREHENSIVE_EVENTS.filter((e) =>
            e.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            e.category.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            e.stateName.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            e.shortDescription.toLowerCase().includes(debouncedQuery.toLowerCase())
          ).slice(0, 5);
          setMatchingEvents(filtered);
        }

        if (!stateErr && stateData && stateData.length > 0) {
          const mappedStates: StateData[] = stateData.map((s: any) => ({
            id: s.id,
            name: s.name,
            code: s.name.substring(0, 2).toUpperCase(),
            zone: (s.zone || s.region || 'North') as any,
            capital: '',
            popularCities: []
          }));
          setMatchingStates(mappedStates);
        } else {
          // Fallback search over static STATES_BY_ZONE dataset
          const allStates = Object.values(STATES_BY_ZONE).flat();
          const filtered = allStates.filter((s) =>
            s.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            s.capital.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            s.popularCities.some((c) => c.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
          ).slice(0, 5);
          setMatchingStates(filtered);
        }
      } catch (err) {
        const filtered = COMPREHENSIVE_EVENTS.filter((e) =>
          e.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          e.category.toLowerCase().includes(debouncedQuery.toLowerCase())
        ).slice(0, 5);
        setMatchingEvents(filtered);
      } finally {
        setLoading(false);
      }
    }

    executeSearch();
  }, [debouncedQuery]);

  const handleSelectTrending = (label: string) => {
    setQuery(label);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/festivals-events?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-primary-dark-950/85 backdrop-blur-md transition-all animate-fadeIn">
      {/* Overlay backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-primary-dark-900 border border-slate-700/60 rounded-md shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-slate-800 px-4 py-3.5 bg-slate-950/40">
          <Search className="w-5 h-5 text-marigold-500 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search festivals, states, cities, national parks... (300ms debounced)"
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none font-sans"
          />
          
          {loading && (
            <Loader2 className="w-4 h-4 text-marigold-400 animate-spin mr-2 flex-shrink-0" />
          )}

          {query && !loading && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white mr-2 transition"
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
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs transition group shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-marigold-400 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">{item.label}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded-full border border-slate-800 font-mono">
                      {item.type}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Live Autocomplete Results Dropdown */
            <div className="space-y-6">
              {/* Matching States & Destinations */}
              {matchingStates.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>States & Regional Destinations ({matchingStates.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {matchingStates.map((state) => (
                      <Link
                        key={state.id}
                        href={`/destinations?state=${state.id}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-md bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition group"
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
                              Zone: {state.zone} {state.capital && `• Capital: ${state.capital}`}
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
                    <span>Festivals & Cultural Events ({matchingEvents.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {matchingEvents.map((evt) => (
                      <Link
                        key={evt.id}
                        href={`/festivals-events/${evt.stateSlug}/${evt.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-md bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-marigold-500/40 transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400">
                            <Compass className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-marigold-300 transition">
                              {evt.title}
                            </div>
                            <div className="text-xs text-slate-400">
                              State: {evt.stateName} • Category: {evt.category} • {evt.startDate}
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
                <div className="text-center py-10 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <p className="text-slate-200 font-semibold text-sm">No matching events or states found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-slate-400">Try searching for &quot;Pushkar&quot;, &quot;Kerala&quot;, &quot;Durga Puja&quot;, or &quot;Rajasthan&quot;</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950/90 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">ENTER</kbd> to submit full search</span>
          <Link href="/festivals-events" onClick={onClose} className="text-marigold-400 hover:text-marigold-300 font-semibold flex items-center gap-1">
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
