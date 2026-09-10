import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sun, CloudRain, Snowflake, Thermometer, MapPin, ArrowRight, Compass } from 'lucide-react';

export const metadata = {
  title: 'India Weather & Best Seasons Guide | ExploreIndia',
  description: 'Regional weather insights, monsoon schedules, winter Himalayan snow trails, and best travel seasons across India.',
};

export default function WeatherPage() {
  const seasons = [
    {
      title: 'Winter (October - March)',
      badge: 'Peak Tourism Season',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      icon: Snowflake,
      color: 'text-cyan-400',
      desc: 'Pleasant temperatures across Rajasthan, Golden Triangle, South Indian beaches & Madhya Pradesh tiger reserves. Heavy snow in Ladakh, Himachal & Uttarakhand for winter sports.',
      destinations: ['Rajasthan Deserts', 'Kerala Backwaters', 'Goa Beaches', 'Varanasi Ghats', 'Gulmarg Ski Slopes'],
    },
    {
      title: 'Summer (April - June)',
      badge: 'Himalayan & Hill Station Season',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      icon: Sun,
      color: 'text-amber-400',
      desc: 'Warm in plains (35°C - 42°C). Best season to escape to Himalayan hill stations, tea gardens of Munnar/Darjeeling, and high-altitude trekking in Ladakh & Spiti.',
      destinations: ['Shimla & Manali', 'Ladakh Passes', 'Darjeeling & Sikkim', 'Ooty & Kodaikanal', 'Munnar Tea Hills'],
    },
    {
      title: 'Monsoon (July - September)',
      badge: 'Lush Greenery & Ayurvedic Wellness',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      icon: CloudRain,
      color: 'text-indigo-400',
      desc: 'Refreshing rains transform Western Ghats, Meghalaya root bridges, and waterfalls into lush paradises. Peak season for Ayurvedic wellness therapies in Kerala.',
      destinations: ['Cherrapunji & Shillong', 'Western Ghats Waterfalls', 'Valley of Flowers Trek', 'Kerala Ayurvedic Retreats', 'Udaipur Lakes'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sun className="w-4 h-4" />
            <span>Climate & Seasonal Travel Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Weather & Seasons in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-marigold-300 to-cyan-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            India experiences diverse climatic zones ranging from snow-capped Himalayan summits to tropical coastal backwaters and Thar desert sands. Plan your itinerary around India&apos;s 3 major seasons.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasons.map((season, idx) => {
            const IconComponent = season.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl hover:border-slate-700 transition">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center ${season.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold border ${season.badgeColor}`}>
                      {season.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white font-serif">{season.title}</h2>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{season.desc}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Top Recommended Spots</div>
                  <div className="flex flex-wrap gap-1.5">
                    {season.destinations.map((d, i) => (
                      <span key={i} className="text-xs bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-md">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Directory link */}
        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/itineraries" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Browse Seasonal Itineraries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
