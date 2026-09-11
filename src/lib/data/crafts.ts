export interface Handicraft {
  id: string;
  name: string;
  category: 'Textiles' | 'Ceramics' | 'Painting' | 'Woodcraft' | 'Embroidery' | 'Metalwork' | 'Folk Art' | 'Handicraft';
  state: string;
  stateSlug: string;
  image: string;
  description: string;
}

export const HANDICRAFTS: Handicraft[] = [
  {
    id: 'pashmina-shawls',
    name: 'Kashmir Pashmina Weaving',
    category: 'Textiles',
    state: 'Jammu & Kashmir',
    stateSlug: 'jammu-kashmir',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    description: 'Ultra-fine hand-spun cashmere wool shawls woven on traditional wooden handlooms.'
  },
  {
    id: 'blue-pottery',
    name: 'Jaipur Blue Pottery',
    category: 'Ceramics',
    state: 'Rajasthan',
    stateSlug: 'rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800',
    description: 'Distinctive Turko-Persian glazed pottery crafted from quartz stone powder instead of clay.'
  },
  {
    id: 'madhubani-painting',
    name: 'Madhubani Mithila Painting',
    category: 'Painting',
    state: 'Bihar',
    stateSlug: 'bihar',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    description: 'Ancient geometric folk art painted using twigs, fingers, and natural plant dyes.'
  },
  {
    id: 'kanchipuram-silk',
    name: 'Kanchipuram Pure Silk Sarees',
    category: 'Textiles',
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    description: 'Lustrous mulberry silk weaves integrated with heavy pure gold Zari thread borders.'
  },
  {
    id: 'tanjore-painting',
    name: 'Tanjore Gold Leaf Painting',
    category: 'Painting',
    state: 'Tamil Nadu',
    stateSlug: 'tamil-nadu',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    description: 'Classical South Indian icon painting embedded with glass beads and 22-karat gold foil.'
  },
  {
    id: 'channapatna-toys',
    name: 'Channapatna Wooden Lacquer Toys',
    category: 'Woodcraft',
    state: 'Karnataka',
    stateSlug: 'karnataka',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    description: 'Eco-friendly smooth wooden toys hand-turned on lathes and colored using vegetable dyes.'
  },
  {
    id: 'kalamkari-print',
    name: 'Andhra Kalamkari Hand Print',
    category: 'Textiles',
    state: 'Andhra Pradesh',
    stateSlug: 'andhra-pradesh',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
    description: 'Intricate pen-drawn and block-printed cotton textiles using natural organic dyes.'
  },
  {
    id: 'phulkari-embroidery',
    name: 'Punjab Phulkari Embroidery',
    category: 'Embroidery',
    state: 'Punjab',
    stateSlug: 'punjab',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800',
    description: 'Vibrant geometric floral embroidery hand-stitched on coarse cotton cloth with untwisted silk floss.'
  },
  {
    id: 'kutch-mirrorwork',
    name: 'Kutch Mirrorwork & Embroidery',
    category: 'Embroidery',
    state: 'Gujarat',
    stateSlug: 'gujarat',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    description: 'Intricate tribal needlework embedding small circular mirrors into vivid cotton fabrics.'
  },
  {
    id: 'dhokra-metalwork',
    name: 'Dhokra Lost-Wax Metal Casting',
    category: 'Metalwork',
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
    description: '4,000-year-old non-ferrous metal casting technique creating rustic brass figurines.'
  },
  {
    id: 'warli-art',
    name: 'Warli Tribal Wall Art',
    category: 'Folk Art',
    state: 'Maharashtra',
    stateSlug: 'maharashtra',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800',
    description: 'Minimalist tribal art using white rice paste shapes painted against red mud walls.'
  },
  {
    id: 'bankura-terracotta',
    name: 'Bankura Terracotta Horses',
    category: 'Handicraft',
    state: 'West Bengal',
    stateSlug: 'west-bengal',
    image: 'https://images.unsplash.com/photo-1570535310866-9b5dbd09439f?q=80&w=800',
    description: 'Distinctive clay horse sculptures with long symmetrical necks and stylized ears.'
  },
  {
    id: 'pattachitra-art',
    name: 'Odisha Pattachitra Scroll Art',
    category: 'Painting',
    state: 'Odisha',
    stateSlug: 'odisha',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    description: 'Detailed mythological scroll paintings executed on specially prepared treated cloth.'
  },
  {
    id: 'banarasi-brocade',
    name: 'Banarasi Zari Silk Brocade',
    category: 'Textiles',
    state: 'Uttar Pradesh',
    stateSlug: 'uttar-pradesh',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800',
    description: 'Imperial silk textiles woven with metallic gold and silver threads featuring floral motifs.'
  },
  {
    id: 'bidriware-metal',
    name: 'Bidriware Silver Metal Inlay',
    category: 'Metalwork',
    state: 'Karnataka',
    stateSlug: 'karnataka',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
    description: 'Darkened zinc and copper metalwork inlaid with thin pure silver wire wirework.'
  },
  {
    id: 'muga-silk',
    name: 'Assam Golden Muga Silk',
    category: 'Textiles',
    state: 'Assam',
    stateSlug: 'assam',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
    description: 'Rare wild golden silk exclusive to Assam, known for its natural shimmering metallic sheen.'
  },
  {
    id: 'papier-mache',
    name: 'Kashmiri Papier-Mâché Craft',
    category: 'Handicraft',
    state: 'Jammu & Kashmir',
    stateSlug: 'jammu-kashmir',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800',
    description: 'Delicate paper-pulp artifacts hand-painted with intricate miniature floral patterns.'
  }
];
