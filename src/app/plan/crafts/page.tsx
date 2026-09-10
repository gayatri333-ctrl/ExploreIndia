import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Palette, Compass, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Crafts & Textiles of India | ExploreIndia',
  description: 'Explore Indian handlooms, Pashmina shawls, Kanjeevaram silk, Terracotta art, Tanjore paintings & artisan heritage.',
};

export default function CraftsPage() {
  const crafts = [
    { title: 'Kashmiri Pashmina & Carpets', region: 'Srinagar, Jammu & Kashmir', desc: 'Hand-spun fine Cashmere wool shawls and silk hand-knotted Persian carpets.' },
    { title: 'Kanjeevaram & Banarasi Silk', region: 'Tamil Nadu & Uttar Pradesh', desc: 'Pure mulberry silk sarees woven with gold and silver zari threads.' },
    { title: 'Jaipur Block Printing & Blue Pottery', region: 'Rajasthan', desc: 'Natural vegetable dye wooden block prints (Bagru/Sanganer) and quartz pottery.' },
    { title: 'Tanjore Paintings & Bronze Idols', region: 'Thanjavur, Tamil Nadu', desc: 'Classical South Indian paintings adorned with gold leaf and precious stones.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-4 h-4" />
            <span>Masterwork Artisan Traditions</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Crafts & Textiles of <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-marigold-300 to-amber-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            India is home to thousands of years of living craft traditions, from handloom weaves and embroidery to metalwork and pottery.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crafts.map((c, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-fuchsia-400">{c.region}</span>
                <Sparkles className="w-5 h-5 text-fuchsia-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-serif">{c.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/culture" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Explore People & Culture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
