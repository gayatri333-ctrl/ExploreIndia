import Link from 'next/link';
import { Compass } from 'lucide-react';
import { siteConfig } from '@/config/site';

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
            <span className="font-bold text-lg text-white">{siteConfig.name}</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* Column 1: Zones & Regions */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3 text-saffron-400">
            6 Tourism Zones
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/destinations?zone=North" className="hover:text-white transition">North India (Himalaya & Heritage)</Link></li>
            <li><Link href="/destinations?zone=South" className="hover:text-white transition">South India (Temples & Backwaters)</Link></li>
            <li><Link href="/destinations?zone=West" className="hover:text-white transition">West India (Deserts & Beaches)</Link></li>
            <li><Link href="/destinations?zone=East" className="hover:text-white transition">East India (Culture & Nature)</Link></li>
            <li><Link href="/destinations?zone=Central" className="hover:text-white transition">Central India (Heart & Wildlife)</Link></li>
            <li><Link href="/destinations?zone=North+East" className="hover:text-white transition">North East (Wilderness & Roots)</Link></li>
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

        {/* Column 3: Visitor Info & Legal */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
            About & Info
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/about" className="hover:text-white transition">About ExploreIndia</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact & Support</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            <li><Link href="/advisory" className="hover:text-white transition">Travel Advisory & Guidelines</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {siteConfig.copyrightYear} {siteConfig.title}. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0 font-medium text-slate-300">
          {siteConfig.footerCredit}
        </p>
      </div>
    </footer>
  );
}
