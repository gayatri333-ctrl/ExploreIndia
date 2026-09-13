import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Search, Sparkles, Filter, Compass, ChevronRight, Clock } from 'lucide-react';
import { ATTRACTIONS_DATA } from '@/data/dataset';
import { DESTINATION_CITIES } from '@/lib/data/cities-facts';
import { AttractionsClient } from '@/components/attractions/AttractionsClient';

export const metadata: Metadata = {
  title: 'Top Tourist Attractions & Heritage Landmarks in India | ExploreIndia',
  description: 'Discover iconic UNESCO World Heritage monuments, spiritual temples, alpine lakes, and historic fortresses across India.',
  openGraph: {
    title: 'Top Tourist Attractions & Heritage Landmarks in India | ExploreIndia',
    description: 'Discover iconic UNESCO World Heritage monuments, spiritual temples, alpine lakes, and historic fortresses across India.',
    images: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200'],
  },
};

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200"
            alt="Taj Mahal Agra"
            fill
            priority
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-saffron-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-saffron-400 font-semibold">Attractions</span>
          </nav>

          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Monumental Heritage & Wonders</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
              Iconic India Attractions & POIs
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore ancient fortresses, sacred riverfront ghats, royal palaces, living root bridges, and natural sanctuaries across the six tourism zones of India.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Client Search & Filter Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 lg:px-8">
        <AttractionsClient />
      </section>
    </div>
  );
}
