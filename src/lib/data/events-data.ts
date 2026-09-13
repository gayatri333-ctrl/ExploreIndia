export interface ComprehensiveEvent {
  id: string;
  title: string;
  slug: string;
  stateSlug: string;
  stateName: string;
  region: 'North' | 'South' | 'East' | 'West' | 'North East' | 'Central';
  category: 'Cultural & Spiritual' | 'Music & Arts' | 'Food & Recreation' | 'Shopping & Fairs' | 'National Occasions';
  type: 'Festival' | 'Event' | 'Carnival';
  startDate: string;
  endDate: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
  locationVenue?: string;
  entryFee?: string;
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
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop'
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
      'https://images.unsplash.com/photo-1597040639497-66c91a0c4974?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop'
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
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop'
    ],
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
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Western Group of Temples Complex, Khajuraho, Madhya Pradesh',
    entryFee: 'Free Seating for Public',
    organizer: 'Madhya Pradesh Culture Department & Ustad Alauddin Khan Sangeet Academy',
    tags: ['Kathak', 'Bharatanatyam', 'Khajuraho Temples', 'Classical Dance']
  },
  {
    id: 'evt-feb-3',
    title: 'Goa Carnival (Intruz)',
    slug: 'goa-carnival',
    stateSlug: 'goa',
    stateName: 'Goa',
    region: 'West',
    category: 'Food & Recreation',
    type: 'Carnival',
    startDate: '2027-02-13',
    endDate: '2027-02-16',
    shortDescription: 'Four-day Mardi Gras celebration with King Momo floats, samba beats, brass bands & coastal street revelry across Panaji & Margao.',
    fullDescription: 'Introduced by the Portuguese in 1510, the Goa Carnival precedes 40 days of Lent. Led by King Momo decreeing "Eat, Drink & Be Merry", colorful parade floats depicting Goan folklore, fishing traditions, and brass bands wind through Panaji, Margao, Vasco, and Mapusa.',
    heroImage: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Panaji Promenade & Margao Main Street, Goa',
    entryFee: 'Free Street Access',
    organizer: 'Goa Tourism Department',
    tags: ['King Momo', 'Street Floats', 'Goa Parades', 'Brass Bands']
  },
  {
    id: 'evt-feb-4',
    title: 'Surajkund International Crafts Mela',
    slug: 'surajkund-crafts-mela',
    stateSlug: 'haryana',
    stateName: 'Haryana',
    region: 'North',
    category: 'Shopping & Fairs',
    type: 'Festival',
    startDate: '2027-02-05',
    endDate: '2027-02-21',
    shortDescription: 'World\'s largest crafts fair showcasing handlooms, pottery, rural food courts & folk dancers from 40+ participating nations.',
    fullDescription: 'Set against the backdrop of the 10th-century Surajkund reservoir in Faridabad, this international mela hosts 1,000+ handloom weavers and master craftsmen. Visitors enjoy authentic regional thalis, open-air folk theatre (Nautanki), and cultural performances.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Surajkund Mela Grounds, Faridabad (Delhi-NCR)',
    entryFee: 'INR 120 - 200 via DMRC & BookMyShow',
    organizer: 'Surajkund Mela Authority & Haryana Tourism',
    tags: ['Handloom Fair', 'Artisan Village', 'Folk Dance', 'Crafts Mela']
  },

  // MAR
  {
    id: 'evt-mar-1',
    title: 'Lathmar & Braj Vrindavan Holi Celebrations',
    slug: 'lathmar-holi-mathura-barsana',
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    region: 'North',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-03-20',
    endDate: '2027-03-23',
    shortDescription: 'Legendary Braj region Holi featuring women playfully beating men with wooden sticks (lathis) alongside flower & gulal showers.',
    fullDescription: 'In the holy towns of Barsana and Nandgaon near Mathura, Holi begins a week prior to the national holiday. Women of Barsana chase men from Nandgaon with lathis while men defend themselves with leather shields amidst showers of organic gulal and marigold petals.',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Radha Rani Temple Compound, Barsana & Bankey Bihari Temple, Vrindavan',
    entryFee: 'Free Open Street Access',
    organizer: 'Braj Teerth Vikas Parishad',
    tags: ['Lathmar Holi', 'Barsana', 'Gulal', 'Radha Krishna']
  },
  {
    id: 'evt-mar-2',
    title: 'Mewar Festival & Gangaur Procession',
    slug: 'mewar-festival-udaipur',
    stateSlug: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'West',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-03-29',
    endDate: '2027-03-31',
    shortDescription: 'Royal Gangaur festival in Udaipur celebrating spring, featuring Lake Pichola boat processions, folk music & fireworks.',
    fullDescription: 'Mewar Festival welcomes spring in Udaipur with grand royal processions carrying idols of Isar (Lord Shiva) and Gangaur (Goddess Parvati) through old city streets to Gangaur Ghat on Lake Pichola. Idols are placed on decorated royal barges amidst Rajasthani folk dance performances.',
    heroImage: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Gangaur Ghat & City Palace, Udaipur, Rajasthan',
    entryFee: 'Free Ghat Viewing',
    organizer: 'Rajasthan Tourism & Maharana of Mewar Charitable Foundation',
    tags: ['Gangaur', 'Udaipur Lakes', 'Royal Procession', 'Ghoomar Dance']
  },

  // APR
  {
    id: 'evt-apr-1',
    title: 'Thrissur Pooram Temple Spectacle',
    slug: 'thrissur-pooram',
    stateSlug: 'kerala',
    stateName: 'Kerala',
    region: 'South',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2027-04-18',
    endDate: '2027-04-19',
    shortDescription: 'Mother of all temple festivals featuring 30 caparisoned elephants, Kudamattam umbrella exchanges & night-long fireworks.',
    fullDescription: 'Held at Vadakkunnathan Temple grounds in Thrissur, two rival temple groups (Thiruvambadi and Paramekkavu) face off with 15 grandly decorated tuskers each. The festival features the Ilanjithara Melam (drum orchestra of 250 musicians) and colorful silk parasol exchanges (Kudamattam).',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Vadakkunnathan Temple Swaraj Round, Thrissur, Kerala',
    entryFee: 'Free Public Access',
    organizer: 'Cochin Devaswom Board & Paramekkavu/Thiruvambadi Devaswoms',
    tags: ['Elephant Pageant', 'Panchavadyam', 'Kudamattam', 'Fireworks']
  },

  // OCT
  {
    id: 'evt-oct-1',
    title: 'Kolkata Durga Puja Festival',
    slug: 'durga-puja-kolkata',
    stateSlug: 'west-bengal',
    stateName: 'West Bengal',
    region: 'East',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-10-17',
    endDate: '2026-10-21',
    shortDescription: 'UNESCO Intangible Cultural Heritage street art installation festival transforming Kolkata into an open-air art gallery.',
    fullDescription: 'Durga Puja in Kolkata is a monumental 5-day cultural carnival celebrating Goddess Durga\'s victory over Mahishasura. Over 3,000 intricately themed art pavilions (pandals) line the streets, displaying clay idols, classical Dhunuchi dance recitals, and night-long pandal hopping.',
    heroImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Citywide Pandals & Red Road Carnival, Kolkata, West Bengal',
    entryFee: 'Free Public Access',
    organizer: 'West Bengal Tourism & Forum for Durgotsab',
    tags: ['UNESCO Heritage', 'Pandal Hopping', 'Dhunuchi Naach', 'Kolkata Art']
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
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Pushkar Fairgrounds & Brahma Temple Ghats, Pushkar, Rajasthan',
    entryFee: 'Free Mela Access',
    organizer: 'Rajasthan Tourism Development Corporation (RTDC)',
    tags: ['Camel Mela', 'Hot Air Ballooning', 'Kalbelia Dance', 'Kartik Purnima']
  },
  {
    id: 'evt-nov-2',
    title: 'Varanasi Dev Deepavali & Ganga Aarti',
    slug: 'dev-deepavali-varanasi',
    stateSlug: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    region: 'North',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-11-25',
    endDate: '2026-11-25',
    shortDescription: 'Festival of Gods where 1,000,000 earthen oil lamps light up all 84 riverfront ghats of Varanasi under the full moon night.',
    fullDescription: 'Dev Deepavali occurs 15 days after Diwali on Kartik Purnima when gods are believed to descend to Earth to bathe in the holy Ganges. Every single step of Varanasi\'s 84 riverfront ghats is illuminated with over 1 million floating oil lamps (diyas), accompanied by grand laser light shows.',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'All 84 Riverfront Ghats & Ganges River, Varanasi, Uttar Pradesh',
    entryFee: 'Free Public Access',
    organizer: 'UP Tourism Department & Ganga Seva Nidhi',
    tags: ['Dev Deepavali', '1 Million Diyas', 'Ganga Aarti', 'Varanasi Ghats']
  },

  // DEC
  {
    id: 'evt-dec-1',
    title: 'Hornbill Festival of Nagaland',
    slug: 'hornbill-festival-nagaland',
    stateSlug: 'nagaland',
    stateName: 'Nagaland',
    region: 'North East',
    category: 'Cultural & Spiritual',
    type: 'Festival',
    startDate: '2026-12-01',
    endDate: '2026-12-10',
    shortDescription: 'Festival of Festivals showcasing war dances, indigenous sports & rice beer from 17 Naga tribes at Kisama Heritage Village.',
    fullDescription: 'The Hornbill Festival brings together all 17 major Naga tribes in a grand celebration of tribal culture, warrior dances, archery, chili eating contests, and rock concerts at Kisama Heritage Village near Kohima.',
    heroImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1600&auto=format&fit=crop',
    cardImage: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop'
    ],
    locationVenue: 'Naga Heritage Village Kisama, Kohima, Nagaland',
    entryFee: 'INR 20 - 50 Entry Fee',
    organizer: 'Nagaland Department of State Tourism',
    tags: ['Naga Tribes', 'Kisama Village', 'Hornbill Rock', 'Warrior Dance']
  }
];

export function getEventBySlug(slugOrState: string, maybeSlug?: string): ComprehensiveEvent | undefined {
  if (maybeSlug) {
    const stateClean = slugOrState.toLowerCase();
    const slugClean = maybeSlug.toLowerCase();
    return (
      COMPREHENSIVE_EVENTS.find(
        (evt) =>
          evt.slug === slugClean &&
          (evt.stateSlug.toLowerCase() === stateClean || evt.stateName.toLowerCase().replace(/\s+/g, '-') === stateClean)
      ) || COMPREHENSIVE_EVENTS.find((evt) => evt.slug === slugClean)
    );
  }
  const slugClean = slugOrState.toLowerCase();
  return COMPREHENSIVE_EVENTS.find((evt) => evt.slug === slugClean);
}

export function getRelatedEvents(
  currentEventOrId: ComprehensiveEvent | string,
  categoryOrLimit?: string | number,
  region?: string,
  limit: number = 3
): ComprehensiveEvent[] {
  if (typeof currentEventOrId === 'object') {
    const currentEvent = currentEventOrId;
    const max = typeof categoryOrLimit === 'number' ? categoryOrLimit : 3;
    return COMPREHENSIVE_EVENTS.filter(
      (evt) => evt.id !== currentEvent.id && (evt.category === currentEvent.category || evt.region === currentEvent.region)
    ).slice(0, max);
  }

  const currentId = currentEventOrId;
  const category = typeof categoryOrLimit === 'string' ? categoryOrLimit : undefined;
  return COMPREHENSIVE_EVENTS.filter(
    (evt) => evt.id !== currentId && (!category || evt.category === category || (region && evt.region === region))
  ).slice(0, limit);
}

export function getEventsByRegion(region: string): ComprehensiveEvent[] {
  return COMPREHENSIVE_EVENTS.filter((evt) => evt.region.toLowerCase() === region.toLowerCase());
}

export function getEventsByCategory(category: string): ComprehensiveEvent[] {
  return COMPREHENSIVE_EVENTS.filter((evt) => evt.category.toLowerCase() === category.toLowerCase());
}
