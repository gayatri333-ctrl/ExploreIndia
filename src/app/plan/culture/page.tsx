import Link from 'next/link';
import { HeartHandshake, Compass, ArrowRight, Utensils, Heart } from 'lucide-react';

export const metadata = {
  title: 'People, Customs & Cultural Etiquette | ExploreIndia',
  description: 'Learn about Indian hospitality (Atithi Devo Bhava), regional customs, temple etiquette, languages, and culinary traditions.',
};

export default function CulturePage() {
  const topics = [
    { title: 'Atithi Devo Bhava', desc: 'The ancient Indian philosophy of viewing guests as divine figures, reflected in warm regional hospitality.', icon: Heart, color: 'text-amber-400' },
    { title: 'Temple Etiquette', desc: 'Removing footwear at thresholds, dressing modestly, and following temple circumambulation (Pradakshina).', icon: HeartHandshake, color: 'text-marigold-400' },
    { title: 'Culinary Diversity', desc: 'From Nawabi Biryanis and Rajasthani Thalis to South Indian Sadya served on banana leaves.', icon: Utensils, color: 'text-emerald-400' },
    { title: 'Languages & Greetings', desc: 'Namaste with folded hands, over 22 official languages, and rich regional dialects across 28 states.', icon: Compass, color: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>Cultural Heritage & Etiquette</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            People & Culture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-marigold-300 to-cyan-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Discover the rich tapestry of Indian customs, festivals, culinary arts, and timeless values that welcome travelers from around the globe.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((t, idx) => {
            const IconComp = t.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <IconComp className={`w-5 h-5 ${t.color}`} />
                </div>
                <h2 className="text-lg font-bold text-white font-serif">{t.title}</h2>
                <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/festivals-events" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>View Cultural Festivals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
