/**
 * ExploreIndia Navigation & Mega Menu Data Structure
 * Populated with all 28 States + 8 Union Territories grouped into 6 Zones.
 */

export interface StateData {
  id: string;
  name: string;
  code: string;
  zone: 'North' | 'North East' | 'East' | 'Central' | 'West' | 'South';
  capital: string;
  isUT?: boolean;
  popularCities: Array<{ name: string; tag: string }>;
  description?: string;
}

export interface NationalParkData {
  id: string;
  name: string;
  state: string;
  zone: 'North' | 'North East' | 'East' | 'Central' | 'West' | 'South';
  highlight: string;
  keyAnimals: string[];
}

export interface ExperienceTopicData {
  id: string;
  name: string;
  subTopics: string[];
}

export const ZONES = [
  { id: 'North', name: 'North India', icon: 'Mountain', desc: 'Himalayas, Palaces & Heritage Trails' },
  { id: 'North East', name: 'North East', icon: 'Trees', desc: 'Monasteries, Tea Gardens & Living Root Bridges' },
  { id: 'East', name: 'East India', icon: 'Landmark', desc: 'Cultural Capitals, Mangroves & Temple Cities' },
  { id: 'Central', name: 'Central India', icon: 'Shield', desc: 'Tiger Reserves, Ancient Caves & Forts' },
  { id: 'West', name: 'West India', icon: 'Sun', desc: 'Deserts, Royal Palaces & Coastal Beaches' },
  { id: 'South', name: 'South India', icon: 'Palmtree', desc: 'Backwaters, Dravidian Temples & Spices' },
] as const;

export const STATES_BY_ZONE: Record<string, StateData[]> = {
  North: [
    { id: 'hp', name: 'Himachal Pradesh', code: 'HP', zone: 'North', capital: 'Shimla', popularCities: [{ name: 'Shimla', tag: 'Colonial Hill Capital' }, { name: 'Manali', tag: 'Solang Valley & Rohtang' }, { name: 'Dharamshala', tag: 'Dalai Lama Residence' }, { name: 'Spiti Valley', tag: 'High Cold Desert' }] },
    { id: 'pb', name: 'Punjab', code: 'PB', zone: 'North', capital: 'Chandigarh', popularCities: [{ name: 'Amritsar', tag: 'Golden Temple & Wagah Border' }, { name: 'Ludhiana', tag: 'Culinary & Textile Hub' }, { name: 'Patiala', tag: 'Qila Mubarak Royal Fort' }] },
    { id: 'hr', name: 'Haryana', code: 'HR', zone: 'North', capital: 'Chandigarh', popularCities: [{ name: 'Gurugram', tag: 'CyberHub & Kingdom of Dreams' }, { name: 'Kurukshetra', tag: 'Brahma Sarovar Heritage' }, { name: 'Panchkula', tag: 'Shivalik Foothills' }] },
    { id: 'uk', name: 'Uttarakhand', code: 'UK', zone: 'North', capital: 'Dehradun', popularCities: [{ name: 'Rishikesh', tag: 'Yoga Capital & River Rafting' }, { name: 'Nainital', tag: 'Lake District' }, { name: 'Haridwar', tag: 'Ganga Aarti' }, { name: 'Mussoorie', tag: 'Queen of Hills' }] },
    // UTs in North Zone
    { id: 'jk', name: 'Jammu & Kashmir', code: 'JK', zone: 'North', capital: 'Srinagar', isUT: true, popularCities: [{ name: 'Srinagar', tag: 'Dal Lake & Houseboats' }, { name: 'Gulmarg', tag: 'Gondola & Ski Slopes' }, { name: 'Pahalgam', tag: 'Betaab Valley' }, { name: 'Jammu', tag: 'City of Temples' }] },
    { id: 'ladakh', name: 'Ladakh', code: 'LA', zone: 'North', capital: 'Leh', isUT: true, popularCities: [{ name: 'Leh', tag: 'Monasteries & Forts' }, { name: 'Nubra Valley', tag: 'Double Humped Camels' }, { name: 'Pangong Tso', tag: 'High Altitude Lake' }] },
    { id: 'dl', name: 'Delhi (NCT)', code: 'DL', zone: 'North', capital: 'New Delhi', isUT: true, popularCities: [{ name: 'New Delhi', tag: 'Red Fort & Humayun Tomb' }, { name: 'Old Delhi', tag: 'Chandni Chowk Food Walks' }] },
    { id: 'ch', name: 'Chandigarh', code: 'CH', zone: 'North', capital: 'Chandigarh', isUT: true, popularCities: [{ name: 'Chandigarh City', tag: 'Rock Garden & Sukhna Lake' }] },
  ],
  'North East': [
    { id: 'as', name: 'Assam', code: 'AS', zone: 'North East', capital: 'Dispur', popularCities: [{ name: 'Guwahati', tag: 'Kamakhya Temple & Brahmaputra' }, { name: 'Kaziranga', tag: 'One-horned Rhino Safaris' }, { name: 'Majuli', tag: 'World\'s Largest River Island' }] },
    { id: 'ml', name: 'Meghalaya', code: 'ML', zone: 'North East', capital: 'Shillong', popularCities: [{ name: 'Shillong', tag: 'Scotland of the East' }, { name: 'Cherrapunji', tag: 'Living Root Bridges' }, { name: 'Dawki', tag: 'Crystal Clear River' }] },
    { id: 'sk', name: 'Sikkim', code: 'SK', zone: 'North East', capital: 'Gangtok', popularCities: [{ name: 'Gangtok', tag: 'Kanchenjunga Views & MG Marg' }, { name: 'Pelling', tag: 'Pemayangtse Monastery' }, { name: 'Lachung', tag: 'Yumthang Valley' }] },
    { id: 'ar', name: 'Arunachal Pradesh', code: 'AR', zone: 'North East', capital: 'Itanagar', popularCities: [{ name: 'Tawang', tag: 'Tawang Monastery & Sela Pass' }, { name: 'Ziro', tag: 'Music Festival & Tribal Trails' }] },
    { id: 'nl', name: 'Nagaland', code: 'NL', zone: 'North East', capital: 'Kohima', popularCities: [{ name: 'Kohima', tag: 'Hornbill Festival & War Memorial' }, { name: 'Dimapur', tag: 'Ancient Kachari Ruins' }] },
    { id: 'mn', name: 'Manipur', code: 'MN', zone: 'North East', capital: 'Imphal', popularCities: [{ name: 'Imphal', tag: 'Kangla Fort & Women Market' }, { name: 'Loktak Lake', tag: 'Floating Phumdi Island' }] },
    { id: 'tr', name: 'Tripura', code: 'TR', zone: 'North East', capital: 'Agartala', popularCities: [{ name: 'Agartala', tag: 'Ujjayanta Palace & Neermahal' }, { name: 'Unakoti', tag: 'Rock Carvings' }] },
    { id: 'mz', name: 'Mizoram', code: 'MZ', zone: 'North East', capital: 'Aizawl', popularCities: [{ name: 'Aizawl', tag: 'Durtlang Hills' }, { name: 'Reiek', tag: 'Traditional Mizo Village' }] },
  ],
  East: [
    { id: 'wb', name: 'West Bengal', code: 'WB', zone: 'East', capital: 'Kolkata', popularCities: [{ name: 'Kolkata', tag: 'Cultural Capital & Durga Puja' }, { name: 'Darjeeling', tag: 'Tiger Hill & Himalayan Railway' }, { name: 'Sundarbans', tag: 'Mangrove Tiger Reserve' }] },
    { id: 'or', name: 'Odisha', code: 'OR', zone: 'East', capital: 'Bhubaneswar', popularCities: [{ name: 'Puri', tag: 'Jagannath Rath Yatra & Beach' }, { name: 'Konark', tag: 'UNESCO Sun Temple' }, { name: 'Bhubaneswar', tag: 'Lingaraj Temple Architecture' }] },
    { id: 'br', name: 'Bihar', code: 'BR', zone: 'East', capital: 'Patna', popularCities: [{ name: 'Bodh Gaya', tag: 'Mahabodhi Enlightenment Site' }, { name: 'Nalanda', tag: 'Ancient University Ruins' }, { name: 'Rajgir', tag: 'Peace Stupa & Hot Springs' }] },
    { id: 'jh', name: 'Jharkhand', code: 'JH', zone: 'East', capital: 'Ranchi', popularCities: [{ name: 'Ranchi', tag: 'Hundru & Dassam Waterfalls' }, { name: 'Deoghar', tag: 'Baidyanath Dham' }, { name: 'Jamshedpur', tag: 'Jubilee Park & Steel Hub' }] },
  ],
  Central: [
    { id: 'mp', name: 'Madhya Pradesh', code: 'MP', zone: 'Central', capital: 'Bhopal', popularCities: [{ name: 'Khajuraho', tag: 'UNESCO Sculpted Temples' }, { name: 'Gwalior', tag: 'Royal Fort & Music Capital' }, { name: 'Ujjain', tag: 'Mahakaleshwar Kumbh Mela' }, { name: 'Indore', tag: 'Sarafa Food Night Market' }] },
    { id: 'up', name: 'Uttar Pradesh', code: 'UP', zone: 'Central', capital: 'Lucknow', popularCities: [{ name: 'Varanasi', tag: 'Ganga Ghats & Kashi Vishwanath' }, { name: 'Agra', tag: 'Taj Mahal & Agra Fort' }, { name: 'Ayodhya', tag: 'Ram Janmabhoomi Mandir' }, { name: 'Lucknow', tag: 'Nawabi Cuisine & Chikankari' }] },
    { id: 'cg', name: 'Chhattisgarh', code: 'CG', zone: 'Central', capital: 'Raipur', popularCities: [{ name: 'Jagdalpur', tag: 'Chitrakote Horseshoe Falls' }, { name: 'Raipur', tag: 'Tribal Craft Villages' }, { name: 'Sirpur', tag: 'Ancient Brick Temples' }] },
  ],
  West: [
    { id: 'rj', name: 'Rajasthan', code: 'RJ', zone: 'West', capital: 'Jaipur', popularCities: [{ name: 'Jaipur', tag: 'Pink City, Amber Fort & Hawa Mahal' }, { name: 'Udaipur', tag: 'Lake Pichola & Palaces' }, { name: 'Jaisalmer', tag: 'Sonar Fort & Thar Sand Dunes' }, { name: 'Pushkar', tag: 'Sacred Lake & International Mela' }] },
    { id: 'gj', name: 'Gujarat', code: 'GJ', zone: 'West', capital: 'Gandhinagar', popularCities: [{ name: 'Rann of Kutch', tag: 'White Salt Desert Festival' }, { name: 'Ahmedabad', tag: 'Heritage City & Kite Festival' }, { name: 'Gir', tag: 'Asiatic Lion Sanctuary' }] },
    { id: 'mh', name: 'Maharashtra', code: 'MH', zone: 'West', capital: 'Mumbai', popularCities: [{ name: 'Mumbai', tag: 'Gateway of India & Bollywood' }, { name: 'Pune', tag: 'Cultural Capital & Forts' }, { name: 'Sambhajinagar', tag: 'Ajanta & Ellora Caves' }, { name: 'Nashik', tag: 'Sula Vineyards & Kumbh' }] },
    { id: 'ga', name: 'Goa', code: 'GA', zone: 'West', capital: 'Panaji', popularCities: [{ name: 'Panaji', tag: 'Fontainhas Latin Quarter' }, { name: 'Calangute', tag: 'Beach Promenade & Nightlife' }, { name: 'Old Goa', tag: 'Portuguese Cathedrals' }] },
    // UT in West Zone
    { id: 'dd', name: 'Dadra & Nagar Haveli and Daman & Diu', code: 'DD', zone: 'West', capital: 'Daman', isUT: true, popularCities: [{ name: 'Daman', tag: 'Forts & Devka Beach' }, { name: 'Diu', tag: 'Portuguese Sea Fort & Caves' }, { name: 'Silvassa', tag: 'Tribal Cultural Museum' }] },
  ],
  South: [
    { id: 'kl', name: 'Kerala', code: 'KL', zone: 'South', capital: 'Thiruvananthapuram', popularCities: [{ name: 'Alleppey', tag: 'Backwater Houseboat Cruises' }, { name: 'Munnar', tag: 'Tea Plantations & Valleys' }, { name: 'Kochi', tag: 'Fort Kochi & Chinese Nets' }, { name: 'Wayanad', tag: 'Edakkal Caves' }] },
    { id: 'tn', name: 'Tamil Nadu', code: 'TN', zone: 'South', capital: 'Chennai', popularCities: [{ name: 'Madurai', tag: 'Meenakshi Temple Towers' }, { name: 'Mahabalipuram', tag: 'UNESCO Shore Temple' }, { name: 'Ooty', tag: 'Nilgiri Toy Train' }, { name: 'Rameswaram', tag: 'Pamban Sea Bridge' }] },
    { id: 'ka', name: 'Karnataka', code: 'KA', zone: 'South', capital: 'Bengaluru', popularCities: [{ name: 'Hampi', tag: 'Vijayanagara Stone Chariot' }, { name: 'Mysuru', tag: 'Palace Illumination' }, { name: 'Coorg', tag: 'Coffee Plantations' }, { name: 'Bengaluru', tag: 'Garden City & Tech Hub' }] },
    { id: 'ap', name: 'Andhra Pradesh', code: 'AP', zone: 'South', capital: 'Amaravati', popularCities: [{ name: 'Tirupati', tag: 'Tirumala Temple' }, { name: 'Visakhapatnam', tag: 'RK Beach & Araku Valley' }, { name: 'Vijayawada', tag: 'Kanaka Durga Temple' }] },
    { id: 'tg', name: 'Telangana', code: 'TG', zone: 'South', capital: 'Hyderabad', popularCities: [{ name: 'Hyderabad', tag: 'Charminar, Golconda & Biryani' }, { name: 'Warangal', tag: 'Thousand Pillar Temple' }] },
    // UTs in South Zone
    { id: 'py', name: 'Puducherry', code: 'PY', zone: 'South', capital: 'Puducherry', isUT: true, popularCities: [{ name: 'Puducherry Town', tag: 'French Quarter & Promenades' }, { name: 'Auroville', tag: 'Matrimandir Globe' }] },
    { id: 'an', name: 'Andaman & Nicobar Islands', code: 'AN', zone: 'South', capital: 'Port Blair', isUT: true, popularCities: [{ name: 'Port Blair', tag: 'Cellular Jail Heritage' }, { name: 'Havelock Island', tag: 'Radhanagar Beach Scuba' }, { name: 'Neil Island', tag: 'Natural Coral Bridges' }] },
    { id: 'ld', name: 'Lakshadweep', code: 'LD', zone: 'South', capital: 'Kavaratti', isUT: true, popularCities: [{ name: 'Kavaratti', tag: 'Lagoon Watersports' }, { name: 'Bangaram Island', tag: 'Coral Atolls & Snorkeling' }, { name: 'Agatti', tag: 'Airstrip Atoll & Kayaking' }] },
  ],
};

export const NATIONAL_PARKS: NationalParkData[] = [
  { id: 'corbett', name: 'Jim Corbett National Park', state: 'Uttarakhand', zone: 'North', highlight: 'Oldest national park in India, famous for Bengal tigers & Ramganga river.', keyAnimals: ['Bengal Tiger', 'Elephant', 'Gharial'] },
  { id: 'kaziranga', name: 'Kaziranga National Park', state: 'Assam', zone: 'North East', highlight: 'UNESCO World Heritage site home to 2/3rd of world\'s One-horned Rhinos.', keyAnimals: ['One-Horned Rhino', 'Wild Water Buffalo', 'Tiger'] },
  { id: 'ranthambore', name: 'Ranthambore National Park', state: 'Rajasthan', zone: 'West', highlight: 'Famous tiger sanctuary set amidst historic forts & lakes.', keyAnimals: ['Tiger', 'Leopard', 'Marsh Crocodile'] },
  { id: 'sundarbans', name: 'Sundarbans National Park', state: 'West Bengal', zone: 'East', highlight: 'Largest mangrove tiger reserve in the world, UNESCO Biosphere.', keyAnimals: ['Royal Bengal Tiger', 'Estuarine Crocodile', 'Spotted Deer'] },
  { id: 'bandhavgarh', name: 'Bandhavgarh National Park', state: 'Madhya Pradesh', zone: 'Central', highlight: 'Highest density of Royal Bengal Tigers in India.', keyAnimals: ['Tiger', 'Leopard', 'Sambar Deer'] },
  { id: 'periyar', name: 'Periyar Tiger Reserve', state: 'Kerala', zone: 'South', highlight: 'Scenic lake sanctuary nestled in Cardamom Hills.', keyAnimals: ['Asian Elephant', 'Tiger', 'Nilgiri Langur'] },
  { id: 'gir', name: 'Gir National Park', state: 'Gujarat', zone: 'West', highlight: 'Sole natural habitat of wild Asiatic Lions in the world.', keyAnimals: ['Asiatic Lion', 'Chousingha', 'Leopard'] },
  { id: 'kanha', name: 'Kanha Tiger Reserve', state: 'Madhya Pradesh', zone: 'Central', highlight: 'Inspiration for Rudyard Kipling\'s Jungle Book.', keyAnimals: ['Barasingha', 'Tiger', 'Indian Dhole'] },
];

export const EXPERIENCE_TOPICS: ExperienceTopicData[] = [
  { id: 'wildlife', name: 'Wildlife', subTopics: ['Tiger Safaris', 'Rhino Expeditions', 'Bird Watching Trails', 'Elephant Sanctuaries', 'Marine Reserves'] },
  { id: 'heritage', name: 'Heritage', subTopics: ['UNESCO World Heritage', 'Royal Forts & Palaces', 'Ancient Rock Caves', 'Colonial Architecture', 'Archaeological Walks'] },
  { id: 'spiritual', name: 'Spiritual', subTopics: ['Ganga Aarti Trails', 'Temple Circuit Walks', 'Monastic Retreats', 'Sufi Dargahs', 'Kumbh & Pilgrimages'] },
  { id: 'adventure', name: 'Adventure', subTopics: ['Himalayan Trekking', 'White Water Rafting', 'Desert Dune Bashing', 'Scuba & Snorkeling', 'Paragliding & Ziplining'] },
  { id: 'gastronomy', name: 'Gastronomy', subTopics: ['Street Food Crawls', 'Nawabi & Mughlai Feasts', 'Coastal Seafood Trails', 'Spice Plantation Dining', 'Vineyard Tours'] },
  { id: 'weddings', name: 'Weddings', subTopics: ['Palace Destination Weddings', 'Beachfront Celebrations', 'Royal Fort Vows', 'Heritage Haveli Gatherings'] },
  { id: 'wellness', name: 'Wellness', subTopics: ['Ayurvedic Retreats', 'Yoga & Meditation Centers', 'Himalayan Spa Resorts', 'Hot Springs Therapy'] },
  { id: 'arts', name: 'Arts', subTopics: ['Classical Dance Festivals', 'Handloom & Textile Crafts', 'Folk Music Gatherings', 'Puppetry & Pottery Workshops'] },
  { id: 'rural', name: 'Rural', subTopics: ['Village Eco-stays', 'Organic Farm Experiences', 'Tribal Culture Encounters', 'Craft Village Trails'] },
  { id: 'nature', name: 'Nature', subTopics: ['Living Root Bridges', 'Valley of Flowers', 'Backwater Houseboats', 'Salt Desert Star Gazing'] },
  { id: 'recreation', name: 'Recreation', subTopics: ['Luxury River Cruises', 'Heritage Train Trips', 'Golf Resorts', 'Shopping Fairs & Bazaars'] },
];

export const TRENDING_SEARCHES = [
  { label: 'Pushkar Camel Fair', type: 'Event', category: 'Shopping & Fairs' },
  { label: 'Durga Puja Kolkata', type: 'Festival', category: 'Cultural & Spiritual' },
  { label: 'Rann Utsav Kutch', type: 'Event', category: 'Food & Recreation' },
  { label: 'Kerala Backwaters', type: 'Destination', category: 'Nature & Wildlife' },
  { label: 'Varanasi Dev Deepavali', type: 'Festival', category: 'Cultural & Spiritual' },
  { label: 'Hornbill Festival Nagaland', type: 'Festival', category: 'Music & Arts' },
  { label: 'Jim Corbett Tiger Safari', type: 'National Park', category: 'Adventure & Sports' },
];

export const PLAN_YOUR_TRIP_LINKS = {
  practicalInfo: [
    { title: 'Weather & Seasons', desc: 'Monsoon, winter & summer travel advice', href: '/plan/weather' },
    { title: 'Tourism Info Centres', desc: 'Government authorized assistance counters', href: '/plan/info-centres' },
    { title: 'Emergency Numbers', desc: '24/7 Police, Medical, & Tourist Helpline 1363', href: '/plan/emergency' },
    { title: 'Public Holidays', desc: 'Gazetted pan-India festival & national holidays', href: '/plan/holidays' },
    { title: 'Currency Converter', desc: 'INR exchange rates & card acceptance guide', href: '/plan/currency' },
  ],
  travelGuide: [
    { title: 'Visa Guide (e-Tourist Visa)', desc: 'Online application step-by-step instructions', href: '/plan/visa-guide' },
    { title: 'Airport Info & Connectivity', desc: 'Major international hubs & Vande Bharat trains', href: '/plan/airports' },
    { title: 'Travel Partners & Operators', desc: 'Recognized tour guides & transport rentals', href: '/plan/partners' },
  ],
  exploreSite: [
    { title: 'Curated Itineraries', desc: '3-day, 7-day, & 14-day Golden Triangle & South trails', href: '/plan/itineraries' },
    { title: 'Festivals & Events', desc: 'Live calendar of monastic, tribal & state melas', href: '/festivals-events' },
    { title: 'Rural Tourism', desc: 'Authentic homestays & craft villages', href: '/plan/rural-tourism' },
    { title: 'Crafts & Textiles', desc: 'Pashmina, Silk, Terracotta & Tanjore masterworks', href: '/plan/crafts' },
    { title: 'People & Culture', desc: 'Customs, etiquette & culinary traditions', href: '/plan/culture' },
  ],
};
