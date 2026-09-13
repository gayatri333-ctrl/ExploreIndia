import Link from 'next/link';
import { Calendar, Sparkles, Compass, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Public Holidays & Festival Calendar | ExploreIndia',
  description: 'Pan-India gazetted public holidays, national celebrations, and major regional festival dates.',
};

export default function HolidaysPage() {
  const holidays = [
    { date: 'January 26', holiday: 'Republic Day', type: 'National Holiday', location: 'Pan-India (Grand Parade in New Delhi)' },
    { date: 'March 14', holiday: 'Holi (Festival of Colors)', type: 'Gazetted Holiday', location: 'Pan-India (Famous in Mathura, Vrindavan & Jaipur)' },
    { date: 'August 15', holiday: 'Independence Day', type: 'National Holiday', location: 'Pan-India (Red Fort Flag Hoisting in Delhi)' },
    { date: 'October 02', holiday: 'Gandhi Jayanti', type: 'National Holiday', location: 'Pan-India (Raj Ghat Observance in Delhi)' },
    { date: 'October 10-14', holiday: 'Durga Puja & Dussehra', type: 'Regional & National', location: 'Kolkata, Mysuru & Pan-India' },
    { date: 'November 01', holiday: 'Diwali (Festival of Lights)', type: 'Gazetted Holiday', location: 'Pan-India (Varanasi Dev Deepavali & Ayodhya)' },
    { date: 'December 25', holiday: 'Christmas', type: 'Gazetted Holiday', location: 'Goa, Kerala, Meghalaya & Pan-India' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>National & Festival Calendar</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Public Holidays in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-marigold-300 to-cyan-400">India</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Planning around national gazetted holidays and major regional festivals ensures seamless travel booking and opportunities to experience vibrant cultural celebrations.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4">Date</th>
                <th className="p-4">Holiday / Festival</th>
                <th className="p-4">Category</th>
                <th className="p-4">Key Celebrations & Locations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {holidays.map((h, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-mono font-bold text-marigold-400">{h.date}</td>
                  <td className="p-4 font-bold text-white text-sm">{h.holiday}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {h.type}
                    </span>
                  </td>
                  <td className="p-4">{h.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/festivals-events" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Explore Full Festival Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
