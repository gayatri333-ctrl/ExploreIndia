export interface RuralDestination {
  id: string;
  name: string;
  state: string;
  stateSlug: string;
  image: string;
  tagline: string;
}

export const RURAL_DESTINATIONS: RuralDestination[] = [
  {
    id: 'mawlynnong',
    name: 'Mawlynnong Village',
    state: 'Meghalaya',
    stateSlug: 'meghalaya',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11db3?q=80&w=800',
    tagline: 'Asia\'s cleanest eco-village featuring living root pathways, floral gardens, and bamboo skywalks.'
  },
  {
    id: 'kibber',
    name: 'Kibber High Village',
    state: 'Himachal Pradesh',
    stateSlug: 'himachal-pradesh',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
    tagline: 'High-altitude Himalayan hamlet surrounded by ancient monasteries, snow leopard reserves, and fossil beds.'
  },
  {
    id: 'khonoma',
    name: 'Khonoma Eco Village',
    state: 'Nagaland',
    stateSlug: 'nagaland',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    tagline: 'India\'s pioneer green village renowned for community forest conservation and terraced organic agriculture.'
  },
  {
    id: 'pochampally',
    name: 'Pochampally Ikat Village',
    state: 'Telangana',
    stateSlug: 'telangana',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    tagline: 'UNESCO-recognized silk weaving hamlet celebrated for traditional handloom Ikat tie-dye craftsmanship.'
  },
  {
    id: 'hodka',
    name: 'Hodka Craft Village',
    state: 'Gujarat',
    stateSlug: 'gujarat',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=800',
    tagline: 'Desert artisan enclave preserving traditional circular bhunga clay homes, leathercraft, and mirror embroidery.'
  },
  {
    id: 'ziro-valley',
    name: 'Ziro Valley Tribal Hamlet',
    state: 'Arunachal Pradesh',
    stateSlug: 'arunachal-pradesh',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800',
    tagline: 'Pristine pine-forested valley home to the Apatani community, organic paddy-fish farming, and music festivals.'
  }
];
