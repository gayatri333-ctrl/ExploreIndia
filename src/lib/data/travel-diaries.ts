export interface TravelDiary {
  id: string;
  title: string;
  slug: string;
  state: string;
  stateSlug: string;
  region: 'North' | 'South' | 'East' | 'West' | 'North East' | 'Central';
  interest: 'Adventure' | 'Spiritual' | 'Heritage' | 'Nature' | 'Gastronomy' | 'Wildlife' | 'Wellness' | 'Arts';
  coverImage: string;
  excerpt: string;
  fullStory: string;
  author: string;
  readTime: string;
  publishedDate: string;
}

export const TRAVEL_DIARIES: TravelDiary[] = [
  {
    id: 'monsoon-magic-alleppey',
    title: 'Monsoon Magic in Alleppey\'s Emerald Backwaters',
    slug: 'monsoon-magic-alleppey-backwaters',
    state: 'Kerala',
    stateSlug: 'kerala',
    region: 'South',
    interest: 'Nature',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    excerpt: 'Drifting along palm-lined canals while monsoon rain taps gently on wooden houseboat roofs is pure meditation. As morning mist clears over Vembanad Lake, local villagers glide past in narrow wooden canoes delivering fresh coconut water.',
    fullStory: 'Drifting along palm-lined canals while monsoon rain taps gently on wooden houseboat roofs is pure meditation. As morning mist clears over Vembanad Lake, local villagers glide past in narrow wooden canoes delivering fresh coconut water. Life along Kerala\'s backwaters moves at a peaceful rhythmic cadence that invites you to unplug and breathe.',
    author: 'Ananya Sharma',
    readTime: '4 min read',
    publishedDate: 'Sep 02, 2026'
  },
  {
    id: 'tracking-tigers-ranthambore',
    title: 'Tracking Bengal Tigers at Dawn in Ranthambore',
    slug: 'tracking-tigers-dawn-ranthambore',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    region: 'West',
    interest: 'Wildlife',
    coverImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800',
    excerpt: 'The open safari gipsy engine cut out as our guide raised a silent hand toward a dry riverbed. Seconds later, a majestic tigress stepped out from behind ancient fort ruins, her amber coat catching the golden morning light.',
    fullStory: 'The open safari gipsy engine cut out as our guide raised a silent hand toward a dry riverbed. Seconds later, a majestic tigress stepped out from behind ancient fort ruins, her amber coat catching the golden morning light. Observing these apex predators in their natural sanctuary surrounded by 10th-century citadel walls is an unforgettable wilderness experience.',
    author: 'Vikramaditya Singh',
    readTime: '6 min read',
    publishedDate: 'Aug 28, 2026'
  },
  {
    id: 'evening-chants-varanasi',
    title: 'Sacred Evening Chants along Varanasi\'s Ghats',
    slug: 'sacred-evening-chants-varanasi-ghats',
    state: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    region: 'North',
    interest: 'Spiritual',
    coverImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
    excerpt: 'As dusk settles over Dashashwamedh Ghat, priests synchronize brass oil lamps to rhythmic Sanskrit chants echoing across the Ganges. Small marigold boats carrying flickering candles float down the river like a constellation of prayers.',
    fullStory: 'As dusk settles over Dashashwamedh Ghat, priests synchronize brass oil lamps to rhythmic Sanskrit chants echoing across the Ganges. Small marigold boats carrying flickering candles float down the river like a constellation of prayers. Experiencing the spiritual energy of this ancient city leaves a deep lasting impression on every traveler.',
    author: 'Priya Iyer',
    readTime: '5 min read',
    publishedDate: 'Aug 20, 2026'
  },
  {
    id: 'white-water-rafting-rishikesh',
    title: 'White Water Thrills down the Ganges Gorges',
    slug: 'white-water-thrills-rishikesh-gorges',
    state: 'Uttarakhand',
    stateSlug: 'uttarakhand',
    region: 'North',
    interest: 'Adventure',
    coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
    excerpt: 'Plunging through Grade IV rapids like Roller Coaster and Golf Course delivers an exhilarating rush surrounded by Himalayan cliffs. Camping on white sandy beaches under starry mountain skies makes Rishikesh the ultimate outdoor escape.',
    fullStory: 'Plunging through Grade IV rapids like Roller Coaster and Golf Course delivers an exhilarating rush surrounded by Himalayan cliffs. Camping on white sandy beaches under starry mountain skies makes Rishikesh the ultimate outdoor escape. From sunrise cliff jumping to evening riverside campfires, adventure awaits at every turn.',
    author: 'Rohan Mehta',
    readTime: '5 min read',
    publishedDate: 'Aug 15, 2026'
  },
  {
    id: 'stargazing-rann-kutch',
    title: 'Stargazing across the White Salt Marshes of Kutch',
    slug: 'stargazing-white-salt-marshes-kutch',
    state: 'Gujarat',
    stateSlug: 'gujarat',
    region: 'West',
    interest: 'Heritage',
    coverImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    excerpt: 'Under full moon nights, the endless white salt desert glows like a sheet of pure silver stretching into the horizon. Local Kutchi musicians play soul-stirring folk instruments beside bonfire circles while weavers demonstrate mirror-work embroidery.',
    fullStory: 'Under full moon nights, the endless white salt desert glows like a sheet of pure silver stretching into the horizon. Local Kutchi musicians play soul-stirring folk instruments beside bonfire circles while weavers demonstrate mirror-work embroidery. The desert carnival combines natural vastness with rich tribal craftsmanship.',
    author: 'Kavita Patel',
    readTime: '4 min read',
    publishedDate: 'Aug 10, 2026'
  },
  {
    id: 'culinary-trail-old-delhi',
    title: 'A Culinary Crawl through Old Delhi\'s Spice Lanes',
    slug: 'culinary-crawl-old-delhi-spice-lanes',
    state: 'Delhi',
    stateSlug: 'delhi',
    region: 'North',
    interest: 'Gastronomy',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800',
    excerpt: 'Navigating narrow cobblestone alleys filled with the aroma of sizzling parathas, slow-cooked Nihari, and hot jalebis is a sensory awakening. Centuries-old sweet shops still craft recipes perfected during imperial Mughal court reigns.',
    fullStory: 'Navigating narrow cobblestone alleys filled with the aroma of sizzling parathas, slow-cooked Nihari, and hot jalebis is a sensory awakening. Centuries-old sweet shops still craft recipes perfected during imperial Mughal court reigns. Every bite in Chandni Chowk carries layers of living culinary history.',
    author: 'Kabir Kapoor',
    readTime: '5 min read',
    publishedDate: 'Jul 29, 2026'
  },
  {
    id: 'boulder-ruins-hampi',
    title: 'Exploring the Lost Boulder Citadels of Hampi',
    slug: 'exploring-lost-boulder-citadels-hampi',
    state: 'Karnataka',
    stateSlug: 'karnataka',
    region: 'South',
    interest: 'Heritage',
    coverImage: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
    excerpt: 'Climbing Matanga Hill for sunrise reveals a surreal landscape of giant granite boulders shielding 15th-century Vijayanagara palace ruins. Coracle boat rides across the Tungabhadra river lead to hidden cave shrines and carved stone monolithic chariots.',
    fullStory: 'Climbing Matanga Hill for sunrise reveals a surreal landscape of giant granite boulders shielding 15th-century Vijayanagara palace ruins. Coracle boat rides across the Tungabhadra river lead to hidden cave shrines and carved stone monolithic chariots. Hampi feels like walking through an open-air historical fantasy realm.',
    author: 'Shruti Nair',
    readTime: '6 min read',
    publishedDate: 'Jul 22, 2026'
  },
  {
    id: 'tea-garden-mornings-darjeeling',
    title: 'Tea Garden Mornings under Mount Kanchenjunga',
    slug: 'tea-garden-mornings-darjeeling-kanchenjunga',
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    region: 'East',
    interest: 'Nature',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    excerpt: 'Waking up to first light illuminating the snow-capped peak of Kanchenjunga while sipping freshly brewed First Flush tea is magic. Walking through misty high-altitude estate trails reveals tea pluckers hand-harvesting delicate tea leaves.',
    fullStory: 'Waking up to first light illuminating the snow-capped peak of Kanchenjunga while sipping freshly brewed First Flush tea is magic. Walking through misty high-altitude estate trails reveals tea pluckers hand-harvesting delicate tea leaves. The crisp mountain air and colonial heritage heritage make Darjeeling unforgettable.',
    author: 'Debasis Banerjee',
    readTime: '4 min read',
    publishedDate: 'Jul 15, 2026'
  },
  {
    id: 'living-root-bridges-cherrapunji',
    title: 'Trekking to Living Root Bridges in Meghalaya',
    slug: 'trekking-living-root-bridges-meghalaya',
    state: 'Meghalaya',
    stateSlug: 'meghalaya',
    region: 'North East',
    interest: 'Adventure',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    excerpt: 'Descending thousands of stone steps through lush rainforests leads to double-decker bio-engineered root bridges grown across roaring mountain streams. Swimming in crystal-clear turquoise natural pools beneath cascading waterfalls rewards every step of the trek.',
    fullStory: 'Descending thousands of stone steps through lush rainforests leads to double-decker bio-engineered root bridges grown across roaring mountain streams. Swimming in crystal-clear turquoise natural pools beneath cascading waterfalls rewards every step of the trek. Meghalaya\'s untouched wilderness feels truly sacred.',
    author: 'Marthang Sangma',
    readTime: '6 min read',
    publishedDate: 'Jul 08, 2026'
  },
  {
    id: 'ayurvedic-wellness-kovalam',
    title: 'Rejuvenation & Ayurvedic Healing in Kovalam',
    slug: 'rejuvenation-ayurvedic-healing-kovalam',
    state: 'Kerala',
    stateSlug: 'kerala',
    region: 'South',
    interest: 'Wellness',
    coverImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    excerpt: 'Surrounding yourself with herbal oil therapies, oceanfront yoga sessions, and farm-to-table organic meals restores mind and body completely. Gentle cliffside breezes and Ayurvedic wellness traditions clear away modern stress.',
    fullStory: 'Surrounding yourself with herbal oil therapies, oceanfront yoga sessions, and farm-to-table organic meals restores mind and body completely. Gentle cliffside breezes and Ayurvedic wellness traditions clear away modern stress. It is a holistic retreat designed for deep personal renewal.',
    author: 'Dr. Sunita Varma',
    readTime: '4 min read',
    publishedDate: 'Jun 30, 2026'
  },
  {
    id: 'monastic-dances-ladakh',
    title: 'Monastic Masked Dances of Hemis Festival',
    slug: 'monastic-masked-dances-hemis-festival-ladakh',
    state: 'Ladakh',
    stateSlug: 'ladakh',
    region: 'North',
    interest: 'Arts',
    coverImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    excerpt: 'Lamas dressed in vibrant silk brocades and hand-carved wooden deity masks perform sacred Cham dances to long horns and cymbals. Set against stark desert mountain peaks, the courtyard of Hemis Monastery vibrates with ancient spiritual energy.',
    fullStory: 'Lamas dressed in vibrant silk brocades and hand-carved wooden deity masks perform sacred Cham dances to long horns and cymbals. Set against stark desert mountain peaks, the courtyard of Hemis Monastery vibrates with ancient spiritual energy. The sacred celebration symbolizes the triumph of good over evil.',
    author: 'Tenzin Norbu',
    readTime: '5 min read',
    publishedDate: 'Jun 21, 2026'
  },
  {
    id: 'pink-palace-sunsets-jaipur',
    title: 'Sunsets over Pink Terracotta Palaces in Jaipur',
    slug: 'sunsets-pink-terracotta-palaces-jaipur',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    region: 'West',
    interest: 'Heritage',
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    excerpt: 'Watching sunset cast a warm amber glow across Nahargarh Fort while looking down upon Jaipur\'s pink city grid is magical. Artisans in bustling bazaars still hand-block print textiles and forge enamel jewelry using royal guild techniques.',
    fullStory: 'Watching sunset cast a warm amber glow across Nahargarh Fort while looking down upon Jaipur\'s pink city grid is magical. Artisans in bustling bazaars still hand-block print textiles and forge enamel jewelry using royal guild techniques. Royal majesty lives on in every corner of the Pink City.',
    author: 'Rajeshwar Rathore',
    readTime: '4 min read',
    publishedDate: 'Jun 12, 2026'
  },
  {
    id: 'scuba-diving-andaman',
    title: 'Scuba Diving Pristine Coral Reefs in Havelock',
    slug: 'scuba-diving-pristine-coral-reefs-havelock',
    state: 'Andaman & Nicobar',
    stateSlug: 'andaman-nicobar',
    region: 'South',
    interest: 'Adventure',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    excerpt: 'Gliding underwater alongside sea turtles, rays, and vibrant clownfish in crystal-clear turquoise ocean waters reveals an untouched marine world. White powdery beaches lined with dense rainforests make Havelock Island an island paradise.',
    fullStory: 'Gliding underwater alongside sea turtles, rays, and vibrant clownfish in crystal-clear turquoise ocean waters reveals an untouched marine world. White powdery beaches lined with dense rainforests make Havelock Island an island paradise. The aquatic biodiversity is among the richest in Asia.',
    author: 'Capt. Neil D\'Souza',
    readTime: '5 min read',
    publishedDate: 'Jun 05, 2026'
  },
  {
    id: 'chasing-waterfalls-shillong',
    title: 'Chasing Misty Waterfalls in Pine-Covered Shillong',
    slug: 'chasing-misty-waterfalls-shillong-hills',
    state: 'Meghalaya',
    stateSlug: 'meghalaya',
    region: 'North East',
    interest: 'Nature',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    excerpt: 'Hiking pine-scented mountain trails to Elephant Falls and Nohkalikai Falls while clouds drift through green canyons is pure tranquility. Local cafes buzz with acoustic guitar performances, giving Shillong its famous music-loving spirit.',
    fullStory: 'Hiking pine-scented mountain trails to Elephant Falls and Nohkalikai Falls while clouds drift through green canyons is pure tranquility. Local cafes buzz with acoustic guitar performances, giving Shillong its famous music-loving spirit. Nature and melody blend seamlessly in the Scotland of the East.',
    author: 'Wanrilang Lyndem',
    readTime: '4 min read',
    publishedDate: 'May 28, 2026'
  },
  {
    id: 'shadow-puppet-masterclasses-tanjore',
    title: 'Heritage Shadow Puppet Traditions of Tanjore',
    slug: 'heritage-shadow-puppet-traditions-tanjore',
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    region: 'South',
    interest: 'Arts',
    coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    excerpt: 'Master artisans hand-carve translucent leather puppets depicting Ramayana legends, illuminated behind silk screen lamps. Attending village performances under banyan trees keeps centuries of Dravidian oral storytelling alive.',
    fullStory: 'Master artisans hand-carve translucent leather puppets depicting Ramayana legends, illuminated behind silk screen lamps. Attending village performances under banyan trees keeps centuries of Dravidian oral storytelling alive. It is a rare living folk tradition preserved with immense devotion.',
    author: 'Meenakshi Sundaram',
    readTime: '5 min read',
    publishedDate: 'May 19, 2026'
  },
  {
    id: 'street-food-safari-kolkata',
    title: 'Street Food Safari through Kolkata\'s Colonial Alleys',
    slug: 'street-food-safari-kolkata-colonial-alleys',
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    region: 'East',
    interest: 'Gastronomy',
    coverImage: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    excerpt: 'Tasting steaming Kathi rolls, spicy Phuchkas, and clay-pot Mishti Doi while riding yellow vintage cabs past heritage mansions is unforgettable. Kolkata\'s passion for food, art, and intellectual adda sessions fills every neighborhood street.',
    fullStory: 'Tasting steaming Kathi rolls, spicy Phuchkas, and clay-pot Mishti Doi while riding yellow vintage cabs past heritage mansions is unforgettable. Kolkata\'s passion for food, art, and intellectual adda sessions fills every neighborhood street. Culinary exploration here is a deeply emotional experience.',
    author: 'Aritra Sen',
    readTime: '4 min read',
    publishedDate: 'May 10, 2026'
  }
];
