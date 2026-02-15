import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import PostCard from '../../components/PostCard';
import type { NewsItem } from '../../types/news';

const sample: NewsItem = {
  id: 'test-1',
  thumbnail: '',
  source: 'UnitTest',
  date: new Date().toISOString(),
  title: 'Unit test title',
  url: 'https://example.com/article',
};

describe('PostCard (render via react-dom)', () => {
  it('renders title and links to provided url', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    act(() => {
      root.render(<PostCard item={sample} variant="small" />);
    });
    // allow any microtasks to complete
    await new Promise((r) => setTimeout(r, 0));
    const title = container.querySelector('h3');
    expect(title).not.toBeNull();
    expect(title?.textContent).toBe('Unit test title');
    const parentLink = title?.closest('a') as HTMLAnchorElement | null;
    expect(parentLink).not.toBeNull();
    expect(parentLink?.href).toBe(sample.url);
    root.unmount();
    container.remove();
  });

  it('shows Read Article label', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    act(() => {
      root.render(<PostCard item={sample} variant="small" />);
    });
    await new Promise((r) => setTimeout(r, 0));
    const readLabel = Array.from(container.querySelectorAll('span')).find((s) =>
      /read article/i.test(s.textContent || '')
    );
    expect(readLabel).toBeDefined();
    root.unmount();
    container.remove();
  });
});

