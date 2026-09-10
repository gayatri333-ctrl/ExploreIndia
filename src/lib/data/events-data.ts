/**
 * ExploreIndia Comprehensive Festivals & Events Dataset
 * 28 Original, diverse sample events spanning all 7 Categories, 6 Zones, and 12 Months.
 */

import { EventCategoryName } from '@/lib/design-tokens';

export interface ComprehensiveEvent {
  id: string;
  title: string;
  slug: string;
  stateSlug: string;
  stateName: string;
  region: 'North' | 'North East' | 'East' | 'Central' | 'West' | 'South';
  category: EventCategoryName;
  type: 'Festival' | 'Event';
  startDate: string; // ISO format "YYYY-MM-DD"
  endDate: string;   // ISO format "YYYY-MM-DD"
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
  locationVenue: string;
  entryFee?: string;
  isLiveNow?: boolean;
  daysRemaining?: number;
  organizer?: string;
  tags: string[];
}

export const COMPREHENSIVE_EVENTS: ComprehensiveEvent[] = [
  // JAN
  {
    id: 'evt-jan-1',
    title: 'International Kite Festival (Uttarayan)',
    slug: 'international-kite-festival',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    region: 'West',
    category: 'Food & Recreation',
    type: 'Festival',
    startDate: '2027-01-08',
    endDate: '2027-01-14',
    shortDescription: 'Vibrant sky spectacle over Sabarmati riverfront as millions of colorful kites soar during the winter solstice harvest transition.',
    fullDescription: 'Uttarayan marks the sun\'s transition into Capricorn and is celebrated across Gujarat with unmatched fervor. Millions of people gather on rooftops in Ahmedabad, Vadodara, and Surat, flying kites from dawn till dusk while shouting "Kai Po Che!". Master kite flyers from over 40 countries showcase giant 3D kites, LED nighttime kites (Tukkals), and aerial displays above Sabarmati Riverfront.',
    heroImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Sabarmati Riverfront & Heritage Rooftops, Ahmedabad, Gujarat',
    entryFee: 'Free Public Access',
    organizer: 'Tourism Corporation of Gujarat Limited (TCGL)',
    tags: ['Kite Flying', 'Uttarayan', 'Kai Po Che', 'Rooftop Parties']
  },
  {
    id: 'evt-jan-2',
    title: 'National Republic Day Parade & Beating Retreat',
    slug: 'republic-day-parade',
    stateSlug: 'delhi',
    stateName: 'Delhi (NCT)',
    region: 'North',
    category: 'National Occasions',
    type: 'Event',
    startDate: '2027-01-26',
    endDate: '2027-01-29',
    shortDescription: 'India\'s landmark national military parade on Kartavya Path showcasing state tableaux, camel regiments & IAF flypast.',
    fullDescription: 'Republic Day is India\'s premier national celebration along Kartavya Path in New Delhi. The parade features mechanized military contingents, BSF camel regiments, vibrant cultural tableaux representing all 28 states, daredevil motorcycle stunts, and a spectacular Indian Air Force flypast featuring Su-30MKI and Rafale jets.',
    heroImage: 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Kartavya Path & Vijay Chowk, New Delhi',
    entryFee: 'Parade Ticket INR 20 - 500',
    organizer: 'Ministry of Defence, Govt of India',
    tags: ['National Parade', 'IAF Flypast', 'State Tableaux', 'Kartavya Path']
  },

  // FEB
  {
    id: 'evt-feb-1',
    title: 'Taj Mahotsav Cultural & Craft Conclave',
    slug: 'taj-mahotsav-agra',
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    region: 'Central',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-02-18',
    endDate: '2027-02-27',
    shortDescription: 'Ten-day cultural carnival celebrating Mughal heritage, classical ghazals, chikankari silk, and artisan crafts near the Taj Mahal.',
    fullDescription: 'Taj Mahotsav in Agra is a 10-day extravaganza near the eastern gate of the Taj Mahal. Master craftsmen from every corner of India gather to display marble inlay work, Zardosi embroidery, brassware, and wood carvings. Evening stages host classical ghazals, Sufi qawwalis, Kathak recitals, and regional food stalls serving Nawabi biryanis and petha.',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Shilpgram Craft Village, Agra, Uttar Pradesh',
    entryFee: 'INR 50 per adult',
    organizer: 'UP Tourism Department',
    tags: ['Taj Mahal', 'Mughal Crafts', 'Ghazal Nights', 'Artisan Fair']
  },
  {
    id: 'evt-feb-2',
    title: 'Khajuraho Classical Dance Festival',
    slug: 'khajuraho-dance-festival',
    stateSlug: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    region: 'Central',
    category: 'Music & Arts',
    type: 'Event',
    startDate: '2027-02-20',
    endDate: '2027-02-26',
    shortDescription: 'Week-long classical dance festival set against the illuminated backdrop of UNESCO 10th-century Khajuraho temples.',
    fullDescription: 'The Khajuraho Dance Festival is a world-renowned week of classical dance hosted annually against the illuminated floodlit backdrop of the Western Group of Khajuraho Temples. India\'s greatest exponents of Kathak, Bharatanatyam, Odissi, Kuchipudi, Manipuri, and Kathakali perform live outdoors under starry skies.',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Western Group of Temples Complex, Khajuraho, Madhya Pradesh',
    entryFee: 'Free Seating for Public',
    organizer: 'Ustad Alauddin Khan Sangeet Academy & MP Tourism',
    tags: ['Classical Dance', 'UNESCO Temples', 'Kathak', 'Odissi']
  },

  // MAR
  {
    id: 'evt-mar-1',
    title: 'Barsana Lathmar Holi Heritage Festival',
    slug: 'barsana-lathmar-holi',
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    region: 'Central',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-03-20',
    endDate: '2027-03-22',
    shortDescription: 'Joyous Braj traditional spring celebration where women playfully beat men with wooden sticks amidst organic gulal clouds.',
    fullDescription: 'Lathmar Holi in Barsana and Nandgaon near Mathura is one of India\'s most extraordinary spring traditions. Reenacting the playful legendary teasing between Lord Krishna and Radha, women beat men\'s shields with wooden sticks (lathis) while crowds chant songs, throw herbal gulal colors, and share thandai drinks.',
    heroImage: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Radha Rani Temple Courtyard, Barsana, Uttar Pradesh',
    entryFee: 'Free Entry',
    organizer: 'Barsana Temple Board & Braj Tourism',
    tags: ['Lathmar Holi', 'Braj Heritage', 'Organic Colors', 'Radha Krishna']
  },
  {
    id: 'evt-mar-2',
    title: 'Goa Shigmo Traditional Folk Carnival',
    slug: 'goa-shigmo-carnival',
    stateSlug: 'goa',
    stateName: 'Goa',
    region: 'West',
    category: 'Music & Arts',
    type: 'Festival',
    startDate: '2027-03-24',
    endDate: '2027-03-30',
    shortDescription: 'Goan traditional spring festival showcasing colorful street parades, mythological float pageants & Ghode Modni sword dances.',
    fullDescription: 'Shigmotsav (Shigmo) is Goa\'s authentic Hindu spring harvest carnival. Streets in Panaji, Margao, and Vasco fill with elaborate parades featuring gigantic illuminated floats of Hindu epics, Ghode Modni (horse dummy dancers), Fugdi folk troupes, and traditional drum ensembles.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Panaji Promenade & Margao Town Center, Goa',
    entryFee: 'Free Street Access',
    organizer: 'Goa Tourism Development Corporation',
    tags: ['Goan Shigmo', 'Folk Float Parade', 'Ghode Modni', 'Spring Carnival']
  },

  // APR
  {
    id: 'evt-apr-1',
    title: 'Thrissur Pooram Temple Elephant Pageant',
    slug: 'thrissur-pooram-kerala',
    stateSlug: 'kerala',
    stateName: 'Kerala',
    region: 'South',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-04-18',
    endDate: '2027-04-19',
    shortDescription: 'The mother of all Kerala temple festivals featuring 30 caparisoned elephants, Kudamattam umbrella displays & Panchavadyam drumming.',
    fullDescription: 'Thrissur Pooram is Kerala\'s grandest temple spectacle held at Vadakkunnathan Temple grounds. Two rival temple factions face off in Kudamattam—a thrilling visual duel where sequined silk umbrellas are raised in synchronization atop 30 decorated elephants, accompanied by 250 traditional Panchavadyam percussionists.',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Vadakkunnathan Temple Ground, Thrissur, Kerala',
    entryFee: 'Free Public Gathering',
    organizer: 'Cochin Devaswom Board & Thrissur Paramekkavu-Thiruvambady Temples',
    tags: ['Thrissur Pooram', 'Kudamattam', 'Caparisoned Elephants', 'Panchavadyam']
  },
  {
    id: 'evt-apr-2',
    title: 'Indira Gandhi Memorial Tulip Festival',
    slug: 'tulip-festival-srinagar',
    stateSlug: 'jammu-kashmir',
    stateName: 'Jammu & Kashmir',
    region: 'North',
    category: 'Nature & Wildlife',
    type: 'Festival',
    startDate: '2027-04-01',
    endDate: '2027-04-20',
    shortDescription: 'Asia\'s largest tulip garden blooms with 1.5 million colorful tulips overlooking Dal Lake and Zabarwan mountain range.',
    fullDescription: 'Every spring, Asia\'s largest tulip garden in Srinagar bursts into bloom with 1.5 million tulips across 68 distinct varieties. Nestled at the foothills of the Zabarwan Mountains overlooking Dal Lake, the festival features Kashmiri Rouf folk dancing, craft stalls selling Pashmina shawls, and traditional saffron kehwa tea.',
    heroImage: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Indira Gandhi Memorial Tulip Garden, Srinagar, Jammu & Kashmir',
    entryFee: 'INR 60 per adult',
    organizer: 'J&K Floriculture Department & Tourism Board',
    tags: ['Tulip Blooms', 'Dal Lake', 'Kashmir Spring', 'Pashmina Craft']
  },

  // MAY
  {
    id: 'evt-may-1',
    title: 'Bodh Gaya Global Buddha Purnima Assembly',
    slug: 'bodh-gaya-buddha-purnima',
    stateSlug: 'bihar',
    stateName: 'Bihar',
    region: 'East',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-05-20',
    endDate: '2027-05-21',
    shortDescription: 'Sacred international Buddhist congregation under the holy Bodhi Tree marking Lord Buddha\'s birth and enlightenment.',
    fullDescription: 'Bodh Gaya hosts thousands of Buddhist monks, spiritual seekers, and international pilgrims on Vesak / Buddha Purnima. Monks from Thailand, Tibet, Sri Lanka, Japan, and Myanmar chant around the Mahabodhi Temple and the sacred Bodhi Tree where Buddha attained enlightenment. The temple complex is illuminated with thousands of lotus oil lamps.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Mahabodhi Temple Complex, Bodh Gaya, Bihar',
    entryFee: 'Free Admission',
    organizer: 'Bodh Gaya Temple Management Committee (BTMC)',
    tags: ['Buddha Purnima', 'Mahabodhi Tree', 'Spiritual Chanting', 'Vesak']
  },
  {
    id: 'evt-may-2',
    title: 'Mount Abu Summer Hill Fiesta',
    slug: 'mount-abu-summer-festival',
    stateSlug: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'West',
    category: 'Food & Recreation',
    type: 'Festival',
    startDate: '2027-05-28',
    endDate: '2027-05-30',
    shortDescription: 'Hill station summer retreat in Rajasthan featuring boat races on Nakki Lake, Ghoomar dance & fireworks over Dilwara.',
    fullDescription: 'Held during Buddha Purnima weekend, the Mount Abu Summer Festival celebrates Rajasthan\'s only hill station. The festival opens with classical balladeers and Ghoomar folk dances, followed by boat racing on Nakki Lake, horse racing, tug-of-war contests, and evening fireworks over the Aravali hills.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Nakki Lake & Municipal Grounds, Mount Abu, Rajasthan',
    entryFee: 'Free Public Entry',
    organizer: 'Rajasthan Tourism & Mount Abu Municipal Board',
    tags: ['Mount Abu', 'Nakki Lake', 'Ghoomar', 'Hill Station Fiesta']
  },

  // JUN
  {
    id: 'evt-jun-1',
    title: 'Puri Jagannath Grand Rath Yatra',
    slug: 'puri-rath-yatra-odisha',
    stateSlug: 'odisha',
    stateName: 'Odisha',
    region: 'East',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-06-25',
    endDate: '2027-07-03',
    shortDescription: 'World\'s oldest chariot festival where millions pull 45-foot wooden chariots of Lord Jagannath, Balabhadra & Subhadra.',
    fullDescription: 'The Puri Rath Yatra is a monumental chariot procession where Lord Jagannath and his divine siblings step out of the 12th-century Puri temple onto Grand Road (Bada Danda). Millions of devotees pull three massive 45-foot wooden chariots decorated in red, yellow, and black silk, traveling to Gundicha Temple amidst conch shells and cymbal rhythms.',
    heroImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Bada Danda Grand Road & Puri Temple, Odisha',
    entryFee: 'Free Public Event',
    organizer: 'Shree Jagannath Temple Administration & Odisha Tourism',
    tags: ['Puri Rath Yatra', 'Chariot Festival', 'Lord Jagannath', 'Bada Danda']
  },
  {
    id: 'evt-jun-2',
    title: 'Hemis Monastery Sacred Mask Dance Festival',
    slug: 'hemis-monastery-festival',
    stateSlug: 'ladakh',
    stateName: 'Ladakh',
    region: 'North',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-06-25',
    endDate: '2026-06-26',
    shortDescription: 'High-altitude Tibetan Buddhist festival featuring sacred Cham dances in colourful brocade costumes and giant Thangka unveiling.',
    fullDescription: 'Set against the stark barren peaks of Ladakh, the Hemis Festival celebrates the birth anniversary of Guru Padmasambhava at the 400-year-old Hemis Monastery. Monks wearing intricate painted wooden masks (Cham) and heavy silk brocade robes perform rhythmic dances in the central courtyard.',
    heroImage: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Hemis Gompa Courtyard, Leh, Ladakh',
    entryFee: 'INR 100 Monastery Entry',
    organizer: 'Hemis Monastery Trust & Ladakh Tourism',
    tags: ['Cham Mask Dance', 'Tibetan Buddhism', 'Monastery', 'Thangka']
  },

  // JUL
  {
    id: 'evt-jul-1',
    title: 'Valley of Flowers High Himalayan Botanical Trek',
    slug: 'valley-of-flowers-trek',
    stateSlug: 'uttarakhand',
    stateName: 'Uttarakhand',
    region: 'North',
    category: 'Nature & Wildlife',
    type: 'Event',
    startDate: '2027-07-10',
    endDate: '2027-07-25',
    shortDescription: 'UNESCO alpine monsoon wildflower pilgrimage featuring 500 endemic alpine blossom species & Hemkund Sahib lake.',
    fullDescription: 'During peak monsoon in July, the UNESCO World Heritage Valley of Flowers in Chamoli, Uttarakhand comes alive with 500 species of wild alpine flowers including the rare Blue Poppy, Brahma Kamal, and Cobra Lily. Hikers trek from Govindghat through birch forests and glacial streams to reach this alpine meadow.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Valley of Flowers National Park, Chamoli, Uttarakhand',
    entryFee: 'Park Permit INR 150 per head',
    organizer: 'Uttarakhand Forest Department & Eco Trekking Guild',
    tags: ['Valley of Flowers', 'Brahma Kamal', 'Himalayan Trek', 'UNESCO Heritage']
  },
  {
    id: 'evt-jul-2',
    title: 'Champakulam Moolam Snake Boat Race',
    slug: 'champakulam-boat-race-kerala',
    stateSlug: 'kerala',
    stateName: 'Kerala',
    region: 'South',
    category: 'Adventure & Sports',
    type: 'Event',
    startDate: '2027-07-04',
    endDate: '2027-07-04',
    shortDescription: 'Kerala\'s oldest monsoon backwater boat race commemorating the installation of the Ambalappuzha Krishna deity.',
    fullDescription: 'Champakulam Moolam is the season-opening snake boat race held on the Pamba River in Alappuzha. Scores of majestic 100-foot Chundan Vallam snake boats adorned with silk parasols race against each other powered by oarsmen singing traditional Vanchipattu boat songs.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Pamba River Waters, Champakulam, Alappuzha, Kerala',
    entryFee: 'Free Riverbank Viewing',
    organizer: 'Champakulam Boat Race Committee & Kerala Tourism',
    tags: ['Champakulam', 'Snake Boat Race', 'Vanchipattu', 'Pamba River']
  },

  // AUG
  {
    id: 'evt-aug-1',
    title: 'Kerala Onam & Nehru Trophy Snake Boat Race',
    slug: 'kerala-onam-vallam-kali',
    stateSlug: 'kerala',
    stateName: 'Kerala',
    region: 'South',
    category: 'Adventure & Sports',
    type: 'Festival',
    startDate: '2026-08-28',
    endDate: '2026-09-06',
    shortDescription: 'Harvest festival of Kerala featuring 100-foot Chundan Vallam snake boat races, floral Pookkalam carpets & 26-dish Onam Sadya feasting.',
    fullDescription: 'Onam is Kerala\'s grandest harvest festival commemorating the legendary King Mahabali. Highlights include the thrilling Nehru Trophy Boat Race on Punnamada Lake, where 100-foot long snake boats powered by 100 rhythmic oarsmen slice through backwaters to thunderous chanting.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Punnamada Lake Alleppey & Thiruvananthapuram, Kerala',
    entryFee: 'Boat Race Passes INR 500 - 3000',
    organizer: 'Kerala Tourism Development Corporation (KTDC)',
    tags: ['Snake Boat Race', 'Pookkalam', 'Onam Sadya', 'Kathakali']
  },
  {
    id: 'evt-aug-2',
    title: 'Independence Day Red Fort Address & Flypast',
    slug: 'independence-day-red-fort',
    stateSlug: 'delhi',
    stateName: 'Delhi (NCT)',
    region: 'North',
    category: 'National Occasions',
    type: 'Event',
    startDate: '2027-08-15',
    endDate: '2027-08-15',
    shortDescription: 'National flag unfurling at Red Fort by Prime Minister followed by 21-gun artillery salute and helicopter flower shower.',
    fullDescription: 'On August 15, India celebrates Independence Day at the historic Red Fort in Old Delhi. The Prime Minister unfurls the national tricolor flag from the ramparts of Lahori Gate, delivered alongside a national address, 21-gun artillery salute, guard of honor march, and rose petal air showers.',
    heroImage: 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Red Fort Ramparts, Old Delhi',
    entryFee: 'Invitation & Special Public Passes',
    organizer: 'Ministry of Home Affairs & Ministry of Defence',
    tags: ['Independence Day', 'Red Fort', 'Tricolor Flag', '21 Gun Salute']
  },

  // SEP
  {
    id: 'evt-sep-1',
    title: 'Mumbai Ganesh Chaturthi Grand Visarjan',
    slug: 'mumbai-ganesh-chaturthi',
    stateSlug: 'maharashtra',
    stateName: 'Maharashtra',
    region: 'West',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-09-14',
    endDate: '2026-09-24',
    shortDescription: 'Ten-day Mumbai festival dedicated to Lord Ganesha concluding in a massive immersion procession at Girgaon Chowpatty beach.',
    fullDescription: 'Ganesh Chaturthi is Maharashtra\'s largest cultural festival. Massive clay idols of Lord Ganesha (like Lalbaugcha Raja) are worshiped across neighborhood mandaps. On the 11th day (Anant Chaturdashi), millions dance through Mumbai streets to dhol-tasha drum beats for the grand immersion in the Arabian Sea.',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Lalbaug Mandap & Girgaon Chowpatty Beach, Mumbai, Maharashtra',
    entryFee: 'Free Public Event',
    organizer: 'Lalbaugcha Raja Sarvajanik Ganeshotsav Mandal & Brihanmumbai Municipal Corp',
    tags: ['Ganesh Chaturthi', 'Lalbaugcha Raja', 'Visarjan', 'Dhol Tasha']
  },
  {
    id: 'evt-sep-2',
    title: 'Ziro Festival of Music — Eco Outdoor Stage',
    slug: 'ziro-festival-music',
    stateSlug: 'arunachal-pradesh',
    stateName: 'Arunachal Pradesh',
    region: 'North East',
    category: 'Music & Arts',
    type: 'Festival',
    startDate: '2026-09-24',
    endDate: '2026-09-27',
    shortDescription: 'India\'s premier outdoor indie music festival hosted in the lush green paddy valleys of the Apatani tribe.',
    fullDescription: 'Set in the misty pine-covered Ziro Valley of Arunachal Pradesh, Ziro Festival of Music is India\'s most eco-friendly open-air music festival. Built entirely using locally sourced bamboo by Apatani tribesmen, two stages host over 40 indie, folk, and electronic bands from across India and globe.',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Biirii Festival Grounds, Ziro Valley, Arunachal Pradesh',
    entryFee: '4-Day Festival Pass INR 8,000 (ILP Permit Required)',
    organizer: 'Ziro Festival Guild & Arunachal Tourism',
    tags: ['Ziro Festival', 'Indie Music', 'Apatani Tribe', 'Eco Camping']
  },

  // OCT
  {
    id: 'evt-oct-1',
    title: 'Kolkata Durga Puja Grand Carnival',
    slug: 'durga-puja-kolkata',
    stateSlug: 'west-bengal',
    stateName: 'West Bengal',
    region: 'East',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-10-17',
    endDate: '2026-10-21',
    shortDescription: 'UNESCO Intangible Cultural Heritage extravaganza celebrating Goddess Durga with breathtaking artistic pandals, dhak drummers & street food.',
    fullDescription: 'Durga Puja in Kolkata is a monumental outdoor art installation and spiritual festival recognized worldwide by UNESCO. For five magical days, Kolkata transforms into an open-air art gallery with thousands of handcrafted thematic pandals illuminated by millions of LED lights.',
    heroImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Greater Kolkata Pandals & Red Road Carnival, West Bengal',
    entryFee: 'Free (VIP Pandal Passes Available)',
    organizer: 'Department of Tourism, Govt of West Bengal',
    tags: ['UNESCO Heritage', 'Pandal Hopping', 'Dhak Drums', 'Bengali Cuisine']
  },
  {
    id: 'evt-oct-2',
    title: 'Mysuru Dasara Royal Palace Illumination',
    slug: 'mysuru-dasara-karnataka',
    stateSlug: 'karnataka',
    stateName: 'Karnataka',
    region: 'South',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-10-11',
    endDate: '2026-10-20',
    shortDescription: 'Ten-day royal festival culminating in Jumboo Savari elephant procession and 100,000 bulb Mysore Palace illumination.',
    fullDescription: 'Mysuru Dasara (Nada Habba) is Karnataka\'s official state festival. For 10 days, Mysore Palace is illuminated every evening with nearly 100,000 bulbs. On Vijayadashami, the royal Jumboo Savari parade features Goddess Chamundeshwari carried in a 750 kg golden howdah atop a caparisoned elephant.',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Mysore Palace Grounds & Torchlight Parade Ground, Mysuru, Karnataka',
    entryFee: 'Palace Grounds Ticket INR 100',
    organizer: 'Government of Karnataka & Mysuru Royal Family',
    tags: ['Mysuru Dasara', 'Jumboo Savari', 'Palace Illumination', 'Golden Howdah']
  },

  // NOV
  {
    id: 'evt-nov-1',
    title: 'Pushkar International Camel Fair',
    slug: 'pushkar-camel-fair',
    stateSlug: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'West',
    category: 'Shopping & Fairs',
    type: 'Festival',
    startDate: '2026-11-20',
    endDate: '2026-11-28',
    shortDescription: 'World-famous livestock mela featuring 50,000 camels, folk dance, turban tying competitions & sacred lake bath on Kartik Purnima.',
    fullDescription: 'The Pushkar Camel Fair is one of India\'s most iconic cultural and livestock spectacles held annually in Pushkar, Rajasthan. Over 50,000 decorated camels, horses, and cattle converge on the desert dunes, alongside hot air ballooning and Kartik Purnima holy dips.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Pushkar Mela Ground & Holy Lake, Pushkar, Rajasthan',
    entryFee: 'Free Admission',
    organizer: 'Rajasthan Tourism Development Corporation (RTDC)',
    tags: ['Camel Fair', 'Folk Dance', 'Hot Air Ballooning', 'Kartik Purnima']
  },
  {
    id: 'evt-nov-2',
    title: 'Rann Utsav — White Desert Festival',
    slug: 'rann-utsav-kutch',
    stateSlug: 'gujarat',
    stateName: 'Gujarat',
    region: 'West',
    category: 'Food & Recreation',
    type: 'Event',
    startDate: '2026-11-01',
    endDate: '2027-02-28',
    shortDescription: 'Four-month desert extravaganza amidst the glowing white salt marshes of Kutch with luxury tent cities, star gazing & Kutchi handicrafts.',
    fullDescription: 'Rann Utsav is a four-month long cultural fiesta held in the endless white salt desert of Dhordo in Kutch, Gujarat. Visitors stay in a 350-acre luxury tent city, witnessing full-moon night reflections on the salt plains.',
    heroImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Tent City Dhordo, Great Rann of Kutch, Gujarat',
    entryFee: 'Permit INR 100',
    organizer: 'Gujarat Tourism & Evoke Experiences',
    tags: ['White Desert', 'Full Moon Night', 'Tent City', 'Kutchi Crafts']
  },
  {
    id: 'evt-nov-3',
    title: 'Kaziranga National Tiger & Rhino Conclave',
    slug: 'kaziranga-wildlife-conclave',
    stateSlug: 'assam',
    stateName: 'Assam',
    region: 'North East',
    category: 'Nature & Wildlife',
    type: 'Event',
    startDate: '2026-11-15',
    endDate: '2026-11-18',
    shortDescription: 'Annual eco-tourism gathering featuring dawn elephant safaris, rhino tracking & conservation workshops in Assam.',
    fullDescription: 'The Kaziranga Wildlife Conclave gathers international naturalists, photographers, and wildlife enthusiasts at Kaziranga National Park, home to two-thirds of the world\'s One-horned Rhinos.',
    heroImage: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Kohora & Bagori Range, Kaziranga National Park, Assam',
    entryFee: 'Safari Permit INR 1200',
    organizer: 'Assam Forest Department & Eco-Tourism Board',
    tags: ['One-Horned Rhino', 'Elephant Safari', 'Wildlife Photography']
  },
  {
    id: 'evt-nov-4',
    title: 'Varanasi Dev Deepavali Light Celebration',
    slug: 'varanasi-dev-deepavali',
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    region: 'Central',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-11-24',
    endDate: '2026-11-24',
    shortDescription: 'The Night of the Gods when over 1 million clay lamps (diyas) illuminate 84 ghats along the sacred River Ganges.',
    fullDescription: 'Celebrated 15 days after Diwali on Kartik Purnima, Dev Deepavali in Varanasi is believed to be the night when gods descend to earth to bathe in the Ganges. All 84 historic riverfront ghats are illuminated with over one million earthen diyas.',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: '84 Ghats of Varanasi & Ganges River, Uttar Pradesh',
    entryFee: 'Free Access',
    organizer: 'UP Tourism & Ganga Seva Nidhi',
    tags: ['Ganga Aarti', '1 Million Diyas', 'Dev Deepavali', 'Holy Ghats']
  },

  // DEC
  {
    id: 'evt-dec-1',
    title: 'Hornbill Festival — Festival of Festivals',
    slug: 'hornbill-festival',
    stateSlug: 'nagaland',
    stateName: 'Nagaland',
    region: 'North East',
    category: 'Music & Arts',
    type: 'Festival',
    startDate: '2026-12-01',
    endDate: '2026-12-10',
    shortDescription: 'Spectacular gathering of 17 Naga tribes showcasing traditional warrior dances, indigenous rock concerts, Naga chilli eating & archery.',
    fullDescription: 'Named after the sacred Indian Hornbill bird, the Hornbill Festival is Nagaland\'s premier cultural showcase held at Kisama Heritage Village near Kohima. All 17 major Naga indigenous tribes assemble in their vibrant traditional morungs.',
    heroImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Naga Heritage Village Kisama, Kohima, Nagaland',
    entryFee: 'INR 50 Day Pass',
    organizer: 'Department of Tourism, Govt of Nagaland',
    tags: ['Naga Tribes', 'Warrior Dance', 'Rock Contest', 'Naga Chilli']
  },
  {
    id: 'evt-dec-2',
    title: 'Goa Coastal Sunburn Electronic Music Gala',
    slug: 'sunburn-music-festival-goa',
    stateSlug: 'goa',
    stateName: 'Goa',
    region: 'West',
    category: 'Music & Arts',
    type: 'Festival',
    startDate: '2026-12-28',
    endDate: '2026-12-31',
    shortDescription: 'Asia\'s largest beachside electronic music festival bringing top global DJs to Vagator Beach for year-end celebrations.',
    fullDescription: 'Sunburn Goa is Asia\'s premier electronic dance music (EDM) festival hosted on the cliffs of Vagator Beach. Featuring massive stage design, laser pyrotechnics, and world-class headlining DJs, it draws electronic music fans for year-end sunset celebrations.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Vagator Beach Arena, Goa',
    entryFee: 'Festival Pass INR 3,500+',
    organizer: 'Percept Live & Goa Tourism',
    tags: ['Goa EDM', 'Sunburn Vagator', 'Beach Festival', 'New Year Party']
  },
  {
    id: 'evt-dec-3',
    title: 'Ganjam Olive Ridley Sea Turtle Eco Conclave',
    slug: 'olive-ridley-turtle-festival',
    stateSlug: 'odisha',
    stateName: 'Odisha',
    region: 'East',
    category: 'Nature & Wildlife',
    type: 'Event',
    startDate: '2026-12-15',
    endDate: '2026-12-18',
    shortDescription: 'Coastal eco-tourism gathering observing thousands of Olive Ridley sea turtles arriving for mass nesting (Arribada) on Rushikulya beach.',
    fullDescription: 'Rushikulya beach in Ganjam, Odisha is one of the world\'s largest mass nesting grounds (Arribada) for endangered Olive Ridley sea turtles. Forest department naturalists host moonlight beach walks, turtle hatchling protection workshops, and marine ecology seminars.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'Rushikulya Sea Turtle Sanctuary, Ganjam, Odisha',
    entryFee: 'Free Guided Walks (Forest Permit Required)',
    organizer: 'Odisha Wildlife Wing & Rushikulya Sea Turtle Protection Committee',
    tags: ['Olive Ridley', 'Turtle Nesting', 'Arribada', 'Odisha Coast']
  },
  {
    id: 'evt-dec-4',
    title: 'Puducherry French Quarter Winter Carnival',
    slug: 'puducherry-french-carnival',
    stateSlug: 'puducherry',
    stateName: 'Puducherry',
    region: 'South',
    category: 'Food & Recreation',
    type: 'Festival',
    startDate: '2026-12-24',
    endDate: '2026-12-31',
    shortDescription: 'Charming seaside winter carnival with Franco-Tamil gastronomy, cobblestone street music, and candlelit dinners in White Town.',
    fullDescription: 'Celebrated in the mustard-yellow French Quarter of Puducherry, the Winter Carnival blends French heritage with Tamil traditions. Visitors stroll along Goubert Avenue promenade, sampling crepes, baguettes, and Franco-Tamil seafood fusion while listening to street accordionists and choir recitals.',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    galleryImages: ['https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop'],
    locationVenue: 'White Town French Quarter & Goubert Avenue Promenade, Puducherry',
    entryFee: 'Free Street Access',
    organizer: 'Puducherry Tourism Department (PTDC)',
    tags: ['French Quarter', 'Puducherry Promenade', 'Franco Tamil Food', 'Winter Carnival']
  }
];

export function getEventBySlug(stateSlug: string, slug: string): ComprehensiveEvent | undefined {
  const normState = (stateSlug || '').toLowerCase();
  const normSlug = (slug || '').toLowerCase();

  return COMPREHENSIVE_EVENTS.find((e) => {
    const eSlug = e.slug.toLowerCase();
    const eState = e.stateSlug.toLowerCase();
    const eId = e.id.toLowerCase();
    
    return (
      eSlug === normSlug ||
      eId === normSlug ||
      normSlug.includes(eSlug) ||
      eSlug.includes(normSlug) ||
      (eState === normState && eSlug === normSlug)
    );
  });
}

export function getRelatedEvents(currentEventId: string, category: EventCategoryName, region: string, limit = 4): ComprehensiveEvent[] {
  return COMPREHENSIVE_EVENTS.filter(
    (e) => e.id !== currentEventId && (e.category === category || e.region === region)
  ).slice(0, limit);
}
