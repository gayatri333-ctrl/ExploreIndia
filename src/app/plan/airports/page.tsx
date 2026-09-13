import Link from 'next/link';
import { PlaneTakeoff, Train, MapPin, Compass, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Airports & Vande Bharat Rail Connectivity | ExploreIndia',
  description: 'Major international airports, domestic airline hubs, high-speed Vande Bharat express trains & transit connectivity across India.',
};

export default function AirportsPage() {
  const airports = [
    { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi', desc: 'India\'s largest international gateway with T3 world-class international arrivals.' },
    { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj Intl Airport', city: 'Mumbai', desc: 'State-of-the-art T2 terminal connecting western & international routes.' },
    { code: 'BLR', name: 'Kempegowda International Airport', city: 'Bengaluru', desc: 'Award-winning Garden Terminal T2 serving South India.' },
    { code: 'MAA', name: 'Chennai International Airport', city: 'Chennai', desc: 'Primary gateway to Tamil Nadu temples & coastal trails.' },
    { code: 'CCU', name: 'Netaji Subhash Chandra Bose Intl Airport', city: 'Kolkata', desc: 'Eastern hub for North-East & Sunderbans access.' },
    { code: 'COK', name: 'Cochin International Airport', city: 'Kochi', desc: 'World\'s first fully solar-powered international airport.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <PlaneTakeoff className="w-4 h-4" />
            <span>Air & Rail Travel Logistics</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Airport Hubs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-marigold-300 to-cyan-400">Railway Connectivity</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            India is connected by world-class international airports and high-speed Vande Bharat Express trains connecting heritage circuits across all states.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <section className="space-y-6">
          <h2 className="text-xl font-bold font-serif text-white flex items-center gap-2">
            <PlaneTakeoff className="w-5 h-5 text-indigo-400" />
            <span>Major International Airport Hubs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {airports.map((a, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {a.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{a.city}</span>
                </div>
                <h3 className="text-base font-bold text-white font-serif">{a.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-serif">Vande Bharat Express Rail Circuit</h3>
              <p className="text-xs text-slate-400">High-speed air-conditioned train service connecting Delhi-Varanasi, Delhi-Katra, Mumbai-Goa, and Mysuru-Chennai.</p>
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/partners" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>View Accredited Travel Operators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
