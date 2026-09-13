/**
 * Incredible India Information Architecture & Data Model
 * 
 * Provides mock data for:
 * 1. 7 Geographic Zones: North, South, East, West, Central, North-East, Union Territories
 * 2. 7 Experience Categories: Heritage, Spiritual, Wildlife, Adventure, Gastronomy, Wellness, Rural
 * 3. Comprehensive State & City Destination mappings for App Router paths `/destinations/[zone]/[state]/[city]`
 * 4. Plan Your Trip essentials (Weather, Currency, Help, Itineraries)
 */

export interface CityData {
  citySlug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  zoneSlug: string;
  zoneName: string;
  tagline: string;
  image: string;
  facts: string[];
  highlights: string[];
  bestSeason: string;
  experiences: string[];
}

export interface StateData {
  stateSlug: string;
  stateName: string;
  zoneSlug: string;
  zoneName: string;
  capital: string;
  isUT?: boolean;
  heroImage: string;
  description: string;
  cities: CityData[];
}

export interface ZoneData {
  zoneSlug: string;
  zoneName: string;
  tagline: string;
  heroImage: string;
  description: string;
  states: StateData[];
}

export interface ExperienceCategoryData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  description: string;
  subThemes: string[];
  keyLandmarks: Array<{ name: string; location: string; image: string }>;
  featuredCities: Array<{
    cityName: string;
    stateName: string;
    zoneSlug: string;
    stateSlug: string;
    citySlug: string;
    image: string;
    snippet: string;
  }>;
  suggestedItineraries: Array<{
    title: string;
    duration: string;
    slug: string;
  }>;
}

// ==========================================
// 1. ZONES & DESTINATIONS MAPPING
// ==========================================

export const ZONES_DATA: ZoneData[] = [
  {
    zoneSlug: 'north',
    zoneName: 'North India',
    tagline: 'Himalayan Peaks, Colonial Hill Stations & Sacred Riverbanks',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200',
    description: 'Home to snow-capped mountain ranges, pine-covered valleys, ancient pilgrim paths, and majestic colonial summer capitals.',
    states: [
      {
        stateSlug: 'himachal-pradesh',
        stateName: 'Himachal Pradesh',
        zoneSlug: 'north',
        zoneName: 'North India',
        capital: 'Shimla',
        heroImage: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
        description: 'Land of Gods featuring towering Himalayan crests, Buddhist monasteries, and evergreen deodar forests.',
        cities: [
          {
            citySlug: 'shimla',
            cityName: 'Shimla',
            stateSlug: 'himachal-pradesh',
            stateName: 'Himachal Pradesh',
            zoneSlug: 'north',
            zoneName: 'North India',
            tagline: 'Queen of Hills & Former British Summer Capital',
            image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800',
            facts: [
              'Connected by the UNESCO Kalka-Shimla Toy Train featuring 102 historic tunnels built in 1903.',
              'Home to the iconic Viceregal Lodge where major pre-independence historic summits took place.'
            ],
            highlights: ['Mall Road & Ridge Walk', 'Viceregal Lodge', 'Jakhoo Temple Hanuman Statue', 'Kufri Snow Viewpoint'],
            bestSeason: 'March to June & December to February (Snowfall)',
            experiences: ['Heritage', 'Nature', 'Adventure']
          },
          {
            citySlug: 'manali',
            cityName: 'Manali',
            stateSlug: 'himachal-pradesh',
            stateName: 'Himachal Pradesh',
            zoneSlug: 'north',
            zoneName: 'North India',
            tagline: 'Gateway to Solang Valley & High Altitude Himalayan Passes',
            image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
            facts: [
              'Starting point of the legendary Manali-Leh Highway across Rohtang Pass.',
              'Home to the 500-year-old wooden Hadimba Devi Temple set in dense cedar forests.'
            ],
            highlights: ['Solang Valley Sports', 'Rohtang Pass Tunnel', 'Hadimba Temple', 'Old Manali Cafes'],
            bestSeason: 'October to June',
            experiences: ['Adventure', 'Nature', 'Wellness']
          }
        ]
      },
      {
        stateSlug: 'uttarakhand',
        stateName: 'Uttarakhand',
        zoneSlug: 'north',
        zoneName: 'North India',
        capital: 'Dehradun',
        heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
        description: 'Devbhoomi — Land of Sacred Rivers, Yoga Shalas, and High Mountain Sanctuaries.',
        cities: [
          {
            citySlug: 'rishikesh',
            cityName: 'Rishikesh',
            stateSlug: 'uttarakhand',
            stateName: 'Uttarakhand',
            zoneSlug: 'north',
            zoneName: 'North India',
            tagline: 'Yoga Capital of the World & White Water Gorges',
            image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
            facts: [
              'Global birthplace of modern yoga retreats where The Beatles stayed in 1968.',
              'Renowned for Grade III & IV white-water rafting expeditions down Ganges mountain rapids.'
            ],
            highlights: ['Triveni Ghat Evening Aarti', 'Laxman Jhula Bridge', 'Beatles Maharishi Ashram', 'Ganges River Rafting'],
            bestSeason: 'September to May',
            experiences: ['Spiritual', 'Adventure', 'Wellness']
          }
        ]
      }
    ]
  },
  {
    zoneSlug: 'south',
    zoneName: 'South India',
    tagline: 'Dravidian Gopurams, Palm Lagoons & Spice Hill Plantations',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200',
    description: 'Immerse in ancient temple architecture, tranquil backwater houseboats, Ayurvedic healing retreats, and aromatic coffee slopes.',
    states: [
      {
        stateSlug: 'kerala',
        stateName: 'Kerala',
        zoneSlug: 'south',
        zoneName: 'South India',
        capital: 'Thiruvananthapuram',
        heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
        description: 'God’s Own Country — Famed for tranquil backwaters, Kathakali dance, and Ayurvedic wellness.',
        cities: [
          {
            citySlug: 'alleppey',
            cityName: 'Alleppey',
            stateSlug: 'kerala',
            stateName: 'Kerala',
            zoneSlug: 'south',
            zoneName: 'South India',
            tagline: 'Venice of the East & Luxury Backwater Houseboat Haven',
            image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
            facts: [
              'Famous for its network of 900 km of interconnected brackish backwater canals and Vembanad Lake.',
              'Host of the world-famous annual Nehru Trophy Snake Boat Race.'
            ],
            highlights: ['Kettuvallam Houseboat Cruise', 'Vembanad Lake Sunset', 'Marari Beach Walk', 'Punnamada Kayaking'],
            bestSeason: 'September to March',
            experiences: ['Nature', 'Wellness', 'Rural']
          },
          {
            citySlug: 'munnar',
            cityName: 'Munnar',
            stateSlug: 'kerala',
            stateName: 'Kerala',
            zoneSlug: 'south',
            zoneName: 'South India',
            tagline: 'Rolling Tea Valleys & Endangered Nilgiri Tahr Sanctuary',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
            facts: [
              'Situated at 1,600 meters elevation at the confluence of three mountain streams.',
              'Home to Neelakurinji flowers which bloom once every 12 years covering hills in purple.'
            ],
            highlights: ['Tata Tea Museum', 'Eravikulam National Park', 'Mattupetty Dam', 'Anamudi Peak Trek'],
            bestSeason: 'October to May',
            experiences: ['Nature', 'Wildlife', 'Adventure']
          }
        ]
      },
      {
        stateSlug: 'tamil-nadu',
        stateName: 'Tamil Nadu',
        zoneSlug: 'south',
        zoneName: 'South India',
        capital: 'Chennai',
        heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
        description: 'Cradle of Dravidian temple architecture, classical Bharatanatyam, and coastal UNESCO monuments.',
        cities: [
          {
            citySlug: 'madurai',
            cityName: 'Madurai',
            stateSlug: 'tamil-nadu',
            stateName: 'Tamil Nadu',
            zoneSlug: 'south',
            zoneName: 'South India',
            tagline: 'City of 14 Towering Gopurams & Meenakshi Amman Temple',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
            facts: [
              'One of the oldest continuously inhabited cities in the world dating back over 2,500 years.',
              'Meenakshi Amman Temple features 14 monumental gopuram gateways with 33,000 sculpted figures.'
            ],
            highlights: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Palace', 'Gandhi Memorial Museum', 'Night Deity Procession'],
            bestSeason: 'October to March',
            experiences: ['Spiritual', 'Heritage', 'Gastronomy']
          }
        ]
      }
    ]
  },
  {
    zoneSlug: 'east',
    zoneName: 'East India',
    tagline: 'Cultural Capitals, Sacred Stupas & Mangrove Tiger Swamps',
    heroImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=1200',
    description: 'Discover colonial intellectual heritage, coastal sun temples, Buddhist enlightenment trails, and Bengal tiger reserves.',
    states: [
      {
        stateSlug: 'west-bengal',
        stateName: 'West Bengal',
        zoneSlug: 'east',
        zoneName: 'East India',
        capital: 'Kolkata',
        heroImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
        description: 'Cultural heartbeat of East India celebrating literature, art installations, tea gardens, and river delta forests.',
        cities: [
          {
            citySlug: 'darjeeling',
            cityName: 'Darjeeling',
            stateSlug: 'west-bengal',
            stateName: 'West Bengal',
            zoneSlug: 'east',
            zoneName: 'East India',
            tagline: 'Queen of the Hills & Kanchenjunga Sunrise Panorama',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
            facts: [
              'Home to the UNESCO Darjeeling Himalayan Railway (Toy Train) built in 1881.',
              'Famous worldwide for producing single-origin Champagne of Teas.'
            ],
            highlights: ['Tiger Hill Kanchenjunga Sunrise', 'Batasia Loop Toy Train', 'Happy Valley Tea Estate', 'Ghoom Monastery'],
            bestSeason: 'March to May & October to December',
            experiences: ['Nature', 'Heritage', 'Gastronomy']
          },
          {
            citySlug: 'kolkata',
            cityName: 'Kolkata',
            stateSlug: 'west-bengal',
            stateName: 'West Bengal',
            zoneSlug: 'east',
            zoneName: 'East India',
            tagline: 'City of Joy & UNESCO Durga Puja Street Art Carnival',
            image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
            facts: [
              'Former capital of British India until 1911, famed for yellow taxis and grand colonial architecture.',
              'Host to UNESCO Intangible Cultural Heritage Durga Puja transforming the city into an open-air gallery.'
            ],
            highlights: ['Victoria Memorial Hall', 'Howrah Bridge Walk', 'Dakshineswar Kali Temple', 'Park Street Food Walk'],
            bestSeason: 'October to March',
            experiences: ['Heritage', 'Arts', 'Gastronomy']
          }
        ]
      }
    ]
  },
  {
    zoneSlug: 'west',
    zoneName: 'West India',
    tagline: 'Thar Salt Deserts, Royal Fortresses & Sunlit Coastal Beaches',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200',
    description: 'Experience royal Maharajah fortresses, white salt desert full moon carnivals, Portuguese beach quarters, and cave temples.',
    states: [
      {
        stateSlug: 'rajasthan',
        stateName: 'Rajasthan',
        zoneSlug: 'west',
        zoneName: 'West India',
        capital: 'Jaipur',
        heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
        description: 'Land of Kings featuring desert forts, lacquered crafts, folk music, and grand camel carnivals.',
        cities: [
          {
            citySlug: 'jaipur',
            cityName: 'Jaipur',
            stateSlug: 'rajasthan',
            stateName: 'Rajasthan',
            zoneSlug: 'west',
            zoneName: 'West India',
            tagline: 'The Pink City, Amber Fort Ramparts & Hawa Mahal',
            image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
            facts: [
              'India\'s first planned city founded in 1727, painted pink in 1876 to welcome the Prince of Wales.',
              'Hawa Mahal (Palace of Winds) has 953 intricate honeycombed sandstone casement windows.'
            ],
            highlights: ['Amber Fort Elephant Ramparts', 'Hawa Mahal Windows', 'City Palace Museum', 'Jantar Mantar Observatory'],
            bestSeason: 'October to March',
            experiences: ['Heritage', 'Arts', 'Gastronomy']
          },
          {
            citySlug: 'jaisalmer',
            cityName: 'Jaisalmer',
            stateSlug: 'rajasthan',
            stateName: 'Rajasthan',
            zoneSlug: 'west',
            zoneName: 'West India',
            tagline: 'The Golden Citadel & Thar Desert Sand Dunes',
            image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
            facts: [
              'Home to Sonar Qila, one of the world\'s few living fortresses housing 4,000 residents inside.',
              'Carved from yellow sandstone that glows like molten gold under sunset rays.'
            ],
            highlights: ['Sonar Fort Citadel Walk', 'Sam Sand Dunes Camel Safari', 'Patwon Ki Haveli', 'Gadisar Lake'],
            bestSeason: 'October to March',
            experiences: ['Heritage', 'Adventure', 'Rural']
          }
        ]
      },
      {
        stateSlug: 'gujarat',
        stateName: 'Gujarat',
        zoneSlug: 'west',
        zoneName: 'West India',
        capital: 'Gandhinagar',
        heroImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
        description: 'Land of White Salt Deserts, Asiatic Lions, Handloom Ikat Weaves, and Heritage Cities.',
        cities: [
          {
            citySlug: 'rann-of-kutch',
            cityName: 'Rann of Kutch',
            stateSlug: 'gujarat',
            stateName: 'Gujarat',
            zoneSlug: 'west',
            zoneName: 'West India',
            tagline: 'Endless White Salt Desert & Moonlit Rann Utsav Carnival',
            image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
            facts: [
              'One of the largest salt deserts in the world spanning over 7,500 square kilometers.',
              'Transforms into a white moonlit salt plain hosting the 4-month-long Rann Utsav cultural festival.'
            ],
            highlights: ['White Rann Sunset View', 'Hodka Craft Village Walk', 'Kala Dungar Black Hill', 'Tent City Cultural Evenings'],
            bestSeason: 'November to February (Rann Utsav)',
            experiences: ['Nature', 'Arts', 'Rural']
          }
        ]
      }
    ]
  },
  {
    zoneSlug: 'central',
    zoneName: 'Central India',
    tagline: 'Heart of India, Sculpted Temples & Tiger Reserves',
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200',
    description: 'The green heartland of India featuring dense teak forests, high tiger density reserves, and ancient UNESCO stone sculptures.',
    states: [
      {
        stateSlug: 'madhya-pradesh',
        stateName: 'Madhya Pradesh',
        zoneSlug: 'central',
        zoneName: 'Central India',
        capital: 'Bhopal',
        heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800',
        description: 'Tiger State of India boasting Kanha, Bandhavgarh, and Khajuraho heritage.',
        cities: [
          {
            citySlug: 'khajuraho',
            cityName: 'Khajuraho',
            stateSlug: 'madhya-pradesh',
            stateName: 'Madhya Pradesh',
            zoneSlug: 'central',
            zoneName: 'Central India',
            tagline: 'UNESCO World Heritage Erotic & Classical Sculpted Temples',
            image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800',
            facts: [
              'Built by the Chandela dynasty between 950 and 1050 AD featuring intricate nagara architecture.',
              'Only 25 of the original 85 medieval sandstone temples survive today.'
            ],
            highlights: ['Kandariya Mahadeva Temple', 'Western Group Monuments', 'Light & Sound Show', 'Khajuraho Dance Festival'],
            bestSeason: 'October to March',
            experiences: ['Heritage', 'Spiritual', 'Arts']
          }
        ]
      },
      {
        stateSlug: 'uttar-pradesh',
        stateName: 'Uttar Pradesh',
        zoneSlug: 'central',
        zoneName: 'Central India',
        capital: 'Lucknow',
        heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
        description: 'Cradle of Indian spiritual heritage spanning the sacred Ganges, Taj Mahal, and Nawabi food capital.',
        cities: [
          {
            citySlug: 'varanasi',
            cityName: 'Varanasi',
            stateSlug: 'uttar-pradesh',
            stateName: 'Uttar Pradesh',
            zoneSlug: 'central',
            zoneName: 'Central India',
            tagline: 'Spiritual Capital of India & Sacred Ganges Ghats',
            image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
            facts: [
              'Considered the spiritual heart of Hinduism, standing on the banks of River Ganges for over 3,000 years.',
              'Dashashwamedh Ghat hosts the world-famous evening Ganga Aarti brass lamp ceremony daily.'
            ],
            highlights: ['Dashashwamedh Ghat Evening Aarti', 'Dawn Ganges Boat Ride', 'Kashi Vishwanath Temple', 'Sarnath Dhamek Stupa'],
            bestSeason: 'October to March',
            experiences: ['Spiritual', 'Heritage', 'Gastronomy']
          }
        ]
      }
    ]
  },
  {
    zoneSlug: 'north-east',
    zoneName: 'North-East India',
    tagline: 'Living Root Bridges, Monasteries & Hornbill Festivals',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200',
    description: 'Unexplored wilderness of 8 Sister States boasting living root bridges, tea valleys, and rhino safaris.',
    states: [
      {
        stateSlug: 'meghalaya',
        stateName: 'Meghalaya',
        zoneSlug: 'north-east',
        zoneName: 'North-East India',
        capital: 'Shillong',
        heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800',
        description: 'Abode of Clouds — Famed for bio-engineered living root bridges and crystal rivers.',
        cities: [
          {
            citySlug: 'cherrapunji',
            cityName: 'Cherrapunji & Mawlynnong',
            stateSlug: 'meghalaya',
            stateName: 'Meghalaya',
            zoneSlug: 'north-east',
            zoneName: 'North-East India',
            tagline: 'Asia’s Cleanest Village & Bio-Engineered Root Bridges',
            image: 'https://images.unsplash.com/photo-1506461883276-594a12b11db3?q=80&w=800',
            facts: [
              'Ficus elastica tree roots are trained across rivers over 150 years to form indestructible living bridges.',
              'Mawlynnong eco-village was awarded Asia\'s Cleanest Village by Discover India.'
            ],
            highlights: ['Nongriat Double Decker Root Bridge', 'Nohkalikai Waterfall View', 'Mawlynnong Eco-Village', 'Dawki Umngot River Boat'],
            bestSeason: 'September to May',
            experiences: ['Nature', 'Rural', 'Adventure']
          }
        ]
      },
      {
        stateSlug: 'assam',
        stateName: 'Assam',
        zoneSlug: 'north-east',
        zoneName: 'North-East India',
        capital: 'Dispur',
        heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
        description: 'Land of the Mighty Brahmaputra, One-Horned Rhinos, and Shimmering Muga Silk.',
        cities: [
          {
            citySlug: 'kaziranga',
            cityName: 'Kaziranga National Park',
            stateSlug: 'assam',
            stateName: 'Assam',
            zoneSlug: 'north-east',
            zoneName: 'North-East India',
            tagline: 'UNESCO Sanctuary Sanctuary of Great One-Horned Rhinos',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
            facts: [
              'Hosts two-thirds of the entire world population of Great One-Horned Rhinoceroses.',
              'Boasts the highest density of Royal Bengal Tigers among protected reserves globally.'
            ],
            highlights: ['Central Zone Jeep Safari', 'Elephant Ride Safari', 'Orchid Park Walk', 'Assam Tea Estate Tour'],
            bestSeason: 'November to April',
            experiences: ['Wildlife', 'Nature', 'Adventure']
          }
        ]
      }
    ]
  },
  {
    zoneSlug: 'union-territories',
    zoneName: 'Union Territories',
    tagline: 'Himalayan Crown, Coral Atolls & French Promenade Quarters',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    description: 'Explore India\'s 8 Union Territories spanning high-altitude cold deserts, coral island paradises, and French heritage seaside towns.',
    states: [
      {
        stateSlug: 'ladakh',
        stateName: 'Ladakh',
        zoneSlug: 'union-territories',
        zoneName: 'Union Territories',
        capital: 'Leh',
        isUT: true,
        heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
        description: 'Land of High Passes — Cold desert valleys, Tibetan Buddhist gompas, and turquoise lakes.',
        cities: [
          {
            citySlug: 'leh',
            cityName: 'Leh & Nubra Valley',
            stateSlug: 'ladakh',
            stateName: 'Ladakh',
            zoneSlug: 'union-territories',
            zoneName: 'Union Territories',
            tagline: 'High Himalayan Monasteries & Pangong Tso Lake',
            image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
            facts: [
              'Leh sits at 3,500 meters altitude surrounded by snow-capped Stok Kangri range.',
              'Pangong Tso is an endorheic salt lake changing color from emerald green to deep azure blue.'
            ],
            highlights: ['Thiksey Monastery Prayer', 'Khardung La Pass Crossing', 'Pangong Lake Camping', 'Hunder Camel Safari'],
            bestSeason: 'May to September',
            experiences: ['Adventure', 'Spiritual', 'Nature']
          }
        ]
      },
      {
        stateSlug: 'puducherry',
        stateName: 'Puducherry',
        zoneSlug: 'union-territories',
        zoneName: 'Union Territories',
        capital: 'Puducherry',
        isUT: true,
        heroImage: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=800',
        description: 'French Riviera of the East — Pastel mustard villas, ocean promenades, and Auroville.',
        cities: [
          {
            citySlug: 'pondicherry',
            cityName: 'Pondicherry',
            stateSlug: 'puducherry',
            stateName: 'Puducherry',
            zoneSlug: 'union-territories',
            zoneName: 'Union Territories',
            tagline: 'French Colonial Promenade & Auroville Eco-Township',
            image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=800',
            facts: [
              'Preserves authentic French colonial architecture with street names written in French.',
              'Home to Auroville experimental township and Sri Aurobindo Ashram.'
            ],
            highlights: ['White Town French Villa Walk', 'Promenade Beach Walkway', 'Auroville Matrimandir', 'Baker Street French Pastries'],
            bestSeason: 'October to March',
            experiences: ['Heritage', 'Wellness', 'Gastronomy']
          }
        ]
      }
    ]
  }
];

// ==========================================
// 2. CORE EXPERIENCES MAPPING
// ==========================================

export const EXPERIENCES_DATA: ExperienceCategoryData[] = [
  {
    id: 'heritage',
    name: 'Heritage',
    slug: 'heritage',
    tagline: 'Walk Through Royal Forts, Ancient Rock Caves & UNESCO Monuments',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200',
    description: 'India is a living museum with 42 UNESCO World Heritage Sites, centuries-old Mughal fortresses, Rajput desert citadels, Chola granite monoliths, and ancient cave temples.',
    subThemes: ['UNESCO Monuments', 'Royal Palaces & Forts', 'Ancient Cave Art', 'Colonial Architecture', 'Heritage Haveli Walks'],
    keyLandmarks: [
      { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800' },
      { name: 'Amber Fort', location: 'Jaipur, Rajasthan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800' },
      { name: 'Meenakshi Temple', location: 'Madurai, Tamil Nadu', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Jaipur', stateName: 'Rajasthan', zoneSlug: 'west', stateSlug: 'rajasthan', citySlug: 'jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800', snippet: 'Explore hilltop Amber Fort and mirror palace halls.' },
      { cityName: 'Varanasi', stateName: 'Uttar Pradesh', zoneSlug: 'central', stateSlug: 'uttar-pradesh', citySlug: 'varanasi', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800', snippet: 'Walk through 3,000-year-old riverfront ghat alleys.' },
      { cityName: 'Darjeeling', stateName: 'West Bengal', zoneSlug: 'east', stateSlug: 'west-bengal', citySlug: 'darjeeling', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800', snippet: 'Ride the 1881 UNESCO Himalayan Toy Train.' }
    ],
    suggestedItineraries: [
      { title: 'Golden Triangle Royal Heritage Circuit', duration: '6 Days / 5 Nights', slug: 'golden-triangle-royal-heritage-circuit' },
      { title: 'Royal Rajasthan Forts & Desert Citadel Odyssey', duration: '10 Days / 9 Nights', slug: 'royal-rajasthan-forts-desert-citadel-odyssey' }
    ]
  },
  {
    id: 'spiritual',
    name: 'Spiritual',
    slug: 'spiritual',
    tagline: 'Experience Sacred Ganga Aarti, Himalayan Monasteries & Temple Trails',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200',
    description: 'Immerse your senses in centuries of living spiritual traditions, from oil-lamp riverfront chants along the Ganges to serene Tibetan Buddhist gompas and Dravidian temple festivals.',
    subThemes: ['Ganga Aarti Rituals', 'Temple Gopuram Walks', 'Monastic Prayer Ceremonies', 'Sufi Dargah Qawwalis', 'Yoga & Meditation'],
    keyLandmarks: [
      { name: 'Dashashwamedh Ghat', location: 'Varanasi', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800' },
      { name: 'Thiksey Gompa', location: 'Ladakh', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800' },
      { name: 'Golden Temple', location: 'Amritsar', image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Varanasi', stateName: 'Uttar Pradesh', zoneSlug: 'central', stateSlug: 'uttar-pradesh', citySlug: 'varanasi', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800', snippet: 'Witness evening brass lamp Aarti rituals on River Ganges.' },
      { cityName: 'Madurai', stateName: 'Tamil Nadu', zoneSlug: 'south', stateSlug: 'tamil-nadu', citySlug: 'madurai', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800', snippet: 'Tour 14 colorfully sculpted Dravidian gopuram towers.' },
      { cityName: 'Rishikesh', stateName: 'Uttarakhand', zoneSlug: 'north', stateSlug: 'uttarakhand', citySlug: 'rishikesh', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800', snippet: 'Practice yoga shalas overlooking Himalayan gorges.' }
    ],
    suggestedItineraries: [
      { title: 'Spiritual Trail of Varanasi Ghats & Sarnath', duration: '3 Days / 2 Nights', slug: 'spiritual-varanasi-ghats-sarnath' },
      { title: 'Grand South India Dravidian Temple & Heritage Trail', duration: '9 Days / 8 Nights', slug: 'grand-south-india-dravidian-temple-heritage-trail' }
    ]
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    slug: 'wildlife',
    tagline: 'Track Royal Bengal Tigers, One-Horned Rhinos & Asiatic Lions',
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200',
    description: 'India shelters over 75% of the world’s wild tiger population, sole Asiatic lion natural habitats, one-horned rhinos in tea floodplains, and pristine bird sanctuaries.',
    subThemes: ['Tiger Safaris', 'One-Horned Rhino Expeditions', 'Asiatic Lion Safaris', 'Elephant Sanctuaries', 'Mangrove Biospheres'],
    keyLandmarks: [
      { name: 'Kaziranga National Park', location: 'Assam', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800' },
      { name: 'Ranthambore Tiger Reserve', location: 'Rajasthan', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800' },
      { name: 'Jim Corbett Reserve', location: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Kaziranga', stateName: 'Assam', zoneSlug: 'north-east', stateSlug: 'assam', citySlug: 'kaziranga', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800', snippet: 'Spot Great One-Horned Rhinos in grasslands.' },
      { cityName: 'Munnar', stateName: 'Kerala', zoneSlug: 'south', stateSlug: 'kerala', citySlug: 'munnar', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800', snippet: 'Observe endangered Nilgiri Tahr mountain goats.' }
    ],
    suggestedItineraries: [
      { title: 'Ranthambore Royal Tiger Safari Expedition', duration: '4 Days / 3 Nights', slug: 'ranthambore-royal-tiger-safari' },
      { title: 'North East Living Root Bridges & Tea Valleys', duration: '8 Days / 7 Nights', slug: 'north-east-living-root-bridges-tea-valleys' }
    ]
  },
  {
    id: 'adventure',
    name: 'Adventure',
    slug: 'adventure',
    tagline: 'Conquer Himalayan Passes, Ganges Gorges & Desert Dunes',
    heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200',
    description: 'Thrill-seekers can embark on high-altitude Himalayan treks, white-water river rafting through mountain gorges, Thar desert dune bashing, and tropical scuba diving.',
    subThemes: ['White Water Rafting', 'High Altitude Trekking', 'Thar Desert Dune Bashing', 'Coral Atoll Scuba Diving', 'Paragliding & Ziplining'],
    keyLandmarks: [
      { name: 'Solang Valley', location: 'Manali, Himachal', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800' },
      { name: 'Marine Drive Rapids', location: 'Rishikesh', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800' },
      { name: 'Sam Sand Dunes', location: 'Jaisalmer', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Rishikesh', stateName: 'Uttarakhand', zoneSlug: 'north', stateSlug: 'uttarakhand', citySlug: 'rishikesh', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800', snippet: 'Challenge 16 km white water Ganges river rapids.' },
      { cityName: 'Leh & Nubra Valley', stateName: 'Ladakh', zoneSlug: 'union-territories', stateSlug: 'ladakh', citySlug: 'leh', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800', snippet: 'Cross Khardung La motorable pass at 17,580 ft.' }
    ],
    suggestedItineraries: [
      { title: 'Rishikesh Himalayan Rafting & Yoga Retreat', duration: '3 Days / 2 Nights', slug: 'rishikesh-himalayan-rafting-yoga' },
      { title: 'Ladakh High Pass & Monastery Explorer', duration: '6 Days / 5 Nights', slug: 'ladakh-high-pass-monastery-explorer' }
    ]
  },
  {
    id: 'gastronomy',
    name: 'Gastronomy',
    slug: 'gastronomy',
    tagline: 'Savor Royal Nawabi Biryanis, Street Food Bazaars & Spice Trails',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200',
    description: 'Explore India\'s rich culinary diversity, from Old Delhi street chaat and Awadhi dum biryanis to coastal Kerala coconut fish curry and Gujarati thalis.',
    subThemes: ['Old City Street Food Crawls', 'Royal Rajput & Nawabi Thalis', 'Spice Estate Plantations', 'Coastal Seafood Dining', 'Organic Farm Masterclasses'],
    keyLandmarks: [
      { name: 'Chandni Chowk', location: 'Old Delhi', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800' },
      { name: 'Fort Kochi Spice Market', location: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Kolkata', stateName: 'West Bengal', zoneSlug: 'east', stateSlug: 'west-bengal', citySlug: 'kolkata', image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800', snippet: 'Savor kathi rolls, rasgullas, and authentic fish curry.' },
      { cityName: 'Jaipur', stateName: 'Rajasthan', zoneSlug: 'west', stateSlug: 'rajasthan', citySlug: 'jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800', snippet: 'Feast on Dal Baati Churma and Ghewar sweets.' }
    ],
    suggestedItineraries: [
      { title: 'The Ultimate Golden Triangle & Kerala Backwaters Trail', duration: '14 Days / 13 Nights', slug: 'golden-triangle-kerala' }
    ]
  },
  {
    id: 'wellness',
    name: 'Wellness',
    slug: 'wellness',
    tagline: 'Rejuvenate with Authentic Ayurveda, Yoga Shalas & Spas',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200',
    description: 'Immerse yourself in authentic 5,000-year-old Panchakarma Ayurvedic treatments, sunrise yoga shalas overlooking Himalayan valleys, and Sattvic organic living.',
    subThemes: ['Ayurvedic Panchakarma Therapy', 'Himalayan Yoga Retreats', 'Oceanfront Sound Healing', 'Herbal Steam & Spas', 'Sattvic Organic Culinary'],
    keyLandmarks: [
      { name: 'Kovalam Ayurvedic Shala', location: 'Kerala', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800' },
      { name: 'Ananda in Himalayas', location: 'Rishikesh', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Alleppey', stateName: 'Kerala', zoneSlug: 'south', stateSlug: 'kerala', citySlug: 'alleppey', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800', snippet: 'Experience Abhyanga oil massage in lagoon resorts.' },
      { cityName: 'Puducherry Town', stateName: 'Puducherry', zoneSlug: 'union-territories', stateSlug: 'puducherry', citySlug: 'puducherry-town', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800', snippet: 'Meditate at Sri Aurobindo Ashram & Matrimandir.' }
    ],
    suggestedItineraries: [
      { title: 'Grand Malabar Coast Culinary & Wellness Voyage', duration: '14 Days / 13 Nights', slug: 'grand-malabar-coast-culinary-wellness-voyage' }
    ]
  },
  {
    id: 'rural',
    name: 'Rural',
    slug: 'rural',
    tagline: 'Discover Bio-Engineered Root Bridges, Homestays & Craft Enclaves',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200',
    description: 'Step off the beaten path to experience eco-villages, living root bridge pathways, organic farming, Bhunga clay huts, and handloom artisan workshops.',
    subThemes: ['Living Root Village Pathways', 'Tribal Eco-Homestays', 'Handloom Weaving Villages', 'Bhunga Clay Enclaves', 'Organic Farm-to-Table'],
    keyLandmarks: [
      { name: 'Mawlynnong Eco Village', location: 'Meghalaya', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800' },
      { name: 'Hodka Craft Village', location: 'Gujarat', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800' }
    ],
    featuredCities: [
      { cityName: 'Cherrapunji & Mawlynnong', stateName: 'Meghalaya', zoneSlug: 'north-east', stateSlug: 'meghalaya', citySlug: 'cherrapunji', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800', snippet: 'Trek across living root bridges in Asia\'s cleanest village.' },
      { cityName: 'Rann of Kutch', stateName: 'Gujarat', zoneSlug: 'west', stateSlug: 'gujarat', citySlug: 'rann-of-kutch', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800', snippet: 'Stay in traditional Bhunga mud huts in Hodka enclave.' }
    ],
    suggestedItineraries: [
      { title: 'North East Living Root Bridges & Tea Valleys', duration: '8 Days / 7 Nights', slug: 'north-east-living-root-bridges-tea-valleys' }
    ]
  }
];

// ==========================================
// 3. PLAN YOUR TRIP ESSENTIALS
// ==========================================

export const PLAN_YOUR_TRIP_HUB = {
  heroTitle: 'Plan Your Trip to Incredible India',
  heroSubtitle: 'Everything you need for a seamless journey: weather guides, currency tips, e-Visa instructions, helpline numbers, and handcrafted itineraries.',
  weatherSeasons: [
    { season: 'Winter (Oct - Mar)', temp: '10°C - 25°C', desc: 'Peak travel season pan-India. Ideal for Rajasthan deserts, Golden Triangle heritage, and Kerala backwaters.' },
    { season: 'Summer (Apr - Jun)', temp: '25°C - 42°C', desc: 'Best season for Himalayan escapes (Shimla, Manali, Ladakh) and tiger safaris in national parks.' },
    { season: 'Monsoon (Jul - Sep)', temp: '22°C - 32°C', desc: 'Lush green landscapes across Western Ghats, Kerala backwaters, and Meghalaya living root waterfalls.' }
  ],
  currencies: [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee', rateToINR: 1, flag: '🇮🇳' },
    { code: 'USD', symbol: '$', name: 'US Dollar', rateToINR: 83.5, flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', name: 'Euro', rateToINR: 90.2, flag: '🇪🇺' },
    { code: 'GBP', symbol: '£', name: 'British Pound', rateToINR: 106.1, flag: '🇬🇧' }
  ],
  languages: [
    { code: 'EN', name: 'English', native: 'English' },
    { code: 'HI', name: 'Hindi', native: 'हिंदी' },
    { code: 'FR', name: 'French', native: 'Français' },
    { code: 'DE', name: 'German', native: 'Deutsch' },
    { code: 'JA', name: 'Japanese', native: '日本語' },
    { code: 'ES', name: 'Spanish', native: 'Español' }
  ],
  essentials: [
    { title: '24/7 Official Tourist Helpline', detail: 'Toll-Free 1800-11-1363 or 1363 (Multilingual assistance for safety, directions & emergency support)' },
    { title: 'Official e-Tourist Visa', detail: 'Apply online 4-120 days prior to arrival at indianvisaonline.gov.in. 30-day, 1-year, or 5-year e-Visas available.' },
    { title: 'Authorized Tourist Info Desks', detail: 'Located at major international airports (Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Kochi) and railway junctions.' }
  ]
};
