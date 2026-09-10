import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact & Tourist Support | ExploreIndia',
  description: 'Contact ExploreIndia support, official Ministry of Tourism assistance, and 24/7 tourist helplines.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Support & Inquiries</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-marigold-300 to-amber-400">Support</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Have questions about your travel itinerary, e-Visa processing, or festival dates? Reach out to our 24/7 tourist assistance team.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-serif text-white">Direct Contacts</h2>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">24/7 Toll-Free Tourist Helpline</div>
                  <div className="text-base font-bold font-mono text-white">1800-11-1363 / 1363</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Official Email Support</div>
                  <div className="text-sm font-bold text-white font-mono">support@exploreindia.gov.in</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Head Office</div>
                  <div className="text-sm font-semibold text-white">Transport Bhawan, 1 Parliament Street, New Delhi 110001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold font-serif text-white">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Your Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-marigold-500 outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Email Address</label>
                <input type="email" placeholder="name@example.com" className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-marigold-500 outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Inquiry Details</label>
                <textarea rows={3} placeholder="How can we assist your trip?" className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:border-marigold-500 outline-none" />
              </div>
              <button type="button" className="w-full py-2.5 rounded-lg bg-marigold-500 hover:bg-marigold-600 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5">
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
