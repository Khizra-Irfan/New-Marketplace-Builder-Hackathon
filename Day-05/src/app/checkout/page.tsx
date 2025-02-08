"use client"; // Mark this as a client component

import React from "react";
import { useCart } from "@/app/cart/cartContext"; // Import the custom hook

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage: React.FC = () => {
  const { items }: { items: CartItem[] } = useCart(); // Use the client-side cart context

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-700">£{item.price.toFixed(2)}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
