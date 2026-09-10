import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trees, Compass, ArrowRight, Heart } from 'lucide-react';

export const metadata = {
  title: 'Rural Tourism & Village Eco-Stays | ExploreIndia',
  description: 'Discover authentic Indian village homestays, living root bridges, organic farm experiences, and indigenous craft traditions.',
};

export default function RuralTourismPage() {
  const experiences = [
    { title: 'Meghalaya Living Root Village', location: 'Cherrapunji & Mawlynnong', desc: 'Experience Mawlynnong, awarded Asia\'s cleanest village, and trek across centuries-old living root bridges.' },
    { title: 'Kutch Craft Villages', location: 'Hodka & Nirona, Gujarat', desc: 'Stay in traditional Bhunga mud huts, watch Rogan art creation, and explore white salt desert culture.' },
    { title: 'Kerala Eco-Homestays', location: 'Kumarakom & Wayanad', desc: 'Immerse in village backwater farming, coconut canopy walks, and traditional organic Kerala cuisine.' },
    { title: 'Spiti Valley Monastic Stays', location: 'Kibber & Langza, Himachal', desc: 'High-altitude cold desert village stays with traditional homestays and fossil village trails.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-semibold uppercase tracking-wider">
            <Trees className="w-4 h-4" />
            <span>Sustainable Rural Encounters</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Rural Tourism & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400">Village Homestays</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Step off the beaten track to experience authentic village life, organic farming, artisan workshops, and warm indigenous hospitality.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((e, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-lime-400">{e.location}</span>
                <Trees className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-serif">{e.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/crafts" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Discover Textiles & Crafts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
