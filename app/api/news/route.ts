import { NextResponse } from 'next/server';
import type { NewsItem } from '@/types/news';
import { FINNHUB_URL } from '@/lib/config';

async function fetchFinnhub(apiKey: string) {
  const url = `${FINNHUB_URL}&token=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Finnhub error: ${res.status} ${res.statusText} ${text}`);
  }
  const data = await res.json();
  return data;
}

export async function GET() {
  try {
    const apiKey = process.env.FINNHUB_API_KEY || process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Finnhub API key not configured' }, { status: 500 });
    }

    const raw = await fetchFinnhub(apiKey);

    const rawArr = Array.isArray(raw) ? (raw as Array<Record<string, unknown>>) : [];

    const items: NewsItem[] = rawArr.map((it) => {
      const rawId = it['id'];
      let idVal: string | number | undefined = undefined;
      if (typeof rawId === 'string' || typeof rawId === 'number') {
        idVal = rawId;
      } else if (typeof it['headline'] === 'string') {
        idVal = it['headline'];
      }

      const thumbnail = typeof it['image'] === 'string' ? it['image'] : '';
      const source = typeof it['source'] === 'string' ? it['source'] : '';
      const date =
        typeof it['datetime'] === 'number' ? new Date(it['datetime'] * 1000).toISOString() : '';
      const title = typeof it['headline'] === 'string' ? it['headline'] : '';
      const url = typeof it['url'] === 'string' ? it['url'] : '';
      return { id: idVal, thumbnail, source, date, title, url };
    });

    return NextResponse.json(items);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: message || 'Unknown error' }, { status: 502 });
  }
}

