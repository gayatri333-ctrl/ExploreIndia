import { NextRequest, NextResponse } from 'next/server';

interface CityGeo {
  name: string;
  state: string;
  lat: number;
  lng: number;
  bestMonths: string;
  seasonStatus: string;
  advisory: string;
}

const CITY_COORDINATES: Record<string, CityGeo> = {
  jaipur: {
    name: 'Jaipur',
    state: 'Rajasthan',
    lat: 26.9124,
    lng: 75.7873,
    bestMonths: 'October to March',
    seasonStatus: 'Peak Tourist Season — Pleasant daytime climate for fort explorations',
    advisory: 'Carry light woolens for evening desert breezes.',
  },
  shimla: {
    name: 'Shimla',
    state: 'Himachal Pradesh',
    lat: 31.1048,
    lng: 77.1734,
    bestMonths: 'March to June & Dec to Feb (Snowfall)',
    seasonStatus: 'Crisp Mountain Season — Ideal for colonial promenade walks',
    advisory: 'Heavy winter jackets recommended for Mall Road walks after sunset.',
  },
  kolkata: {
    name: 'Kolkata',
    state: 'West Bengal',
    lat: 22.5726,
    lng: 88.3639,
    bestMonths: 'October to March',
    seasonStatus: 'Festive Season — Perfect temperature for heritage street walks',
    advisory: 'Cotton wear recommended during midday excursions.',
  },
  alleppey: {
    name: 'Alleppey',
    state: 'Kerala',
    lat: 9.4981,
    lng: 76.3388,
    bestMonths: 'September to March',
    seasonStatus: 'Backwater Season — Optimal water levels for luxury houseboats',
    advisory: 'Sunscreen and light linen clothing suggested.',
  },
  darjeeling: {
    name: 'Darjeeling',
    state: 'West Bengal',
    lat: 27.041,
    lng: 88.2663,
    bestMonths: 'March to May & Oct to Dec',
    seasonStatus: 'Clear Kanchenjunga View Window — Great sunrise vistas',
    advisory: 'Layered thermal clothing essential at Tiger Hill sunrise.',
  },
  manali: {
    name: 'Manali',
    state: 'Himachal Pradesh',
    lat: 32.2432,
    lng: 77.1892,
    bestMonths: 'October to June',
    seasonStatus: 'Snow Adventure Window — Rohtang Pass open for winter sports',
    advisory: 'Thermal wear and waterproof snow boots recommended.',
  },
  cherrapunji: {
    name: 'Cherrapunji',
    state: 'Meghalaya',
    lat: 25.2702,
    lng: 91.7323,
    bestMonths: 'September to May',
    seasonStatus: 'Waterfall Peak — Living Root Bridges lush and green',
    advisory: 'Sturdy trekking shoes and waterproof rain jacket required.',
  },
  varanasi: {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    lat: 25.3176,
    lng: 82.9739,
    bestMonths: 'October to March',
    seasonStatus: 'Ganga Aarti Peak — Cool evenings for boat rides',
    advisory: 'Modest shoulder-covering clothing for temple visits.',
  },
  srinagar: {
    name: 'Srinagar',
    state: 'Jammu & Kashmir',
    lat: 34.0837,
    lng: 74.7973,
    bestMonths: 'April to October',
    seasonStatus: 'Shikara Season — Tulip gardens & Dal Lake houseboats',
    advisory: 'Pashmina shawls and warm jackets recommended.',
  },
  udaipur: {
    name: 'Udaipur',
    state: 'Rajasthan',
    lat: 24.5854,
    lng: 73.7125,
    bestMonths: 'October to March',
    seasonStatus: 'Lake Pichola Sunset Window — Pleasant boat cruises',
    advisory: 'Evening lake breezes require light shawls.',
  },
  kochi: {
    name: 'Kochi',
    state: 'Kerala',
    lat: 9.9312,
    lng: 76.2673,
    bestMonths: 'October to March',
    seasonStatus: 'Malabar Coastal Breeze — Fort Kochi walking tours',
    advisory: 'Comfortable footwear for cobblestone Jew Town walks.',
  },
  amritsar: {
    name: 'Amritsar',
    state: 'Punjab',
    lat: 31.634,
    lng: 74.8723,
    bestMonths: 'October to March',
    seasonStatus: 'Golden Temple Season — Pleasant temperature for Sarovar walks',
    advisory: 'Head coverings required inside Golden Temple premises.',
  },
  agra: {
    name: 'Agra',
    state: 'Uttar Pradesh',
    lat: 27.1767,
    lng: 78.0081,
    bestMonths: 'October to March',
    seasonStatus: 'Taj Sunrise Season — Clear morning vistas over Yamuna',
    advisory: 'Early morning arrival recommended to avoid afternoon heat.',
  },
  delhi: {
    name: 'Delhi',
    state: 'Delhi',
    lat: 28.6139,
    lng: 77.209,
    bestMonths: 'October to March',
    seasonStatus: 'Heritage Walks Window — Mild winters for monument tours',
    advisory: 'Layered clothing recommended for chilly winter evenings.',
  },
  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    lat: 19.076,
    lng: 72.8777,
    bestMonths: 'November to February',
    seasonStatus: 'Coastal Sea Breeze — Pleasant Marine Drive strolls',
    advisory: 'Light breathable cotton clothing suggested.',
  },
};

function getWeatherConditionText(code: number): string {
  if (code === 0) return 'Sunny & Clear';
  if (code >= 1 && code <= 3) return 'Partly Cloudy';
  if (code >= 45 && code <= 48) return 'Mist & Fog';
  if (code >= 51 && code <= 67) return 'Passing Rain Showers';
  if (code >= 71 && code <= 77) return 'Cold Snow & Frost';
  if (code >= 80 && code <= 82) return 'Heavy Rain Showers';
  if (code >= 95 && code <= 99) return 'Thunderstorms & Rain';
  return 'Pleasant Weather';
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cityQuery = searchParams.get('city')?.toLowerCase().trim() || 'jaipur';

  const geo = CITY_COORDINATES[cityQuery] || CITY_COORDINATES['jaipur'];
  const openWeatherKey = process.env.OPENWEATHERMAP_API_KEY;

  try {
    // 1. Try OpenWeatherMap API if key is present
    if (openWeatherKey) {
      const owRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lng}&units=metric&appid=${openWeatherKey}`,
        { next: { revalidate: 600 } }
      );

      if (owRes.ok) {
        const data = await owRes.json();
        return NextResponse.json({
          city: geo.name,
          state: geo.state,
          tempC: Math.round(data.main.temp),
          tempF: Math.round((data.main.temp * 9) / 5 + 32),
          condition: data.weather[0]?.main || 'Clear',
          humidity: `${data.main.humidity}%`,
          windSpeed: `${Math.round(data.wind.speed * 3.6)} km/h`,
          bestMonths: geo.bestMonths,
          seasonStatus: geo.seasonStatus,
          advisory: geo.advisory,
          source: 'OpenWeatherMap API',
          timestamp: new Date().toISOString(),
          offline: false,
        });
      }
    }

    // 2. Fallback to Open-Meteo Zero-Key Live API
    const omRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.lng}&current_weather=true&hourly=relativehumidity_2m`,
      { next: { revalidate: 600 } }
    );

    if (omRes.ok) {
      const data = await omRes.json();
      const current = data.current_weather;
      const humidityVal = data.hourly?.relativehumidity_2m?.[0] ?? 50;

      return NextResponse.json({
        city: geo.name,
        state: geo.state,
        tempC: Math.round(current.temperature),
        tempF: Math.round((current.temperature * 9) / 5 + 32),
        condition: getWeatherConditionText(current.weathercode),
        humidity: `${humidityVal}%`,
        windSpeed: `${Math.round(current.windspeed)} km/h`,
        bestMonths: geo.bestMonths,
        seasonStatus: geo.seasonStatus,
        advisory: geo.advisory,
        source: 'Open-Meteo Live API',
        timestamp: new Date().toISOString(),
        offline: false,
      });
    }

    // 3. Fallback if both external APIs are unreachable
    return NextResponse.json(
      {
        city: geo.name,
        state: geo.state,
        offline: true,
        message: 'Live Weather currently offline',
      },
      { status: 503 }
    );
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json(
      {
        city: geo.name,
        state: geo.state,
        offline: true,
        message: 'Live Weather currently offline',
      },
      { status: 503 }
    );
  }
}
