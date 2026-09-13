import { Zone, StateUT, DestinationCity, AttractionPOI, FestivalEvent, SearchResults } from './schema';
import { ZONES, STATES_DATA, CITIES_DATA, ATTRACTIONS_DATA, FESTIVALS_DATA } from './dataset';

/**
 * Retrieve all zone names defined in the portal
 */
export function getAllZones(): Zone[] {
  return ZONES;
}

/**
 * Retrieve all states and union territories
 */
export function getAllStates(): StateUT[] {
  return STATES_DATA;
}

/**
 * Retrieve states located in a specific zone
 */
export function getStatesByZone(zone: Zone): StateUT[] {
  return STATES_DATA.filter((s) => s.zone === zone);
}

/**
 * Retrieve state details by state ID (e.g., 'himachal-pradesh')
 */
export function getStateById(id: string): StateUT | undefined {
  return STATES_DATA.find((s) => s.id === id);
}

/**
 * Retrieve all destination cities in states belonging to a specific zone
 */
export function getDestinationsByZone(zone: Zone): DestinationCity[] {
  const stateIds = getStatesByZone(zone).map((s) => s.id);
  return CITIES_DATA.filter((city) => stateIds.includes(city.stateId));
}

/**
 * Retrieve destination cities in a specific state
 */
export function getCitiesByState(stateId: string): DestinationCity[] {
  return CITIES_DATA.filter((c) => c.stateId === stateId);
}

/**
 * Retrieve destination city by ID (e.g., 'shimla')
 */
export function getCityById(id: string): DestinationCity | undefined {
  return CITIES_DATA.find((c) => c.id === id);
}

/**
 * Retrieve all attractions across the country
 */
export function getAllAttractions(): AttractionPOI[] {
  return ATTRACTIONS_DATA;
}

/**
 * Retrieve attractions filtered by category (e.g., 'Heritage', 'Spiritual', 'Nature', etc.)
 */
export function getAttractionsByCategory(category: string): AttractionPOI[] {
  return ATTRACTIONS_DATA.filter(
    (attraction) => attraction.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Retrieve attractions in a specific city
 */
export function getAttractionsByCity(cityId: string): AttractionPOI[] {
  return ATTRACTIONS_DATA.filter((attraction) => attraction.cityId === cityId);
}

/**
 * Retrieve single attraction by ID
 */
export function getAttractionById(id: string): AttractionPOI | undefined {
  return ATTRACTIONS_DATA.find((a) => a.id === id);
}

/**
 * Retrieve all festivals/events
 */
export function getAllFestivals(): FestivalEvent[] {
  return FESTIVALS_DATA;
}

/**
 * Retrieve festivals/events hosted in a specific city
 */
export function getFestivalsByCity(cityId: string): FestivalEvent[] {
  return FESTIVALS_DATA.filter((f) => f.cityId === cityId);
}

/**
 * Global entity search across states, cities, attractions, and festivals
 */
export function searchEntities(query: string): SearchResults {
  const q = query.trim().toLowerCase();

  if (!q) {
    return {
      states: [],
      cities: [],
      attractions: [],
      festivals: [],
    };
  }

  const matchingStates = STATES_DATA.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.capital.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.zone.toLowerCase().includes(q)
  );

  const matchingCities = CITIES_DATA.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.overview.toLowerCase().includes(q) ||
      (c.tagline && c.tagline.toLowerCase().includes(q)) ||
      c.quickFacts.some((f) => f.toLowerCase().includes(q))
  );

  const matchingAttractions = ATTRACTIONS_DATA.filter(
    (a) =>
      a.name.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.historicalSignificance.toLowerCase().includes(q) ||
      a.didYouKnowFacts.some((f) => f.toLowerCase().includes(q))
  );

  const matchingFestivals = FESTIVALS_DATA.filter(
    (f) =>
      f.name.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      f.description.toLowerCase().includes(q)
  );

  return {
    states: matchingStates,
    cities: matchingCities,
    attractions: matchingAttractions,
    festivals: matchingFestivals,
  };
}
