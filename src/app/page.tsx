import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, MapPin, Calendar, 
  Sparkles, Flame, TreePine, Landmark, HeartHandshake, 
  Utensils, Gem, Stethoscope, Palette, Home, Trees, Bike,
  ChevronRight, BookmarkCheck, ArrowRight
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { DestinationsBucketList } from '@/components/DestinationsBucketList';
import { AttractionsCarousel } from '@/components/AttractionsCarousel';
import { TravelDiariesSection } from '@/components/TravelDiariesSection';
import { ItinerariesSection } from '@/components/ItinerariesSection';
import { RuralWondersStrip } from '@/components/RuralWondersStrip';
import { CraftsCarousel } from '@/components/CraftsCarousel';
import { TravelTools } from '@/components/TravelTools';

// Sample experience topics matching the database schema
const parentTopics = [
  { name: 'Wildlife', icon: TreePine, color: 'from-emerald-500 to-teal-700', subs: ['Tiger Safaris', 'Bird Watching', 'Elephant Reserves', 'Marine Life'] },
  { name: 'Heritage', icon: Landmark, color: 'from-amber-500 to-orange-700', subs: ['Palaces & Forts', 'UNESCO World Heritage Sites', 'Ancient Temples', 'Colonial Architecture'] },
  { name: 'Spiritual', icon: Flame, color: 'from-saffron-500 to-rose-700', subs: ['Ganga Aarti & Ghats', 'Pilgrimage Trails', 'Meditation Retreats', 'Sufi Music Festivals'] },
  { name: 'Adventure', icon: Compass, color: 'from-sky-500 to-indigo-700', subs: ['Himalayan Trekking', 'River Rafting', 'Scuba Diving & Snorkeling', 'Desert Safaris'] },
  { name: 'Gastronomy', icon: Utensils, color: 'from-yellow-500 to-amber-700', subs: ['Street Food Tours', 'Royal Cuisine Masterclasses', 'Spice Plantation Tours', 'Vineyard Trails'] },
  { name: 'Weddings', icon: HeartHandshake, color: 'from-rose-500 to-pink-700', subs: ['Royal Palace Weddings', 'Beach Destination Weddings', 'Backwater Ceremonies'] },
  { name: 'Wellness', icon: Stethoscope, color: 'from-teal-400 to-emerald-600', subs: ['Ayurvedic Healing', 'Yoga Shalas', 'Naturopathy & Spas'] },
  { name: 'Arts', icon: Palette, color: 'from-purple-500 to-violet-700', subs: ['Classical Dance Festivals', 'Folk Music Gatherings', 'Handicraft Workshops', 'Textile Trails'] },
  { name: 'Rural', icon: Home, color: 'from-lime-500 to-green-700', subs: ['Village Homestays', 'Farm-to-Table Experiences', 'Tribal Culture Tours'] },
  { name: 'Nature', icon: Trees, color: 'from-cyan-500 to-blue-700', subs: ['Backwater Cruises', 'Hill Station Escapes', 'Valley Flower Trails'] },
  { name: 'Recreation', icon: Bike, color: 'from-fuchsia-500 to-purple-700', subs: ['Hot Air Ballooning', 'Luxury Train Journeys', 'Golfing in the Hills'] }
];

const featuredEvents = [
  {
    title: 'Pushkar Camel Fair',
    slug: 'pushkar-camel-fair',
    stateSlug: 'rajasthan',
    state: 'Rajasthan',
    zone: 'North',
    category: 'Cultural & Heritage',
    type: 'Traditional Festival',
    dates: 'Nov 20 - Nov 28, 2026',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
    description: 'One of the world\'s largest camel fairs, featuring vibrant livestock trading, folk music, traditional dances, hot air ballooning, and holy dip in Pushkar Lake.'
  },
  {
    title: 'Rann Utsav Kutch',
    slug: 'rann-utsav-kutch',
    stateSlug: 'gujarat',
    state: 'Gujarat',
    zone: 'West',
    category: 'Arts & Culture',
    type: 'Cultural Carnival',
    dates: 'Nov 01 - Feb 28, 2027',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    description: 'A magnificent desert festival held on the endless white salt marshes of the Great Rann of Kutch under full moonlit nights.'
  },
  {
    title: 'Kolkata Durga Puja Festival',
    slug: 'durga-puja-kolkata',
    stateSlug: 'west-bengal',
    state: 'West Bengal',
    zone: 'East',
    category: 'Heritage & Spiritual',
    type: 'UNESCO Cultural Heritage',
    dates: 'Oct 17 - Oct 21, 2026',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    description: 'A world-renowned street art installation and grand spiritual celebration transforming Kolkata into an open-air art museum.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section with Video Background and Category Tabs */}
      <HeroSection />

      {/* Destinations for Every Bucket List Carousel */}
      <DestinationsBucketList />

      {/* Experience Topics Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Explore by <span className="gold-gradient-text">Experience Topics</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Dive into specialized travel themes across India&apos;s rich cultural and natural landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {parentTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div 
                key={topic.name}
                className="glass-card rounded-xl p-5 space-y-3 group cursor-pointer hover:border-saffron-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-tr ${topic.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-saffron-400 transition-colors">
                      {topic.name}
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      {topic.subs.length} Sub-experiences
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {topic.subs.map((sub) => (
                    <span 
                      key={sub}
                      className="text-[10px] bg-royal-900/90 text-slate-300 px-2 py-1 rounded border border-white/5 hover:border-saffron-500/30 hover:text-saffron-300 transition"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Attractions Worth a Thousand Stories Carousel */}
      <AttractionsCarousel />

      {/* Crafted Itineraries Section with 3-Facet Filter (Region, Interest, Trip Length) */}
      <ItinerariesSection />

      {/* Featured Festivals & Events */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Featured <span className="peacock-gradient-text">Indian Festivals & Events</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Handpicked cultural gatherings, monastic rituals, and heritage carnivals.
            </p>
          </div>
          <Link 
            href="/festivals-events"
            className="text-saffron-400 hover:text-saffron-300 text-sm font-semibold flex items-center gap-1 group"
          >
            <span>View All Events</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div key={event.slug} className="glass-card rounded-xl overflow-hidden flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-royal-900/80 backdrop-blur-md text-saffron-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                  {event.category}
                </div>
                <button 
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-royal-950/60 backdrop-blur-md text-slate-300 hover:text-rose-400 border border-white/10 transition"
                  title="Bookmark event"
                >
                  <BookmarkCheck className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-peacock-300">
                      <MapPin className="w-3.5 h-3.5" /> {event.state} ({event.zone})
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-saffron-400" /> {event.dates}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-saffron-400 transition-colors font-serif">
                    <Link href={`/festivals-events/${event.stateSlug}/${event.slug}`}>
                      {event.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[10px] bg-saffron-500/10 text-saffron-400 px-2 py-0.5 rounded border border-saffron-500/20 font-medium">
                    {event.type}
                  </span>
                  <Link 
                    href={`/festivals-events/${event.stateSlug}/${event.slug}`}
                    className="text-saffron-400 hover:text-white font-medium flex items-center gap-1 transition"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Diaries Blog Section with Interest + Region Filter */}
      <TravelDiariesSection />

      {/* Lesser Known Wonders Rural Tourism Strip */}
      <RuralWondersStrip />

      {/* Plan Your Trip Practical Toolkit Section */}
      <TravelTools />

      {/* Exquisite Indian Crafts Carousel */}
      <CraftsCarousel />
    </div>
  );
}
