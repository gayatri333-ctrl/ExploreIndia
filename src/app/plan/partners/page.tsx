import Link from 'next/link';
import { Users, ShieldCheck, Award, PhoneCall, Compass, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Accredited Travel Partners & Operators | ExploreIndia',
  description: 'Ministry of Tourism approved tour operators, accredited guides, luxury train charters, and verified transport rentals across India.',
};

export default function PartnersPage() {
  const partners = [
    { category: 'Approved Inbound Tour Operators', desc: 'Recognized by Ministry of Tourism for Golden Triangle, Heritage & Wildlife tours.', count: '500+ Verified Operators' },
    { category: 'Accredited Tourist Guides', desc: 'Licensed multilingual guides trained in history, archaeology & regional languages.', count: '3,000+ Regional Guides' },
    { category: 'Luxury Heritage Trains', desc: 'Palace on Wheels, Maharajas\' Express, Golden Chariot & Deccan Odyssey bookings.', count: '4 Royal Luxury Circuits' },
    { category: 'Government Transport Corporations', desc: 'State-run luxury Volvo buses and official airport taxi services.', count: '28 State Corporations' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-marigold-500/10 border border-marigold-500/30 text-marigold-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Ministry Accredited Services</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Travel Partners & <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">Tour Operators</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Ensure safety, authentic experiences, and official pricing by booking through Ministry of Tourism recognized travel operators and accredited guides.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((p, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-marigold-500/20 text-marigold-300 border border-marigold-500/30">
                  {p.count}
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-serif">{p.category}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/itineraries" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Explore Curated Itineraries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
