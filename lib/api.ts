// Lightweight fetch-based API wrapper to avoid axios dependency
export async function request(method: string, url: string, opts?: RequestInit) {
  const res = await fetch(url, { method, ...opts });
  const contentType = res.headers.get('content-type') || '';
  let body: any = null;
  if (contentType.includes('application/json')) {
    body = await res.json().catch(() => null);
  } else {
    body = await res.text().catch(() => null);
  }

  if (!res.ok) {
    const message = (body && body.message) || body || res.statusText || 'Request failed';
    throw new Error(message);
  }

  return body;
}

const api = {
  get: async (url: string) => {
    const data = await request('GET', url);
    return { data };
  },
  post: async (url: string, body?: any) => {
    const data = await request('POST', url, {
      body: body ? JSON.stringify(body) : undefined,
      headers: { 'Content-Type': 'application/json' },
    });
    return { data };
  },
};

export default api;

