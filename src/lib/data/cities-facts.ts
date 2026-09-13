export interface DestinationCity {
  id: string;
  name: string;
  state: string;
  stateSlug: string;
  citySlug: string;
  zone: 'North' | 'South' | 'East' | 'West' | 'North East' | 'Central';
  image: string;
  tagline: string;
  facts: string[];
  localCuisine: string[];
  idealDuration: string;
  howToReach?: {
    byAir?: string;
    byTrain?: string;
    byRoad?: string;
  };
}

export const DESTINATION_CITIES: DestinationCity[] = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    citySlug: 'varanasi',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
    tagline: 'Spiritual Riverfront & Eternal Ghats',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Kachori Sabzi', 'Banarasi Tamatar Chaat', 'Banarasi Paan', 'Malaiyyo', 'Banarasi Lassi', 'Thandai'],
    facts: [
      'Widely celebrated as one of the oldest continuously inhabited cities on Earth, with recorded history spanning over three millennia.',
      'Every evening, riverfront ghats come alive with sacred Ganga Aarti rituals illuminated by hundreds of hand-lit brass oil lamps.'
    ],
    howToReach: {
      byAir: 'Lal Bahadur Shastri International Airport (VNS), 26 km from city center.',
      byTrain: 'Varanasi Junction (BSB) and Banaras Station (BSBS) are major rail hubs.',
      byRoad: 'Connected via NH19 to Prayagraj (120 km), Lucknow (320 km), and Patna (250 km).'
    }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    citySlug: 'jaipur',
    zone: 'West',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    tagline: 'The Pink City of Forts & Palaces',
    idealDuration: '3 - 4 Days',
    localCuisine: ['Dal Baati Churma', 'Ker Sangri', 'Laal Maas', 'Ghevar & Malpua', 'Pyaz Kachori'],
    facts: [
      'Earned its signature pink hue in 1876 when Maharaja Ram Singh painted the entire city to welcome the Prince of Wales.',
      'Houses Jantar Mantar, an 18th-century open-air observatory with the world’s largest stone sundial.'
    ],
    howToReach: {
      byAir: 'Jaipur International Airport (JAI), 13 km from city center.',
      byTrain: 'Jaipur Junction (JP) connects directly to Delhi, Mumbai, and Kolkata.',
      byRoad: 'Connected via NH48 Golden Quadrilateral to Delhi (270 km) and Agra (240 km).'
    }
  },
  {
    id: 'srinagar',
    name: 'Srinagar',
    state: 'Jammu & Kashmir',
    stateSlug: 'jammu-kashmir',
    citySlug: 'srinagar',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    tagline: 'Paradise Lakes & Floating Gardens',
    idealDuration: '4 - 5 Days',
    localCuisine: ['Kashmiri Wazwan', 'Rogan Josh', 'Dum Aloo', 'Modur Pulao', 'Kahwa Tea'],
    facts: [
      'Famous for its early morning floating vegetable markets where traders buy and sell fresh produce directly from wooden shikaras on Dal Lake.',
      'Home to Asia’s largest tulip garden, set against the breathtaking backdrop of the Zabarwan mountains.'
    ],
    howToReach: {
      byAir: 'Sheikh ul-Alam International Airport (SXR), 15 km from Dal Lake.',
      byTrain: 'Nearest major railhead is Jammu Tawi (270 km); Udhampur-Srinagar line expanding.',
      byRoad: 'Connected via NH44 through the historic Syama Prasad Mookerjee Tunnel from Jammu.'
    }
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    citySlug: 'udaipur',
    zone: 'West',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?q=80&w=800',
    tagline: 'City of Lakes & Marble Palaces',
    idealDuration: '3 - 4 Days',
    localCuisine: ['Dal Baati Churma', 'Gatte Ki Sabzi', 'Safed Maas', 'Kachori', 'Rabri'],
    facts: [
      'Its interconnecting lake system was engineered centuries ago to create microclimates and provide water in the arid desert zone.',
      'The iconic Lake Palace appears to float seamlessly in the middle of Lake Pichola, crafted entirely from white marble.'
    ],
    howToReach: {
      byAir: 'Maharana Pratap Airport (UDR), 22 km from city center.',
      byTrain: 'Udaipur City Railway Station (UDZ) connects directly to Delhi and Ahmedabad.',
      byRoad: 'Situated on NH48 connecting Jaipur (390 km) and Ahmedabad (260 km).'
    }
  },
  {
    id: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    stateSlug: 'kerala',
    citySlug: 'kochi',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    tagline: 'Queen of the Arabian Sea & Spice Port',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Kerala Fish Curry', 'Appam with Stew', 'Karimeen Pollichathu', 'Malabar Parotta', 'Puttu and Kadala'],
    facts: [
      'Features cantilevered Chinese fishing nets introduced by 14th-century traders that remain fully operational today along Fort Kochi.',
      'Served as a global spice hub where Arab, Chinese, Portuguese, Dutch, and British merchants left a rich multicultural legacy.'
    ],
    howToReach: {
      byAir: 'Cochin International Airport (COK), 28 km from Fort Kochi, 100% solar powered.',
      byTrain: 'Ernakulam Junction (ERS) and Ernakulam Town (ERN) serve as primary stations.',
      byRoad: 'Connected via NH66 and NH544 to Trivandrum (200 km) and Coimbatore (190 km).'
    }
  },
  {
    id: 'madurai',
    name: 'Madurai',
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    citySlug: 'madurai',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    tagline: 'Ancient Temple City & Cultural Capital',
    idealDuration: '2 Days',
    localCuisine: ['Madurai Kari Dosa', 'Jigarthanda', 'Kothu Parotta', 'Idli with Meen Kuzhambu', 'Paruthi Paal'],
    facts: [
      'Constructed in concentric lotus petal layouts around the Meenakshi Temple, whose 14 gopuram towers feature over 33,000 intricate sculptures.',
      'Known locally as the "City That Never Sleeps" thanks to its bustling late-night street food stalls and nocturnal markets.'
    ],
    howToReach: {
      byAir: 'Madurai International Airport (IXM), 12 km from city center.',
      byTrain: 'Madurai Junction (MDU) connects directly to Chennai, Bengaluru, and Kanyakumari.',
      byRoad: 'Situated on NH44 connecting Chennai (460 km) and Bangalore (430 km).'
    }
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    citySlug: 'darjeeling',
    zone: 'East',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    tagline: 'Himalayan Tea Gardens & Mountain Rail',
    idealDuration: '3 - 4 Days',
    localCuisine: ['Darjeeling Tea', 'Steamed Momos', 'Thukpa', 'Shaphaley', 'Chhurpi Soup'],
    facts: [
      'The Darjeeling Himalayan Toy Train has been ascending steep mountain passes via steam locomotives since 1881 and is a UNESCO World Heritage site.',
      'Produces the globally prized "Champagne of Teas" cultivated on high-altitude terraced slopes looking onto Kanchenjunga.'
    ],
    howToReach: {
      byAir: 'Bagdogra International Airport (IXB), 68 km away.',
      byTrain: 'New Jalpaiguri Junction (NJP), 70 km away; connects with Toy Train to Darjeeling.',
      byRoad: 'Connected via Hill Cart Road (NH110) from Siliguri (65 km).'
    }
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    stateSlug: 'karnataka',
    citySlug: 'hampi',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
    tagline: 'Boulder-Strewn Vijayanagara Ruins',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Bisi Bele Bath', 'Jolada Rotti', 'South Indian Thali', 'Badane Kaayi', 'Filter Coffee'],
    facts: [
      'Served as the capital of the Vijayanagara Empire in the 15th century when it was the world’s second-largest city after Beijing.',
      'Houses monolithic stone chariots and musical pillars that emit distinct acoustic notes when gently tapped.'
    ],
    howToReach: {
      byAir: 'Jindal Vijayanagar Airport, Toranagallu (40 km) or Hubballi Airport (160 km).',
      byTrain: 'Hosapete Junction (HPT), 13 km away, connects to Bengaluru and Goa.',
      byRoad: 'Accessible via NH50 from Bengaluru (340 km) and Hyderabad (380 km).'
    }
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    citySlug: 'jaisalmer',
    zone: 'West',
    image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?q=80&w=800',
    tagline: 'Golden Fort City of Thar Desert',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Ker Sangri', 'Gatte Ki Sabzi', 'Dal Baati Churma', 'Mirchi Bada', 'Bhadang'],
    facts: [
      'Nicknamed the Golden City because its honey-hued yellow sandstone fort and havelis glow like gold in the Thar Desert sun.',
      'Contains one of the world’s few inhabited living forts, housing nearly 25% of the city’s population inside its stone ramparts.'
    ],
    howToReach: {
      byAir: 'Jaisalmer Civil Airport (JSA), 12 km from city center.',
      byTrain: 'Jaisalmer Railway Station (JSM) connects directly to Jodhpur, Jaipur, and Delhi.',
      byRoad: 'Connected via NH11 to Jodhpur (280 km) and Bikaner (330 km).'
    }
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    stateSlug: 'punjab',
    citySlug: 'amritsar',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800',
    tagline: 'Spiritual Golden Sanctum & Cuisine',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Amritsari Kulcha', 'Makki Di Rotti & Sarson Da Saag', 'Amritsari Fish', 'Lassi', 'Pinni'],
    facts: [
      'The Golden Temple operates the world’s largest mega-kitchen (Langar), serving free, freshly cooked vegetarian meals to 100,000+ people daily.',
      'The exterior upper dome of Harmandir Sahib is gilded with over 750 kilograms of pure 24-karat gold leaf.'
    ],
    howToReach: {
      byAir: 'Sri Guru Ram Dass Jee International Airport (ATQ), 11 km from Golden Temple.',
      byTrain: 'Amritsar Junction (ASR) connects directly to Delhi, Chandigarh, and Mumbai.',
      byRoad: 'Situated on Grand Trunk Road (NH44) connecting Delhi (450 km) and Chandigarh (230 km).'
    }
  },
  {
    id: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    stateSlug: 'himachal-pradesh',
    citySlug: 'shimla',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
    tagline: 'Pine Forests & Colonial Summer Capital',
    idealDuration: '3 - 4 Days',
    localCuisine: ['Chha Gosht', 'Siddu', 'Babru', 'Madra', 'Aktori'],
    facts: [
      'Served as the official summer capital of British India, accessed by a 96 km mountain railway passing through 102 historic tunnels.',
      'Features a pedestrian-only Ridge and Mall Road with classic Victorian architecture framing views of snow-draped Himalayan crests.'
    ],
    howToReach: {
      byAir: 'Jubarhati Airport (SLV), 22 km away; Chandigarh International Airport (120 km).',
      byTrain: 'Kalka-Shimla Toy Train connects UNESCO narrow-gauge line from Kalka station.',
      byRoad: 'Connected via NH5 to Chandigarh (115 km) and New Delhi (340 km).'
    }
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    state: 'Puducherry',
    stateSlug: 'puducherry',
    citySlug: 'pondicherry',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    tagline: 'French Riviera of the East',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Crepes & Croissants', 'Bouillabaisse', 'Pondicherry Fish Curry', 'Ratatouille', 'Filter Coffee'],
    facts: [
      'Preserves a vibrant French Quarter lined with pastel mustard villas, wrought-iron balconies, and French street names along the ocean front.',
      'Home to Auroville, an international township dedicated to progressive eco-architecture and universal human unity.'
    ],
    howToReach: {
      byAir: 'Puducherry Airport (PNY) or Chennai International Airport (MAA, 135 km).',
      byTrain: 'Puducherry Railway Station (PDY) connects directly to Chennai and Villupuram.',
      byRoad: 'Scenic East Coast Road (ECR) connects directly from Chennai (150 km).'
    }
  },
  {
    id: 'mysuru',
    name: 'Mysuru',
    state: 'Karnataka',
    stateSlug: 'karnataka',
    citySlug: 'mysuru',
    zone: 'South',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    tagline: 'City of Palaces & Royal Silk',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Mysore Pak', 'Mysore Masala Dosa', 'Maddur Vada', 'Chiroti', 'Mysore Bonda'],
    facts: [
      'Mysore Palace is illuminated by nearly 100,000 bulbs every Sunday evening and during the annual Dasara festival.',
      'Renowned worldwide as the traditional cradle of royal silk weaving, sandalwood carving, and incense crafting.'
    ],
    howToReach: {
      byAir: 'Mysore Airport (MYQ), 10 km away; Kempegowda International Airport Bengaluru (185 km).',
      byTrain: 'Mysuru Junction (MYS) features Vande Bharat express connection to Bengaluru and Chennai.',
      byRoad: '10-lane Bengaluru-Mysuru Expressway (140 km) allows 90-minute travel.'
    }
  },
  {
    id: 'shillong',
    name: 'Shillong',
    state: 'Meghalaya',
    stateSlug: 'meghalaya',
    citySlug: 'shillong',
    zone: 'North East',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    tagline: 'Pine Hills & Living Root Bridges',
    idealDuration: '3 - 4 Days',
    localCuisine: ['Jadoh', 'Dohkhlieh', 'Pukhlein', 'Tungrymbai', 'Bamboo Shoot Pork'],
    facts: [
      'Nestled in forests where indigenous Khasi clans train rubber fig tree roots over river gorges to form living bridges that strengthen with age.',
      'Nicknamed the "Scotland of the East" due to its undulating pine-forested plateau, misty waterfalls, and indie music culture.'
    ],
    howToReach: {
      byAir: 'Shillong Airport (SHL) at Umroi (30 km) or Guwahati International Airport (GAU, 120 km).',
      byTrain: 'Guwahati Railway Station (GHY), 100 km away, connects to major Indian metros.',
      byRoad: 'Connected via scenic NH6 mountain highway from Guwahati (100 km).'
    }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    stateSlug: 'uttarakhand',
    citySlug: 'rishikesh',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
    tagline: 'Yoga Capital & Himalayan Gateway',
    idealDuration: '2 - 3 Days',
    localCuisine: ['Aloo Ke Gutke', 'Kafuli', 'Phaanu', 'Garhwali Thali', 'Herbal Teas'],
    facts: [
      'Recognized globally as the Yoga Capital of the World, located where the Ganges flows pristine out of Himalayan foothills.',
      'Houses the historic Beatles Ashram where the rock band stayed in 1968 to study transcendental meditation and compose classic tracks.'
    ],
    howToReach: {
      byAir: 'Jolly Grant Airport Dehradun (DED), 20 km away.',
      byTrain: 'Yog Nagari Rishikesh (YNRK) station connects directly to Delhi.',
      byRoad: 'Connected via NH34 to Haridwar (25 km), Dehradun (45 km), and Delhi (240 km).'
    }
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    citySlug: 'agra',
    zone: 'North',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
    tagline: 'Mughal Splendor & Monumental Heritage',
    idealDuration: '1 - 2 Days',
    localCuisine: ['Agra Petha', 'Bedai & Jalebi', 'Mughlai Biryani', 'Kabab', 'Mughlai Paratha'],
    facts: [
      'Boasts three UNESCO World Heritage Sites within city limits: the Taj Mahal, Agra Fort, and the red sandstone complex of Fatehpur Sikri.',
      'Famous for Petha, a unique ash-gourd sweet perfected during Mughal imperial kitchen reigns over four centuries ago.'
    ],
    howToReach: {
      byAir: 'Agra Airport (AGR) or Indira Gandhi International Airport Delhi (DEL, 200 km).',
      byTrain: 'Agra Cantt (AGC) connects with Gatimaan Express (100 mins from Delhi).',
      byRoad: 'Direct access via Yamuna Expressway (210 km) from Delhi.'
    }
  }
];

