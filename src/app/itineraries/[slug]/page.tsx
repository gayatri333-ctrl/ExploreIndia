import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SAMPLE_ITINERARIES } from '@/lib/data/itineraries';
import { MapPin, Clock, Calendar, ArrowLeft, Sparkles, Check, Compass, Map } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = SAMPLE_ITINERARIES.find((i) => i.slug === params.slug);
  const title = item ? `${item.title} (${item.durationBadge}) | ExploreIndia` : 'Itinerary Guide | ExploreIndia';
  const desc = item ? item.shortDescription : 'Explore tested day-by-day India travel itineraries.';

  return {
    title,
    description: desc,
  };
}

export default function ItineraryDetailPage({ params }: { params: { slug: string } }) {
  const itinerary = SAMPLE_ITINERARIES.find((i) => i.slug === params.slug) || {
    id: 'placeholder',
    title: params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    slug: params.slug,
    region: 'North' as const,
    interest: 'Heritage' as const,
    tripLength: '3-4 Days' as const,
    durationBadge: '4 Days / 3 Nights',
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    shortDescription: 'Explore iconic heritage monuments, local market crawls, and authentic cultural highlights.',
    fullHighlights: [
      'Guided walkthrough of historic fort ramparts and palaces',
      'Authentic regional culinary tasting tours',
      'Scenic photography walks along iconic landmarks'
    ],
    sampleDays: [
      { day: 1, title: 'Arrival & City Orientation', desc: 'Hotel check-in and evening walking tour through vibrant local bazaars.' },
      { day: 2, title: 'Heritage Monuments & Forts Walk', desc: 'Full day exploration of UNESCO World Heritage sights and royal palaces.' },
      { day: 3, title: 'Cultural Crafts & Sunset Cruise', desc: 'Visit traditional artisan workshops followed by scenic sunset views.' },
      { day: 4, title: 'Souvenir Shopping & Departure', desc: 'Morning local market walk and departure transfer.' }
    ]
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      <Header />

      {/* Hero Banner Header */}
      <section className="relative pt-28 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={itinerary.coverImage}
            alt={itinerary.title}
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-saffron-400 hover:text-white transition font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Itineraries</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-saffron-500 text-royal-950 text-xs font-bold uppercase tracking-wider">
                {itinerary.durationBadge}
              </span>
              <span className="px-3 py-1 rounded-full bg-peacock-500/20 border border-peacock-500/30 text-peacock-300 text-xs font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {itinerary.region} Zone
              </span>
              <span className="px-3 py-1 rounded-full bg-royal-900/80 border border-white/10 text-slate-300 text-xs font-semibold">
                {itinerary.interest}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              {itinerary.title}
            </h1>

            <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
              {itinerary.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-10 flex-1 w-full">
        {/* Key Highlights Box */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-saffron-500/30 bg-royal-900/60 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-saffron-400 font-bold font-serif text-lg">
            <Sparkles className="w-5 h-5" />
            <h2>Key Itinerary Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            {itinerary.fullHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-royal-950/70 p-3.5 rounded-xl border border-white/5">
                <Check className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Day-by-day Plan Timeline */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-2xl">
            <Calendar className="w-6 h-6 text-saffron-400" />
            <h2>Day-by-Day Journey Plan</h2>
          </div>

          <div className="space-y-4">
            {itinerary.sampleDays.map((d) => (
              <div
                key={d.day}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-4 md:items-center justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-saffron-500/15 border border-saffron-500/30 text-saffron-400 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Day</span>
                    <span className="text-lg font-black font-mono leading-none">{d.day}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white font-serif">{d.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{d.desc}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded bg-royal-950 text-peacock-300 border border-white/5 text-[11px] font-semibold shrink-0 self-start md:self-auto">
                  Confirmed Schedule
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Back and Booking CTAs */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-900 hover:bg-royal-800 text-slate-200 border border-white/15 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-royal-950 font-bold shadow-glow-saffron transition"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Related Destinations</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
