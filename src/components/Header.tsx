'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass,
  Search,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Sparkles,
  Calendar,
  Bookmark,
  Plane,
} from 'lucide-react';
import DestinationsMegaMenu from '@/components/navigation/DestinationsMegaMenu';
import ExperiencesMegaMenu from '@/components/navigation/ExperiencesMegaMenu';
import PlanYourTripMegaMenu from '@/components/navigation/PlanYourTripMegaMenu';
import SearchModal from '@/components/navigation/SearchModal';
import UserMenu from '@/components/navigation/UserMenu';

export default function Header() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<'destinations' | 'experiences' | 'plan' | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mega menu when clicking outside header
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMegaMenu = (menu: 'destinations' | 'experiences' | 'plan') => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menu);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full" ref={navRef}>
      {/* Top Header Bar */}
      <div className="glass-panel border-b border-slate-700/60 px-4 lg:px-8 py-3 bg-primary-dark-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-marigold-600 via-marigold-500 to-vermilion-500 p-0.5 shadow-glow-marigold flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-primary-dark-900 rounded-[5px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-marigold-400 animate-spin-slow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight gold-gradient-text font-serif">
                Explore<span className="text-white font-sans">India</span>
              </span>
              <span className="text-[9px] tracking-widest text-slate-400 font-semibold uppercase -mt-1">
                Festivals & Tourism Portal
              </span>
            </div>
          </Link>

          {/* Center/Right Primary Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
            {/* Destinations Trigger */}
            <button
              onClick={() => toggleMegaMenu('destinations')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition ${
                activeMegaMenu === 'destinations'
                  ? 'bg-slate-800 text-marigold-400 font-semibold'
                  : 'hover:text-marigold-400 hover:bg-slate-800/60'
              }`}
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Destinations</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === 'destinations' ? 'rotate-180 text-marigold-400' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Experiences Trigger */}
            <button
              onClick={() => toggleMegaMenu('experiences')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition ${
                activeMegaMenu === 'experiences'
                  ? 'bg-slate-800 text-marigold-400 font-semibold'
                  : 'hover:text-marigold-400 hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-marigold-400" />
              <span>Experiences</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === 'experiences' ? 'rotate-180 text-marigold-400' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Plan Your Trip Trigger */}
            <button
              onClick={() => toggleMegaMenu('plan')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md transition ${
                activeMegaMenu === 'plan'
                  ? 'bg-slate-800 text-marigold-400 font-semibold'
                  : 'hover:text-marigold-400 hover:bg-slate-800/60'
              }`}
            >
              <Plane className="w-4 h-4 text-emerald-400" />
              <span>Plan your trip</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMegaMenu === 'plan' ? 'rotate-180 text-marigold-400' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Festivals & Events Direct Link */}
            <Link
              href="/events"
              onClick={() => setActiveMegaMenu(null)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md hover:text-marigold-400 hover:bg-slate-800/60 transition"
            >
              <Calendar className="w-4 h-4 text-vermilion-500" />
              <span>Festivals & Events</span>
            </Link>
          </nav>

          {/* Action Buttons: Search Icon + User Menu */}
          <div className="flex items-center gap-3">
            {/* Search Icon Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-marigold-400 transition border border-slate-700/60 flex items-center justify-center"
              title="Search Festivals & Destinations"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* User Menu with Supabase Auth */}
            <div className="hidden sm:block">
              <UserMenu />
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-slate-800 text-slate-200 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdowns Container */}
      {activeMegaMenu === 'destinations' && (
        <DestinationsMegaMenu onClose={() => setActiveMegaMenu(null)} />
      )}
      {activeMegaMenu === 'experiences' && (
        <ExperiencesMegaMenu onClose={() => setActiveMegaMenu(null)} />
      )}
      {activeMegaMenu === 'plan' && (
        <PlanYourTripMegaMenu onClose={() => setActiveMegaMenu(null)} />
      )}

      {/* Search Modal Overlay */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark-900 border-b border-slate-800 p-4 space-y-4 text-sm animate-fadeIn">
          <div className="space-y-2">
            <Link
              href="/destinations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 text-white font-medium"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Destinations</span>
            </Link>
            <Link
              href="/experiences"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 text-white font-medium"
            >
              <Sparkles className="w-4 h-4 text-marigold-400" />
              <span>Experiences</span>
            </Link>
            <Link
              href="/plan/itineraries"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 text-white font-medium"
            >
              <Plane className="w-4 h-4 text-emerald-400" />
              <span>Plan your trip</span>
            </Link>
            <Link
              href="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded hover:bg-slate-800 text-white font-medium"
            >
              <Calendar className="w-4 h-4 text-vermilion-500" />
              <span>Festivals & Events</span>
            </Link>
          </div>

          <div className="border-t border-slate-800 pt-3 flex justify-between items-center">
            <UserMenu />
            <Link
              href="/bookmarks"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarks</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
