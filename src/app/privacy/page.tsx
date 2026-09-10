import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | ExploreIndia',
  description: 'ExploreIndia privacy policies, data security, and visitor confidentiality standards.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-marigold-300 to-cyan-400">Policy</span>
          </h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-6 flex-1 w-full text-xs text-slate-300 leading-relaxed">
        <p>ExploreIndia is committed to protecting your personal privacy. We do not sell or monetize personal travel data.</p>
        <h2 className="text-base font-bold text-white font-serif mt-4">1. Data Collection</h2>
        <p>We collect minimal information necessary to deliver customized festival notifications, user preferences, and itinerary bookmarks.</p>
        <h2 className="text-base font-bold text-white font-serif mt-4">2. Cookies & Analytics</h2>
        <p>Standard anonymous analytics cookies are used strictly to optimize site performance and page load speeds.</p>
      </main>

      <Footer />
    </div>
  );
}
