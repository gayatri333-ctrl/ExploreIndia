'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar as CalendarIcon,
  Filter,
  Sparkles,
  MapPin,
  Clock,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  X,
  Tag,
  Compass,
  SlidersHorizontal,
} from 'lucide-react';
import { COMPREHENSIVE_EVENTS, ComprehensiveEvent } from '@/lib/data/events-data';
import { CATEGORY_TOKENS, getCategoryToken } from '@/lib/design-tokens';
import { STATES_BY_ZONE, ZONES } from '@/lib/data/navigation-data';
import EventFeedSkeleton from '@/components/events/EventFeedSkeleton';

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const DECADES = [
  { label: '2021-2030', years: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'] },
  { label: '2031-2040', years: ['2031', '2032', '2033', '2034', '2035'] },
];

function FestivalsEventsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Loading state for skeleton feedback
  const [isLoading, setIsLoading] = useState(false);

  // Mobile Slide-over Drawer State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Facet States
  const [typeFilter, setTypeFilter] = useState<'All' | 'Festival' | 'Event'>(
    (searchParams.get('type') as any) || 'All'
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category') ? searchParams.get('category')!.split(',') : []
  );
  const [selectedRegions, setSelectedRegions] = useState<string[]>(
    searchParams.get('region') ? searchParams.get('region')!.split(',') : []
  );
  const [selectedStates, setSelectedStates] = useState<string[]>(
    searchParams.get('state') ? searchParams.get('state')!.split(',') : []
  );
  const [selectedYears, setSelectedYears] = useState<string[]>(
    searchParams.get('year') ? searchParams.get('year')!.split(',') : []
  );
  const [selectedMonths, setSelectedMonths] = useState<string[]>(
    searchParams.get('month') ? searchParams.get('month')!.split(',') : []
  );

  // Accordion UI state
  const [expandedDecades, setExpandedDecades] = useState<string[]>(['2021-2030']);

  // Sync state to URL search params with loading trigger
  const updateURL = (
    typeVal: string,
    catVal: string[],
    regVal: string[],
    stateVal: string[],
    yearVal: string[],
    monthVal: string[]
  ) => {
    setIsLoading(true);
    const params = new URLSearchParams();
    if (typeVal !== 'All') params.set('type', typeVal);
    if (catVal.length > 0) params.set('category', catVal.join(','));
    if (regVal.length > 0) params.set('region', regVal.join(','));
    if (stateVal.length > 0) params.set('state', stateVal.join(','));
    if (yearVal.length > 0) params.set('year', yearVal.join(','));
    if (monthVal.length > 0) params.set('month', monthVal.join(','));

    router.push(`/festivals-events?${params.toString()}`, { scroll: false });
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleTypeChange = (newType: 'All' | 'Festival' | 'Event') => {
    setTypeFilter(newType);
    updateURL(newType, selectedCategories, selectedRegions, selectedStates, selectedYears, selectedMonths);
  };

  const handleCategoryToggle = (catName: string) => {
    let next: string[];
    if (selectedCategories.includes(catName)) {
      next = selectedCategories.filter((c) => c !== catName);
    } else {
      next = [...selectedCategories, catName];
    }
    setSelectedCategories(next);
    updateURL(typeFilter, next, selectedRegions, selectedStates, selectedYears, selectedMonths);
  };

  const handleSelectAllCategories = () => {
    const all = Object.keys(CATEGORY_TOKENS);
    if (selectedCategories.length === all.length) {
      setSelectedCategories([]);
      updateURL(typeFilter, [], selectedRegions, selectedStates, selectedYears, selectedMonths);
    } else {
      setSelectedCategories(all);
      updateURL(typeFilter, all, selectedRegions, selectedStates, selectedYears, selectedMonths);
    }
  };

  const handleRegionToggle = (zoneId: string) => {
    let next: string[];
    if (selectedRegions.includes(zoneId)) {
      next = selectedRegions.filter((r) => r !== zoneId);
    } else {
      next = [...selectedRegions, zoneId];
    }
    setSelectedRegions(next);
    updateURL(typeFilter, selectedCategories, next, selectedStates, selectedYears, selectedMonths);
  };

  const handleYearToggle = (yearStr: string) => {
    let next: string[];
    if (selectedYears.includes(yearStr)) {
      next = selectedYears.filter((y) => y !== yearStr);
    } else {
      next = [...selectedYears, yearStr];
    }
    setSelectedYears(next);
    updateURL(typeFilter, selectedCategories, selectedRegions, selectedStates, next, selectedMonths);
  };

  const handleMonthToggle = (monthIdxStr: string) => {
    let next: string[];
    if (selectedMonths.includes(monthIdxStr)) {
      next = selectedMonths.filter((m) => m !== monthIdxStr);
    } else {
      next = [...selectedMonths, monthIdxStr];
    }
    setSelectedMonths(next);
    updateURL(typeFilter, selectedCategories, selectedRegions, selectedStates, selectedYears, next);
  };

  const handleGlobalClear = () => {
    setIsLoading(true);
    setTypeFilter('All');
    setSelectedCategories([]);
    setSelectedRegions([]);
    setSelectedStates([]);
    setSelectedYears([]);
    setSelectedMonths([]);
    router.push('/festivals-events', { scroll: false });
    setTimeout(() => setIsLoading(false), 300);
  };

  // Filtered Events logic
  const filteredEvents = useMemo(() => {
    return COMPREHENSIVE_EVENTS.filter((evt) => {
      if (typeFilter !== 'All' && evt.type !== typeFilter) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(evt.category)) return false;
      if (selectedRegions.length > 0 && !selectedRegions.includes(evt.region)) return false;
      if (selectedStates.length > 0 && !selectedStates.includes(evt.stateName)) return false;
      if (selectedYears.length > 0) {
        const evtYear = evt.startDate.split('-')[0];
        if (!selectedYears.includes(evtYear)) return false;
      }
      if (selectedMonths.length > 0) {
        const evtMonthIdx = (parseInt(evt.startDate.split('-')[1], 10) - 1).toString();
        if (!selectedMonths.includes(evtMonthIdx)) return false;
      }
      return true;
    });
  }, [typeFilter, selectedCategories, selectedRegions, selectedStates, selectedYears, selectedMonths]);

  const getEventStatusBadge = (startDateStr: string, endDateStr: string) => {
    const today = new Date('2026-09-09');
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);

    if (today >= start && today <= end) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-live-now text-xs font-bold animate-pulse">
          <span className="w-2 h-2 rounded-full pulse-dot-vermilion" />
          <span>HAPPENING NOW</span>
        </span>
      );
    } else if (today < start) {
      const diffTime = Math.abs(start.getTime() - today.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-marigold-300 text-xs font-semibold">
          <Clock className="w-3 h-3 text-marigold-400" />
          <span>In {diffDays} Days</span>
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800/80 text-slate-400 text-xs font-medium">
          <span>Past Celebration</span>
        </span>
      );
    }
  };

  const totalActiveFiltersCount =
    (typeFilter !== 'All' ? 1 : 0) +
    selectedCategories.length +
    selectedRegions.length +
    selectedStates.length +
    selectedYears.length +
    selectedMonths.length;

  const renderFilterFacetsContent = () => (
    <div className="space-y-6">
      {/* Header row */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-marigold-400" />
          <h3 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
            Filter Facets ({filteredEvents.length} Matching)
          </h3>
        </div>
        {totalActiveFiltersCount > 0 && (
          <button
            onClick={handleGlobalClear}
            className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-semibold underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear All ({totalActiveFiltersCount})</span>
          </button>
        )}
      </div>

      {/* 1. Type Toggle */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">1. Event Type</label>
        <div className="flex rounded-full bg-slate-950 p-1 border border-slate-800 text-xs font-semibold">
          {(['All', 'Festival', 'Event'] as const).map((t) => (
            <button
              key={t}
              onClick={() => handleTypeChange(t)}
              className={`flex-1 py-1.5 rounded-full transition text-center ${
                typeFilter === t
                  ? 'bg-marigold-500 text-primary-dark-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t === 'All' ? 'All' : `${t}s`}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Category Multi-Select */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-marigold-400">
            2. Event Categories
          </label>
          <button
            onClick={handleSelectAllCategories}
            className="text-[11px] text-marigold-400 hover:underline font-semibold"
          >
            {selectedCategories.length === Object.keys(CATEGORY_TOKENS).length ? 'Deselect All' : 'Select All'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(CATEGORY_TOKENS).map(([catName, token]) => {
            const isSelected = selectedCategories.includes(catName);
            return (
              <button
                key={catName}
                onClick={() => handleCategoryToggle(catName)}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold transition ${
                  isSelected
                    ? `${token.pillClass} shadow-sm ring-1 ring-white/20`
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${token.dotBg}`} />
                <span>{catName}</span>
                {isSelected && <Check className="w-3 h-3" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Region Multi-Select */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          3. Regional Zones
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {ZONES.map((zone) => {
            const isZoneSelected = selectedRegions.includes(zone.id);
            return (
              <button
                key={zone.id}
                onClick={() => handleRegionToggle(zone.id)}
                className={`flex items-center justify-between px-3 py-2 rounded border text-xs font-semibold transition ${
                  isZoneSelected
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{zone.id}</span>
                {isZoneSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 & 5. Decade/Year & Month */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">4. Years (By Decade)</label>
          {DECADES.map((dec) => (
            <div key={dec.label} className="p-3 rounded bg-slate-950/50 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-300">Decade {dec.label}</div>
              <div className="flex flex-wrap gap-1.5">
                {dec.years.map((yr) => {
                  const isSelected = selectedYears.includes(yr);
                  return (
                    <button
                      key={yr}
                      onClick={() => handleYearToggle(yr)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold border ${
                        isSelected
                          ? 'bg-marigold-500 text-primary-dark-950 border-marigold-400 font-bold'
                          : 'bg-slate-900 border-slate-700 text-slate-300'
                      }`}
                    >
                      {yr}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">5. Month (Jan–Dec)</label>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
            {MONTH_NAMES.map((monthName, idx) => {
              const monthIdxStr = idx.toString();
              const isSelected = selectedMonths.includes(monthIdxStr);
              return (
                <button
                  key={monthName}
                  onClick={() => handleMonthToggle(monthIdxStr)}
                  className={`py-1.5 rounded text-xs font-semibold border text-center ${
                    isSelected
                      ? 'bg-vermilion-600 text-white border-vermilion-500'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  {monthName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-dark-900 text-slate-100 font-sans pb-16">
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 px-4 lg:px-8 bg-gradient-to-b from-primary-dark-950 via-primary-dark-900 to-primary-dark-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-marigold-300 text-xs font-semibold shadow-glow-marigold">
            <Sparkles className="w-4 h-4 text-marigold-400" />
            <span>Discover Pan-India Celebrations & Sacred Melas</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-bold font-serif text-white tracking-tight">
            Indian <span className="gold-gradient-text">Festivals & Events</span> Catalog
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-base leading-relaxed">
            Immerse yourself in centuries of living heritage — from ancient temple rath yatras and monastic masked dances to desert camel fairs, classical music galas, and national celebrations across 28 states.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
        {/* Mobile Sticky Filter Trigger Button (< md screens) */}
        <div className="md:hidden flex items-center justify-between bg-slate-950 p-4 rounded-md border border-slate-800">
          <div className="text-xs font-bold text-white font-serif">
            {filteredEvents.length} Events Available
          </div>
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded bg-marigold-500 text-primary-dark-950 font-bold text-xs shadow-md"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter Celebrations {totalActiveFiltersCount > 0 && `(${totalActiveFiltersCount})`}</span>
          </button>
        </div>

        {/* Desktop Filter Panel (>= md screens) */}
        <div className="hidden md:block glass-panel p-6 rounded-md border border-slate-700/60 shadow-xl">
          {renderFilterFacetsContent()}
        </div>

        {/* Mobile Slide-Over Filter Drawer Sheet */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-primary-dark-950/80 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-lg bg-primary-dark-900 border-l border-slate-700 h-full overflow-y-auto p-6 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-marigold-400 font-serif font-bold text-base">
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Filter Celebrations</span>
                </div>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {renderFilterFacetsContent()}

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 rounded bg-marigold-500 text-primary-dark-950 font-bold text-xs shadow-lg"
                >
                  Apply & View {filteredEvents.length} Events
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Events Feed List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-marigold-500" />
              <span>Coming Up & Celebrations Around the Corner</span>
            </h2>
            <span className="text-xs text-slate-400 font-medium">
              Showing {filteredEvents.length} events
            </span>
          </div>

          {isLoading ? (
            <EventFeedSkeleton />
          ) : filteredEvents.length > 0 ? (
            <div className="space-y-6">
              {filteredEvents.map((evt, idx) => {
                const categoryToken = getCategoryToken(evt.category);
                const isEvenRow = idx % 2 === 0;
                const evtDateObj = new Date(evt.startDate);
                const monthShort = evtDateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                const dayNum = evtDateObj.getDate();

                return (
                  <div
                    key={evt.id}
                    className="glass-card p-6 rounded-md border border-slate-700/60 hover:border-marigold-500/50 transition-all flex flex-col md:flex-row gap-6 items-stretch group"
                  >
                    {/* Tear-off Calendar Date Block */}
                    <div className="flex-shrink-0 flex flex-row md:flex-col items-center justify-center bg-slate-950 border border-slate-800 rounded-none w-full md:w-28 p-3 text-center shadow-inner">
                      <span className="text-xs font-bold text-marigold-400 tracking-widest uppercase border-b border-slate-800 w-full pb-1">
                        {monthShort}
                      </span>
                      <span className="text-3xl font-black text-white font-serif py-1">
                        {dayNum}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {evt.startDate.split('-')[0]}
                      </span>
                    </div>

                    {/* Card Image */}
                    <div
                      className={`relative w-full md:w-72 h-48 rounded-md overflow-hidden flex-shrink-0 border border-slate-800 ${
                        !isEvenRow ? 'md:order-last' : ''
                      }`}
                    >
                      <Image
                        src={evt.cardImage}
                        alt={evt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark-950/80 via-transparent to-transparent" />
                      <div className="absolute top-2 left-2">
                        {getEventStatusBadge(evt.startDate, evt.endDate)}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${categoryToken.pillClass}`}>
                            <span className={`w-2 h-2 rounded-full ${categoryToken.dotBg}`} />
                            <span>{evt.category}</span>
                          </span>

                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{evt.stateName} ({evt.region} Zone)</span>
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-marigold-300 transition">
                          <Link href={`/festivals-events/${evt.stateSlug}/${evt.slug}`}>
                            {evt.title}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                          {evt.shortDescription}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800/80 text-xs">
                        <div className="text-slate-400 font-mono">
                          Dates: <strong className="text-slate-200">{evt.startDate}</strong> to <strong className="text-slate-200">{evt.endDate}</strong>
                        </div>

                        <Link
                          href={`/festivals-events/${evt.stateSlug}/${evt.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950 font-bold text-xs transition shadow-md group/btn"
                        >
                          <span>View Full Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="glass-panel p-12 rounded-md border border-slate-800 text-center space-y-4 my-8">
              <div className="w-14 h-14 rounded-full bg-marigold-500/10 text-marigold-400 mx-auto flex items-center justify-center border border-marigold-500/30">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">No Events Match Your Selected Filters</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                We couldn&apos;t find any celebrations matching your specific combination of filters. Try adjusting your search criteria.
              </p>
              <div>
                <button
                  onClick={handleGlobalClear}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-marigold-500 hover:bg-marigold-600 text-primary-dark-950 font-bold text-xs transition shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear All Filters & Reset Catalog</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FestivalsEventsPage() {
  return (
    <Suspense fallback={<EventFeedSkeleton />}>
      <FestivalsEventsClient />
    </Suspense>
  );
}
