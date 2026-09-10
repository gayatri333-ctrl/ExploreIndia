import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Compass,
  Info,
  Plane,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Sun,
  ShieldCheck,
  Calendar,
  Coins,
  FileCheck,
  PlaneTakeoff,
  Users,
  Map,
  CalendarDays,
  Trees,
  Palette,
  HeartHandshake,
} from 'lucide-react';
import { PLAN_YOUR_TRIP_LINKS } from '@/lib/data/navigation-data';

export const metadata = {
  title: 'Tourism Information Centres & Planning Directory | ExploreIndia',
  description: 'Official Ministry of Tourism & ExploreIndia authorized information hubs, emergency helplines, e-Visa guide, airports, currency & travel resources.',
};

export default function InfoCentresPage() {
  const practicalCards = [
    { title: 'Weather & Seasons', desc: 'Monsoon, winter & summer travel advice by region', href: '/plan/weather', icon: Sun, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { title: 'Tourism Info Centres', desc: 'Government authorized assistance counters across India', href: '/plan/info-centres', icon: Info, color: 'text-marigold-400', bg: 'bg-marigold-500/10', border: 'border-marigold-500/20' },
    { title: 'Emergency Numbers', desc: '24/7 Police, Medical, Women Safety & Tourist Helpline 1363', href: '/plan/emergency', icon: PhoneCall, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
    { title: 'Public Holidays', desc: 'Gazetted pan-India festival & national holidays calendar', href: '/plan/holidays', icon: Calendar, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { title: 'Currency Converter', desc: 'INR exchange rates, Forex counters & card acceptance guide', href: '/plan/currency', icon: Coins, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  ];

  const travelCards = [
    { title: 'Visa Guide (e-Tourist Visa)', desc: 'Official online application step-by-step instructions & eligibility', href: '/plan/visa-guide', icon: FileCheck, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    { title: 'Airport Info & Connectivity', desc: 'Major international hubs, domestic connections & Vande Bharat trains', href: '/plan/airports', icon: PlaneTakeoff, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
    { title: 'Travel Partners & Operators', desc: 'Recognized tour guides, government transport & accredited rentals', href: '/plan/partners', icon: Users, color: 'text-marigold-400', bg: 'bg-marigold-500/10', border: 'border-marigold-500/20' },
  ];

  const exploreCards = [
    { title: 'Curated Itineraries', desc: '3-day, 7-day, & 14-day Golden Triangle, Himalayan & South India trails', href: '/plan/itineraries', icon: Map, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { title: 'Festivals & Events', desc: 'Live calendar of monastic, tribal, classical dance & state melas', href: '/festivals-events', icon: CalendarDays, color: 'text-marigold-400', bg: 'bg-marigold-500/10', border: 'border-marigold-500/20' },
    { title: 'Rural Tourism', desc: 'Authentic village eco-homestays, organic farms & tribal encounters', href: '/plan/rural-tourism', icon: Trees, color: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/20' },
    { title: 'Crafts & Textiles', desc: 'Pashmina, Kanjeevaram Silk, Terracotta & Tanjore masterworks', href: '/plan/crafts', icon: Palette, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20' },
    { title: 'People & Culture', desc: 'Customs, dining etiquette, languages & cultural traditions of India', href: '/plan/culture', icon: HeartHandshake, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  ];

  const infoCentresList = [
    { city: 'New Delhi', location: 'Indira Gandhi International Airport (T3 Arrival & Janpath Hub)', phone: '+91-11-23320005', hours: '24/7 Daily' },
    { city: 'Mumbai', location: 'Chhatrapati Shivaji Maharaj International Airport (T2) & Fort Area', phone: '+91-22-22074333', hours: '24/7 Daily' },
    { city: 'Kolkata', location: 'Netaji Subhash Chandra Bose Airport & 4 Shakespeare Sarani', phone: '+91-33-22825813', hours: '09:00 - 18:00' },
    { city: 'Chennai', location: 'Chennai International Airport & 154 Anna Salai', phone: '+91-44-28460285', hours: '09:00 - 18:00' },
    { city: 'Bengaluru', location: 'Kempegowda International Airport & Bengaluru City Railway Stn', phone: '+91-80-22215489', hours: '09:00 - 18:00' },
    { city: 'Jaipur', location: 'State Hotel Compound, Khasa Kothi, M.I. Road', phone: '+91-141-2371142', hours: '09:00 - 18:00' },
    { city: 'Varanasi', location: 'Varanasi Cantt Railway Station & Mall Road Hub', phone: '+91-542-2505033', hours: '09:00 - 18:00' },
    { city: 'Kochi', location: 'Cochin International Airport & Willingdon Island', phone: '+91-484-2668352', hours: '24/7 Daily' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vermilion-500/10 border border-vermilion-500/30 text-vermilion-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Official Travel Directory & Assistance Hub</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Plan Your Trip to <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold-400 via-amber-300 to-cyan-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Everything you need for a seamless journey across India. Access government-authorized tourist information centres, e-Visa application guidance, emergency helplines, transport logistics, and curated itineraries.
          </p>

          {/* Helpline Alert Banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-marigold-500/30 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-marigold-500/20 border border-marigold-500/40 flex items-center justify-center text-marigold-400">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">24/7 Official Toll-Free Tourist Helpline</div>
                <div className="text-xs text-slate-400">Multilingual support in 12 languages (English, Hindi, French, German, Japanese, Spanish, etc.)</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:1800111363" className="px-4 py-2 rounded-lg bg-marigold-500 hover:bg-marigold-600 text-slate-950 font-bold text-xs transition">
                Call 1800-11-1363
              </a>
              <a href="tel:1363" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition">
                Short Code: 1363
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16 flex-1 w-full">
        {/* Category 1: Practical Information */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-9 h-9 rounded-lg bg-marigold-500/10 border border-marigold-500/30 flex items-center justify-center text-marigold-400">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-white">Practical Information</h2>
              <p className="text-xs text-slate-400">Weather, official information counters, emergency support & holidays</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.href}
                  className={`p-6 rounded-xl bg-slate-900/60 hover:bg-slate-900 border ${card.border} hover:border-marigold-500/50 transition-all group flex flex-col justify-between shadow-lg`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg ${card.bg} border ${card.border} flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-marigold-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-marigold-300 transition">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-800/80 text-xs font-semibold text-marigold-400 group-hover:text-marigold-300 flex items-center gap-1">
                    <span>Explore Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Category 2: Travel & Logistics */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-white">Travel & Logistics</h2>
              <p className="text-xs text-slate-400">Visa processing, airport hubs, luxury trains & accredited tour partners</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.href}
                  className={`p-6 rounded-xl bg-slate-900/60 hover:bg-slate-900 border ${card.border} hover:border-cyan-500/50 transition-all group flex flex-col justify-between shadow-lg`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg ${card.bg} border ${card.border} flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-800/80 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
                    <span>View Logistics Info</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Category 3: Explore ExploreIndia */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-white">Explore ExploreIndia</h2>
              <p className="text-xs text-slate-400">Curated itineraries, cultural festivals, rural eco-stays, textiles & heritage</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.href}
                  className={`p-6 rounded-xl bg-slate-900/60 hover:bg-slate-900 border ${card.border} hover:border-emerald-500/50 transition-all group flex flex-col justify-between shadow-lg`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg ${card.bg} border ${card.border} flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-800/80 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
                    <span>Discover Section</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Tourist Assistance Counters Table */}
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-white">Government Tourist Assistance Counters</h2>
              <p className="text-xs text-slate-400">Physical help desks located at major airports and railway hubs across India</p>
            </div>
            <Link href="/contact" className="text-xs font-bold text-marigold-400 hover:text-marigold-300 flex items-center gap-1">
              <span>View All Support Locations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-4">City</th>
                  <th className="p-4">Counter Location</th>
                  <th className="p-4">Contact Phone</th>
                  <th className="p-4">Operating Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {infoCentresList.map((centre, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-bold text-white">{centre.city}</td>
                    <td className="p-4">{centre.location}</td>
                    <td className="p-4 font-mono text-cyan-400">{centre.phone}</td>
                    <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{centre.hours}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
