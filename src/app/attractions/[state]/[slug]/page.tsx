import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Clock,
  Ticket,
  Camera,
  Train,
  Plane,
  Navigation,
  Lightbulb,
  ArrowLeft,
  Sparkles,
  Compass,
  Building,
} from 'lucide-react';
import { ATTRACTIONS } from '@/lib/data/attractions';
import { ATTRACTIONS_DATA } from '@/data/dataset';

interface AttractionPageProps {
  params: {
    state: string;
    slug: string;
  };
}

// Extended Detailed Attraction Schema
interface DetailedAttraction {
  id: string;
  name: string;
  category: string;
  stateName: string;
  stateSlug: string;
  cityName: string;
  citySlug: string;
  heroImage: string;
  description: string;
  historicalContext: string;
  timings: string;
  entryFee: string;
  photographyRules: string;
  nearestAirport: string;
  nearestRailway: string;
  localTransport: string;
  didYouKnowFacts: string[];
  mapCoords?: { lat: number; lng: number };
}

const DETAILED_ATTRACTIONS_DATABASE: Record<string, DetailedAttraction> = {
  'kashi-vishwanath-temple': {
    id: 'kashi-vishwanath-temple',
    name: 'Kashi Vishwanath Temple',
    category: 'Spiritual Temple',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200',
    description: 'One of the twelve sacred Jyotirlingas of Lord Shiva, located on the western bank of the holy river Ganges.',
    historicalContext: 'Rebuilt by Ahilyabai Holkar of Indore in 1780, the temple spire is gilded with over 800 kg of pure gold contributed by Maharaja Ranjit Singh of Punjab in 1835. The newly constructed Kashi Vishwanath Corridor directly connects the temple premises with the sacred ghats of the Ganges.',
    timings: 'Open Daily: 3:00 AM – 11:00 PM (Mangala Aarti at 3:00 AM, Bhog Aarti at 11:30 AM, Saptarishi Aarti at 7:00 PM)',
    entryFee: 'Free General Entry (Special Sugam Darshan Pass: ₹300 per person)',
    photographyRules: 'Strictly Prohibited inside inner sanctum. Free locker facilities available outside corridor entrance.',
    nearestAirport: 'Lal Bahadur Shastri International Airport, Babatpur (24 km)',
    nearestRailway: 'Varanasi Junction (BSB) / Banaras (BSBS) Railway Station (4 km)',
    localTransport: 'E-rickshaws and auto-rickshaws up to Godowlia Crossing, followed by a short 5-minute walk through Vishwanath Gali.',
    didYouKnowFacts: [
      'The temple gold spire was gilded with 800 kg of gold donated by Maharaja Ranjit Singh in 1835.',
      'The newly constructed 50-foot wide Kashi Vishwanath Corridor links the temple directly to Manikarnika and Jalasen Ghats.',
      'Over 7,000 pilgrims visit the inner sanctum daily during peak festive seasons.'
    ],
    mapCoords: { lat: 25.3109, lng: 83.0107 }
  },
  'dashashwamedh-ghat': {
    id: 'dashashwamedh-ghat',
    name: 'Dashashwamedh Ghat & Evening Aarti',
    category: 'Sacred Riverfront',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200',
    description: 'The main and oldest riverfront ghat on the Ganges in Varanasi, renowned worldwide for its majestic Grand Ganga Aarti ceremony.',
    historicalContext: 'According to Hindu mythology, Lord Brahma created Dashashwamedh Ghat to welcome Lord Shiva and performed the ten-horse sacrifice (Dasa-Ashwamedha) here. The present ghat structure was commissioned by Peshwa Balaji Baji Rao in 1748.',
    timings: 'Open 24 Hours. Evening Ganga Aarti ritual begins at 6:45 PM in summer (6:00 PM in winter).',
    entryFee: 'Free Public Access (Boat viewing seats: ₹100 – ₹300 per seat)',
    photographyRules: 'Allowed. Cameras and mobile videography permitted without restriction from riverfront platforms and wooden boats.',
    nearestAirport: 'Lal Bahadur Shastri International Airport, Babatpur (25 km)',
    nearestRailway: 'Varanasi Junction (BSB) (4.5 km)',
    localTransport: 'Pedal rickshaws, auto-rickshaws, and cycle rickshaws to Godowlia Chowk.',
    didYouKnowFacts: [
      'Seven young Vedic priests perform the 45-minute synchronized oil lamp ritual every single evening without interruption.',
      'The ceremony incorporates brass lamps weighing over 4 kg each alongside burning incense and conch shell blowing.',
      'Hiring a wooden rowboat on the river Ganges provides the best unobstructed panoramic view of the evening Aarti.'
    ],
    mapCoords: { lat: 25.3069, lng: 83.0104 }
  },
  'sarnath-ancient-ruins': {
    id: 'sarnath-ancient-ruins',
    name: 'Sarnath Archaeological Site & Dhamek Stupa',
    category: 'UNESCO Heritage Ruins',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    heroImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200',
    description: 'Sacred Buddhist pilgrimage site where Lord Buddha delivered his first sermon (Dharmachakra Pravartana) after attaining enlightenment.',
    historicalContext: 'Emperor Ashoka constructed the monumental Dhamek Stupa in 249 BCE to commemorate the First Sermon. Sarnath is also the origin of the Lion Capital of Ashoka, which serves as the official National Emblem of India.',
    timings: 'Open Sunrise to Sunset (6:00 AM – 6:00 PM daily). Archaeological Museum closed on Fridays.',
    entryFee: '₹25 for Indian Citizens; ₹300 for Foreign Tourists (Children under 15 Free)',
    photographyRules: 'Allowed across garden ruins. Tripods and commercial film cameras require ASI permit.',
    nearestAirport: 'Lal Bahadur Shastri International Airport (21 km)',
    nearestRailway: 'Sarnath Railway Station (1 km) / Varanasi Junction (10 km)',
    localTransport: 'Prepaid taxis and auto-rickshaws available directly from Varanasi city center.',
    didYouKnowFacts: [
      'The Dhamek Stupa stands 43.6 meters tall and 28 meters in diameter, carved with exquisite Gupta-era floral geometric patterns.',
      'Sarnath Museum houses the original 3rd-century BCE polished sandstone Lion Capital of Ashoka.',
      'The Bodhi tree in Sarnath was grown from a cutting taken from the original Sri Maha Bodhi tree in Sri Lanka.'
    ],
    mapCoords: { lat: 25.3811, lng: 83.0228 }
  },
  'assi-ghat': {
    id: 'assi-ghat',
    name: 'Assi Ghat & Subah-e-Banaras',
    category: 'Cultural Riverfront',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    cityName: 'Varanasi',
    citySlug: 'varanasi',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200',
    description: 'Southernmost ghat of Varanasi where the Assi River meets the Ganges, celebrated for morning yoga, classical music, and Subah-e-Banaras.',
    historicalContext: 'Famed in ancient Puranic texts, Assi Ghat is where Goddess Durga rested after slaying demons Chanda and Munda. It has long served as a spiritual hub for scholars, poets, and international yoga practitioners.',
    timings: 'Open 24 Hours. Subah-e-Banaras morning ritual starts at 5:00 AM in summer (5:30 AM in winter).',
    entryFee: 'Free Public Access',
    photographyRules: 'Fully Allowed. Highly recommended for dawn sunrise photo walks along the river.',
    nearestAirport: 'Lal Bahadur Shastri International Airport (28 km)',
    nearestRailway: 'Varanasi Junction (BSB) (7 km)',
    localTransport: 'Direct auto-rickshaws and city buses operate continuously along the Lanka-Assi road.',
    didYouKnowFacts: [
      'Subah-e-Banaras offers free morning yoga sessions, Vedic chanting, and live Hindustani classical ragas at sunrise.',
      'Famed Indian poet Tulsidas wrote parts of the epic Ramcharitmanas at Assi Ghat in the 16th century.',
      'Assi Ghat is surrounded by bohemian cafes, German bakeries, and traditional silk weaving shops.'
    ],
    mapCoords: { lat: 25.2894, lng: 83.0069 }
  },
  'amber-fort': {
    id: 'amber-fort',
    name: 'Amber Palace & Fort',
    category: 'UNESCO Hill Fortress',
    stateName: 'Rajasthan',
    stateSlug: 'rajasthan',
    cityName: 'Jaipur',
    citySlug: 'jaipur',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200',
    description: 'Majestic Rajput hilltop citadel constructed from yellow and pink sandstone overlooking Maota Lake.',
    historicalContext: 'Constructed by Raja Man Singh I in 1592 AD, Amber Fort blends traditional Rajput Hindu and Mughal architectural elements. Its crowning jewel is the Sheesh Mahal (Mirror Palace) lined with convex Belgian glass mirrors.',
    timings: 'Open Daily: 8:00 AM – 5:30 PM (Day Entry) & 6:30 PM – 9:15 PM (Night Tourism)',
    entryFee: '₹100 for Indian Nationals; ₹550 for Foreign Tourists',
    photographyRules: 'Allowed. Commercial video filming requires prior Archaeological Dept permissions.',
    nearestAirport: 'Jaipur International Airport, Sanganer (22 km)',
    nearestRailway: 'Jaipur Junction Railway Station (13 km)',
    localTransport: 'AC Low-Floor city buses (Route 2), auto-rickshaws, and tourist cabs from Jaipur city center.',
    didYouKnowFacts: [
      'Sheesh Mahal can be illuminated at night with a single candle reflected across thousands of tiny concave mirror tiles.',
      'Subterranean secret escape tunnels connect Amber Fort directly with Jaigarh Fort atop the Cheel ka Teela hill.',
      'Hosts nightly sound & light laser shows narrated in English and Hindi detailing royal Kachwaha history.'
    ],
    mapCoords: { lat: 26.9855, lng: 75.8513 }
  },
  'hawa-mahal': {
    id: 'hawa-mahal',
    name: 'Hawa Mahal (Palace of Winds)',
    category: 'Royal Palace',
    stateName: 'Rajasthan',
    stateSlug: 'rajasthan',
    cityName: 'Jaipur',
    citySlug: 'jaipur',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200',
    description: 'Five-story pink honeycomb sandstone facade featuring 953 finely carved lattice windows.',
    historicalContext: 'Built in 1799 by Maharaja Sawai Pratap Singh and designed by Lal Chand Ustad in the shape of Lord Krishna\'s crown. It allowed royal women to observe street processions while remaining completely unseen.',
    timings: 'Open Daily: 9:00 AM – 5:00 PM',
    entryFee: '₹50 for Indian Citizens; ₹200 for Foreign Tourists',
    photographyRules: 'Allowed. Rooftop cafes across the main street provide panoramic photos of the entire facade.',
    nearestAirport: 'Jaipur International Airport (12 km)',
    nearestRailway: 'Jaipur Junction Railway Station (5 km)',
    localTransport: 'Jaipur Metro to Badi Chaupar Station (2-minute walk) or local auto-rickshaws.',
    didYouKnowFacts: [
      'The palace stands 5 stories high without any solid foundation, leaning at a slight 87-degree angle.',
      'Designed using the Venturi effect: wind passes through 953 jharokhas creating natural cooling breezes in summer.',
      'Access to the top floors is via sloping ramps instead of conventional staircases to accommodate royal palanquins.'
    ],
    mapCoords: { lat: 26.9239, lng: 75.8267 }
  },
  'golden-temple': {
    id: 'golden-temple',
    name: 'Harmandir Sahib Golden Temple',
    category: 'Spiritual Sanctuary',
    stateName: 'Punjab',
    stateSlug: 'punjab',
    cityName: 'Amritsar',
    citySlug: 'amritsar',
    heroImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
    description: 'Sacred gold-gilded spiritual sanctuary set in the center of the Amrit Sarovar holy pool.',
    historicalContext: 'Founded by Guru Ram Das in 1577 AD, the temple building was completed by Guru Arjan in 1604. Maharaja Ranjit Singh covered the upper sanctum with 750 kg of pure gold leaf in 1830.',
    timings: 'Open 24 Hours Daily. Langar served around the clock.',
    entryFee: 'Free Admission for Everyone',
    photographyRules: 'Allowed around the outer marble parikrama walkway. Prohibited inside the inner sanctum.',
    nearestAirport: 'Sri Guru Ram Dass Jee International Airport (13 km)',
    nearestRailway: 'Amritsar Junction Railway Station (2 km)',
    localTransport: 'Free SGPC shuttle buses operate between Amritsar Railway Station and the Golden Temple complex.',
    didYouKnowFacts: [
      'The Golden Temple Langar serves free nutritious vegetarian meals to over 100,000 people every single day.',
      'The temple features four doors facing North, South, East, and West, symbolizing universal acceptance regardless of religion.',
      'The holy sarovar pool is believed to possess spiritual healing properties fed by natural underground springs.'
    ],
    mapCoords: { lat: 31.6200, lng: 74.8765 }
  },
  'taj-mahal': {
    id: 'taj-mahal',
    name: 'Taj Mahal UNESCO World Wonder',
    category: 'UNESCO World Heritage',
    stateName: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    cityName: 'Agra',
    citySlug: 'agra',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200',
    description: 'Iconic white marble mausoleum built on the southern bank of the Yamuna River.',
    historicalContext: 'Commissioned in 1631 by Mughal Emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. Built over 22 years by 20,000 artisans utilizing white Makrana marble inlaid with lapis lazuli, turquoise, and carnelian.',
    timings: 'Open 30 minutes before Sunrise to 30 minutes before Sunset (Closed on Fridays for prayers).',
    entryFee: '₹50 for Indian Citizens (+ ₹200 for main mausoleum); ₹1,100 for Foreign Tourists',
    photographyRules: 'Allowed in gardens. Photography prohibited inside the main burial chamber.',
    nearestAirport: 'Agra Airport, Kheria (13 km) / Delhi IGI Airport (220 km)',
    nearestRailway: 'Agra Cantt (AGC) Railway Station (6 km)',
    localTransport: 'Electric eco-rickshaws and battery buses within the 500-meter Taj Pollution-Free Zone.',
    didYouKnowFacts: [
      'The four corner minarets are tilted slightly outward by 2 degrees so they fall away from the main tomb during earthquakes.',
      'The white marble shifts colors throughout the day: glowing pink at sunrise, milky white at noon, and golden bronze under full moon.',
      'Shah Jahan was imprisoned by his son Aurangzeb in Agra Fort, where he spent his final years looking out at the Taj Mahal.'
    ],
    mapCoords: { lat: 27.1751, lng: 78.0421 }
  }
};

export async function generateMetadata({ params }: AttractionPageProps): Promise<Metadata> {
  const attraction = DETAILED_ATTRACTIONS_DATABASE[params.slug];

  if (attraction) {
    return {
      title: `${attraction.name} Guide — ${attraction.cityName}, ${attraction.stateName} | ExploreIndia`,
      description: attraction.description,
      openGraph: {
        title: `${attraction.name} — ${attraction.cityName} Travel Guide`,
        description: attraction.description,
        images: [attraction.heroImage],
      },
    };
  }

  const nameFormatted = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const stateFormatted = params.state.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${nameFormatted}, ${stateFormatted} Landmark Guide | ExploreIndia`,
    description: `Discover visiting hours, entry fees, transport, and historical significance of ${nameFormatted} in ${stateFormatted}.`,
  };
}

export default function AttractionDetailPage({ params }: AttractionPageProps) {
  const attraction = DETAILED_ATTRACTIONS_DATABASE[params.slug] || {
    id: params.slug,
    name: params.slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    category: 'Historical Landmark',
    stateName: params.state.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    stateSlug: params.state,
    cityName: 'Heritage Destination',
    citySlug: 'explore',
    heroImage: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200',
    description: `Explore the architectural heritage, cultural traditions, and historical significance of ${params.slug.replace(/-/g, ' ')}.`,
    historicalContext: `Constructed during historical dynasty rule in ${params.state}, this landmark preserves regional architectural motifs, stone carvings, and cultural traditions.`,
    timings: 'Open Daily: 6:00 AM – 6:00 PM',
    entryFee: '₹25 – ₹50 for Indian Nationals; ₹300 – ₹600 for Foreign Tourists',
    photographyRules: 'Allowed across public courtyard areas.',
    nearestAirport: 'Regional Airport (within 30 km)',
    nearestRailway: 'Central Railway Station (within 5 km)',
    localTransport: 'Auto-rickshaws, city buses, and local taxis available continuously.',
    didYouKnowFacts: [
      'Preserves ancient regional craftsmanship dating back centuries of cultural history.',
      'Attracts thousands of heritage travelers and photography enthusiasts throughout peak travel seasons.'
    ],
    mapCoords: { lat: 26.9124, lng: 75.7873 }
  };

  return (
    <div className="min-h-screen bg-royal-950 text-slate-100 font-sans flex flex-col selection:bg-marigold-500 selection:text-royal-950">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-royal-950">
          <Image
            src={attraction.heroImage}
            alt={attraction.name}
            fill
            priority
            className="object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs">
            <Link href="/" className="text-slate-400 hover:text-saffron-400 transition">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/explore" className="text-slate-400 hover:text-saffron-400 transition">
              Attractions
            </Link>
            <span className="text-slate-600">/</span>
            <Link href={`/destinations?state=${encodeURIComponent(attraction.stateName)}`} className="text-slate-400 hover:text-saffron-400 transition">
              {attraction.stateName}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-saffron-400 font-semibold">{attraction.name}</span>
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>{attraction.category} • {attraction.cityName}, {attraction.stateName}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white tracking-tight">
              {attraction.name}
            </h1>

            <p className="text-lg text-slate-300 max-w-3xl font-serif leading-relaxed">
              {attraction.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 flex-1 w-full">
        {/* Historical Significance */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-royal-900/60 space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-peacock-500/20 text-peacock-400 flex items-center justify-center border border-peacock-500/30">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-serif">Historical Significance & Architecture</h2>
              <p className="text-xs text-slate-400">Cultural heritage, imperial patronage & architectural design</p>
            </div>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed pt-2">
            {attraction.historicalContext}
          </p>
        </section>

        {/* Practical Information Box */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Operating Hours */}
          <div className="glass-card rounded-2xl p-6 space-y-3 border border-amber-500/20 bg-royal-900/60">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-serif">Operating Hours</h3>
            <p className="text-xs text-slate-200 leading-relaxed">{attraction.timings}</p>
          </div>

          {/* Entry Fees */}
          <div className="glass-card rounded-2xl p-6 space-y-3 border border-saffron-500/20 bg-royal-900/60">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Ticket className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-serif">Entry Ticket & Passes</h3>
            <p className="text-xs text-slate-200 leading-relaxed">{attraction.entryFee}</p>
          </div>

          {/* Photography Rules */}
          <div className="glass-card rounded-2xl p-6 space-y-3 border border-cyan-500/20 bg-royal-900/60">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-serif">Photography & Media</h3>
            <p className="text-xs text-slate-200 leading-relaxed">{attraction.photographyRules}</p>
          </div>
        </section>

        {/* Transport & How to Reach */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-royal-900/60 space-y-6 shadow-xl">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-serif">How to Reach & Transport Advice</h2>
              <p className="text-xs text-slate-400">Nearest railway station, airport connectivity, and auto fare guidance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5 p-4 rounded-xl bg-royal-950 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Plane className="w-4 h-4" />
                <span>Nearest Airport</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{attraction.nearestAirport}</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-royal-950 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                <Train className="w-4 h-4" />
                <span>Nearest Railway Station</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{attraction.nearestRailway}</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-royal-950 border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-saffron-400">
                <Navigation className="w-4 h-4" />
                <span>Local Transport & Cab Fare</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{attraction.localTransport}</p>
            </div>
          </div>
        </section>

        {/* Did You Know? Facts */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-saffron-500/30 bg-royal-900/60 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-serif">Did You Know? Heritage Trivia</h2>
              <p className="text-xs text-slate-400">Fascinating heritage facts about {attraction.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {attraction.didYouKnowFacts.map((fact, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-royal-950 border border-white/5 flex flex-col justify-between space-y-2">
                <span className="text-[10px] font-mono font-bold text-saffron-400 uppercase">Fact #{idx + 1}</span>
                <p className="text-xs text-slate-200 leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-semibold">
          <Link
            href="/explore"
            className="text-saffron-400 hover:text-saffron-300 flex items-center gap-2 bg-royal-900/80 px-4 py-2.5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Attractions</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
