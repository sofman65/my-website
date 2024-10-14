// pages/thank-you.tsx

import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">Thank You for Signing Up!</h1>
      <p className="text-lg mb-6">Click the button below to download your free AI tool.</p>
      <Link
        href="https://spaceslam.io/download" // Link to your freebie
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Download Freebie
      </Link>
      <Link href="/" className="mt-4 text-blue-400 hover:underline">Go back to homepage</Link>
    </div>
  );
}
