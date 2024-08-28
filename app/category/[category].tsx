"use client"
import { useRouter } from 'next/router';
import { dummyProducts } from '../data/dummyData';
import Link from 'next/link';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;


  const filteredProducts = dummyProducts.filter(
    (product) => product.category.toLowerCase() === (category as string).toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center capitalize">{category}</h1>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/images/clothing.jpg"
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <p className="text-gray-500 mt-2">{product.description}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
