"use client";

import React, { useState } from 'react';
import { useCartContext } from '../context/CartContextProvider';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CartItem } from '../types/product'; 

export default function CartPage() {
  const { cartItems, updateCartItem, removeCartItem } = useCartContext();
  const [promoCode, setPromoCode] = useState('');
  const [shippingOption, setShippingOption] = useState('standard');
  const router = useRouter();

  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCost = shippingOption === 'express' ? 10 : 5;
    return (itemsTotal + shippingCost).toFixed(2);
  };

  const handleApplyPromo = () => {
    console.log(`Applying promo code: ${promoCode}`);
    // Promo code logic here
  };

  const handleOrder = () => {
    const orderId = '1'; // Replace with actual logic to generate/order ID
    router.push(`/order/${orderId}`);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/">Start shopping!</Link></p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => updateCartItem(item.id, Math.max(1, item.quantity - 1))}
                    className="bg-gray-300 text-gray-800 py-1 px-3 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateCartItem(item.id, item.quantity + 1)}
                    className="bg-gray-300 text-gray-800 py-1 px-3 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-6">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
          </div>
          <div className="mt-6">
            <label className="block mb-2">Shipping Options:</label>
            <select
              className="border p-2 rounded"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
            >
              <option value="standard">Standard Shipping - $5.00</option>
              <option value="express">Express Shipping - $10.00</option>
            </select>
          </div>
          <div className="mt-6">
            <label className="block mb-2">Promo Code:</label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter promo code"
            />
            <button
              onClick={handleApplyPromo}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Apply Promo
            </button>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleOrder}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Proceed to Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
