import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 1. Fetch live rates from Frankfurter API
    const frankfurterRes = await fetch(
      'https://api.frankfurter.app/latest?from=USD&to=INR,EUR,GBP,AUD,CAD,SGD,AED,JPY',
      { next: { revalidate: 3600 } }
    );

    if (frankfurterRes.ok) {
      const data = await frankfurterRes.json();
      return NextResponse.json({
        base: 'USD',
        date: data.date,
        timestamp: new Date().toISOString(),
        rates: {
          USD: 1,
          INR: data.rates.INR || 83.25,
          EUR: data.rates.EUR || 0.92,
          GBP: data.rates.GBP || 0.79,
          AUD: data.rates.AUD || 1.51,
          CAD: data.rates.CAD || 1.36,
          SGD: data.rates.SGD || 1.34,
          AED: data.rates.AED || 3.67,
          JPY: data.rates.JPY || 155.2,
        },
        source: 'Frankfurter Live FX API',
        offline: false,
      });
    }

    // 2. Fallback to Open Exchange Rates API
    const openErRes = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 },
    });

    if (openErRes.ok) {
      const data = await openErRes.json();
      return NextResponse.json({
        base: 'USD',
        date: data.time_last_update_utc || new Date().toISOString(),
        timestamp: new Date().toISOString(),
        rates: {
          USD: 1,
          INR: data.rates?.INR || 83.25,
          EUR: data.rates?.EUR || 0.92,
          GBP: data.rates?.GBP || 0.79,
          AUD: data.rates?.AUD || 1.51,
          CAD: data.rates?.CAD || 1.36,
          SGD: data.rates?.SGD || 1.34,
          AED: data.rates?.AED || 3.67,
          JPY: data.rates?.JPY || 155.2,
        },
        source: 'Open Exchange Rates Live API',
        offline: false,
      });
    }

    return NextResponse.json(
      {
        offline: true,
        message: 'Live Currency rates currently offline',
      },
      { status: 503 }
    );
  } catch (error) {
    console.error('Currency API error:', error);
    return NextResponse.json(
      {
        offline: true,
        message: 'Live Currency rates currently offline',
      },
      { status: 503 }
    );
  }
}
