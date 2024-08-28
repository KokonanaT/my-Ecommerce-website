"use client";

import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6 text-green-600">Success!</h1>
        <p className="mb-6 text-gray-700">Your purchase has been completed successfully.</p>
        <Link href="/" legacyBehavior>
          <a className="inline-block bg-blue-500 text-white py-3 px-6 rounded">
            Go Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
