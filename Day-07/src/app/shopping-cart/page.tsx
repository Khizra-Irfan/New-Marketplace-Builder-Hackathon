"use client";

import React, { useState } from "react";
import Image from "next/image";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      image: "/Product-image.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 85,
      image: "/Product Image1.png",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left text-gray-700">Your Shopping Cart</h1>
      
      {/* Table Header */}
<div className="grid grid-cols-3 text-gray-700 font-medium text-lg mt-10 border-b pb-2">
  <h1>Product</h1>
  <h1 className="text-center hidden sm:block">Quantity</h1>
  <h1 className="text-right">Total</h1>
</div>

{/* Product List */}
{products.map((product) => (
  <div key={product.id} className="grid grid-cols-3 items-center py-4 border-b">
    <div className="flex items-center space-x-4">
      <Image
        src={product.image}
        alt={product.name}
        width={80}
        height={80}
        className="hover:scale-105 transition-transform duration-300"
      />
      <div>
        <h1 className="text-lg font-medium">{product.name}</h1>
        
        {/* Adjust description for small screens */}
        <p className="text-sm text-gray-600 sm:text-base">{product.description}</p>
        
        <p className="text-base font-semibold">£{product.price}</p>
      </div>
    </div>
    
    {/* Quantity Controls */}
    <div className="justify-center items-center space-x-4 hidden sm:flex">
      <button onClick={() => updateQuantity(product.id, -1)} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">-</button>
      <span className="text-lg font-medium">{product.quantity}</span>
      <button onClick={() => updateQuantity(product.id, 1)} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">+</button>
    </div>
    
    {/* Total Price - Right-aligned for small screens */}
    <div className="text-right text-lg font-medium sm:text-right">{`£${product.price * product.quantity}`}</div>
  </div>
))}

{/* Subtotal Section */}
<div className="mt-10 text-center lg:text-right">
  <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
  <h1 className="inline text-xl sm:text-2xl font-semibold">£{totalPrice}</h1>
  <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
  <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white hover:bg-[#3d384e] transition">
    Go to checkout
  </button>
</div>
    </div>
  );
};

export default Cart;