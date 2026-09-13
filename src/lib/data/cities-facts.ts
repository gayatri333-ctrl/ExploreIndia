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
    facts: [
      'Widely celebrated as one of the oldest continuously inhabited cities on Earth, with recorded history spanning over three millennia.',
      'Every evening, riverfront ghats come alive with sacred Ganga Aarti rituals illuminated by hundreds of hand-lit brass oil lamps.'
    ]
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
    facts: [
      'Earned its signature pink hue in 1876 when Maharaja Ram Singh painted the entire city to welcome the Prince of Wales.',
      'Houses Jantar Mantar, an 18th-century open-air observatory with the world’s largest stone sundial.'
    ]
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
    facts: [
      'Famous for its early morning floating vegetable markets where traders buy and sell fresh produce directly from wooden shikaras on Dal Lake.',
      'Home to Asia’s largest tulip garden, set against the breathtaking backdrop of the Zabarwan mountains.'
    ]
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
    facts: [
      'Its interconnecting lake system was engineered centuries ago to create microclimates and provide water in the arid desert zone.',
      'The iconic Lake Palace appears to float seamlessly in the middle of Lake Pichola, crafted entirely from white marble.'
    ]
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
    facts: [
      'Features cantilevered Chinese fishing nets introduced by 14th-century traders that remain fully operational today along Fort Kochi.',
      'Served as a global spice hub where Arab, Chinese, Portuguese, Dutch, and British merchants left a rich multicultural legacy.'
    ]
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
    facts: [
      'Constructed in concentric lotus petal layouts around the Meenakshi Temple, whose 14 gopuram towers feature over 33,000 intricate sculptures.',
      'Known locally as the "City That Never Sleeps" thanks to its bustling late-night street food stalls and nocturnal markets.'
    ]
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
    facts: [
      'The Darjeeling Himalayan Toy Train has been ascending steep mountain passes via steam locomotives since 1881 and is a UNESCO World Heritage site.',
      'Produces the globally prized "Champagne of Teas" cultivated on high-altitude terraced slopes looking onto Kanchenjunga.'
    ]
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
    facts: [
      'Served as the capital of the Vijayanagara Empire in the 15th century when it was the world’s second-largest city after Beijing.',
      'Houses monolithic stone chariots and musical pillars that emit distinct acoustic notes when gently tapped.'
    ]
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
    facts: [
      'Nicknamed the Golden City because its honey-hued yellow sandstone fort and havelis glow like gold in the Thar Desert sun.',
      'Contains one of the world’s few inhabited living forts, housing nearly 25% of the city’s population inside its stone ramparts.'
    ]
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
    facts: [
      'The Golden Temple operates the world’s largest mega-kitchen (Langar), serving free, freshly cooked vegetarian meals to 100,000+ people daily.',
      'The exterior upper dome of Harmandir Sahib is gilded with over 750 kilograms of pure 24-karat gold leaf.'
    ]
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
    facts: [
      'Served as the official summer capital of British India, accessed by a 96 km mountain railway passing through 102 historic tunnels.',
      'Features a pedestrian-only Ridge and Mall Road with classic Victorian architecture framing views of snow-draped Himalayan crests.'
    ]
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
    facts: [
      'Preserves a vibrant French Quarter lined with pastel mustard villas, wrought-iron balconies, and French street names along the ocean front.',
      'Home to Auroville, an international township dedicated to progressive eco-architecture and universal human unity.'
    ]
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
    facts: [
      'Mysore Palace is illuminated by nearly 100,000 bulbs every Sunday evening and during the annual Dasara festival.',
      'Renowned worldwide as the traditional cradle of royal silk weaving, sandalwood carving, and incense crafting.'
    ]
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
    facts: [
      'Nestled in forests where indigenous Khasi clans train rubber fig tree roots over river gorges to form living bridges that strengthen with age.',
      'Nicknamed the "Scotland of the East" due to its undulating pine-forested plateau, misty waterfalls, and indie music culture.'
    ]
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
    facts: [
      'Recognized globally as the Yoga Capital of the World, located where the Ganges flows pristine out of Himalayan foothills.',
      'Houses the historic Beatles Ashram where the rock band stayed in 1968 to study transcendental meditation and compose classic tracks.'
    ]
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
    facts: [
      'Boasts three UNESCO World Heritage Sites within city limits: the Taj Mahal, Agra Fort, and the red sandstone complex of Fatehpur Sikri.',
      'Famous for Petha, a unique ash-gourd sweet perfected during Mughal imperial kitchen reigns over four centuries ago.'
    ]
  }
];
