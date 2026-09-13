import { Zone, StateUT, DestinationCity, AttractionPOI, FestivalEvent } from './schema';

export const ZONES: Zone[] = [
  'North',
  'South',
  'East',
  'West',
  'Central',
  'North-East',
  'Union Territories',
];

export const STATES_DATA: StateUT[] = [
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    zone: 'North',
    capital: 'Shimla',
    heroImage: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200',
    description: 'Devbhoomi — Land of Himalayan summits, evergreen cedar valleys, colonial hill architecture, and Tibetan Buddhist sanctuaries.',
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    zone: 'East',
    capital: 'Kolkata',
    heroImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200',
    description: 'Cultural heartbeat of East India celebrating literature, UNESCO Durga Puja art carnivals, Darjeeling tea valleys, and Royal Bengal tiger mangroves.',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    zone: 'West',
    capital: 'Jaipur',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200',
    description: 'Land of Kings boasting desert Maharajah fortresses, golden Thar sand dunes, lacquer handcrafts, and vibrant camel carnivals.',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    zone: 'South',
    capital: 'Thiruvananthapuram',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200',
    description: 'God’s Own Country — Famed for tranquil backwater houseboat lagoons, Ayurvedic wellness resorts, Kathakali dance, and tea spice slopes.',
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    zone: 'Central',
    capital: 'Bhopal',
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200',
    description: 'The green heartland of India boasting highest Royal Bengal tiger density, Khajuraho UNESCO stone sculptures, and medieval fortresses.',
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    zone: 'North-East',
    capital: 'Shillong',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200',
    description: 'Abode of Clouds — Celebrated for bio-engineered living root bridges, crystal clear rivers, and Asia\'s cleanest eco-villages.',
  }
];

export const CITIES_DATA: DestinationCity[] = [
  // 1. Himachal Pradesh (North)
  {
    id: 'shimla',
    name: 'Shimla',
    stateId: 'himachal-pradesh',
    overview: 'Queen of Hills & former summer capital of British India, situated amidst pine and deodar forests.',
    bestTimeToVisit: 'March to June & December to February (Snowfall)',
    quickFacts: [
      'Connected by the UNESCO Kalka-Shimla Toy Train featuring 102 historic tunnels built in 1903.',
      'Home to the Viceregal Lodge where historic pre-independence summits were convened.'
    ],
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
    tagline: 'Colonial Hill Capital & Pine Valleys'
  },
  {
    id: 'manali',
    name: 'Manali',
    stateId: 'himachal-pradesh',
    overview: 'Gateway to Solang Valley, Rohtang Pass, and high-altitude Himalayan adventure sports.',
    bestTimeToVisit: 'October to June',
    quickFacts: [
      'Starting point of the legendary Manali-Leh mountain highway.',
      'Home to the 500-year-old wooden Hadimba Temple built in 1553 AD.'
    ],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    tagline: 'Solang Adventure & High Mountain Passes'
  },

  // 2. West Bengal (East)
  {
    id: 'kolkata',
    name: 'Kolkata',
    stateId: 'west-bengal',
    overview: 'Cultural Capital of India, world-famous for grand street art installations during UNESCO Durga Puja.',
    bestTimeToVisit: 'October to March',
    quickFacts: [
      'Former capital of British India until 1911, famous for yellow cabs and cantilever Howrah Bridge.',
      'Host to UNESCO Intangible Cultural Heritage Durga Puja carnival.'
    ],
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    tagline: 'City of Joy & UNESCO Heritage Art'
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    stateId: 'west-bengal',
    overview: 'Queen of the Hills, offering breathtaking views of Mt. Kanchenjunga and world-renowned tea estates.',
    bestTimeToVisit: 'March to May & October to December',
    quickFacts: [
      'Home to the UNESCO Darjeeling Himalayan Railway (Toy Train) built in 1881.',
      'Produces single-origin Champagne of Teas across 80+ hill estates.'
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    tagline: 'Kanchenjunga Panorama & Tea Gardens'
  },

  // 3. Rajasthan (West)
  {
    id: 'jaipur',
    name: 'Jaipur',
    stateId: 'rajasthan',
    overview: 'The Pink City, part of the Golden Triangle featuring UNESCO hill forts and royal palaces.',
    bestTimeToVisit: 'October to March',
    quickFacts: [
      'India\'s first planned city founded in 1727, painted pink in 1876 to welcome Prince Albert.',
      'Hawa Mahal features 953 honeycombed sandstone windows for royal breezes.'
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    tagline: 'The Pink City & Amber Fort Ramparts'
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    stateId: 'rajasthan',
    overview: 'The Golden Citadel set in the Thar Desert, boasting living fort ramparts and sand dune safaris.',
    bestTimeToVisit: 'October to March',
    quickFacts: [
      'Home to Sonar Qila, one of the world\'s few living fortresses housing 4,000 residents inside.',
      'Carved from yellow sandstone that glows gold under desert sunsets.'
    ],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
    tagline: 'Golden Fort & Thar Sand Dunes'
  },

  // 4. Kerala (South)
  {
    id: 'alleppey',
    name: 'Alleppey',
    stateId: 'kerala',
    overview: 'Venice of the East, famed for private luxury houseboat cruises across Vembanad backwater lagoons.',
    bestTimeToVisit: 'September to March',
    quickFacts: [
      'Features a network of 900 km of interconnected brackish backwater canals.',
      'Host to the annual world-famous Nehru Trophy Snake Boat Race.'
    ],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    tagline: 'Luxury Houseboats & Lagoon Waterways'
  },
  {
    id: 'munnar',
    name: 'Munnar',
    stateId: 'kerala',
    overview: 'High-altitude Western Ghats hill station covered in manicured green tea plantations and cloud forests.',
    bestTimeToVisit: 'October to May',
    quickFacts: [
      'Located at 1,600m elevation at the confluence of three mountain streams.',
      'Home to rare Neelakurinji wild blue flowers blooming once every 12 years.'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    tagline: 'Tea Estate Trails & Cloud Valleys'
  },

  // 5. Madhya Pradesh (Central)
  {
    id: 'khajuraho',
    name: 'Khajuraho',
    stateId: 'madhya-pradesh',
    overview: 'UNESCO World Heritage complex of medieval sandstone temples sculpted with intricate classical iconography.',
    bestTimeToVisit: 'October to March',
    quickFacts: [
      'Built by the Chandela dynasty between 950 and 1050 AD in nagara architectural style.',
      'Only 25 of the original 85 medieval sandstone temples survive today.'
    ],
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800',
    tagline: 'UNESCO Erotic & Classical Temples'
  },

  // 6. Meghalaya (North-East)
  {
    id: 'cherrapunji',
    name: 'Cherrapunji & Mawlynnong',
    stateId: 'meghalaya',
    overview: 'High rain valley featuring bio-engineered living root bridges and Asia\'s cleanest eco-village.',
    bestTimeToVisit: 'September to May',
    quickFacts: [
      'Ficus elastica tree roots are trained over 150 years to form indestructible living river bridges.',
      'Mawlynnong eco-village was awarded Asia\'s Cleanest Village.'
    ],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    tagline: 'Living Root Bridges & Crystal Rivers'
  }
];

export const ATTRACTIONS_DATA: AttractionPOI[] = [
  // Shimla Attractions
  {
    id: 'viceregal-lodge',
    cityId: 'shimla',
    name: 'Viceregal Lodge (Rashtrapati Niwas)',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800'],
    didYouKnowFacts: [
      'Built in 1888 with an independent indoor steam power generator and fire-fighting system.',
      'The Shimla Conference of 1945 was held inside its teak-paneled council chamber.'
    ],
    historicalSignificance: 'Former summer residence of the British Viceroy of India, designed in Jacobethan style by Henry Irwin.',
    mapCoords: { lat: 31.1048, lng: 77.1422 }
  },
  {
    id: 'ridge-mall-road',
    cityId: 'shimla',
    name: 'The Ridge & Christ Church',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800'],
    didYouKnowFacts: [
      'Christ Church is North India\'s second oldest church built in 1857 with stained glass windows.',
      'The Ridge sits directly over giant underground water reservoirs feeding the entire town.'
    ],
    historicalSignificance: 'Open pedestrian promenade heart of Shimla hosting summer festivals and colonial parades.',
    mapCoords: { lat: 31.1044, lng: 77.1744 }
  },
  {
    id: 'jakhoo-temple',
    cityId: 'shimla',
    name: 'Jakhoo Hill & Hanuman Statue',
    category: 'Spiritual',
    images: ['https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800'],
    didYouKnowFacts: [
      'Features a towering 108-ft orange statue of Lord Hanuman visible across Shimla hills.',
      'Legend states Lord Hanuman rested on Jakhoo peak while searching for Sanjeevani herb.'
    ],
    historicalSignificance: 'Highest hill peak in Shimla (2,455m) offering 360-degree Himalayan snow range panoramas.',
    mapCoords: { lat: 31.1009, lng: 77.1864 }
  },

  // Kolkata Attractions
  {
    id: 'victoria-memorial',
    cityId: 'kolkata',
    name: 'Victoria Memorial Hall',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800'],
    didYouKnowFacts: [
      'Carved from white Makrana marble sourced from the same quarries as the Taj Mahal.',
      'Crown weather vane features a 16-ft bronze Angel of Victory rotating with wind gusts.'
    ],
    historicalSignificance: 'Grand Indo-Saracenic memorial museum built between 1906 and 1921 commemorating Queen Victoria.',
    mapCoords: { lat: 22.5448, lng: 88.3426 }
  },
  {
    id: 'howrah-bridge',
    cityId: 'kolkata',
    name: 'Howrah Bridge (Rabindra Setu)',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800'],
    didYouKnowFacts: [
      'Constructed using 26,500 tons of high-tensile steel without a single nut or bolt (entirely riveted).',
      'Carries over 100,000 vehicles and 150,000 pedestrians across the Hooghly River daily.'
    ],
    historicalSignificance: 'World\'s sixth-longest balanced cantilever bridge opened in 1943 during World War II.',
    mapCoords: { lat: 22.5851, lng: 88.3468 }
  },
  {
    id: 'dakshineswar-temple',
    cityId: 'kolkata',
    name: 'Dakshineswar Kali Temple',
    category: 'Spiritual',
    images: ['https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800'],
    didYouKnowFacts: [
      'Built in 1855 by philanthropist Rani Rashmoni following a divine dream vision.',
      'Place of spiritual sadhana for saint Ramakrishna Paramahamsa and Swami Vivekananda.'
    ],
    historicalSignificance: 'Navaratna 9-spired temple on Hooghly riverbank dedicated to Goddess Bhavatarini Kali.',
    mapCoords: { lat: 22.6552, lng: 88.3575 }
  },

  // Jaipur Attractions
  {
    id: 'amber-fort',
    cityId: 'jaipur',
    name: 'Amber Fort & Sheesh Mahal',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800'],
    didYouKnowFacts: [
      'Sheesh Mahal (Mirror Palace) can be illuminated with a single candle reflected in thousands of Belgian glass concave mirrors.',
      'Connected to hilltop Jaigarh Fort via subterranean secret escape passages.'
    ],
    historicalSignificance: 'UNESCO World Heritage Rajput hilltop citadel founded in 1592 by Raja Man Singh I.',
    mapCoords: { lat: 26.9855, lng: 75.8513 }
  },
  {
    id: 'hawa-mahal',
    cityId: 'jaipur',
    name: 'Hawa Mahal (Palace of Winds)',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800'],
    didYouKnowFacts: [
      'Built without a solid foundation, standing 5 stories tall with a slight backward curve.',
      'Designed like the crown of Lord Krishna with 953 jharokha lattice windows.'
    ],
    historicalSignificance: 'Built in 1799 by Maharaja Sawai Pratap Singh allowing royal women to observe street processions unseen.',
    mapCoords: { lat: 26.9239, lng: 75.8267 }
  },
  {
    id: 'jantar-mantar-jaipur',
    cityId: 'jaipur',
    name: 'Jantar Mantar Astronomical Observatory',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800'],
    didYouKnowFacts: [
      'Features Samrat Yantra, the world\'s largest stone sundial measuring time accurate to 2 seconds.',
      'Contains 19 monumental stone architectural instruments built in 1734.'
    ],
    historicalSignificance: 'UNESCO World Heritage stone astronomical observatory founded by astronomer king Sawai Jai Singh II.',
    mapCoords: { lat: 26.9248, lng: 75.8246 }
  },

  // Jaisalmer Attractions
  {
    id: 'sonar-qila',
    cityId: 'jaisalmer',
    name: 'Jaisalmer Fort (Sonar Qila)',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800'],
    didYouKnowFacts: [
      'One of the world\'s few living fortresses housing 1/4th of Jaisalmer city\'s population inside its 99 bastions.',
      'Built entirely without mortar using dry yellow sandstone interlocking blocks.'
    ],
    historicalSignificance: 'UNESCO World Heritage desert fortress founded in 1156 AD by Bhati Rajput ruler Rawal Jaisal.',
    mapCoords: { lat: 26.9124, lng: 70.9127 }
  },
  {
    id: 'sam-sand-dunes',
    cityId: 'jaisalmer',
    name: 'Sam Sand Dunes & Desert Safari',
    category: 'Adventure',
    images: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800'],
    didYouKnowFacts: [
      'Features 30-meter-high wind-swept sweeping golden sand dunes in the heart of Thar Desert.',
      'Hosts sunset camel safaris, quad biking, and nocturnal folk Kalbelia dance performances.'
    ],
    historicalSignificance: 'Iconic desert dunes offering authentic Rajasthani desert camping experience.',
    mapCoords: { lat: 26.8315, lng: 70.5048 }
  },
  {
    id: 'patwon-ki-haveli',
    cityId: 'jaisalmer',
    name: 'Patwon Ki Haveli',
    category: 'Heritage',
    images: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800'],
    didYouKnowFacts: [
      'Cluster of 5 grand mansions built over 50 years by a wealthy brocade merchant for his 5 sons.',
      'Features 60 intricate carved sandstone balconies (jharokhas).'
    ],
    historicalSignificance: 'First and largest merchant haveli constructed in Jaisalmer in 1805 AD.',
    mapCoords: { lat: 26.9176, lng: 70.9161 }
  },

  // Alleppey Attractions
  {
    id: 'alleppey-houseboat',
    cityId: 'alleppey',
    name: 'Vembanad Backwater Kettuvallam Cruise',
    category: 'Nature',
    images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800'],
    didYouKnowFacts: [
      'Traditional Kettuvallam boats were stitched with coconut fiber ropes without a single iron nail.',
      'Converted into luxury eco-houseboats with solar power and air-conditioned bedrooms.'
    ],
    historicalSignificance: 'Ancient spice transport cargo barges transformed into world-renowned backwater cruises.',
    mapCoords: { lat: 9.4981, lng: 76.3388 }
  },
  {
    id: 'marari-beach',
    cityId: 'alleppey',
    name: 'Marari Palm Beach',
    category: 'Nature',
    images: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800'],
    didYouKnowFacts: [
      'Named after Mararikulam fishing village, recognized as one of National Geographic\'s top eco-beaches.',
      'Flanked by coconut groves and traditional wooden fishing canoes.'
    ],
    historicalSignificance: 'Pristine quiet Malabar coast beach preserving traditional coastal fishing culture.',
    mapCoords: { lat: 9.5975, lng: 76.2974 }
  },

  // Cherrapunji & Meghalaya Attractions
  {
    id: 'double-decker-root-bridge',
    cityId: 'cherrapunji',
    name: 'Nongriat Double Decker Living Root Bridge',
    category: 'Rural',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800'],
    didYouKnowFacts: [
      'Bio-engineered by Khasi elders over 150 years by guiding living rubber tree roots across river boulders.',
      'Grows stronger over time as roots entwine and can support 50 people simultaneously.'
    ],
    historicalSignificance: 'UNESCO World Heritage tentative list bio-architectural wonder hidden in deep jungle valleys.',
    mapCoords: { lat: 25.2285, lng: 91.6738 }
  },
  {
    id: 'mawlynnong-village',
    cityId: 'cherrapunji',
    name: 'Mawlynnong Cleanest Eco-Village',
    category: 'Rural',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800'],
    didYouKnowFacts: [
      '100% literacy rate village where every resident cleans public gardens and collects trash in bamboo cones.',
      'Features a 85-ft high Sky Walk bamboo canopy tower overlooking Bangladesh plains.'
    ],
    historicalSignificance: 'Awarded Asia\'s Cleanest Village by Discover India magazine in 2003.',
    mapCoords: { lat: 25.1979, lng: 91.9164 }
  },
  {
    id: 'dawki-umngot-river',
    cityId: 'cherrapunji',
    name: 'Dawki Umngot Crystal River',
    category: 'Nature',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800'],
    didYouKnowFacts: [
      'River water is so crystal clear during winter that wooden boats appear floating in mid-air.',
      'Location of the annual Dawki River Regatta near the Indo-Bangladesh border bridge.'
    ],
    historicalSignificance: 'Pristine mountain river celebrated for transparent emerald waters and wooden canoe rides.',
    mapCoords: { lat: 25.1873, lng: 92.0165 }
  }
];

export const FESTIVALS_DATA: FestivalEvent[] = [
  {
    id: 'durga-puja-kolkata',
    name: 'Kolkata Durga Puja Festival',
    cityId: 'kolkata',
    dates: 'October 17 - October 21, 2026',
    category: 'UNESCO Cultural Heritage',
    description: 'A world-renowned street art installation and grand spiritual celebration transforming Kolkata into an open-air gallery.',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800'
  },
  {
    id: 'pushkar-camel-fair',
    name: 'Pushkar Camel & Cultural Mela',
    cityId: 'jaipur',
    dates: 'November 20 - November 28, 2026',
    category: 'Traditional Festival',
    description: 'One of the world\'s largest camel fairs, featuring livestock trading, folk music, hot air ballooning, and holy dip in Pushkar Lake.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800'
  },
  {
    id: 'ganga-aarti-varanasi',
    name: 'Varanasi Dev Deepavali & Aarti',
    cityId: 'kolkata',
    dates: 'November 15, 2026',
    category: 'Spiritual Festival',
    description: '100,000 earthen oil lamps lit across all 84 riverfront ghats of Varanasi under the full moon night.',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800'
  }
];
