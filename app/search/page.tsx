"use client";

import { useState } from 'react';
import ProductCard from '../components/ProductCard'; // Import ProductCard

const dummyProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, image: '/images/laptop.jpg' },
  { id: 2, name: 'T-shirt', category: 'Clothing', price: 25, image: '/images/clothings3.webp' },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 100, image: '/images/electronics.jpg' },
  { id: 4, name: 'Shoes', category: 'Clothing', price: 80, image: '/images/heels.jpg' },
  { id: 5, name: 'Coffee Maker', category: 'Home Appliances', price: 150, image: '/images/cofee-maker.jpg' },
  { id: 6, name: 'Smartphone', category: 'Electronics', price: 800, image: '/images/smartphone.jpeg' },
  { id: 7, name: 'Blender', category: 'Home Appliances', price: 60, image: '/images/blender.jpg' },
  { id: 8, name: 'sneakers', category: 'Clothing', price: 45, image: '/images/sneakers.jpg' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState('name');
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  const handleSearch = () => {
    let filtered = dummyProducts
      .filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
      .filter(product => selectedCategory === '' || product.category === selectedCategory)
      .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    if (sortOption === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-400 to-purple-400 p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Search Products</h1>
      
      <input
        className="w-full max-w-md p-3 border rounded-lg mb-6 focus:outline-none focus:ring focus:ring-indigo-200"
        type="text"
        placeholder="Search by name or category..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="w-full max-w-md mb-6">
        <label className="block text-white mb-2">Sort By</label>
        <select
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-indigo-200"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>

        <label className="block text-white mb-2">Category</label>
        <select
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-indigo-200"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>

        <label className="block text-white mb-2">Price Range</label>
        <div className="flex justify-between items-center space-x-4">
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            type="number"
            min="0"
            max="2000"
            step="1"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          />
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            type="number"
            min="0"
            max="2000"
            step="1"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          />
        </div>
        <p className="text-center text-white mt-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-indigo-200 transition duration-200 mb-8"
      >
        Apply Filters
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p className="text-white">No products found.</p>
        )}
      </div>
    </div>
  );
}
