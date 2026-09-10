import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldAlert, Compass, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Travel Advisory & Health Guidelines | ExploreIndia',
  description: 'Official travel advisories, high-altitude acclimatization tips, seasonal health guidelines & tourist safety protocols.',
};

export default function AdvisoryPage() {
  const advisories = [
    { title: 'High-Altitude Acclimatization', location: 'Ladakh & Spiti Valley', desc: 'Travelers flying directly into Leh (3,500m) must mandatory rest for 48 hours to acclimatize before high pass travel.' },
    { title: 'Monsoon Treks & River Rafting', location: 'Uttarakhand & Western Ghats', desc: 'River rafting in Rishikesh is suspended during peak monsoon (July-September). Check weather warnings before mountain trekking.' },
    { title: 'National Park Wildlife Closures', location: 'Pan-India Tiger Reserves', desc: 'Most tiger reserves (Jim Corbett, Ranthambore, Kanha) are closed during monsoon months (July 1 - September 30).' },
    { title: 'Vaccinations & Health', location: 'International Visitors', desc: 'Routine vaccinations, bottled drinking water advisories, and mosquito repellents recommended for tropical regions.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Safety & Health Guidelines</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Travel Advisory & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-marigold-300 to-cyan-400">Guidelines</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Essential health tips, seasonal national park closures, and high-altitude safety guidelines for international and domestic travelers.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisories.map((a, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-400">{a.location}</span>
                <ShieldAlert className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-serif">{a.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/emergency" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>View Emergency Helplines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
