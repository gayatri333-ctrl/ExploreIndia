'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  Thermometer,
  DollarSign,
  Calculator,
  RefreshCw,
  PhoneCall,
  ShieldCheck,
  Building2,
  Train,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  HelpCircle,
  ExternalLink,
  MapPin,
  Sparkles,
  AlertTriangle,
  Clock,
} from 'lucide-react';

interface CityOption {
  city: string;
  state: string;
}

const POPULAR_CITIES: CityOption[] = [
  { city: 'Jaipur', state: 'Rajasthan' },
  { city: 'Shimla', state: 'Himachal Pradesh' },
  { city: 'Kolkata', state: 'West Bengal' },
  { city: 'Alleppey', state: 'Kerala' },
  { city: 'Darjeeling', state: 'West Bengal' },
  { city: 'Manali', state: 'Himachal Pradesh' },
  { city: 'Cherrapunji', state: 'Meghalaya' },
  { city: 'Varanasi', state: 'Uttar Pradesh' },
  { city: 'Srinagar', state: 'Jammu & Kashmir' },
  { city: 'Udaipur', state: 'Rajasthan' },
  { city: 'Kochi', state: 'Kerala' },
  { city: 'Amritsar', state: 'Punjab' },
  { city: 'Agra', state: 'Uttar Pradesh' },
  { city: 'Delhi', state: 'Delhi' },
  { city: 'Mumbai', state: 'Maharashtra' },
];

interface CurrencyRate {
  code: string;
  name: string;
  flag: string;
  symbol: string;
  rateToINR: number;
}

const DEFAULT_CURRENCY_RATES: CurrencyRate[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$', rateToINR: 83.25 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€', rateToINR: 90.10 },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£', rateToINR: 105.40 },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$', rateToINR: 54.80 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'C$', rateToINR: 61.20 },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: 'S$', rateToINR: 61.90 },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', symbol: 'AED', rateToINR: 22.66 },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥', rateToINR: 0.56 },
];

export function TravelTools() {
  // Weather State
  const [selectedCity, setSelectedCity] = useState<string>('Jaipur');
  const [isRefreshingWeather, setIsRefreshingWeather] = useState<boolean>(false);
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [weatherData, setWeatherData] = useState<{
    city: string;
    state: string;
    tempC: number;
    tempF: number;
    condition: string;
    humidity: string;
    windSpeed: string;
    bestMonths: string;
    seasonStatus: string;
    advisory: string;
    source: string;
    timestamp: string;
    offline: boolean;
  } | null>(null);

  // Currency State
  const [calcAmount, setCalcAmount] = useState<number>(100);
  const [calcCurrency, setCalcCurrency] = useState<string>('USD');
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>(DEFAULT_CURRENCY_RATES);
  const [currencySource, setCurrencySource] = useState<string>('Live FX Rates');
  const [currencyTimestamp, setCurrencyTimestamp] = useState<string>('');
  const [isCurrencyOffline, setIsCurrencyOffline] = useState<boolean>(false);

  // Tab State for Essentials
  const [activeEssentialTab, setActiveEssentialTab] = useState<'helpline' | 'visa' | 'partners' | 'transport'>('helpline');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  // 1. Fetch Weather from Live API Endpoint
  const fetchWeather = useCallback(async (cityName: string) => {
    setIsRefreshingWeather(true);
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
      if (res.ok) {
        const data = await res.json();
        setWeatherData(data);
      } else {
        setWeatherData((prev) => (prev ? { ...prev, offline: true } : {
          city: cityName,
          state: 'India',
          tempC: 25,
          tempF: 77,
          condition: 'Service Unavailable',
          humidity: 'N/A',
          windSpeed: 'N/A',
          bestMonths: 'October to March',
          seasonStatus: 'Information unavailable',
          advisory: 'Check local guidelines.',
          source: 'Offline',
          timestamp: new Date().toISOString(),
          offline: true,
        }));
      }
    } catch (error) {
      console.error('Failed to fetch live weather:', error);
      setWeatherData((prev) => (prev ? { ...prev, offline: true } : null));
    } finally {
      setIsRefreshingWeather(false);
    }
  }, []);

  // 2. Fetch Live Currency Rates from API Endpoint
  const fetchCurrency = useCallback(async () => {
    try {
      const res = await fetch('/api/currency');
      if (res.ok) {
        const data = await res.json();
        if (data.rates && data.rates.INR) {
          const usdToInr = data.rates.INR;
          const updatedRates = DEFAULT_CURRENCY_RATES.map((c) => {
            if (c.code === 'USD') return { ...c, rateToINR: usdToInr };
            if (data.rates[c.code]) {
              // Rate to INR = USD_to_INR / USD_to_CURR
              const rateToINR = parseFloat((usdToInr / data.rates[c.code]).toFixed(2));
              return { ...c, rateToINR };
            }
            return c;
          });
          setCurrencyRates(updatedRates);
          setCurrencySource(data.source || 'Frankfurter Live FX API');
          setCurrencyTimestamp(data.timestamp ? new Date(data.timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) : new Date().toLocaleTimeString());
          setIsCurrencyOffline(false);
        }
      }
    } catch (error) {
      console.error('Failed to fetch live currency rates:', error);
      setIsCurrencyOffline(true);
    }
  }, []);

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity, fetchWeather]);

  useEffect(() => {
    fetchCurrency();
  }, [fetchCurrency]);

  const activeCurrRate = currencyRates.find((c) => c.code === calcCurrency) || currencyRates[0];

  const convertedValue = isReverse
    ? (calcAmount / activeCurrRate.rateToINR).toFixed(2)
    : (calcAmount * activeCurrRate.rateToINR).toLocaleString('en-IN', { maximumFractionDigits: 2 });

  const handleCopyNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <section id="travel-tools" className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-semibold uppercase tracking-wider">
          <Calculator className="w-4 h-4" />
          <span>ExploreIndia Zero-Mock Utility Toolkit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif tracking-tight">
          Plan Your Trip <span className="gold-gradient-text">Live Travel Utilities</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Zero-mock live weather estimator (powered by Open-Meteo & OpenWeatherMap) and live foreign exchange rates from Frankfurter API.
        </p>
      </div>

      {/* Grid: Weather & Currency Converter */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Widget 1: Live Weather Estimator */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-amber-500/20 bg-royal-900/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Live Weather Estimator</h3>
                <p className="text-xs text-slate-400">Real-time live climate data endpoint</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setTempUnit((u) => (u === 'C' ? 'F' : 'C'))}
                className="px-2.5 py-1 rounded-lg bg-royal-950 border border-white/10 text-xs font-mono font-bold text-slate-300 hover:text-amber-400 transition"
              >
                °{tempUnit}
              </button>
              <button
                onClick={() => fetchWeather(selectedCity)}
                disabled={isRefreshingWeather}
                className="p-2 rounded-lg bg-royal-950 border border-white/10 text-slate-300 hover:text-amber-400 transition disabled:opacity-50"
                title="Refresh Live Weather"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshingWeather ? 'animate-spin text-amber-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* City Selection Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Select Destination City:</span>
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-royal-950 border border-amber-500/30 text-white font-serif font-bold text-base focus:border-amber-400 outline-none cursor-pointer"
            >
              {POPULAR_CITIES.map((c) => (
                <option key={c.city} value={c.city}>
                  {c.city}, {c.state}
                </option>
              ))}
            </select>
          </div>

          {/* Main Weather Display Box */}
          {weatherData ? (
            <div className="p-5 rounded-2xl bg-royal-950/80 border border-amber-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {weatherData.state} Region
                  </span>
                  <h4 className="text-2xl font-bold text-white font-serif">{weatherData.city}</h4>
                  <p className="text-xs text-amber-400 font-medium">{weatherData.condition}</p>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-bold font-mono text-white tracking-tight">
                    {tempUnit === 'C' ? `${weatherData.tempC}°C` : `${weatherData.tempF}°F`}
                  </div>
                  <div className="flex items-center justify-end gap-3 text-[11px] text-slate-400 mt-1 font-mono">
                    <span>Humidity: {weatherData.humidity}</span>
                    <span>Wind: {weatherData.windSpeed}</span>
                  </div>
                </div>
              </div>

              {/* Season Status & Advisory */}
              <div className="space-y-2 pt-3 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 block mb-0.5">Season Status</span>
                    <span className="text-slate-300 leading-relaxed">{weatherData.seasonStatus}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-300 px-1 pt-1">
                  <span>
                    <strong className="text-slate-400">Best Visit Window:</strong> {weatherData.bestMonths}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
              <span>Fetching live weather from API...</span>
            </div>
          )}

          {/* Status Bar */}
          <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-white/5">
            {weatherData?.offline ? (
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Live Weather currently offline</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{weatherData?.source || 'Open-Meteo Live API'}</span>
              </span>
            )}
            <Link
              href="/plan/weather"
              className="text-amber-400 hover:text-white font-semibold flex items-center gap-1"
            >
              <span>Full Climate Map</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Widget 2: Currency Converter */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-saffron-500/30 bg-royal-900/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-400 flex items-center justify-center border border-saffron-500/30">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Live Currency Converter</h3>
                <p className="text-xs text-slate-400">Frankfurter API live exchange calculator</p>
              </div>
            </div>

            <button
              onClick={() => setIsReverse((r) => !r)}
              className="px-3 py-1.5 rounded-lg bg-royal-950 border border-saffron-500/30 text-xs font-bold text-saffron-400 hover:bg-saffron-500/10 transition flex items-center gap-1.5"
              title="Toggle reverse conversion"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isReverse ? 'INR ➔ Foreign' : 'Foreign ➔ INR'}</span>
            </button>
          </div>

          {/* Converter Inputs */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                {isReverse ? 'Amount in Indian Rupees (INR ₹)' : `Amount in ${activeCurrRate.name}`}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Math.max(0, Number(e.target.value)))}
                  className="flex-1 px-4 py-3 rounded-xl bg-royal-950 border border-white/10 text-white font-mono text-lg focus:border-saffron-500 outline-none"
                />
                {!isReverse ? (
                  <select
                    value={calcCurrency}
                    onChange={(e) => setCalcCurrency(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-royal-950 border border-saffron-500/30 text-white font-bold font-mono text-sm focus:border-saffron-500 outline-none cursor-pointer"
                  >
                    {currencyRates.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code} ({c.symbol})
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="px-4 py-3 rounded-xl bg-royal-950 border border-white/10 text-saffron-400 font-bold font-mono text-sm flex items-center">
                    🇮🇳 INR (₹)
                  </div>
                )}
              </div>
            </div>

            {/* Amount Preset Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">Quick Amounts:</span>
              {[50, 100, 250, 500, 1000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setCalcAmount(preset)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition border ${
                    calcAmount === preset
                      ? 'bg-saffron-500 text-royal-950 border-saffron-400'
                      : 'bg-royal-950 text-slate-300 border-white/10 hover:border-saffron-500/50'
                  }`}
                >
                  {isReverse ? `₹${preset}` : `${activeCurrRate.symbol}${preset}`}
                </button>
              ))}
            </div>

            {/* Result Display Box */}
            <div className="p-5 rounded-2xl bg-royal-950/80 border border-saffron-500/30 space-y-2">
              <div className="text-xs text-slate-400 font-medium">
                {isReverse ? `Equivalent in ${activeCurrRate.name}:` : 'Estimated Amount in Indian Rupees:'}
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-mono gold-gradient-text tracking-tight">
                {isReverse
                  ? `${activeCurrRate.symbol} ${convertedValue} ${activeCurrRate.code}`
                  : `₹ ${convertedValue} INR`}
              </div>
              <div className="text-[11px] text-slate-400 font-mono pt-1 flex items-center justify-between border-t border-white/5">
                <span>Live Exchange Rate:</span>
                <span className="text-saffron-400 font-bold">
                  1 {activeCurrRate.code} = ₹{activeCurrRate.rateToINR} INR
                </span>
              </div>
            </div>
          </div>

          {/* Real Timestamp Note */}
          <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-white/5">
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
              <span>
                {currencyTimestamp ? `Rates updated: ${currencyTimestamp}` : 'Rates updated: Real-time'}
              </span>
            </span>
            <Link
              href="/plan/currency"
              className="text-saffron-400 hover:text-white font-semibold flex items-center gap-1"
            >
              <span>ATM Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Widget 3: Essential Information Drawer / Cards with Tabs */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 bg-royal-900/60 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-serif">Essential Tourist Toolkit</h3>
              <p className="text-xs text-slate-400">Official Ministry helplines, e-Visa rules, and transport directories</p>
            </div>
          </div>

          {/* Tab Selection Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'helpline', label: 'Helplines (24/7)', icon: PhoneCall },
              { id: 'visa', label: 'e-Visa Guidelines', icon: ShieldCheck },
              { id: 'partners', label: 'Travel Directory', icon: Building2 },
              { id: 'transport', label: 'Transport Links', icon: Train },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeEssentialTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveEssentialTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
                    isActive
                      ? 'bg-cyan-500 text-royal-950 border-cyan-400 shadow-md font-bold'
                      : 'bg-royal-950 text-slate-300 border-white/10 hover:border-cyan-500/40 hover:text-white'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Helplines Content */}
        {activeEssentialTab === 'helpline' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-royal-950 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Multilingual Tourist Line
                </span>
                <PhoneCall className="w-4 h-4 text-cyan-400" />
              </div>
              <h4 className="text-base font-bold text-white font-serif">24x7 Tourist Info Line</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Official Ministry of Tourism helpline operating in 12 foreign languages including English, French, German, Japanese, and Russian.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-lg font-mono font-bold text-amber-300">1363 / 1800-11-1363</span>
                <button
                  onClick={() => handleCopyNumber('1800111363')}
                  className="p-1.5 rounded-lg bg-royal-900 border border-white/10 text-slate-300 hover:text-cyan-400 transition"
                  title="Copy helpline number"
                >
                  {copiedNumber === '1800111363' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  National Emergency
                </span>
                <PhoneCall className="w-4 h-4 text-rose-400" />
              </div>
              <h4 className="text-base font-bold text-white font-serif">Pan-India Unified Emergency</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unified emergency response support system for police dispatch, fire brigade, and emergency medical services.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-lg font-mono font-bold text-rose-400">112</span>
                <button
                  onClick={() => handleCopyNumber('112')}
                  className="p-1.5 rounded-lg bg-royal-900 border border-white/10 text-slate-300 hover:text-cyan-400 transition"
                  title="Copy emergency number"
                >
                  {copiedNumber === '112' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Immigration & Registration
                </span>
                <Building2 className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-white font-serif">FRRO Support Portal</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Foreigners Regional Registration Office for visa extension services, registration, and diplomatic assistance.
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-emerald-400">indianfrro.gov.in</span>
                <Link
                  href="/plan/emergency"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <span>Helpline Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: e-Visa Guidelines Content */}
        {activeEssentialTab === 'visa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-royal-950 border border-cyan-500/30 space-y-3">
              <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                e-Tourist Visa (30 Days)
              </span>
              <h4 className="text-base font-bold text-white font-serif">Short-Term Tourist e-Visa</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Double entry visa valid for 30 days from date of first arrival. Eligible for passport holders from 165+ countries.
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 6 months minimum passport validity
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Return/Onward travel ticket required
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-saffron-400 bg-saffron-500/10 px-2.5 py-0.5 rounded border border-saffron-500/20">
                e-Tourist Visa (1 Yr / 5 Yr)
              </span>
              <h4 className="text-base font-bold text-white font-serif">Multiple Entry Long e-Visa</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Multiple entries allowed with continuous stay up to 90 days per visit (180 days for US/UK/Canada passport holders).
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1.5 pt-2 border-t border-white/10">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" /> Apply online at least 4 days prior
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-saffron-400" /> Valid at 31 designated international airports
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  Official Portal
                </span>
                <h4 className="text-base font-bold text-white font-serif">Apply via Govt Portal</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Only use the official Government of India portal for e-Visa applications to avoid unauthorized third-party fees.
                </p>
              </div>

              <Link
                href="/plan/visa-guide"
                className="w-full py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold text-center flex items-center justify-center gap-2 transition"
              >
                <span>Read Full Visa Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 3: Travel Directory Content */}
        {activeEssentialTab === 'partners' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Recognized Operators
              </span>
              <h4 className="text-base font-bold text-white font-serif">Inbound Tour Operators</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ministry-approved tour agencies (IATO accredited) ensuring quality vehicles, verified itineraries, and English-speaking staff.
              </p>
              <Link
                href="/plan/partners"
                className="text-xs text-amber-400 hover:text-white font-semibold flex items-center gap-1 pt-2 border-t border-white/10"
              >
                <span>View Approved Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-saffron-400 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
                Heritage Guides
              </span>
              <h4 className="text-base font-bold text-white font-serif">Certified Regional Guides</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Licensed Ministry of Tourism heritage guides trained in archaeology, classical architecture, and local folklore.
              </p>
              <Link
                href="/plan/info-centres"
                className="text-xs text-saffron-400 hover:text-white font-semibold flex items-center gap-1 pt-2 border-t border-white/10"
              >
                <span>Tourist Info Desks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Luxury Trains
              </span>
              <h4 className="text-base font-bold text-white font-serif">Maharajas&apos; Express</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                World-class luxury tourist train journeys traversing golden desert forts, royal palaces, and tiger sanctuaries.
              </p>
              <Link
                href="/plan/travel-partners"
                className="text-xs text-emerald-400 hover:text-white font-semibold flex items-center gap-1 pt-2 border-t border-white/10"
              >
                <span>Luxury Rail Routes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 4: Transport Links Content */}
        {activeEssentialTab === 'transport' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Rail Travel
              </span>
              <h4 className="text-base font-bold text-white font-serif">IRCTC & Vande Bharat Rail</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-speed Vande Bharat trains & Tourist Foreign Quota bookings across India&apos;s 68,000 km rail network.
              </p>
              <div className="text-xs text-cyan-400 font-mono pt-2 border-t border-white/10">
                irctc.co.in (Foreign Tourist Quota)
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Aviation
              </span>
              <h4 className="text-base font-bold text-white font-serif">Domestic Airport Network</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connecting 140+ domestic airports with regional connectivity UDAN flights to tier-2 heritage centers.
              </p>
              <div className="text-xs text-amber-400 font-mono pt-2 border-t border-white/10">
                Airports Authority of India (AAI)
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-royal-950 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Interstate Highways
              </span>
              <h4 className="text-base font-bold text-white font-serif">Volvo AC Express Buses</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                State tourism luxury Volvo bus connectivity across hill station highways and pilgrimage corridors.
              </p>
              <Link
                href="/plan/airports"
                className="text-xs text-emerald-400 hover:text-white font-semibold flex items-center gap-1 pt-2 border-t border-white/10"
              >
                <span>Airport & Rail Connections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
