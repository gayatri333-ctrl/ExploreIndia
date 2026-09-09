import Link from 'next/link';
import { MapPin, Globe } from 'lucide-react';

const zones = [
  { name: 'North', desc: 'Himalayan peaks, royal forts & spiritual riverbanks (Rajasthan, Punjab, Himachal, Ladakh)' },
  { name: 'South', desc: 'Ancient Dravidian temples, backwater lagoons & spice hills (Kerala, Tamil Nadu, Karnataka)' },
  { name: 'West', desc: 'White salt deserts, golden beaches & vibrant street life (Gujarat, Goa, Maharashtra)' },
  { name: 'East', desc: 'Cultural capitals, tea gardens & coastal heritage (West Bengal, Odisha)' },
  { name: 'North East', desc: 'Unexplored wilderness, tribal culture & Kaziranga rhinos (Assam, Meghalaya)' },
  { name: 'Central', desc: 'Heart of India, tiger reserves & Khajuraho heritage (Madhya Pradesh)' },
];

export default function DestinationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peacock-500/10 text-peacock-400 text-xs font-medium border border-peacock-500/20">
          <MapPin className="w-3.5 h-3.5" />
          <span>States, Cities & National Parks</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif">
          Explore by <span className="peacock-gradient-text">Zone & Region</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Discover destinations across India categorized into 6 geographic zones, 15+ states, and national parks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zones.map((zone) => (
          <div key={zone.name} className="glass-card rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-peacock-400 uppercase tracking-widest bg-peacock-500/10 px-2.5 py-1 rounded border border-peacock-500/20">
                {zone.name} Zone
              </span>
              <Globe className="w-4 h-4 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif">{zone.name} India</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{zone.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
