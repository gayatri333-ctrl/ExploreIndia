import Link from 'next/link';
import { FileCheck, ShieldCheck, CheckCircle2, Globe, Compass, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'India e-Tourist Visa (e-TV) Step-by-Step Guide | ExploreIndia',
  description: 'Official online application instructions, eligibility, fees, validity & required documents for Indian e-Tourist Visa.',
};

export default function VisaGuidePage() {
  const steps = [
    { num: '01', title: 'Apply Online', desc: 'Fill online application on official government portal (indianvisaonline.gov.in) at least 4 days before travel date.' },
    { num: '02', title: 'Upload Documents', desc: 'Upload passport photo (JPEG) and bio-page of passport (PDF format).' },
    { num: '03', title: 'Pay Visa Fee', desc: 'Pay e-Visa processing fee online using credit/debit card or PayPal.' },
    { num: '04', title: 'Receive Electronic Travel Authorization (ETA)', desc: 'Receive ETA via email within 72 hours. Print copy to present upon arrival at designated airports.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-slate-950">

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-primary-dark-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FileCheck className="w-4 h-4" />
            <span>Official Visa Assistance</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            India e-Tourist Visa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-marigold-300 to-emerald-400">(e-TV) Guide</span>
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base leading-relaxed">
            Citizens of over 165 countries are eligible to apply for an Indian e-Tourist Visa online without visiting an embassy.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Step by Step Process */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold font-serif text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>4-Step Application Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4 relative shadow-xl">
                <div className="text-2xl font-bold font-mono text-cyan-400">{s.num}</div>
                <h3 className="text-base font-bold text-white font-serif">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Portal Callout */}
        <div className="p-6 rounded-xl bg-slate-900 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>Official Government Visa Application Portal</span>
            </div>
            <div className="text-xs text-slate-400">Only use official government link: indianvisaonline.gov.in</div>
          </div>
          <a
            href="https://indianvisaonline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs transition"
          >
            <span>Visit Official Visa Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link href="/plan/info-centres" className="text-marigold-400 hover:text-marigold-300 font-bold flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Return to Info Centres & Directory</span>
          </Link>
          <Link href="/plan/airports" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5">
            <span>Check Airport & Train Connectivity</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
