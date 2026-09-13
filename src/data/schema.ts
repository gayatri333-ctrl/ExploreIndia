/**
 * Hierarchical Data Schema for ExploreIndia Travel Portal
 * Modeled after Incredible India Information Architecture
 */

export type Zone = 
  | 'North' 
  | 'East' 
  | 'West' 
  | 'South' 
  | 'Central' 
  | 'North-East' 
  | 'Union Territories';

export interface StateUT {
  id: string; // e.g. 'himachal-pradesh'
  name: string; // e.g. 'Himachal Pradesh'
  zone: Zone;
  capital: string; // e.g. 'Shimla'
  heroImage: string;
  description: string;
  isUT?: boolean;
}

export interface DestinationCity {
  id: string; // e.g. 'shimla'
  name: string; // e.g. 'Shimla'
  stateId: string; // e.g. 'himachal-pradesh'
  overview: string;
  bestTimeToVisit: string;
  quickFacts: string[];
  image?: string;
  tagline?: string;
  localCuisine?: string[];
  idealDuration?: string;
  howToReach?: {
    byAir?: string;
    byTrain?: string;
    byRoad?: string;
  };
}

export interface AttractionPOI {
  id: string; // e.g. 'viceregal-lodge'
  cityId: string; // e.g. 'shimla'
  name: string; // e.g. 'Viceregal Lodge (Rashtrapati Niwas)'
  category: 'Heritage' | 'Spiritual' | 'Wildlife' | 'Adventure' | 'Gastronomy' | 'Wellness' | 'Rural' | 'Arts' | 'Nature';
  images: string[];
  didYouKnowFacts: string[];
  historicalSignificance: string;
  mapCoords: {
    lat: number;
    lng: number;
  };
}

export interface FestivalEvent {
  id: string; // e.g. 'durga-puja-kolkata'
  name: string; // e.g. 'Kolkata Durga Puja Carnival'
  cityId: string; // e.g. 'kolkata'
  dates: string;
  category: string;
  description: string;
  image?: string;
}

export interface SearchResults {
  cities: DestinationCity[];
  attractions: AttractionPOI[];
  states: StateUT[];
  festivals: FestivalEvent[];
}
