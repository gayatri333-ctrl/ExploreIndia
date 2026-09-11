'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, MapPin, ArrowRight, Compass, Mountain, 
  Trees, Footprints, Landmark, Flame, Sparkle
} from 'lucide-react';

export interface HeroCategory {
  id: string;
  name: string;
  icon: typeof Compass;
  videoUrl: string;
  posterUrl: string;
  tagline: string;
  highlightText: string;
  featuredTitle: string;
  featuredLocation: string;
  featuredDesc: string;
}

export const HERO_CATEGORIES: HeroCategory[] = [
  {
    id: 'india-360',
    name: 'India 360',
    icon: Compass,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-landscape-with-mountains-and-a-41257-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600',
    tagline: 'Panoramic Heritage & Cultural Wonders',
    highlightText: 'India\'s Royal Festivals',
    featuredTitle: 'Taj Mahal & Monumental Trails',
    featuredLocation: 'Agra, Uttar Pradesh • North Zone',
    featuredDesc: 'Witness the iconic monument of love bathed in golden sunrise rays along the Yamuna.'
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: Mountain,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hiker-walking-on-a-mountain-ridge-at-sunset-41551-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600',
    tagline: 'Himalayan Treks & White Water Trails',
    highlightText: 'Thrill & Wild Expeditions',
    featuredTitle: 'Rishikesh Rafting & High Treks',
    featuredLocation: 'Rishikesh, Uttarakhand • North Zone',
    featuredDesc: 'Conquer Himalayan river rapids, zip-line across valleys, and summit high alpine passes.'
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: Trees,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600',
    tagline: 'Backwaters, Valleys & Hill Retreats',
    highlightText: 'Serene Natural Escapes',
    featuredTitle: 'Alleppey Houseboat Backwaters',
    featuredLocation: 'Alleppey, Kerala • South Zone',
    featuredDesc: 'Glide along emerald palm-fringed backwaters and lush tea gardens of God\'s Own Country.'
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    icon: Footprints,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-elephants-walking-in-a-field-41539-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1600',
    tagline: 'Tiger Reserves & National Parks',
    highlightText: 'Untamed Safari Trails',
    featuredTitle: 'Ranthambore Royal Tiger Safari',
    featuredLocation: 'Sawai Madhopur, Rajasthan • West Zone',
    featuredDesc: 'Track Bengal tigers, leopards, and ancient fort ruins deep in dense deciduous forests.'
  },
  {
    id: 'heritage',
    name: 'Heritage',
    icon: Landmark,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-ancient-temple-architecture-under-blue-sky-42589-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600',
    tagline: 'Palaces, Forts & UNESCO Wonders',
    highlightText: 'Royal Kingdoms & Citadel Trails',
    featuredTitle: 'Pushkar Desert & Palace Fair',
    featuredLocation: 'Pushkar, Rajasthan • West Zone',
    featuredDesc: 'Experience grand camel trading, folk dances, hot-air ballooning, and holy lakeside rituals.'
  },
  {
    id: 'spiritual',
    name: 'Spiritual',
    icon: Flame,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-lighting-candles-during-a-traditional-ceremony-42111-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1600',
    tagline: 'Ganga Aarti, Pilgrimages & Retreats',
    highlightText: 'Sacred Ganges Rituals',
    featuredTitle: 'Varanasi Dev Deepawali & Aarti',
    featuredLocation: 'Varanasi, Uttar Pradesh • North Zone',
    featuredDesc: 'Be mesmerized by thousands of brass lamps, holy chants, and ancient ghats along the Ganges.'
  },
  {
    id: 'others',
    name: 'Others',
    icon: Sparkle,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-vibrant-festival-42880-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600',
    tagline: 'Fairs, Carnivals & Folk Celebrations',
    highlightText: 'Vibrant Street Carnivals',
    featuredTitle: 'Rann Utsav Salt Desert Carnival',
    featuredLocation: 'Kutch, Gujarat • West Zone',
    featuredDesc: 'Immerse in full-moon night music, craft village bazaars, and white salt desert luxury tents.'
  }
];

export function HeroSection() {
  const [activeTabId, setActiveTabId] = useState<string>('india-360');
  const [videoError, setVideoError] = useState<boolean>(false);

  const activeCategory = HERO_CATEGORIES.find((cat) => cat.id === activeTabId) || HERO_CATEGORIES[0];

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setVideoError(false);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4 lg:px-8 border-b border-white/10 min-h-[620px] flex items-center">
      {/* Background Video & Image Layer */}
      <div className="absolute inset-0 -z-20 bg-primary-dark-950 overflow-hidden">
        {!videoError ? (
          <video
            key={activeCategory.id}
            autoPlay
            loop
            muted
            playsInline
            poster={activeCategory.posterUrl}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover scale-105 transition-all duration-1000 brightness-90"
          >
            <source src={activeCategory.videoUrl} type="video/mp4" />
          </video>
        ) : (
          /* Fallback image if video fails to load or on low-bandwidth */
          <Image
            src={activeCategory.posterUrl}
            alt={activeCategory.name}
            fill
            priority
            className="object-cover scale-105 transition-all duration-700 brightness-90"
          />
        )}
      </div>

      {/* Dark Multi-layer Gradient Overlays for optimal text contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-royal-950/95 via-royal-950/80 to-royal-950/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-royal-950 via-transparent to-royal-950/60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-saffron-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 my-auto">
        
        {/* Left Column Content */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Category Tabs Row */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-saffron-400" />
              <span>Explore India — Tourism & Festivals Portal</span>
            </div>

            {/* Category Tabs Scroll Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1 max-w-full">
              {HERO_CATEGORIES.map((category) => {
                const Icon = category.icon;
                const isActive = category.id === activeTabId;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(category.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-marigold-500 to-marigold-600 text-royal-950 shadow-glow-marigold scale-105 font-bold'
                        : 'bg-royal-900/70 hover:bg-royal-800 text-slate-300 hover:text-white border border-white/10 hover:border-saffron-500/40 backdrop-blur-md'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-royal-950' : 'text-saffron-400'}`} />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Experience the Magic of <br />
              <span className="gold-gradient-text font-serif">{activeCategory.highlightText}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-normal leading-relaxed">
              {activeCategory.tagline} — From Rajasthan&apos;s desert carnivals to Kerala&apos;s backwaters and Himalayan sanctuaries, discover, bookmark, and plan your journey.
            </p>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/15 text-left max-w-lg bg-royal-950/40 backdrop-blur-sm px-4 rounded-xl">
            <div>
              <div className="text-2xl font-extrabold text-saffron-400">28+</div>
              <div className="text-xs text-slate-300 font-medium">States & Zones</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-peacock-400">11</div>
              <div className="text-xs text-slate-300 font-medium">Experience Topics</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gold-400">100%</div>
              <div className="text-xs text-slate-300 font-medium">Curated Events</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-1">
            <Link 
              href="/festivals-events" 
              className="bg-gradient-to-r from-saffron-500 via-saffron-600 to-gold-600 hover:from-saffron-600 hover:to-gold-700 text-white font-semibold px-6 py-3 rounded-xl shadow-glow-saffron transition-all hover:scale-[1.02] flex items-center gap-2 text-sm"
            >
              <span>Browse All Festivals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/destinations" 
              className="bg-royal-900/80 hover:bg-royal-800 text-slate-200 hover:text-white font-semibold px-6 py-3 rounded-xl border border-white/15 backdrop-blur-md transition-all hover:scale-[1.02] text-sm"
            >
              <span>Explore Destinations</span>
            </Link>
          </div>
        </div>

        {/* Right Column Showcase Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden glass-card p-2 group shadow-2xl border border-white/20">
            <div className="relative h-72 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                key={activeCategory.id}
                src={activeCategory.posterUrl} 
                alt={activeCategory.featuredTitle} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-saffron-500 text-royal-950 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                {activeCategory.name} Spotlight
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 space-y-2">
                <span className="text-xs text-peacock-300 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-saffron-400" /> {activeCategory.featuredLocation}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif">{activeCategory.featuredTitle}</h3>
                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                  {activeCategory.featuredDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
