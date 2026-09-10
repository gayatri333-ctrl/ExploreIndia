import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneCall, ShieldAlert, HeartPulse, Shield, Compass, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Emergency Numbers & 24/7 Helpline | ExploreIndia',
  description: 'Official 24/7 Indian Tourist Helpline 1363, National Emergency Number 112, Police, Medical & Tourist Safety contacts.',
};

export default function EmergencyPage() {
  const contacts = [
    { name: 'Official National Tourist Helpline', number: '1800-11-1363 / 1363', desc: 'Toll-free 24/7 multilingual guidance provided by Ministry of Tourism in 12 languages.', color: 'text-marigold-400', icon: PhoneCall },
    { name: 'Pan-India Emergency Response System', number: '112', desc: 'Single emergency number for Police, Fire, and Ambulance services across all states.', color: 'text-rose-400', icon: ShieldAlert },
    { name: 'National Medical & Ambulance Service', number: '108 / 102', desc: 'Free emergency medical transport & trauma assistance service.', color: 'text-emerald-400', icon: HeartPulse },
    { name: 'Women Safety Helpline', number: '1091', desc: 'Dedicated 24/7 emergency response for female travelers & residents.', color: 'text-indigo-400', icon: Shield },
    { name: 'Railway Security & Helpline', number: '139', desc: 'Indian Railways security, medical emergencies & onboard assistance.', color: 'text-cyan-400', icon: PhoneCall },
    { name: 'Cyber Crime Helpline', number: '1930', desc: 'Reporting financial fraud or cyber harassment while traveling.', color: 'text-amber-400', icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <PhoneCall className="w-4 h-4" />
            <span>24/7 Safety & Emergency Directory</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Emergency Contacts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-marigold-300 to-amber-400">Helplines</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Essential emergency telephone numbers, tourist assistance hotlines, police counters, and medical services active 24 hours a day across India.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((c, idx) => {
            const IconComp = c.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                    <IconComp className={`w-5 h-5 ${c.color}`} />
                  </div>
                  <a href={`tel:${c.number.split(' ')[0]}`} className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs border border-slate-700 transition">
                    Call Now
                  </a>
                </div>
                <div>
                  <h2 className="text-base font-bold text-white font-serif">{c.name}</h2>
                  <div className={`text-xl font-bold font-mono ${c.color} mt-1`}>{c.number}</div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{c.desc}</p>
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
          <Link href="/plan/visa-guide" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Read e-Visa Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
