import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Map, Clock, MapPin, Sparkles, ArrowRight, Compass, Filter } from 'lucide-react';

export const metadata = {
  title: 'Curated India Itineraries (3-Day, 7-Day & 14-Day) | ExploreIndia',
  description: 'Handcrafted Golden Triangle, Himalayan trails, Kerala backwater, and South India temple travel itineraries with day-by-day guides.',
};

export interface ItineraryItem {
  id: string;
  slug: string;
  duration: '3-day' | '7-day' | '14-day';
  durationLabel: string;
  title: string;
  subtitle: string;
  zone: string;
  highlights: string[];
  days: Array<{ day: number; title: string; desc: string }>;
  tags: string[];
}

export const ITINERARIES_DATA: ItineraryItem[] = [
  {
    id: 'gt-14',
    slug: 'golden-triangle-kerala',
    duration: '14-day',
    durationLabel: '14 Days / 13 Nights',
    title: 'The Ultimate Golden Triangle & Kerala Backwaters Trail',
    subtitle: 'Delhi • Agra • Jaipur • Kochi • Munnar • Alleppey Backwaters',
    zone: 'North & South',
    highlights: ['Taj Mahal Sunrise', 'Amber Fort Elephant Ramparts', 'Houseboat Overnight Stay in Alleppey', 'Tea Plantation Walk in Munnar'],
    tags: ['Best Seller', 'Heritage & Nature', 'First Time Visitor'],
    days: [
      { day: 1, title: 'Arrival in Delhi', desc: 'Welcome to India! Private transfer to hotel. Evening food walk in Chandni Chowk.' },
      { day: 2, title: 'Old & New Delhi City Tour', desc: 'Visit Red Fort, Humayun’s Tomb, Qutub Minar, and India Gate.' },
      { day: 3, title: 'Delhi to Agra - Taj Mahal', desc: 'Express highway to Agra. Sunset view of Taj Mahal from Mehtab Bagh.' },
      { day: 4, title: 'Agra Fort to Jaipur via Fatehpur Sikri', desc: 'Explore Fatehpur Sikri UNESCO ruins en route to the Pink City.' },
      { day: 5, title: 'Jaipur Palaces & Forts', desc: 'Amber Fort, City Palace, Hawa Mahal, and Jal Mahal.' },
      { day: 6, title: 'Jaipur Heritage & Bazaars', desc: 'Jantar Mantar observatory and local block-printing craft shopping.' },
      { day: 7, title: 'Fly Jaipur to Kochi, Kerala', desc: 'Arrival in Fort Kochi. Evening Kathakali dance performance.' },
      { day: 8, title: 'Fort Kochi Heritage Walk', desc: 'Chinese Fishing Nets, Mattancherry Palace & St. Francis Church.' },
      { day: 9, title: 'Kochi to Munnar Tea Gardens', desc: 'Drive through Cheeyappara Waterfalls into lush Munnar valleys.' },
      { day: 10, title: 'Munnar Wildlife & Tea Tasting', desc: 'Eravikulam National Park (Nilgiri Tahr) & Tea Museum tour.' },
      { day: 11, title: 'Munnar to Alleppey Houseboat', desc: 'Board private Kettuvallam luxury houseboat. Cruise Vembanad Lake.' },
      { day: 12, title: 'Backwater Village Life', desc: 'Village canoe cruise, paddy field walks, and traditional Kerala Sadya.' },
      { day: 13, title: 'Alleppey to Marari Beach', desc: 'Relax at pristine Marari palm beach.' },
      { day: 14, title: 'Departure from Kochi Airport', desc: 'Final souvenir shopping and departure transfer.' },
    ],
  },
  {
    id: 'gt-7',
    slug: 'golden-triangle-express',
    duration: '7-day',
    durationLabel: '7 Days / 6 Nights',
    title: 'Golden Triangle Royal Heritage Circuit',
    subtitle: 'Delhi • Agra (Taj Mahal) • Jaipur (Pink City)',
    zone: 'North',
    highlights: ['Taj Mahal at Dawn', 'Jaipur Hawa Mahal', 'Fatehpur Sikri Royal Court', 'Delhi Mughlai Feasts'],
    tags: ['Classic India', 'Must Do', 'Royal Forts'],
    days: [
      { day: 1, title: 'Arrive Delhi', desc: 'Check-in and evening visit to Connaught Place and Gurudwara Bangla Sahib.' },
      { day: 2, title: 'Delhi Monuments', desc: 'Humayun’s Tomb, Lotus Temple and Qutub Minar.' },
      { day: 3, title: 'Agra - Taj Mahal', desc: 'Drive to Agra. Guided tour of Taj Mahal and Agra Fort.' },
      { day: 4, title: 'Fatehpur Sikri & Jaipur', desc: 'Stop at Buland Darwaza en route to Jaipur.' },
      { day: 5, title: 'Jaipur Fort Trail', desc: 'Amber Fort, Nahargarh Fort sunset view & Chokhi Dhani village.' },
      { day: 6, title: 'Pink City Shopping', desc: 'Bapu Bazaar jewelry & textiles. City Palace museum.' },
      { day: 7, title: 'Return to Delhi', desc: 'Transfer to Delhi Airport for departure flight.' },
    ],
  },
  {
    id: 'varanasi-3',
    slug: 'spiritual-varanasi-3day',
    duration: '3-day',
    durationLabel: '3 Days / 2 Nights',
    title: 'Spiritual Trail of Varanasi & Sarnath',
    subtitle: 'Varanasi Ghats • Ganga Aarti • Sarnath Buddha Deer Park',
    zone: 'Central / East',
    highlights: ['Sunrise Boat Ride on River Ganga', 'Dashashwamedh Ghat Ganga Aarti', 'Kashi Vishwanath Temple', 'Sarnath Enlightenment Site'],
    tags: ['Spiritual & Cultural', 'Weekend Escape', 'Ghats Walk'],
    days: [
      { day: 1, title: 'Arrive Varanasi & Evening Aarti', desc: 'Check-in and boat ride to witness spectacular Dashashwamedh Ghat Aarti.' },
      { day: 2, title: 'Sunrise Boat Ride & Temple Trail', desc: 'Dawn rowing boat ride, Manikarnika Ghat, Kashi Vishwanath & Banaras Hindu University.' },
      { day: 3, title: 'Sarnath & Departure', desc: 'Visit Dhamek Stupa Sarnath where Buddha gave his first sermon. Airport transfer.' },
    ],
  },
];

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Map className="w-4 h-4" />
            <span>Handcrafted Travel Routes</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Curated India <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-marigold-300 to-cyan-400">Itineraries</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Tested, day-by-day travel plans designed for first-time visitors, heritage seekers, spiritual travelers, and nature lovers.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Itinerary Cards */}
        <div className="space-y-8">
          {ITINERARIES_DATA.map((itinerary) => (
            <div
              key={itinerary.id}
              className="p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition shadow-xl space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
                      {itinerary.durationLabel}
                    </span>
                    <span className="text-xs text-slate-400">• {itinerary.zone} Zone</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white font-serif mt-2">
                    {itinerary.title}
                  </h2>
                  <div className="text-xs md:text-sm font-medium text-marigold-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-marigold-400" />
                    <span>{itinerary.subtitle}</span>
                  </div>
                </div>

                <Link
                  href={`/plan/itineraries/${itinerary.duration}/${itinerary.slug}`}
                  className="px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <span>View Full Day-by-Day Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Highlights & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Top Experiences Included</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {itinerary.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Days Preview</div>
                  <div className="space-y-1 text-xs text-slate-400">
                    {itinerary.days.slice(0, 3).map((d, i) => (
                      <div key={i} className="truncate">
                        <strong className="text-white font-mono">Day {d.day}:</strong> {d.title}
                      </div>
                    ))}
                    {itinerary.days.length > 3 && (
                      <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                        + {itinerary.days.length - 3} more days in detailed guide
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/festivals-events" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Combine with Festival Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
