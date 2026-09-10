import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | ExploreIndia',
  description: 'Terms of Service, website usage rules, and copyright guidelines for ExploreIndia.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Website Terms & Conditions</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-marigold-300 to-amber-400">Service</span>
          </h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-6 flex-1 w-full text-xs text-slate-300 leading-relaxed">
        <p>By accessing ExploreIndia, you agree to comply with our general platform usage policies.</p>
        <h2 className="text-base font-bold text-white font-serif mt-4">1. Use of Content</h2>
        <p>All tourism text, guides, itineraries, and official photography on ExploreIndia are intended for personal non-commercial travel planning.</p>
        <h2 className="text-base font-bold text-white font-serif mt-4">2. Accuracy of Event Schedules</h2>
        <p>While festival dates and melas are updated regularly, local temple authorities may adjust calendar dates based on lunar sightings.</p>
      </main>

      <Footer />
    </div>
  );
}
