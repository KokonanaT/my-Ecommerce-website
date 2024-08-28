"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (formData.email === '' || formData.password === '') {
        setError('Please fill in all fields.');
        return;
      }

      console.log('Logging in with', formData);
      router.push('/'); 
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{' '}
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
