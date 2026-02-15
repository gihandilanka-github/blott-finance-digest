import { useState, useCallback } from 'react';
import api from '@/lib/api';
import type { NewsItem } from '@/types/news';

export default function useNewsStore() {
  const [items, setItems] = useState<NewsItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get<NewsItem[]>('/api/news');
      setItems(res.data);
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  return { items, loading, error, fetchNews };
}

