export interface Itinerary {
  id: string;
  title: string;
  slug: string;
  region: 'North' | 'South' | 'East' | 'West' | 'North East' | 'Central';
  interest: 'Adventure' | 'Spiritual' | 'Heritage' | 'Nature' | 'Gastronomy' | 'Wildlife' | 'Wellness' | 'Arts';
  tripLength: '1-2 Days' | '3-4 Days' | '5-6 Days' | '7-13 Days' | '14+ Days';
  durationBadge: string;
  coverImage: string;
  shortDescription: string;
  fullHighlights: string[];
  sampleDays: Array<{ day: number; title: string; desc: string }>;
}

export const SAMPLE_ITINERARIES: Itinerary[] = [
  {
    id: 'taj-express-2',
    title: 'Taj Mahal & Fatehpur Sikri Express Trail',
    slug: 'taj-mahal-fatehpur-sikri-express',
    region: 'North',
    interest: 'Heritage',
    tripLength: '1-2 Days',
    durationBadge: '2 Days / 1 Night',
    coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
    shortDescription: 'Witness golden sunrise over the Taj Mahal, explore Agra Fort, and visit Mughal red sandstone ruins at Fatehpur Sikri.',
    fullHighlights: [
      'Sunrise view of Taj Mahal from Mehtab Bagh',
      'Guided walkthrough of Agra Fort imperial chambers',
      'Exploration of Fatehpur Sikri Buland Darwaza gate'
    ],
    sampleDays: [
      { day: 1, title: 'Delhi to Agra & Sunset Taj Walk', desc: 'Express Highway transfer to Agra. Sunset viewing of the Taj Mahal across the Yamuna.' },
      { day: 2, title: 'Sunrise Taj Mahal & Fatehpur Sikri', desc: 'Early morning entry to Taj Mahal. Visit Agra Fort and Fatehpur Sikri before returning.' }
    ]
  },
  {
    id: 'alleppey-escape-2',
    title: 'Alleppey Houseboat & Lagoon Escape',
    slug: 'alleppey-houseboat-lagoon-escape',
    region: 'South',
    interest: 'Nature',
    tripLength: '1-2 Days',
    durationBadge: '2 Days / 1 Night',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    shortDescription: 'Glide past palm-fringed lagoons on an overnight luxury houseboat cruise with traditional Kerala meals.',
    fullHighlights: [
      'Overnight luxury Kettuvallam houseboat stay',
      'Sunset cruise across Vembanad Lake',
      'Freshly prepared local Kerala banana leaf banquet'
    ],
    sampleDays: [
      { day: 1, title: 'Board Houseboat & Lagoon Cruise', desc: 'Embark at Alleppey jetty. Cruise through narrow canals and watch village backwater life.' },
      { day: 2, title: 'Sunrise Village Canoe Walk & Departure', desc: 'Morning canoe trip through quiet water alleys followed by traditional breakfast and check-out.' }
    ]
  },
  {
    id: 'varanasi-spiritual-3',
    title: 'Spiritual Trail of Varanasi Ghats & Sarnath',
    slug: 'spiritual-varanasi-ghats-sarnath',
    region: 'North',
    interest: 'Spiritual',
    tripLength: '3-4 Days',
    durationBadge: '3 Days / 2 Nights',
    coverImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
    shortDescription: 'Experience sacred Ganga Aarti at dusk, dawn boat rides along ancient ghats, and Buddha’s enlightenment trail at Sarnath.',
    fullHighlights: [
      'Flickering oil lamp rituals at Dashashwamedh Ghat Aarti',
      'Dawn rowing boat tour along Manikarnika & Assi Ghats',
      'Visit Dhamek Stupa at Lord Buddha’s Sarnath'
    ],
    sampleDays: [
      { day: 1, title: 'Arrival & Evening Ganga Aarti', desc: 'Check-in and evening boat ride to witness the spectacular brass lamp Aarti.' },
      { day: 2, title: 'Sunrise Ganga Boat & Kashi Temple Walk', desc: 'Early morning rowing boat ride on the river followed by Kashi Vishwanath temple visit.' },
      { day: 3, title: 'Sarnath Pilgrimage & Departure', desc: 'Explore ancient Buddhist stupas and museum in Sarnath before airport transfer.' }
    ]
  },
  {
    id: 'ranthambore-tiger-4',
    title: 'Ranthambore Royal Tiger Safari Expedition',
    slug: 'ranthambore-royal-tiger-safari',
    region: 'West',
    interest: 'Wildlife',
    tripLength: '3-4 Days',
    durationBadge: '4 Days / 3 Nights',
    coverImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800',
    shortDescription: 'Track Bengal tigers, wild leopards, and marsh crocodiles deep within deciduous forests and ancient fort ruins.',
    fullHighlights: [
      '3 Open-gipsy jungle safaris across core tiger zones',
      'Guided trek up 10th-century Ranthambore Fort',
      'Bird watching at Padam Talao lake'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Sawai Madhopur & Evening Orientation', desc: 'Check-in at wilderness resort and briefing with naturalist guides.' },
      { day: 2, title: 'Dawn & Afternoon Jungle Safaris', desc: 'Track tigers and leopards in core reserve zones.' },
      { day: 3, title: 'Fort Citadel Trek & Evening Safari', desc: 'Hike up Ranthambore Fort ramparts for panoramic forest views.' },
      { day: 4, title: 'Final Morning Safari & Departure', desc: 'Final game drive before departure.' }
    ]
  },
  {
    id: 'rishikesh-rafting-3',
    title: 'Rishikesh Himalayan Rafting & Yoga Retreat',
    slug: 'rishikesh-himalayan-rafting-yoga',
    region: 'North',
    interest: 'Adventure',
    tripLength: '3-4 Days',
    durationBadge: '3 Days / 2 Nights',
    coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
    shortDescription: 'Conquer white-water rapids along the Ganges gorges, practice sunrise yoga, and visit the historic Beatles Ashram.',
    fullHighlights: [
      '16 km Grade III/IV rafting expedition down Ganges rapids',
      'Sunrise yoga shala session overlooking Himalayan valleys',
      'Meditation walk through Beatles Maharishi Ashram'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Rishikesh & Evening Ghat Aarti', desc: 'Check-in at eco-lodge and evening attendance at Triveni Ghat Aarti.' },
      { day: 2, title: 'White Water Rafting & Cliff Jumping', desc: 'Plunge through Marine Drive to Laxman Jhula rapids.' },
      { day: 3, title: 'Beatles Ashram Walk & Departure', desc: 'Explore graffiti art in Beatles Ashram and return.' }
    ]
  },
  {
    id: 'gt-classic-6',
    title: 'Golden Triangle Royal Heritage Circuit',
    slug: 'golden-triangle-royal-heritage-circuit',
    region: 'North',
    interest: 'Heritage',
    tripLength: '5-6 Days',
    durationBadge: '6 Days / 5 Nights',
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    shortDescription: 'Experience India’s iconic triangle: Mughal monuments of Delhi, Taj Mahal in Agra, and hilltop palaces of Jaipur.',
    fullHighlights: [
      'Delhi Red Fort & Humayun Tomb Mughal architecture',
      'Taj Mahal sunrise guided tour',
      'Amber Fort mirror palace and Jaipur Pink City markets'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Delhi & City Monuments', desc: 'Tour Qutub Minar and India Gate.' },
      { day: 2, title: 'Delhi to Agra Highway & Taj Sunset', desc: 'Drive to Agra and view Taj Mahal at sunset.' },
      { day: 3, title: 'Agra Fort to Jaipur via Fatehpur Sikri', desc: 'Visit Buland Darwaza en route to Jaipur.' },
      { day: 4, title: 'Jaipur Hilltop Forts & City Palace', desc: 'Explore Amber Fort, Jal Mahal, and City Palace.' },
      { day: 5, title: 'Pink City Bazaars & Craft Workshop', desc: 'Hand block-printing shopping in Bapu Bazaar.' },
      { day: 6, title: 'Return Drive to Delhi Airport', desc: 'Final souvenir stop and departure.' }
    ]
  },
  {
    id: 'kerala-hills-6',
    title: 'Kerala Spice Hills, Tea Gardens & Backwaters',
    slug: 'kerala-spice-hills-tea-gardens-backwaters',
    region: 'South',
    interest: 'Nature',
    tripLength: '5-6 Days',
    durationBadge: '6 Days / 5 Nights',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    shortDescription: 'Explore colonial spice ports in Kochi, rolling tea plantations in Munnar, and private houseboat cruises in Alleppey.',
    fullHighlights: [
      'Fort Kochi Chinese fishing nets and spice market walk',
      'Munnar tea estate walks & Nilgiri Tahr sanctuary',
      'Luxury overnight houseboat cruise across Kerala backwaters'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Kochi & Heritage Port Walk', desc: 'Explore colonial Dutch and Portuguese streets.' },
      { day: 2, title: 'Drive to Munnar Tea Valleys', desc: 'Ascend Western Ghats past Cheeyappara Waterfalls.' },
      { day: 3, title: 'Munnar Tea Plantation Trek', desc: 'Visit Tea Museum and Eravikulam National Park.' },
      { day: 4, title: 'Munnar to Alleppey Houseboat', desc: 'Board private luxury houseboat.' },
      { day: 5, title: 'Marari Beach Relaxation', desc: 'Unwind on quiet palm-fringed sands.' },
      { day: 6, title: 'Departure from Kochi', desc: 'Souvenir shopping and airport transfer.' }
    ]
  },
  {
    id: 'ladakh-pass-6',
    title: 'Ladakh High Pass & Monastery Explorer',
    slug: 'ladakh-high-pass-monastery-explorer',
    region: 'North',
    interest: 'Adventure',
    tripLength: '5-6 Days',
    durationBadge: '6 Days / 5 Nights',
    coverImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    shortDescription: 'Cross high Himalayan passes, discover Tibetan Buddhist monasteries in Leh, and marvel at Pangong Tso Lake.',
    fullHighlights: [
      'Pangong Tso turquoise lake overnight stay',
      'Khardung La high-altitude mountain pass',
      'Thiksey & Hemis monastery morning prayer ceremonies'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Leh & Acclimatization', desc: 'Rest and evening stroll through Leh Market.' },
      { day: 2, title: 'Leh Monastery Circuit', desc: 'Visit Thiksey, Shey, and Hemis monasteries.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', desc: 'Drive across one of the world\'s highest motorable passes.' },
      { day: 4, title: 'Nubra Valley to Pangong Tso', desc: 'Ride double-humped camels in Hunder sand dunes en route to Pangong Lake.' },
      { day: 5, title: 'Pangong Lake Sunrise to Leh', desc: 'Watch sunrise colors over Pangong waters and return to Leh.' },
      { day: 6, title: 'Fly Out from Leh', desc: 'Transfer to Kushok Bakula Rimpochee Airport.' }
    ]
  },
  {
    id: 'rajasthan-forts-10',
    title: 'Royal Rajasthan Forts & Desert Citadel Odyssey',
    slug: 'royal-rajasthan-forts-desert-citadel-odyssey',
    region: 'West',
    interest: 'Heritage',
    tripLength: '7-13 Days',
    durationBadge: '10 Days / 9 Nights',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
    shortDescription: 'Journey across Jaipur Pink City, Jodhpur Blue City, Jaisalmer Golden Sand dunes, and Udaipur Lake Palaces.',
    fullHighlights: [
      'Jodhpur Mehrangarh Fort towering citadel tour',
      'Jaisalmer Thar Desert camel safari & luxury tent night',
      'Udaipur Lake Pichola boat cruise past white marble palaces'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Jaipur', desc: 'Pink city welcome and City Palace visit.' },
      { day: 2, title: 'Jaipur Fort Ramparts', desc: 'Amber Fort and Jal Mahal.' },
      { day: 3, title: 'Jaipur to Jodhpur', desc: 'Drive to the Blue City overlooking Mehrangarh Fort.' },
      { day: 4, title: 'Jodhpur Citadel & Jaswant Thada', desc: 'Explore royal Cenotaphs and spice bazaars.' },
      { day: 5, title: 'Jodhpur to Jaisalmer Golden Fort', desc: 'Drive into Thar Desert.' },
      { day: 6, title: 'Jaisalmer Desert Dunes Safari', desc: 'Camel ride and night music under stars.' },
      { day: 7, title: 'Jaisalmer to Ranakpur Jain Temples', desc: 'Marvel at 1,444 marble pillars.' },
      { day: 8, title: 'Arrive Udaipur City of Lakes', desc: 'Evening boat ride on Lake Pichola.' },
      { day: 9, title: 'Udaipur City Palace & Saheliyon-ki-Bari', desc: 'Tour royal museum collections.' },
      { day: 10, title: 'Departure from Udaipur Airport', desc: 'Final flight departure.' }
    ]
  },
  {
    id: 'south-temple-10',
    title: 'Grand South India Dravidian Temple & Heritage Trail',
    slug: 'grand-south-india-dravidian-temple-heritage-trail',
    region: 'South',
    interest: 'Spiritual',
    tripLength: '7-13 Days',
    durationBadge: '9 Days / 8 Nights',
    coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    shortDescription: 'Discover towering Dravidian gopurams in Madurai, Tanjore UNESCO temples, French colonial Pondicherry, and Mysuru Palace.',
    fullHighlights: [
      'Madurai Meenakshi Temple 14 gopuram towers',
      'Thanjavur Brihadisvara granite temple',
      'French Quarter heritage walk in Pondicherry'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Chennai & Shore Temples Mahabalipuram', desc: 'Visit rock-cut monolithic rathas by the sea.' },
      { day: 2, title: 'Mahabalipuram to Pondicherry', desc: 'Walk yellow French Quarter avenues.' },
      { day: 3, title: 'Pondicherry to Tanjore', desc: 'Explore Chola UNESCO granite temple.' },
      { day: 4, title: 'Tanjore to Madurai', desc: 'Arrive in ancient lotus city.' },
      { day: 5, title: 'Madurai Meenakshi Night Ceremony', desc: 'Witness evening deity procession.' },
      { day: 6, title: 'Madurai to Chettinad Mansions', desc: 'Tour antique tile mansions and cuisine.' },
      { day: 7, title: 'Chettinad to Mysuru', desc: 'Travel into Karnataka.' },
      { day: 8, title: 'Mysore Palace Illumination', desc: 'See 100,000 palace lights.' },
      { day: 9, title: 'Departure from Bengaluru Airport', desc: 'Final departure.' }
    ]
  },
  {
    id: 'northeast-bridges-10',
    title: 'North East Living Root Bridges & Tea Valleys',
    slug: 'north-east-living-root-bridges-tea-valleys',
    region: 'North East',
    interest: 'Nature',
    tripLength: '7-13 Days',
    durationBadge: '8 Days / 7 Nights',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    shortDescription: 'Trek to bio-engineered double-decker root bridges in Meghalaya, safari for one-horned rhinos in Kaziranga, and tour Assam tea estates.',
    fullHighlights: [
      'Cherrapunji double-decker living root bridge trek',
      'Kaziranga National Park jeep safari for one-horned rhinos',
      'Assam Brahmaputra river island & tea garden walks'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Guwahati & Transfer to Shillong', desc: 'Drive past Umiam Lake into misty hills.' },
      { day: 2, title: 'Shillong to Cherrapunji Waterfalls', desc: 'Visit Nohkalikai and Seven Sisters falls.' },
      { day: 3, title: 'Living Root Bridges Trek', desc: 'Descend to Nongriat double-decker root bridge.' },
      { day: 4, title: 'Dawki Crystal River & Mawlynnong', desc: 'Boat ride on clear Umngot river.' },
      { day: 5, title: 'Shillong to Kaziranga National Park', desc: 'Drive into Assam floodplains.' },
      { day: 6, title: 'Kaziranga Rhino Safaris', desc: 'Dawn and afternoon wildlife drives.' },
      { day: 7, title: 'Jorhat Tea Estate Experience', desc: 'Taste single-origin Assam black tea.' },
      { day: 8, title: 'Departure from Guwahati Airport', desc: 'Return home.' }
    ]
  },
  {
    id: 'pan-india-14',
    title: 'Ultimate Pan-India Heritage, Lakes & Wildlife Odyssey',
    slug: 'ultimate-pan-india-heritage-lakes-wildlife-odyssey',
    region: 'North',
    interest: 'Heritage',
    tripLength: '14+ Days',
    durationBadge: '15 Days / 14 Nights',
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800',
    shortDescription: 'The definitive two-week expedition spanning Delhi, Taj Mahal, Rajasthan royal fortresses, Varanasi ghats, and Kerala backwaters.',
    fullHighlights: [
      'Full Golden Triangle (Delhi, Agra, Jaipur)',
      'Varanasi sacred Ganges boat ride & Aarti',
      'Overnight Kerala houseboat cruise & Kovalam beach'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Delhi', desc: 'Imperial architecture tour.' },
      { day: 2, title: 'Old & New Delhi Sights', desc: 'Red Fort & Qutub Minar.' },
      { day: 3, title: 'Delhi to Agra Taj Mahal', desc: 'Sunset view of Taj Mahal.' },
      { day: 4, title: 'Fatehpur Sikri to Jaipur', desc: 'Pink City welcome.' },
      { day: 5, title: 'Jaipur Fort Ramparts', desc: 'Amber Fort & City Palace.' },
      { day: 6, title: 'Fly Jaipur to Varanasi', desc: 'Evening Ganges Aarti.' },
      { day: 7, title: 'Varanasi Sunrise Boat & Sarnath', desc: 'Sacred riverfront walkthrough.' },
      { day: 8, title: 'Fly Varanasi to Kochi, Kerala', desc: 'Fort Kochi Kathakali dance.' },
      { day: 9, title: 'Kochi to Munnar Tea Valleys', desc: 'Western Ghats scenic drive.' },
      { day: 10, title: 'Munnar Tea Estate Trek', desc: 'Tea tasting & wildlife walk.' },
      { day: 11, title: 'Munnar to Alleppey Houseboat', desc: 'Private backwater cruise.' },
      { day: 12, title: 'Alleppey to Kovalam Beach', desc: 'Ayurvedic massage & ocean sunset.' },
      { day: 13, title: 'Kovalam Coastal Relaxation', desc: 'Beachday & seafood dining.' },
      { day: 14, title: 'Trivandrum Temple & City Tour', desc: 'Padmanabhaswamy temple view.' },
      { day: 15, title: 'Departure from Trivandrum Airport', desc: 'Final farewell.' }
    ]
  },
  {
    id: 'malabar-wellness-14',
    title: 'Grand Malabar Coast Culinary & Wellness Voyage',
    slug: 'grand-malabar-coast-culinary-wellness-voyage',
    region: 'South',
    interest: 'Wellness',
    tripLength: '14+ Days',
    durationBadge: '14 Days / 13 Nights',
    coverImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    shortDescription: 'Immerse in two full weeks of Ayurvedic healing, yoga retreats, spice estate masterclasses, and backwater sanctuary living.',
    fullHighlights: [
      '7-day customized Panchakarma Ayurvedic program',
      'Daily oceanfront Hatha yoga & meditation',
      'Spice plantation masterclass and organic cooking'
    ],
    sampleDays: [
      { day: 1, title: 'Arrive Kochi & Wellness Consultation', desc: 'Initial Ayurvedic physician assessment.' },
      { day: 2, title: 'Fort Kochi Spice Market Tour', desc: 'Herbal spice identification walk.' },
      { day: 3, title: 'Transfer to Eco Sanctuary Resort', desc: 'Check-in at beachside wellness resort.' },
      { day: 4, title: 'Ayurvedic Abhyanga & Shirodhara', desc: 'Warm herbal oil therapy sessions.' },
      { day: 5, title: 'Oceanfront Yoga & Organic Dining', desc: 'Mindfulness practices and Sattvic meals.' },
      { day: 6, title: 'Deep Detox & Herbal Steam', desc: 'Targeted wellness treatments.' },
      { day: 7, title: 'Mid-Program Review & Botanical Walk', desc: 'Physician checkup & medicinal garden tour.' },
      { day: 8, title: 'Backwater Houseboat Meditation Cruise', desc: 'Silent morning floating meditation.' },
      { day: 9, title: 'Ayurvedic Cooking Masterclass', desc: 'Learn spice science & wellness cooking.' },
      { day: 10, title: 'Sound Healing & Beach Meditation', desc: 'Restorative evening sound baths.' },
      { day: 11, title: 'Munnar Spice Estate Field Day', desc: 'Visit organic cardamom and pepper farms.' },
      { day: 12, title: 'Final Treatment Protocols', desc: 'Revitalizing oil therapies.' },
      { day: 13, title: 'Personalized Lifestyle Plan Session', desc: 'Post-retreat wellness guidance.' },
      { day: 14, title: 'Departure from Kochi Airport', desc: 'Return home rejuvenated.' }
    ]
  }
];
