'use client';

import React, { useEffect } from 'react';
import useNewsStore from '@/stores/useNewsStore';
import FeaturedGrid from './FeaturedGrid';
import PostList from './PostList';
import SkeletonPost from './SkeletonPost';
import ErrorState from './ErrorState';

export default function NewsFeed() {
  const { items, loading, error, fetchNews } = useNewsStore();
  const skeletonKeys = React.useMemo(
    () =>
      Array.from(
        { length: 8 },
        (_, i) => `skeleton-${i}-${Math.random().toString(36).slice(2, 7)}`
      ),
    []
  );

  useEffect(() => {
    if (!items && !loading) {
      fetchNews();
    }
  }, [items, loading, fetchNews]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <SkeletonPost variant="large" />
          </div>
          <div className="grid grid-cols-2 gap-4 items-start">
            <SkeletonPost />
            <SkeletonPost />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skeletonKeys.map((k) => (
            <SkeletonPost key={k} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={() => fetchNews()} />;
  }

  return (
    <div>
      {items && items.length > 0 ? (
        <>
          <FeaturedGrid items={items} />
          <PostList items={items} />
        </>
      ) : (
        <p className="text-gray-400">No news available.</p>
      )}
    </div>
  );
}
