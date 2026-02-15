import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// import the GET handler directly
import { GET } from '../../app/api/news/route';

const sampleResponse = [
  {
    id: 1,
    headline: 'Test headline',
    image: 'https://example.com/img.jpg',
    source: 'TestSource',
    datetime: 1670000000,
    url: 'https://example.com/article',
  },
];

describe('API /api/news route', () => {
  let origFetch: any;

  beforeEach(() => {
    origFetch = globalThis.fetch;
    // ensure api key is present so route calls fetch
    process.env.FINNHUB_API_KEY = 'test-key';
    // mock fetch used by the route to call Finnhub
    globalThis.fetch = vi.fn(() =>
      Promise.resolve(new Response(JSON.stringify(sampleResponse), { status: 200 }))
    ) as any;
  });

  afterEach(() => {
    globalThis.fetch = origFetch;
    delete process.env.FINNHUB_API_KEY;
    vi.restoreAllMocks();
  });

  it('returns normalized news items', async () => {
    const res = await GET();
    // NextResponse supports json()
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]).toHaveProperty('title', 'Test headline');
    expect(data[0]).toHaveProperty('url', 'https://example.com/article');
  });
});

