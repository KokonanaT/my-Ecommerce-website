"use client";

import Image from 'next/image';
import Link from 'next/link'; 
import { useCartContext } from '../context/CartContextProvider';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price }) => {
  const { addToCart } = useCartContext(); 

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-gray-600">${price}</p>

      <Link href={`/product/${id}`} passHref legacyBehavior>
        <a className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
          View Details
        </a>
      </Link>

      <button
        onClick={() => addToCart({ id, name, price, quantity: 1, image })} // Include image here
        className="mt-2 inline-block bg-green-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
