import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Coins, CreditCard, Landmark, DollarSign, Compass, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'INR Currency & Payment Guide | ExploreIndia',
  description: 'Indian Rupee (INR) exchange rates, foreign exchange counters, ATM networks, card acceptance, and digital payments (UPI) for international tourists.',
};

export default function CurrencyPage() {
  const tips = [
    { title: 'Currency Units', desc: 'Indian Rupee (₹ / INR). Denominations in circulation: ₹10, ₹20, ₹50, ₹100, ₹200, and ₹500 bank notes.', icon: Coins, color: 'text-amber-400' },
    { title: 'Card Acceptance', desc: 'Visa, Mastercard & American Express are widely accepted at hotels, restaurants, shopping malls, and upscale stores in major cities.', icon: CreditCard, color: 'text-cyan-400' },
    { title: 'Airport Exchange & Banks', desc: 'Authorized Foreign Exchange (Forex) counters are available 24/7 at all international airports (T3 Delhi, T2 Mumbai, Bengaluru, Chennai, etc.).', icon: Landmark, color: 'text-emerald-400' },
    { title: 'UPI & Digital Payments', desc: 'International travelers can register for UPI One World at authorized Forex counters for seamless cashless QR code payments across India.', icon: DollarSign, color: 'text-marigold-400' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Coins className="w-4 h-4" />
            <span>Forex & Payment Guidelines</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Currency & Exchange Guide for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-marigold-300 to-amber-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Everything you need to know about foreign currency exchange, Indian Rupee (INR) denominations, card acceptance, and digital UPI payments for tourists.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, idx) => {
            const IconComp = tip.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <IconComp className={`w-5 h-5 ${tip.color}`} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-serif">{tip.title}</h2>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/emergency" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>View Emergency & Helpline Contacts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
