import Link from 'next/link';
import { User, ShieldCheck, Mail, Globe, Bell, Compass } from 'lucide-react';

export const metadata = {
  title: 'User Profile & Travel Preferences | ExploreIndia',
  description: 'Manage your ExploreIndia traveler profile, festival notifications & destination preferences.',
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-4 h-4" />
            <span>Traveler Profile</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Account & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-marigold-300 to-amber-400">Preferences</span>
          </h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-16 h-16 rounded-full bg-marigold-500/20 border border-marigold-500/40 flex items-center justify-center text-marigold-400 text-xl font-bold font-serif">
              EI
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-serif">ExploreIndia Guest Traveler</h2>
              <p className="text-xs text-slate-400">Personalized cultural festival alerts & itinerary planner</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Bell className="w-4 h-4 text-marigold-400" />
                <span>Festival Notifications</span>
              </div>
              <p className="text-xs text-slate-300">Enabled for Royal & Cultural events in North & South India</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Preferred Regions</span>
              </div>
              <p className="text-xs text-slate-300">Himalayan Trails, Kerala Backwaters & Golden Triangle</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
