"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; 

export default function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    
    if (formData.username === 'admin' && formData.password === 'password') {
      
      Cookies.set('admin-token', 'valid-token', { path: '/' });
      
      
      router.push('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input
              className="w-full p-3 border rounded"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-3 border rounded"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
