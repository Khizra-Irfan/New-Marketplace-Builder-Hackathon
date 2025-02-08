"use client";  // Ensures this component is rendered client-side

import React from "react";
import { CartProvider, useCart } from "./cartContext"; // Import from cartContext.tsx

const CartPage = () => {
  const { items } = useCart(); // Removed unused variables

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Page() {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
}
