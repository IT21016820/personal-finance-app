'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/dashimg3.jpg"
        alt="Login background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Login Form */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-md text-white rounded-xl shadow-lg p-10 w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Welcome Back
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-300 mt-6">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-300 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
