import { Metadata } from 'next';
import NewsFeed from '@/components/NewsFeed';
import { Bitcoin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-6xl">
        <div className="px-4 md:px-6">
          <header className="mb-10">
            <div className="text-left">
              <div className="title-main text-[40px] md:text-[80px]">
                Latest News
              </div>
              <div className="flex items-start gap-4">
                <div className="title-from text-[40px] md:text-[80px]">
                  From
                </div>
                <div className="hidden sm:block self-center mx-2 h-[2px] bg-white/70 w-28 md:w-36 lg:w-44" />
                <div className="flex items-center gap-2">
                  <div className="title-world text-[40px] md:text-[80px]">
                    The World
                  </div>
                  <div className="flex items-center w-[24px] h-[24px] rounded-full border-2 border-white self-start mt-2">
                    <Bitcoin
                      size={24}
                      strokeWidth={2.8}
                      className="text-white p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section>
            <NewsFeed />
          </section>
        </div>
      </main>
    </div>
  );
}
