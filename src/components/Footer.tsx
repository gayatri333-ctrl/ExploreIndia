import Link from 'next/link';
import { Compass, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-royal-950 border-t border-white/10 mt-20 pt-12 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand section */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-saffron-500 flex items-center justify-center text-royal-900 font-bold">
              <Compass className="w-5 h-5 text-royal-950" />
            </div>
            <span className="font-bold text-lg text-white">ExploreIndia</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Discover vibrant cultural heritage, royal festivals, spiritual trails, national parks, and destination experiences across India.
          </p>
        </div>

        {/* Column 1: Zones & Regions */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3 text-saffron-400">
            Zones & Regions
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/destinations?zone=North" className="hover:text-white transition">North India (Himalaya & Heritage)</Link></li>
            <li><Link href="/destinations?zone=South" className="hover:text-white transition">South India (Temples & Backwaters)</Link></li>
            <li><Link href="/destinations?zone=West" className="hover:text-white transition">West India (Deserts & Beaches)</Link></li>
            <li><Link href="/destinations?zone=East" className="hover:text-white transition">East India (Culture & Nature)</Link></li>
            <li><Link href="/destinations?zone=North+East" className="hover:text-white transition">North East (Unexplored Paradises)</Link></li>
          </ul>
        </div>

        {/* Column 2: Experiences */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3 text-peacock-400">
            Experience Topics
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/experiences#wildlife" className="hover:text-white transition">Wildlife Safaris & Tiger Reserves</Link></li>
            <li><Link href="/experiences#heritage" className="hover:text-white transition">Palaces, Forts & World Heritage</Link></li>
            <li><Link href="/experiences#spiritual" className="hover:text-white transition">Spiritual Trails & Ganga Aarti</Link></li>
            <li><Link href="/experiences#adventure" className="hover:text-white transition">Himalayan Treks & Rafting</Link></li>
            <li><Link href="/experiences#gastronomy" className="hover:text-white transition">Gastronomy & Royal Food Tours</Link></li>
          </ul>
        </div>

        {/* Column 3: Tech Stack & Supabase */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3 text-gold-400">
            Tech Architecture
          </h4>
          <div className="bg-royal-900/80 p-3 rounded-lg border border-white/10 text-xs space-y-1.5">
            <div className="flex justify-between"><span className="text-slate-400">Framework:</span> <span className="text-emerald-400 font-medium">Next.js 14 App Router</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Database:</span> <span className="text-emerald-400 font-medium">Supabase (Postgres)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Styling:</span> <span className="text-emerald-400 font-medium">Tailwind CSS</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Deployment:</span> <span className="text-emerald-400 font-medium">Vercel Ready</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ExploreIndia Tourism Portal. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Indian Tourism
        </p>
      </div>
    </footer>
  );
}
