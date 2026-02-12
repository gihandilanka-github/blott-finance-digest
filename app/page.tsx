import { Metadata } from 'next';
import CheckButton from '@/components/CheckButton';
import { siteName } from '@/lib/config';

export const metadata: Metadata = {
  title: `${siteName} - Home`,
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <p className="mb-6 text-lg text-gray-700">
          Welcome to the Blott Finance Digest demo. Tailwind is set up and
          working.
        </p>
        <CheckButton />
      </div>
    </div>
  );
}
