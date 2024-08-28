"use client";
import React from 'react';
import { useCartContext } from '../context/CartContextProvider';
import { CartItem } from '../types/product'; 

export default function Cart() {
  const { cartItems, removeCartItem, updateCartItem } = useCartContext();

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="mb-4 border-b pb-4">
              <h3 className="text-xl">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateCartItem(item.id, Number(e.target.value))}
                className="border p-1"
              />
              <button
                onClick={() => removeCartItem(item.id)}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
